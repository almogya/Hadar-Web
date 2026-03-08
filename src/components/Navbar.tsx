import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, t, localePath, switchLang } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.practiceAreas, path: "/practice-areas" },
    { label: t.nav.insights, path: "/insights" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to={localePath("/")} className="flex items-center gap-3">
          <img src={logo} alt="HY Law Offices" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-semibold text-primary tracking-wide">HY Law Offices</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={localePath(link.path)}
              className="text-sm font-medium tracking-wide transition-colors hover:text-gold text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={switchLang}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            aria-label={`Switch to ${t.otherLangName}`}
          >
            <Globe size={16} />
            {t.otherLangName}
          </button>
          <Link
            to={localePath("/contact")}
            className="ms-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-navy-light transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={localePath(link.path)}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2 text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { switchLang(); setOpen(false); }}
              className="flex items-center gap-2 text-base font-medium py-2 text-muted-foreground"
            >
              <Globe size={18} />
              {t.otherLangName}
            </button>
            <Link
              to={localePath("/contact")}
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide text-center"
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
