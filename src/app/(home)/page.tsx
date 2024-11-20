import Emerging from "./_components/emerging";
import LaborData from "../data/labor.json";
import PerformanceData from "../data/performance.json";
import CapexWidget from "./_components/capex";
import OpexWidget from "./_components/opex";
import FinancialPerformanceWidget from "./financial-performance";
import MMSControlSystem from "./_components/mms-control-system";
import WarrantyClaimsWidget from "./_components/warranty-claims";
import LubeDeviationWidget from "./_components/lube-deviation";
import FuelDeviationWidget from "./_components/fuel-deviation copy";
import TableData from "../components/table";
import ReliabilityWidget from "./_components/reliability-activity";
import Probability from "./_components/probability";
import FinancialImpactWidget from "./_components/financial-impact";
import Information from "./_components/information";
import RiskLevel from "./_components/risk-levels";

export default function Home() {
  return (
    <main className="hide-scrollbar grid auto-rows-[3.3rem] grid-cols-[repeat(2,1fr)] gap-2 p-4 text-4xl lg:grid-cols-[repeat(24,1fr)] [&>*]:bg-card/80 [&>*]:p-4 [&>*]:backdrop-blur">
      <CapexWidget className="col-span-2 row-span-5 !bg-transparent lg:col-span-8 lg:row-span-4" />

      <OpexWidget className="col-span-2 row-span-5 !bg-transparent lg:col-span-8 lg:row-span-4" />
      <FinancialPerformanceWidget className="col-span-2 row-span-5 lg:col-span-8 lg:row-span-4" />
      <TableData
        className="col-span-2 row-span-5 lg:col-span-11 lg:row-span-5"
        data={PerformanceData}
        title="Suivi des Défaillances et Réparations"
      />
      <MMSControlSystem className="col-span-2 row-span-5 lg:col-span-5 lg:row-span-8" />
      <WarrantyClaimsWidget className="col-span-2 row-span-5 lg:col-span-4 lg:row-span-4" />
      <LubeDeviationWidget className="col-span-2 row-span-3 lg:col-span-4 lg:row-span-4" />
      <ReliabilityWidget className="col-span-2 row-span-5 lg:col-span-4 lg:row-span-4" />
      <FuelDeviationWidget className="col-span-2 row-span-3 lg:col-span-4 lg:row-span-4" />
      <RiskLevel className="col-span-2 row-span-3 lg:col-span-4 lg:row-span-3" />
      <FinancialImpactWidget className="col-span-2 row-span-2 lg:col-span-7 lg:row-span-3" />
      <TableData
        className="col-span-2 row-span-3 lg:row-span-5 lg:[grid-column:span_12]"
        data={LaborData}
        title="Indicateurs Clés de Performance"
      />
      <Probability className="col-span-2 row-span-3 lg:col-span-4 lg:row-span-3" />
      <Information className="col-span-2 row-span-4 lg:col-span-8 lg:row-span-3" />
      <Emerging className="col-span-2 row-span-2 flex items-stretch rounded-lg !p-0 text-white lg:col-span-12 lg:row-span-2" />
    </main>
  );
}
