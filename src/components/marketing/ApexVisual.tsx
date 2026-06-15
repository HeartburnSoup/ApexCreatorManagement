import { ApexLogo } from "./ApexLogo";

const stats = [
  { value: "360°", label: "Creator-first" },
  { value: "24/7", label: "Support" },
  { value: "Global", label: "Reach" },
];

export function ApexVisual() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-8 bg-brand-fire/15 blur-[60px] rounded-full animate-glow-pulse pointer-events-none" aria-hidden />
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" aria-hidden />
      <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-brand-fire/50 via-white/10 to-burnt/30 pointer-events-none" aria-hidden />
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" aria-hidden />

      <div className="relative flex flex-col items-center justify-center py-10 px-6">
        <ApexLogo size="lg" className="relative z-10 drop-shadow-[0_0_32px_rgba(255,1,0,0.25)]" />
        <div className="mt-8 grid grid-cols-3 gap-3 w-full">
          {stats.map((s) => (
            <div key={s.label} className="text-center border-t border-white/10 pt-3">
              <p className="text-lg font-black text-brand-fire leading-none">{s.value}</p>
              <p className="text-[0.6rem] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
