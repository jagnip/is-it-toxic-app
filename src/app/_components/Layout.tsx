"use client";

import Search from "./Search";
import Header from "./Header";
import { useContext } from "react";
import PlantsContext from "../_context/PlantsContext";
import { usePathname } from "next/navigation";
import FadeInDownContainer from "../_animations/FadeInDownContainer";
import ScaleInContainer from "../_animations/ScaleInContainer";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isPlantPage = pathname.startsWith("/plants/");
  const plants = useContext(PlantsContext);

  return (
    <div className="flex flex-col xl:flex-row xl:max-w-[100vw] xl:p-8 items-center justify-center xl:h-[100vh]">
      <div className="m-8 flex flex-col items-center justify-center gap-2 xl:flex-[3] xl:max-w-[550px]">
        <FadeInDownContainer>
          <Header />
        </FadeInDownContainer>
        <ScaleInContainer>
          <Search plants={plants} />
        </ScaleInContainer>
      </div>

      {isPlantPage && (
        <ScaleInContainer>
          <div className="m-4 xl:max-w-[600px] xl:flex-[4]">{children}</div>
        </ScaleInContainer>
      )}
    </div>
  );
}
