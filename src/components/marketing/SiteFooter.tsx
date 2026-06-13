import { ApexLogo } from "./ApexLogo";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-smoke/40 py-14 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-fire/60 to-transparent" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-4">
          <ApexLogo size="sm" className="opacity-90" />
          <div>
            <p className="brand-wordmark text-2xl font-bold tracking-[-0.04em]">Apex</p>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs leading-relaxed">
            Creator management for influential brands worldwide.
          </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#services" className="hover:text-brand-fire transition-colors">Services</a>
          <a href="/#niches" className="hover:text-brand-fire transition-colors">Talent</a>
          <a href="/#brands" className="hover:text-brand-fire transition-colors">Brands</a>
          <a href="/#contact" className="hover:text-brand-fire transition-colors">Contact</a>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-border/60 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Apex Creator Management</span>
        <span className="text-brand-fire/70">Building influential brands.</span>
      </div>
    </footer>
  );
}
