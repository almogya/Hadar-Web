import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
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
