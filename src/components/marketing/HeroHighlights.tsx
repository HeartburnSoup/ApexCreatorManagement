const highlights = [
  { value: "360°", label: "Creator-first strategy", detail: "End-to-end representation built around your voice." },
  { value: "24/7", label: "Partnership support", detail: "Responsive guidance from brief to signed deal." },
  { value: "Global", label: "Brand reach", detail: "Partners that scale beyond one campaign." },
];

export function HeroHighlights() {
  return (
    <div className="relative w-full animate-reveal [animation-delay:250ms]">
      <div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-brand-fire/20 blur-3xl animate-glow-pulse pointer-events-none"
        aria-hidden
      />
      <div className="relative grid gap-3 sm:gap-4">
        {highlights.map((item, i) => (
          <div
            key={item.label}
            className="group relative flex items-stretch overflow-hidden rounded-2xl bento-card glow-border"
            style={{ animationDelay: `${300 + i * 100}ms` }}
          >
            <div className="w-1.5 shrink-0 fire-line" aria-hidden />
            <div className="flex flex-1 items-center gap-5 px-5 py-5 sm:px-6 sm:py-6">
              <span className="text-3xl sm:text-4xl font-black text-brand-fire leading-none shrink-0 tabular-nums">
                {item.value}
              </span>
              <div className="min-w-0">
                <p className="font-bold text-sm sm:text-base text-bone">{item.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
