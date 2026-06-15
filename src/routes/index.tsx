import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/ContactForm";
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

const featuredServices = [
  {
    n: "01",
    t: "Creator Representation",
    d: "Personalized management and career guidance designed to help creators grow influence, revenue, and lasting brands.",
    image: "/hero-portrait.jpg",
  },
  {
    n: "02",
    t: "Brand Partnerships",
    d: "We connect creators with trusted brands aligned with their audience, values, and content style.",
    image: "/influencer-management-agency-skyscraper-perspective.jpg",
  },
];

const otherServices = [
  { n: "03", t: "Sponsorship Negotiation", d: "Competitive deals from campaigns to long-term ambassador agreements." },
  { n: "04", t: "Campaign Management", d: "End-to-end oversight ensuring deliverables and timelines stay on track." },
  { n: "05", t: "Audience Growth", d: "Data-driven platform strategies to expand reach and engagement." },
  { n: "06", t: "Business Development", d: "New revenue streams, partnerships, and product launches." },
];

const niches = [
  "Lifestyle", "Fitness & Wellness", "Fashion", "Beauty", "Travel",
  "Gaming", "Business", "Technology", "Entertainment",
];

const journey = [
  { marker: "360°", t: "Creator-first", d: "Every strategy built around your voice, audience, and long-term vision." },
  { marker: "24/7", t: "Partnership support", d: "Responsive guidance from first brief through signed deal." },
  { marker: "Global", t: "Brand reach", d: "Connections with partners that scale beyond a single campaign." },
  { marker: "01", t: "Dedicated support", d: "From contract review to campaign execution — with you every step." },
];

const brandPillars = [
  { t: "Curated", d: "A vetted roster — not a marketplace." },
  { t: "Strategic", d: "Audience fit over follower count." },
  { t: "Accountable", d: "One point of contact, measurable outcomes." },
];

function EditorialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="editorial-link">
      {children}
      <span className="editorial-link-arrow">→</span>
    </a>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* Hero — full-bleed editorial */}
        <section className="relative min-h-screen flex flex-col grain-overlay">
          <div
            className="absolute inset-0 bg-cover bg-center img-editorial"
            style={{ backgroundImage: "url(/influencer-management-agency-skyscraper-perspective.jpg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" aria-hidden />

          <div className="relative z-10 flex flex-1 flex-col justify-end px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14 pt-28 sm:pt-32 min-h-screen">
            <p className="editorial-caption mb-6 sm:mb-8 animate-reveal">Boutique talent agency</p>

            <h1 className="animate-reveal [animation-delay:80ms] mb-8 sm:mb-12 max-w-5xl">
              <span className="hero-display block text-[clamp(3.5rem,14vw,9rem)] text-bone">
                Influential
              </span>
              <span className="hero-display block text-[clamp(3.5rem,14vw,9rem)] hero-display-outline">
                Brands
              </span>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 animate-reveal [animation-delay:160ms]">
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
                Creating meaningful partnerships for creators, influencers, athletes, and digital entrepreneurs.
              </p>
              <EditorialLink href="#about">Behind the agency</EditorialLink>
            </div>

            <div className="mt-12 sm:mt-16 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-reveal [animation-delay:240ms]">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { label: "Services", href: "/#services" },
                  { label: "Talent", href: "/#niches" },
                  { label: "Brands", href: "/#brands" },
                  { label: "Contact", href: "/#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="editorial-caption text-bone/40 hover:text-bone transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <EditorialLink href="#contact">Get in touch</EditorialLink>
            </div>
          </div>
        </section>

        {/* About — asymmetric editorial */}
        <section id="about" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12 border-t border-border/40">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="/hero-portrait.jpg"
                  alt=""
                  className="col-span-2 w-full aspect-[4/3] object-cover img-editorial"
                />
                <img
                  src="/influencer-management-agency-skyscraper-perspective.jpg"
                  alt=""
                  className="w-full aspect-square object-cover img-editorial translate-y-6"
                />
                <div className="w-full aspect-square bg-smoke/80 border border-border/40 flex items-end p-4">
                  <p className="editorial-caption text-brand-fire">Est. boutique</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-8">
              <p className="editorial-caption text-brand-fire mb-6">The agency & the creators</p>
              <h2 className="hero-display text-3xl sm:text-4xl lg:text-5xl text-bone mb-8 max-w-xl">
                Apex Creator Management
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                We represent creators, influencers, athletes, and digital entrepreneurs — transforming online presence into sustainable businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Our mission is simple: empower creators to focus on creating while we handle the business behind the brand.
              </p>
              <EditorialLink href="#services">Our services</EditorialLink>
            </div>
          </div>
        </section>

        {/* Services — dual feature blocks */}
        <section id="services" className="py-20 sm:py-28 border-t border-border/40">
          <div className="px-5 sm:px-8 lg:px-12 mb-14 sm:mb-20 text-center">
            <p className="editorial-caption text-brand-fire mb-4">What we do</p>
            <h2 className="hero-display text-3xl sm:text-5xl text-bone">A unique approach</h2>
          </div>

          <div className="grid lg:grid-cols-2 border-y border-border/40">
            {featuredServices.map((s) => (
              <article key={s.n} className="group relative border-b lg:border-b-0 lg:border-r last:border-r-0 border-border/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="w-full h-full object-cover img-editorial transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10 lg:p-12">
                  <span className="editorial-caption text-brand-fire mb-4 block">{s.n}</span>
                  <h3 className="hero-display text-xl sm:text-2xl text-bone mb-4">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{s.d}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-16 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {otherServices.map((s) => (
              <div key={s.n} className="flex gap-6 border-t border-border/30 pt-8">
                <span className="editorial-caption text-brand-fire shrink-0">{s.n}</span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-bone mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey timeline */}
        <section className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12 border-t border-border/40 bg-smoke/30">
          <div className="text-center mb-14 sm:mb-20">
            <p className="editorial-caption text-brand-fire mb-4">Why Apex</p>
            <h2 className="hero-display text-3xl sm:text-5xl text-bone">The journey</h2>
          </div>

          <div className="timeline-track grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto pt-8">
            {journey.map((item, i) => (
              <div
                key={item.marker}
                className={`relative pt-10 ${i === 1 ? "lg:-mt-4" : ""}`}
              >
                <span
                  className={`absolute top-0 left-0 editorial-caption ${
                    i === 1 ? "text-brand-fire" : "text-muted-foreground"
                  }`}
                >
                  {item.marker}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-bone mb-2 mt-4">{item.t}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talent */}
        <section id="niches" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-t border-border/40">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-12">
            <h2 className="hero-display text-3xl sm:text-5xl text-bone leading-[0.95]">
              Looking for
              <br />
              representation?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
              We are actively seeking creators across today's fastest-growing platforms — emerging or established.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border/40 pt-10">
            {niches.map((n) => (
              <span key={n} className="editorial-caption text-bone/50 hover:text-brand-fire transition-colors cursor-default">
                {n}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <EditorialLink href="#contact">Apply for representation</EditorialLink>
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="relative py-24 sm:py-32 lg:py-40 grain-overlay overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center img-editorial opacity-40"
            style={{ backgroundImage: "url(/hero-portrait.jpg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/80" aria-hidden />

          <div className="relative z-10 px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="editorial-caption text-brand-fire mb-6">For brands</p>
              <h2 className="hero-display text-3xl sm:text-5xl text-bone mb-6 leading-[0.95]">
                Creators who move audiences
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                We help brands identify, negotiate, and manage partnerships aligned with marketing goals — with creators who drive real engagement.
              </p>
              <EditorialLink href="#contact">Start a partnership</EditorialLink>
            </div>

            <div className="space-y-8 lg:pl-8 lg:border-l lg:border-border/30">
              {brandPillars.map((item) => (
                <div key={item.t}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bone mb-2">{item.t}</h3>
                  <p className="text-sm text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact — minimal editorial */}
        <section id="contact" className="relative py-24 sm:py-32 grain-overlay">
          <div
            className="absolute inset-0 bg-cover bg-center img-editorial opacity-25"
            style={{ backgroundImage: "url(/influencer-management-agency-skyscraper-perspective.jpg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" aria-hidden />

          <div className="relative z-10 px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="editorial-caption text-brand-fire mb-6">Get in touch</p>
              <h2 className="hero-display text-3xl sm:text-5xl lg:text-6xl text-bone mb-8 leading-[0.92]">
                Feel the
                <br />
                partnership
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                For creator representation, brand collaborations, or general inquiries — we typically respond within 1–2 business days.
              </p>
              <a
                href="mailto:talent@apexcreatormanagement.com"
                className="text-sm text-bone hover:text-brand-fire transition-colors break-all"
              >
                talent@apexcreatormanagement.com
              </a>
            </div>

            <div className="lg:pt-4">
              <ContactForm variant="minimal" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
