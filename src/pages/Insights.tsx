import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "AI-Generated Content and Copyright: Who Owns What?",
    excerpt: "As generative AI tools become mainstream, courts and legislators worldwide are grappling with fundamental questions about authorship, ownership, and copyright protection for AI-created works.",
    date: "February 2026",
    category: "AI & Copyright",
  },
  {
    title: "Trademark Protection in the Digital Age: Strategies for Online Brands",
    excerpt: "The digital marketplace presents unique challenges for trademark owners. Learn how to protect your brand across e-commerce platforms, social media, and domain names.",
    date: "January 2026",
    category: "Trademarks",
  },
  {
    title: "The Legal Framework for AI in Israel: What Businesses Need to Know",
    excerpt: "Israel's approach to AI regulation is evolving rapidly. This article examines the current legal landscape and upcoming regulatory developments affecting AI-driven businesses.",
    date: "December 2025",
    category: "Technology Law",
  },
  {
    title: "Protecting Digital Content: Copyright Enforcement on Social Platforms",
    excerpt: "Content creators face growing challenges in protecting their work online. We examine the legal tools and strategies available for enforcing copyright in the social media era.",
    date: "November 2025",
    category: "Copyright",
  },
  {
    title: "IP Strategy for Startups: Building Value from Day One",
    excerpt: "Intellectual property can be a startup's most valuable asset. This guide covers essential IP strategies for early-stage companies looking to protect their innovations and attract investors.",
    date: "October 2025",
    category: "IP Strategy",
  },
];

const Insights = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Knowledge Center</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">Insights & Articles</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Legal analysis and thought leadership on intellectual property, technology law, and the evolving regulatory landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-background border border-border p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-gold tracking-widest uppercase bg-gold-light px-3 py-1">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} /> {article.date}
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
      </div>
    </section>
  </Layout>
);

export default Insights;
