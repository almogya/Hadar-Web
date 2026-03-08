import { Globe, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["SaaS terms of service and licensing", "Privacy policies and compliance", "Platform content moderation frameworks", "E-commerce legal requirements", "API and data licensing agreements", "Online dispute resolution", "Website and app compliance", "Cloud computing agreements"],
  he: ["תנאי שימוש ורישוי SaaS", "מדיניות פרטיות וציות", "מסגרות ניהול תוכן בפלטפורמות", "דרישות משפטיות למסחר אלקטרוני", "הסכמי רישוי API ונתונים", "פתרון סכסוכים מקוון", "ציות אתרים ואפליקציות", "הסכמי מחשוב ענן"],
};

const TechnologyInternetLaw = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Globe}
      title="Technology & Internet Law"
      titleHe="דיני טכנולוגיה ואינטרנט"
      intro="Technology companies face a unique and evolving legal landscape. We provide practical legal guidance for SaaS businesses, digital platforms, and online services operating in Israel and internationally."
      introHe="חברות טכנולוגיה מתמודדות עם נוף משפטי ייחודי ומתפתח. אנו מספקים הנחיה משפטית פרקטית לעסקי SaaS, פלטפורמות דיגיטליות ושירותים מקוונים הפועלים בישראל ובעולם."
      ctaTitle="Get Tech Legal Guidance"
      ctaTitleHe="קבלו ייעוץ משפטי טכנולוגי"
      relatedLinks={[
        { path: "/practice-areas/ai-and-law", labelEn: "AI & Law", labelHe: "בינה מלאכותית ומשפט" },
        { path: "/practice-areas/intellectual-property", labelEn: "Intellectual Property", labelHe: "קניין רוחני" },
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
    </PracticeAreaLayout>
  );
};

export default TechnologyInternetLaw;
