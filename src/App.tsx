import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import GoogleAnalytics from './components/GoogleAnalytics';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ImpactStatsSection from './components/ImpactStatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import GlobalTrading from './pages/GlobalTrading';
import BusinessConsulting from './pages/BusinessConsulting';
import FinancialAdvisory from './pages/FinancialAdvisory';
import SupplyChain from './pages/SupplyChain';
import OurStory from './pages/OurStory';
import Leadership from './pages/Leadership';
import MissionValues from './pages/MissionValues';
import AwardsRecognition from './pages/AwardsRecognition';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PageLoader from './components/PageLoader';
import { initializeEnhancements } from './utils/enhancements';
import './styles/global-enhancements.css';

const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

const App = () => {
  useEffect(() => {
    // Initialize all global enhancements
    const cleanup = initializeEnhancements();
    
    // Add design system class to body
    document.body.classList.add('design-system-loaded');
    
    // Temporarily disabled reveal animations to debug content visibility
    // const addRevealClasses = () => {
    //   // Section elements
    //   document.querySelectorAll('section').forEach(section => {
    //     const el = section as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //   });
      
    //   // Eyebrows
    //   document.querySelectorAll('.eyebrow').forEach(eyebrow => {
    //     const el = eyebrow as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = '0';
    //   });
      
    //   // Headings
    //   document.querySelectorAll('h1, h2, h3').forEach(heading => {
    //     const el = heading as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = '0.1';
    //   });
      
    //   // Subtitles
    //   document.querySelectorAll('.subtitle, .subtext').forEach(subtitle => {
    //     const el = subtitle as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = '0.2';
    //   });
      
    //   // Cards
    //   document.querySelectorAll('.card-base').forEach((card, index) => {
    //     const el = card as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = (index * 0.08).toString();
    //   });
      
    //   // Stats
    //   document.querySelectorAll('.stat-number').forEach(stat => {
    //     const el = stat as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal', 'count-up');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = '0.3';
    //   });
      
    //   // Images
    //   document.querySelectorAll('img').forEach(img => {
    //     const el = img as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'fade';
    //     el.dataset.delay = '0.2';
    //   });
      
    //   // CTA sections
    //   document.querySelectorAll('.cta-section').forEach(cta => {
    //     const el = cta as HTMLElement;
    //     el.classList.add('reveal-hidden', 'reveal');
    //     el.dataset.reveal = 'up';
    //     el.dataset.delay = '0.4';
    //   });
    // };
    
    // // Add reveal classes after a short delay to ensure DOM is ready
    // setTimeout(addRevealClasses, 100);
    
    // // Re-run reveal classes when new content is loaded
    // const observer = new MutationObserver(() => {
    //   setTimeout(addRevealClasses, 100);
    // });
    
    // observer.observe(document.body, {
    //   childList: true,
    //   subtree: true
    // });
    
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <Router>
      <GoogleAnalytics />
      <PageLoader />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/global-trading" element={<GlobalTrading />} />
        <Route path="/business-consulting" element={<BusinessConsulting />} />
        <Route path="/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/mission-values" element={<MissionValues />} />
        <Route path="/awards-recognition" element={<AwardsRecognition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </Router>
  );
};

export default App;
