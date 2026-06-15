import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/ContactForm";
import { ApexVisual } from "@/components/marketing/ApexVisual";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

const SITE_URL = "https://apexcreatormanagement.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Creator Management — Boutique Talent Agency" },
      {
        name: "description",
        content:
          "Boutique talent management agency representing creators, influencers, athletes, and digital entrepreneurs.",
      },
      { property: "og:title", content: "Apex Creator Management" },
      {
        property: "og:description",
        content: "Building influential brands. Creating meaningful partnerships.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Creator Representation", d: "Personalized management and career guidance for lasting brands." },
  { n: "02", t: "Brand Partnerships", d: "Trusted brands aligned with your audience and values." },
  { n: "03", t: "Sponsorship Negotiation", d: "Competitive deals from campaigns to ambassador agreements." },
  { n: "04", t: "Campaign Management", d: "Deliverables, timelines, and partnerships handled end-to-end." },
  { n: "05", t: "Audience Growth", d: "Data-driven strategies to expand reach and engagement." },
  { n: "06", t: "Business Development", d: "New revenue streams, launches, and growth initiatives." },
];

const niches = [
  "Lifestyle", "Fitness", "Fashion", "Beauty", "Travel",
  "Gaming", "Business", "Tech", "Entertainment",
];

const whyUs = [
  { marker: "360°", t: "Creator-first", d: "Strategy built around your voice and goals." },
  { marker: "24/7", t: "Always on", d: "From brief to signed deal." },
  { marker: "Global", t: "Brand reach", d: "Partners beyond one campaign." },
];

const brandPillars = [
  { t: "Curated", d: "Vetted roster — not a marketplace." },
  { t: "Strategic", d: "Audience fit over follower count." },
  { t: "Accountable", d: "One contact, measurable outcomes." },
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="section-label mb-2">{label}</p>
      <h2 className="hero-display text-2xl sm:text-3xl text-foreground">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="mesh-bg text-foreground min-h-screen">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Hero */}
        <section className="page-section pt-8 sm:pt-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-4">Boutique talent agency</p>
              <h1 className="hero-display text-[clamp(2.75rem,10vw,5rem)] mb-5">
                <span className="block text-foreground">Influential</span>
                <span className="block hero-display-outline">Brands</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                We represent creators, influencers, and digital entrepreneurs — building meaningful partnerships and sustainable businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-brand-fire text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Get in touch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  View services →
                </a>
              </div>
            </div>
            <ApexVisual />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="page-section section-divider">
          <SectionHeading label="What we do" title="Full-service management" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <article key={s.n} className="bento-card rounded-xl p-5 group">
                <span className="text-xs font-bold text-brand-fire tracking-widest">{s.n}</span>
                <h3 className="font-bold text-foreground mt-2 mb-2 text-sm uppercase tracking-wide">{s.t}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Apex — compact strip */}
        <section className="page-section section-divider">
          <SectionHeading label="Why Apex" title="Built for creators" />
          <div className="grid sm:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.marker} className="border-l-2 border-brand-fire/40 pl-4">
                <p className="text-xl font-black text-brand-fire">{item.marker}</p>
                <h3 className="text-sm font-bold uppercase tracking-wide mt-1 mb-1">{item.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talent + Brands — paired for clearer flow */}
        <section className="page-section section-divider grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div id="talent">
            <SectionHeading label="For creators" title="Representation" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Actively seeking creators across today's fastest-growing platforms — emerging or established.
            </p>
            <div className="flex flex-wrap gap-2">
              {niches.map((n) => (
                <span
                  key={n}
                  className="px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider border border-border text-muted-foreground"
                >
                  {n}
                </span>
              ))}
            </div>
            <a href="#contact" className="inline-block mt-5 text-xs font-bold uppercase tracking-widest text-brand-fire hover:text-foreground transition-colors">
              Apply →
            </a>
          </div>

          <div id="brands">
            <SectionHeading label="For brands" title="Partnerships" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Identify, negotiate, and manage creator partnerships aligned with your marketing goals.
            </p>
            <ul className="space-y-4">
              {brandPillars.map((item) => (
                <li key={item.t} className="flex gap-3 text-sm">
                  <span className="text-brand-fire font-bold shrink-0">—</span>
                  <div>
                    <span className="font-bold uppercase tracking-wide text-foreground">{item.t}</span>
                    <span className="text-muted-foreground"> · {item.d}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block mt-5 text-xs font-bold uppercase tracking-widest text-brand-fire hover:text-foreground transition-colors">
              Partner with us →
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="page-section section-divider pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading label="Contact" title="Start a conversation" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We typically respond within 1–2 business days.
              </p>
              <a
                href="mailto:talent@apexcreatormanagement.com"
                className="text-sm text-foreground hover:text-brand-fire transition-colors break-all"
              >
                talent@apexcreatormanagement.com
              </a>
            </div>
            <div className="bento-card rounded-xl p-6 sm:p-8">
              <ContactForm variant="minimal" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
