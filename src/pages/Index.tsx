import { Link } from "react-router-dom";
import { Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, FileText, Cpu, Handshake, AlertTriangle, BarChart2, MessageSquareX, ScrollText, Eye, UserX, Camera, User, Users, Award } from "lucide-react";
import heroNightImg from "@/assets/hero-trademark-shield.png";
import editorialImg from "@/assets/hero-editorial.jpg";
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


/** Stable href → icon mapping */
const PRACTICE_ICON_MAP: Record<string, typeof Shield> = {
  "/practice-areas/intellectual-property": Shield,
  "/practice-areas/trademarks": Scale,
  "/practice-areas/copyright-digital-content": Gavel,
  "/practice-areas/technology-internet-law": Globe,
  "/practice-areas/ai-and-law": Brain,
  "/practice-areas/commercial-litigation": Briefcase,
  "/practice-areas/internet-defamation": MessageSquareX,
  "/practice-areas/terms-of-use": ScrollText,
  "/practice-areas/accessibility-compliance": Eye,
  "/practice-areas/user-blocking": UserX,
};

/** Stable process-step icons */
const PROCESS_STEPS = [
  { id: "review",   Icon: FileSearch },
  { id: "analysis", Icon: BarChart2 },
  { id: "filing",   Icon: FileText },
] as const;

/** Partners section icons */
const PARTNER_ICONS = [Handshake, Shield, Briefcase, MessageSquare, FileSearch, FileText] as const;

/** Stable audience icons */
const AUDIENCES = [
  { id: "startups",  Icon: Briefcase },
  { id: "brands",    Icon: Camera },
  { id: "creators",  Icon: User },
] as const;

