"use client";

import { ReactNode, useEffect, useState } from "react";
import PlantsContext from "./PlantsContext";
import { Plants } from "@/types";

async function getPlants(): Promise<Plants> {
  const response = await fetch("/api/plants");
  if (!response.ok) throw new Error("Failed to fetch plants");
  return response.json();
}

export default function PlantsProvider({ children }: { children: ReactNode }) {
  const [plants, setPlants] = useState<Plants | null>(null);

  useEffect(() => {
    getPlants().then(setPlants).catch(console.error);
  }, []);

  

  return (
    <PlantsContext.Provider value={plants}>{children}</PlantsContext.Provider>
  );
}
