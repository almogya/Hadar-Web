import { UserX, Check } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: [
    "Reinstatement of blocked business pages on Google, Facebook, Instagram and Amazon",
    "Reinstatement of personal profiles suspended on social networks",
    "Legal appeals for account suspension by Google, Meta, Amazon and others",
    "Strategic response to Terms of Service violations and bans",
    "Representation against automated content moderation decisions",
    "DMCA counter-notices for wrongful content removal",
    "Identifying legal grounds and precedents for reinstatement",
    "Preserving digital assets and advertising accounts",
  ],
  he: [
    "שחרור חסימת דפים עסקיים בגוגל, פייסבוק, אינסטגרם ואמזון",
    "שחרור חסימת פרופילים אישיים ברשתות חברתיות",
    "ערעורים לשחזור חשבונות בגוגל, מטא, אמזון ואחרים",
    "מענה אסטרטגי להפרות תנאי שימוש וחסימות",
    "ייצוג מול החלטות מודרציה אוטומטיות של תוכן",
    "הגשת מכתבי נגד-DMCA על הסרת תוכן שגויה",
    "זיהוי עילות משפטיות ותקדימים לשחזור החשבון",
    "שמירה על נכסים דיגיטליים וחשבונות פרסום",
  ],
};

const UserBlocking = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={UserX}
      title="Business Page & Profile Blocking — Social Networks"
      titleHe="חסימת דפים עסקיים ופרופילים ברשתות חברתיות"
      intro="Whether your business page on Google, Meta or Amazon was suspended, or your personal profile was blocked without explanation — I handle the legal process to get you reinstated. I have direct experience dealing with the world's largest tech platforms, and I know how to build the right appeal strategy for each case."
      introHe="העסק בגוגל נחסם ואין עם מי לדבר? מטא סגרו לכם את הפרופיל באינסטגרם? אנחנו מטפלים בהליך המשפטי להחזרתכם לפעילות. ניסיון ישיר מול ענקיות הטכנולוגיה הגדולות בעולם — ואנחנו יודעים כיצד לבנות את אסטרטגיית הערעור הנכונה לכל מקרה."
      seoTitle="Business Page & Profile Reinstatement Lawyer Israel | Google, Meta, Amazon | HY Law"
      seoTitleHe="עורך דין לשחרור חסימת דפים עסקיים ופרופילים | גוגל, מטא, אמזון | HY Law"
      seoDesc="Legal representation for blocked business pages and personal profiles on Google, Meta, Instagram and Amazon. Direct experience with appeals and reinstatement strategy."
      seoDescHe="ייצוג משפטי בחסימת דפים עסקיים ופרופילים אישיים בגוגל, מטא, אינסטגרם ואמזון. ניסיון ישיר עם ערעורים ואסטרטגיית שחרור חסימה."
      ctaTitle="Unblock Your Page — Act Fast"
      ctaTitleHe="שלחו פנייה לעורך דין"
      relatedLinks={[
        { path: "/practice-areas/internet-defamation", labelEn: "Internet Defamation", labelHe: "לשון הרע באינטרנט" },
        { path: "/practice-areas/technology-internet-law", labelEn: "Technology & Internet Law", labelHe: "דיני טכנולוגיה ואינטרנט" },
      ]}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
          {isHe ? "שירותים מרכזיים" : "Key Services"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {(isHe ? items.he : items.en).map((item) => (
            <div key={item} className="flex items-start gap-2">
              <Check className="text-gold shrink-0 mt-0.5" size={16} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PracticeAreaLayout>
  );
};

export default UserBlocking;

