"use client";
import Search from "./Search";
import Header from "./Header";
import { Plants, Plant } from "@/types";
import { useContext } from "react";
import PlantsContext from "../_context/PlantsContext";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const plants: Plants = useContext(PlantsContext);

  const pathname = usePathname();
  const isPlantPage = pathname.startsWith("/plants/");

  return (
    <div className="flex flex-col xl:flex-row xl:max-w-[100vw] xl:p-8 items-center justify-center xl:h-[100vh]">
      <div className="m-8 flex flex-col  items-center justify-center gap-2 xl:flex-[3] xl:max-w-[550px]">
        <Header />
        <Search plants={plants} />
      </div>
      {isPlantPage && (
        <div className="m-4 xl:max-w-[600px] xl:flex-[4]">{children}</div>
      )}
    </div>
  );
}
