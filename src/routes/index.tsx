import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

const SITE_URL = "https://apexcreatormanagement.com";

const PAGE_TITLE =
  "Creator Management Agency | Website & Google Visibility for Brand Deals | Apex";
const PAGE_DESCRIPTION =
  "Boutique creator management that builds your website and Google presence so brands find a partnership-ready creator. Representation, brand deals, and search visibility.";

const faqItems = [
  {
    q: "Do you only manage talent, or do you also build websites?",
    a: "Both. We represent creators and build the website, media kit, and Google presence brands need when they vet you for partnerships.",
  },
  {
    q: "Why does Google matter for brand partnerships?",
    a: "CreatorIQ research found 63% of enterprise brands use Google Search or Google Alerts to vet creators. Social gets you noticed — search often decides the deal.",
  },
  {
    q: "Who is Apex for?",
    a: "Creators, influencers, athletes, and digital entrepreneurs who want representation plus a professional online footprint that supports brand deals.",
  },
  {
    q: "How do I get started?",
    a: "Send a short note about your platforms, audience, and goals. We typically reply within 1–2 business days.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Apex Creator Management",
  url: SITE_URL,
  description: PAGE_DESCRIPTION,
  areaServed: "Worldwide",
  serviceType: [
    "Creator talent management",
    "Influencer representation",
    "Creator website development",
    "Brand partnership visibility",
    "Sponsorship negotiation",
  ],
  provider: {
    "@type": "Organization",
    name: "Apex Creator Management",
    url: SITE_URL,
    email: "talent@apexcreatormanagement.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "Apex Creator Management",
    url: SITE_URL,
  },
  about: [
    "Creator management",
    "Influencer talent agency",
    "Brand partnerships",
    "Creator websites",
    "Google visibility for creators",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "creator management agency, influencer talent management, creator website, brand partnerships, Google visibility for creators, sponsorship representation, influencer SEO",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og-image.png?v=5` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Apex Creator Management — creator representation, websites, and Google visibility for brand partnerships",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png?v=5` },
    ],
  }),
  component: Index,
});

const platforms = [
  "YouTube",
  "TikTok",
  "Instagram",
  "Twitch",
  "Podcasts",
  "Newsletters",
  "X",
  "Snapchat",
  "Kick",
  "Substack",
];

const services = [
  {
    n: "01",
    t: "Creator Representation",
    d: "Hands-on talent management so you can create while we handle career strategy and deal flow.",
  },
  {
    n: "02",
    t: "Creator Website",
    d: "We build a clean site brands can trust — bio, audience, past work, media kit, and a clear next step.",
  },
  {
    n: "03",
    t: "Google Visibility",
    d: "Own what shows when brands search your name: search presence, positioning, and partnership-ready signals.",
  },
  {
    n: "04",
    t: "Brand Partnerships",
    d: "Matched introductions with brands that fit your audience, values, and content — not just follower count.",
  },
  {
    n: "05",
    t: "Deal Negotiation",
    d: "Competitive terms for campaigns and ambassadorships, with your interests protected in writing.",
  },
  {
    n: "06",
    t: "Campaign Support",
    d: "From brief to delivery, we keep timelines, deliverables, and brand relationships on track.",
  },
];

const niches = [
  "Lifestyle",
  "Fitness & Wellness",
  "Fashion",
  "Beauty",
  "Travel",
  "Gaming",
  "Business",
  "Technology",
  "Entertainment",
];

const whyUs = [
  {
    n: "01",
    t: "Representation + infrastructure",
    d: "Most agencies stop at intros. We also build the site and search presence brands check next.",
  },
  {
    n: "02",
    t: "Fit over vanity metrics",
    d: "Brands rank suitability ahead of follower count. We package who you are, not just how big you are.",
  },
  {
    n: "03",
    t: "Partnership-ready proof",
    d: "Audience, values, past work, and contact — in one place brands can evaluate in minutes.",
  },
  {
    n: "04",
    t: "Long-term leverage",
    d: "Every deal and campaign strengthens the brand asset you own: your name on Google.",
  },
];

