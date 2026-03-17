import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingContact from "./FloatingContact";

const Layout = ({ children }: { children: ReactNode }) => {
  const { lang, dir } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.remove("lang-en", "lang-he");
    document.body.classList.add(`lang-${lang}`);
  }, [lang, dir]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
