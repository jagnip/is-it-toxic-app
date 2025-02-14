import { Plant } from "@/types";
import PlantDetails from "../_components/PlantDetails";

interface PlantPageProps {
  plant: Plant;
}

export default function PlantPage({ plant }: PlantPageProps) {
  return <PlantDetails plant={plant} />;
}
