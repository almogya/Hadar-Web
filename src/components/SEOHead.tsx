import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface SEOHeadProps {
  title: string;
  description: string;
  titleHe?: string;
  descriptionHe?: string;
}

const DOMAIN = "[UNSPECIFIED]"; // Replace with real domain when available

const SEOHead = ({ title, description, titleHe, descriptionHe }: SEOHeadProps) => {
  const { lang } = useLanguage();
  const location = useLocation();

  const pageTitle = lang === "he" && titleHe ? titleHe : title;
  const pageDesc = lang === "he" && descriptionHe ? descriptionHe : description;

  const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
  const enUrl = `${DOMAIN}/en${pathWithoutLang || ""}`;
  const heUrl = `${DOMAIN}/he${pathWithoutLang || ""}`;
  const selfUrl = lang === "en" ? enUrl : heUrl;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", pageDesc);

    // Remove existing hreflang/canonical tags
    document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]').forEach(el => el.remove());

    // Add canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = selfUrl;
    document.head.appendChild(canonical);

    // Add hreflang en
    const hrefEn = document.createElement("link");
    hrefEn.rel = "alternate";
    hrefEn.hreflang = "en";
    hrefEn.href = enUrl;
    document.head.appendChild(hrefEn);

    // Add hreflang he
    const hrefHe = document.createElement("link");
    hrefHe.rel = "alternate";
    hrefHe.hreflang = "he";
    hrefHe.href = heUrl;
    document.head.appendChild(hrefHe);

    // Add x-default
    const hrefDefault = document.createElement("link");
    hrefDefault.rel = "alternate";
    hrefDefault.hreflang = "x-default";
    hrefDefault.href = DOMAIN + "/";
    document.head.appendChild(hrefDefault);

    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]').forEach(el => el.remove());
    };
  }, [pageTitle, pageDesc, enUrl, heUrl, selfUrl]);

  return null;
};

export default SEOHead;
