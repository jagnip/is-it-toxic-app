
import { PLANTS } from "../_data/PLANTS";
import { animalToEmoji, animalToPlural } from "../_utils/animalTo";
import Badge from "./Badge";
import PlantHeader from "./PlantHeader";
import PlantList from "./PlantList";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];

  if (!plant) return <p>Plant not found</p>;

  return (
    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100 max-w-3xl">
      <PlantHeader
        link={plant.link}
        name={plant.name}
        scientificName={plant.scientificName}
      />
      <PlantList />
    </div>
  );
}
