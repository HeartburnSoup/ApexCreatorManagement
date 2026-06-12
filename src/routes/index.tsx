import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ContactForm } from "@/components/ContactForm";

const SITE_URL = "https://apexcreatormanagement.com";
const HERO_IMAGE = "/influencer-management-agency-skyscraper-perspective.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Creator Management — Boutique Talent Agency" },
      {
        name: "description",
        content:
          "Boutique talent management agency representing creators, influencers, athletes, and digital entrepreneurs. Strategic partnerships, sponsorship negotiation, and brand growth.",
      },
      { property: "og:title", content: "Apex Creator Management" },
      {
        property: "og:description",
        content: "Building influential brands. Creating meaningful partnerships.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    t: "Creator Representation",
    d: "Personalized management and career guidance designed to help creators grow their influence, increase revenue, and build lasting brands.",
  },
  {
    n: "02",
    t: "Brand Partnerships",
    d: "We connect creators with trusted brands that align with their audience, values, and content style.",
  },
  {
    n: "03",
    t: "Sponsorship Negotiation",
    d: "From one-time campaigns to long-term ambassador agreements, we negotiate competitive deals while protecting our clients' interests.",
  },
  {
    n: "04",
    t: "Campaign Management",
    d: "We oversee campaign execution from start to finish, ensuring deliverables are met, timelines stay on track, and partnerships remain successful.",
  },
  {
    n: "05",
    t: "Audience Growth Strategy",
    d: "Data-driven insights and platform strategies designed to help creators expand their reach and strengthen audience engagement.",
  },
  {
    n: "06",
    t: "Business Development",
    d: "Beyond content creation, we help creators identify new revenue opportunities, partnerships, product launches, speaking engagements, and other growth initiatives.",
  },
];

const niches = [
  "Lifestyle",
  "Fitness & Wellness",
  "Fashion",
  "Beauty",
  "Travel",
  "Gaming",
  "Business & Entrepreneurship",
  "Technology",
  "Entertainment",
];

const whyUs = [
  {
    n: "01",
    t: "Personalized Representation",
    d: "Every creator is unique. We take a hands-on approach to management and tailor strategies to your goals.",
  },
  {
    n: "02",
    t: "Trusted Partnerships",
    d: "We focus on building authentic relationships between creators and brands that create value for both sides.",
  },
  {
    n: "03",
    t: "Long-Term Growth",
    d: "Our goal isn't just securing your next sponsorship. We help build sustainable careers and scalable personal brands.",
  },
  {
    n: "04",
    t: "Dedicated Support",
    d: "From contract review to campaign execution, our team is with you every step of the way.",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#niches", label: "Talent" },
  { href: "#brands", label: "Brands" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="font-bold tracking-tighter text-xl uppercase">Apex</div>

        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-1.5 bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            Inquiry
          </a>
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex w-fit px-4 py-1.5 bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-widest"
              onClick={() => setMenuOpen(false)}
            >
              Inquiry
            </a>
          </div>
        )}
      </nav>

      <main>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border py-20">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black tracking-tighter leading-none select-none text-primary/10 uppercase">
              Apex
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 animate-reveal">
              <span className="inline-block mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Boutique Creator Management
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-balance mb-4 uppercase">
                Building Influential <span className="text-primary italic">Brands</span>.
              </h1>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground mb-6 text-balance">
                Creating Meaningful Partnerships.
              </p>
              <p className="max-w-md text-lg text-muted-foreground mb-4 text-pretty">
                Apex represents creators, influencers, athletes, and digital entrepreneurs — transforming online presence into sustainable businesses through meaningful partnerships.
              </p>
              <p className="max-w-md text-sm text-muted-foreground mb-8 text-pretty italic">
                Our mission is simple: empower creators to focus on creating while we handle the business behind the brand.
              </p>
              <div className="flex gap-4">
                <div className="w-px h-12 bg-primary" />
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] self-center text-muted-foreground">
                  Stroudsburg, PA / Representing Worldwide
                </p>
              </div>
            </div>
            <div className="md:col-span-5 animate-reveal [animation-delay:200ms]">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-white/10">
                <img
                  src={HERO_IMAGE}
                  alt="Skyscraper perspective representing Apex Creator Management's influencer agency"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1216}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">What We Do</h2>
              <span className="font-mono text-[10px] text-primary">[ 01 — 06 ]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {services.map((s) => (
                <div key={s.n} className="bg-background p-8 hover:bg-primary/5 transition-colors">
                  <span className="block font-mono text-[10px] text-muted-foreground mb-4">{s.n}.</span>
                  <h3 className="text-xl font-bold uppercase mb-3">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="niches" className="py-24 bg-primary/5 border-b border-border">
          <div className="container mx-auto px-6 overflow-hidden">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  Looking for Representation?
                </h2>
                <p className="max-w-2xl text-muted-foreground text-pretty">
                  We are actively seeking creators across today's fastest-growing platforms. Whether you're an emerging creator or an established influencer, we'd love to learn more about your brand and vision.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {niches.map((n) => (
                  <span
                    key={n}
                    className="px-5 py-2 border border-foreground/20 rounded-full font-mono text-[11px] uppercase tracking-widest"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Why Apex</h2>
              <span className="font-mono text-[10px] text-primary">[ 01 — 04 ]</span>
            </div>
            <div className="grid md:grid-cols-4 gap-12">
              {whyUs.map((w, i) => (
                <div key={w.n} className="animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-5xl font-bold text-primary mb-4">{w.n}</div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3">{w.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="py-32 border-b border-border">
          <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                For Brands
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] mb-8">
                Partner with creators who <span className="text-primary italic">move</span> audiences.
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mb-8 text-pretty">
                Looking to collaborate with creators who drive engagement and deliver results? We help brands identify, negotiate, and manage partnerships with creators who align with their marketing goals and target audiences.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
              >
                Start a Partnership →
              </a>
            </div>
            <div className="md:col-span-5">
              <div className="border border-border p-8 space-y-6 bg-secondary/30">
                <div>
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">01 / Curated</div>
                  <p className="text-sm text-muted-foreground">A vetted roster — not a marketplace.</p>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">02 / Strategic</div>
                  <p className="text-sm text-muted-foreground">Briefs matched to audience fit, not follower count.</p>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">03 / Accountable</div>
                  <p className="text-sm text-muted-foreground">Single point of contact, measurable outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl">
              <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-12 leading-[0.9]">
                Ready to <br />elevate your brand?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <p className="text-muted-foreground mb-8 max-w-md text-pretty">
                    For creator representation, partnership opportunities, or brand collaborations, send us a message below. Our team typically responds within 1–2 business days.
                  </p>
                  <div className="space-y-4 font-mono text-sm mb-10">
                    <p className="flex">
                      <span className="text-primary mr-3 w-6">E.</span>
                      <a href="mailto:talent@apexcreatormanagement.com" className="hover:text-primary transition-colors break-all">
                        talent@apexcreatormanagement.com
                      </a>
                    </p>
                  </div>
                  <a
                    href="https://instagram.com/apexcreatormanagement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold uppercase tracking-tight group inline-flex items-center"
                  >
                    @apexcreatormanagement
                    <span className="ml-4 text-primary group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-3">
                    Follow on Instagram
                  </p>
                </div>
                <div className="border border-border p-8 bg-secondary/20">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Apex Creator Management. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="mailto:talent@apexcreatormanagement.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
