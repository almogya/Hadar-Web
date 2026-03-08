import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const LanguageSelector = () => {
  const navigate = useNavigate();

  // Auto-suggest based on browser language (soft, not forced)
  useEffect(() => {
    const saved = localStorage.getItem("hy-lang");
    if (saved === "en" || saved === "he") {
      navigate(`/${saved}`, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <img src={logo} alt="HY Law Offices" className="h-20 w-20 object-contain mx-auto mb-8" />
        <h1 className="font-display text-2xl font-bold text-foreground mb-2">
          HY Law Offices
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Intellectual Property & Technology Law
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/en"
            onClick={() => localStorage.setItem("hy-lang", "en")}
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
          >
            English
          </Link>
          <Link
            to="/he"
            onClick={() => localStorage.setItem("hy-lang", "he")}
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
          >
            עברית
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          <Link to="/en/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          {" · "}
          <Link to="/en/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;
