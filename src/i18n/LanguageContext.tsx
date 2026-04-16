import { createContext, useContext, useMemo, useCallback, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { en } from "./translations/en";
import { he } from "./translations/he";

export type Lang = "en" | "he";
export type Translations = typeof en;

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Translations;
  switchLang: () => void;
  localePath: (path: string) => string;
  alternatePath: () => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Lang, Translations> = { en, he: he as Translations };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL path (e.g., /he/about → "he")
  const pathLang = location.pathname.split("/")[1];
  const lang: Lang = pathLang === "he" ? "he" : "en";
  const dir: "ltr" | "rtl" = lang === "he" ? "rtl" : "ltr";
  const t = translations[lang];

  // Keep document lang/dir in sync whenever the language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const switchLang = useCallback(() => {
    const otherLang = lang === "en" ? "he" : "en";
    const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
    navigate(`/${otherLang}${pathWithoutLang}`);
    localStorage.setItem("hy-lang", otherLang);
  }, [lang, location.pathname, navigate]);

  const localePath = useCallback(
    (path: string) => `/${lang}${path === "/" ? "" : path}`,
    [lang]
  );

  const alternatePath = useCallback(() => {
    const otherLang = lang === "en" ? "he" : "en";
    const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
    return `/${otherLang}${pathWithoutLang}`;
  }, [lang, location.pathname]);

  const value = useMemo(
    () => ({ lang, dir, t, switchLang, localePath, alternatePath }),
    [lang, dir, t, switchLang, localePath, alternatePath]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
