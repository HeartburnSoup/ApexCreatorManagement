import { ApexLogo } from "./ApexLogo";

export function ApexVisual() {
  return (
    <div className="relative min-h-[420px] lg:min-h-[560px] w-full">
      <div className="absolute inset-0 apex-grid opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_68%)]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[min(78vw,34rem)] w-[min(78vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-sm" aria-hidden />
      <div className="apex-orb absolute left-1/2 top-1/2 flex h-[min(72vw,31rem)] w-[min(72vw,31rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        <div className="absolute inset-[9%] rounded-full bg-gradient-to-br from-white/14 via-brand-fire/18 to-black/40 blur-[1px]" aria-hidden />
        <div className="absolute inset-[18%] rounded-full bg-black/50 shadow-[0_0_90px_rgba(255,1,0,0.22)]" aria-hidden />
        <ApexLogo size="hero" className="relative z-10 h-[min(36vw,15rem)] drop-shadow-[0_0_50px_rgba(255,255,255,0.18)]" />
      </div>

      <div className="apex-panel absolute bottom-4 left-4 right-4 rounded-3xl p-5 sm:left-auto sm:right-2 sm:w-72">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-fire">Creator signal</p>
        <p className="mt-3 text-sm leading-relaxed text-white/72">
          We turn audience trust into brand partnerships that feel natural, measurable, and built to last.
        </p>
      </div>

      <div className="absolute left-3 top-8 hidden sm:block">
        <div className="apex-pill rounded-full px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/70">
          360 strategy
        </div>
      </div>
      <div className="absolute right-6 top-24 hidden sm:block">
        <div className="apex-pill rounded-full px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/70">
          global reach
        </div>
      </div>
    </div>
  );
}
