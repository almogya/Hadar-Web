import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";

const he = {
  metaTitle: "תיקון 13 לחוק הגנת הפרטיות — חברות AI וטכנולוגיה בישראל | HY Law",
  metaDesc: "מה משמעות תיקון 13 לחוק הגנת הפרטיות לחברות AI וטכנולוגיה בישראל? DPO, DPIA, קנסות, ואימות מודלים — מדריך מעשי 2026.",
  badge: "פרטיות · AI · עדכון 2026",
  title: "תיקון 13 לחוק הגנת הפרטיות: מה חייבות לעשות חברות AI וטכנולוגיה בישראל?",
  intro: "בשנת 2023 עברה ישראל שדרוג משמעותי לחוק הגנת הפרטיות — תיקון 13. לאחר תקופת היערכות, החובות החדשות חלות כעת על מגוון רחב של עסקים — ובייחוד על חברות שמפתחות, מפעילות או משתמשות בכלי בינה מלאכותית. מינוי ממונה הגנת מידע (DPO), ביצוע הערכות השפעה על הפרטיות (DPIA), חובות שקיפות ועונשים מוגברים — כל אלה הפכו מציאות רגולטורית. המדריך הזה מסביר מה השתנה, מה אתם חייבים לעשות, ואיך להיערך.",
  sections: [
    {
      h2: "1. מה הוא תיקון 13 — הרקע",
      body: `חוק הגנת הפרטיות, התשמ"א-1981, הוא החקיקה הראשית בישראל לעניין הגנת מידע אישי. במשך עשורים הוא נחשב מיושן ביחס לאתגרים הדיגיטליים. תיקון 13, שהתקבל בכנסת ב-2023 והוחל בשלבים, קירב את הדין הישראלי לסטנדרטים של GDPR — תקנת הגנת המידע האירופית.

**השינויים המרכזיים:**
- מינוי חובה של ממונה הגנת מידע (Data Protection Officer — DPO) לגופים מסוימים
- חובת ביצוע הערכות השפעה על הפרטיות (DPIA — Data Protection Impact Assessment) לעיבוד בסיכון גבוה
- חובות שקיפות מוגברות — מדיניות פרטיות מפורטת, הסכמה מדעת
- סמכויות אכיפה מורחבות לרשות להגנת הפרטיות (ILPPA) — כולל קנסות של עד מיליוני שקלים
- קביעת כלי ה-Privacy Enhancing Technologies (PETs) כגישה מועדפת לעיבוד מידע`,
    },
    {
      h2: "2. מי חייב למנות DPO?",
      body: `החובה למנות DPO חלה על:
- גופים ציבוריים
- ארגונים שעיבוד המידע הוא עיסוקם המרכזי
- ארגונים שמעבדים מידע רגיש בהיקף נרחב (מידע רפואי, ביומטרי, מיקום, נתוני ילדים)
- ארגונים שעוסקים בניטור שיטתי של יחידים בהיקף נרחב

**לחברות AI:** אם המוצר שלך מנתח נתוני משתמשים, מייצר המלצות אישיות, מעבד תמונות/קוד/טקסט שנוצר על-ידי משתמשים — סביר שתיכנס לתחולה. ייעוץ משפטי ספציפי הכרחי לפני מסקנה מוחלטת.

**מה DPO עושה:** פועל כנקודת קשר מול הרשות, מייעץ לארגון על ציות, מפקח על ביצוע DPIA, ומשמש כנאמן הגנת מידע. אינו אחראי מישירות — הארגון הוא האחראי.`,
    },
    {
      h2: "3. DPIA — הערכת השפעה על הפרטיות: מתי ואיך",
      body: `DPIA הוא תהליך מובנה לזיהוי וניהול סיכוני פרטיות לפני השקת מוצר או תהליך חדש שמעבד מידע בסיכון גבוה.

**מתי חובה לבצע DPIA:**
- שימוש בטכנולוגיה חדשה שמעבדת מידע אישי
- עיבוד מידע רגיש בהיקף גדול
- ניטור שיטתי של מרחב ציבורי
- פרופיילינג של יחידים (המלצות, אשראי, עבודה)
- עיבוד נתוני ילדים

**לגבי AI:** כמעט כל מוצר AI צרכני מחייב DPIA. אם המוצר מייצר פרופיל אישי, מעריך נטיות, ממליץ תוכן, מעניק ציון אשראי, או מחליט על קבלה/דחייה — חובה.

**מה DPIA כולל:** תיאור העיבוד וצרכיו, הערכת הכרחיות ומידתיות, זיהוי סיכוני פרטיות, אמצעי הפחתה מתוכננים, תוצאה: הליך בסיכון מקובל vs. הליך הדורש אישור הרשות.`,
    },
    {
      h2: "4. AI, שקיפות ואחריות על שגיאות",
      body: `תיקון 13 מוסיף ממד חדש לדיון על AI — חובת שקיפות.

**Hallucinations ותוצאות שגויות:** מה קורה כשמודל AI מייצר מידע שגוי על אדם? לדוגמה: מערכת AI שמייצרת המלצות אשראי מבוססות על נתונים שגויים, או מערכת HR שדוחה מועמדים בגין ניתוח שגוי. תיקון 13 מחייב: (א) גילוי שהחלטה התקבלה על-ידי מערכת ממוחשבת; (ב) זכות לעיון ולתיקון; (ג) מנגנון ערר.

**Deepfakes:** יצירת תוכן פוגע על-ידי AI (deepfake וידאו, קול מזויף) מגדילה חשיפה לתביעות פרטיות + לשון הרע. תיקון 13 אינו מטפל בזה ישירות, אך חובת השקיפות ממשיכה לחול.

**הסכמי ספקי AI:** אם אתה משתמש ב-API של OpenAI, Google או ספק אחר, אתה "מעבד מידע" ולא "בעל מאגר". עדיין חלות עליך חובות: לחתום על Data Processing Agreement (DPA) עם הספק, לוודא שהספק עומד בסטנדרטים של GDPR/תיקון 13, ולתעד את השרשרת.`,
    },
    {
      h2: "5. קנסות ואכיפה: כמה זה עולה?",
      body: `**הקנסות לפי תיקון 13:** הרשות להגנת הפרטיות (ILPPA) קיבלה סמכות להטיל קנסות מינהליים:
- עבירות קלות: עד 100,000 ₪
- עבירות חמורות: עד 1,000,000 ₪
- עבירות בנסיבות מחמירות (כוונה, רשלנות, היקף רב): עד מיליוני שקלים

**נפגעים יכולים תבוע ישירות:** בנוסף לקנסות הרשות, נפגעים שמידעם הופר יכולים לתבוע בבית המשפט פיצויים — כולל פיצוי ללא הוכחת נזק.

**מה מגביר סיכון:**
- אי-מינוי DPO כשחובה
- אי-ביצוע DPIA לתהליכים בסיכון גבוה
- אי-דיווח על פרצת מידע (data breach) לרשות תוך 72 שעות
- שמירת מידע מעבר לתקופה הנדרשת`,
    },
    {
      h2: "6. Privacy Enhancing Technologies (PETs) — הגישה המועדפת",
      body: `תיקון 13 מעודד — ובמקרים מסוימים מחייב — שימוש בטכנולוגיות שמפחיתות את הפגיעה בפרטיות.

**PETs רלוונטיות ל-AI:**
- **Differential Privacy:** הוספת רעש סטטיסטי לנתוני אימון כדי שלא ניתן לזהות אנשים ספציפיים
- **Federated Learning:** אימון מודל מבוזר — המידע נשאר על המכשיר, רק הפרמטרים עוברים
- **Anonymisation & Pseudonymisation:** הסרה/החלפה של מזהים אישיים לפני אימון
- **Synthetic Data:** שימוש בנתונים סינתטיים שנוצרו ב-AI עצמו לאימון במקום מידע אמיתי

**ההמלצה המעשית:** בניית pipeline של אימון AI עם PETs מוכרות מראש — לא רק מפחיתה סיכון משפטי, אלא גם הופכת למדיניות השקעה: קונים גדולים ולקוחות ארגוניים דורשים זאת.`,
    },
  ],
  checklist: [
    "בדוק אם הארגון שלך חייב למנות DPO — השג חוות דעת משפטית",
    "מפה את כל תהליכי עיבוד המידע האישי בארגון",
    "זהה תהליכים בסיכון גבוה הדורשים DPIA ובצע את ההערכות",
    "עדכן מדיניות פרטיות לשפה ברורה ולדרישות תיקון 13",
    "חתום על Data Processing Agreements (DPA) עם כל ספקי AI",
    "בנה תהליך לדיווח על פרצת מידע תוך 72 שעות",
    "יישם עקרון מינימום נתונים — אסוף רק מה שנחוץ",
    "הטמע מנגנון לזכות עיון, תיקון ומחיקה של נתוני משתמשים",
    "בדוק אפשרות ליישם PETs בתהליכי האימון",
    "אמן את הצוות הטכני והמנהלי על חובות הגנת מידע",
  ],
  pitfalls: [
    "הנחה שמינוי DPO מספיק — DPO הוא כלי, לא מגן. האחריות היא של הארגון",
    "אי-ביצוע DPIA לפני השקת מוצר AI חדש — 'נעשה את זה אחרי' לא מספיק",
    "שימוש ב-API של ספק AI ללא DPA — עלול להפוך אתך לאחראי על עיבוד של הספק",
    "מדיניות פרטיות שכתוב בה 'ייתכן שנשתף עם צדדים שלישיים' ללא פירוט — לא עומדת בתיקון 13",
    "שמירת מידע לצמיתות — חובת מחיקה/אנונימיזציה לאחר תקופת הצורך",
  ],
  faq: [
    { q: "האם כל חברת AI חייבת למנות DPO?", a: "לא כולן, אך חברות שמעבדות מידע אישי בהיקף נרחב או מידע רגיש — סביר שכן. הבדיקה היא עניין של פרטי הפעילות הספציפית." },
    { q: "מה ההבדל בין DPO ישראלי ל-DPO אירופי?", a: "הדרישות דומות מאוד. DPO ישראלי לפי תיקון 13 נדרש לאותן כישורים ותפקידים כמו DPO אירופי לפי GDPR. אם חברתך כבר מינתה DPO לצורכי GDPR — ייתכן שהוא עונה גם לדרישות ישראליות, בכפוף לבדיקה." },
    { q: "האם כלי AI שמשתמש בנתוני לקוחות דורש DPIA?", a: "ככלל — כן. שימוש ב-AI לפרופיילינג, המלצות, ניתוח התנהגות, או עיבוד כמויות גדולות של מידע אישי — כמעט תמיד מחייב DPIA." },
    { q: "מה קורה אם מתגלה פרצת מידע?", a: "על-פי תיקון 13, יש חובת דיווח לרשות להגנת הפרטיות תוך 72 שעות מרגע הגילוי. פרצה מהותית עשויה גם לחייב הודעה לנפגעים." },
    { q: "Synthetic Data — מספיק להחשב כאנונימי?", a: "תלוי באיכות הגנרציה ובמידת 'הזרימה' של מידע מקורי לנתונים הסינתטיים. יש מחקרים שמראים שניתן לשחזר מידע אמיתי מנתונים סינתטיים. ייעוץ טכני-משפטי מומלץ לפני הסתמכות על Synthetic Data כפתרון ציות." },
  ],
  disclaimer: "מאמר זה מספק מידע כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה הוא ייחודי — מומלץ להתייעץ עם עורך דין לקבלת הנחיות המותאמות לנסיבות הספציפיות שלך.",
  ctaTitle: "נדרשת ליווי ציות מקצועי?",
  ctaSub: "נבחן יחד את מצב הציות של הארגון שלך ונבנה תוכנית היערכות.",
  ctaBtn: "לקביעת ייעוץ",
  backToInsights: "חזרה למאמרים",
  checklistTitle: "רשימת בדיקה — 10 צעדים להיערכות",
  pitfallsTitle: "מלכודות נפוצות",
  faqTitle: "שאלות ותשובות",
};

