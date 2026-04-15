import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionalIcon from "@/components/DirectionalIcon";
import { useLanguage } from "@/i18n/LanguageContext";

const he = {
  metaTitle: "קניין רוחני בעידן ה-AI בישראל 2026 | HY Law",
  metaDesc: "מי הבעלים על יצירות AI? מדריך מקיף לזכויות יוצרים, פטנטים וסימני מסחר בישראל 2026 — לסטארטאפים וחברות טכנולוגיה.",
  badge: "קניין רוחני · AI · 2026",
  title: "קניין רוחני בעידן הבינה המלאכותית: מי הבעלים על יצירות AI בישראל?",
  intro: "בינה מלאכותית גנרטיבית — ChatGPT, Midjourney, GitHub Copilot — הפכה ממושא עניין אקדמי לכלי עבודה שגרתי עבור מיליוני עסקים. אבל שאלה אחת נשארת פתוחה וצוברת דחיפות: מי הבעלים החוקי על מה ש-AI מייצר? האם הקוד, התמונה, הטקסט — מוגנים? ואם כן, בידי מי? מאמר זה מפרט את מצב הדין בישראל נכון ל-2026 ואת ההשלכות המעשיות לסטארטאפים, יוצרים וחברות טכנולוגיה.",
  sections: [
    {
      h2: "1. סוגי הקניין הרוחני הרלוונטיים ל-AI",
      body: `דיני קניין רוחני בישראל מכירים בארבעה ענפים עיקריים — כל אחד רלוונטי ל-AI בצורה שונה.

**זכויות יוצרים** מגנות על יצירות מקוריות: טקסט, תמונות, קוד, מוזיקה. לפי חוק זכות יוצרים, התשס"ח-2007, מוקנית הזכות ל"יוצר" — שמוגדר, על פי הפרשנות המקובלת, כאדם טבעי. תוצרת AI גרידא, ללא מעורבות יצירתית אנושית, עלולה שלא לזכות בהגנה כלל.

**פטנטים** מגנים על המצאות חדשות ובעלות שימוש תעשייתי. חוק הפטנטים, התשכ"ז-1967, מגדיר "ממציא" כאדם. בית המשפט העליון האמריקאי קבע בפרשת Thaler v. Vidal (2022) שמערכת AI אינה יכולה להירשם כממציאה — עמדה שרשות הפטנטים הישראלית מאמצת באופן עקבי.

**סימני מסחר** מגנים על מותגים ושמות עסקיים. כאן השאלה פחות נוגעת לזהות היוצר ויותר לשימוש — האם לוגו שנוצר ב-AI יכול לשמש כסימן מסחר? התשובה היא כן, בכפוף לדרישות הייחודיות הרגילות.

**סודות מסחריים** מגנים על מידע עסקי סודי בעל ערך. Prompts מורכבים, מודלים מאומנים, ומתודולוגיות AI קנייניות — כל אלה עשויים להיות מוגנים כסוד מסחרי, ללא תלות בשאלת הבעלות על התוצר.`,
    },
    {
      h2: "2. מי הבעלים על תוצרת AI? מצב הדין בישראל",
      body: `זוהי השאלה הבוערת — ואין לה עדיין תשובה חקיקתית ברורה בישראל.

**העמדה הנוכחית:** לפי הפרשנות המקובלת של חוק זכות יוצרים הישראלי, יצירה הדורשת "מחבר אנושי" לא תיחשב מוגנת אם נוצרה ללא תרומה יצירתית אנושית משמעותית. כלומר: פרומפט של שורה אחת שהניב תמונה — ספק אם מוגן. סדרת הוראות מורכבת, עריכה, בחירה וסידור על-ידי אדם — הרבה יותר סיכוי להגנה.

**הגישה ב-2026:** מדינות שונות ננקטות בגישות שונות. בריטניה מעניקה הגנה מיוחדת ל"יצירות שנוצרו על-ידי מחשב" — ישראל טרם חוקקה הוראה מקבילה. האיחוד האירופי (EU AI Act) מחייב שקיפות על תוכן שנוצר ב-AI.

**ההשלכה המעשית:** אם אתה משתמש ב-AI ליצירת תוכן לעסק שלך, עומדות בפניך שתי בעיות: (א) ייתכן שאין לך זכויות יוצרים ב"יצירה" שיצרת; (ב) ייתכן שאתה מפר זכויות יוצרים של מישהו אחר שהמודל אומן על יצירותיו.`,
    },
    {
      h2: "3. אימון מודלים על נתונים מוגנים: הסיכון הגדול",
      body: `ועכשיו לנקודה שמדאיגה יותר מכולן: **האם GPT-4, Midjourney ו-Copilot מפרים זכויות יוצרים?**

חברות AI אמנו את המודלים שלהן על כמויות עצומות של תוכן מהאינטרנט — ספרים, מאמרים, קוד, תמונות — חלק גדול ממנו מוגן בזכויות יוצרים. תביעות משפטיות מרובות כבר הוגשו בארה"ב: Getty Images נגד Stability AI, קבוצת סופרים נגד OpenAI, GitHub Copilot Class Action.

**בישראל:** אין עדיין פסיקה מנחה בנושא. הפרשנות שתנחה את בתי המשפט הישראליים תהיה מושפעת מהדין האמריקאי ומהתפתחויות בבית המשפט לצדק של האיחוד האירופי.

**הסיכון לסטארטאפים ישראלים:** אם אתה מאמן מודל AI על נתונים מוגנים ללא הרשאה, אתה חשוף לתביעת הפרה. אם אתה משתמש ב-API של ספק AI, תנאי השירות של הספק קובעים מי נושא באחריות — לרוב: אתה.

**המלצות מעשיות:**
- השתמש בנתוני אימון ממקורות פתוחים מורשים (Common Crawl עם פילטרים, CC-licensed datasets)
- רשום יומן שמות המקורות, תאריכי הורדה ורישיונות
- כלול בתנאי שירות שלך סעיף ברור על אחריות בגין תוכן שנוצר ב-AI`,
    },
    {
      h2: "4. אסטרטגיית IP לסטארטאפים בתחום ה-AI",
      body: `**בדיקת FTO (Freedom to Operate):** לפני השקת מוצר AI, בצע בדיקת FTO — בחינה אם המוצר שלך מפר פטנטים של אחרים. מסד הנתונים Google Patents ו-ILPTO (רשות הפטנטים הישראלית) הם נקודת התחלה. עורך דין IP יבצע ניתוח מעמיק יותר.

**הסכמי עבודה וקבלנים:** כפי שפורט במדריך הנפרד לבעלות IP, קבלן שמפתח מודל AI עבורך שומר כברירת מחדל על הבעלות — אלא אם כן קיים הסכם המחאה בכתב. כלול בכל הסכם קבלן סעיף IP מפורש.

**מה לרשום:**
- פטנטים — על האלגוריתמים הייחודיים, השיטות, הארכיטקטורות שפיתחת (לא על הרעיון, על היישום הספציפי)
- סימני מסחר — על שם המוצר, הלוגו, שם החברה
- זכויות יוצרים — נרשמות אוטומטית, אך תיעוד של גרסאות ותאריכים מחזק את עמדתך

**פרומפטים כסוד מסחרי:** Prompts מורכבים שבנית לאורך זמן ויוצרים ערך עסקי — שמור אותם סודיים. חתם עם כל גישה עליהם לנהלים של Non-Disclosure. שקול אם לפרסמם כחלק ממוצר או לשמרם כ"מתכון סודי".`,
    },
    {
      h2: "5. עדכוני 2026: מה השתנה",
      body: `**EU AI Act — בתוקף מ-2025:** החוק האירופי מסדיר סיכוני AI בארבע רמות. אם חברתך מוכרת לשוק האירופי — יש לך חובות חדשות: שקיפות על שימוש ב-AI, הערכת סיכונים, תיעוד. ישראל אינה חייבת ליישם, אך חברות ישראליות שמוכרות לאיחוד — כן.

**ISO/IEC 42001:** תקן חדש לניהול AI אחראי. אינו חובה, אבל הופך להיות ציפייה בחוזים עם לקוחות גדולים.

**זכויות יוצרים על קוד:** בית המשפט בארה"ב קבע (Thaler v. Copyright Office, 2023) שתמונה שנוצרה כולה ב-AI ללא תרומה אנושית אינה ניתנת לרישום. עמדה זו מיושמת ביחס לקוד ותוכן גנרטיבי אחר.

**ישראל ב-2026:** ועדת הכלכלה ומשרד המשפטים עובדים על מדיניות AI לאומית. שינויי חקיקה בתחום זכויות יוצרים ו-AI צפויים. עצה אחת: אל תניח שמה שמותר היום — יישאר מותר. בנה תהליכי עבודה שיכולים להסתגל.`,
    },
  ],
  checklist: [
    "תעד את כל מקורות הנתונים ששימשו לאימון מודלים ואת רישיונותיהם",
    "כלול סעיפי המחאת IP מפורשים בכל הסכמי קבלן ומפתחים",
    "ממש תרומה יצירתית אנושית ברת-הוכחה בתהליכי עבודה עם AI גנרטיבי",
    "בצע בדיקת FTO לפני השקת מוצר AI חדש",
    "רשום פטנטים על שיטות ואלגוריתמים ייחודיים",
    "שמור prompts מורכבים כסוד מסחרי — NDA + גישה מוגבלת",
    "עדכן תנאי שימוש לכלול הבהרות על בעלות תוצרת AI",
    "בדוק חשיפה ל-EU AI Act אם מוכרים לשוק האירופי",
  ],
  pitfalls: [
    "הנחה שתוצרת AI שלך מוגנת אוטומטית בזכויות יוצרים",
    "שימוש ב-API של מודל AI ללא קריאת תנאי השימוש — לרוב אתה נושא באחריות",
    "פיתוח על-ידי קבלנים ללא הסכמי המחאת IP בכתב",
    "אימון על נתונים ממקורות לא ברורים ללא בדיקת רישיון",
    "הזנחת תיעוד גרסאות ותהליך הפיתוח — חיוני לבדיקת נאותות ולסכסוכים",
  ],
  faq: [
    { q: "אם אני כותב פרומפט ו-AI מייצר תמונה — מי הבעלים?", a: "לפי הדין הישראלי הנוכחי, ספק אם מישהו מחזיק בזכויות יוצרים על תמונה שנוצרה ללא תרומה יצירתית אנושית. ככל שהפרומפט מורכב יותר ואתה מבצע עריכה ובחירה — כך עמדתך חזקה יותר." },
    { q: "האם אפשר לקבל פטנט על אלגוריתם AI בישראל?", a: "כן — אך לא על הרעיון המופשט, על היישום הספציפי הניתן לשכפול תעשייתי. רשות הפטנטים הישראלית בוחנת את 'מהות ההמצאה'. מומלץ להגיש בליווי עורך דין פטנטים." },
    { q: "האם שימוש ב-ChatGPT ליצירת תוכן לאתר שלי חוקי?", a: "עלות השימוש ב-API מורשית. אבל בעלות על התוכן שנוצר — תלויה בתנאי OpenAI ובדין המקומי. נכון ל-2026, OpenAI מעניקה לך זכויות שימוש בתוצרים, אך לא ערבות לזכויות יוצרים." },
    { q: "מה ה-EU AI Act אומר ומה הקשר אלי כחברה ישראלית?", a: "אם אתה מוכר שירות AI ללקוחות באיחוד האירופי — ה-EU AI Act חל עליך. מערכות בסיכון גבוה (כמו AI לקבלות עבודה, אשראי, מערכות ביטחון) דורשות הערכת סיכונים, שקיפות ותיעוד." },
    { q: "האם Prompt Engineering ניתן לרישום פטנט?", a: "בדרך כלל לא — רצף של הוראות טקסטואליות לבדו אינו עומד בדרישות הפטנטביליות. אם תהליך ה-Prompt משולב עם ארכיטקטורה טכנולוגית ייחודית — ייתכן שכן." },
  ],
  disclaimer: "מאמר זה מספק מידע כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה הוא ייחודי — מומלץ להתייעץ עם עורך דין לקבלת הנחיות המותאמות לנסיבות הספציפיות שלך.",
  ctaTitle: "רוצים אסטרטגיית IP לעסק שלכם?",
  ctaSub: "נבנה יחד תוכנית IP מותאמת — מבדיקת FTO ועד רישום פטנטים.",
  ctaBtn: "לקביעת ייעוץ",
  backToInsights: "חזרה למאמרים",
  checklistTitle: "רשימת בדיקה",
  pitfallsTitle: "מלכודות נפוצות",
  faqTitle: "שאלות ותשובות",
};

