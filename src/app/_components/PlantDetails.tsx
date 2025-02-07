import { PLANTS } from "../_data/PLANTS";

export default function PlantDetails() {
  const plant = PLANTS["adam-and-eve arum maculatum"];
  return (
    <div>
      <button>←</button>
      <a href={plant.link} target="_blank" rel="noopener noreferrer">
        ASPCA Website
      </a>
      <h1>{plant.name}</h1>
      <h2>{plant.scientificName}</h2>

      <dl>
        {plant.family && (
          <div>
            <dt>Family</dt>
            <dd>{plant.family}</dd>
          </div>
        )}{" "}
        {plant.commonNames && (
          <div>
            <dt>Common names</dt>
            <dd>{plant.commonNames.join(",  ")}</dd>
          </div>
        )}
        {plant.toxicTo && (
          <div>
            <dt>Toxic to</dt>
            <dd>{plant.toxicTo.join(",  ")}</dd>
          </div>
        )}{" "}
        {plant.toxicPrinciples && (
          <div>
            <dt>Toxic principles</dt>
            <dd>{plant.toxicPrinciples}</dd>
          </div>
        )}
        {plant.clinicalSigns && (
          <div>
            <dt>Clinical signs</dt>
            <dd>{plant.clinicalSigns}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
