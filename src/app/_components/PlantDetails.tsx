import { PLANTS } from "../_data/PLANTS";
import { animalToEmoji, animalToPlural } from "../_utils/animalTo";
import Badge from "./Badge";
import PlantHeader from "./PlantHeader";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];

  if (!plant) return <p>Plant not found</p>;

  const plantDetails: {
    label: string;
    value: React.ReactNode | string | string[] | null;
  }[] = [
    { label: "Family", value: plant.family },
    {
      label: "Common Names",
      value:
        plant.commonNames.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {plant.commonNames.map((name) => (
              <Badge key={name} bgColor="bg-gray-200">
                {name}
              </Badge>
            ))}
          </div>
        ) : null,
    },
    {
      label: "Toxic to",
      value:
        plant.toxicTo.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {plant.toxicTo.map((animal) => (
              <Badge
                key={animal}
                bgColor="bg-red-200"
                textColor="text-[#842727]"
              >
                {animalToEmoji[animal]}{" "}
                {animalToPlural[animal].charAt(0).toUpperCase() +
                  animalToPlural[animal].slice(1)}
              </Badge>
            ))}
          </div>
        ) : null,
    },
    { label: "Toxic Principles", value: plant.toxicPrinciples },
    { label: "Clinical Signs", value: plant.clinicalSigns },
  ];

  return (
    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100 max-w-3xl">
      <PlantHeader
        link={plant.link}
        name={plant.name}
        scientificName={plant.scientificName}
      />
      <dl>
        {plantDetails
          .filter(({ value }) => value)
          .map(({ label, value }, index, array) => (
            <div key={label}>
              <div className="flex flex-col">
                <dt className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 md:mb-0">
                  {label}
                </dt>
                <dd>{value}</dd>
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
