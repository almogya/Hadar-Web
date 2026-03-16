import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, localePath, switchLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.practiceAreas, path: "/practice-areas" },
    { label: t.nav.insights, path: "/insights" },
    { label: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    if (path === "/") return location.pathname === full || location.pathname === full + "/";
    return location.pathname.startsWith(full);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/95 backdrop-blur-sm border-b border-border/50"
      }`}
      role="navigation"
      aria-label={lang === "he" ? "ניווט ראשי" : "Main navigation"}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo — more prominent */}
        <Link to={localePath("/")} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="HY Law Offices"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground tracking-wide leading-tight">
              HY Law Offices
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
              {lang === "he" ? "קניין רוחני · טכנולוגיה" : "IP · Technology · Law"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={localePath(link.path)}
              className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 inset-x-4 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Right: Language + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={switchLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 transition-all"
            aria-label={`Switch to ${t.otherLangName}`}
          >
            <Globe size={14} />
            {t.otherLangName}
          </button>
          <Link
            to={localePath("/contact")}
            className="px-6 py-2.5 bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={localePath(link.path)}
                className={`py-3 px-4 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border my-4" />
            <button
              onClick={() => { switchLang(); setOpen(false); }}
              className="flex items-center gap-2 py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe size={18} />
              {t.otherLangName}
            </button>
            <Link
              to={localePath("/contact")}
              className="mt-4 px-6 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase text-center"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;