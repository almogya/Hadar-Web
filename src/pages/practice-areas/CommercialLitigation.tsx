import { Briefcase, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["IP infringement claims", "Breach of contract disputes", "Unfair competition and trade practices", "Trade secret misappropriation", "Injunctive relief applications", "Mediation and settlement negotiations", "International dispute coordination", "Enforcement of judgments"],
  he: ["תביעות הפרת קניין רוחני", "סכסוכי הפרת חוזה", "תחרות בלתי הוגנת ופרקטיקות מסחריות", "גזילת סודות מסחריים", "בקשות לצווי מניעה", "גישור ומשא ומתן להסדר", "תיאום סכסוכים בינלאומיים", "אכיפת פסקי דין"],
};

const CommercialLitigation = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Briefcase}
      title="Commercial Litigation"
      titleHe="ליטיגציה מסחרית"
      intro="When disputes arise, having experienced counsel with a clear strategy makes the difference. We represent clients in complex commercial and IP disputes, prioritizing practical outcomes through negotiation or, when necessary, courtroom advocacy."
      introHe="כשמתעוררים סכסוכים, ייצוג מנוסה עם אסטרטגיה ברורה עושה את ההבדל. אנו מייצגים לקוחות בסכסוכים מסחריים ו‑IP מורכבים, תוך תעדוף תוצאות מעשיות דרך משא ומתן או, בעת הצורך, ייצוג בבית משפט."
      seoTitle="Commercial Litigation Attorney Israel | IP Disputes | HY Law Offices"
      seoTitleHe="עורך דין ליטיגציה מסחרית | סכסוכי קניין רוחני בישראל | HY Law"
      seoDesc="Strategic commercial and IP dispute resolution in Israel—injunctions, trade secret misappropriation, breach of contract, and courtroom advocacy in Israeli courts."
      seoDescHe="יישוב סכסוכים מסחריים ו-IP אסטרטגי בישראל—צווי מניעה, גזל סודות מסחריים, הפרת חוזה וייצוג בבתי המשפט."
      ctaTitle="Resolve Your Dispute"
      ctaTitleHe="פתרו את הסכסוך שלכם"
      relatedLinks={[
        { path: "/practice-areas/intellectual-property", labelEn: "Intellectual Property", labelHe: "קניין רוחני" },
        { path: "/practice-areas/trademarks", labelEn: "Trademarks", labelHe: "סימני מסחר" },
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

export default CommercialLitigation;
