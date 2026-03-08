import { Scale, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["Trademark clearance searches", "Filing strategy (Israel and international)", "Opposition and cancellation proceedings", "Brand portfolio management", "Domain name disputes", "Anti-counterfeiting measures", "Licensing and coexistence agreements", "Trademark due diligence"],
  he: ["בדיקות פינוי סימני מסחר", "אסטרטגיית הגשה (ישראל ובינלאומי)", "הליכי התנגדות וביטול", "ניהול תיק מותגים", "סכסוכי שמות מתחם", "אמצעי מאבק בזיוף", "הסכמי רישוי ודו-קיום", "בדיקת נאותות סימני מסחר"],
};

const Trademarks = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Scale}
      title="Trademarks"
      titleHe="סימני מסחר"
      intro="Your brand is one of your most important business assets. We help clients protect, manage, and enforce their trademarks in Israel and internationally — from initial clearance through registration and beyond."
      introHe="המותג שלכם הוא אחד הנכסים העסקיים החשובים ביותר. אנו עוזרים ללקוחות להגן, לנהל ולאכוף את סימני המסחר שלהם בישראל ובעולם — מבדיקת פינוי ראשונית דרך רישום והלאה."
      ctaTitle="Protect Your Brand"
      ctaTitleHe="הגנו על המותג שלכם"
      relatedLinks={[
        { path: "/practice-areas/intellectual-property", labelEn: "Intellectual Property", labelHe: "קניין רוחני" },
        { path: "/practice-areas/commercial-litigation", labelEn: "Commercial Litigation", labelHe: "ליטיגציה מסחרית" },
      ]}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">{isHe ? "עניינים אופייניים" : "Typical Matters"}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {(isHe ? items.he : items.en).map((item) => (
            <div key={item} className="flex items-start gap-2"><FileCheck className="text-gold shrink-0 mt-0.5" size={16} /><span className="text-sm">{item}</span></div>
          ))}
        </div>
      </div>
      <div className="bg-section-alt border border-border p-8">
        <h2 className="text-xl font-display font-semibold text-foreground mb-3">{isHe ? "הגישה שלנו" : "Our Approach"}</h2>
        <p>{isHe ? "אנו מספקים ייעוץ מקיף בסימני מסחר הכולל חיפוש, הגשה, ניהול ואכיפה. הגישה שלנו מותאמת ליעדים העסקיים של כל לקוח." : "We provide comprehensive trademark counsel spanning search, filing, management, and enforcement. Our approach is tailored to each client's business goals and growth trajectory."}</p>
      </div>
    </PracticeAreaLayout>
  );
};

export default Trademarks;
