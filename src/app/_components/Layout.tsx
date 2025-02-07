import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1 className="text-yellow-600">🪴 Is it toxic to?</h1>
      <Search />
      <div>{children}</div>
    </div>
  );
}
