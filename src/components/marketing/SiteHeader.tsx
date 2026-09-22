import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { ApexLogo } from "./ApexLogo";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#visibility", label: "Visibility" },
  { href: "/#brands", label: "Brands" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3.5">
        <Link to="/" className="group shrink-0 transition-opacity hover:opacity-90">
          <ApexLogo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex h-9 items-center rounded-full bg-brand-fire px-5 text-xs font-bold uppercase tracking-[0.15em] text-background transition-transform hover:scale-[1.03]"
          >
            Apply
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-px w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background border-b border-border px-5 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-brand-fire px-5 text-xs font-bold uppercase tracking-[0.15em] text-background"
              onClick={() => setMenuOpen(false)}
            >
              Apply
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
