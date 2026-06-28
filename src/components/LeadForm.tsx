import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Scale, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE } from "@/lib/emailConfig";
import { trackLead, trackEvent } from "@/lib/analytics";

interface LeadFormProps {
  /** Visual theme: "navy" premium card (hero) or "light" card (service/inline). */
  variant?: "navy" | "light";
  /** Analytics source label, e.g. "hero", "service_page". */
  source?: string;
  /** Optional heading override. */
  heading?: string;
  headingHe?: string;
  /** Optional subheading override. */
  sub?: string;
  subHe?: string;
  className?: string;
}

/**
 * Compact 3-field lead-capture card (name, phone, email) wired to the same
 * EmailJS endpoint as the contact form. No matter-type / message fields.
 */
const LeadForm = ({ variant = "navy", source = "hero", heading, headingHe, sub, subHe, className = "" }: LeadFormProps) => {
  const { lang } = useLanguage();
  const isHe = lang === "he";

  const [form, setForm] = useState({ name: "", phone: "", email: "", consent: false });
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean; email?: boolean; consent?: boolean }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [started, setStarted] = useState(false);
  const lastSubmit = useRef(0);

  const t = {
    heading: isHe ? (headingHe ?? "פרסום לשון הרע? כל דקה חשובה.") : (heading ?? "Facing online defamation? Every minute counts."),
    sub: isHe ? (subHe ?? "מלאו פרטים ונתקדם") : (sub ?? "Fill in your details and we'll take it from there."),
    name: isHe ? "שם מלא" : "Full name",
    phone: isHe ? "טלפון" : "Phone",
    email: isHe ? 'דוא"ל' : "Email",
    submit: "SEND",
    sending: isHe ? "שולח..." : "Sending...",
    micro: isHe
      ? "הפנייה הראשונית אינה יוצרת יחסי עו״ד–לקוח. אין לשלוח מידע חסוי לפני התקשרות רשמית."
      : "An initial inquiry does not create an attorney-client relationship. Do not send confidential information before a formal engagement.",
    consent: isHe ? "אני מאשר/ת יצירת קשר ומסכים/ה למדיניות הפרטיות." : "I agree to be contacted and accept the privacy policy.",
    success: isHe ? "הפרטים התקבלו. נחזור אליכם בהקדם האפשרי." : "Your details were received. We'll get back to you as soon as possible.",
    errName: isHe ? "נא להזין שם מלא." : "Please enter your full name.",
    errPhone: isHe ? "נא להזין מספר טלפון." : "Please enter a phone number.",
    errEmail: isHe ? 'נא להזין כתובת דוא"ל תקינה.' : "Please enter a valid email.",
    errConsent: isHe ? "נא לאשר את יצירת הקשר." : "Please confirm consent to be contacted.",
    errGeneral: isHe ? "אירעה שגיאה בשליחה. נסו שוב בעוד רגע." : "Something went wrong. Please try again in a moment.",
    rateLimit: isHe ? "נא להמתין מעט לפני שליחה נוספת." : "Please wait a moment before submitting again.",
  };

  const onFirstInteraction = () => {
    if (!started) {
      setStarted(true);
      trackEvent("hero_form_start", { source });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const next = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
      email: !emailOk,
      consent: !form.consent,
    };
    setErrors(next);
    if (next.name || next.phone || next.email || next.consent) return;

    const now = Date.now();
    if (now - lastSubmit.current < 30000) {
      setStatus("error");
      return;
    }
    lastSubmit.current = now;
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          company: "—",
          matter_type: isHe ? `ליד מהאתר (${source})` : `Website lead (${source})`,
          message: isHe ? "ליד מטופס מהיר — בקשה לבדיקה ראשונית." : "Quick-form lead — initial review request.",
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      trackLead(`lead_form_${source}`);
      trackEvent("hero_form_submit", { source });
      setStatus("success");
    } catch {
      // Keep the user's input on failure.
      setStatus("error");
    }
  };

  const isNavy = variant === "navy";
  const cardClasses = isNavy
    ? "bg-[#0B1F3A] border border-white/10 text-white"
    : "bg-background border border-border text-foreground";
  const labelClasses = isNavy ? "text-white/70" : "text-muted-foreground";
  const inputClasses = isNavy
    ? "w-full px-4 py-3 rounded-md bg-white/[0.06] border text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-accent transition-colors"
    : "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors";
  const borderOk = isNavy ? "border-white/15" : "border-border";
  const borderErr = "border-red-400";

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-7 shadow-xl ${cardClasses} ${className}`} data-cta="hero-form-success">
        <div className="flex flex-col items-center text-center gap-3 py-6">
          <CheckCircle2 className="text-accent" size={40} strokeWidth={1.5} />
          <p className={`text-[15px] leading-relaxed ${isNavy ? "text-white/85" : "text-foreground"}`}>{t.success}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 sm:p-7 shadow-xl ${cardClasses} ${className}`}>
      <div className="flex items-center gap-2.5 mb-1">
        <Scale className="text-accent shrink-0" size={20} strokeWidth={1.6} aria-hidden="true" />
        <h2 className="font-display font-bold text-lg leading-tight">{t.heading}</h2>
      </div>
      <p className={`text-[13px] mb-5 leading-relaxed ${isNavy ? "text-white/60" : "text-muted-foreground"}`}>{t.sub}</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        {/* Honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor={`lf-website-${source}`}>Website</label>
          <input id={`lf-website-${source}`} type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>

        <div>
          <label htmlFor={`lf-name-${source}`} className={`block text-[11px] font-medium mb-1.5 ${labelClasses}`}>{t.name}</label>
          <input
            id={`lf-name-${source}`}
            type="text"
            autoComplete="name"
            maxLength={100}
            value={form.name}
            onFocus={onFirstInteraction}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${inputClasses} ${errors.name ? borderErr : borderOk}`}
            aria-invalid={!!errors.name}
            aria-label={t.name}
          />
          {errors.name && <p className="text-red-400 text-[11px] mt-1">{t.errName}</p>}
        </div>

        <div>
          <label htmlFor={`lf-phone-${source}`} className={`block text-[11px] font-medium mb-1.5 ${labelClasses}`}>{t.phone}</label>
          <input
            id={`lf-phone-${source}`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            value={form.phone}
            onFocus={onFirstInteraction}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${inputClasses} ${errors.phone ? borderErr : borderOk}`}
            aria-invalid={!!errors.phone}
            aria-label={t.phone}
            dir="ltr"
          />
          {errors.phone && <p className="text-red-400 text-[11px] mt-1">{t.errPhone}</p>}
        </div>

        <div>
          <label htmlFor={`lf-email-${source}`} className={`block text-[11px] font-medium mb-1.5 ${labelClasses}`}>{t.email}</label>
          <input
            id={`lf-email-${source}`}
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={255}
            value={form.email}
            onFocus={onFirstInteraction}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClasses} ${errors.email ? borderErr : borderOk}`}
            aria-invalid={!!errors.email}
            aria-label={t.email}
            dir="ltr"
          />
          {errors.email && <p className="text-red-400 text-[11px] mt-1">{t.errEmail}</p>}
        </div>

        <label className={`flex items-start gap-2.5 text-[11px] leading-relaxed cursor-pointer ${isNavy ? "text-white/55" : "text-muted-foreground"}`}>
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            className="mt-0.5 shrink-0 accent-accent"
            aria-invalid={!!errors.consent}
          />
          <span>{t.consent}</span>
        </label>
        {errors.consent && <p className="text-red-400 text-[11px] -mt-1">{t.errConsent}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          data-cta="hero-form-submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-[#081527] text-sm font-bold tracking-wide hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (<><Loader2 size={16} className="animate-spin" />{t.sending}</>) : t.submit}
        </button>

        {status === "error" && <p className="text-red-400 text-[12px] text-center" role="alert">{t.errGeneral}</p>}

        <p className={`text-[10.5px] leading-relaxed pt-1 ${isNavy ? "text-white/40" : "text-muted-foreground/70"}`}>{t.micro}</p>
      </form>
    </div>
  );
};

export default LeadForm;
