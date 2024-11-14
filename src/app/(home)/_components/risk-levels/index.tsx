"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "desktop",
    color: "#7f7f7f1f",
  },
  mobile: {
    label: "mobile",
    color: "currentColor",
  },
} satisfies ChartConfig;

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

function RiskLevel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;
  return (
    <Card className={cn("flex flex-col gap-2 p-2", className)} {...props}>
      <CardHeader className="p-1 text-lg">
        <CardTitle className="w-fit bg-gradient-to-r from-primary to-white/80 text-transparent [-webkit-background-clip:text]">
          Risk Levels
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center p-0">
        <ChartContainer
          config={chartConfig}
          className="h-[200px] max-h-full w-full overflow-hidden" // Set a fixed height
        >
          <ResponsiveContainer width="w-full" height="100%">
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="desktop"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-desktop)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="mobile"
                fill="hsl(var(--primary))"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default RiskLevel;
