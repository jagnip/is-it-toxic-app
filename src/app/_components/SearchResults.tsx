import { PLANTS } from "../_data/PLANTS";

export default function SearchResults() {
  return (
    <div className="h-[50vh] overflow-y-auto">
      <ul>
        {Object.keys(PLANTS).map((key) => {
          const plant = PLANTS[key];
          return (
            <li key={key}>
              <span>{plant.name}</span> <span>{plant.scientificName}</span>{" "}
              <span>{plant.toxicTo.join(", ")}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
