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
  { n: "01", t: "Creator Representation", d: "Personalized management and career guidance designed to help creators grow their influence, increase revenue, and build lasting brands." },
  { n: "02", t: "Brand Partnerships", d: "We connect creators with trusted brands that align with their audience, values, and content style." },
  { n: "03", t: "Sponsorship Negotiation", d: "From one-time campaigns to long-term ambassador agreements, we negotiate competitive deals while protecting our clients' interests." },
  { n: "04", t: "Campaign Management", d: "We oversee campaign execution from start to finish, ensuring deliverables are met, timelines stay on track, and partnerships remain successful." },
  { n: "05", t: "Audience Growth Strategy", d: "Data-driven insights and platform strategies designed to help creators expand their reach and strengthen audience engagement." },
  { n: "06", t: "Business Development", d: "Beyond content creation, we help creators identify new revenue opportunities, partnerships, product launches, and other growth initiatives." },
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

const stats = [
  { value: "360°", label: "Creator-first strategy" },
  { value: "24/7", label: "Partnership support" },
  { value: "Global", label: "Brand reach" },
];

function Index() {
  return (
    <div className="mesh-bg text-foreground min-h-screen overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-0 sm:min-h-[88vh] flex items-center py-14 sm:py-24 overflow-hidden">
          <div className="absolute top-16 right-[5%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-brand-cyan/10 blur-3xl animate-orb" aria-hidden />
          <div className="absolute bottom-10 left-[5%] w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 blur-3xl animate-orb" style={{ animationDelay: "2s" }} aria-hidden />

          <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="animate-reveal max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06] mb-4 sm:mb-6 pr-1">
                Building Influential{" "}
                <span className="text-gradient italic pr-2">Brands</span>
                <span className="text-foreground">.</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-5 sm:mb-6 text-balance">
                Creating Meaningful Partnerships.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-4 text-pretty leading-relaxed">
                Apex represents creators, influencers, athletes, and digital entrepreneurs, transforming online presence into sustainable businesses.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/90 max-w-xl mb-8 sm:mb-10 italic text-pretty leading-relaxed">
                Our mission is simple: empower creators to focus on creating while we handle the business behind the brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex justify-center px-8 py-4 min-h-[48px] bg-primary text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-wide rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/15 hover:shadow-brand-cyan/20"
                >
                  Get in touch
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center px-8 py-4 min-h-[48px] border border-border bg-card/60 text-sm sm:text-base font-semibold uppercase tracking-wide rounded-full hover:border-brand-cyan/40 hover:text-foreground transition-colors"
                >
                  Our services
                </a>
              </div>
            </div>

            <HeroHighlights />
          </div>
        </section>

        {/* Stats strip — compact bar below hero */}
        <section className="border-y border-border bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-4xl font-black text-brand-cyan">{s.value}</p>
                <p className="text-xs sm:text-base text-muted-foreground mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">What we do</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-balance">Full-service creator management</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <article
                  key={s.n}
                  className="group glass rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 animate-reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {s.n}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Niches */}
        <section id="niches" className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #02EFF0 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 max-w-3xl text-balance">
              Looking for Representation?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-2xl mb-10 text-pretty leading-relaxed">
              We are actively seeking creators across today's fastest-growing platforms. Whether you're emerging or established, we'd love to learn more about your brand and vision.
            </p>
            <div className="flex flex-wrap gap-3">
              {niches.map((n) => (
                <span
                  key={n}
                  className="px-5 py-2.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm text-brand-cyan"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Apex */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Why Apex</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-balance">Built for creators who want more</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((w, i) => (
                <div key={w.n} className="text-center p-6 animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-5xl font-black text-primary/30 mb-4">{w.n}</div>
                  <h3 className="text-lg font-bold mb-3">{w.t}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="py-16 sm:py-24 lg:py-32 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">For Brands</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6 sm:mb-8 text-balance">
                Partner with creators who <span className="text-primary italic">move</span> audiences.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Looking to collaborate with creators who drive engagement and deliver results? We help brands identify, negotiate, and manage partnerships aligned with your marketing goals.
              </p>
              <a
                href="#contact"
                className="inline-flex justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] bg-brand-cyan text-primary text-sm sm:text-base font-bold uppercase tracking-wide rounded-full hover:brightness-105 hover:shadow-[0_0_24px_rgba(2,239,240,0.35)] transition-all"
              >
                Start a partnership →
              </a>
            </div>
            <div className="grid gap-4">
              {[
                { n: "01", t: "Curated", d: "A vetted roster — not a marketplace." },
                { n: "02", t: "Strategic", d: "Briefs matched to audience fit, not follower count." },
                { n: "03", t: "Accountable", d: "Single point of contact, measurable outcomes." },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 p-6 rounded-2xl border border-border bg-background hover:border-primary/40 transition-colors">
                  <span className="text-2xl font-black text-primary">{item.n}</span>
                  <div>
                    <h3 className="text-lg font-bold">{item.t}</h3>
                    <p className="text-base text-muted-foreground mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold uppercase tracking-tight mb-4 sm:mb-6 leading-tight text-balance">
                  Ready to elevate your brand?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty leading-relaxed">
                  For creator representation, partnership opportunities, or brand collaborations, send us a message. We typically respond within 1–2 business days.
                </p>
                <p className="text-base sm:text-lg font-medium">
                  <span className="text-primary font-bold">Email</span>{" "}
                  <a href="mailto:talent@apexcreatormanagement.com" className="hover:text-primary transition-colors break-all">
                    talent@apexcreatormanagement.com
                  </a>
                </p>
              </div>
              <div className="glass rounded-3xl p-6 sm:p-8 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