const en = {
  metaTitle: "Privacy Amendment 13 — AI & Tech Companies in Israel | HY Law",
  metaDesc: "What does Israel's Privacy Protection Amendment 13 mean for AI and technology companies? DPO, DPIA, fines, and AI model compliance — a practical 2026 guide.",
  badge: "Privacy · AI · 2026 Update",
  title: "Privacy Protection Amendment 13: What AI and Technology Companies in Israel Must Do",
  intro: "In 2023 Israel passed a significant upgrade to its Privacy Protection Law — Amendment 13. After a transition period, the new obligations now apply to a wide range of businesses — and particularly to companies that develop, operate, or use artificial intelligence tools. Appointing a Data Protection Officer (DPO), conducting Data Protection Impact Assessments (DPIA), enhanced transparency obligations, and significantly increased penalties have all become regulatory reality. This guide explains what changed, what you must do, and how to prepare.",
  sections: [
    {
      h2: "1. What Is Amendment 13 — Background",
      body: `The Privacy Protection Law, 1981, is Israel's primary legislation governing personal data. For decades it was considered outdated relative to digital-age challenges. Amendment 13, passed by the Knesset in 2023 and phased in progressively, has brought Israeli law closer to GDPR standards.

**Key changes:**
- Mandatory appointment of a Data Protection Officer (DPO) for certain entities
- Obligation to conduct Data Protection Impact Assessments (DPIA) for high-risk processing
- Enhanced transparency obligations — detailed privacy policies, informed consent
- Expanded enforcement powers for the Israeli Privacy Protection Authority (ILPPA) — including fines of up to millions of shekels
- Recognition of Privacy Enhancing Technologies (PETs) as the preferred approach to data processing`,
    },
    {
      h2: "2. Who Must Appoint a DPO?",
      body: `The DPO obligation applies to:
- Public bodies
- Organisations for which data processing is a core activity
- Organisations that process sensitive data at significant scale (health, biometric, location, children's data)
- Organisations engaged in systematic large-scale monitoring of individuals

**For AI companies:** If your product analyses user data, generates personalised recommendations, or processes user-generated images/code/text — you likely fall within scope. Specific legal advice is essential before drawing a firm conclusion.

**What a DPO does:** Acts as the point of contact with the authority, advises the organisation on compliance, supervises DPIA implementation, and serves as data protection trustee. The DPO is not directly liable — the organisation is.`,
    },
    {
      h2: "3. DPIA — When and How",
      body: `A DPIA is a structured process to identify and manage privacy risks before launching a new product or process that involves high-risk data processing.

**When a DPIA is mandatory:**
- Deployment of new technology processing personal data
- Large-scale sensitive data processing
- Systematic monitoring of public spaces
- Profiling of individuals (recommendations, credit, employment)
- Processing of children's data

**For AI:** Almost every consumer-facing AI product requires a DPIA. If your product generates personal profiles, assesses predispositions, recommends content, assigns credit scores, or makes accept/reject decisions — a DPIA is mandatory.

**What a DPIA includes:** Description of processing and its purposes; necessity and proportionality assessment; identification of privacy risks; planned mitigation measures; outcome: acceptable-risk process vs. process requiring authority approval.`,
    },
    {
      h2: "4. AI, Transparency, and Liability for Errors",
      body: `Amendment 13 adds a new dimension to the AI discussion — a transparency obligation.

**Hallucinations and incorrect outputs:** What happens when an AI model generates false information about a person? For example: an AI credit recommendation system based on erroneous data, or an HR system that rejects candidates based on faulty analysis. Amendment 13 requires: (a) disclosure that a decision was made by an automated system; (b) a right to review and correction; (c) an appeals mechanism.

**Deepfakes:** Creating harmful AI-generated content (deepfake video, synthetic voice) increases exposure to privacy + defamation claims. Amendment 13 does not address this directly, but the transparency obligation continues to apply.

**AI vendor agreements:** If you use an OpenAI, Google, or other provider API, you are a "data processor" not a "database owner". Obligations still apply: sign a Data Processing Agreement (DPA) with the vendor, verify the vendor meets GDPR/Amendment 13 standards, and document the chain.`,
    },
    {
      h2: "5. Fines and Enforcement: What It Costs",
      body: `**Fines under Amendment 13:** The Israeli Privacy Protection Authority (ILPPA) now has authority to impose administrative fines:
- Minor violations: up to NIS 100,000
- Serious violations: up to NIS 1,000,000
- Aggravating circumstances (intent, negligence, large scale): up to millions of shekels

**Individuals can sue directly:** In addition to authority fines, individuals whose data was breached can bring civil claims — including damages without proving actual loss.

**What increases risk:**
- Failure to appoint a DPO when required
- Failure to conduct DPIA for high-risk processes
- Failure to notify the authority of a data breach within 72 hours
- Retaining data beyond the required period`,
    },
    {
      h2: "6. Privacy Enhancing Technologies (PETs) — The Preferred Approach",
      body: `Amendment 13 encourages — and in some cases requires — the use of technologies that reduce privacy intrusion.

**PETs relevant to AI:**
- **Differential Privacy:** Adding statistical noise to training data so specific individuals cannot be identified
- **Federated Learning:** Decentralised model training — data stays on the device, only parameters are shared
- **Anonymisation & Pseudonymisation:** Removing/replacing personal identifiers before training
- **Synthetic Data:** Using AI-generated synthetic data for training instead of real data

**Practical recommendation:** Building AI training pipelines with recognised PETs from the outset — not only reduces legal risk but becomes an investment policy: large buyers and enterprise clients increasingly require it.`,
    },
  ],
  checklist: [
    "Determine whether your organisation is required to appoint a DPO — obtain legal advice",
    "Map all personal data processing activities in your organisation",
    "Identify high-risk processes requiring DPIA and conduct the assessments",
    "Update your privacy policy to clear language meeting Amendment 13 requirements",
    "Sign Data Processing Agreements (DPA) with all AI vendors",
    "Build a data breach notification process to alert the authority within 72 hours",
    "Apply data minimisation — collect only what is necessary",
    "Implement mechanisms for the right of access, correction, and erasure",
    "Explore PET implementation in your training pipelines",
    "Train technical and management staff on data protection obligations",
  ],
  pitfalls: [
    "Assuming appointing a DPO is sufficient — a DPO is a tool, not a shield. Liability remains with the organisation",
    "Not conducting a DPIA before launching a new AI product — 'we'll do it after' is not enough",
    "Using an AI provider API without a DPA — may make you liable for the provider's processing",
    "A privacy policy that says 'we may share with third parties' without specifics — does not meet Amendment 13",
    "Retaining data indefinitely — obligation to delete/anonymise after the retention period",
  ],
  faq: [
    { q: "Must every AI company appoint a DPO?", a: "Not all of them, but companies that process personal data at significant scale or sensitive data — likely yes. The analysis depends on the specifics of your actual activity." },
    { q: "What is the difference between an Israeli DPO and a European DPO?", a: "The requirements are very similar. An Israeli DPO under Amendment 13 requires the same skills and functions as a European DPO under GDPR. If your company has already appointed a DPO for GDPR purposes — they may also meet Israeli requirements, subject to review." },
    { q: "Does an AI tool that uses customer data require a DPIA?", a: "Generally — yes. Using AI for profiling, recommendations, behavioural analysis, or large-scale personal data processing — almost always requires a DPIA." },
    { q: "What happens if a data breach is discovered?", a: "Under Amendment 13, there is an obligation to notify the Privacy Protection Authority within 72 hours of discovery. A material breach may also require notifying the affected individuals." },
    { q: "Is Synthetic Data sufficient to be considered anonymous?", a: "It depends on the quality of generation and the degree to which original data 'flows' into the synthetic data. Research shows that real data can sometimes be recovered from synthetic datasets. Technical-legal advice is recommended before relying on synthetic data as a compliance solution." },
  ],
  disclaimer: "This article provides general information only and does not constitute legal advice. Each situation is unique — consult with a qualified attorney for guidance specific to your circumstances.",
  ctaTitle: "Need Professional Compliance Support?",
  ctaSub: "We will review your organisation's compliance status together and build a preparation plan.",
  ctaBtn: "Schedule a Consultation",
  backToInsights: "Back to Insights",
  checklistTitle: "Checklist — 10 Steps to Prepare",
  pitfallsTitle: "Common Pitfalls",
  faqTitle: "FAQ",
};

