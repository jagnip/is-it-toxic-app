interface SearchInputProps {
  searchItem: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  searchItem,
  handleChange,
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search for toxic plants..."
      value={searchItem}
      onChange={handleChange}
      className="text-xl p-4 rounded-t-xl border-b w-full border-gray-100 outline-none focus:ring-0 focus:border-transparent"
    />
  );
}
