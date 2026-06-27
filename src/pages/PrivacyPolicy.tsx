import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | HY Law Offices"
        description="How HY Law Offices collects, uses, and protects personal information submitted through the website, and your rights under Israeli privacy law."
        titleHe="מדיניות פרטיות | HY Law Offices — הדר יצקן"
        descriptionHe="כיצד משרד עורכי הדין הדר יצקן אוסף, מעבד ומגן על מידע אישי הנמסר באתר, וזכויותיכם לפי חוק הגנת הפרטיות."
      />
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">{t.privacyPolicy.h1}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.privacyPolicy.lastUpdated}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
            {t.privacyPolicy.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
