import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Brain, Globe, Briefcase, Gavel } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import headshot from "@/assets/attorney-headshot.jpg";
import Layout from "@/components/Layout";

const practiceAreas = [
  { icon: Shield, title: "Intellectual Property", desc: "Comprehensive IP protection strategies for businesses and creators." },
  { icon: Scale, title: "Trademarks", desc: "Registration, enforcement, and defense of trademarks worldwide." },
  { icon: Gavel, title: "Copyright", desc: "Protecting creative works in the digital age." },
  { icon: Globe, title: "Technology & Internet Law", desc: "Legal guidance for digital platforms and online businesses." },
  { icon: Brain, title: "AI & Digital Content", desc: "Navigating the legal landscape of artificial intelligence." },
  { icon: Briefcase, title: "Commercial Litigation", desc: "Strategic dispute resolution and courtroom advocacy." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern law office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">HY Law Offices</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Intellectual Property
              <br />
              <span className="text-gold">& Technology Law</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
              A boutique law firm at the forefront of innovation — protecting your ideas, brands, and digital assets in an evolving technological landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                Our Practice Areas
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-80 h-96 overflow-hidden shadow-2xl">
                <img src={headshot} alt="Attorney Hadar Yatzkan" className="w-full h-full object-cover" />
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

    {/* Practice Areas Preview */}
    <section className="py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Practice Areas</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Providing strategic legal counsel at the intersection of law, technology, and intellectual property.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div key={area.title} className="group bg-background p-8 border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <area.icon className="text-gold mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/practice-areas" className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:underline">
            View All Practice Areas <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
          Protect What Matters Most
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Whether you're a startup, a creative professional, or an established business, we provide tailored legal strategies to safeguard your intellectual property and navigate the complexities of technology law.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
