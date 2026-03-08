import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch } from "lucide-react";
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
  const { t, localePath } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Modern law office interior" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                {t.hero.h1}
                <br />
                <span className="text-gold">{t.hero.h1Accent}</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
                {t.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
                >
                  {t.hero.cta1} <ArrowRight size={16} />
                </Link>
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
                >
                  {t.hero.cta2}
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="w-80 h-96 overflow-hidden shadow-2xl">
                  <img src={headshot} alt={t.founder.name} className="w-full h-full object-cover" loading="eager" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-lg max-w-[240px]">
                  <p className="font-display font-semibold text-foreground">{t.founder.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.founder.title}</p>
                  <p className="text-xs text-gold mt-2 font-medium">{t.founder.credential}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {t.trust.items.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-section-alt" aria-labelledby="practice-heading">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.practiceSection.badge}</span>
            <h2 id="practice-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{t.practiceSection.heading}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.practiceSection.sub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.practiceSection.areas.map((area, i) => {
              const Icon = areaIcons[i];
              return (
                <Link to={localePath(area.link)} key={area.title} className="group bg-background p-8 border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg block">
                  <Icon className="text-gold mb-4" size={28} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to={localePath("/practice-areas")} className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:underline">
              {t.practiceSection.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24" aria-labelledby="process-heading">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.process.badge}</span>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{t.process.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold-light flex items-center justify-center">
                    <Icon className="text-gold" size={28} aria-hidden="true" />
                  </div>
                  <div className="text-xs text-gold font-semibold mb-2">{t.stepLabel} {i + 1}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-section-alt" aria-labelledby="insights-heading">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.insights.badge}</span>
            <h2 id="insights-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{t.insights.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.insights.articles.map((article) => (
              <Link
                key={article.title}
                to={localePath(article.link)}
                className="group bg-background border border-border p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg block"
              >
                <span className="text-xs font-medium text-gold tracking-widest uppercase">{article.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm text-gold">{t.insights.readMore} <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.faq.badge}</span>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{t.faq.heading}</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-background px-6">
                <AccordionTrigger className="text-start font-display font-semibold text-foreground hover:text-gold py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">{t.ctaSection.heading}</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4">{t.ctaSection.sub}</p>
          <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto mb-8">{t.ctaSection.disclaimer}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
            >
              {t.ctaSection.cta1} <ArrowRight size={16} />
            </Link>
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
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
