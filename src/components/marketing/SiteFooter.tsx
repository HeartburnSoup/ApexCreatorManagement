import { ApexLogo } from "./ApexLogo";

const columns = [
  {
    title: "Discover",
    links: [
      { href: "/#services", label: "Services" },
      { href: "/#niches", label: "Talent" },
      { href: "/#brands", label: "Brands" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/#contact", label: "Contact" },
      { href: "mailto:talent@apexcreatormanagement.com", label: "Email" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-background py-16 sm:py-20">
      <div className="px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <ApexLogo size="sm" />
              <p className="hero-display text-2xl text-bone">Apex</p>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Boutique creator management for influential brands and meaningful partnerships worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="editorial-caption text-brand-fire mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-bone transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="editorial-caption text-brand-fire mb-5">Office</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              talent@apexcreatormanagement.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-3 text-xs editorial-caption text-muted-foreground">
          <span>© {new Date().getFullYear()} Apex Creator Management</span>
          <span>Building influential brands</span>
        </div>
      </div>
    </footer>
  );
}
