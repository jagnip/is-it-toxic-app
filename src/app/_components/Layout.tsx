"use client";

import Search from "./Search";
import Header from "./Header";
import { useContext } from "react";
import PlantsContext from "../_context/PlantsContext";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";
import PlantDetails from "./PlantDetails";
import { LOADING_PLANTS } from "../_constants/PLANTSTOLOAD";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isPlantPage = pathname.startsWith("/plants/");
  const plants = useContext(PlantsContext);
  const plant = LOADING_PLANTS["adam-and-eve arum maculatum"];

  return (
    <div className="flex flex-col xl:flex-row xl:max-w-[100vw] xl:p-8 items-center justify-center xl:h-[100vh]">
      <div className="m-8 flex flex-col items-center justify-center gap-2 xl:flex-[3] xl:max-w-[550px]">
        <Header />

        <Search plants={plants} />
      </div>

      {isPlantPage && (
        <div className="m-4 xl:max-w-[600px] xl:flex-[4]">{children}</div>
      )}
    </div>
  );
}
