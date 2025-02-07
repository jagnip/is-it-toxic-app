import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="m-4">
      <div className="m-8">
        <h1 className="flex flex-col items-center text-6xl">
          <span>🪴</span> <span>Is it toxic to?</span>
        </h1>
        <Search />
      </div>
      <div>{children}</div>
    </div>
  );
}
