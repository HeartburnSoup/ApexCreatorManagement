import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { ApexLogo } from "./ApexLogo";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#niches", label: "Talent" },
  { href: "/#brands", label: "Brands" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <nav className="container mx-auto relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <ApexLogo size="sm" />
          <span className="font-bold tracking-tight text-lg uppercase hidden sm:block group-hover:text-primary transition-colors">
            Apex
          </span>
        </Link>

        <div className="hidden lg:flex gap-10 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden sm:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
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
                className="text-base font-medium uppercase tracking-wide text-muted-foreground hover:text-primary py-1 min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="inline-flex justify-center items-center min-h-[48px] px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wide rounded-full"
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
