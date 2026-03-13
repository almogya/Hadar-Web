import { Link } from "react-router-dom";
import { Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, Users, Building2, Lightbulb } from "lucide-react";
import heroImg from "@/assets/hero-editorial.jpg";
import headshot from "@/assets/attorney-headshot.jpg";
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

const PRACTICE_ICON_MAP: Record<string, typeof Shield> = {
  "/practice-areas/intellectual-property": Shield,
  "/practice-areas/trademarks": Scale,
  "/practice-areas/copyright-digital-content": Gavel,
  "/practice-areas/technology-internet-law": Globe,
  "/practice-areas/ai-and-law": Brain,
  "/practice-areas/commercial-litigation": Briefcase,
};

const STEP_ICON_MAP = [MessageSquare, FileSearch, CheckCircle];
const AUDIENCE_ICONS = [Building2, Lightbulb, Users];

const Index = () => {
  const { t, localePath, lang, dir } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Hadar Yatzkan | Intellectual Property & Technology Law | Israel"
        description="Boutique IP, technology, and AI law firm in Givatayim, Israel. Trademark registration, copyright enforcement, digital content law, and commercial litigation."
        titleHe="הדר יצקן | קניין רוחני ודיני טכנולוגיה | ישראל"
        descriptionHe="משרד עורכי דין בוטיק לקניין רוחני, טכנולוגיה ובינה מלאכותית בגבעתיים. רישום סימני מסחר, אכיפת זכויות יוצרים, דיני תוכן דיגיטלי וליטיגציה מסחרית."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={lang === "he" ? "בניין משרדים מודרני" : "Modern office architecture at dusk"}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
        </div>
        <div className="container relative z-10 py-32 md:py-40">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
                  {t.hero.badge}
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-h1 font-display font-bold text-primary-foreground tracking-tight mb-5">
                {t.hero.h1}
              </h1>

              {/* Accent line */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-display text-accent font-medium mb-10 leading-tight tracking-tight">
                {t.hero.h1Accent}
              </p>

              {/* Subhead */}
              <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mb-12 leading-relaxed">
                {t.hero.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to={localePath("/contact")}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all duration-200"
                >
                  {t.hero.cta1}
                  <DirectionalIcon icon="arrow" size={16} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/5 transition-all duration-200"
                >
                  {t.hero.cta2}
                </Link>
              </div>
            </div>

            {/* Portrait panel */}
            <div className="lg:col-span-5 hidden lg:flex justify-end">
              <div className="relative">
                <div className="w-80 aspect-[3/4] overflow-hidden">
                  <img
                    src={headshot}
                    alt={t.founder.name}
                    className="w-full h-full object-cover grayscale-[20%]"
                    loading="eager"
                  />
                </div>
                {/* Caption strip */}
                <div className="mt-5 border-t border-primary-foreground/20 pt-4">
                  <p className="font-display text-lg font-semibold text-primary-foreground tracking-tight">
                    {t.founder.name}
                  </p>
                  <p className="text-sm text-primary-foreground/60 mt-0.5">
                    {t.founder.title}
                  </p>
                  <p className="text-xs text-accent font-medium tracking-wide mt-2">
                    {t.founder.credential}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-5">
            {t.trust.items.map((item) => (
              <div key={item.title} className="text-center">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-[11px] text-muted-foreground tracking-wide mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Advise ── */}
      <section className="py-24 md:py-32" aria-labelledby="audiences-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.audiences.badge}
            </span>
            <h2 id="audiences-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.audiences.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.audiences.items.map((audience, i) => {
              const Icon = AUDIENCE_ICONS[i] || Users;
              return (
                <div key={audience.title} className="text-center px-6">
                  <div className="w-14 h-14 mx-auto mb-6 border border-accent/30 flex items-center justify-center">
                    <Icon className="text-accent" size={24} strokeWidth={1.5} aria-hidden="true" />
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

      {/* ── Practice Areas ── */}
      <section className="py-24 md:py-32 bg-section-alt" aria-labelledby="practice-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
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
                  <Icon className="text-accent mb-6" size={26} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
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

      {/* ── How We Work ── */}
      <section className="py-24 md:py-32" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
              {t.process.badge}
            </span>
            <h2 id="process-heading" className="section-h2 font-display font-bold text-foreground mt-4 tracking-tight">
              {t.process.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            {t.process.steps.map((step, i) => {
              const Icon = STEP_ICON_MAP[i];
              return (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border border-accent/30 flex items-center justify-center">
                    <Icon className="text-accent" size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="text-[11px] text-accent font-semibold tracking-[0.35em] uppercase mb-3">
                    {t.stepLabel} {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Founder (Mobile) ── */}
      <section className="py-24 bg-section-alt lg:hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 aspect-[3/4] overflow-hidden shadow-xl mb-6">
              <img src={headshot} alt={t.founder.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">{t.founder.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t.founder.title}</p>
            <div className="w-8 h-px bg-accent mt-3 mb-2" />
            <p className="text-xs text-accent font-medium tracking-wide">{t.founder.credential}</p>
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
                className="group border border-primary-foreground/15 p-8 hover:border-accent/50 transition-all duration-300 flex flex-col"
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
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
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
                className="border border-border bg-background px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-start font-display font-semibold text-foreground hover:text-accent py-5 text-[15px]">
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
      <section className="py-24 md:py-32 bg-section-alt border-t border-border">
        <div className="container max-w-3xl text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <h2 className="section-h2 font-display font-bold text-foreground mb-6 tracking-tight">
            {t.ctaSection.heading}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
            {t.ctaSection.sub}
          </p>
          <p className="text-muted-foreground/60 text-xs max-w-lg mx-auto mb-10 leading-relaxed">
            {t.ctaSection.disclaimer}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={localePath("/contact")}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all"
            >
              {t.ctaSection.cta1}
              <DirectionalIcon size={16} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide hover:bg-muted/50 transition-all"
            >
              {t.ctaSection.cta2}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
