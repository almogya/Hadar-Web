import { useState, useRef } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Check, ChevronRight, ChevronLeft, Loader2, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

// Area-specific dynamic questions (bilingual, not in translation files to keep them manageable)
type AreaQuestion = { key: string; label: { he: string; en: string }; options: { key: string; label: { he: string; en: string } }[] };
const AREA_QUESTIONS: Record<string, AreaQuestion[]> = {
  ip: [
    { key: "ipType", label: { he: "סוג הנושא", en: "Matter type" }, options: [
      { key: "registration", label: { he: "רישום / הגנה", en: "Registration / protection" } },
      { key: "enforcement", label: { he: "אכיפה מול מפר", en: "Enforcement against infringer" } },
      { key: "dispute", label: { he: "סכסוך / תביעה", en: "Dispute / claim" } },
      { key: "other", label: { he: "אחר", en: "Other" } },
    ]},
    { key: "scope", label: { he: "היקף גיאוגרפי", en: "Geographic scope" }, options: [
      { key: "local", label: { he: "ישראל בלבד", en: "Israel only" } },
      { key: "international", label: { he: "בינלאומי", en: "International" } },
    ]},
  ],
  trademarks: [
    { key: "tmType", label: { he: "סוג הנושא", en: "Matter type" }, options: [
      { key: "registration", label: { he: "רישום סימן חדש", en: "New registration" } },
      { key: "opposition", label: { he: "התנגדות לרישום", en: "Opposition" } },
      { key: "cancellation", label: { he: "ביטול סימן קיים", en: "Cancellation" } },
      { key: "enforcement", label: { he: "אכיפה / הפרה", en: "Enforcement / infringement" } },
    ]},
    { key: "classes", label: { he: "מספר קלאסים", en: "Number of classes" }, options: [
      { key: "one", label: { he: "1", en: "1" } },
      { key: "two3", label: { he: "2–3", en: "2–3" } },
      { key: "four", label: { he: "4+", en: "4+" } },
      { key: "unsure", label: { he: "לא בטוח", en: "Not sure" } },
    ]},
  ],
  defamation: [
    { key: "platform", label: { he: "פלטפורמה", en: "Platform" }, options: [
      { key: "google", label: { he: "גוגל / ביקורות", en: "Google / Reviews" } },
      { key: "meta", label: { he: "פייסבוק / אינסטגרם", en: "Facebook / Instagram" } },
      { key: "tiktok", label: { he: "טיקטוק", en: "TikTok" } },
      { key: "other", label: { he: "אחר / אתר ייעודי", en: "Other / dedicated site" } },
    ]},
    { key: "anonymous", label: { he: "האם הפרסום אנונימי?", en: "Is the publication anonymous?" }, options: [
      { key: "yes", label: { he: "כן", en: "Yes" } },
      { key: "no", label: { he: "לא — המפרסם ידוע", en: "No — publisher is known" } },
    ]},
    { key: "injunction", label: { he: "האם נדרש צו דחוף?", en: "Is an urgent injunction needed?" }, options: [
      { key: "yes", label: { he: "כן", en: "Yes" } },
      { key: "no", label: { he: "לא", en: "No" } },
      { key: "unsure", label: { he: "לא בטוח", en: "Not sure" } },
    ]},
  ],
  blocking: [
    { key: "platform", label: { he: "פלטפורמה", en: "Platform" }, options: [
      { key: "google", label: { he: "גוגל / Google Business", en: "Google / Google Business" } },
      { key: "meta", label: { he: "מטא / פייסבוק / אינסטגרם", en: "Meta / Facebook / Instagram" } },
      { key: "amazon", label: { he: "אמזון", en: "Amazon" } },
      { key: "other", label: { he: "אחר", en: "Other" } },
    ]},
    { key: "accountType", label: { he: "סוג החשבון", en: "Account type" }, options: [
      { key: "business", label: { he: "עסקי", en: "Business" } },
      { key: "personal", label: { he: "אישי", en: "Personal" } },
    ]},
  ],
};

