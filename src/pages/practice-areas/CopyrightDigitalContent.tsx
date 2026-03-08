import { Gavel, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["Copyright ownership structuring", "Content licensing agreements", "Platform takedown and counter-notice strategy", "Fair use and fair dealing analysis", "Digital rights management", "Creator contracts and collaborations", "Music, film, and publishing agreements", "NFT and digital asset rights"],
  he: ["מבנה בעלות בזכויות יוצרים", "הסכמי רישוי תוכן", "אסטרטגיית הסרה מפלטפורמות והודעות נגד", "ניתוח שימוש הוגן", "ניהול זכויות דיגיטליות", "חוזי יוצרים ושיתופי פעולה", "הסכמי מוזיקה, קולנוע והוצאה לאור", "זכויות NFT ונכסים דיגיטליים"],
};

const CopyrightDigitalContent = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Gavel}
      title="Copyright & Digital Content"
      titleHe="זכויות יוצרים ותוכן דיגיטלי"
      intro="In the age of digital platforms, protecting creative works requires both legal precision and an understanding of how content is distributed, shared, and monetized online."
      introHe="בעידן הפלטפורמות הדיגיטליות, הגנה על יצירות דורשת דיוק משפטי והבנה של אופן הפצת התוכן, שיתופו ומסחורו ברשת."
      ctaTitle="Protect Your Content"
      ctaTitleHe="הגנו על התוכן שלכם"
      relatedLinks={[
        { path: "/practice-areas/ai-and-law", labelEn: "AI & Law", labelHe: "בינה מלאכותית ומשפט" },
        { path: "/practice-areas/technology-internet-law", labelEn: "Technology & Internet Law", labelHe: "דיני טכנולוגיה ואינטרנט" },
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

export default CopyrightDigitalContent;