const PrivacyAmendment13Article = () => {
  const { lang, localePath } = useLanguage();
  const t = lang === "he" ? he : en;

  return (
    <Layout>
      <SEOHead
        title={en.metaTitle}
        description={en.metaDesc}
        titleHe={he.metaTitle}
        descriptionHe={he.metaDesc}
      />
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <Link to={localePath("/insights")} className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mb-10">
            <DirectionalIcon icon="arrow" size={14} />
            {t.backToInsights}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">{t.badge}</span>
          </div>

          <h1 className="page-h1 font-display font-bold text-foreground mb-6 leading-tight">{t.title}</h1>

          {/* Disclaimer */}
          <div className="bg-section-alt border border-border p-6 mb-12 text-sm text-muted-foreground leading-relaxed">
            {t.disclaimer}
          </div>

          {/* Intro */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-14">{t.intro}</p>

          {/* Sections */}
          <div className="space-y-12">
            {t.sections.map((section) => (
              <div key={section.h2}>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{section.h2}</h2>
                <div className="text-muted-foreground leading-[1.85] space-y-3 whitespace-pre-line">{section.body}</div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="mt-16 bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <CheckCircle className="text-accent" size={20} />
              {t.checklistTitle}
            </h2>
            <ul className="space-y-3">
              {t.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pitfalls */}
          <div className="mt-8 border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <AlertTriangle className="text-accent" size={20} />
              {t.pitfallsTitle}
            </h2>
            <ul className="space-y-3">
              {t.pitfalls.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertTriangle className="text-accent shrink-0 mt-0.5" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">{t.faqTitle}</h2>
            <div className="space-y-6">
              {t.faq.map((item) => (
                <div key={item.q} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary text-center">
            <h2 className="text-2xl font-display font-bold text-primary-foreground mb-3">{t.ctaTitle}</h2>
            <p className="text-primary-foreground/70 text-sm mb-6">{t.ctaSub}</p>
            <Link to={localePath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
              {t.ctaBtn} <DirectionalIcon size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PrivacyAmendment13Article;
