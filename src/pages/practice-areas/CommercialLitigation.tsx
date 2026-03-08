import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Briefcase, FileCheck } from "lucide-react";

const CommercialLitigation = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Briefcase className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Commercial Litigation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          When disputes arise, a clear-eyed assessment of risks and options is essential. We represent clients in commercial and IP-related disputes with a focus on achieving practical, cost-effective outcomes — whether through negotiation, mediation, or litigation.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              We handle commercial disputes from initial assessment through resolution. Our approach prioritizes early evaluation and realistic strategy — litigation is a tool, not a default. When court proceedings are necessary, we advocate effectively and efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Companies facing IP infringement claims or defending against them</li>
              <li>Businesses in contractual disputes with partners, vendors, or clients</li>
              <li>Founders dealing with co-founder or equity disputes</li>
              <li>Companies addressing unfair competition or trade secret issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Typical Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "IP infringement claims and defense",
                "Breach of contract disputes",
                "Unfair competition proceedings",
                "Trade secret misappropriation",
                "Injunctive relief applications",
                "Commercial arbitration and mediation",
                "Settlement negotiation and structuring",
                "Pre-litigation demand and strategy",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Our Approach to Disputes</h2>
            <p className="text-sm">
              We believe in a negotiation-first posture. Many commercial disputes can be resolved more efficiently through well-structured negotiations or mediation than through prolonged litigation. When litigation is necessary, we pursue it with focus and determination. We provide honest assessments of risks and likely outcomes — we will not pursue unmeritorious claims or recommend litigation where the expected costs outweigh the potential benefits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/intellectual-property" className="text-sm text-gold hover:underline">Intellectual Property →</Link>
              <Link to="/practice-areas/trademarks" className="text-sm text-gold hover:underline">Trademarks →</Link>
              <Link to="/practice-areas/copyright-digital-content" className="text-sm text-gold hover:underline">Copyright & Digital Content →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Facing a Dispute?</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Early legal assessment can make a significant difference in outcomes. Contact us for a confidential discussion of your situation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default CommercialLitigation;
