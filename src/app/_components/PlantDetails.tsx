import { PLANTS } from "../_data/PLANTS";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];

  if (!plant) return <p>Plant not found</p>;

  const plantDetails: { label: string; value: string | string[] | null }[] = [
    { label: "Family", value: plant.family },
    {
      label: "Common Names",
      value: plant.commonNames.length > 0 ? plant.commonNames.join(", ") : null,
    },
    { label: "Toxic to", value: plant.toxicTo.join(", ") },
    { label: "Toxic Principles", value: plant.toxicPrinciples },
    { label: "Clinical Signs", value: plant.clinicalSigns },
  ];

  return (
    <div>
      <button>←</button>
      <a href={plant.link} target="_blank" rel="noopener noreferrer">
        ASPCA Website
      </a>
      <h1>{plant.name}</h1>
      <h2>{plant.scientificName}</h2>

      <dl>
        {plantDetails
          .filter(({ value }) => value)
          .map(({ label, value }) => (
            <div>
              <dt>{label}</dt> <dd>{value}</dd>
            </div>
          ))}
      </dl>
    </div>
  );
}
