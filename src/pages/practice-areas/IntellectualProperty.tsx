import { Shield, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["IP portfolio audits and strategy", "Ownership structuring and assignments", "Licensing and technology transfer agreements", "IP due diligence for M&A and fundraising", "Trade secret protection programs", "Freedom-to-operate analysis", "IP clauses in employment and contractor agreements", "International IP coordination"],
  he: ["ביקורות ואסטרטגיית תיקי IP", "מבנה בעלות והקצאות", "הסכמי רישוי והעברת טכנולוגיה", "בדיקת נאותות IP למיזוגים וגיוסים", "תכניות הגנה על סודות מסחריים", "ניתוח חופש פעולה", "סעיפי IP בהסכמי עבודה וקבלנות", "תיאום IP בינלאומי"],
};

const whoFor = {
  en: ["Technology startups building products around proprietary innovations", "Established companies managing existing IP portfolios", "Founders preparing for investment or acquisition (IP due diligence)", "Creators and content businesses protecting original works", "R&D teams navigating freedom-to-operate questions"],
  he: ["סטארטאפים טכנולוגיים הבונים מוצרים סביב חדשנות קניינית", "חברות מבוססות המנהלות תיקי IP קיימים", "יזמים המתכוננים להשקעה או רכישה (בדיקת נאותות IP)", "יוצרים ועסקי תוכן המגנים על יצירות מקוריות", "צוותי מו\"פ המנווטים שאלות חופש פעולה"],
};

const IntellectualProperty = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Shield}
      title="Intellectual Property Law"
      titleHe="דיני קניין רוחני"
      intro="Intellectual property is often a business's most valuable — and most vulnerable — asset. We help companies, startups, and creators develop and execute IP strategies that protect innovation and build lasting competitive advantage."
      introHe="קניין רוחני הוא לעיתים קרובות הנכס החשוב ביותר — והפגיע ביותר — של עסק. אנו עוזרים לחברות, סטארטאפים ויוצרים לפתח ולבצע אסטרטגיות IP שמגנות על חדשנות ובונות יתרון תחרותי."
      ctaTitle="Discuss Your IP Strategy"
      ctaTitleHe="בואו נדבר על אסטרטגיית ה‑IP שלכם"
      relatedLinks={[
        { path: "/practice-areas/trademarks", labelEn: "Trademarks", labelHe: "סימני מסחר" },
        { path: "/practice-areas/copyright-digital-content", labelEn: "Copyright & Digital Content", labelHe: "זכויות יוצרים ותוכן דיגיטלי" },
        { path: "/practice-areas/ai-and-law", labelEn: "AI & Law", labelHe: "בינה מלאכותית ומשפט" },
      ]}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">{isHe ? "מה אנחנו עושים" : "What We Do"}</h2>
        <p>{isHe ? "הפרקטיקה שלנו בקניין רוחני מכסה את כל מחזור החיים של IP — מזיהוי והגנה דרך מסחור ואכיפה. אנו עובדים עם לקוחות לבניית תיקי IP שמתאימים ליעדים העסקיים שלהם." : "Our IP practice covers the full lifecycle of intellectual property — from identification and protection through commercialization and enforcement. We work with clients to build IP portfolios that align with their business objectives and growth plans."}</p>
      </div>
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-3">{isHe ? "למי זה מיועד" : "Who This Is For"}</h2>
        <ul className="list-disc ps-6 space-y-2">
          {(isHe ? whoFor.he : whoFor.en).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
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
        <p>{isHe ? "אנו רואים קניין רוחני דרך עדשה עסקית. במקום להתייחס ל‑IP כעניין משפטי גרידא, אנו מתמקדים באופן שבו נכסי IP יוצרים ערך, מפחיתים סיכון ותומכים ביעדים אסטרטגיים." : "We view intellectual property through a business lens. Rather than treating IP as a purely legal matter, we focus on how IP assets create value, reduce risk, and support strategic goals."}</p>
      </div>
    </PracticeAreaLayout>
  );
};

export default IntellectualProperty;
