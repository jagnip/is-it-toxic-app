import { createContext } from "react";
import { Plant, Plants } from "@/types";



const PlantContext = createContext<Plant>(
    plants["adam-and-eve arum maculatum"]
  );