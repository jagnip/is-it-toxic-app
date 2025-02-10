import { PLANTS } from "../_data/PLANTS";
import { animalToEmoji, animalToPlural } from "../_utils/animalTo";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];

  if (!plant) return <p>Plant not found</p>;

  const plantDetails: { label: string; value: string | string[] | null }[] = [
    { label: "Family", value: plant.family },
    {
      label: "Common Names",
      value: plant.commonNames.length > 0 ? plant.commonNames.join(", ") : null,
    },
    {
      label: "Toxic to",
      value: plant.toxicTo
        .map((animal) => animalToEmoji[animal] || animal)
        .join(" "),
    },
    { label: "Toxic Principles", value: plant.toxicPrinciples },
    { label: "Clinical Signs", value: plant.clinicalSigns },
  ];

  return (
    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100">
      <div className="flex justify-between">
        <button className="h-6 w-6 rounded-lg bg-neutral-200 transition-[background-color,box-shadow] hover:bg-neutral-300 focus-visible:ring-4 focus-visible:ring-blue-400/50">
          ←
        </button>
        <a
          href={plant.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-neutral-500 transition-[color,box-shadow] after:content-['_↗'] hover:text-black focus-visible:ring-4 focus-visible:ring-blue-400/50"
        >
          ASPCA Website
        </a>
      </div>
      <div className="flex flex-col">
        <h2 className="mt-4 ">{plant.name}</h2>
        <h3>{plant.scientificName}</h3>
      </div>
      <dl>
      {plantDetails
  .filter(({ value }) => value)
  .map(({ label, value }, index, array) => (
    <div key={label}>
      <div className="flex flex-col">
        <dt className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 md:mb-0">
          {label}
        </dt>
        <dd className="flex">
          {label === "Toxic to" ? (
            <div className="flex gap-1">
              {plant.toxicTo.map((animal) => (
                <div
                  className="bg-red-200 rounded flex px-2 py-0.5 text-[#842727]"
                  key={animal}
                >
                  {animalToEmoji[animal]}{" "}
                  {animalToPlural[animal].charAt(0).toUpperCase() +
                    animalToPlural[animal].slice(1)}
                </div>
              ))}
            </div>
          ) : (
            value
          )}
        </dd>
      </div>
      {/* Hide the last <hr> */}
      {index < array.length - 1 && (
        <hr className="h-[1px] my-3 bg-neutral-200 md:my-0" />
      )}
    </div>
  ))}
      </dl>
    </div>
  );
}
