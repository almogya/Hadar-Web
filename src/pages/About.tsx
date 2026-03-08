import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import headshot from "@/assets/attorney-headshot.jpg";
import { Award, BookOpen, GraduationCap, Scale } from "lucide-react";

const milestoneIcons = [GraduationCap, Scale, BookOpen, Award];

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.about.badge}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-8">{t.about.h1}</h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {t.about.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-sm h-[500px] overflow-hidden shadow-2xl">
                  <img src={headshot} alt={t.about.h1} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full max-w-sm h-[500px] border-2 border-gold -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.about.qualBadge}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{t.about.qualHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.about.milestones.map((m, i) => {
              const Icon = milestoneIcons[i];
              return (
                <div key={m.title} className="flex gap-4 bg-background p-6 border border-border">
                  <Icon className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
