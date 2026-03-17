import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Gavel, Globe, Brain, Briefcase, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const areaIcons = [Shield, Scale, Gavel, Globe, Brain, Briefcase, Lightbulb];

const PracticeAreas = () => {
  const { t, localePath, lang } = useLanguage();

  const areas = [
    ...t.practiceSection.areas,
    {
      title: lang === "he" ? "ייעוץ משפטי לסטארטאפים וחברות טכנולוגיה" : "Legal Consulting for Startups & Tech Companies",
      desc: lang === "he"
        ? "ליווי משפטי מותאם לסטארטאפים וחברות טכנולוגיה באסטרטגיית IP, הסכמי גיוס, רישוי טכנולוגי וציות רגולטורי."
        : "Tailored legal counsel on IP strategy, fundraising agreements, technology licensing, and regulatory compliance.",
      link: "/contact",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 bg-section-alt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                {t.practiceAreasPage.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
              {t.practiceAreasPage.h1}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.practiceAreasPage.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Areas List */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-4">
            {areas.map((area, i) => {
              const Icon = areaIcons[i] || Lightbulb;
              return (
                <Link
                  to={localePath(area.link)}
                  key={area.title}
                  className="group border border-border p-8 md:p-10 hover:border-accent/40 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center border border-accent/30">
                    <Icon className="text-accent" size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {area.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent tracking-wide group-hover:gap-2 transition-all">
                      {t.practiceAreasPage.learnMore} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              to={localePath("/contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                backgroundColor: "#0891b2",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              {t.nav.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
