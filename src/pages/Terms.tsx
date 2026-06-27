import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Terms of Use | HY Law Offices"
        description="Terms of use for the HY Law Offices website. The site provides general information only and does not constitute legal advice."
        titleHe="תנאי שימוש | HY Law Offices — הדר יצקן"
        descriptionHe="תנאי השימוש באתר משרד עורכי הדין הדר יצקן. האתר מספק מידע כללי בלבד ואינו מהווה ייעוץ משפטי."
      />
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">{t.terms.h1}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.terms.lastUpdated}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
            {t.terms.sections.map((s) => (
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

export default Terms;
