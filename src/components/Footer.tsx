import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl font-semibold mb-4">HY Law Offices</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            A boutique law firm specializing in Intellectual Property, Technology Law, and AI-related legal services.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Practice Areas", "Insights", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <p>Tel Aviv, Israel</p>
            <p>info@hylaw.co.il</p>
            <p>+972-3-XXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} HY Law Offices. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
