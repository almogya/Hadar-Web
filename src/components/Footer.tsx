import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, localePath } = useLanguage();

  const practiceLinks = t.practiceSection.areas.map((a) => ({
    label: a.title,
    path: a.link,
  }));

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-semibold mb-4">{t.footer.firmName}</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">{t.footer.firmDesc}</p>
            <p className="text-xs opacity-60">{t.footer.barNumber}</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t.footer.practiceAreasTitle}</h4>
            <nav aria-label={t.footer.practiceAreasTitle} className="flex flex-col gap-2">
              {practiceLinks.map((item) => (
                <Link key={item.path} to={localePath(item.path)} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t.footer.quickLinksTitle}</h4>
            <nav aria-label={t.footer.quickLinksTitle} className="flex flex-col gap-2">
              {t.footer.quickLinks.map((item) => (
                <Link key={item.path} to={localePath(item.path)} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <address className="not-italic flex flex-col gap-3 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <MapPin size={14} aria-hidden="true" /> [ADDRESS_UNSPECIFIED], Tel Aviv, Israel
              </span>
              <a href="tel:[PHONE_UNSPECIFIED]" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone size={14} aria-hidden="true" /> [PHONE_UNSPECIFIED]
              </a>
              <a href="mailto:[EMAIL_UNSPECIFIED]" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail size={14} aria-hidden="true" /> [EMAIL_UNSPECIFIED]
              </a>
            </address>
            <div className="mt-4 flex gap-3">
              <a href="[SOCIAL_LINKS_UNSPECIFIED]" aria-label="LinkedIn" className="text-sm opacity-60 hover:opacity-100">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>{t.footer.copyright}</p>
          <p className="text-xs max-w-md text-center sm:text-end">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
