import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import data from "@/app/data/mms.json";

const metrics = data.metrics;

type MMSControlSystemProps = React.HTMLAttributes<HTMLDivElement>;
export default function MMSControlSystem({
  className,
  ...props
}: MMSControlSystemProps) {
  return (
    <Card className={cn("flex flex-col space-y-4", className)} {...props}>
      <CardHeader className="px-0 py-0 text-sm md:text-lg">
        <CardTitle className="w-fit bg-gradient-to-r from-primary to-white/80 text-transparent [-webkit-background-clip:text]">
          État des Interventions Correctives
        </CardTitle>
      </CardHeader>

      <CardContent className="grid h-1 flex-1 auto-rows-auto grid-cols-2 grid-rows-3 gap-4 px-0 pb-0 md:grid-cols-2">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col justify-center rounded-lg bg-primary/5 p-2"
          >
            <div className="text-center">
              <div className="mb-2 text-lg font-bold text-primary md:text-2xl">
                {metric.value}
              </div>
              <div className="mb-1 text-sm">{metric.title}</div>
              {metric.subtitle && (
                <div className="text-xs text-gray-300">{metric.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
