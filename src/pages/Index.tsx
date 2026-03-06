import Hero from "@/components/Hero";
import WeAreFEMSA from "@/components/WeAreFEMSA";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import About from "@/components/About";
import TrustedBy from "@/components/TrustedBy";
import WhatWeServe from "@/components/WhatWeServe";
import EffectiveTrading from "@/components/EffectiveTrading";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-femsa-primary">
      <Hero />
      <WeAreFEMSA />
      <ServicesSection />
      <AchievementsSection />
      <AboutSection />
      <About />
      <TrustedBy />
      <WhatWeServe />
      <EffectiveTrading />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
