import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const MATTER_KEYS = ["ip", "trademarks", "copyright", "ai", "tech", "litigation", "general"] as const;

const Contact = () => {
  const { t, localePath, lang } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", matterType: "", message: "", consent: false,
  });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const lastSubmit = useRef(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const now = Date.now();
    if (now - lastSubmit.current < 30000) { toast.error(t.contact.rateLimitError); return; }
    if (!form.consent) { toast.error(t.contact.consentError); return; }
    setSubmitting(true);
    lastSubmit.current = now;

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("matterType", form.matterType);
      formData.append("message", form.message);
      formData.append("_subject", `New Inquiry from ${form.name} — HY Law`);
      formData.append("_template", "table");

      const res = await fetch("https://formsubmit.co/ajax/hadaryatzkan@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setForm({ name: "", email: "", phone: "", company: "", matterType: "", message: "", consent: false });
        navigate(localePath("/thank-you"));
      } else {
        toast.error(lang === "he" ? "שגיאה בשליחה. נסו שוב." : "Failed to send. Please try again.");
      }
    } catch {
      toast.error(lang === "he" ? "שגיאת רשת. נסו שוב." : "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 bg-section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                {t.contact.badge}
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
              {t.contact.h1}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.contact.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/30 shrink-0">
                    <MapPin className="text-accent" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t.contact.officeLabel}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.contact.officeAddress}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/30 shrink-0">
                    <Mail className="text-accent" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t.contact.emailLabel}
                    </h3>
                    <a
                      href={`mailto:${t.contact.emailAddress}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {t.contact.emailAddress}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/30 shrink-0">
                    <Phone className="text-accent" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t.contact.phoneLabel}
                    </h3>
                    <a
                      href={`tel:${t.contact.phoneTel}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {t.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-xs text-muted-foreground leading-relaxed p-5 border border-border bg-section-alt">
                <strong className="text-foreground">{t.contact.privacyLabel}</strong>{" "}
                {t.contact.privacyNotice}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="bg-section-alt p-8 md:p-12 border border-border">
                {/* Trust strip */}
                <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
                  {[
                    lang === "he" ? "✓ מענה תוך 24 שעות" : "✓ Reply within 24 hours",
                  ].map((item) => (
                    <span key={item} className="text-xs font-semibold text-accent tracking-wide">{item}</span>
                  ))}
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {t.contact.formHeading}
                </h2>
                <p className="text-sm text-muted-foreground mb-8">{t.contact.formSub}</p>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClasses}
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                        {t.contact.emailFieldLabel}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClasses}
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                        {t.contact.phoneFieldLabel}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        maxLength={20}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClasses}
                        placeholder={t.contact.phonePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                        {t.contact.companyLabel}
                      </label>
                      <input
                        id="company"
                        type="text"
                        maxLength={100}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClasses}
                        placeholder={t.contact.companyPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="matterType" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                      {t.contact.matterLabel}
                    </label>
                    <select
                      id="matterType"
                      value={form.matterType}
                      onChange={(e) => setForm({ ...form, matterType: e.target.value })}
                      className={inputClasses}
                    >
                      <option value="">{t.contact.matterPlaceholder}</option>
                      {MATTER_KEYS.map((key) => (
                        <option key={key} value={key}>{t.contact.matterTypes[key]}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2 tracking-wide uppercase">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClasses} resize-none`}
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  {/* Section 11 inline privacy notice */}
                  <div className="text-xs text-muted-foreground leading-relaxed p-4 border border-border bg-background space-y-1.5">
                    <p className="font-semibold text-foreground">{lang === "he" ? "הודעת פרטיות (סעיף 11)" : "Privacy Notice"}</p>
                    <p>{lang === "he"
                      ? "בעל מאגר המידע: עו\"ד הדר יצקן, ויצמן 46, גבעתיים. מסירת השם והדוא\"ל נדרשת למענה לפנייה; שאר השדות רצוניים. המידע ישמש אך ורק לטיפול בפנייתכם ולמתן שירותים משפטיים. המידע מועבר לשרת FormSubmit.co לצורך משלוח. יש לכם זכות לעיין, לתקן ולמחוק את המידע — פנו ל: Hadar@ai-lawyer.co.il."
                      : "Data controller: Hadar Yatzkan, 46 Weizmann St., Givatayim, Israel. Name and email are required to respond; all other fields are optional. Information is used solely to handle your inquiry and provide legal services. Submissions are routed via FormSubmit.co. You have the right to access, correct, and delete your data — contact Hadar@ai-lawyer.co.il."
                    }</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 shrink-0 accent-accent"
                    />
                    <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                      {t.contact.consentLabel}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {t.contact.submitting}
                      </>
                    ) : (
                      <>
                        {t.contact.submitBtn}
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
