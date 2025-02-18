import { Plants } from "@/types";
import { createContext } from "react";

const PlantsContext = createContext<Plants | null>(null);

export default PlantsContext;
