import { PLANTS } from "../_data/PLANTS";
import PlantHeader from "./PlantHeader";
import PlantList from "./PlantList";

interface PlantDetailsProps {
  plantId: string;
}

export default function PlantDetails({ plantId }: PlantDetailsProps) {
  const plant = PLANTS[plantId];

  if (!plant) return <p>Plant not found</p>;

  return (
    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100 max-w-3xl">
      <PlantHeader
        link={plant.link}
        name={plant.name}
        scientificName={plant.scientificName}
      />
      <PlantList plant={plant} />
    </div>
  );
}
