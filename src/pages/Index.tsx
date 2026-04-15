import { Link } from "react-router-dom";
import { Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, FileText, Cpu, Handshake, AlertTriangle } from "lucide-react";
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

/** Stable href → icon mapping */
const PRACTICE_ICON_MAP: Record<string, typeof Shield> = {
  "/practice-areas/intellectual-property": Shield,
  "/practice-areas/trademarks": Scale,
  "/practice-areas/copyright-digital-content": Gavel,
  "/practice-areas/technology-internet-law": Globe,
  "/practice-areas/ai-and-law": Brain,
  "/practice-areas/commercial-litigation": Briefcase,
};

/** Stable process-step icons */
const PROCESS_STEPS = [
  { id: "consultation", Icon: MessageSquare },
  { id: "assessment",   Icon: FileSearch },
  { id: "execution",    Icon: CheckCircle },
] as const;

/** Stable audience icons */
const AUDIENCES = [
  { id: "startups",  Icon: Briefcase },
  { id: "brands",    Icon: Shield },
  { id: "creators",  Icon: FileText },
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
    url: "https://ai-lawyer.co.il",
    logo: "https://ai-lawyer.co.il/logo.png",
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

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

      <SEOHead
        title="Hadar Yatzkan | IP & Technology Attorney | Israel — Google, Meta & Amazon Experience"
        description="IP and Technology Attorney in Israel. Direct experience representing clients against Google, Meta & Amazon. Advising startups, businesses and creators on trademarks, copyright, and AI law."
        titleHe="הדר יצקן | עורך דין קניין רוחני וטכנולוגיה | ניסיון מול גוגל, מטא ואמזון"
        descriptionHe="עורך דין לקניין רוחני וטכנולוגיה בישראל. ניסיון ישיר מול גוגל, מטא ואמזון. ליווי סטארטאפים, עסקים ויוצרים בסימני מסחר, זכויות יוצרים ודיני AI."
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[94vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(150deg, #071628 0%, #0B1F3A 40%, #132D55 70%, #0B1F3A 100%)" }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "36px 36px" }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #F7F8FA)" }} aria-hidden="true" />

        <div className="container relative z-10 py-36 md:py-48">
          <div className="max-w-2xl">

            {/* Logo lockup */}
            <div className="flex items-center gap-4 mb-10">
              <img src={logo} alt={t.footer.firmName} className="h-14 w-14 object-contain opacity-90" />
              <div>
                <span className="font-display text-lg font-bold tracking-tight block leading-tight text-white">{t.footer.firmName}</span>
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "#C9A227" }}>
                  {lang === "he" ? "קניין רוחני · טכנולוגיה · AI" : "IP · Technology · AI"}
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-6 h-px" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A227" }}>{t.hero.badge}</span>
            </div>

            {/* H1 — bigger, shorter */}
            <h1
              className="font-display font-bold tracking-tight text-white mb-5 leading-[1.05]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw + 0.5rem, 5rem)", letterSpacing: "-0.025em" }}
            >
              {t.hero.h1}
            </h1>

            {/* Sub — one clean line */}
            <p className="text-xl md:text-2xl font-medium mb-6 leading-snug" style={{ color: "rgba(255,255,255,0.72)" }}>
              {t.hero.h1Accent}
            </p>

            {/* Statement — bold single line */}
            <p className="text-sm md:text-base font-semibold tracking-wide mb-7" style={{ color: "#C9A227" }}>
              {t.hero.statement}
            </p>

            {/* Benefit Bullets */}
            <ul className="space-y-2.5 mb-10">
              {t.hero.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
                  <span className="text-sm md:text-base font-medium leading-snug" style={{ color: "rgba(255,255,255,0.80)" }}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                to={localePath("/contact")}
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
              >
                {t.hero.cta1}
                <DirectionalIcon icon="arrow" size={16} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to={localePath("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold tracking-wide border transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.80)" }}
              >
                {t.hero.cta2}
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t.hero.microcopy}
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-5 bg-primary border-b border-primary-foreground/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {t.trust.items.map((item) => (
              <div key={item.title} className="text-center py-1">
                <p className="text-sm font-semibold text-primary-foreground tracking-wide">{item.title}</p>
                <p className="text-xs text-primary-foreground/45 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Section ── */}
      <section className="py-24 md:py-32 bg-background" aria-labelledby="pain-heading">
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.pain.badge}
            </span>
            <h2 id="pain-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.pain.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.pain.items.map((item, i) => (
              <div key={i} className="group border border-border hover:border-accent/40 p-8 transition-all duration-300 flex flex-col">
                <div className="w-8 h-8 mb-5 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-950/30">
                  <span className="text-red-500 text-lg font-bold leading-none" aria-hidden="true">!</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.problem}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{item.desc}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <span className="w-4 h-px flex-shrink-0" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wide" style={{ color: "#C9A227" }}>{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
            >
              {t.pain.cta} <DirectionalIcon icon="arrow" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How I Help — authority section ── */}
      <section className="py-28 md:py-36 bg-background" aria-labelledby="how-help-heading">
        <div className="container">
          <div className="max-w-xl mb-16">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.howIHelp.badge}
            </span>
            <h2 id="how-help-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.howIHelp.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howIHelp.items.map((item, i) => {
              const Icon = HOW_HELP_ICONS[i];
              return (
                <div key={item.title} className="group">
                  <div className="w-11 h-11 mb-5 flex items-center justify-center border border-mid-blue/20 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="text-mid-blue group-hover:text-accent transition-colors" size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-4 items-center">
            <span className="text-sm text-muted-foreground">
              {lang === "he" ? "תחומים מרכזיים:" : "Key areas:"}
            </span>
            <Link to={localePath("/practice-areas/trademarks")} className="text-sm font-medium text-mid-blue hover:text-accent transition-colors hover:underline">
              {lang === "he" ? "סימני מסחר" : "Trademarks"}
            </Link>
            <span className="text-border">·</span>
            <Link to={localePath("/practice-areas/copyright-digital-content")} className="text-sm font-medium text-mid-blue hover:text-accent transition-colors hover:underline">
              {lang === "he" ? "זכויות יוצרים" : "Copyright"}
            </Link>
            <span className="text-border">·</span>
            <Link to={localePath("/practice-areas/ai-and-law")} className="text-sm font-medium text-mid-blue hover:text-accent transition-colors hover:underline">
              {lang === "he" ? "בינה מלאכותית" : "AI & Law"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="py-28 md:py-36 bg-section-alt" aria-labelledby="practice-heading">
        <div className="container">
          <div className="max-w-xl mb-16">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.practiceSection.badge}
            </span>
            <h2 id="practice-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.practiceSection.heading}
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
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
                  className="group bg-section-alt p-10 hover:bg-background transition-all duration-300 flex flex-col"
                >
                  <Icon className="text-mid-blue mb-5" size={24} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-base font-semibold text-foreground mb-2.5 group-hover:text-mid-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {area.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent tracking-wide group-hover:gap-2.5 transition-all">
                    {lang === "he" ? "למידע נוסף" : "Learn More"} <DirectionalIcon size={11} />
                  </span>
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
            <p className="text-xs text-muted-foreground hidden md:block">
              {lang === "he" ? "מענה תוך 24 שעות" : "Reply within 24 hours"}
            </p>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA strip ── */}
      <section className="py-10 border-y border-border bg-background">
        <div className="container flex flex-wrap items-center justify-between gap-5">
          <p className="text-lg font-display font-semibold text-foreground">
            {lang === "he" ? "זקוק לייעוץ בתחום הקניין הרוחני?" : "Need IP or technology legal advice?"}
          </p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#0B1F3A", color: "#ffffff" }}
          >
            {t.hero.cta1} <DirectionalIcon size={14} />
          </Link>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-28 md:py-36 bg-section-alt" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-xl mb-16">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.process.badge}
            </span>
            <h2 id="process-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.process.heading}
            </h2>
          </div>
          <div className="max-w-4xl relative">
            <div className="hidden md:block absolute top-12 start-0 end-0 h-px bg-border" aria-hidden="true" />
            <div className="grid md:grid-cols-3 gap-12 md:gap-10">
              {PROCESS_STEPS.map(({ id, Icon }, i) => {
                const step = t.process.steps[i];
                return (
                  <div key={id} className="group relative">
                    <div className="relative z-10 w-24 h-24 mb-8 rounded-full bg-background border border-mid-blue/20 flex flex-col items-center justify-center group-hover:border-accent group-hover:shadow-md transition-all duration-400">
                      <span className="text-[9px] text-mid-blue font-bold tracking-[0.3em] uppercase mb-1">{t.stepLabel}</span>
                      <span className="text-2xl font-bold text-accent leading-none">{i + 1}</span>
                    </div>
                    <div className="w-10 h-10 mb-4 flex items-center justify-center">
                      <Icon className="text-mid-blue group-hover:text-accent transition-colors duration-300" size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    {i < t.process.steps.length - 1 && (
                      <div className="md:hidden flex justify-start my-6 ps-12">
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
          <div className="max-w-xl mb-16">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.audiences.badge}
            </span>
            <h2 id="audiences-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.audiences.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCES.map(({ id, Icon }, i) => {
              const audience = t.audiences.items[i];
              return (
                <div key={id} className="group p-8 border border-transparent hover:border-border transition-all duration-300">
                  <div className="w-12 h-12 mb-6 border border-accent/25 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="text-mid-blue group-hover:text-accent transition-colors" size={22} strokeWidth={1.5} aria-hidden="true" />
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
          <div className="max-w-xl mb-14">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.insights.badge}
            </span>
            <h2 id="insights-heading" className="section-h2 font-display font-bold text-primary-foreground tracking-tight">
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
          <div className="mb-14">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.faq.badge}
            </span>
            <h2 id="faq-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
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
          <div className="max-w-xl mb-14">
            <span className="text-mid-blue text-[11px] font-semibold tracking-[0.35em] uppercase block mb-4">
              {t.testimonials.badge}
            </span>
            <h2 id="testimonials-heading" className="section-h2 font-display font-bold text-foreground tracking-tight">
              {t.testimonials.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <figure key={i} className="bg-background border border-border p-8 flex flex-col">
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
      <section className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
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
          <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>{t.hero.microcopy}</p>
        </div>
      </section>

      {/* ── Mobile sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t"
        style={{ backgroundColor: "#0B1F3A", borderColor: "rgba(255,255,255,0.08)" }}
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
