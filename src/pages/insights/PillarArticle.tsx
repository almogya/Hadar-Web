import { Link, useParams } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ArticleCTA from "@/components/ArticleCTA";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";

type ArticleKey =
  | "aiCopyright"
  | "trademarkClearance"
  | "ipOwnership"
  | "defamationInternet"
  | "aiGeneratedCopyright"
  | "trademarkDigitalProtection"
  | "ipStrategyStartups"
  | "digitalContentProtection"
  | "copyrightTechTeams"
  | "acumCopyright"
  | "googleContentRemoval"
  | "fakeGoogleReviews"
  | "metaAccountBlocking"
  | "websiteTermsOfUse"
  | "ndaAgreement"
  | "socialMediaCopyright"
  | "trademarkRegistrationIsrael"
  | "defamationLawsuitCosts"
  | "aiLegalLiability"
  | "reputationProtection";

const SLUG_MAP: Record<string, ArticleKey> = {
  "ai-copyright-israel": "aiCopyright",
  "trademark-clearance-checklist": "trademarkClearance",
  "ip-ownership-startups": "ipOwnership",
  "internet-defamation-israel": "defamationInternet",
  "ai-generated-copyright": "aiGeneratedCopyright",
  "trademark-digital-protection": "trademarkDigitalProtection",
  "ip-strategy-startups": "ipStrategyStartups",
  "digital-content-protection": "digitalContentProtection",
  "copyright-tech-teams": "copyrightTechTeams",
  "acum-copyright-infringement": "acumCopyright",
  "google-content-removal": "googleContentRemoval",
  "fake-google-reviews": "fakeGoogleReviews",
  "meta-account-blocking": "metaAccountBlocking",
  "website-terms-of-use": "websiteTermsOfUse",
  "nda-agreement": "ndaAgreement",
  "social-media-copyright": "socialMediaCopyright",
  "trademark-registration-israel": "trademarkRegistrationIsrael",
  "defamation-lawsuit-costs": "defamationLawsuitCosts",
  "ai-legal-liability": "aiLegalLiability",
  "reputation-protection": "reputationProtection",
};

const PillarArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, localePath } = useLanguage();
  const isHe = lang === "he";

  const key = slug ? SLUG_MAP[slug] : undefined;
  if (!key) return <Layout><div className="container py-32 text-center"><h1 className="text-2xl">Article not found</h1></div></Layout>;

  const article = t.pillarArticles[key];
  const common = t.pillarArticles;

  const DOMAIN = "https://ai-lawyer.co.il";
  const articleUrl = `${DOMAIN}/${lang}/insights/${slug}`;
  const authorName = isHe ? "עו״ד הדר יצקן" : "Adv. Hadar Yatzkan";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    inLanguage: lang,
    author: { "@type": "Person", name: authorName, url: `${DOMAIN}/${lang}/about` },
    publisher: {
      "@type": "Organization",
      name: "HY Law Offices",
      logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isHe ? "דף הבית" : "Home", item: `${DOMAIN}/${lang}` },
      { "@type": "ListItem", position: 2, name: isHe ? "מאמרים" : "Insights", item: `${DOMAIN}/${lang}/insights` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqSchema = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <SEOHead
        title={article.metaTitle}
        description={article.metaDesc}
        type="article"
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

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="section-h2 font-display font-semibold text-foreground mb-6">שאלות ותשובות</h2>
              <div className="space-y-6">
                {article.faq.map((item, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <ArticleCTA />
        </div>
      </article>
    </Layout>
  );
};

export default PillarArticle;
