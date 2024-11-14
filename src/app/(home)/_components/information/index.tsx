import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import React from "react";
import res from "@/app/data/informtion.json";

function Information({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const data = res;
  return (
    <Card
      className={cn(
        "relative grid grid-cols-2 items-center gap-2 overflow-y-auto !p-4 text-2xl text-white",
        className,
      )}
      {...props}
    >
      {data.map((item) => (
        <div key={item.title} className="text-sm md:text-base">
          <span className="inline-block w-8">{item.number}</span>- {item.title}
        </div>
      ))}
      <div className="absolute bottom-4 right-4 w-fit text-base text-primary">
        <span className="flex gap-2">
          Safety <ShieldCheck size={24} />
        </span>
        <span> performance</span>
      </div>
    </Card>
  );
}

export default Information;
