import PlantDetails from "../_components/PlantDetails";

interface PlantPageProps {
  plantId: string;
}

export default function PlantPage({ plantId }: PlantPageProps) {
  return <PlantDetails plantId={plantId} />;
}
