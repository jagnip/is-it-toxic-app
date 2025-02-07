import { PLANTS } from "../_data/PLANTS";

export default function SearchResults() {
  return (
    <div className="h-[50vh] overflow-y-auto p-4 scrollbar-hide">
      <ul>
        {Object.keys(PLANTS).map((key) => {
          const plant = PLANTS[key];
          return (
            <li className="flex justify-between p-2" key={key}>
              <div className="flex flex-col">
                <span>{plant.name}</span> <span className="text-gray-500">{plant.scientificName}</span>
              </div>
              <span>{plant.toxicTo.join(", ")}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
