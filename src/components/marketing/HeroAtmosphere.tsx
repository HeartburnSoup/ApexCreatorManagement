import { ApexLogo } from "./ApexLogo";

export function HeroAtmosphere() {
  return (
    <div className="relative w-full overflow-hidden border-b border-border/40" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-smoke/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-brand-fire/10 blur-[80px] animate-glow-pulse pointer-events-none" />
      <div className="absolute top-8 right-[8%] w-32 h-32 rounded-full bg-burnt/15 blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-4 left-[6%] w-40 h-40 rounded-full bg-brand-fire/8 blur-3xl animate-orb pointer-events-none" style={{ animationDelay: "2s" }} />

      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1200 320">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F0EDCC" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="320" fill="url(#hero-grid)" />
        <line x1="0" y1="280" x2="1200" y2="40" stroke="#FF0100" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="0" y1="60" x2="1200" y2="300" stroke="#921B1D" strokeWidth="1" strokeOpacity="0.25" />
      </svg>

      <div className="relative flex flex-col items-center justify-center px-4 pt-10 pb-8 sm:pt-12 sm:pb-10 min-h-[220px] sm:min-h-[280px]">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 scale-110 rounded-full border border-brand-fire/20 animate-logo-ring" />
          <div className="absolute inset-0 scale-[1.35] rounded-full border border-dashed border-bone/10" />
          <ApexLogo
            size="xl"
            className="relative z-10 opacity-[0.18] sm:opacity-[0.22] drop-shadow-[0_0_40px_rgba(255,1,0,0.35)]"
          />
          <ApexLogo
            size="md"
            className="absolute z-20 opacity-90 drop-shadow-[0_0_24px_rgba(255,1,0,0.25)]"
          />
        </div>

        <div className="mt-6 flex items-center gap-3 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-brand-fire/70" />
          <span className="text-brand-fire/90">Creator Management</span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-brand-fire/70" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-fire/50 to-transparent" />
    </div>
  );
}
