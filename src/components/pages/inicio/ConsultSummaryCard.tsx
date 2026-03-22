import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"

import { LeadSummary } from "@/types/ui/lead";
import Link from "next/link";

const ConsultSummaryCard = ({ id, name, status }: LeadSummary) => {
  return (
    <Link
      href={`/consultas/${id}`}
      className={cn("w-full h-full group")}
    >
      <div
        className={cn("h-16 flex w-full items-center justify-between p-4 border-t group-hover:bg-slate-200")}
        key={id}
      >
        <p>{name}</p>
        {
          status === 'new' ? (
            <Badge
            className="bg-custom-primary"
            variant="default"
            >Nueva</Badge>
          ) : status === 'seen' ? (
            <Badge
            variant="ghost"
            >Vista</Badge>
          ) : status === 'replied' ? (
            <Badge
            className="bg-green-500"
            variant="default"
            >Respondida</Badge>
          ) : (
            <Badge
            variant="destructive"
            >Desechada</Badge>
          )

        }
      </div>
    </Link>
  );
};

export default ConsultSummaryCard;
