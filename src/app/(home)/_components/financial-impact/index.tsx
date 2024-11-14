"use client";

import { Bar, BarChart, XAxis, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import res from "@/app/data/financial.json";
const data = res.data;

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FinancialImpactWidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function FinancialImpactWidget({
  className,
  ...props
}: FinancialImpactWidgetProps) {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between py-0">
        <CardTitle className="w-fit bg-gradient-to-r from-primary to-white/80 text-lg text-transparent [-webkit-background-clip:text]">
          {res.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative h-1 flex-1 p-0">
        <ChartContainer
          config={chartConfig}
          style={{ width: "100%", height: "100%" }}
        >
          <BarChart
            accessibilityLayer
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="range"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              fill="currentColor"
              className="text-primary"
              maxBarSize={36}
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
