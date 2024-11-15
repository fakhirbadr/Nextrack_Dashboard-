import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React from "react";
import financialData from "@/app/data/financial-performance.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// const financialData = {
//   totalOperatingCosts: 1408,
//   totalTireManagementSpend: 55422,
//   maintenanceCostsPercentage: 9,
//   plannedMaintenancePercentage: 8,
//   outstandingWarrantyClaims: 13767,
// };

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FinancialPerformanceProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function FinancialPerformanceWidget({
  className,
  ...props
}: FinancialPerformanceProps) {
  return (
    <Dialog  >
      <DialogTrigger asChild>
        <Card
          className={cn(
            "flex flex-col bg-gradient-to-tr from-black/20 via-primary via-50% to-black/10 text-white",
            className,
          )}
          {...props}
        >
          <CardHeader className="py-0">
            <CardTitle className="text-lg font-semibold">
              {financialData.title}
            </CardTitle>
          </CardHeader>
          <ScrollArea>
            <CardContent className="flex flex-1 flex-col justify-between gap-2 overflow-auto py-2">
              {Object.entries(financialData.data).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between gap-4 border-b border-white/10 pb-1"
                >
                  <span className="text-base">{key}</span>
                  <span className="text-base font-semibold">{value}</span>
                </div>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
       </DialogTrigger>
       <DialogContent>
         <DialogHeader>
           <DialogTitle></DialogTitle>
           <DialogDescription></DialogDescription>
         </DialogHeader>
       </DialogContent>
     </Dialog>
  );
}
