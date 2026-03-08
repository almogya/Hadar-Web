import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

interface PracticeAreaLayoutProps {
  icon: LucideIcon;
  title: string;
  titleHe: string;
  intro: string;
  introHe: string;
  ctaTitle?: string;
  ctaTitleHe?: string;
  ctaDesc?: string;
  ctaDescHe?: string;
  relatedLinks?: { path: string; labelEn: string; labelHe: string }[];
  children: ReactNode;
}

const PracticeAreaLayout = ({
  icon: Icon,
  title,
  titleHe,
  intro,
  introHe,
  ctaTitle,
  ctaTitleHe,
  ctaDesc,
  ctaDescHe,
  relatedLinks,
  children,
}: PracticeAreaLayoutProps) => {
  const { lang, localePath } = useLanguage();
  const isHe = lang === "he";

  return (
    <Layout>
      <section className="py-24">
        <div className="container max-w-4xl">
          <Link to={localePath("/practice-areas")} className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
            {isHe ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {isHe ? "חזרה לתחומי עיסוק" : "Back to Practice Areas"}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
              <Icon className="text-gold" size={24} />
            </div>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              {isHe ? "תחום עיסוק" : "Practice Area"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {isHe ? titleHe : title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {isHe ? introHe : intro}
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            {children}
          </div>

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
                {isHe ? "תחומי עיסוק קשורים" : "Related Practice Areas"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((rl) => (
                  <Link key={rl.path} to={localePath(rl.path)} className="text-sm text-gold hover:underline">
                    {isHe ? rl.labelHe : rl.labelEn} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
            <h2 className="text-2xl font-display font-bold mb-3">
              {isHe ? (ctaTitleHe || "בואו נדבר על האסטרטגיה שלכם") : (ctaTitle || "Discuss Your Needs")}
            </h2>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              {isHe ? (ctaDescHe || "נשמח לעזור לכם להגן על הקניין הרוחני ולקדם את המטרות העסקיות שלכם.") : (ctaDesc || "We can help you protect your intellectual property and advance your business goals.")}
            </p>
            <Link to={localePath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
              {isHe ? "לקביעת ייעוץ" : "Schedule a Consultation"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaLayout;
