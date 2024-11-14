"use client";

import { ResponsiveContainer, Bar, BarChart, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import data from "@/app/data/probability.json";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CapexChartProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function CapexWidget({ className, ...props }: CapexChartProps) {
  return (
    <Card className={cn("flex flex-col gap-2", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-1">
        <CardTitle className="w-fit bg-gradient-to-r from-primary to-white/80 text-lg font-semibold text-transparent [-webkit-background-clip:text]">
          Probability
        </CardTitle>
        <div className="relative h-14 w-20">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Bar dataKey="value" radius={6} maxBarSize={20}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardHeader>
      <CardContent className="relative h-1 flex-1 p-0">
        <div className="grid grid-cols-3 gap-4 text-center">
          {data.map((item) => (
            <div key={item.name} className="space-y-1">
              <div
                className="text-2xl font-bold text-white"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
              <div className="text-lg text-white">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
