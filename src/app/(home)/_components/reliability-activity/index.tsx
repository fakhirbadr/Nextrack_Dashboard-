import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import stats from "@/app/data/reliability.json";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ReliabilityWidgetProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function ReliabilityWidget({
  className,
  ...props
}: ReliabilityWidgetProps) {
  return (
    <Card className={cn("flex flex-col gap-3", className)} {...props}>
      <CardHeader className="p-0 pb-2">
        <CardTitle className="bg-gradient-to-r from-primary to-white/80 text-lg text-transparent [-webkit-background-clip:text]">
          Reliability Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="flex h-1 flex-1 flex-col justify-evenly gap-2 px-0 py-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-16 text-xl font-bold">{stat.value}</div>
            <div className="text-sm leading-tight text-gray-300">
              {stat.label}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
