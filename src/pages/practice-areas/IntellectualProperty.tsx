import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Shield, FileCheck, Settings, Scale } from "lucide-react";

const IntellectualProperty = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Shield className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Intellectual Property Law</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Intellectual property is often a business's most valuable — and most vulnerable — asset. We help companies, startups, and creators develop and execute IP strategies that protect innovation and build lasting competitive advantage.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              Our IP practice covers the full lifecycle of intellectual property — from identification and protection through commercialization and enforcement. We work with clients to build IP portfolios that align with their business objectives and growth plans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technology startups building products around proprietary innovations</li>
              <li>Established companies managing existing IP portfolios</li>
              <li>Founders preparing for investment or acquisition (IP due diligence)</li>
              <li>Creators and content businesses protecting original works</li>
              <li>R&D teams navigating freedom-to-operate questions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Typical Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "IP portfolio audits and strategy",
                "Ownership structuring and assignments",
                "Licensing and technology transfer agreements",
                "IP due diligence for M&A and fundraising",
                "Trade secret protection programs",
                "Freedom-to-operate analysis",
                "IP clauses in employment and contractor agreements",
                "International IP coordination",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Our Approach</h2>
            <p>
              We view intellectual property through a business lens. Rather than treating IP as a purely legal matter, we focus on how IP assets create value, reduce risk, and support strategic goals. Every recommendation is practical, proportionate, and aligned with the client's stage and resources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/trademarks" className="text-sm text-gold hover:underline">Trademarks →</Link>
              <Link to="/practice-areas/copyright-digital-content" className="text-sm text-gold hover:underline">Copyright & Digital Content →</Link>
              <Link to="/practice-areas/ai-and-law" className="text-sm text-gold hover:underline">AI & Law →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Discuss Your IP Strategy</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Every business has unique IP needs. We can help you identify, protect, and maximize the value of your intellectual property.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default IntellectualProperty;
