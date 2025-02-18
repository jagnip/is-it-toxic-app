"use client";
import { Plants } from "@/types";
import PlantDetails from "../_components/PlantDetails";
import { useContext } from "react";
import PlantsContext from "../_context/PlantsContext";

type PlantPageProps = {
  plantId: string;
}

export default function PlantPage({ plantId }: PlantPageProps) {
  const plants: Plants = useContext(PlantsContext);
  return <PlantDetails plant={plants[plantId]} />;
}
