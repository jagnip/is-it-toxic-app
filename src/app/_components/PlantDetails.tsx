import { Plant } from "@/types";
import PlantHeader from "./PlantHeader";
import PlantList from "./PlantList";

interface PlantDetailsProps {
  plant: Plant;
}

export default function PlantDetails({ plant }: PlantDetailsProps) {
  if (!plant) return <p>Plant not found</p>;

  return (
    <div className="shadow-[0_25px_50px_rgba(223,233,203,0.70)] rounded-xl p-6 bg-white border border-gray-100 max-w-3xl">
      <PlantHeader
        link={plant.link}
        name={plant.name}
        scientificName={plant.scientificName}
      />
      <PlantList
        commonNames={plant.commonNames}
        family={plant.family}
        scientificName={plant.scientificName}
        toxicTo={plant.toxicTo}
        toxicPrinciples={plant.toxicPrinciples}
        clinicalSigns={plant.clinicalSigns}
      />
    </div>
  );
}
