import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Legal Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">No Legal Advice</h2>
            <p>The materials on this website are provided for general informational purposes only and do not constitute legal advice. Reading or accessing the content on this site does not create an attorney-client relationship between you and HY Law Offices or any of its attorneys.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">No Attorney-Client Relationship</h2>
            <p>An attorney-client relationship with HY Law Offices is established only through a signed, written engagement agreement. Do not send confidential or sensitive information through this website or by email until such a relationship has been formally established.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">No Guarantees</h2>
            <p>The information on this website, including descriptions of practice areas and past experience, is not intended as a guarantee, warranty, or prediction regarding the outcome of any legal matter. Each case is unique, and past results do not guarantee future outcomes.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">Jurisdiction</h2>
            <p>HY Law Offices is licensed to practice law in Israel. The information on this website may not apply in other jurisdictions. If you require legal assistance outside of Israel, we recommend consulting with locally licensed counsel.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">External Links</h2>
            <p>This website may contain links to third-party websites. These links are provided for convenience only. HY Law Offices does not endorse or control the content of external sites and is not responsible for their content or privacy practices.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
