import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.webp";

const LanguageSelector = () => {
  const navigate = useNavigate();

  // Restore saved language preference
  useEffect(() => {
    const saved = localStorage.getItem("hy-lang");
    if (saved === "en" || saved === "he") {
      navigate(`/${saved}`, { replace: true });
    }
  }, [navigate]);

  const choose = (lang: "en" | "he") => {
    localStorage.setItem("hy-lang", lang);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0B1F3A" }}
      lang="en"
    >
      {/* Centered lockup */}
      <div className="flex flex-col items-center text-center px-8 max-w-lg">
        {/* Logo */}
        <img
          src={logo}
          alt="HY Law Offices"
          className="h-20 w-20 object-contain mb-8 opacity-90"
        />

        {/* Firm name */}
        <h1
          className="font-display font-bold tracking-tight leading-tight mb-2"
          style={{ color: "#F7F8FA", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          HY Law Offices
        </h1>

        {/* Gold accent rule */}
        <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A227", margin: "16px auto 20px" }} />

        {/* Bilingual tagline */}
        <p
          className="font-body mb-1"
          style={{ color: "rgba(247,248,250,0.65)", fontSize: "13px", letterSpacing: "0.12em" }}
        >
          Intellectual Property | Internet | Defamation
        </p>
        <p
          className="font-body mb-14"
          dir="rtl"
          lang="he"
          style={{ color: "rgba(247,248,250,0.4)", fontSize: "12px", letterSpacing: "0.06em" }}
        >
          קניין רוחני | אינטרנט | לשון הרע
        </p>

        {/* Language buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/en"
            onClick={() => choose("en")}
            className="group relative overflow-hidden flex items-center justify-center gap-3 px-14 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(247,248,250,0.2)",
              color: "#F7F8FA",
              minWidth: "180px",
            }}
            lang="en"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "#1F4B7A" }}
            />
            <span className="relative z-10">English</span>
          </Link>

          <Link
            to="/he"
            onClick={() => choose("he")}
            className="group relative overflow-hidden flex items-center justify-center gap-3 px-14 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(247,248,250,0.2)",
              color: "#F7F8FA",
              minWidth: "180px",
            }}
            dir="rtl"
            lang="he"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "#1F4B7A" }}
            />
            <span className="relative z-10">עברית</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6 text-[11px]"
        style={{ color: "rgba(247,248,250,0.25)" }}
      >
        <Link to="/en/privacy-policy" className="hover:opacity-60 transition-opacity">
          Privacy Policy
        </Link>
        <span>·</span>
        <Link to="/he/disclaimer" className="hover:opacity-60 transition-opacity" dir="rtl">
          הבהרה משפטית
        </Link>
        <span>·</span>
        <span>© {new Date().getFullYear()} HY Law Offices</span>
      </div>
    </div>
  );
};

export default LanguageSelector;
