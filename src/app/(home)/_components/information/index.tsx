import { Card, CardHeader, CardTitle } from "@/components/ui/card"; // Importation de CardHeader
import { cn } from "@/lib/utils";
import React from "react";
import res from "@/app/data/informtion.json";

function Information({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const data = res;
  return (
    <>
      <Card
        className={cn(
          "relative grid grid-cols-1 gap-4 overflow-y-auto !p-4 text-2xl text-white",
          className,
        )}
        {...props}
      >
        {/* Utilisation de CardHeader pour afficher le titre */}
        <CardHeader className="p-0 pb-2">
          <CardTitle className="bg-gradient-to-r from-primary to-white/80 text-lg text-transparent [-webkit-background-clip:text]">
            Facteurs de Panne
          </CardTitle>
        </CardHeader>

        {/* Affichage des données dynamiques */}
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => (
            <div key={item.title} className="text-sm md:text-base">
              <span className="inline-block w-8">{item.number}</span>-{" "}
              {item.title}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default Information;
