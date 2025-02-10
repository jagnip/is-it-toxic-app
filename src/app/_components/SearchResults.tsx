import { PLANTS } from "../_data/PLANTS";
import { animalToEmoji } from "../_utils/animalTo";

export default function SearchResults() {
  return (
    <div className="h-[40vh] overflow-y-auto p-4 scrollbar-hide">
      <ul>
        {Object.keys(PLANTS).map((key) => {
          const plant = PLANTS[key];
          return (
            <li className="flex justify-between items-center p-2" key={key}>
              <div className="flex flex-col">
                <span>{plant.name}</span>{" "}
                <span className="text-gray-500 ">{plant.scientificName}</span>
              </div>
              <div className="bg-red-200 rounded-2xl flex px-1 py-0.5">
                {plant.toxicTo.map((animal) => (
                  <div key={animal}>{animalToEmoji[animal]}</div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
