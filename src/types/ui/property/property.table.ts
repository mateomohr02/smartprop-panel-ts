import { Property } from "@/types/domain/property";

export type PropertyTable = Pick< Property,  'id' | 'title' | 'isActive' | 'isFeatured' | 'reach' | 'visualizations' | 'interactions' >