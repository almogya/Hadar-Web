import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const CATEGORY_KEYS = ["ip", "trademarks", "copyright", "ai", "techLaw", "litigation"] as const;

const Insights = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = t.insightsPage.articles;
  const pillarArticles = articles.filter((a) => a.pillar);

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.insightsPage.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">{t.insightsPage.h1}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.insightsPage.sub}</p>
          </div>

          {/* Featured Pillar Guides */}
          <div className="mb-16">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">{t.insightsPage.pillarHeading}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pillarArticles.slice(0, 3).map((article) => (
                <div key={article.title} className="bg-primary p-6 text-primary-foreground">
                  <span className="text-xs font-medium text-gold tracking-widest uppercase">{t.insightsPage.categories[article.category] || article.category}</span>
                  <h3 className="font-display text-base font-semibold mt-2 mb-2">{article.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-gold">{t.insightsPage.readGuide} <ArrowRight size={12} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Article categories">
            <button
              onClick={() => setActiveCategory("all")}
              role="tab"
              aria-selected={activeCategory === "all"}
              className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-section-alt text-muted-foreground hover:text-foreground"
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
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-section-alt text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.insightsPage.categories[key]}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((article) => (
              <article
                key={article.title}
                className="group bg-background border border-border p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold tracking-widest uppercase bg-gold-light px-3 py-1">
                    {t.insightsPage.categories[article.category] || article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} aria-hidden="true" /> {article.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                <button className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline self-start">
                  {t.insightsPage.readMore} <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-xs text-muted-foreground text-center">{t.insightsPage.disclaimer}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
