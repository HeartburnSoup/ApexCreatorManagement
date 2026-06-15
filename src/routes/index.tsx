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
      { property: "og:image", content: `${SITE_URL}/og-image.png?v=4` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Apex Creator Management — Building influential brands. Creating meaningful partnerships.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Apex Creator Management" },
      {
        name: "twitter:description",
        content: "Building influential brands. Creating meaningful partnerships.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png?v=4` },
    ],
  }),
  component: Index,
});

const platforms = [
  "YouTube", "TikTok", "Instagram", "Twitch", "Podcasts",
  "Newsletters", "X", "Snapchat", "Kick", "Substack",
];

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
    d: "Beyond content creation, we help creators identify new revenue opportunities, partnerships, product launches, and other growth initiatives.",
  },
];

const niches = [
  "Lifestyle", "Fitness & Wellness", "Fashion", "Beauty", "Travel",
  "Gaming", "Business & Entrepreneurship", "Technology", "Entertainment",
];

const whyUs = [
  {
    n: "01",
    t: "Personalized Representation",
    d: "Every creator is unique. We take a hands-on approach and tailor strategies to your goals.",
  },
  {
    n: "02",
    t: "Trusted Partnerships",
    d: "We build authentic relationships between creators and brands that create value for both sides.",
  },
  {
    n: "03",
    t: "Long-Term Growth",
    d: "Our goal isn't just your next sponsorship — we help build sustainable careers and scalable personal brands.",
  },
  {
    n: "04",
    t: "Dedicated Support",
    d: "From contract review to campaign execution, our team is with you every step of the way.",
  },
];

const stats = [
  { value: "360°", label: "Creator-first strategy" },
  { value: "24/7", label: "Partnership support" },
  { value: "Global", label: "Brand reach" },
];

const brandPillars = [
  { t: "Curated", d: "A vetted roster — not a marketplace." },
  { t: "Strategic", d: "Briefs matched to audience fit, not follower count." },
  { t: "Accountable", d: "Single point of contact, measurable outcomes." },
];

function EyebrowDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-brand-fire">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-fire" aria-hidden />
      {children}
    </span>
  );
}

function Index() {
  const marqueeItems = [...platforms, ...platforms];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
          <div className="aurora" aria-hidden>
            <div className="aurora__blob aurora__blob--1" />
            <div className="aurora__blob aurora__blob--2" />
            <div className="aurora__blob aurora__blob--3" />
          </div>
          <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h1 className="hero-display mt-2 text-[clamp(2.8rem,9vw,6.5rem)] text-white animate-reveal">
              Building Influential{" "}
              <span className="shimmer-text">Brands</span>
              <span className="text-white">.</span>
            </h1>
            <p className="mx-auto mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl animate-reveal [animation-delay:60ms]">
              Creating Meaningful Partnerships.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg animate-reveal [animation-delay:120ms]">
              Apex represents creators, influencers, athletes, and digital entrepreneurs, transforming
              online presence into sustainable businesses.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-white/60 sm:text-base animate-reveal [animation-delay:160ms]">
              Our mission is simple: empower creators to focus on creating while we handle the business
              behind the brand.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-reveal [animation-delay:180ms]">
              <a
                href="#contact"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-brand-fire px-8 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/15 px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white/40 sm:w-auto"
              >
                Our services
              </a>
            </div>
          </div>
        </section>

        {/* Platform marquee */}
        <section className="relative border-y border-white/10 py-6">
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-rtl-track gap-10 pr-10">
              {marqueeItems.map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="flex shrink-0 items-center gap-10 text-2xl font-black uppercase tracking-tight text-white/25 sm:text-3xl"
                >
                  {p}
                  <span className="text-brand-fire/40" aria-hidden>✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl py-12 sm:py-16">
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-8 py-12 text-center">
                  <p className="hero-display text-5xl text-white sm:text-6xl">{s.value}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-12 max-w-2xl">
              <EyebrowDot>What we do</EyebrowDot>
              <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                Full-service creator management
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.n}
                  className="glass-card group relative overflow-hidden rounded-3xl p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand-fire">{s.n}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Niches / representation */}
        <section id="talent" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <h2 className="hero-display max-w-3xl text-3xl text-white sm:text-5xl">
              Looking for Representation?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are actively seeking creators across today's fastest-growing platforms. Whether you're
              emerging or established, we'd love to learn more about your brand and vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {niches.map((n) => (
                <span
                  key={n}
                  className="apex-pill rounded-full px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/62"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Apex */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-12 text-center">
              <EyebrowDot>Why Apex</EyebrowDot>
              <h2 className="hero-display mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-5xl">
                Built for creators who want more
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item) => (
                <div key={item.n} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center">
                  <div className="text-4xl font-black text-brand-fire/30">{item.n}</div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For brands */}
        <section id="brands" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-smoke/60 via-background to-background">
              <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">
                <div>
                  <EyebrowDot>For brands</EyebrowDot>
                  <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                    Partner with creators who move audiences.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Looking to collaborate with creators who drive engagement and deliver results? We help
                    brands identify, negotiate, and manage partnerships aligned with your marketing goals.
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-brand-fire transition-colors hover:text-white"
                  >
                    Start a partnership →
                  </a>
                </div>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                  {brandPillars.map((item) => (
                    <div key={item.t} className="bg-background p-6">
                      <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">{item.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider pb-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <h2 className="hero-display text-3xl text-white sm:text-5xl">
                  Ready to elevate your brand?
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  For creator representation, partnership opportunities, or brand collaborations, send us a
                  message. We typically respond within 1–2 business days.
                </p>
                <p className="mt-8 text-sm font-medium text-white">
                  <span className="font-bold text-brand-fire">Email </span>
                  <a
                    href="mailto:talent@apexcreatormanagement.com"
                    className="break-all transition-colors hover:text-brand-fire"
                  >
                    talent@apexcreatormanagement.com
                  </a>
                </p>
              </div>
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <ContactForm variant="minimal" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
