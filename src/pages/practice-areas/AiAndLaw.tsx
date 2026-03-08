import { Brain, FileCheck } from "lucide-react";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const items = {
  en: ["AI training data licensing and rights", "Copyright questions for AI-generated outputs", "AI vendor contracts and liability", "Algorithmic accountability frameworks", "Generative AI content policies", "Open-source AI model licensing", "AI compliance and regulatory guidance", "IP strategy for AI-powered products"],
  he: ["רישוי וזכויות נתוני אימון AI", "שאלות זכויות יוצרים לתוצרי AI", "חוזי ספקי AI ואחריות", "מסגרות אחריותיות לאלגוריתמים", "מדיניות תוכן AI גנרטיבי", "רישוי מודלי AI בקוד פתוח", "הנחיות ציות ורגולציה ל‑AI", "אסטרטגיית IP למוצרים מבוססי AI"],
};

const AiAndLaw = () => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  return (
    <PracticeAreaLayout
      icon={Brain}
      title="AI & Digital Content Law"
      titleHe="בינה מלאכותית ודיני תוכן דיגיטלי"
      intro="As AI reshapes how content is created, distributed, and consumed, the legal questions are evolving rapidly. We help clients navigate the IP, licensing, and compliance challenges of AI-driven businesses."
      introHe="בזמן שבינה מלאכותית משנה את אופן יצירת התוכן, הפצתו וצריכתו, השאלות המשפטיות מתפתחות במהירות. אנו עוזרים ללקוחות לנווט באתגרי IP, רישוי וציות של עסקים מונעי AI."
      ctaTitle="Navigate AI Legal Questions"
      ctaTitleHe="ניווט בשאלות משפטיות של AI"
      relatedLinks={[
        { path: "/practice-areas/copyright-digital-content", labelEn: "Copyright & Digital Content", labelHe: "זכויות יוצרים ותוכן דיגיטלי" },
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

export default AiAndLaw;
