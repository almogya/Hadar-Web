import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface SEOHeadProps {
  title: string;
  description: string;
  titleHe?: string;
  descriptionHe?: string;
  /** Absolute URL of a social-share image. Defaults to the site OG image. */
  image?: string;
  /** og:type — "website" (default) or "article" for content pages. */
  type?: "website" | "article";
  /** When true, emit a noindex robots directive (e.g. thank-you / 404). */
  noindex?: boolean;
}

const DOMAIN = "https://ai-lawyer.co.il";

/**
 * Renders per-route <head> tags into the static HTML during SSG (via
 * vite-react-ssg's Head) and keeps them in sync on client navigation.
 * Produces no visible UI.
 */
const SEOHead = ({ title, description, titleHe, descriptionHe, image, type = "website", noindex }: SEOHeadProps) => {
  const { lang } = useLanguage();
  const location = useLocation();

  const pageTitle = lang === "he" && titleHe ? titleHe : title;
  const pageDesc = lang === "he" && descriptionHe ? descriptionHe : description;
  const ogLocale = lang === "he" ? "he_IL" : "en_US";
  const ogLocaleAlt = lang === "he" ? "en_US" : "he_IL";

  const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
  const enUrl = `${DOMAIN}/en${pathWithoutLang || ""}`;
  const heUrl = `${DOMAIN}/he${pathWithoutLang || ""}`;
  const selfUrl = lang === "en" ? enUrl : heUrl;
  const ogImage = image || `${DOMAIN}/og-image.jpg`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={selfUrl} />
      <link rel="alternate" hrefLang="he" href={heUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/`} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={selfUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HY Law Offices" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEOHead;
