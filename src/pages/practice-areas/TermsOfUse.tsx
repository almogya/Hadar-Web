import { ScrollText, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: [
    "Drafting and updating terms of use for websites and apps",
    "Privacy policy preparation (GDPR & Israeli Privacy Protection Law)",
    "Cookie policy and consent management frameworks",
    "E-commerce terms and consumer protection compliance",
    "SaaS subscription agreements and acceptable use policies",
    "User-generated content policies",
    "Age verification and minor protection clauses",
    "Dispute resolution and governing law provisions",
  ],
  he: [
    "ניסוח ועדכון תנאי שימוש לאתרים ואפליקציות",
    "הכנת מדיניות פרטיות (GDPR וחוק הגנת הפרטיות הישראלי)",
    "מדיניות עוגיות וניהול הסכמות",
    "תנאי מסחר אלקטרוני וציות לחוק הגנת הצרכן",
    "הסכמי מנוי SaaS ומדיניות שימוש ראוי",
    "מדיניות תוכן שנוצר על ידי משתמשים",
    "סעיפי אימות גיל והגנת קטינים",
    "סעיפי יישוב סכסוכים וסמכות שיפוט",
  ],
};

const TermsOfUse = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={ScrollText}
      title="Terms of Use & Privacy Policies"
      titleHe="תנאי שימוש ותקנון"
      intro="A legally sound terms of use and privacy policy are the foundation of any digital product or online business. We draft, review, and update platform legal documents in full compliance with Israeli law and international regulations — tailored to your actual operations."
      introHe="תנאי שימוש ומדיניות פרטיות מוצקים מבחינה משפטית הם הבסיס לכל מוצר דיגיטלי או עסק מקוון. אנו מנסחים, בוחנים ומעדכנים מסמכים משפטיים לפלטפורמות בהתאם מלא לדרישות הדין הישראלי ולרגולציות בינלאומיות — מותאמים לפעילות בפועל."
      seoTitle="Terms of Use & Privacy Policy Lawyer Israel | HY Law Offices"
      seoTitleHe="עורך דין לתנאי שימוש ומדיניות פרטיות | HY Law Offices"
      seoDesc="Legal drafting of terms of use, privacy policies, and platform regulations for websites and apps in Israel. GDPR compliance and Israeli Privacy Protection Law."
      seoDescHe="ניסוח משפטי של תנאי שימוש, מדיניות פרטיות ותקנונים לאתרים ואפליקציות בישראל. ציות GDPR וחוק הגנת הפרטיות."
      ctaTitle="Get Your Platform Documents Reviewed"
      ctaTitleHe="לבחינת המסמכים המשפטיים של הפלטפורמה שלכם"
      relatedLinks={[
        { path: "/practice-areas/technology-internet-law", labelEn: "Technology & Internet Law", labelHe: "דיני טכנולוגיה ואינטרנט" },
        { path: "/practice-areas/intellectual-property", labelEn: "Intellectual Property", labelHe: "קניין רוחני" },
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

export default TermsOfUse;
