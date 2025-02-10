import { ReactNode } from "react";

interface BadgeProps {
  bgColor: string;
  textColor?: string;
  children: ReactNode;
}

export default function Badge({ bgColor, textColor, children }: BadgeProps) {
  return (
    <span className={`rounded ${bgColor} ${textColor} px-2 py-[0.5]`}>
      {children}
    </span>
  );
}
