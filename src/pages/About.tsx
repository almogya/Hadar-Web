import Layout from "@/components/Layout";
import headshot from "@/assets/attorney-headshot.jpg";
import { Award, BookOpen, GraduationCap, Scale } from "lucide-react";

const milestones = [
  { icon: GraduationCap, title: "LL.M. in Law & Technology", desc: "Advanced degree focusing on the intersection of legal frameworks and emerging technology." },
  { icon: Scale, title: "Intellectual Property Specialist", desc: "Extensive experience in trademark registration, copyright enforcement, and IP portfolio management." },
  { icon: BookOpen, title: "Technology Law Expert", desc: "Deep expertise advising tech companies, digital platforms, and AI-driven businesses." },
  { icon: Award, title: "Litigation Experience", desc: "Proven track record in commercial litigation and IP dispute resolution." },
];

const About = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">About the Firm</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-8">
              Hadar Yatzkan
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hadar Yatzkan is the founder and managing attorney of HY Law Offices, a boutique law firm based in Tel Aviv specializing in intellectual property, technology law, and commercial litigation.
              </p>
              <p>
                With an LL.M. in Law and Technology, Hadar brings a unique combination of legal expertise and technological understanding to every case. Her practice focuses on helping businesses, startups, and creative professionals protect their innovations and navigate the rapidly evolving legal landscape.
              </p>
              <p>
                Hadar's areas of expertise include copyright law, trademark registration and enforcement, digital platform regulations, and emerging legal issues related to artificial intelligence and digital content. She advises technology-driven businesses on IP strategy, data protection, and regulatory compliance.
              </p>
              <p>
                Prior to founding HY Law Offices, Hadar gained extensive experience in intellectual property law and litigation at leading Israeli law firms, where she handled complex IP disputes and advised major technology companies.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-sm h-[500px] overflow-hidden shadow-2xl">
                <img src={headshot} alt="Hadar Yatzkan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full max-w-sm h-[500px] border-2 border-gold -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Qualifications & Experience
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {milestones.map((m) => (
            <div key={m.title} className="flex gap-4 bg-background p-6 border border-border">
              <m.icon className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
