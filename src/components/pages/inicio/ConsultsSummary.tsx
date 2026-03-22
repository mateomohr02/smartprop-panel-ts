import { cn } from "@/lib/utils"

import { LeadSummary } from "@/types/ui/lead"
import ConsultSummaryCard from "./ConsultSummaryCard"

const consults : LeadSummary[] = [
  {
    id: 'id1',
    name: "John Doe",
    status: "new",
  },
  {
    id: 'id2',
    name: "Jane Smith",
    status: "seen",
  },
  {
    id: 'id3',
    name: "Bob Johnson",
    status: "replied",
  },
  {
    id: 'id4',
    name: "Alice Brown",
    status: "dismissed",
  },
  {
    id: 'id5',
    name: "Tom Wilson",
    status: "new",
  },
  {
    id: 'id6',
    name: "Sara Lee",
    status: "seen",
  },
  {
    id: 'id7',
    name: "Mike Davis",
    status: "replied",
  },
]


const ConsultsSummary = () => {

  return (
    <div className={cn("bg-card h-full w-64 flex flex-col items-center shadow-sm border rounded-xl")}>
      <h3 className={cn("text-left w-full font-medium px-4 py-2")}>Consultas recientes</h3>
    {
      consults.map((consult) => (
        <ConsultSummaryCard key={consult.id} {...consult} />
      ))
    }
    

    </div>
  )
}

export default ConsultsSummary