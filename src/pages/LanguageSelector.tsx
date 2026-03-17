import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const LanguageSelector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("hy-lang");
    if (saved === "en" || saved === "he") {
      navigate(`/${saved}`, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <img src={logo} alt="HY Law Offices" className="h-24 w-24 object-contain mx-auto mb-8" />
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 tracking-tight">
          HY Law Offices
        </h1>
        <p className="text-muted-foreground text-sm mb-2">
          Intellectual Property & Technology Law
        </p>
        <p className="text-muted-foreground/60 text-xs mb-12">
          קניין רוחני ודיני טכנולוגיה
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/en"
            onClick={() => localStorage.setItem("hy-lang", "en")}
            className="px-12 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
          >
            English
          </Link>
          <Link
            to="/he"
            onClick={() => localStorage.setItem("hy-lang", "he")}
            className="px-12 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
          >
            עברית
          </Link>
        </div>
        <div className="mt-12 w-12 h-px bg-border mx-auto mb-4" />
        <p className="text-[11px] text-muted-foreground/50">
          <Link to="/en/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          {" · "}
          <Link to="/en/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;