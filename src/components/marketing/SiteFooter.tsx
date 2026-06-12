export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="brand-wordmark text-2xl font-bold tracking-[-0.04em]">Apex</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Creator management for influential brands worldwide.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
          <a href="/#contact" className="hover:text-brand-cyan transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} Apex Creator Management. All rights reserved.
      </div>
    </footer>
  );
}
