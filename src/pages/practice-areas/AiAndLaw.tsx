import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Brain, FileCheck } from "lucide-react";

const AiAndLaw = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Brain className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">AI & Digital Content Law</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Artificial intelligence is transforming how content is created, distributed, and monetized — raising novel legal questions about authorship, ownership, liability, and compliance. We help businesses navigate these emerging issues with practical, forward-looking counsel.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              We advise companies building, deploying, or integrating AI technologies on the intellectual property, contractual, and regulatory dimensions of their work. Our focus is on practical risk management — identifying legal exposure early and structuring protections that support innovation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI and machine learning startups</li>
              <li>Companies integrating generative AI into products</li>
              <li>Content platforms dealing with AI-generated material</li>
              <li>Businesses licensing or procuring AI tools and services</li>
              <li>Investors evaluating AI-focused companies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Key Legal Questions We Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Copyright status of AI-generated outputs",
                "Training data licensing and compliance",
                "IP ownership in AI-assisted development",
                "AI vendor contract review and negotiation",
                "Liability allocation for AI outputs",
                "Regulatory compliance and risk frameworks",
                "AI-related disclosure and transparency obligations",
                "Commercialization of AI-powered products",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-alt border border-border p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">An Evolving Legal Landscape</h2>
            <p className="text-sm">
              AI law is developing rapidly across jurisdictions. Courts, regulators, and legislators are actively defining the rules. We monitor these developments closely and advise clients based on the current state of the law while helping them prepare for likely regulatory directions. This page reflects general information as of March 2026 and does not constitute legal advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Insights</h2>
            <ul className="space-y-2">
              <li><Link to="/insights" className="text-sm text-gold hover:underline">AI-Generated Content and Copyright: Who Owns What? →</Link></li>
              <li><Link to="/insights" className="text-sm text-gold hover:underline">The Legal Framework for AI in Israel: What Businesses Need to Know →</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/intellectual-property" className="text-sm text-gold hover:underline">Intellectual Property →</Link>
              <Link to="/practice-areas/copyright-digital-content" className="text-sm text-gold hover:underline">Copyright & Digital Content →</Link>
              <Link to="/practice-areas/technology-internet-law" className="text-sm text-gold hover:underline">Technology & Internet Law →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Navigate AI Legal Questions</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Whether you're building AI products or integrating AI tools, we can help you understand and manage the legal risks.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AiAndLaw;
