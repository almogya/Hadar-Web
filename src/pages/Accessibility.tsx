import Layout from "@/components/Layout";

const Accessibility = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Accessibility Statement</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>
            HY Law Offices is committed to ensuring that our website is accessible to people with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA standards.
          </p>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">Our Efforts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Semantic HTML structure with proper heading hierarchy</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Descriptive alt text for all meaningful images</li>
              <li>Sufficient color contrast ratios</li>
              <li>Clear and consistent navigation</li>
              <li>Form labels and error messages for assistive technologies</li>
              <li>Skip-to-content functionality</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">Feedback</h2>
            <p>
              We welcome feedback on the accessibility of this website. If you encounter any barriers or have suggestions for improvement, please contact us at [EMAIL_UNSPECIFIED] or call [PHONE_UNSPECIFIED]. We will make reasonable efforts to address your concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Accessibility;
