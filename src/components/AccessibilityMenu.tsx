import { useState, useEffect, useRef } from "react";
import { Accessibility, Plus, Minus, Sun, RotateCcw, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const FONT_STEP = 10;
const MIN_FONT = 90;
const MAX_FONT = 130;
const STORAGE_FONT = "hy-font-size";
const STORAGE_CONTRAST = "hy-high-contrast";

const AccessibilityMenu = () => {
  const { lang, localePath } = useLanguage();
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isHe = lang === "he";

  // Restore saved preferences on mount
  useEffect(() => {
    const savedSize = parseInt(localStorage.getItem(STORAGE_FONT) || "100", 10);
    const savedContrast = localStorage.getItem(STORAGE_CONTRAST) === "true";
    setFontSize(savedSize);
    setHighContrast(savedContrast);
    document.documentElement.style.fontSize = `${savedSize}%`;
    if (savedContrast) document.documentElement.classList.add("high-contrast");
  }, []);

  // Close panel when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close panel on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const changeFontSize = (delta: number) => {
    const next = Math.min(MAX_FONT, Math.max(MIN_FONT, fontSize + delta));
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
    localStorage.setItem(STORAGE_FONT, String(next));
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.documentElement.classList.toggle("high-contrast", next);
    localStorage.setItem(STORAGE_CONTRAST, String(next));
  };

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("high-contrast");
    localStorage.removeItem(STORAGE_FONT);
    localStorage.removeItem(STORAGE_CONTRAST);
  };

  const isModified = fontSize !== 100 || highContrast;

  return (
    <div ref={menuRef} className="fixed bottom-6 start-6 z-40">
      {/* Accessibility Panel */}
      {open && (
        <div
          id="accessibility-panel"
          role="dialog"
          aria-label={isHe ? "תפריט נגישות" : "Accessibility menu"}
          className="absolute bottom-16 start-0 w-64 bg-background border border-border shadow-2xl rounded-sm overflow-hidden"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Accessibility size={15} aria-hidden="true" />
              {isHe ? "כלי נגישות" : "Accessibility"}
            </h2>
            <button
              onClick={() => setOpen(false)}
              aria-label={isHe ? "סגור תפריט נגישות" : "Close accessibility menu"}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X size={15} />
            </button>
          </div>

          {/* Panel Body */}
          <div className="p-4 space-y-4">
            {/* Font Size */}
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {isHe ? "גודל טקסט" : "Text Size"}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeFontSize(-FONT_STEP)}
                  disabled={fontSize <= MIN_FONT}
                  aria-label={isHe ? "הקטן טקסט" : "Decrease text size"}
                  className="w-9 h-9 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Minus size={14} />
                </button>
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="flex-1 text-center text-sm font-medium text-foreground"
                >
                  {fontSize}%
                </span>
                <button
                  onClick={() => changeFontSize(FONT_STEP)}
                  disabled={fontSize >= MAX_FONT}
                  aria-label={isHe ? "הגדל טקסט" : "Increase text size"}
                  className="w-9 h-9 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {isHe ? "ניגודיות" : "Contrast"}
              </p>
              <button
                onClick={toggleContrast}
                aria-pressed={highContrast}
                className={`w-full flex items-center gap-2 px-3 py-2.5 border text-sm font-medium transition-all rounded-sm focus-visible:ring-2 focus-visible:ring-accent ${
                  highContrast
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                <Sun size={14} aria-hidden="true" />
                {isHe ? "ניגודיות גבוהה" : "High Contrast"}
                {highContrast && (
                  <span className="ms-auto text-[10px] font-semibold tracking-wide uppercase opacity-70">
                    {isHe ? "פעיל" : "On"}
                  </span>
                )}
              </button>
            </div>

            {/* Reset */}
            {isModified && (
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground hover:text-foreground border border-dashed border-border hover:border-border/80 transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
              >
                <RotateCcw size={12} />
                {isHe ? "איפוס הגדרות" : "Reset to defaults"}
              </button>
            )}

            {/* Accessibility statement link */}
            <div className="border-t border-border pt-3">
              <Link
                to={localePath("/accessibility")}
                onClick={() => setOpen(false)}
                className="text-xs text-accent hover:underline focus-visible:underline"
              >
                {isHe ? "← הצהרת נגישות" : "Accessibility Statement →"}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={isHe ? "פתח תפריט נגישות" : "Open accessibility menu"}
        aria-expanded={open}
        aria-controls="accessibility-panel"
        title={isHe ? "נגישות" : "Accessibility"}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          open || isModified
            ? "bg-accent text-accent-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        <Accessibility size={22} />
      </button>
    </div>
  );
};

export default AccessibilityMenu;
