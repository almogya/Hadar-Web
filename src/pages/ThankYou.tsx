import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-2xl text-center">
        <div className="w-20 h-20 mx-auto mb-8 bg-gold-light flex items-center justify-center">
          <CheckCircle className="text-gold" size={40} />
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Thank You</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Your message has been received. We will review your inquiry and respond within 1–2 business days.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Please note: submitting a contact form does not create an attorney-client relationship. Do not send confidential information until a formal engagement has been agreed upon.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors">
            Return Home <ArrowRight size={16} />
          </Link>
          <Link to="/insights" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide hover:bg-section-alt transition-colors">
            Read Our Insights
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
