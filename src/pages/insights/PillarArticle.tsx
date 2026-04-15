import { Link, useParams } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";

type ArticleKey = "aiCopyright" | "trademarkClearance" | "ipOwnership" | "defamationInternet";

const SLUG_MAP: Record<string, ArticleKey> = {
  "ai-copyright-israel": "aiCopyright",
  "trademark-clearance-checklist": "trademarkClearance",
  "ip-ownership-startups": "ipOwnership",
  "internet-defamation-israel": "defamationInternet",
};

const PillarArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, localePath } = useLanguage();
  const isHe = lang === "he";

  const key = slug ? SLUG_MAP[slug] : undefined;
  if (!key) return <Layout><div className="container py-32 text-center"><h1 className="text-2xl">Article not found</h1></div></Layout>;

  const article = t.pillarArticles[key];
  const common = t.pillarArticles;

  return (
    <Layout>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDesc}
      />
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <Link to={localePath("/insights")} className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mb-10">
            {isHe ? <DirectionalIcon icon="arrow" size={14} /> : <DirectionalIcon icon="arrow" size={14} />}
            {common.backToInsights}
          </Link>

          <h1 className="page-h1 font-display font-bold text-foreground mb-6">{article.title}</h1>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-10">
            <span>{common.lastReviewed}</span>
          </div>

          {/* Disclaimer */}
          <div className="bg-section-alt border border-border p-6 mb-12 text-sm text-muted-foreground leading-relaxed">
            {common.disclaimerNote}
          </div>

          {/* Intro */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{article.intro}</p>

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="section-h2 font-display font-semibold text-foreground mb-4">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="mt-14 bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <CheckCircle className="text-accent" size={20} />
              {common.checklist}
            </h2>
            <ul className="space-y-3">
              {article.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pitfalls */}
          <div className="mt-8 border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <AlertTriangle className="text-accent" size={20} />
              {common.commonPitfalls}
            </h2>
            <ul className="space-y-3">
              {article.pitfalls.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertTriangle className="text-accent shrink-0 mt-0.5" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary text-center">
            <h2 className="text-2xl font-display font-bold text-primary-foreground mb-3">
              {isHe ? "זקוקים לייעוץ?" : "Need Guidance?"}
            </h2>
            <p className="text-primary-foreground/70 text-sm mb-6">
              {isHe ? "נשמח לעזור לכם לנווט בסוגיות אלו." : "We can help you navigate these issues."}
            </p>
            <Link to={localePath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
              {isHe ? "לקביעת פגישת ייעוץ" : "Schedule a Consultation"} <DirectionalIcon size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PillarArticle;
