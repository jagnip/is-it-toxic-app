import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="m-4">
      <div className="m-8 flex flex-col gap-2">
        <h1 className="flex flex-col items-center" >
          <span className="mb-[-24px]">🪴</span> <span>Is it toxic to?</span>
        </h1>
        <Search />
      </div>
      <div>{children}</div>
    </div>
  );
}
