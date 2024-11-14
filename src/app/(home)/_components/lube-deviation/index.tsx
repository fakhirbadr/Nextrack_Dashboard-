"use client";
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplet } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LubricantDeviationWidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function LubeDeviationWidget({
  className,
  ...props
}: LubricantDeviationWidgetProps) {
  const [value, setValue] = React.useState(70);
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
      <Droplet className="absolute right-6 top-6 text-blue-500" size={32} />
      <div className="mb-2 flex items-start justify-between">
        <div>
          <span className="text-3xl font-bold">{value.toFixed(2)}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-base">Lube Normal Sample Deviation</div>

        <div className="flex justify-end">
          <span className="text-xs text-gray-400">100%</span>
        </div>
        <Progress value={value} />
      </div>
    </Card>
  );
}
