const highlights = [
  { value: "360°", label: "Creator-first strategy", detail: "End-to-end representation built around your voice and goals." },
  { value: "24/7", label: "Partnership support", detail: "Responsive guidance from brief to signed deal." },
  { value: "Global", label: "Brand reach", detail: "Connections with partners that scale beyond one campaign." },
];

export function HeroHighlights() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto animate-reveal [animation-delay:200ms]">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-cyan/20 via-brand-cyan/5 to-primary/10 blur-sm"
        aria-hidden
      />
      <div className="relative glass rounded-3xl border border-border/80 p-6 sm:p-8 shadow-xl shadow-primary/5 space-y-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan mb-2">Why creators choose Apex</p>
          <p className="text-lg font-semibold text-foreground leading-snug text-balance">
            Boutique management for creators ready to build something lasting.
          </p>
        </div>
        <div className="space-y-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 items-start rounded-2xl bg-card/80 border border-border/60 px-4 py-3.5 hover:border-brand-cyan/30 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-black text-brand-cyan leading-none shrink-0 w-16">
                {item.value}
              </span>
              <div>
                <p className="font-bold text-sm sm:text-base text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