const en = {
  metaTitle: "Intellectual Property in the AI Era Israel 2026 | HY Law",
  metaDesc: "Who owns AI-generated content? A comprehensive guide to copyright, patents, and trademarks in Israel 2026 — for startups and tech companies.",
  badge: "IP · AI · 2026",
  title: "Intellectual Property in the AI Era: Who Owns AI-Generated Works in Israel?",
  intro: "Generative AI — ChatGPT, Midjourney, GitHub Copilot — has shifted from academic curiosity to an everyday business tool for millions. But one question remains open and pressing: who is the legal owner of what AI produces? Is the code, image, or text protected by law? And if so, by whom? This article outlines the current state of Israeli law as of 2026 and its practical implications for startups, creators, and technology companies.",
  sections: [
    {
      h2: "1. Types of Intellectual Property Relevant to AI",
      body: `Israeli IP law recognises four main branches — each relevant to AI in a different way.

**Copyright** protects original works: text, images, code, music. The Copyright Act, 2007, grants rights to the "author" — who, under the prevailing interpretation, must be a natural person. Purely AI-generated output, without meaningful human creative contribution, may not qualify for protection at all.

**Patents** protect new inventions with industrial applicability. The Patent Law, 1967, defines "inventor" as a person. The US Federal Circuit confirmed in Thaler v. Vidal (2022) that an AI system cannot be named as inventor — a position the Israeli Patent Office adopts consistently.

**Trademarks** protect brands and business names. Here the question is less about who created the mark and more about use — can an AI-generated logo serve as a trademark? Yes, subject to ordinary distinctiveness requirements.

**Trade Secrets** protect valuable confidential business information. Complex prompts, trained models, and proprietary AI methodologies may all qualify as trade secrets, regardless of ownership questions over the output.`,
    },
    {
      h2: "2. Who Owns AI Output? The State of Israeli Law",
      body: `This is the burning question — and it still lacks a clear legislative answer in Israel.

**Current position:** Under the prevailing interpretation of the Israeli Copyright Act, a work requiring a "human author" will not be protected if created without significant human creative contribution. In other words: a one-line prompt that generated an image — unlikely to be protected. A complex instruction set, editing, curation, and arrangement by a human — much stronger claim to protection.

**2026 landscape:** Different countries take different approaches. The UK grants special protection to "computer-generated works" — Israel has not enacted an equivalent provision. The EU (EU AI Act) requires transparency disclosures for AI-generated content.

**The practical implication:** If you use AI to generate content for your business, you face two risks: (a) you may hold no copyright in what you "created"; (b) you may be infringing someone else's copyright in works the model was trained on.`,
    },
    {
      h2: "3. Training on Protected Data: The Biggest Risk",
      body: `Now to the point that worries most: **do GPT-4, Midjourney, and Copilot infringe copyright?**

AI companies trained their models on vast amounts of internet content — books, articles, code, images — much of it copyright-protected. Multiple lawsuits have already been filed in the US: Getty Images v. Stability AI, Authors Guild v. OpenAI, GitHub Copilot Class Action.

**In Israel:** No binding judicial guidance on this yet. Israeli courts will likely be influenced by US law and developments in the EU Court of Justice.

**The risk for Israeli startups:** If you train an AI model on protected data without authorisation, you are exposed to infringement claims. If you use a third-party AI API, the provider's terms of service determine who bears liability — usually: you.

**Practical recommendations:**
- Use training data from licensed open sources (Common Crawl with filters, CC-licensed datasets)
- Maintain a log of data sources, download dates, and licences
- Include a clear clause in your terms of service on responsibility for AI-generated content`,
    },
    {
      h2: "4. IP Strategy for AI Startups",
      body: `**Freedom to Operate (FTO) Search:** Before launching an AI product, conduct an FTO analysis — checking whether your product infringes third-party patents. Google Patents and ILPTO (the Israeli Patent Office) are starting points. An IP attorney will perform deeper analysis.

**Employment and contractor agreements:** As detailed in the separate IP ownership guide, a contractor who develops an AI model for you retains ownership by default — unless a written assignment agreement exists. Include an explicit IP assignment clause in every contractor agreement.

**What to register:**
- Patents — on unique algorithms, methods, and architectures you developed (not on the idea, but on the specific implementation)
- Trademarks — on your product name, logo, company name
- Copyright — arises automatically, but documenting versions and dates strengthens your position

**Prompts as trade secrets:** Complex prompts you have refined over time that generate business value — keep them confidential. Have everyone with access sign an NDA. Consider whether to publish them as part of a product or protect them as a "secret recipe."`,
    },
    {
      h2: "5. 2026 Updates: What Has Changed",
      body: `**EU AI Act — in force from 2025:** The European law regulates AI risks at four levels. If your company sells to the European market — you have new obligations: transparency about AI use, risk assessment, documentation. Israel is not obligated to implement it, but Israeli companies selling to the EU — are.

**ISO/IEC 42001:** New standard for responsible AI governance. Not mandatory, but becoming an expectation in contracts with large clients.

**Copyright in code:** A US court ruled (Thaler v. Copyright Office, 2023) that an image created entirely by AI without human creative input is not registrable. This position applies to AI-generated code and other generative content.

**Israel in 2026:** The Knesset Economics Committee and the Ministry of Justice are developing a national AI policy. Legislative changes in the copyright and AI space are expected. One piece of advice: do not assume what is permitted today will remain permitted. Build workflows that can adapt.`,
    },
  ],
  checklist: [
    "Document all data sources used for model training and their licences",
    "Include explicit IP assignment clauses in all contractor and developer agreements",
    "Implement demonstrable human creative contribution to generative AI workflows",
    "Conduct an FTO search before launching a new AI product",
    "File patents on unique methods and algorithms",
    "Protect complex prompts as trade secrets — NDA + restricted access",
    "Update terms of service to include clear statements on AI output ownership",
    "Check EU AI Act exposure if selling to the European market",
  ],
  pitfalls: [
    "Assuming your AI output is automatically protected by copyright",
    "Using an AI model API without reading the terms of service — you typically bear liability",
    "Developing with contractors without written IP assignment agreements",
    "Training on data from unclear sources without licence verification",
    "Neglecting version documentation and development process records — critical for due diligence and disputes",
  ],
  faq: [
    { q: "If I write a prompt and AI generates an image — who owns it?", a: "Under current Israeli law, it is uncertain whether anyone holds copyright over an image created without human creative contribution. The more complex your prompt and the more editing and curation you perform, the stronger your position." },
    { q: "Can I get a patent on an AI algorithm in Israel?", a: "Yes — but not on the abstract idea, only on the specific implementation that is industrially replicable. The Israeli Patent Office examines the 'essence of the invention'. Filing with a patent attorney is strongly recommended." },
    { q: "Is using ChatGPT to create website content for my business legal?", a: "Using the API is licensed. But ownership of the content generated depends on OpenAI's terms and local law. As of 2026, OpenAI grants you usage rights to outputs but does not guarantee copyright ownership." },
    { q: "What does the EU AI Act say and how does it affect an Israeli company?", a: "If you sell an AI service to customers in the EU — the EU AI Act applies to you. High-risk systems (such as AI for hiring, credit, security) require risk assessments, transparency, and documentation." },
    { q: "Can Prompt Engineering be patented?", a: "Generally no — a sequence of textual instructions alone does not meet patentability requirements. If the prompt process is integrated with a unique technical architecture, it may qualify." },
  ],
  disclaimer: "This article provides general information only and does not constitute legal advice. Each situation is unique — consult with a qualified attorney for guidance specific to your circumstances.",
  ctaTitle: "Want an IP Strategy for Your Business?",
  ctaSub: "We will build a tailored IP plan together — from FTO searches to patent filings.",
  ctaBtn: "Schedule a Consultation",
  backToInsights: "Back to Insights",
  checklistTitle: "Checklist",
  pitfallsTitle: "Common Pitfalls",
  faqTitle: "FAQ",
};

const AiIpArticle = () => {
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

export default AiIpArticle;
