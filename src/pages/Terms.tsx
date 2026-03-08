import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">1. Acceptance</h2>
            <p>By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">2. Informational Purpose</h2>
            <p>The content on this website is provided for general informational purposes only. It does not constitute legal advice and should not be relied upon as such. The information may not reflect the most current legal developments.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">3. No Attorney-Client Relationship</h2>
            <p>Use of this website or contacting us through this site does not create an attorney-client relationship. Such a relationship is only established through a formal written engagement agreement.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and design, is the property of HY Law Offices and is protected by applicable intellectual property laws.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">5. Limitation of Liability</h2>
            <p>HY Law Offices is not liable for any damages arising from your use of or inability to use this website or reliance on any information provided herein.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">6. Governing Law</h2>
            <p>These Terms of Use are governed by the laws of the State of Israel. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Tel Aviv, Israel.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
