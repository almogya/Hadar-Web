import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Gavel, FileCheck } from "lucide-react";

const CopyrightDigitalContent = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Gavel className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Copyright & Digital Content</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          The digital era has transformed how content is created, distributed, and monetized — and how it is infringed. We help creators, publishers, and digital businesses protect their works and enforce their rights across platforms and jurisdictions.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              We advise on the full range of copyright matters — from establishing ownership and structuring licenses to pursuing enforcement actions when rights are violated. Our practice is particularly focused on the challenges of digital content and platform-mediated distribution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content creators and digital publishers</li>
              <li>Media companies and content platforms</li>
              <li>Software developers and SaaS providers</li>
              <li>Educational institutions and e-learning businesses</li>
              <li>Photographers, designers, and visual artists</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Typical Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Copyright ownership and assignment structuring",
                "Content licensing and distribution agreements",
                "Platform takedown notices and counter-notices",
                "Copyright infringement analysis and enforcement",
                "Fair use and fair dealing assessments",
                "User-generated content policies",
                "Digital rights management strategies",
                "Cross-border copyright coordination",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Common Pitfalls</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Assuming copyright transfers automatically with payment for work — it often does not without a proper written assignment.</li>
              <li>Relying on platform terms alone to protect your content without understanding your underlying legal rights.</li>
              <li>Failing to document authorship and creation dates, which can complicate enforcement later.</li>
              <li>Overlooking open-source or third-party license obligations in software and digital products.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Insights</h2>
            <ul className="space-y-2">
              <li><Link to="/insights" className="text-sm text-gold hover:underline">Protecting Digital Content: Copyright Enforcement on Social Platforms →</Link></li>
              <li><Link to="/insights" className="text-sm text-gold hover:underline">Platform Takedowns and Counter-Notices: A Creator's Legal Framework →</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/ai-and-law" className="text-sm text-gold hover:underline">AI & Law →</Link>
              <Link to="/practice-areas/technology-internet-law" className="text-sm text-gold hover:underline">Technology & Internet Law →</Link>
              <Link to="/practice-areas/commercial-litigation" className="text-sm text-gold hover:underline">Commercial Litigation →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Protect Your Content</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Whether you need to enforce your rights or structure licensing arrangements, we can help you navigate copyright in the digital age.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default CopyrightDigitalContent;
