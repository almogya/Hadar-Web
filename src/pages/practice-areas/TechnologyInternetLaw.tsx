import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Globe, FileCheck } from "lucide-react";

const TechnologyInternetLaw = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link to="/practice-areas" className="inline-flex items-center gap-1 text-sm text-gold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Practice Areas
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold-light">
            <Globe className="text-gold" size={24} />
          </div>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Practice Area</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Technology & Internet Law</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Technology companies operate in a complex regulatory environment that spans multiple jurisdictions and evolves constantly. We help SaaS providers, digital platforms, and online businesses build legally sound foundations for growth.
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What We Do</h2>
            <p>
              We advise technology companies on the legal frameworks that govern their operations — from platform terms and privacy compliance to content moderation and cross-border data issues. Our goal is to help clients build products and services that are legally resilient.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Who This Is For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>SaaS and platform companies</li>
              <li>E-commerce businesses and online marketplaces</li>
              <li>Digital agencies and service providers</li>
              <li>Companies handling user data and content</li>
              <li>Businesses expanding internationally online</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Typical Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Terms of service and acceptable use policies",
                "Privacy policies and data protection compliance",
                "SaaS and API licensing agreements",
                "Content moderation frameworks and policies",
                "E-commerce regulatory compliance",
                "Platform liability and intermediary protections",
                "Cross-border data transfer considerations",
                "Online dispute resolution strategies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FileCheck className="text-gold shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Related Practice Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/practice-areas/ai-and-law" className="text-sm text-gold hover:underline">AI & Law →</Link>
              <Link to="/practice-areas/intellectual-property" className="text-sm text-gold hover:underline">Intellectual Property →</Link>
              <Link to="/practice-areas/commercial-litigation" className="text-sm text-gold hover:underline">Commercial Litigation →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Build on Solid Legal Ground</h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Get the legal frameworks right from the start. We help technology companies navigate compliance and reduce risk.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default TechnologyInternetLaw;
