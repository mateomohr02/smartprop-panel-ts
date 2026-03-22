import { Lead } from "@/types/domain/lead";

export type LeadSummary = Pick<Lead, 'id' | 'name' | 'status'>;