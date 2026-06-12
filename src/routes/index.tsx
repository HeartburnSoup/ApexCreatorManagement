import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/ContactForm";
import { HeroHighlights } from "@/components/marketing/HeroHighlights";
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
  { n: "01", t: "Creator Representation", d: "Personalized management and career guidance designed to help creators grow their influence, increase revenue, and build lasting brands.", featured: true },
  { n: "02", t: "Brand Partnerships", d: "We connect creators with trusted brands that align with their audience, values, and content style." },
  { n: "03", t: "Sponsorship Negotiation", d: "From one-time campaigns to long-term ambassador agreements, we negotiate competitive deals while protecting our clients' interests." },
  { n: "04", t: "Campaign Management", d: "We oversee campaign execution from start to finish, ensuring deliverables are met and partnerships remain successful." },
  { n: "05", t: "Audience Growth Strategy", d: "Data-driven insights and platform strategies designed to help creators expand their reach and strengthen engagement." },
  { n: "06", t: "Business Development", d: "We help creators identify new revenue opportunities, partnerships, product launches, and other growth initiatives." },
];

const niches = [
  "Lifestyle", "Fitness & Wellness", "Fashion", "Beauty", "Travel",
  "Gaming", "Business & Entrepreneurship", "Technology", "Entertainment",
];

const whyUs = [
  { n: "01", t: "Personalized Representation", d: "Every creator is unique. We take a hands-on approach and tailor strategies to your goals." },
  { n: "02", t: "Trusted Partnerships", d: "We build authentic relationships between creators and brands that create value for both sides." },
  { n: "03", t: "Long-Term Growth", d: "Our goal isn't just your next sponsorship — we help build sustainable careers and scalable personal brands." },
  { n: "04", t: "Dedicated Support", d: "From contract review to campaign execution, our team is with you every step of the way." },
];

const brandPillars = [
  { n: "01", t: "Curated", d: "A vetted roster — not a marketplace." },
  { n: "02", t: "Strategic", d: "Briefs matched to audience fit, not follower count." },
  { n: "03", t: "Accountable", d: "Single point of contact, measurable outcomes." },
];

