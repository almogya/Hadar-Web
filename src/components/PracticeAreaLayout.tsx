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
          <Link to={localePath("/practice-areas")} className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8">
            {isHe ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {isHe ? "חזרה לתחומי עיסוק" : "Back to Practice Areas"}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 flex items-center justify-center border border-accent/30">
              <Icon className="text-accent" size={24} strokeWidth={1.5} />
            </div>
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
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
                  <Link key={rl.path} to={localePath(rl.path)} className="text-sm text-accent hover:underline">
                    {isHe ? rl.labelHe : rl.labelEn} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "64px", padding: "40px", backgroundColor: "#122a4b", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 700, margin: "0 0 12px", lineHeight: 1.3 }}>
              {isHe ? (ctaTitleHe || "בואו נדבר על האסטרטגיה שלכם") : (ctaTitle || "Discuss Your Needs")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", margin: "0 0 24px", lineHeight: 1.7 }}>
              {isHe ? (ctaDescHe || "נשמח לעזור לכם להגן על הקניין הרוחני ולקדם את המטרות העסקיות שלכם.") : (ctaDesc || "We can help you protect your intellectual property and advance your business goals.")}
            </p>
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
              {isHe ? "לקביעת ייעוץ" : "Schedule a Consultation"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaLayout;
