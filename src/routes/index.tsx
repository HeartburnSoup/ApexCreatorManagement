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
  { n: "01", t: "Representation", d: "Career strategy, brand positioning, and hands-on deal guidance." },
  { n: "02", t: "Partnerships", d: "Creators matched with brands their audiences already trust." },
  { n: "03", t: "Negotiation", d: "Campaign terms, usage, exclusivity, and long-term value protected." },
  { n: "04", t: "Campaign Ops", d: "Timelines, deliverables, and approvals kept clean from start to finish." },
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
  { t: "Curated", d: "Vetted roster, not a marketplace." },
  { t: "Strategic", d: "Audience fit over follower count." },
  { t: "Accountable", d: "One contact, measurable outcomes." },
];

const orbitStats = [
  { value: "360°", label: "Creator strategy" },
  { value: "24/7", label: "Partnership support" },
  { value: "Global", label: "Brand reach" },
];

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden p-3 sm:p-5">
          <div className="apex-stage relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] sm:rounded-[3rem]">
            <div className="absolute inset-0 apex-grid opacity-35" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" aria-hidden />

            <div className="relative z-10 grid min-h-[calc(100vh-2rem)] items-center gap-8 px-5 pb-8 pt-20 sm:px-10 sm:pb-10 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
              <div className="max-w-4xl">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-white/70">
                  Apex Creator Management
                </p>
                <h1 className="hero-display text-[clamp(3.6rem,12vw,8.5rem)] text-white">
                  Creator
                  <span className="block hero-display-outline">Orbit</span>
                </h1>
                <div className="mt-8 grid max-w-2xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-md text-base leading-relaxed text-white/76 sm:text-lg">
                    A boutique management engine for creators ready to turn influence into enduring brand equity.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex h-14 w-fit items-center gap-4 rounded-full bg-white px-6 text-sm font-bold text-background shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.02]"
                  >
                    Get in touch
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-fire text-white">→</span>
                  </a>
                </div>
              </div>

              <ApexVisual />
            </div>

            <div className="relative z-10 grid border-t border-white/12 bg-black/18 sm:grid-cols-3">
              {orbitStats.map((item) => (
                <div key={item.label} className="flex items-end justify-between gap-5 border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="max-w-28 text-right text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <section id="services" className="page-section">
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="section-label mb-3">What we do</p>
                <h2 className="hero-display text-3xl text-white sm:text-5xl">
                  Management, without the noise.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground lg:ml-auto">
                We keep the public-facing brand sharp and the business layer handled: strategy, deal flow, negotiation, and execution.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.n} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-brand-fire/50">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-fire/0 blur-2xl transition-colors group-hover:bg-brand-fire/20" aria-hidden />
                  <span className="text-xs font-bold tracking-widest text-brand-fire">{s.n}</span>
                  <h3 className="mt-7 text-sm font-black uppercase tracking-[0.14em] text-white">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-divider page-section">
            <div className="grid gap-4 lg:grid-cols-2">
              <div id="talent" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-smoke/40 p-6 sm:p-8">
                <p className="section-label mb-5">For creators</p>
                <h2 className="hero-display text-3xl text-white sm:text-4xl">
                  Build the brand behind the audience.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Representation for creators who want sharper deals, better alignment, and a stronger long-term business.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {niches.map((n) => (
                    <span key={n} className="apex-pill rounded-full px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/62">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div id="brands" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                <p className="section-label mb-5">For brands</p>
                <h2 className="hero-display text-3xl text-white sm:text-4xl">
                  Partnerships that feel native.
                </h2>
                <div className="mt-7 space-y-5">
                  {brandPillars.map((item) => (
                    <div key={item.t} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-white/10 pt-5">
                      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">{item.t}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-divider page-section">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="section-label mb-3">Why Apex</p>
                <h2 className="hero-display text-3xl text-white sm:text-5xl">
                  Less agency. More signal.
                </h2>
              </div>
              <div className="grid gap-3">
                {whyUs.map((item) => (
                  <div key={item.marker} className="grid grid-cols-[5rem_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-lg font-black text-brand-fire">{item.marker}</p>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{item.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section-divider page-section pb-20">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-smoke/70 via-background to-background">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
                <div>
                  <p className="section-label mb-4">Contact</p>
                  <h2 className="hero-display text-3xl text-white sm:text-5xl">
                    Let’s build what comes next.
                  </h2>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    For creator representation, brand collaborations, or general inquiries.
                  </p>
                  <a
                    href="mailto:talent@apexcreatormanagement.com"
                    className="mt-8 inline-block break-all text-sm text-white transition-colors hover:text-brand-fire"
                  >
                    talent@apexcreatormanagement.com
                  </a>
                </div>
                <ContactForm variant="minimal" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
