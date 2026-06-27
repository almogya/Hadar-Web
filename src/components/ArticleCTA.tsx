import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/**
 * Gentle, non-intrusive end-of-article call to action.
 * Does not add content, forms, FAQ, author boxes or a table of contents.
 */
const ArticleCTA = () => {
  const { lang, localePath } = useLanguage();
  const isHe = lang === "he";

  const wa = `https://wa.me/972542234726?text=${encodeURIComponent(
    isHe ? "שלום, הגעתי מהאתר. אשמח לבדיקה ראשונית בנושא משפטי." : "Hello, I came from the website. I'd like an initial review of a legal matter."
  )}`;

  return (
    <div className="mt-16 p-8 bg-primary text-center rounded-lg" data-cta="article-cta">
      <h2 className="text-2xl font-display font-bold text-primary-foreground mb-3">
        {isHe ? "צריכים ייעוץ בנושא הזה?" : "Need advice on this topic?"}
      </h2>
      <p className="text-primary-foreground/70 text-sm mb-6">
        {isHe ? "נשמח לבדוק כיצד ניתן לסייע." : "We'd be glad to look into how we can help."}
      </p>
      <Link
        to={localePath("/contact")}
        data-cta="article-cta-click"
        onClick={() => trackEvent("article_cta_click", { action: "contact" })}
        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
      >
        {isHe ? "השאירו פרטים לבדיקה" : "Leave Details for a Review"} <DirectionalIcon size={16} />
      </Link>
      <div className="flex items-center justify-center gap-5 mt-5">
        <a
          href="tel:+972542234726"
          data-cta="phone-click"
          onClick={() => trackEvent("click_phone", { location: "article" })}
          className="inline-flex items-center gap-1.5 text-primary-foreground/70 text-xs hover:text-accent transition-colors"
        >
          <Phone size={14} strokeWidth={1.8} /> {isHe ? "התקשרו" : "Call"}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp-click"
          onClick={() => trackEvent("click_whatsapp", { location: "article" })}
          className="inline-flex items-center gap-1.5 text-primary-foreground/70 text-xs hover:text-accent transition-colors"
        >
          <MessageCircle size={14} strokeWidth={1.8} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ArticleCTA;
