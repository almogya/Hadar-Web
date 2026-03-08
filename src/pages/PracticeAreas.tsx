import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Gavel, Globe, Brain, Briefcase, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const areaIcons = [Shield, Scale, Gavel, Globe, Brain, Briefcase, Lightbulb];

const PracticeAreas = () => {
  const { t, localePath } = useLanguage();

  const areas = [
    ...t.practiceSection.areas,
    { title: t.lang === "he" ? "ייעוץ משפטי לסטארטאפים וחברות טכנולוגיה" : "Legal Consulting for Startups & Tech Companies", desc: t.lang === "he" ? "ליווי משפטי מותאם לסטארטאפים וחברות טכנולוגיה באסטרטגיית IP, הסכמי גיוס, רישוי טכנולוגי וציות רגולטורי." : "Tailored legal counsel on IP strategy, fundraising agreements, technology licensing, and regulatory compliance.", link: "/contact" },
  ];

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.practiceAreasPage.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">{t.practiceAreasPage.h1}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.practiceAreasPage.sub}</p>
          </div>
          <div className="space-y-6">
            {areas.map((area, i) => {
              const Icon = areaIcons[i] || Lightbulb;
              return (
                <Link
                  to={localePath(area.link)}
                  key={area.title}
                  className="group bg-background border border-border p-8 md:p-10 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row gap-6 block"
                >
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-gold-light">
                    <Icon className="text-gold" size={24} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">{area.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                      {t.practiceAreasPage.learnMore} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              to={localePath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
            >
              {t.nav.cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
