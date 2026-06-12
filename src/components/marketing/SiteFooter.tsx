import { ApexLogo } from "./ApexLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-4">
          <ApexLogo size="sm" />
          <div>
            <p className="font-bold uppercase tracking-tight">Apex Creator Management</p>
            <p className="text-sm text-muted-foreground mt-1">Building influential brands worldwide.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
          <a href="/#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} Apex Creator Management. All rights reserved.
      </div>
    </footer>
  );
}
