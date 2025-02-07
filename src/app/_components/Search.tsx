import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg border border-gray-100">
      <SearchInput />
      <SearchResults />
    </div>
  );
}
