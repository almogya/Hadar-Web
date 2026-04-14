import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const Accessibility = () => {
  const { t, lang, localePath } = useLanguage();
  const isHe = lang === "he";

  return (
    <Layout>
      <SEOHead
        title="Accessibility Statement | HY Law Offices"
        description="HY Law Offices is committed to digital accessibility for all users. Learn about our accessibility features and how to report barriers."
        titleHe="הצהרת נגישות | HY Law Offices"
        descriptionHe="HY Law Offices מחויבת לנגישות דיגיטלית עבור כל המשתמשים. למדו על תכונות הנגישות שלנו וכיצד לדווח על מכשולים."
      />

      <section className="py-24">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">
              {isHe ? "נגישות" : "Accessibility"}
            </span>
          </div>

          <h1 className="text-4xl font-display font-bold text-foreground mb-3">
            {t.accessibility.h1}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {t.accessibility.lastUpdated}
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            {/* Intro */}
            <p className="text-base">{t.accessibility.intro}</p>

            {/* Accessibility Tools on This Site */}
            <div className="bg-section-alt border border-border p-6">
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">
                {isHe ? "כלי הנגישות באתר" : "Accessibility Tools on This Site"}
              </h2>
              <p className="text-sm mb-4">
                {isHe
                  ? "ניתן לגשת לתפריט הנגישות בלחיצה על כפתור הנגישות הממוקם בפינה התחתונה של המסך. התפריט כולל:"
                  : "Access the accessibility menu by clicking the accessibility button in the lower corner of the screen. The menu includes:"}
              </p>
              <ul className="list-disc ps-5 space-y-1.5 text-sm">
                <li>{isHe ? "שינוי גודל הטקסט (הגדלה והקטנה)" : "Text size adjustment (increase and decrease)"}</li>
                <li>{isHe ? "מצב ניגודיות גבוהה" : "High contrast mode"}</li>
                <li>{isHe ? "איפוס כל ההגדרות" : "Reset all settings to default"}</li>
              </ul>
            </div>

            {/* Our Efforts */}
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                {t.accessibility.effortsHeading}
              </h2>
              <ul className="list-disc ps-6 space-y-2 text-sm">
                {t.accessibility.efforts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Conformance standard */}
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                {isHe ? "תקן הנגישות" : "Conformance Standard"}
              </h2>
              <p className="text-sm">
                {isHe
                  ? "אתר זה שואף לעמוד בדרישות תקן WCAG 2.2 ברמה AA, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות (ישראל) ותקנות הנגישות לשירות."
                  : "This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA, in accordance with applicable accessibility requirements."}
              </p>
            </div>

            {/* Known limitations */}
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                {isHe ? "מגבלות ידועות" : "Known Limitations"}
              </h2>
              <p className="text-sm">
                {isHe
                  ? "אנו ממשיכים לשפר את נגישות האתר באופן שוטף. ייתכן שחלק מהתוכן אינו עומד עדיין בכל הדרישות. אנו מטפלים בכך ומקבלים פניות בנושא בברכה."
                  : "We are continuously improving the accessibility of this site. Some content may not yet fully meet all requirements. We are actively addressing this and welcome feedback."}
              </p>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                {t.accessibility.feedbackHeading}
              </h2>
              <p className="text-sm mb-4">{t.accessibility.feedbackBody}</p>
              <Link
                to={localePath("/contact")}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                {isHe ? "צרו קשר עם המשרד ←" : "Contact the firm →"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;
