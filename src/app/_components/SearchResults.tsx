"use client";

import { Plants } from "@/types";
import { animalToEmoji } from "../_utils/animalTo";
import { useRouter } from "next/navigation";

interface SearchResultsProps {
  plants: Plants;
}

export default function SearchResults({ plants }: SearchResultsProps) {
  const router = useRouter();

  function handlePlantClick(plantId: string) {
    router.push(`/plants/${plantId}`);
  }

  return (
    <div className="h-[400px] overflow-y-auto p-2 scrollbar-hide">
      <ul>
        {Object.keys(plants).length > 0 ? (
          Object.entries(plants).map(([key, plant]) => (
            <li
              className="flex transition-all duration-100 justify-between items-center p-2 px-4 gap-1 hover:bg-[#f5f5f5e6] rounded"
              key={key}
              onClick={() => handlePlantClick(key)}
            >
              <div className="flex flex-col md:flex-row md:gap-3">
                <span>{plant.name}</span>{" "}
                <span className="text-gray-500">{plant.scientificName}</span>
              </div>
              <div className="bg-red-200 rounded-2xl flex px-1 py-0.5">
                {plant.toxicTo.map((animal) => (
                  <div key={animal}>{animalToEmoji[animal]}</div>
                ))}
              </div>
            </li>
          ))
        ) : (
          <li className="flex flex-col gap-2 items-center py-10  text-neutral-500 ">
            <span className="text-3xl ">🥀</span>{" "}
            <span>Can't find your plant?</span>
            <span>Try to search for scientific name instead.</span>
          </li>
        )}
      </ul>
    </div>
  );
}
