import { ReactNode, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const { lang, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
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
    </div>
  );
};

export default Layout;