/** Stable how-I-help icons */
const HOW_HELP_ICONS = [Scale, Handshake, Cpu, AlertTriangle] as const;


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

  // LegalService JSON-LD
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "HY Law Offices",
    alternateName: lang === "he" ? "הדר יצקן, עורך דין" : "Hadar Yatzkan, Attorney",
    url: "https://ai-law.co.il",
    logo: "https://ai-law.co.il/logo.webp",
    description: lang === "he"
      ? "עורך דין המתמחה בקניין רוחני, דיני טכנולוגיה ובינה מלאכותית בגבעתיים, ישראל."
      : "Attorney specializing in intellectual property, technology law, and AI in Givatayim, Israel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "46 Weizmann St",
      addressLocality: "Givatayim",
      addressCountry: "IL",
    },
    telephone: "+972542234726",
    email: "Hadar@ai-lawyer.co.il",
    areaServed: ["IL", "US", "GB", "EU"],
    availableLanguage: ["Hebrew", "English"],
  };

  // Reviews JSON-LD
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "HY Law Offices",
    url: "https://ai-law.co.il",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: t.testimonials.items.length,
      bestRating: "5",
    },
    review: t.testimonials.items.map((item) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: item.name },
      reviewBody: item.quote,
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <SEOHead
        title="Hadar Yatzkan | IP & Technology Attorney | Israel — Google, Meta & Amazon Experience"
        description="IP and Technology Attorney in Israel. Direct experience representing clients against Google, Meta & Amazon. Advising startups, businesses and creators on trademarks, copyright, and AI law."
        titleHe="עורך הדין הדר יצקן | מומחה לדיני קניין רוחני ולשון הרע"
        descriptionHe="עורך דין לקניין רוחני וטכנולוגיה בישראל. ניסיון ישיר מול גוגל, מטא ואמזון. ליווי סטארטאפים, עסקים ויוצרים בסימני מסחר, זכויות יוצרים ודיני AI."
      />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>
        <img src={heroNightImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "49% 50%" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,21,39,0.85) 0%, rgba(8,21,39,0.75) 60%, rgba(8,21,39,0.92) 100%)" }} aria-hidden="true" />

        <div className="relative z-10 w-full text-center px-6 py-40 md:py-48">
          <div className="w-12 h-[2px] mx-auto mb-10" style={{ backgroundColor: "#C9A227", opacity: 0.6 }} aria-hidden="true" />
          <h1 className="text-white font-bold mb-6 mx-auto" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.1, maxWidth: "820px", whiteSpace: "pre-line" }}>
            {t.hero.h1}
          </h1>
          <p className="mx-auto mb-3 leading-relaxed font-semibold" style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 1.4vw, 1.125rem)", maxWidth: "580px" }}>
            {t.hero.sub}
          </p>
          {t.hero.subDesc && (
            <p className="mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.875rem, 1.1vw, 1rem)", maxWidth: "580px" }}>
              {t.hero.subDesc}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={localePath("/contact")}
              className="group inline-flex items-center gap-2.5 px-9 py-4 text-[15px] font-bold tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02] animate-shimmer-btn"
              style={{ color: "#081527" }}
            >
              <DirectionalIcon icon="arrow" size={15} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              {t.hero.cta1}
            </Link>
          </div>
          {lang === "he" && (
            <p className="mt-8 mx-auto max-w-xl text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
              השימוש בכלי בינה מלאכותית נעשה ככלי עזר בלבד, ואינו מחליף ייעוץ משפטי, בדיקה מקצועית, שיקול דעת אנושי או אחריות מקצועית של עורך הדין המטפל. השימוש כאמור אינו גורע מחיסיון עורך דין–לקוח.
            </p>
          )}
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-10 bg-primary border-b border-primary-foreground/10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-primary-foreground/10">
            {([Award, Gavel, Users] as const).map((Icon, i) => {
              const item = t.trust.items[i];
              return (
                <div key={item.title} className="flex flex-col items-center text-center px-8 py-6 sm:py-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: "rgba(201,162,39,0.12)",
                      animation: `float 3.4s ease-in-out ${i * 0.55}s infinite, glow-gold 2.8s ease-in-out ${i * 0.55}s infinite`,
                    }}
                  >
                    <Icon size={17} style={{ color: "#C9A227" }} aria-hidden="true" />
                  </div>
                  <div className="w-8 h-px mb-3" style={{ backgroundColor: "rgba(201,162,39,0.35)" }} aria-hidden="true" />
                  <p className="text-sm font-bold text-primary-foreground tracking-wide leading-snug mb-1">{item.title}</p>
                  {item.sub && <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.42)" }}>{item.sub}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── Practice Areas ── */}
      <section className="py-28 md:py-36 bg-section-alt" aria-labelledby="practice-heading">
        <div className="container">
          <div className="max-w-xl mb-16 mx-auto text-center">
            <h2 id="practice-heading" className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.practiceSection.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {t.practiceSection.areas.map((area) => {
              const Icon = PRACTICE_ICON_MAP[area.link] || Shield;
              return (
                <Link
                  to={localePath(area.link)}
                  key={area.title}
                  className="group bg-section-alt p-8 hover:bg-background transition-all duration-300 flex flex-col items-center text-center"
                >
                  <Icon className="text-mid-blue mb-4 transition-all duration-300 group-hover:text-accent group-hover:scale-125" size={24} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-mid-blue transition-colors">
                    {area.title}
                  </h3>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
            <Link
              to={localePath("/practice-areas")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline tracking-wide"
            >
              {t.practiceSection.viewAll} <DirectionalIcon size={13} />
            </Link>
          </div>
        </div>
      </section>



      {/* ── Partners / Strategic ── */}
      <section className="grid md:grid-cols-2" aria-labelledby="partners-heading">
        {/* Image side */}
        <div className="relative min-h-[300px] md:min-h-[480px] overflow-hidden">
          <img src={editorialImg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(8,21,39,0.55)" }} aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-wrap gap-10 justify-center px-10">
              {t.partners.items.map((item, i) => {
                const Icon = PARTNER_ICONS[i];
                return (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.25)" }}>
                      <Icon size={18} style={{ color: "#C9A227" }} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Text side */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-16" style={{ backgroundColor: "#091A30" }}>
          <div className="w-10 h-[2px] mb-8" style={{ backgroundColor: "#C9A227", opacity: 0.5 }} />
          <h2 id="partners-heading" className="text-white font-bold mb-5 leading-snug" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)" }}>
            {t.partners.heading}
          </h2>
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem" }}>
            {t.partners.sub}
          </p>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-28 md:py-36 bg-section-alt" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-xl mb-16 mx-auto text-center">
            <h2 id="process-heading" className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.process.heading}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-12 start-0 end-0 h-px bg-border" aria-hidden="true" />
            <div className="grid md:grid-cols-3 gap-12 md:gap-10">
              {PROCESS_STEPS.map(({ id, Icon }, i) => {
                const step = t.process.steps[i];
                return (
                  <div key={id} className="group relative flex flex-col items-center text-center">
                    <div
                      className="relative z-10 w-24 h-24 mb-6 rounded-full bg-background border border-mid-blue/20 flex flex-col items-center justify-center group-hover:border-accent transition-all duration-400"
                      style={{ animation: `ring-pulse 2.4s ease-out ${i * 0.7}s infinite` }}
                    >
                      <span className="text-[9px] text-mid-blue font-bold tracking-[0.3em] uppercase mb-1">{t.stepLabel}</span>
                      <span className="text-2xl font-bold text-accent leading-none">{i + 1}</span>
                    </div>
                    <div className="w-10 h-10 mb-4 flex items-center justify-center">
                      <Icon className="text-mid-blue group-hover:text-accent transition-colors duration-300" size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
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

      {/* ── Who I Work With ── */}
      <section className="py-28 md:py-36 bg-background" aria-labelledby="audiences-heading">
        <div className="container">
          <div className="max-w-xl mb-16 mx-auto text-center">
            <h2 id="audiences-heading" className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.audiences.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCES.map(({ id, Icon }, i) => {
              const audience = t.audiences.items[i];
              return (
                <div key={id} className="group p-8 border border-transparent hover:border-border transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-6 border border-accent/25 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="text-mid-blue group-hover:text-accent transition-all duration-300 group-hover:scale-110" style={{ animation: `icon-pop 3s ease-in-out ${i * 0.8}s infinite` }} size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2.5">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline tracking-wide"
            >
              {lang === "he" ? "לקביעת ייעוץ ראשוני" : "Schedule an initial consultation"} <DirectionalIcon size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Insights ── */}
      <section className="py-28 md:py-36 bg-primary" aria-labelledby="insights-heading">
        <div className="container">
          <div className="max-w-xl mb-14 mx-auto text-center">
            <h2 id="insights-heading" className="font-display font-bold text-primary-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.insights.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {t.insights.articles.map((article) => (
              <Link
                key={article.title}
                to={localePath(article.link)}
                className="group border border-primary-foreground/10 p-8 hover:border-primary-foreground/25 hover:bg-white/5 transition-all duration-300 flex flex-col"
              >
                <span className="text-[10px] font-semibold text-accent tracking-[0.25em] uppercase mb-3">
                  {article.category}
                </span>
                <h3 className="font-display text-base font-semibold text-primary-foreground mb-4 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-accent font-semibold tracking-wide group-hover:gap-2.5 transition-all">
                  {t.insights.readMore} <DirectionalIcon size={11} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-start">
            <Link
              to={localePath("/insights")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline tracking-wide"
            >
              {lang === "he" ? "לכל המאמרים" : "View All Insights"} <DirectionalIcon size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 md:py-36" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="mb-14 text-center">
            <h2 id="faq-heading" className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {t.faq.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border bg-background px-6 data-[state=open]:border-foreground/15"
              >
                <AccordionTrigger className="text-start font-display font-semibold text-foreground hover:text-mid-blue py-5 text-[15px] [&>svg]:shrink-0">
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

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32 bg-section-alt" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="max-w-xl mb-14 mx-auto text-center">
            <h2 id="testimonials-heading" className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              {t.testimonials.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <figure key={i} className="bg-background border border-border p-8 flex flex-col relative">
                {item.verified && (
                  <div className="absolute top-4 end-4 flex items-center gap-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google" role="img">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-[10px] font-semibold text-muted-foreground">Google</span>
                  </div>
                )}
                <div className="flex gap-1 mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: "#C9A227" }} aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-border pt-5">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#081527" }}>
        <div className="container max-w-2xl text-center">
          <div className="w-10 h-px mx-auto mb-10" style={{ backgroundColor: "rgba(201,162,39,0.4)" }} />
          <h2 className="font-display font-bold text-white mb-5 leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            {t.ctaSection.heading}
          </h2>
          <p className="mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
            {t.ctaSection.sub}
          </p>
          <p className="mb-10 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", lineHeight: 1.7 }}>
            {t.ctaSection.disclaimer}
          </p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2.5 px-10 py-4 text-[15px] font-bold tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
          >
            {t.ctaSection.cta1} <DirectionalIcon size={16} />
          </Link>

        </div>
      </section>

      {/* ── Mobile sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t"
        style={{ backgroundColor: "#081527", borderColor: "rgba(255,255,255,0.08)" }}
        role="complementary"
        aria-label={lang === "he" ? "קישור מהיר לייעוץ" : "Quick consultation link"}
      >
        <div className="container py-3">
          <Link
            to={localePath("/contact")}
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold tracking-wide"
            style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
          >
            {t.hero.cta1} <DirectionalIcon icon="arrow" size={15} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
