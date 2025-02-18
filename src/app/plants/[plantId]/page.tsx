import PlantPage from "@/app/_views/PlantPage";

interface PlantPageProps {
  params: {
    plantId: string;
  };
}

export default function Plant({ params }: PlantPageProps) {
  const { plantId } = params;
  const decodedPlantId = decodeURIComponent(plantId);

  return <PlantPage plantId={decodedPlantId} />;
}