const stats = [
  { value: "63%", label: "Enterprise brands Google creators", detail: "CreatorIQ, 2025–26" },
  { value: "51%", label: "Mid-market brands do the same", detail: "Search & Alerts vetting" },
  { value: "3×", label: "Vetting tools used on average", detail: "Social alone is not enough" },
];

const brandPillars = [
  { t: "Discoverable", d: "Creators with clear sites and search presence — easy to evaluate fast." },
  { t: "Aligned", d: "Matched to audience fit and brand safety, not raw follower counts." },
  { t: "Accountable", d: "One point of contact from outreach through campaign delivery." },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
          <div className="aurora" aria-hidden>
            <div className="aurora__blob aurora__blob--1" />
            <div className="aurora__blob aurora__blob--2" />
            <div className="aurora__blob aurora__blob--3" />
          </div>
          <div
            className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <EyebrowDot>Creator management + search presence</EyebrowDot>
            <h1 className="hero-display mt-5 text-[clamp(2.6rem,8.5vw,5.75rem)] text-white animate-reveal">
              Get found by brands.
              <br />
              <span className="shimmer-text">Land the partnership.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg animate-reveal [animation-delay:80ms]">
              Apex represents creators — and builds the website and Google presence that turns
              brand interest into signed deals.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-reveal [animation-delay:140ms]">
              <a
                href="#contact"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-brand-fire px-8 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Apply for representation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#visibility"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/15 px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white/40 sm:w-auto"
              >
                Why Google matters
              </a>
            </div>
          </div>
        </section>

        {/* Platform marquee */}
        <section className="relative border-y border-white/10 py-6" aria-label="Platforms we work across">
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-rtl-track gap-10 pr-10">
              {marqueeItems.map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="flex shrink-0 items-center gap-10 text-2xl font-black uppercase tracking-tight text-white/25 sm:text-3xl"
                >
                  {p}
                  <span className="text-brand-fire/40" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Proof stats */}
        <section className="px-5 sm:px-8" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-6xl py-12 sm:py-16">
            <h2 id="proof-heading" className="sr-only">
              Brand partnership search statistics
            </h2>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-8 py-12 text-center">
                  <p className="hero-display text-5xl text-white sm:text-6xl">{s.value}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-white/35">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visibility pitch */}
        <section id="visibility" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-smoke/60 via-background to-background p-8 sm:p-12 lg:p-14">
              <EyebrowDot>Brand partnership visibility</EyebrowDot>
              <h2 className="hero-display mt-4 max-w-3xl text-3xl text-white sm:text-5xl">
                Social gets you noticed. Google often closes the deal.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                CreatorIQ found that <span className="text-white">63% of enterprise brands</span>{" "}
                use Google Search or Google Alerts to vet creators for partnerships. If they
                search your name and only find scattered profiles, you leave the next step to
                chance.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                We build the owned presence brands need: a professional creator website, clear
                positioning, and search visibility that makes partnership outreach easy.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-brand-fire transition-colors hover:text-white"
              >
                Make your next search count →
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-12 max-w-2xl">
              <EyebrowDot>What we do</EyebrowDot>
              <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                Talent management built for brand deals
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Representation, a creator website, and Google visibility — so brands can find,
                trust, and book you.
              </p>
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
              Looking for creator representation?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Emerging or established — if you want brand partnerships and a professional online
              footprint to back them up, we want to hear from you.
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
                Built for creators brands can actually book
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item) => (
                <div
                  key={item.n}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center"
                >
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
                    Partner with creators who are ready to evaluate.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Need creators who are discoverable, brand-safe, and easy to brief? We match,
                    negotiate, and manage partnerships that fit your goals.
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
                      <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                        {item.t}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-10 max-w-2xl">
              <EyebrowDot>FAQ</EyebrowDot>
              <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                Quick answers
              </h2>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider pb-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <h2 className="hero-display text-3xl text-white sm:text-5xl">
                  Ready to get found — and booked?
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Tell us about your platforms and goals. Creator representation, website +
                  search visibility, or brand collaborations — we reply within 1–2 business days.
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
