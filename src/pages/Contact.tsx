import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const { t, localePath } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", matterType: "", message: "", consent: false,
  });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const lastSubmit = useRef(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const now = Date.now();
    if (now - lastSubmit.current < 30000) { toast.error(t.contact.rateLimitError); return; }
    if (!form.consent) { toast.error(t.contact.consentError); return; }
    setSubmitting(true);
    lastSubmit.current = now;
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", company: "", matterType: "", message: "", consent: false });
      navigate(localePath("/thank-you"));
    }, 500);
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm font-medium tracking-widest uppercase">{t.contact.badge}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">{t.contact.h1}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">{t.contact.sub}</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0"><MapPin className="text-gold" size={20} /></div>
                  <div><h3 className="font-display font-semibold text-foreground mb-1">{t.contact.officeLabel}</h3><p className="text-sm text-muted-foreground">[ADDRESS_UNSPECIFIED], Tel Aviv, Israel</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0"><Mail className="text-gold" size={20} /></div>
                  <div><h3 className="font-display font-semibold text-foreground mb-1">{t.contact.emailLabel}</h3><a href="mailto:[EMAIL_UNSPECIFIED]" className="text-sm text-muted-foreground hover:text-gold transition-colors">[EMAIL_UNSPECIFIED]</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0"><Phone className="text-gold" size={20} /></div>
                  <div><h3 className="font-display font-semibold text-foreground mb-1">{t.contact.phoneLabel}</h3><a href="tel:[PHONE_UNSPECIFIED]" className="text-sm text-muted-foreground hover:text-gold transition-colors">[PHONE_UNSPECIFIED]</a></div>
                </div>
              </div>

              <div className="mt-8 text-xs text-muted-foreground leading-relaxed p-4 border border-border bg-section-alt">
                <strong>{t.contact.privacyLabel}</strong> {t.contact.privacyNotice}
              </div>
            </div>

            <div className="bg-section-alt p-8 md:p-10 border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">{t.contact.formHeading}</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.nameLabel}</label>
                  <input id="name" type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors" placeholder={t.contact.namePlaceholder} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.emailFieldLabel}</label>
                  <input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors" placeholder={t.contact.emailPlaceholder} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.phoneFieldLabel}</label>
                    <input id="phone" type="tel" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors" placeholder={t.contact.phonePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.companyLabel}</label>
                    <input id="company" type="text" maxLength={100} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors" placeholder={t.contact.companyPlaceholder} />
                  </div>
                </div>
                <div>
                  <label htmlFor="matterType" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.matterLabel}</label>
                  <select id="matterType" value={form.matterType} onChange={(e) => setForm({ ...form, matterType: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors">
                    <option value="">{t.contact.matterPlaceholder}</option>
                    {t.contact.matterTypes.map((mt) => <option key={mt} value={mt}>{mt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.messageLabel}</label>
                  <textarea id="message" required rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder={t.contact.messagePlaceholder} />
                </div>
                <div className="flex items-start gap-2">
                  <input id="consent" type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 shrink-0" />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">{t.contact.consentLabel}</label>
                </div>
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors disabled:opacity-50">
                  {submitting ? t.contact.submitting : t.contact.submitBtn} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
