import { ReactNode } from "react";

type BadgeProps = {
  bgColor: string;
  textColor?: string;
  children: ReactNode;
};

export default function Badge({ bgColor, textColor, children }: BadgeProps) {
  return (
    <span className={`rounded ${bgColor} ${textColor} px-2 py-[0.5]`}>
      {children}
    </span>
  );
}