function NicheMarquee() {
  const doubled = [...niches, ...niches];
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className="marquee-track gap-4 pr-4">
        {doubled.map((n, i) => (
          <span
            key={`${n}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 px-6 py-3 rounded-full border border-brand-fire/30 bg-brand-fire/5 text-sm font-bold uppercase tracking-wider text-bone whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-fire" aria-hidden />
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="mesh-bg text-foreground min-h-screen overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* Hero — full viewport, asymmetric split */}
        <section className="relative min-h-[92vh] flex flex-col justify-end pb-12 sm:pb-20 pt-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full bg-brand-fire/10 blur-[100px] animate-orb pointer-events-none" aria-hidden />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-burnt/10 blur-[80px] animate-orb pointer-events-none" style={{ animationDelay: "3s" }} aria-hidden />
          <div className="absolute top-1/3 left-8 w-px h-32 fire-line opacity-60 hidden lg:block" aria-hidden />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
              <div className="lg:col-span-7 animate-reveal">
                <p className="section-label mb-6">Boutique talent agency</p>
                <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase tracking-[-0.03em] leading-[0.92] mb-6">
                  Building
                  <br />
                  <span className="text-gradient">Influential</span>
                  <br />
                  <span className="text-bone">Brands</span>
                  <span className="text-brand-fire">.</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed text-pretty">
                  Creating meaningful partnerships for creators, influencers, athletes, and digital entrepreneurs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="inline-flex justify-center px-8 py-4 min-h-[52px] bg-brand-fire text-bone text-sm font-bold uppercase tracking-widest rounded-full hover:brightness-110 hover:shadow-[0_0_40px_rgba(255,1,0,0.5)] transition-all"
                  >
                    Get in touch
                  </a>
                  <a
                    href="#services"
                    className="inline-flex justify-center px-8 py-4 min-h-[52px] border border-bone/20 text-bone text-sm font-bold uppercase tracking-widest rounded-full hover:border-brand-fire/50 hover:bg-brand-fire/5 transition-all"
                  >
                    Explore services
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pb-4">
                <HeroHighlights />
              </div>
            </div>
          </div>
        </section>

        {/* Services — bento grid */}
        <section id="services" className="py-20 sm:py-28 lg:py-36 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <p className="section-label mb-4">What we do</p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] text-balance max-w-2xl">
                  Full-service
                  <br />
                  <span className="text-brand-fire">creator</span> management
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-base leading-relaxed lg:text-right">
                From representation to revenue — we handle the business so you can focus on creating.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
              {services.map((s, i) => (
                <article
                  key={s.n}
                  className={`group bento-card rounded-2xl p-6 sm:p-8 animate-reveal ${
                    s.featured ? "md:col-span-2 lg:row-span-1" : ""
                  } ${s.featured ? "relative overflow-hidden" : ""}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {s.featured && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-fire/10 blur-3xl pointer-events-none" aria-hidden />
                  )}
                  <div className="relative flex flex-col h-full">
                    <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-brand-fire/10 border border-brand-fire/20 text-brand-fire font-black text-xl mb-6 group-hover:bg-brand-fire group-hover:text-bone transition-colors">
                      {s.n}
                    </span>
                    <h3 className={`font-bold mb-3 text-bone ${s.featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {s.t}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Talent / Niches — dark band + marquee */}
        <section id="niches" className="py-20 sm:py-28 relative overflow-hidden bg-smoke">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #FF0100 1px, transparent 0)", backgroundSize: "28px 28px" }} aria-hidden />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-fire via-burnt to-brand-fire" aria-hidden />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-10">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <p className="section-label mb-4 text-brand-fire">For creators</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-bone text-balance leading-[0.95]">
                  Looking for
                  <br />
                  representation?
                </h2>
              </div>
              <p className="text-bone/70 text-base sm:text-lg leading-relaxed max-w-lg lg:ml-auto">
                We are actively seeking creators across today's fastest-growing platforms. Emerging or established — we'd love to learn about your brand and vision.
              </p>
            </div>
          </div>

          <NicheMarquee />

          <div className="container mx-auto px-4 sm:px-6 mt-10 relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-fire hover:text-bone transition-colors group"
            >
              Apply for representation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>

        {/* Why Apex — staggered rows */}
        <section className="py-20 sm:py-28 lg:py-36">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-14 sm:mb-20">
              <p className="section-label mb-4">Why Apex</p>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-balance">
                Built for creators who want <span className="text-gradient">more</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-5xl mx-auto">
              {whyUs.map((w, i) => (
                <div
                  key={w.n}
                  className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 p-6 sm:p-8 rounded-2xl bento-card animate-reveal ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="text-5xl sm:text-6xl font-black text-brand-fire/30 group-hover:text-brand-fire/60 transition-colors shrink-0 tabular-nums">
                    {w.n}
                  </span>
                  <div className={`flex-1 ${i % 2 === 1 ? "sm:items-end" : ""}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-bone mb-2">{w.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{w.d}</p>
                  </div>
                  <div className="hidden sm:block w-16 h-px bg-brand-fire/30 group-hover:w-24 group-hover:bg-brand-fire/60 transition-all shrink-0" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands — split panel */}
        <section id="brands" className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-smoke via-background to-background" aria-hidden />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-fire/5 blur-[120px] pointer-events-none" aria-hidden />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              <div>
                <p className="section-label mb-4">For brands</p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.92] text-balance mb-6">
                  Partner with creators who{" "}
                  <span className="text-brand-fire italic">move</span>{" "}
                  audiences.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                  We help brands identify, negotiate, and manage partnerships aligned with your marketing goals — with creators who drive real engagement.
                </p>
                <a
                  href="#contact"
                  className="inline-flex justify-center px-8 py-4 min-h-[52px] bg-brand-fire text-bone text-sm font-bold uppercase tracking-widest rounded-full hover:brightness-110 hover:shadow-[0_0_40px_rgba(255,1,0,0.45)] transition-all"
                >
                  Start a partnership →
                </a>
              </div>

              <div className="grid gap-4">
                {brandPillars.map((item) => (
                  <div
                    key={item.n}
                    className="group flex gap-6 p-6 sm:p-8 rounded-2xl bento-card glow-border items-start"
                  >
                    <span className="text-3xl font-black text-brand-fire leading-none">{item.n}</span>
                    <div>
                      <h3 className="text-xl font-bold text-bone mb-1">{item.t}</h3>
                      <p className="text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact — centered dramatic */}
        <section id="contact" className="py-20 sm:py-28 lg:py-36 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-fire/40 to-transparent" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <p className="section-label mb-4">Get started</p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-balance leading-[0.95]">
                  Ready to elevate
                  <br />
                  <span className="text-gradient">your brand?</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-2 space-y-6 lg:pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    For creator representation, partnership opportunities, or brand collaborations — send us a message. We typically respond within 1–2 business days.
                  </p>
                  <div className="p-6 rounded-2xl bento-card">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-fire mb-2">Email</p>
                    <a
                      href="mailto:talent@apexcreatormanagement.com"
                      className="text-bone font-medium hover:text-brand-fire transition-colors break-all"
                    >
                      talent@apexcreatormanagement.com
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-3 glow-border rounded-3xl bento-card p-6 sm:p-10 shadow-[0_0_60px_rgba(255,1,0,0.08)]">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
