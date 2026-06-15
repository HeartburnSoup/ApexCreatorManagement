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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="relative flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <ApexLogo size="sm" />
          <span className="hidden md:block editorial-caption text-bone/60 group-hover:text-bone transition-colors">
            Creator Management
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="editorial-caption text-bone/50 hover:text-bone transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="/#contact" className="hidden sm:inline-flex editorial-link">
            Inquiry
            <span className="editorial-link-arrow">→</span>
          </a>
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block h-px w-6 bg-bone transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-bone transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-bone transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-5 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="editorial-caption text-bone/70 hover:text-bone py-1 min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="editorial-link"
              onClick={() => setMenuOpen(false)}
            >
              Inquiry
              <span className="editorial-link-arrow">→</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
