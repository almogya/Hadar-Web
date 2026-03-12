import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import headshot from "@/assets/attorney-headshot.jpg";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const areaIcons = [Shield, Scale, Gavel, Globe, Brain, Briefcase];
const stepIcons = [MessageSquare, FileSearch, CheckCircle];

const Index = () => {
  const { t, localePath, lang } = useLanguage();

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={lang === "he" ? "משרד עורכי דין מודרני" : "Modern law office interior"}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-px bg-accent" />
                <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold text-primary-foreground leading-[1.1] mb-4 tracking-tight">
                {t.hero.h1}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display text-accent font-medium mb-8 leading-tight">
                {t.hero.h1Accent}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/75 max-w-xl mb-10 leading-relaxed">
                {t.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={localePath("/contact")}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
                >
                  {t.hero.cta1}
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/25 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-all"
                >
                  {t.hero.cta2}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative ms-auto max-w-sm">
                <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                  <img
                    src={headshot}
                    alt={t.founder.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -start-8 bg-background p-6 shadow-xl border border-border">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {t.founder.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.founder.title}
                  </p>
                  <div className="w-8 h-px bg-accent mt-3 mb-2" />
                  <p className="text-xs text-accent font-medium tracking-wide">
                    {t.founder.credential}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
            {t.trust.items.map((item) => (
              <div key={item.title} className="text-center">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-[11px] text-muted-foreground tracking-wide">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="py-28 bg-section-alt" aria-labelledby="practice-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              {t.practiceSection.badge}
            </span>
            <h2
              id="practice-heading"
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mt-4 tracking-tight"
            >
              {t.practiceSection.heading}
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              {t.practiceSection.sub}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {t.practiceSection.areas.map((area, i) => {
              const Icon = areaIcons[i];
              return (
                <Link
                  to={localePath(area.link)}
                  key={area.title}
                  className="group bg-background p-10 hover:bg-muted/30 transition-all duration-300 flex flex-col"
                >
                  <Icon className="text-accent mb-5" size={26} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {area.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent tracking-wide group-hover:gap-2 transition-all">
                    {lang === "he" ? "למידע נוסף" : "Learn More"} <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-14">
            <Link
              to={localePath("/practice-areas")}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline tracking-wide"
            >
              {t.practiceSection.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-28" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              {t.process.badge}
            </span>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 tracking-tight"
            >
              {t.process.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border border-accent/30 flex items-center justify-center">
                    <Icon className="text-accent" size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="text-[11px] text-accent font-semibold tracking-[0.3em] uppercase mb-3">
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

      {/* ── Founder Section (Mobile) ── */}
      <section className="py-24 bg-section-alt lg:hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-60 overflow-hidden shadow-xl mb-6">
              <img src={headshot} alt={t.founder.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">{t.founder.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t.founder.title}</p>
            <div className="w-8 h-px bg-accent mt-3 mb-2" />
            <p className="text-xs text-accent font-medium tracking-wide">{t.founder.credential}</p>
          </div>
        </div>
      </section>

      {/* ── Featured Insights ── */}
      <section className="py-28 bg-primary" aria-labelledby="insights-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              {t.insights.badge}
            </span>
            <h2
              id="insights-heading"
              className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-4 tracking-tight"
            >
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
                <span className="mt-auto inline-flex items-center gap-1 text-xs text-accent font-medium tracking-wide group-hover:gap-2 transition-all">
                  {t.insights.readMore} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to={localePath("/insights")}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline tracking-wide"
            >
              {lang === "he" ? "לכל המאמרים" : "View All Insights"} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              {t.faq.badge}
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 tracking-tight"
            >
              {t.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
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

      {/* ── CTA ── */}
      <section className="py-28 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 tracking-tight">
            {t.ctaSection.heading}
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-4 leading-relaxed">
            {t.ctaSection.sub}
          </p>
          <p className="text-primary-foreground/50 text-xs max-w-lg mx-auto mb-10 leading-relaxed">
            {t.ctaSection.disclaimer}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={localePath("/contact")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
            >
              {t.ctaSection.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/25 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-all"
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
