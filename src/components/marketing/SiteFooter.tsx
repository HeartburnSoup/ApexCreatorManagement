import { ApexLogo } from "./ApexLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-smoke/20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-sm">
            <ApexLogo size="sm" subline="Creator Management" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Creator representation, websites, and Google visibility — so brands can find you
              and book partnerships.
            </p>
            <a
              href="mailto:talent@apexcreatormanagement.com"
              className="mt-5 inline-block break-all text-sm text-foreground transition-colors hover:text-brand-fire"
            >
              talent@apexcreatormanagement.com
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/#visibility" className="hover:text-foreground transition-colors">
              Visibility
            </a>
            <a href="/#brands" className="hover:text-foreground transition-colors">
              Brands
            </a>
            <a href="/#contact" className="hover:text-foreground transition-colors">
              Apply
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apex Creator Management. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Get found. Land the deal.
          </p>
        </div>
      </div>
    </footer>
  );
}
