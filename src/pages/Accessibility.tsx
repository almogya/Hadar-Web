import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Accessibility = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">{t.accessibility.h1}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.accessibility.lastUpdated}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
            <p>{t.accessibility.intro}</p>
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">{t.accessibility.effortsHeading}</h2>
              <ul className="list-disc ps-6 space-y-2">
                {t.accessibility.efforts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">{t.accessibility.feedbackHeading}</h2>
              <p>{t.accessibility.feedbackBody}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;
