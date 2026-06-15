import { cn } from "@/lib/utils";

type ApexLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "default" | "accent" | "muted";
  subline?: string;
};

const sizeMap = {
  sm: "text-[1.35rem] sm:text-[1.45rem]",
  md: "text-3xl sm:text-4xl",
  lg: "text-5xl sm:text-6xl",
  xl: "text-7xl sm:text-8xl",
  hero: "text-[clamp(3.5rem,14vw,9rem)]",
};

export function ApexLogo({
  className = "",
  size = "md",
  variant = "default",
  subline,
}: ApexLogoProps) {
  const variantClass =
    variant === "accent"
      ? "shimmer-text"
      : variant === "muted"
        ? "text-muted-foreground"
        : "text-foreground";

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "apex-wordmark font-brand font-extrabold uppercase",
          sizeMap[size],
          variantClass,
        )}
        aria-label="Apex Creator Management"
      >
        Apex
      </span>
      {subline ? (
        <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-[0.6rem]">
          {subline}
        </span>
      ) : null}
    </span>
  );
}
