import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">With Us</h3>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Email Address</label>
              <input
                type="email"
                placeholder="jan.johnes@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Company / Organization</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Nature / Title</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Service Of Interest</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/50">
                <option>Select Service</option>
                <option>Trading Services</option>
                <option>Consulting</option>
                <option>Logistics</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">*Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Region / City / Country</label>
            <input
              type="text"
              placeholder="e.g., Dar Es Salaam"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="cta" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
