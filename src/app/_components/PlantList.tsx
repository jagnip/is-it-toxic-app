import { animalToEmoji, animalToPlural } from "../_utils/animalTo";
import Badge from "./Badge";
import { Plant } from "@/types";

interface PlantListProps
  extends Pick<
    Plant,
    | "commonNames"
    | "family"
    | "scientificName"
    | "toxicTo"
    | "toxicPrinciples"
    | "clinicalSigns"
  > {}

export default function PlantList({
  commonNames,
  family,
  scientificName,
  toxicTo,
  toxicPrinciples,
  clinicalSigns,
}: PlantListProps) {
  const plantLabelsAndValues: {
    label: string;
    value: string | string[] | null;
  }[] = [
    { label: "Common Names", value: commonNames },
    { label: "Family", value: family },
    { label: "Scientific Name", value: scientificName },
    { label: "Toxic To", value: toxicTo },
    { label: "Toxic Principles", value: toxicPrinciples },
    { label: "Clinical Signs", value: clinicalSigns },
  ];

  return (
    <dl>
      {plantLabelsAndValues
        .filter(({ value }) => value)
        .map(({ label, value }, index, array) => (
          <div key={label}>
            <div className="flex flex-col">
              <dt className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 md:mb-0">
                {label}
              </dt>
              <dd>
                {Array.isArray(value) ? (
                  <div className="flex flex-wrap gap-1">
                    {(value as string[]).map((item) => (
                      <Badge
                        key={item}
                        bgColor={
                          label === "Toxic To" ? "bg-red-200" : "bg-gray-200"
                        }
                        textColor={label === "Toxic To" ? "text-[#842727]" : ""}
                      >
                        {label === "Toxic To"
                          ? animalToEmoji[item] + " " + animalToPlural[item]
                          : item}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  value
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
