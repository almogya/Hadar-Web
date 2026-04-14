import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
// [HEADSHOT_NEEDED] Replace attorney-headshot.jpg with a high-quality professional photo.
// Until then, a neutral silhouette placeholder is rendered below.
// Prompt: "Editorial crop and color grade for an existing professional headshot: neutral, premium, magazine style."
// Format: .webp, min 600×800px.
import officeImg from "@/assets/hero-office.jpg";
import { Link } from "react-router-dom";
import DirectionalIcon from "@/components/DirectionalIcon";

const About = () => {
  const { t, localePath, lang } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="About | Hadar Yatzkan | IP & Technology Attorney | Israel"
        description="Meet Hadar Yatzkan, founder of HY Law Offices. Boutique IP, technology, and AI law practice in Givatayim, Israel."
        titleHe="אודות | הדר יצקן | עורך דין קניין רוחני וטכנולוגיה | ישראל"
        descriptionHe="הכירו את הדר יצקן, מייסד HY Law Offices. משרד עורכי דין בוטיק לקניין רוחני, טכנולוגיה ובינה מלאכותית בגבעתיים, ישראל."
      />

      {/* Hero */}
      <section className="py-24 md:py-32 bg-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">{t.about.badge}</span>
              </div>
              <h1 className="page-h1 font-display font-bold text-foreground leading-tight mb-6">{t.about.h1}</h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{t.about.sub}</p>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
                {t.about.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* [HEADSHOT_NEEDED] Replace with real portrait once available */}
                <div className="w-full max-w-sm aspect-[3/4] overflow-hidden shadow-2xl bg-muted flex flex-col items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-24 h-24 opacity-30" fill="none" aria-hidden="true">
                    <circle cx="40" cy="28" r="18" fill="currentColor" />
                    <ellipse cx="40" cy="72" rx="30" ry="20" fill="currentColor" />
                  </svg>
                  <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase opacity-50">
                    {lang === "he" ? "[תמונה נדרשת — נא להעלות תמונה מקצועית]" : "[HEADSHOT NEEDED]"}
                  </span>
                </div>
                <div className="absolute -bottom-4 -end-4 w-full max-w-sm aspect-[3/4] border-2 border-accent/40 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image Banner */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img src={officeImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/40" />
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">{t.about.approachBadge}</span>
            <h2 className="section-h2 font-display font-bold text-foreground mt-4">{t.about.approachHeading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {t.about.approachItems.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 md:py-32 bg-section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">{t.about.qualBadge}</span>
            <h2 className="section-h2 font-display font-bold text-foreground mt-4">{t.about.qualHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.about.milestones.map((m) => (
              <div key={m.title} className="bg-background p-8 border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-display font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-h2 font-display font-bold text-primary-foreground mb-6">{t.ctaSection.heading}</h2>
          <p className="text-primary-foreground/75 text-base mb-8 leading-relaxed">{t.ctaSection.sub}</p>
          <Link to={localePath("/contact")} className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all">
            {t.ctaSection.cta1} <DirectionalIcon size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
