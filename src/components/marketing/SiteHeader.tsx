import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#niches", label: "Talent" },
  { href: "/#brands", label: "Brands" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/80">
      <nav className="container mx-auto relative flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        <Link to="/" className="group inline-flex flex-col gap-1.5 shrink-0">
          <span className="brand-wordmark text-[1.75rem] sm:text-[2rem] font-bold leading-none tracking-[-0.05em]">
            Apex
          </span>
          <span className="flex items-center gap-2.5">
            <span
              className="h-[2px] w-7 rounded-full bg-brand-cyan group-hover:w-11 transition-all duration-300"
              aria-hidden
            />
            <span className="text-[0.62rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground group-hover:text-foreground transition-colors">
              Creator Management
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-10 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-foreground transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-brand-cyan after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden sm:inline-flex px-5 py-2.5 bg-brand-cyan text-primary text-sm font-bold uppercase tracking-wide rounded-full hover:brightness-105 hover:shadow-[0_0_24px_rgba(2,239,240,0.35)] transition-all"
          >
            Inquiry
          </a>
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden glass border-b border-border px-4 sm:px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-1 min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="inline-flex justify-center items-center min-h-[48px] px-5 py-3 bg-brand-cyan text-primary text-sm font-bold uppercase tracking-wide rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Inquiry
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
