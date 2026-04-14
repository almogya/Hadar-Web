import { Link } from "react-router-dom";
import { Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, Users, Building2, Lightbulb } from "lucide-react";
import logo from "@/assets/logo.png";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Stable href → icon mapping (never index-based) */
const PRACTICE_ICON_MAP: Record<string, typeof Shield> = {
  "/practice-areas/intellectual-property": Shield,
  "/practice-areas/trademarks": Scale,
  "/practice-areas/copyright-digital-content": Gavel,
  "/practice-areas/technology-internet-law": Globe,
  "/practice-areas/ai-and-law": Brain,
  "/practice-areas/commercial-litigation": Briefcase,
};

/** Stable process-step icons keyed by position ID */
const PROCESS_STEPS = [
  { id: "consultation", Icon: MessageSquare },
  { id: "assessment",   Icon: FileSearch },
  { id: "execution",    Icon: CheckCircle },
] as const;

/** Stable audience icons keyed by segment ID */
const AUDIENCES = [
  { id: "startups",  Icon: Building2 },
  { id: "tech",      Icon: Lightbulb },
  { id: "creators",  Icon: Users },
] as const;

const Index = () => {
  const { t, localePath, lang } = useLanguage();

  // FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  // LegalService JSON-LD — authority signal for Google
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "HY Law Offices",
    alternateName: "הדר יצקן, עורכת דין",
    url: "https://ai-lawyer.co.il",
    logo: "https://ai-lawyer.co.il/logo.png",
    description: lang === "he"
      ? "משרד עורכי דין בוטיק המתמחה בקניין רוחני, דיני טכנולוגיה ובינה מלאכותית בגבעתיים, ישראל."
      : "Boutique law firm specializing in intellectual property, technology law, and AI in Givatayim, Israel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "46 Weizmann St",
      addressLocality: "Givatayim",
      addressCountry: "IL",
    },
    telephone: "+972542234726",
    email: "Hadaryatzkan@gmail.com",
    areaServed: ["IL", "US", "GB", "EU"],
    availableLanguage: ["Hebrew", "English"],
    priceRange: "$$",
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <SEOHead
        title="Hadar Yatzkan | Intellectual Property & Technology Law | Israel"
        description="Boutique IP, technology, and AI law firm in Givatayim, Israel. Trademark registration, copyright enforcement, digital content law, and commercial litigation."
        titleHe="הדר יצקן | קניין רוחני ודיני טכנולוגיה | ישראל"
        descriptionHe="משרד עורכי דין בוטיק לקניין רוחני, טכנולוגיה ובינה מלאכותית בגבעתיים. רישום סימני מסחר, אכיפת זכויות יוצרים, דיני תוכן דיגיטלי וליטיגציה מסחרית."
      />

      {/* ── HERO — premium gradient, no stock photo ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1A3A6B 55%, #0B1F3A 100%)" }}
      >
        {/* Subtle legal-tech texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade to page background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #F7F8FA)" }}
          aria-hidden="true"
        />

        <div className="container relative z-10 py-32 md:py-44">
          <div className="max-w-3xl">
            {/* Logo lockup */}
            <div className="flex items-center gap-4 mb-10">
              <img src={logo} alt={t.footer.firmName} className="h-16 w-16 md:h-20 md:w-20 object-contain opacity-90" />
              <div>
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight block leading-tight text-white">
                  {t.footer.firmName}
                </span>
                <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase" style={{ color: "#C9A227" }}>
                  {lang === "he" ? "קניין רוחני · טכנולוגיה · משפט" : "IP · Technology · Law"}
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A227" }}>
                {t.hero.badge}
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-h1 font-display font-bold tracking-tight mb-4 text-white">
              {t.hero.h1}
            </h1>

            {/* Accent subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-medium mb-8 leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
              {t.hero.h1Accent}
            </p>

            {/* Value proposition */}
            <div className="border-s-2 ps-5 mb-10" style={{ borderColor: "#C9A227" }}>
              <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                {t.hero.sub}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-5">
              <Link
                to={localePath("/contact")}
                className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold tracking-wide transition-all duration-200 shadow-lg"
                style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
              >
                {t.hero.cta1}
                <DirectionalIcon icon="arrow" size={18} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to={localePath("/contact")}
                className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold tracking-wide border transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}
              >
                {t.hero.cta2}
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.40)" }}>
              {t.hero.microcopy}
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-6 bg-primary border-b border-primary-foreground/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t.trust.items.map((item) => (
              <div key={item.title} className="text-center">
                <p className="text-sm font-semibold text-primary-foreground tracking-wide">{item.title}</p>
                <p className="text-xs text-primary-foreground/50 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="py-24 md:py-32 bg-background" aria-labelledby="practice-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.practiceSection.badge}
            </span>
            <h2 id="practice-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.practiceSection.heading}
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              {t.practiceSection.sub}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {t.practiceSection.areas.map((area) => {
              const Icon = PRACTICE_ICON_MAP[area.link] || Shield;
              return (
                <Link
                  to={localePath(area.link)}
                  key={area.title}
                  className="group bg-background p-10 hover:bg-muted/30 transition-all duration-300 flex flex-col"
                >
                  <Icon className="text-mid-blue mb-6" size={26} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-mid-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {area.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent tracking-wide group-hover:gap-2.5 transition-all">
                    {lang === "he" ? "למידע נוסף" : "Learn More"} <DirectionalIcon size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Link
              to={localePath("/practice-areas")}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline tracking-wide"
            >
              {t.practiceSection.viewAll} <DirectionalIcon size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA strip ── */}
      <section style={{ padding: "48px 0", backgroundColor: "#0B1F3A" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <p style={{ color: "#ffffff", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 700, margin: 0 }}>
            {t.ctaSection.heading}
          </p>
          <Link
            to={localePath("/contact")}
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: "#1F4B7A",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            {t.ctaSection.cta1}
          </Link>
        </div>
      </section>

      {/* ── How We Work (Dynamic) ── */}
      <section className="py-24 md:py-32 bg-section-alt" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.process.badge}
            </span>
            <h2 id="process-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.process.heading}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 start-0 end-0 h-px bg-border" aria-hidden="true" />
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {PROCESS_STEPS.map(({ id, Icon }, i) => {
                const step = t.process.steps[i];
                return (
                  <div key={id} className="group relative text-center">
                    {/* Step number circle */}
                    <div className="relative z-10 w-24 h-24 mx-auto mb-8 rounded-full bg-background border-2 border-mid-blue/30 flex flex-col items-center justify-center group-hover:border-accent group-hover:shadow-lg transition-all duration-500">
                      <span className="text-[10px] text-mid-blue font-bold tracking-[0.3em] uppercase mb-1">
                        {t.stepLabel}
                      </span>
                      <span className="text-2xl font-bold text-accent leading-none">
                        {i + 1}
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="text-mid-blue group-hover:text-accent transition-colors duration-300" size={28} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                    {/* Arrow between steps on mobile */}
                    {i < t.process.steps.length - 1 && (
                      <div className="md:hidden flex justify-center my-6">
                        <div className="w-px h-8 bg-border" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Advise (Experience/Customers) ── */}
      <section className="py-24 md:py-32" aria-labelledby="audiences-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.audiences.badge}
            </span>
            <h2 id="audiences-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.audiences.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {AUDIENCES.map(({ id, Icon }, i) => {
              const audience = t.audiences.items[i];
              return (
                <div key={id} className="group text-center px-6 py-8 border border-transparent hover:border-border hover:bg-muted/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent/30 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="text-mid-blue group-hover:text-accent transition-colors" size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {audience.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Insights ── */}
      <section className="py-24 md:py-32 bg-primary" aria-labelledby="insights-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.insights.badge}
            </span>
            <h2 id="insights-heading" className="section-h2 font-display font-bold text-primary-foreground mt-4 tracking-tight">
              {t.insights.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.insights.articles.map((article) => (
              <Link
                key={article.title}
                to={localePath(article.link)}
                className="group border border-primary-foreground/15 p-8 hover:border-primary-foreground/30 transition-all duration-300 flex flex-col"
              >
                <span className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase">
                  {article.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mt-3 mb-4 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-accent font-medium tracking-wide group-hover:gap-2.5 transition-all">
                  {t.insights.readMore} <DirectionalIcon size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to={localePath("/insights")}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline tracking-wide"
            >
              {lang === "he" ? "לכל המאמרים" : "View All Insights"} <DirectionalIcon size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.faq.badge}
            </span>
            <h2 id="faq-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border bg-background px-6 data-[state=open]:border-foreground/20"
              >
                <AccordionTrigger className="text-start font-display font-semibold text-foreground hover:text-mid-blue py-5 text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#0B1F3A" }}>
        <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
          <div style={{ width: "48px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)", margin: "0 auto 32px" }} />
          <h2 style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.2 }}>
            {t.ctaSection.heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.8, margin: "0 0 12px" }}>
            {t.ctaSection.sub}
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", lineHeight: 1.7, margin: "0 auto 40px", maxWidth: "480px" }}>
            {t.ctaSection.disclaimer}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <Link
              to={localePath("/contact")}
              style={{
                display: "inline-block",
                padding: "16px 36px",
                backgroundColor: "#1F4B7A",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              {t.ctaSection.cta1}
            </Link>
          </div>
        </div>
      </section>
      {/* ── Mobile sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t"
        style={{ backgroundColor: "#0B1F3A", borderColor: "rgba(255,255,255,0.1)" }}
        role="complementary"
        aria-label={lang === "he" ? "קישור מהיר לייעוץ" : "Quick consultation link"}
      >
        <div className="container py-3">
          <Link
            to={localePath("/contact")}
            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold tracking-wide"
            style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
          >
            {t.hero.cta1}
            <DirectionalIcon icon="arrow" size={16} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