const DEFAULT_QUESTIONS: AreaQuestion[] = [
  { key: "goal", label: { he: "מה המטרה העיקרית?", en: "What is the main goal?" }, options: [
    { key: "advice", label: { he: "ייעוץ והבנת המצב", en: "Advice & understanding the situation" } },
    { key: "document", label: { he: "ניסוח / בדיקת מסמך", en: "Drafting / reviewing a document" } },
    { key: "dispute", label: { he: "פתרון סכסוך", en: "Resolving a dispute" } },
    { key: "represent", label: { he: "ייצוג בהליך משפטי", en: "Legal representation in proceedings" } },
  ]},
];

const FeeCalculator = () => {
  const { t, lang, localePath } = useLanguage();
  const isHe = lang === "he";
  const fc = t.feeCalculator;

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const lastSubmit = useRef(0);

  const [form, setForm] = useState<{
    area: string;
    areaAnswers: Record<string, string>;
    service: string;
    description: string;
    timeline: string;
    budget: string[];
    engagement: string;
    name: string;
    email: string;
    phone: string;
    contactTime: string;
    consent: boolean;
  }>({
    area: "",
    areaAnswers: {},
    service: "",
    description: "",
    timeline: "",
    budget: [],
    engagement: "",
    name: "",
    email: "",
    phone: "",
    contactTime: "",
    consent: false,
  });

  const dynamicQuestions = form.area ? (AREA_QUESTIONS[form.area] ?? DEFAULT_QUESTIONS) : [];

  const canAdvance = () => {
    if (step === 1) return !!form.area;
    if (step === 2) return !!form.service;
    if (step === 3) return !!form.timeline;
    return false;
  };

  const handleBudgetToggle = (key: string) => {
    setForm(f => ({
      ...f,
      budget: f.budget.includes(key) ? f.budget.filter(k => k !== key) : [...f.budget, key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const now = Date.now();
    if (now - lastSubmit.current < 30000) return;
    if (!form.consent) return;
    setSubmitting(true);
    lastSubmit.current = now;

    const areaLabel = fc.areas.find(a => a.key === form.area)?.label ?? form.area;
    const serviceLabel = fc.services.find(s => s.key === form.service)?.label ?? form.service;
    const timelineLabel = fc.timelineOptions.find(o => o.key === form.timeline)?.label ?? form.timeline;
    const engagementLabel = fc.engagementOptions.find(o => o.key === form.engagement)?.label ?? form.engagement;
    const budgetLabels = form.budget.map(b => fc.budgetOptions.find(o => o.key === b)?.label).filter(Boolean).join(", ");

    const dynamicAnswersSummary = dynamicQuestions.map(q => {
      const answer = form.areaAnswers[q.key];
      const qLabel = isHe ? q.label.he : q.label.en;
      const aLabel = q.options.find(o => o.key === answer)?.[`label`]?.[lang as "he" | "en"] ?? answer ?? "—";
      return `${qLabel}: ${aLabel}`;
    }).join(" | ");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone || "—");
    formData.append("_replyto", form.email);
    formData.append("תחום", areaLabel);
    formData.append("שירות", serviceLabel);
    formData.append("פרטים ספציפיים", dynamicAnswersSummary || "—");
    formData.append("תיאור", form.description || "—");
    formData.append("לוח זמנים", timelineLabel);
    formData.append("תקציב", budgetLabels || "—");
    formData.append("סוג התקשרות", engagementLabel || "—");
    formData.append("זמן נוח לשיחה", form.contactTime || "—");
    formData.append("_subject", `בקשה לשכר טרחה — ${areaLabel} — ${form.name}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/Hadar@ai-lawyer.co.il", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error(isHe ? "שגיאת רשת. בדקו את החיבור ונסו שוב." : "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50";
  const btnOption = (active: boolean) =>
    `px-4 py-3 text-sm font-medium border transition-all cursor-pointer text-start ${
      active
        ? "border-accent bg-accent/10 text-foreground"
        : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
    }`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fc.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SEOHead
        title={fc.seoTitle}
        description={fc.seoDesc}
        titleHe={isHe ? fc.seoTitle : "מחשבון שכר טרחה עורך דין | כמה עולה עורך דין | HY Law"}
        descriptionHe={isHe ? fc.seoDesc : "כמה עולה עורך דין לקניין רוחני, סימני מסחר, לשון הרע וחסימת חשבון? קבלו הצעה אישית למייל."}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 bg-section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.35em] uppercase">{fc.badge}</span>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">{fc.h1}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">{fc.sub}</p>
            <p className="text-xs text-muted-foreground/60 max-w-xl mx-auto">{fc.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              /* Success State */
              <div className="text-center py-16 px-8 border border-border bg-section-alt">
                <CheckCircle2 className="mx-auto mb-6 text-accent" size={56} strokeWidth={1.5} />
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">{fc.successTitle}</h2>
                <p className="text-muted-foreground mb-2 leading-relaxed">{fc.successMsg}</p>
                <p className="text-sm text-accent font-medium mb-8">{fc.successNote}</p>
                <Link
                  to={localePath("/")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  {fc.backHome}
                </Link>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-muted-foreground">{fc.stepLabel} {step} {fc.of} 4</span>
                    <span className="text-xs text-accent font-medium">{Math.round((step / 4) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    {[1, 2, 3, 4].map(n => (
                      <span key={n} className={`text-[11px] font-medium ${n <= step ? "text-accent" : "text-muted-foreground/40"}`}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot */}
                  <div className="sr-only" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
                  </div>

                  {/* ── Step 1: Practice Area ── */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-6">{fc.step1Title}</h2>
                      <div className="grid grid-cols-2 gap-3">
                        {fc.areas.map(area => (
                          <button
                            key={area.key}
                            type="button"
                            onClick={() => setForm(f => ({ ...f, area: area.key, areaAnswers: {} }))}
                            className={btnOption(form.area === area.key)}
                          >
                            {form.area === area.key && <Check size={14} className="inline me-2 text-accent" />}
                            {area.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Case Details ── */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <h2 className="text-xl font-display font-semibold text-foreground">{fc.step2Title}</h2>

                      {/* Service type */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">{fc.serviceLabel}</p>
                        <div className="space-y-2">
                          {fc.services.map(s => (
                            <button
                              key={s.key}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, service: s.key }))}
                              className={btnOption(form.service === s.key)}
                            >
                              {form.service === s.key && <Check size={14} className="inline me-2 text-accent" />}
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dynamic area-specific questions */}
                      {dynamicQuestions.map(q => (
                        <div key={q.key}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
                            {isHe ? q.label.he : q.label.en}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {q.options.map(opt => (
                              <button
                                key={opt.key}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, areaAnswers: { ...f.areaAnswers, [q.key]: opt.key } }))}
                                className={btnOption(form.areaAnswers[q.key] === opt.key)}
                              >
                                {form.areaAnswers[q.key] === opt.key && <Check size={14} className="inline me-2 text-accent" />}
                                {isHe ? opt.label.he : opt.label.en}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Description */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">
                          {fc.descLabel}
                        </label>
                        <textarea
                          rows={4}
                          maxLength={1000}
                          value={form.description}
                          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                          className={`${inputClasses} resize-none`}
                          placeholder={fc.descPlaceholder}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Scope & Timeline ── */}
                  {step === 3 && (
                    <div className="space-y-8">
                      <h2 className="text-xl font-display font-semibold text-foreground">{fc.step3Title}</h2>

                      {/* Timeline */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">{fc.timelineLabel}</p>
                        <div className="space-y-2">
                          {fc.timelineOptions.map(o => (
                            <button
                              key={o.key}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, timeline: o.key }))}
                              className={btnOption(form.timeline === o.key)}
                            >
                              {form.timeline === o.key && <Check size={14} className="inline me-2 text-accent" />}
                              {o.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Budget (multi-select checkboxes) */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1">{fc.budgetLabel}</p>
                        <p className="text-xs text-muted-foreground mb-3">{fc.disclaimer}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {fc.budgetOptions.map(o => (
                            <button
                              key={o.key}
                              type="button"
                              onClick={() => handleBudgetToggle(o.key)}
                              className={btnOption(form.budget.includes(o.key))}
                            >
                              {form.budget.includes(o.key) && <Check size={14} className="inline me-2 text-accent" />}
                              {o.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Engagement type */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">{fc.engagementLabel}</p>
                        <div className="space-y-2">
                          {fc.engagementOptions.map(o => (
                            <button
                              key={o.key}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, engagement: o.key }))}
                              className={btnOption(form.engagement === o.key)}
                            >
                              {form.engagement === o.key && <Check size={14} className="inline me-2 text-accent" />}
                              {o.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Contact Info ── */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-display font-semibold text-foreground">{fc.step4Title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{fc.step4Sub}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">{fc.nameLabel}</label>
                          <input
                            type="text"
                            required
                            maxLength={100}
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className={inputClasses}
                            placeholder={fc.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">{fc.emailLabel}</label>
                          <input
                            type="email"
                            required
                            maxLength={255}
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            className={inputClasses}
                            placeholder={fc.emailPlaceholder}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">{fc.phoneLabel}</label>
                          <input
                            type="tel"
                            maxLength={20}
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            className={inputClasses}
                            placeholder={fc.phonePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">{fc.contactTimeLabel}</label>
                          <div className="grid grid-cols-2 gap-2">
                            {fc.contactTimeOptions.map(o => (
                              <button
                                key={o.key}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, contactTime: o.key }))}
                                className={btnOption(form.contactTime === o.key)}
                              >
                                {o.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          id="fc-consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                          className="mt-1 shrink-0 accent-accent"
                        />
                        <label htmlFor="fc-consent" className="text-xs text-muted-foreground leading-relaxed">
                          {fc.consentLabel}
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(s => s - 1)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30 transition-colors"
                      >
                        {isHe ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                        {fc.back}
                      </button>
                    ) : <div />}

                    {step < 4 ? (
                      <button
                        type="button"
                        disabled={!canAdvance()}
                        onClick={() => setStep(s => s + 1)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {fc.next}
                        {isHe ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting || !form.name || !form.email || !form.consent}
                        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold bg-accent text-[#081527] hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {submitting ? <><Loader2 size={16} className="animate-spin" />{fc.submitting}</> : fc.submitBtn}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Rich Info Section — SEO */}
      <section className="py-16 bg-section-alt border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">{fc.infoTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {fc.infoItems.map(item => (
              <div key={item.title} className="p-6 bg-background border border-border">
                <h3 className="font-display font-semibold text-foreground mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Rich text for SEO */}
          <div className="space-y-8 border-t border-border pt-10">
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">{fc.richSection.q1}</h2>
              <p className="text-muted-foreground leading-[1.85] text-[15px]">{fc.richSection.a1}</p>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">{fc.richSection.q2}</h2>
              <p className="text-muted-foreground leading-[1.85] text-[15px]">{fc.richSection.a2}</p>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">{fc.richSection.q3}</h2>
              <p className="text-muted-foreground leading-[1.85] text-[15px]">{fc.richSection.a3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">{fc.faqTitle}</h2>
          <div className="space-y-6">
            {fc.faqs.map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            {isHe ? "מעדיפים לדבר ישירות?" : "Prefer to speak directly?"}
          </h2>
          <p className="text-primary-foreground/75 mb-8">
            {isHe ? "צרו קשר ונקבע שיחת ייעוץ ראשונית." : "Contact us and we'll schedule an initial consultation."}
          </p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#081527] text-sm font-bold tracking-wide hover:bg-accent/90 transition-colors"
          >
            {isHe ? "לצור קשר" : "Contact Us"}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FeeCalculator;
