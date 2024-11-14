"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie } from "recharts";
import { cn } from "@/lib/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import data from "@/app/data/warranty.json";
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface WarrantyClaimsWidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function WarrantyClaimsWidget({
  className,
  ...props
}: WarrantyClaimsWidgetProps) {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <div className="flex h-1 flex-1 items-center justify-between gap-4 py-0">
        <span className="w-min bg-gradient-to-r from-primary to-white/80 text-lg font-semibold text-transparent [-webkit-background-clip:text]">
          Warranty Claims
        </span>
        <div className="relative flex h-full w-1 flex-1 shrink-0 justify-center">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
      <CardContent className="flex flex-col gap-1 p-0">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
