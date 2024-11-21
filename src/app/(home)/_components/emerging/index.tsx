import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

function Emerging({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <div className="text-whited flex flex-col items-center justify-center rounded-lg bg-gradient-to-tr from-black/20 via-primary via-50% to-black/10 p-2 shadow-lg">
        <div className="text-xl font-bold">Réfrigérateur</div>
        <div className="text-center text-sm">Indicateurs de Pannes</div>
      </div>
      <div className="flex w-full items-center justify-evenly gap-4 overflow-auto overflow-x-auto p-2 text-sm md:text-base [&>*]:min-w-[14rem]">
        <Card className="space-y-2 p-1 px-2">
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">5% - 15%</span>
            <span>compresseur</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">3% - 10%</span>
            <span>Condenseur</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">3% - 8%</span>
            <span>Evaporateur </span>
          </div>
        </Card>

        <Card className="space-y-2 p-1">
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">2% - 5%</span>
            <span>Thermostat</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">3% - 7%</span>
            <span>Ventilateur </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">1% - 3%</span>
            <span>Filtre à air </span>
          </div>
        </Card>

        <Card className="!min-w-[24rem] space-y-2 p-1 px-2">
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">2% - 6%</span>
            <span>Panneau de contrôle électronique </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">5% - 10%</span>
            <span>Joints de porte </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-gray-400">1% - 2%</span>
            <span>Éclairage interne </span>
          </div>
        </Card>
      </div>
    </Card>
  );
}
export default Emerging;
