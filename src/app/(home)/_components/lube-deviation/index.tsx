"use client";
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Syringe } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LubricantDeviationWidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function LubeDeviationWidget({
  className,
  ...props
}: LubricantDeviationWidgetProps) {
  const [, setValue] = React.useState(70);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 0);
    }, 3_000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card
      className={cn("relative flex flex-col justify-center", className)}
      {...props}
    >
      <Syringe className="absolute right-6 top-6 text-blue-500" size={32} />
      <div className="mb-2 flex items-start justify-between">
        <div>
          <span className="text-3xl font-bold">13M 600K</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-base">
          Le nombre total de vaccins préservés (COVID, PNI, insuline)
        </div>

        <div className="flex justify-end">
          <span className="text-xs text-gray-400">
            <span>Objective: 15M</span>
            <span className="mx-4">{"==>"}</span>
            <span>90.67%</span>
          </span>
        </div>
        <Progress value={90.67} />
      </div>
    </Card>
  );
}
