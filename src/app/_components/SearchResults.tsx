import { PLANTS } from "../_data/PLANTS";

export default function SearchResults() {
  const toxicToEmojis: Record<string, string> = {
    dog: "🐶",
    cat: "🐱",
    horse: "🐴",
  };

  return (
    <div className="h-[40vh] overflow-y-auto p-4 scrollbar-hide">
      <ul>
        {Object.keys(PLANTS).map((key) => {
          const plant = PLANTS[key];
          return (
            <li className="flex justify-between items-center p-2" key={key}>
              <div className="flex flex-col">
                <span>{plant.name}</span>{" "}
                <span className="text-gray-500">{plant.scientificName}</span>
              </div>
              <div className="bg-red-200 rounded-2xl flex px-1 py-0.5">
                {plant.toxicTo.map((animal) => (
                  <div key={animal}>{toxicToEmojis[animal]}</div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
