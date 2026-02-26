import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustedBy from "@/components/TrustedBy";
import WhatWeServe from "@/components/WhatWeServe";
import EffectiveTrading from "@/components/EffectiveTrading";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TrustedBy />
      <WhatWeServe />
      <EffectiveTrading />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
