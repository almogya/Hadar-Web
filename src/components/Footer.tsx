import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const { t, localePath, lang } = useLanguage();

  const practiceLinks = t.practiceSection.areas.map((a) => ({
    label: a.title,
    path: a.link,
  }));

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Main Footer */}
      <div className="container py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Firm Lockup */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt={t.footer.firmName} className="h-20 w-20 object-contain" />
              <div>
                <h3 className="text-2xl font-bold leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: "0.06em" }}>
                  {t.footer.firmName}
                </h3>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              {t.footer.firmDesc}
            </p>
            <div className="w-10 h-px bg-primary-foreground/20 mb-4" />
            {!t.footer.barNumber.includes("[UNSPECIFIED]") && (
              <p className="text-xs opacity-30">{t.footer.barNumber}</p>
            )}
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-50">
              {t.footer.practiceAreasTitle}
            </h4>
            <nav aria-label={t.footer.practiceAreasTitle} className="flex flex-col gap-2.5">
              {practiceLinks.map((item) => (
                <Link
                  key={item.path}
                  to={localePath(item.path)}
                  className="text-sm opacity-60 hover:opacity-100 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-50">
              {t.footer.quickLinksTitle}
            </h4>
            <nav aria-label={t.footer.quickLinksTitle} className="flex flex-col gap-2.5">
              {t.footer.quickLinks.map((item) => (
                <Link
                  key={item.path}
                  to={localePath(item.path)}
                  className="text-sm opacity-60 hover:opacity-100 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-50">
              {t.footer.contactTitle}
            </h4>
            <address className="not-italic flex flex-col gap-4 text-sm">
              <span className="flex items-start gap-3 opacity-60">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{t.footer.officeAddress}</span>
              </span>
              <a
                href={`tel:${t.footer.phoneTel}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all"
              >
                <Phone size={14} className="shrink-0" aria-hidden="true" />
                <span>{t.footer.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${t.footer.emailAddress}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all"
              >
                <Mail size={14} className="shrink-0" aria-hidden="true" />
                <span>{t.footer.emailAddress}</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">{t.footer.copyright}</p>
          <p className="text-[11px] opacity-30 max-w-lg text-center md:text-end leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;