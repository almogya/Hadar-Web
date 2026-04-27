import { Eye, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: [
    "Accessibility statements under Israeli Standard SI 5568 (SI 5568)",
    "Website accessibility audits and gap analysis",
    "WCAG 2.1 AA compliance strategy for websites and apps",
    "Representation before the Equal Rights Commissioner for PWD",
    "Accessibility coordinator appointment and training",
    "Legal response to accessibility complaints and enforcement",
    "Accessibility compliance for apps and digital platforms",
    "Ongoing legal monitoring of accessibility obligations",
  ],
  he: [
    "הצהרות נגישות לפי תקן ישראלי 5568",
    "סקרי נגישות לאתרים וניתוח פערים",
    "אסטרטגיית ציות לתקן WCAG 2.1 AA לאתרים ואפליקציות",
    "ייצוג מול נציבות שוויון זכויות לאנשים עם מוגבלות",
    "מינוי רכז נגישות והכשרה",
    "מענה משפטי לתלונות ואכיפת נגישות",
    "ציות נגישות לאפליקציות ופלטפורמות דיגיטליות",
    "ניטור משפטי שוטף של חובות הנגישות",
  ],
};

const AccessibilityCompliance = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Eye}
      title="Accessibility Compliance"
      titleHe="הצהרת נגישות וציות"
      intro="Israeli law requires websites and digital services to meet accessibility standards. We guide businesses through full compliance — from drafting the accessibility statement to representation before enforcement authorities — ensuring equal access and avoiding legal exposure."
      introHe="החוק הישראלי מחייב אתרים ושירותים דיגיטליים לעמוד בתקני נגישות. אנו מלווים עסקים לציות מלא — מניסוח הצהרת הנגישות ועד ייצוג מול רשויות האכיפה — להבטחת גישה שוויונית ולמניעת חשיפה משפטית."
      seoTitle="Accessibility Compliance Lawyer Israel | SI 5568 and WCAG | HY Law"
      seoTitleHe="עורך דין נגישות דיגיטלית ישראל | תקן 5568 ו-WCAG | HY Law"
      seoDesc="Legal guidance for website accessibility compliance in Israel. Accessibility statements, SI 5568, WCAG 2.1, and representation before the Equal Rights Commissioner."
      seoDescHe="ייעוץ משפטי לציות נגישות אתרים בישראל. הצהרות נגישות, תקן 5568, WCAG 2.1 וייצוג מול נציב שוויון זכויות."
      ctaTitle="Ensure Your Platform Is Accessible"
      ctaTitleHe="לבדיקת עמידת הפלטפורמה שלכם בחובות הנגישות"
      relatedLinks={[
        { path: "/practice-areas/technology-internet-law", labelEn: "Technology & Internet Law", labelHe: "דיני טכנולוגיה ואינטרנט" },
        { path: "/practice-areas/terms-of-use", labelEn: "Terms of Use & Privacy Policies", labelHe: "תנאי שימוש ותקנון" },
      ]}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
          {isHe ? "שירותים מרכזיים" : "Key Services"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {(isHe ? items.he : items.en).map((item) => (
            <div key={item} className="flex items-start gap-2">
              <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PracticeAreaLayout>
  );
};

export default AccessibilityCompliance;
