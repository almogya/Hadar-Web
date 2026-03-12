import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const CATEGORY_KEYS = ["ip", "trademarks", "copyright", "ai", "techLaw", "litigation"] as const;

const Insights = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = t.insightsPage.articles;
  const pillarArticles = articles.filter((a) => a.pillar);

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 bg-section-alt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                {t.insightsPage.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
              {t.insightsPage.h1}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.insightsPage.sub}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {/* Featured Pillar Guides */}
          <div className="mb-20">
            <h2 className="text-xl font-display font-semibold text-foreground mb-8">
              {t.insightsPage.pillarHeading}
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {pillarArticles.slice(0, 3).map((article) => (
                <div
                  key={article.title}
                  className="bg-primary p-8 flex flex-col"
                >
                  <span className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase">
                    {t.insightsPage.categories[article.category] || article.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-primary-foreground mt-3 mb-4 leading-snug flex-1">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-medium tracking-wide">
                    {t.insightsPage.readGuide} <ArrowRight size={12} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Article categories">
            <button
              onClick={() => setActiveCategory("all")}
              role="tab"
              aria-selected={activeCategory === "all"}
              className={`px-5 py-2.5 text-xs font-medium tracking-wide transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {t.insightsPage.filterAll}
            </button>
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                role="tab"
                aria-selected={activeCategory === key}
                className={`px-5 py-2.5 text-xs font-medium tracking-wide transition-all ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {t.insightsPage.categories[key]}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((article) => (
              <article
                key={article.title}
                className="group bg-background border border-border p-8 md:p-10 hover:border-accent/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase">
                    {t.insightsPage.categories[article.category] || article.category}
                  </span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Calendar size={11} aria-hidden="true" /> {article.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <button className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-accent tracking-wide hover:gap-2 transition-all self-start">
                  {t.insightsPage.readMore} <ArrowRight size={12} />
                </button>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-16 text-xs text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            {t.insightsPage.disclaimer}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
