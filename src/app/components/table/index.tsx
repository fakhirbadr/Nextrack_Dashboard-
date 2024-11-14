import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export default function TableData({
  className,
  title,
  data,
}: {
  className?: string;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}) {
  return (
    <Card
      className={cn("flex h-full w-full flex-col rounded-lg p-4", className)}
    >
      <div className="mb-4">
        <h2 className="w-fit bg-gradient-to-r from-primary to-white/80 text-xl font-semibold text-transparent [-webkit-background-clip:text]">
          {title || "Labor Performance"}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto rounded-lg">
        <Table className="w-full border-collapse">
          <TableHeader className="bg-slate-900">
            <TableRow className="[&>*]:text-md [&>*]:font-bold [&>*]:text-white">
              {Object.keys(data[0]).map((key, index) => (
                <TableHead key={index} className="text-bold text-md text-white">
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="h-full overflow-y-auto">
            {data.map((row, index) => (
              <TableRow
                key={index}
                className="border-b border-slate-800 px-2 hover:bg-slate-900/50"
              >
                {Object.keys(row).map((key, index) => (
                  <TableCell key={index} className="text-white">
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
