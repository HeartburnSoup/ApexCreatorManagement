import { ApexLogo } from "./ApexLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-smoke/20 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-3">
          <ApexLogo size="sm" />
          <span className="text-sm text-muted-foreground">Creator Management</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="/#talent" className="hover:text-foreground transition-colors">Talent</a>
          <a href="/#brands" className="hover:text-foreground transition-colors">Brands</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Apex</p>
      </div>
    </footer>
  );
}
