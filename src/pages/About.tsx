import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import headshot from "@/assets/attorney-headshot.jpg";
import { Award, BookOpen, GraduationCap, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const milestoneIcons = [GraduationCap, Scale, BookOpen, Award];

const About = () => {
  const { t, localePath, lang } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 bg-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                  {t.about.badge}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6 tracking-tight">
                {t.about.h1}
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                {t.about.sub}
              </p>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
                {t.about.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-full max-w-sm aspect-[3/4] overflow-hidden shadow-2xl">
                  <img
                    src={headshot}
                    alt={t.founder.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -end-4 w-full max-w-sm aspect-[3/4] border-2 border-accent/40 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              {t.about.qualBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 tracking-tight">
              {t.about.qualHeading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.about.milestones.map((m, i) => {
              const Icon = milestoneIcons[i];
              return (
                <div
                  key={m.title}
                  className="flex gap-5 bg-section-alt p-8 border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/30 shrink-0">
                    <Icon className="text-accent" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6 tracking-tight">
            {t.ctaSection.heading}
          </h2>
          <p className="text-primary-foreground/75 text-base mb-8 leading-relaxed">
            {t.ctaSection.sub}
          </p>
          <Link
            to={localePath("/contact")}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
          >
            {t.ctaSection.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
