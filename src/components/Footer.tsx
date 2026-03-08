import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground" role="contentinfo">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="font-display text-xl font-semibold mb-4">HY Law Offices</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            Boutique intellectual property, technology, and AI law firm. Tel Aviv, Israel.
          </p>
          <p className="text-xs opacity-60">Israel Bar No. [BAR_NUMBER_UNSPECIFIED]</p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Practice Areas</h4>
          <nav aria-label="Practice areas footer navigation" className="flex flex-col gap-2">
            {[
              { label: "Intellectual Property", path: "/practice-areas/intellectual-property" },
              { label: "Trademarks", path: "/practice-areas/trademarks" },
              { label: "Copyright & Digital Content", path: "/practice-areas/copyright-digital-content" },
              { label: "AI & Law", path: "/practice-areas/ai-and-law" },
              { label: "Technology & Internet Law", path: "/practice-areas/technology-internet-law" },
              { label: "Commercial Litigation", path: "/practice-areas/commercial-litigation" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <nav aria-label="Quick links footer navigation" className="flex flex-col gap-2">
            {[
              { label: "About", path: "/about" },
              { label: "Insights", path: "/insights" },
              { label: "Contact", path: "/contact" },
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms of Use", path: "/terms" },
              { label: "Disclaimer", path: "/disclaimer" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
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
            <a href="[SOCIAL_LINKS_UNSPECIFIED]" aria-label="LinkedIn profile" className="text-sm opacity-60 hover:opacity-100">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <p>© {new Date().getFullYear()} HY Law Offices. All rights reserved.</p>
        <p className="text-xs max-w-md text-center sm:text-right">
          This website provides general information and does not constitute legal advice. No attorney-client relationship is formed until a formal engagement is agreed upon.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
