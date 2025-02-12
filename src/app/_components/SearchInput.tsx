import { useState } from "react";

export default function SearchInput() {
  const [searchItem, setSearchItem] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
    console.log(searchItem)
  }

  return (
    <input
      type="text"
      placeholder="Search for toxic plants..."
      value={searchItem}
      onChange={handleInputChange}
      className="text-xl p-4 rounded-t-xl border-b w-full border-gray-100 outline-none focus:ring-0 focus:border-transparent"
    />
  );
}
