import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-1/4 bottom-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get In Touch
            <br />
            <span className="text-secondary">With Us</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Ready to start your journey with FEMSA Group? Reach out to us and let's discuss how we can help your business thrive
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Email</p>
                    <p className="text-primary-foreground">info@femsa-group.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Phone</p>
                    <p className="text-primary-foreground">+255 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Office</p>
                    <p className="text-primary-foreground">Dar Es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-secondary-foreground mb-2">Business Hours</h4>
              <p className="text-secondary-foreground/80 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-primary-foreground mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary-foreground mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-primary-foreground mb-2 block">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary-foreground mb-2 block">Service Of Interest</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary/10 text-primary-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent">
                        <option>Select Service</option>
                        <option>Trading Services</option>
                        <option>Strategic Consulting</option>
                        <option>Wealth Management</option>
                        <option>Investment Solutions</option>
                        <option>Logistics</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-primary-foreground mb-2 block">Message *</label>
                  <textarea
                    placeholder="Tell us about your requirements and how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button variant="cta" size="lg" className="px-8 py-6 text-base gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
