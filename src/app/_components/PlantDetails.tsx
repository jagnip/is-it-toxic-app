import { Plant } from "@/types";
import { PLANTS } from "../_data/PLANTS";
import { animalToEmoji, animalToPlural } from "../_utils/animalTo";
import Badge from "./Badge";
import PlantHeader from "./PlantHeader";
import PlantList from "./PlantList";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];

  if (!plant) return <p>Plant not found</p>;

  const plantLabelsAndFields: { label: string; key: keyof Plant }[] = [
    { label: "Common Names", key: "commonNames" },
    { label: "Family", key: "family" },
    { label: "Scientific Name", key: "scientificName" },
    { label: "Toxic To", key: "toxicTo" },
    { label: "Toxic Principles", key: "toxicPrinciples" },
    { label: "Clinical Signs", key: "clinicalSigns" },
    { label: "ASPCA Link", key: "link" },
    { label: "Image", key: "imageUrl" },
  ];

  return (
    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100 max-w-3xl">
      <PlantHeader
        link={plant.link}
        name={plant.name}
        scientificName={plant.scientificName}
      />
      <dl>
        {plantLabelsAndFields
          .filter(({ key }) => plant[key])
          .map(({ label, key }, index, array) => (
            <div key={label}>
              <div className="flex flex-col">
                <dt className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 md:mb-0">
                  {label}
                </dt>
                <dd>{plant[key]}</dd>
              </div>
              {/* Hide the last <hr> */}
              {index < array.length - 1 && (
                <hr className="h-[1px] my-3 bg-neutral-200" />
              )}
            </div>
          ))}
      </dl>
    </div>
  );
}
