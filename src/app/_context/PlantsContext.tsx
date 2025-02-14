import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Plants } from "@/types";

interface PlantsContextType {
  plants: Plants | null;
  error: string | null;
}

const PlantsContext = createContext<PlantsContextType | undefined>(undefined);

export function PlantsProvider({ children }: { children: ReactNode }) {
  const [plants, setPlants] = useState<Plants | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch("http://localhost:4000/plants");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setPlants(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } 
    }
    fetchPlants();
  }, []);

  return (
    <PlantsContext.Provider value={{ plants, error }}>
      {children}
    </PlantsContext.Provider>
  );
}