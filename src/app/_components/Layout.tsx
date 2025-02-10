import Search from "./Search";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:flex-row sm:max-w-lg md:max-w-xl lg:max-w-[100vw] lg:p-8 mx-auto">
      <div className="m-8 flex flex-col gap-2">
        <h1 className="flex flex-col items-center">
          <span className="mb-[-24px]">🪴</span> <span>Is it toxic to?</span>
        </h1>
        <Search />
      </div>
      <div className="m-4">{children}</div>
    </div>
  );
}
