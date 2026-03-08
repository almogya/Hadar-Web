import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Gavel, Globe, Brain, Briefcase, Lightbulb } from "lucide-react";

const areas = [
  {
    icon: Shield,
    title: "Intellectual Property Law",
    desc: "We provide comprehensive intellectual property services including strategic portfolio management, IP audits, licensing agreements, and enforcement actions. Our approach combines deep legal knowledge with an understanding of the business value of intellectual assets.",
    link: "/practice-areas/intellectual-property",
  },
  {
    icon: Scale,
    title: "Trademarks",
    desc: "From trademark searches and registration to enforcement and opposition proceedings, we protect your brand identity in Israel and internationally. We advise on brand strategy, domain name disputes, and anti-counterfeiting measures.",
    link: "/practice-areas/trademarks",
  },
  {
    icon: Gavel,
    title: "Copyright & Digital Content",
    desc: "We help creators, publishers, and businesses protect their creative works. Our services include copyright ownership structuring, licensing, fair use analysis, platform enforcement, and digital rights management.",
    link: "/practice-areas/copyright-digital-content",
  },
  {
    icon: Globe,
    title: "Technology & Internet Law",
    desc: "We advise technology companies and digital platforms on regulatory compliance, terms of service, privacy policies, e-commerce regulations, and content moderation frameworks. Our expertise spans SaaS agreements, API licensing, and platform liability.",
    link: "/practice-areas/technology-internet-law",
  },
  {
    icon: Brain,
    title: "AI & Digital Content Law",
    desc: "As AI transforms creative industries, we help clients navigate the complex legal questions surrounding AI-generated content, machine learning datasets, algorithmic accountability, and the intellectual property implications of generative AI technologies.",
    link: "/practice-areas/ai-and-law",
  },
  {
    icon: Briefcase,
    title: "Commercial Litigation",
    desc: "We represent clients in complex commercial disputes including IP infringement cases, breach of contract, unfair competition, and trade secret misappropriation. Our litigation strategy focuses on achieving practical outcomes through negotiation, mediation, or courtroom advocacy.",
    link: "/practice-areas/commercial-litigation",
  },
  {
    icon: Lightbulb,
    title: "Legal Consulting for Startups & Tech Companies",
    desc: "We provide startups and technology companies with tailored legal counsel on IP strategy, fundraising agreements, technology licensing, regulatory compliance, and the legal frameworks essential for scaling innovative businesses.",
    link: "/contact",
  },
];

const PracticeAreas = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">Practice Areas</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            HY Law Offices provides strategic legal counsel across a range of disciplines at the intersection of law, technology, and innovation. Each practice area is backed by deep subject-matter knowledge and a commitment to practical, business-aligned solutions.
          </p>
        </div>
        <div className="space-y-6">
          {areas.map((area) => (
            <Link
              to={area.link}
              key={area.title}
              className="group bg-background border border-border p-8 md:p-10 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row gap-6 block"
            >
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-gold-light">
                <area.icon className="text-gold" size={24} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">{area.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
          >
            Discuss Your Legal Needs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default PracticeAreas;
