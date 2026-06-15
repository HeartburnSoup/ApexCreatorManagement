import { cn } from "@/lib/utils";

type ApexLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
};

const sizeMap = {
  sm: "h-9 w-auto",
  md: "h-14 w-auto",
  lg: "h-24 w-auto",
  xl: "h-36 w-auto",
  hero: "h-[min(55vw,22rem)] w-auto",
};

export function ApexLogo({ className = "", size = "md" }: ApexLogoProps) {
  return (
    <img
      src="/Apex.svg"
      alt="Apex Creator Management"
      className={cn("block object-contain select-none", sizeMap[size], className)}
      draggable={false}
    />
  );
}
