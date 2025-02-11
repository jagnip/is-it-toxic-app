import { animalToEmoji, animalToPlural } from "../_utils/animalTo";
import Badge from "./Badge";
import { Plant } from "@/types";

interface PlantListProps {
  plant: Plant;
}

export default function PlantList({ plant }: PlantListProps) {
  const plantLabelsAndFields: { label: string; key: keyof Plant }[] = [
    { label: "Common Names", key: "commonNames" },
    { label: "Family", key: "family" },
    { label: "Scientific Name", key: "scientificName" },
    { label: "Toxic To", key: "toxicTo" },
    { label: "Toxic Principles", key: "toxicPrinciples" },
    { label: "Clinical Signs", key: "clinicalSigns" },
  ];

  function isArrayKey<K extends keyof Plant>(key: K): boolean {
    return key === "commonNames" || key === "toxicTo";
  }

  return (
    <dl>
      {plantLabelsAndFields
        .filter(({ key }) => plant[key])
        .map(({ label, key }, index, array) => (
          <div key={label}>
            <div className="flex flex-col">
              <dt className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 md:mb-0">
                {label}
              </dt>
              <dd>
                {isArrayKey(key) ? (
                  <div className="flex flex-wrap gap-1">
                    {(plant[key] as string[]).map((item) => (
                      <Badge
                        key={item}
                        bgColor={
                          key === "toxicTo" ? "bg-red-200" : "bg-gray-200"
                        }
                        textColor={key === "toxicTo" ? "text-[#842727]" : ""}
                      >
                        {key === "toxicTo"
                          ? animalToEmoji[item] + " " + animalToPlural[item]
                          : item}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  plant[key]
                )}
              </dd>
            </div>
            {index < array.length - 1 && (
              <hr className="h-[1px] my-3 bg-neutral-200" />
            )}
          </div>
        ))}
    </dl>
  );
}
