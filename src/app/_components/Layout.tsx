import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="sm:max-w-lg md:max-w-xl mx-auto">
      <div className="m-8 flex flex-col gap-2">
        <div>
          <h1 className="flex flex-col items-center">
            <span className="mb-[-24px]">🪴</span> <span>Is it toxic to?</span>
          </h1>
          <Search />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
