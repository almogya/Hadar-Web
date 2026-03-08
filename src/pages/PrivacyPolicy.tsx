import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>HY Law Offices ("we," "our," or "the Firm") respects your privacy and is committed to protecting personal information you share with us through this website. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">2. Information We Collect</h2>
            <p>We may collect personal information you voluntarily provide through our contact form, including your name, email address, phone number, company name, and message content. We also collect standard web analytics data (page views, browser type, device information) through analytics tools.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">3. How We Use Your Information</h2>
            <p>We use collected information to: respond to inquiries, provide legal services, improve our website, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">5. Cookies and Analytics</h2>
            <p>This website may use cookies and analytics services to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">6. Your Rights</h2>
            <p>Under applicable privacy laws, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at [EMAIL_UNSPECIFIED].</p>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">7. Contact</h2>
            <p>For questions about this Privacy Policy, please contact us at [EMAIL_UNSPECIFIED].</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
