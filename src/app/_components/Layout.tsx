"use client";

import { usePathname } from "next/navigation";
import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isPlantPage = pathname.startsWith("/plants/");

  return (
    <div className="flex flex-col xl:flex-row xl:max-w-[100vw] xl:p-8 items-center justify-center xl:h-[100vh]">
      <div className="m-8 flex flex-col gap-2 xl:flex-[3] xl:max-w-[550px]">
        <h1 className="flex flex-col md:flex-row items-center justify-center">
          <span className="mb-[-24px] md:mb-0 mr-1">🪴</span>{" "}
          <span>Is it toxic to?</span>
        </h1>
        <Search />
      </div>

      {isPlantPage && (
        <div className="m-4 xl:max-w-[600px] xl:flex-[4]">{children}</div>
      )}
    </div>
  );
}
