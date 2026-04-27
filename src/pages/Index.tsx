import { Link } from "react-router-dom";
import { Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, FileText, Cpu, Handshake, AlertTriangle, Download } from "lucide-react";
import logo from "@/assets/logo.png";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
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

/** Lead Magnet strip — email capture for free IP checklist */
const LeadMagnetStrip = () => {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("email", email);
      fd.append("_subject", `Free IP Checklist Request — ${email}`);
      fd.append("message", lang === "he" ? "בקשה למדריך IP חינמי" : "Free IP checklist request");
      await fetch("https://formsubmit.co/ajax/hadaryatzkan@gmail.com", { method: "POST", body: fd });
    } catch { /* fail silently */ }
    setStatus("done");
    setEmail("");
  };

  return (
    <section className="py-14" style={{ background: "linear-gradient(135deg, #071628 0%, #0B1F3A 100%)" }} aria-label={t.leadMagnet.badge}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Download size={14} style={{ color: "#C9A227" }} aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A227" }}>{t.leadMagnet.badge}</span>
          </div>
          <h2 className="font-display font-bold text-white mb-3 leading-tight" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" }}>
            {t.leadMagnet.heading}
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>{t.leadMagnet.sub}</p>
          {status === "done" ? (
            <p className="text-sm font-semibold" style={{ color: "#C9A227" }}>✓ {t.leadMagnet.success}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.leadMagnet.placeholder}
                className="flex-1 px-4 py-3.5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
                style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
              >
                {status === "sending" ? t.leadMagnet.sending : t.leadMagnet.cta}
              </button>
            </form>
          )}
          <p className="mt-4 text-[11px]" style={{ color: "rgba(255,255,255,0.30)" }}>{t.leadMagnet.disclaimer}</p>
        </div>
      </div>
    </section>
  );
};

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
      <section
        className="relative min-h-[94vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #B8D0E8 0%, #C8DCF0 35%, #D6E6F5 60%, #BFCFE8 100%)" }}
      >
        {/* Radial glow — top right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(122,188,214,0.30) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        {/* Radial glow — bottom left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 10% 90%, rgba(26,53,102,0.18) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1A3566 1px, transparent 0)", backgroundSize: "36px 36px" }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #F3F7FC)" }} aria-hidden="true" />

        <div className="container relative z-10 py-36 md:py-48">
          <div className="max-w-2xl">

            {/* Logo lockup */}
            <div className="flex items-center gap-4 mb-10">
              <img src={logo} alt={t.footer.firmName} className="h-44 w-44 object-contain" />
              <div>
                <span className="text-5xl font-bold block leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: "0.06em", color: "#1A3566" }}>{t.footer.firmName}</span>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-6 h-px" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
              <span className="text-[14px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A227" }}>{t.hero.badge}</span>
            </div>


            {/* Benefit Bullets */}
            <ul className="space-y-2.5 mb-10">
              {t.hero.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A227" }} aria-hidden="true" />
                  <span className="text-sm md:text-base font-medium leading-snug" style={{ color: "#2B5DAA" }}>{bullet}</span>
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
            </div>

            {/* Microcopy */}
            <p className="text-xs font-medium tracking-wide" style={{ color: "rgba(26,53,102,0.5)" }}>
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

      {/* ── Lead Magnet ── */}
      <LeadMagnetStrip />

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
                    <div className="relative z-10 w-24 h-24 mb-8 mx-auto rounded-full bg-background border border-mid-blue/20 flex flex-col items-center justify-center group-hover:border-accent group-hover:shadow-md transition-all duration-400">
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
                <div key={id} className="group p-8 border border-transparent hover:border-border transition-all duration-300 flex flex-col items-center text-center">
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
