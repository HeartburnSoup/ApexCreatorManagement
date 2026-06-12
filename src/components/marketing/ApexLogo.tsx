type ApexLogoProps = {
  className?: string;
  animated?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-28 h-28",
  hero: "w-full max-w-md aspect-square",
};

export function ApexLogo({ className = "", animated = false, size = "md" }: ApexLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`}>
      {animated && (
        <>
          <div
            className="absolute inset-0 rounded-full bg-primary/20 animate-logo-ring blur-2xl"
            aria-hidden
          />
          <div
            className="absolute inset-[-8%] rounded-full border-2 border-primary/20 animate-logo-spin-slow opacity-40"
            style={{ animationDuration: "24s" }}
            aria-hidden
          />
        </>
      )}
      <img
        src="/1.svg"
        alt="Apex Creator Management"
        className={`relative z-10 w-full h-full object-contain drop-shadow-lg ${animated ? "animate-logo-float" : ""}`}
        width={512}
        height={512}
      />
    </div>
  );
}
