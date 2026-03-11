import { createContext, useContext, useMemo, ReactNode } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

const translations: Record<Lang, Translations> = { en, he: he as unknown as Translations };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Lang = paramLang === "he" ? "he" : "en";
  const dir: "ltr" | "rtl" = lang === "he" ? "rtl" : "ltr";
  const t = translations[lang];

  const switchLang = () => {
    const otherLang = lang === "en" ? "he" : "en";
    const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
    navigate(`/${otherLang}${pathWithoutLang || "/"}`);
    localStorage.setItem("hy-lang", otherLang);
  };

  const localePath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

  const alternatePath = () => {
    const otherLang = lang === "en" ? "he" : "en";
    const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "");
    return `/${otherLang}${pathWithoutLang || "/"}`;
  };

  const value = useMemo(
    () => ({ lang, dir, t, switchLang, localePath, alternatePath }),
    [lang, location.pathname]
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
