import { ReactNode, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingContact from "./FloatingContact";

const Layout = ({ children }: { children: ReactNode }) => {
  const { lang, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // Add language class to body for CSS targeting
    document.body.classList.remove("lang-en", "lang-he");
    document.body.classList.add(`lang-${lang}`);
  }, [lang, dir]);

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <a href="#main-content" className="skip-to-content">
        {lang === "he" ? "דלג לתוכן הראשי" : "Skip to main content"}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-20" role="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </div>
  );
};

export default Layout;
