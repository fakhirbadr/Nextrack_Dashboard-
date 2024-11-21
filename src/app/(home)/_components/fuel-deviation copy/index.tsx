"use client";
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Hourglass } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LubricantDeviationWidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function FuelDeviationWidget({
  className,
  ...props
}: LubricantDeviationWidgetProps) {
  const [, setValue] = React.useState(50);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + Math.random() * 20 - 10) % 101);
    }, 3_000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card
      className={cn("relative flex flex-col justify-center", className)}
      {...props}
    >
      <Hourglass className="absolute right-6 top-6 text-yellow-600" size={20} />
      <div className="mb-2 flex items-start justify-between">
        <div>
          <span className="text-3xl font-bold">43 MIN</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-base">Temps Moyen de Réparation (MTTR)</div>

        <div className="flex justify-end">
          <span className="text-xs text-gray-400">
            Le MTTR mesure le temps moyen nécessaire pour réparer un équipement
            ou une machine après une panne{" "}
            <label
              className="text-s w-fit bg-gradient-to-r from-primary to-white/80 font-bold text-transparent [-webkit-background-clip:text]"
              htmlFor=""
            >
              Target : 45 min
            </label>
          </span>
        </div>
        {/* <Progress value={value} /> */}
      </div>
    </Card>
  );
}
