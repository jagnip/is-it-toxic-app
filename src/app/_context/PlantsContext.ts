import { Plant, Plants } from "@/types";
import { createContext } from "react";

async function getPlants(): Promise<Plants> {
  const response = await fetch("http://localhost:3000/api/plants");
  if (!response.ok) throw new Error("Failed to fetch plants");
  return response.json();
}
const plants: Plants = await getPlants();

const PlantsContext = createContext<Plants>(plants);

export default PlantsContext;
