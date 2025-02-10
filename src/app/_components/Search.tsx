import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <div className="shadow-lg rounded-xl bg-white border border-gray-100">
      <SearchInput />
      <SearchResults />
    </div>
  );
}
