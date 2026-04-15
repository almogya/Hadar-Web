import { MessageSquareX, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: [
    "Demand letters for removal of defamatory content",
    "Temporary injunctions to remove online publications",
    "Civil claims for statutory and actual damages",
    "Identifying anonymous online publishers",
    "Google review removal proceedings",
    "Defamatory content on social media platforms",
    "False publications in news and online media",
    "Reputation management — strategic legal response",
  ],
  he: [
    "מכתבי דרישה להסרת תוכן פוגע",
    "צווי מניעה זמניים להסרת פרסומים מהאינטרנט",
    "תביעות אזרחיות לפיצויים סטטוטוריים ובגין נזק ממשי",
    "חשיפת זהות מפרסמים אנונימיים",
    "הליכי הסרה של ביקורות גוגל פוגעות",
    "תוכן מבזה ברשתות חברתיות",
    "פרסומים שקריים בתקשורת מקוונת",
    "ניהול מוניטין — תגובה משפטית אסטרטגית",
  ],
};

const InternetDefamation = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={MessageSquareX}
      title="Internet Defamation Law"
      titleHe="לשון הרע באינטרנט"
      intro="A false review, a defamatory post, or an anonymous attack online can damage your reputation and business within hours. We provide rapid, strategic legal responses — from demand letters to civil proceedings — to protect your name and hold publishers accountable."
      introHe="ביקורת שקרית, פוסט מבזה, או תקיפה אנונימית ברשת יכולים לפגוע בשמך ובעסקך תוך שעות. אנו מספקים מענה משפטי מהיר ואסטרטגי — ממכתבי דרישה ועד הליכים אזרחיים — להגן על שמך ולהעמיד מפרסמים לדין."
      seoTitle="Internet Defamation Attorney Israel | Takedowns & Damages | HY Law"
      seoTitleHe="עורך דין לשון הרע באינטרנט | הסרת תוכן ופיצויים | HY Law"
      seoDesc="Legal response to internet defamation in Israel — demand letters, temporary injunctions, civil claims, and identifying anonymous posters. Fast, strategic, and results-focused."
      seoDescHe="מענה משפטי ללשון הרע באינטרנט בישראל — מכתבי דרישה, צווי מניעה, תביעות אזרחיות וחשיפת מפרסמים אנונימיים. מהיר, אסטרטגי, ומוכוון תוצאות."
      ctaTitle="Get a Rapid Legal Response"
      ctaTitleHe="קבלו מענה משפטי מהיר"
      relatedLinks={[
        { path: "/practice-areas/commercial-litigation", labelEn: "Commercial Litigation", labelHe: "ליטיגציה מסחרית" },
        { path: "/practice-areas/technology-internet-law", labelEn: "Technology & Internet Law", labelHe: "דיני טכנולוגיה ואינטרנט" },
      ]}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
          {isHe ? "עניינים אופייניים" : "Typical Matters"}
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

export default InternetDefamation;
