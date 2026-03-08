import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "IP", "Trademarks", "Copyright", "AI", "Tech Law", "Litigation"];

const articles = [
  {
    title: "AI-Generated Content and Copyright: Who Owns What?",
    excerpt: "As generative AI tools become mainstream, courts and legislators worldwide are grappling with fundamental questions about authorship, ownership, and copyright protection for AI-created works. This article examines the current legal landscape and practical strategies for businesses using AI in content creation.",
    date: "February 2026",
    category: "AI",
    pillar: true,
  },
  {
    title: "Trademark Protection in the Digital Age: Strategies for Online Brands",
    excerpt: "The digital marketplace presents unique challenges for trademark owners. Learn how to protect your brand across e-commerce platforms, social media, and domain names — and what enforcement tools are available when infringement occurs.",
    date: "January 2026",
    category: "Trademarks",
    pillar: true,
  },
  {
    title: "The Legal Framework for AI in Israel: What Businesses Need to Know",
    excerpt: "Israel's approach to AI regulation is evolving rapidly. This article examines the current legal landscape and upcoming regulatory developments affecting AI-driven businesses operating in Israel.",
    date: "December 2025",
    category: "AI",
    pillar: true,
  },
  {
    title: "IP Strategy for Startups: Building Value from Day One",
    excerpt: "Intellectual property can be a startup's most valuable asset. This guide covers essential IP strategies for early-stage companies looking to protect their innovations, attract investors, and build a defensible market position.",
    date: "November 2025",
    category: "IP",
    pillar: true,
  },
  {
    title: "Protecting Digital Content: Copyright Enforcement on Social Platforms",
    excerpt: "Content creators face growing challenges in protecting their work online. We examine the legal tools and strategies available for enforcing copyright in the social media era, including platform-specific mechanisms and cross-border considerations.",
    date: "October 2025",
    category: "Copyright",
    pillar: true,
  },
  {
    title: "AI and Copyright in Israel: Practical Risk Map for Startups",
    excerpt: "A practical overview of how Israeli copyright law applies to AI-generated content, with specific guidance for startups developing or deploying generative AI tools.",
    date: "September 2025",
    category: "AI",
  },
  {
    title: "Trademark Clearance: What to Check Before You Invest in a Brand",
    excerpt: "Before investing in a brand name, thorough clearance is essential. This checklist covers the key steps in evaluating trademark availability and risk.",
    date: "August 2025",
    category: "Trademarks",
  },
  {
    title: "Copyright Ownership in Tech Teams: Employees, Contractors, and Assignments",
    excerpt: "Who owns the code your team writes? This article examines copyright ownership rules for employees and contractors under Israeli law and practical steps to ensure clarity.",
    date: "July 2025",
    category: "Copyright",
  },
];

const upcomingTitles = [
  "Licensing AI Training Data: Contract Clauses That Matter",
  "Open Source in Commercial Products: A Non-Technical Legal Checklist",
  "Platform Takedowns and Counter-Notices: A Creator's Legal Framework",
  "SaaS Terms of Service: 12 Clauses That Reduce Disputes",
  "IP Due Diligence for Fundraising: Founder Checklist",
  "Trademark Oppositions: Strategy, Evidence, and Settlement Options",
  "AI Vendor Contracts: Compliance, IP, and Liability Allocation",
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const pillarArticles = articles.filter((a) => a.pillar);

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Knowledge Center</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">Insights & Articles</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Legal analysis and practical guidance on intellectual property, technology law, and the evolving regulatory landscape — written for business leaders and in-house teams.
            </p>
          </div>

          {/* Featured Pillar Guides */}
          <div className="mb-16">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Featured Pillar Guides</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pillarArticles.slice(0, 3).map((article) => (
                <div key={article.title} className="bg-primary p-6 text-primary-foreground">
                  <span className="text-xs font-medium text-gold tracking-widest uppercase">{article.category}</span>
                  <h3 className="font-display text-base font-semibold mt-2 mb-2">{article.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-gold">Read Guide <ArrowRight size={12} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Article categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-section-alt text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((article) => (
              <article
                key={article.title}
                className="group bg-background border border-border p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold tracking-widest uppercase bg-gold-light px-3 py-1">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} aria-hidden="true" /> {article.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                <button className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline self-start">
                  Read More <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-xs text-muted-foreground text-center">
            The articles on this page provide general information and do not constitute legal advice. Each situation is unique — consult with a qualified attorney for guidance specific to your circumstances.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
