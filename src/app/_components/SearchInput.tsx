import { useRef, useEffect } from "react";

interface SearchInputProps {
  searchItem: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsFocused: (isFocused: boolean) => void;
}

export default function SearchInput({
  searchItem,
  handleChange,
  setIsFocused,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (inputRef.current ) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  // useEffect(() => {
  //     if (inputRef.current && (pathname === "/")) {
  //       inputRef.current.focus();
  //     }
  // }, [pathname]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search for toxic plants..."
      value={searchItem}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="outline-none caret-gray-500 focus:ring-0 focus:border-b-gray-100 text-xl p-4 rounded-t-xl border-b w-full border-gray-100 "
    />
  );
}
