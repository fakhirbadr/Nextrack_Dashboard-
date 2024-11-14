import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

function Emerging({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <div className="text-whited flex flex-col items-center justify-center rounded-lg bg-gradient-to-tr from-black/20 via-primary via-50% to-black/10 p-2 shadow-lg">
        <div className="text-4xl font-bold">15</div>
        <div className="text-center text-sm">Emerging Issues</div>
      </div>
      <div className="flex w-full items-center justify-evenly gap-4 overflow-auto text-sm md:text-base">
        <div className="space-y-2">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">2</span>
            <span>Facilities</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">-</span>
            <span>Procedural</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">2</span>
            <span>OEM</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">1</span>
            <span>Contractor</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">-</span>
            <span>Equipment</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">1</span>
            <span>HR</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">1</span>
            <span>Vendor</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">2</span>
            <span>MMA</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">6</span>
            <span>Supervisory</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default Emerging;
