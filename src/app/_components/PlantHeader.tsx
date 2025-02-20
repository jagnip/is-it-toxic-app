"use client";

import { Plant } from "@/types";
import { useRouter } from "next/navigation";

type PlantHeaderProps = Pick<Plant, "name" | "scientificName" | "link">;

export default function PlantHeader({
  link,
  name,
  scientificName,
}: PlantHeaderProps) {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-neutral-500 transition-[color,box-shadow] after:content-['_↗'] hover:text-black focus-visible:ring-4 focus-visible:ring-blue-400/50"
        >
          ASPCA Website
        </a>
      </div>
      <div className="flex flex-col">
        <h2 className="mt-4">{name}</h2>
        <h3>{scientificName}</h3>
      </div>
    </div>
  );
}
