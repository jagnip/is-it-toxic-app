import PlantPage from "@/app/_views/PlantPage";

type PlantPageProps = {
  params: {
    plantId: string;
  };
};

export default async function Plant({ params }: PlantPageProps) {
  const { plantId } = await params;
  const decodedPlantId = decodeURIComponent(plantId);

  return <PlantPage plantId={decodedPlantId} />;
}
