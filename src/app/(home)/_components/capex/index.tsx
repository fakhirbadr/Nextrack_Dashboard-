"use client";

import {
  Area,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import res from "@/app/data/capex.json";

const data = res.data;

const budget = res.budget;
const actual = res.actual;
const percentage = Math.round(((54000 - actual) / 54000) * 100);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CapexChartProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function CapexWidget({ className, ...props }: CapexChartProps) {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
        <CardTitle className="text-xl font-medium text-white/70">
          Suivi des Objectifs de Maintenance Préventive
        </CardTitle>
        <div className="text-right">
          <div className="text-2xl font-bold">
            {actual.toLocaleString()} PV{" "}
          </div>
          <div className="text-sm text-gray-400">
            {budget.toLocaleString()} PV Objectifs
            <span className="ml-2 text-yellow-500">-{percentage}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-1 flex-1 p-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: -10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "currentColor" }}
              className="text-xs text-gray-300"
            />
            <YAxis
              stroke="#666"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#aaaaaa" }}
              tickFormatter={(value) =>
                value === 0 ? "" : `${Math.round(value / 1000)}K`
              }
              className="text-xs md:text-sm"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0000007f",
                border: "none",
                borderRadius: "8px",
                backdropFilter: "blur(4px)",
              }}
              wrapperClassName="text-xs"
              itemStyle={{ color: "#fff" }}
              formatter={(value) => [
                `${(value as number).toLocaleString()} pv`,
                "Actual",
              ]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="actual"
              className="text-primary"
              stroke="currentColor"
              fill="url(#gradient)"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey={() => budget}
              stroke="#666"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
