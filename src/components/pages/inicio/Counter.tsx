import { cn } from "@/lib/utils"

interface CounterProps {
  quantity: number;
  label: string;
}

const Counter = ({ quantity, label }: CounterProps) => {
  return (
    <div className={cn("bg-card w-64 h-64 flex flex-col justify-between items-center shadow-sm border rounded-xl py-2 px-4 font-medium")}>
      <h3 className={cn("text-left w-full")}>{label}</h3>
      <div className={cn("w-full h-full mt-2 flex justify-center items-center text-7xl")}>
        <span className={cn("relative bottom-2")}>{quantity}</span>
      </div>
    </div>
  );
};

export default Counter;
