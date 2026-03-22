export interface Lead {
    id:string

    name:string,
    email:string,
    phone:string,
    message:string

    status: LeadStatus
    metadata?:Record<string, unknown>
    
    createdAt:Date
    updatedAt:Date
}

export type LeadStatus = "new" | "seen" | "replied" | "dismissed";