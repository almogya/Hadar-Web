import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Legal Disclaimer | HY Law Offices"
        description="Legal disclaimer for the HY Law Offices website. Content is for general information only and does not create an attorney-client relationship."
        titleHe="הבהרה משפטית | HY Law Offices — הדר יצקן"
        descriptionHe="הבהרה משפטית לאתר משרד עורכי הדין הדר יצקן. התכנים מספקים מידע כללי בלבד ואינם יוצרים יחסי עורך דין–לקוח."
      />
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">{t.disclaimer.h1}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.disclaimer.lastUpdated}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
            {t.disclaimer.sections.map((s) => (
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

export default Disclaimer;
