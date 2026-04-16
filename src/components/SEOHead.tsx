import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface SEOHeadProps {
  title: string;
  description: string;
  titleHe?: string;
  descriptionHe?: string;
}

const DOMAIN = "https://ai-law.co.il";

const SEOHead = ({ title, description, titleHe, descriptionHe }: SEOHeadProps) => {
  const { lang } = useLanguage();
  const location = useLocation();

  const pageTitle = lang === "he" && titleHe ? titleHe : title;
  const pageDesc = lang === "he" && descriptionHe ? descriptionHe : description;
  const ogLocale = lang === "he" ? "he_IL" : "en_US";

  const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
  const enUrl = `${DOMAIN}/en${pathWithoutLang || ""}`;
  const heUrl = `${DOMAIN}/he${pathWithoutLang || ""}`;
  const selfUrl = lang === "en" ? enUrl : heUrl;

  useEffect(() => {
    // Title
    document.title = pageTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", pageDesc);

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", pageTitle);

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", pageDesc);

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", selfUrl);

    // OG locale
    let ogLoc = document.querySelector('meta[property="og:locale"]');
    if (!ogLoc) {
      ogLoc = document.createElement("meta");
      ogLoc.setAttribute("property", "og:locale");
      document.head.appendChild(ogLoc);
    }
    ogLoc.setAttribute("content", ogLocale);

    // Remove existing hreflang/canonical tags
    document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]').forEach(el => el.remove());

    // Canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = selfUrl;
    document.head.appendChild(canonical);

    // hreflang en
    const hrefEn = document.createElement("link");
    hrefEn.rel = "alternate";
    hrefEn.hreflang = "en";
    hrefEn.href = enUrl;
    document.head.appendChild(hrefEn);

    // hreflang he
    const hrefHe = document.createElement("link");
    hrefHe.rel = "alternate";
    hrefHe.hreflang = "he";
    hrefHe.href = heUrl;
    document.head.appendChild(hrefHe);

    // x-default
    const hrefDefault = document.createElement("link");
    hrefDefault.rel = "alternate";
    hrefDefault.hreflang = "x-default";
    hrefDefault.href = `${DOMAIN}/`;
    document.head.appendChild(hrefDefault);

    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]').forEach(el => el.remove());
    };
  }, [pageTitle, pageDesc, enUrl, heUrl, selfUrl, ogLocale]);

  return null;
};

export default SEOHead;
