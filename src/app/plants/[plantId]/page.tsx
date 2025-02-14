import PlantPage from "@/app/_views/PlantPage";
import { Plants } from "@/types";

interface PlantPageProps {
  params: {
    plantId: string;
  };
}

export default async function Plant({ params }: PlantPageProps) {
  const { plantId } = await params
  const decodedPlantId = decodeURIComponent(plantId);

   const plants: Plants = await fetch("http://localhost:3000/api/plants").then(
      (result) => result.json()
    );

  return <PlantPage plant={plants[decodedPlantId]} />;
}
