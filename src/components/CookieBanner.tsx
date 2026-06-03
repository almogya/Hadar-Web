import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadGA } from "@/lib/analytics";

const STORAGE_KEY = "hy-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [isHe, setIsHe] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === null) {
      setIsHe(!window.location.pathname.startsWith("/en"));
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    loadGA();
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={isHe ? "הסכמה לעוגיות" : "Cookie consent"}
      className="fixed bottom-0 inset-x-0 z-[200] bg-[#0d1e35] border-t border-white/10 shadow-2xl"
    >
      <div className="container py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-[13px] text-white/70 leading-relaxed max-w-2xl">
          {isHe ? (
            <>
              אנו משתמשים בעוגיות (Cookies) לצורך ניתוח תנועה ושיפור השירות.{" "}
              <Link to={isHe ? "/he/privacy-policy" : "/en/privacy-policy"} className="underline text-white/90 hover:text-[#C9A227] transition-colors">
                מדיניות הפרטיות
              </Link>
            </>
          ) : (
            <>
              We use cookies to analyze traffic and improve our service.{" "}
              <Link to="/en/privacy-policy" className="underline text-white/90 hover:text-[#C9A227] transition-colors">
                Privacy Policy
              </Link>
            </>
          )}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
          >
            {isHe ? "דחה" : "Reject"}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-[13px] font-semibold text-[#0d1e35] bg-[#C9A227] hover:bg-[#b8911f] transition-colors"
          >
            {isHe ? "קבל הכל" : "Accept All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
