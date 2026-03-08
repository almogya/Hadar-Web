import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm font-medium tracking-widest uppercase">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">Contact Us</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                We'd love to hear from you. Whether you need legal counsel, have questions about your intellectual property, or want to discuss a potential matter, please reach out.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Office Location</h3>
                    <p className="text-sm text-muted-foreground">Tel Aviv, Israel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">info@hylaw.co.il</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-light shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">+972-3-XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-section-alt p-8 md:p-10 border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="+972-XX-XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your legal needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
