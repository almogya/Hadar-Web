import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ThankYou = () => {
  const { lang, localePath } = useLanguage();
  const isHe = lang === "he";

  return (
    <Layout>
      <section className="py-24">
        <div className="container max-w-2xl text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-gold-light flex items-center justify-center">
            <CheckCircle className="text-gold" size={40} />
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {isHe ? "תודה רבה" : "Thank You"}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {isHe
              ? "ההודעה שלך התקבלה. נבחן את הפנייה ונחזור אליך תוך 1–2 ימי עסקים."
              : "Your message has been received. We will review your inquiry and respond within 1–2 business days."}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {isHe
              ? "שימו לב: שליחת טופס יצירת קשר אינה יוצרת יחסי עורך דין-לקוח. אין לשלוח מידע חסוי עד שנוצרה התקשרות רשמית."
              : "Please note: submitting a contact form does not create an attorney-client relationship. Do not send confidential information until a formal engagement has been agreed upon."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={localePath("/")} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors">
              {isHe ? "חזרה לדף הבית" : "Return Home"} <ArrowRight size={16} />
            </Link>
            <Link to={localePath("/insights")} className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide hover:bg-section-alt transition-colors">
              {isHe ? "קראו את המאמרים שלנו" : "Read Our Insights"}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
