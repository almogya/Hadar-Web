import { UserX, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: [
    "Account reinstatement appeals to Google, Meta, Amazon and others",
    "Legal representation in platform disputes and policy enforcement",
    "Strategic response to Terms of Service violations and bans",
    "DMCA counter-notices for wrongful content removal",
    "Identifying legal grounds and precedents for reinstatement",
    "Cross-platform account recovery strategy",
    "Representation against automated content moderation decisions",
    "Preserving digital business assets and advertising accounts",
  ],
  he: [
    "ערעורים לשחזור חשבונות בגוגל, מטא, אמזון ואחרים",
    "ייצוג משפטי בסכסוכי פלטפורמה ואכיפת מדיניות",
    "מענה אסטרטגי להפרות תנאי שימוש וחסימות",
    "הגשת מכתבי נגד-DMCA על הסרת תוכן שגויה",
    "זיהוי עילות משפטיות ותקדימים לשחזור החשבון",
    "אסטרטגיית שחזור חשבונות מרובת פלטפורמות",
    "ייצוג מול החלטות מודרציה אוטומטיות של תוכן",
    "שמירה על נכסים עסקיים דיגיטליים וחשבונות פרסום",
  ],
};

const UserBlocking = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={UserX}
      title="User Blocking & Account Suspension"
      titleHe="חסימת משתמשים"
      intro="Having an account suspended or blocked by Google, Meta, Amazon or another major platform can bring a business to a halt overnight. With direct experience handling such cases against the world's largest tech companies, we provide strategic legal representation to restore your digital presence and protect your rights."
      introHe="השעיה או חסימה של חשבון בגוגל, מטא, אמזון או פלטפורמה מובילה אחרת עלולה לעצור עסק בין לילה. עם ניסיון ישיר בטיפול בתיקים כאלה מול חברות הטכנולוגיה הגדולות בעולם, אנו מספקים ייצוג משפטי אסטרטגי לשחזור הנוכחות הדיגיטלית שלכם ולהגנה על זכויותיכם."
      seoTitle="Account Suspension & User Blocking Lawyer Israel | Google, Meta, Amazon | HY Law"
      seoTitleHe="עורך דין חסימת משתמשים ישראל | גוגל, מטא, אמזון | HY Law"
      seoDesc="Legal representation for account suspension and user blocking by major platforms. Direct experience with Google, Meta, and Amazon appeals and reinstatement strategy."
      seoDescHe="ייצוג משפטי בחסימת משתמשים והשעיית חשבונות בפלטפורמות מובילות. ניסיון ישיר עם ערעורים ואסטרטגיית שחזור מול גוגל, מטא ואמזון."
      ctaTitle="Restore Your Account — Act Fast"
      ctaTitleHe="לשחזור החשבון — יש לפעול במהירות"
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
              <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PracticeAreaLayout>
  );
};

export default UserBlocking;
