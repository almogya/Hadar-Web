import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Scale, FileCheck } from "lucide-react";

const Trademarks = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Scale className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Trademarks</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Your brand is more than a name or logo — it represents the trust you've built with your customers. We help businesses protect, enforce, and manage their trademarks in Israel and internationally.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              From initial clearance searches through registration, enforcement, and portfolio management, we provide end-to-end trademark services. Our approach is strategic: we help clients build brand protection that scales with their business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Startups selecting and protecting their brand names</li>
              <li>Companies expanding into new markets or product categories</li>
              <li>E-commerce businesses facing counterfeit or copycat issues</li>
              <li>Brand owners managing multi-jurisdiction portfolios</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Typical Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Trademark clearance searches and risk assessment",
                "Israeli and international trademark filings",
                "Opposition and cancellation proceedings",
                "Brand licensing and coexistence agreements",
                "Domain name disputes (UDRP)",
                "Anti-counterfeiting and marketplace enforcement",
                "Trademark portfolio audits and strategy",
                "Rebranding and assignment transactions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Important Note</h2>
            <p className="text-sm">
              Trademark registration processes and timelines vary by jurisdiction. The information on this page is general in nature and should not be relied upon as specific legal advice for your situation. We recommend consulting with us to understand the options and procedures relevant to your particular circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/intellectual-property" className="text-sm text-gold hover:underline">Intellectual Property →</Link>
              <Link to="/practice-areas/copyright-digital-content" className="text-sm text-gold hover:underline">Copyright & Digital Content →</Link>
              <Link to="/practice-areas/commercial-litigation" className="text-sm text-gold hover:underline">Commercial Litigation →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Protect Your Brand</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Whether you're launching a new brand or managing an existing portfolio, we can help you develop the right trademark strategy.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Trademarks;
