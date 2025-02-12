import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useState } from "react";
import { PLANTS } from "../_data/PLANTS";

export default function Search() {
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredPlants, setFilteredPlants] = useState(PLANTS);
  const [isFocused, setIsFocused] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchItem = e.target.value.toLowerCase();
    setSearchItem(searchItem);

    const filteredPlants = Object.fromEntries(
      Object.entries(PLANTS).filter(
        ([key, plant]) =>
          plant.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          plant.scientificName.toLowerCase().includes(searchItem.toLowerCase())
      )
    );

    setFilteredPlants(filteredPlants);
  }

  return (
    <div
      className={`w-[390px] border-gray-100 transition-all duration-200 md:w-[590px] shadow-[0_10px_15px_-3px_rgba(223,233,203,0.5),0_4px_6px_-4px_rgba(223,233,203,0.5)] rounded-xl max-w-xl bg-white border ${
        isFocused ? "border-gray-300" : ""
      }`}
    >
      <SearchInput setIsFocused={setIsFocused} handleChange={handleInputChange} searchItem={searchItem} />
      <SearchResults plants={filteredPlants} />
    </div>
  );
}
//
