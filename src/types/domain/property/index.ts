export interface Property {
    id: string
    title: string
    description: string
    status: PropertyStatus
    propertyType: string

    price: number
    priceFIAT: Currency
    expenses: number
    expensesFIAT: Currency
    operation: PropertyOperation
    financing: string

    rooms: number
    bedrooms:number
    bathrooms: number
    garages:number
    surface:{
        covered: number
        total: number
    }
    services:{
        light:boolean
        water:boolean
        gas:boolean
    }
    condition:PropertyCondition
    age:number
    availabilityType: PropertyAvailabilityType
    availabilityDate: Date

    address: string
    mapLocation?: {
        lat: number
        lng: number
    }

    country: string
    province: string
    city:string
    neighborhood: string

    slug?:string

    multimedia?: {
        images?: string[]
        videos?: string[]
    }

    isActive: boolean
    isFeatured:boolean
    reach: number
    visualizations: number
    interactions: number

    createdAt: Date
    updatedAt: Date
}

export type PropertyStatus = "draft" | "published" | "archived"
export type Currency = "USD" | "BRL" | "ARS"
export type PropertyOperation = "sale" | "rent" | "short-term"
export type PropertyCondition = "new" | "like-new" | "good" | "to-renovate"
export type PropertyAvailabilityType = "inmediate" | "date"

