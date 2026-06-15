import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

const SITE_URL = "https://apexcreatormanagement.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Creator Management — Talent Agency for Creators" },
      {
        name: "description",
        content:
          "Apex is a boutique creator management agency. We handle brand deals, negotiation, and business strategy so creators can focus on creating.",
      },
      { property: "og:title", content: "Apex Creator Management" },
      {
        property: "og:description",
        content: "You create the culture. We build the business behind it.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
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
    t: "Brand Deals",
    d: "We source, pitch, and close partnerships with brands your audience actually respects — no spray-and-pray outreach.",
  },
  {
    n: "02",
    t: "Negotiation",
    d: "Usage rights, exclusivity, whitelisting, renewals. We protect your rate and your long-term value on every contract.",
  },
  {
    n: "03",
    t: "Career Strategy",
    d: "A roadmap for your brand beyond the next upload — products, equity, IP, and revenue that compounds.",
  },
  {
    n: "04",
    t: "Campaign Ops",
    d: "Briefs, timelines, approvals, and invoicing handled end to end so deals never stall in your DMs.",
  },
  {
    n: "05",
    t: "Audience Growth",
    d: "Data-driven positioning and format strategy to deepen the audience you already earned.",
  },
  {
    n: "06",
    t: "Day-to-day Support",
    d: "A real manager in your corner — responsive, protective, and invested in the long game.",
  },
];

const process = [
  { n: "01", t: "Apply", d: "Tell us about your channel, your goals, and where you want to be in two years." },
  { n: "02", t: "Strategy", d: "We build a tailored plan: positioning, rate card, and the brands worth chasing." },
  { n: "03", t: "We pitch & close", d: "Deals land in your inbox already negotiated, vetted, and ready to sign." },
  { n: "04", t: "You scale", d: "You create. We compound the business, partnership by partnership." },
];

const stats = [
  { value: "100%", label: "Creator-first representation" },
  { value: "24/7", label: "Manager in your corner" },
  { value: "0", label: "Lowball deals accepted" },
];

const brandPillars = [
  { t: "Curated roster", d: "A vetted group of creators — not an open marketplace." },
  { t: "Audience fit", d: "Matched on resonance and trust, never just follower count." },
  { t: "One point of contact", d: "Clear comms, clean execution, measurable outcomes." },
];

const faqs = [
  {
    q: "What size creator do you work with?",
    a: "We're boutique by design. We partner with a small roster of creators who have an engaged audience and a real ambition to build a lasting business — across any platform or niche.",
  },
  {
    q: "How does Apex make money?",
    a: "We earn a commission on the partnerships we bring in and manage. When you win, we win. There are no upfront fees to be represented.",
  },
  {
    q: "Do I have to be on one specific platform?",
    a: "No. We represent creators across YouTube, TikTok, Instagram, Twitch, podcasts, newsletters, and more. What matters is the relationship you have with your audience.",
  },
  {
    q: "What happens after I apply?",
    a: "We review every application personally. If it's a fit, we'll set up a call to talk through your goals and how we'd build your strategy before anything is signed.",
  },
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
            <div className="animate-reveal">
              <EyebrowDot>Boutique creator management</EyebrowDot>
            </div>
            <h1 className="hero-display mt-7 text-[clamp(2.8rem,9vw,6.5rem)] text-white animate-reveal [animation-delay:60ms]">
              You create the culture.
              <span className="mt-2 block shimmer-text">We build the business.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg animate-reveal [animation-delay:120ms]">
              Apex is the management team behind ambitious creators. We chase the brand deals, win the
              negotiations, and run the business — so you can stay focused on the work only you can make.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-reveal [animation-delay:180ms]">
              <a
                href="#contact"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-brand-fire px-8 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Apply as a creator
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#brands"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/15 px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white/40 sm:w-auto"
              >
                Partner as a brand
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-reveal [animation-delay:240ms]">
              Representation across every major platform
            </p>
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

        {/* Manifesto */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-5xl page-section">
            <div className="max-w-3xl">
              <p className="text-2xl font-medium leading-snug text-white sm:text-4xl">
                Your audience is the hardest thing to build — and the easiest thing to undervalue.
                <span className="text-muted-foreground"> Apex makes sure every partnership treats it like the asset it is.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <EyebrowDot>What we handle</EyebrowDot>
                <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                  Everything but the camera.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                You stay the talent and the creative. We become the team that turns attention into a
                durable, well-run business.
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
                    <span className="text-xs uppercase tracking-[0.2em] text-white/20">Apex</span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
            <div className="mb-12 text-center">
              <EyebrowDot>How it works</EyebrowDot>
              <h2 className="hero-display mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-5xl">
                Simple to start. Built to compound.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <div key={step.n} className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-fire/30 bg-brand-fire/10 text-sm font-black text-brand-fire">
                    {step.n}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                  {i < process.length - 1 && (
                    <span className="absolute right-6 top-7 hidden text-white/15 lg:block" aria-hidden>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider">
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

        {/* Testimonial */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-5xl page-section section-divider text-center">
            <p className="text-3xl font-medium leading-snug text-white sm:text-5xl sm:leading-tight">
              “The best managers make themselves invisible. You feel them in the deals you close and the
              chaos you <span className="text-brand-fire">never</span> have to deal with again.”
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              The Apex approach
            </p>
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
                    Partnerships that feel native.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Work with creators whose audiences actually convert. We help you identify the right
                    fit, negotiate cleanly, and run campaigns that perform.
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-brand-fire transition-colors hover:text-white"
                  >
                    Start a partnership
                    <span aria-hidden>→</span>
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

        {/* FAQ */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-3xl page-section section-divider">
            <div className="mb-10 text-center">
              <EyebrowDot>Questions</EyebrowDot>
              <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                Good to know.
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl page-section section-divider pb-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <EyebrowDot>Apply / Contact</EyebrowDot>
                <h2 className="hero-display mt-4 text-3xl text-white sm:text-5xl">
                  Let's build what comes next.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Whether you're a creator ready for real representation or a brand looking for the right
                  fit — tell us where you want to go. We read every message.
                </p>
                <a
                  href="mailto:talent@apexcreatormanagement.com"
                  className="mt-8 inline-block break-all text-sm text-white transition-colors hover:text-brand-fire"
                >
                  talent@apexcreatormanagement.com
                </a>
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
