import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <div className="shadow-[0_10px_15px_-3px_rgba(223,233,203,0.5),0_4px_6px_-4px_rgba(223,233,203,0.5)] rounded-xl max-w-xl bg-white border border-gray-100">
      <SearchInput />
      <SearchResults />
    </div>
  );
}
