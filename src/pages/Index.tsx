import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Brain, Globe, Briefcase, Gavel, CheckCircle, MessageSquare, FileSearch, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import headshot from "@/assets/attorney-headshot.jpg";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const practiceAreas = [
  { icon: Shield, title: "Intellectual Property", desc: "Comprehensive IP protection strategies for businesses and creators.", link: "/practice-areas/intellectual-property" },
  { icon: Scale, title: "Trademarks", desc: "Registration, enforcement, and defense of trademarks in Israel and internationally.", link: "/practice-areas/trademarks" },
  { icon: Gavel, title: "Copyright & Digital Content", desc: "Protecting creative works and digital content in the platform era.", link: "/practice-areas/copyright-digital-content" },
  { icon: Globe, title: "Technology & Internet Law", desc: "Legal guidance for SaaS, digital platforms, and online businesses.", link: "/practice-areas/technology-internet-law" },
  { icon: Brain, title: "AI & Digital Content Law", desc: "Navigating intellectual property questions around artificial intelligence.", link: "/practice-areas/ai-and-law" },
  { icon: Briefcase, title: "Commercial Litigation", desc: "Strategic dispute resolution and courtroom advocacy.", link: "/practice-areas/commercial-litigation" },
];

const steps = [
  { icon: MessageSquare, title: "Initial Consultation", desc: "We discuss your situation, identify risks, and outline potential strategies — confidentially and with no obligation." },
  { icon: FileSearch, title: "Strategic Assessment", desc: "We analyze the legal landscape, review relevant documents, and develop a tailored plan aligned with your business goals." },
  { icon: CheckCircle, title: "Execution & Protection", desc: "We implement the agreed strategy — whether filing applications, drafting agreements, or pursuing enforcement actions." },
];

const featuredInsights = [
  { title: "AI and Copyright in Israel: Practical Risk Map for Startups", category: "AI & Copyright", link: "/insights" },
  { title: "Trademark Clearance: What to Check Before You Invest in a Brand", category: "Trademarks", link: "/insights" },
  { title: "IP Due Diligence for Fundraising: Founder Checklist", category: "IP Strategy", link: "/insights" },
];

const faqs = [
  { q: "What types of intellectual property can be protected in Israel?", a: "Israeli law provides protection for trademarks, copyrights, patents, designs, and trade secrets. The appropriate form of protection depends on the nature of your creation or innovation. We help clients identify which protections apply and develop a strategy to secure them." },
  { q: "Do I need to register my copyright in Israel?", a: "Copyright protection in Israel arises automatically upon creation of an original work — registration is not required. However, documenting authorship and maintaining clear records can be important for enforcement purposes." },
  { q: "How long does trademark registration take in Israel?", a: "The trademark registration process in Israel typically takes 12–18 months, depending on whether objections or oppositions are filed. We guide clients through the process from search and filing to registration." },
  { q: "Can AI-generated content be protected by copyright?", a: "This is an evolving area of law globally. Current Israeli copyright law requires a human author, which raises questions about AI outputs. We advise clients on practical strategies to protect AI-related works and manage associated risks." },
  { q: "What should startups prioritize regarding intellectual property?", a: "Early-stage companies should focus on securing their brand (trademark filings), confirming IP ownership (especially with co-founders and contractors), and understanding any open-source or third-party licensing obligations. An IP audit early on can prevent costly issues later." },
  { q: "Do you represent international clients?", a: "Yes. We regularly advise international clients on Israeli IP matters and coordinate with counsel in other jurisdictions for cross-border IP strategies. Our practice is conducted in [LANGUAGES_UNSPECIFIED]." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern law office interior" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">HY Law Offices · Tel Aviv</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Intellectual Property and Technology Law
              <br />
              <span className="text-gold">for AI-Driven Businesses</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
              Boutique, founder-led counsel on trademarks, copyright, licensing, and digital risk — built for modern products and platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                Send a Confidential Inquiry
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-80 h-96 overflow-hidden shadow-2xl">
                <img src={headshot} alt="Attorney Hadar Yatzkan, founder of HY Law Offices" className="w-full h-full object-cover" loading="eager" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-lg max-w-[240px]">
                <p className="font-display font-semibold text-foreground">Hadar Yatzkan</p>
                <p className="text-sm text-muted-foreground mt-1">Founder & Managing Attorney</p>
                <p className="text-xs text-gold mt-2 font-medium">LL.M. in Law & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="py-8 bg-background border-b border-border">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-sm font-medium text-foreground">Israel Bar Member</p>
            <p className="text-xs text-muted-foreground">Licensed Attorney</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">LL.M. Law & Technology</p>
            <p className="text-xs text-muted-foreground">Advanced Degree</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">IP & Tech Focus</p>
            <p className="text-xs text-muted-foreground">Specialized Practice</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Tel Aviv Based</p>
            <p className="text-xs text-muted-foreground">Serving Israel & International</p>
          </div>
        </div>
      </div>
    </section>

    {/* Practice Areas */}
    <section className="py-24 bg-section-alt" aria-labelledby="practice-heading">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 id="practice-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Practice Areas</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Providing strategic legal counsel at the intersection of law, technology, and intellectual property.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <Link to={area.link} key={area.title} className="group bg-background p-8 border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg block">
              <area.icon className="text-gold mb-4" size={28} aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/practice-areas" className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:underline">
            View All Practice Areas <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-24" aria-labelledby="process-heading">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Process</span>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold-light flex items-center justify-center">
                <step.icon className="text-gold" size={28} aria-hidden="true" />
              </div>
              <div className="text-xs text-gold font-semibold mb-2">Step {i + 1}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Insights */}
    <section className="py-24 bg-section-alt" aria-labelledby="insights-heading">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Knowledge Center</span>
          <h2 id="insights-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Featured Insights</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredInsights.map((article) => (
            <Link
              key={article.title}
              to={article.link}
              className="group bg-background border border-border p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg block"
            >
              <span className="text-xs font-medium text-gold tracking-widest uppercase">{article.category}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
              <span className="inline-flex items-center gap-1 text-sm text-gold">Read More <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24" aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Common Questions</span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-background px-6">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
          Protect What Matters Most
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4">
          Whether you're a startup, a creative professional, or an established business, we provide tailored legal strategies to safeguard your intellectual property and navigate the complexities of technology law.
        </p>
        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto mb-8">
          Do not send sensitive or confidential information until a formal engagement has been established.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Send a Confidential Inquiry
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
