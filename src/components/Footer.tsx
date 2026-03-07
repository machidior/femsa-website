import React, { useState, useEffect, useRef } from 'react';
import femsaLogo from "../assets/femsa-logo.png";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Clock,
  ChevronRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const preFooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    if (preFooterRef.current) {
      observer.observe(preFooterRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      if (preFooterRef.current) {
        observer.unobserve(preFooterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribing(false);
    setSubscribeSuccess(true);
    setEmail('');

    setTimeout(() => setSubscribeSuccess(false), 3000);
  };

  const companyLinks = [
    'About Us',
    'Our Story', 
    'Leadership Team',
    'Careers',
    'Press & Media',
    'Awards & Recognition',
    'Contact Us'
  ];

  const solutionsLinks = [
    'Raw Materials & Packaging',
    'Equipment & Machinery',
    'Spare Parts & Components',
    'Consumables & Plant Supplies',
    'All Services →'
  ];

  const resourcesLinks = [
    'Trading Insights',
    'Case Studies',
    'Product Catalog',
    'Technical Specifications',
    'Events & Webinars',
    'Newsletter',
    'FAQs',
    'Documentation'
  ];

  const offices = [
    { city: 'Dar es Salaam', country: 'Tanzania' },
    { city: 'Mwanza', country: 'Tanzania' },
    { city: 'Arusha', country: 'Tanzania' },
    { city: 'Zanzibar', country: 'Tanzania' }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Facebook, name: 'Facebook' },
    { icon: Youtube, name: 'YouTube' }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'Tanzania Revenue Authority Registered',
    'Tanzania Bureau of Standards Certified'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Accessibility',
    'Sitemap'
  ];

  return (
    <>
      {/* Pre-Footer CTA Band */}
      <div className="pre-footer" ref={preFooterRef}>
        <div className="pre-footer__container">
          <div className={`pre-footer__content ${isLoaded ? 'pre-footer__content--loaded' : ''}`}>
            <div className="pre-footer__text">
              <div className={`pre-footer__eyebrow ${isLoaded ? 'pre-footer__eyebrow--loaded' : ''}`}>
                READY TO OPTIMIZE?
              </div>
              
              <h2 className={`pre-footer__heading ${isLoaded ? 'pre-footer__heading--loaded' : ''}`}>
                <span className="pre-footer__heading-line">Let's Enhance Your</span>
                <span className="pre-footer__heading-line">Trading Operations Together</span>
              </h2>
              
              <p className={`pre-footer__subtext ${isLoaded ? 'pre-footer__subtext--loaded' : ''}`}>
                Join 500+ industrial partners that have reduced costs by 30% with FEMSA Global Trading.
              </p>
            </div>
            
            <div className={`pre-footer__buttons ${isLoaded ? 'pre-footer__buttons--loaded' : ''}`}>
              <button className="pre-footer__btn pre-footer__btn--primary">
                Book a Consultation
              </button>
              <button className="pre-footer__btn pre-footer__btn--secondary">
                Explore Services
              </button>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="pre-footer__circle" />
        </div>
      </div>

      {/* Main Footer */}
      <footer className="footer" ref={footerRef}>
        {/* Watermark */}
        <div className="footer__watermark">
          <img 
            src={femsaLogo} 
            alt="FEMSA Group" 
            className="w-96 h-96 md:w-[32rem] md:h-[32rem] object-contain opacity-5"
          />
        </div>
        
        <div className="footer__container">
          {/* Newsletter Mini-Bar */}
          <div className={`footer__newsletter ${isLoaded ? 'footer__newsletter--loaded' : ''}`}>
            <div className="footer__newsletter-left">
              <Mail className="footer__newsletter-icon" />
              <div className="footer__newsletter-text">
                <div className="footer__newsletter-title">Trading Insights</div>
                <div className="footer__newsletter-subtitle">Subscribe to industrial trading updates</div>
              </div>
            </div>
            
            <form onSubmit={handleSubscribe} className="footer__newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="footer__newsletter-input"
                disabled={isSubscribing || subscribeSuccess}
              />
              <button
                type="submit"
                disabled={isSubscribing || subscribeSuccess}
                className="footer__newsletter-btn"
              >
                {subscribeSuccess ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Footer Grid */}
          <div className="footer__grid">
            {/* Column 1 - Brand */}
            <div className={`footer__brand ${isLoaded ? 'footer__brand--loaded' : ''}`}>
              <div className="footer__logo">
                <img 
                  src="/resourses/femsa group (png)-10_1 1.png" 
                  alt="FEMSA Global Trading Limited" 
                  className="footer__logo-image"
                />
              </div>
              
              <p className="footer__tagline">
                Your Trusted Industrial Trading Partner.
              </p>
              
              <p className="footer__description">
                Empowering manufacturers with cost-efficient trading solutions, reliable supply chains, and measurable profitability through industrial supplies, equipment, and packaging materials.
              </p>
              
              {/* Social Icons */}
              <div className="footer__social">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`footer__social-link ${isLoaded ? 'footer__social-link--loaded' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              {/* Certifications */}
              <div className="footer__certifications">
                {certifications.map((cert, index) => (
                  <span key={cert} className="footer__certification">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2 - Company */}
            <div className={`footer__column ${isLoaded ? 'footer__column--loaded' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h3 className="footer__heading">Company</h3>
              <ul className="footer__links">
                {companyLinks.map((link, index) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                      <span className="footer__link-arrow">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Solutions */}
            <div className={`footer__column ${isLoaded ? 'footer__column--loaded' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="footer__heading">Solutions</h3>
              <ul className="footer__links">
                {solutionsLinks.map((link, index) => (
                  <li key={link}>
                    <a href="#" className={`footer__link ${link.includes('All Services') ? 'footer__link--orange' : ''}`}>
                      {link}
                      <span className="footer__link-arrow">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div className={`footer__column ${isLoaded ? 'footer__column--loaded' : ''}`} style={{ animationDelay: '0.3s' }}>
              <h3 className="footer__heading">Resources</h3>
              <ul className="footer__links">
                {resourcesLinks.map((link, index) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                      <span className="footer__link-arrow">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 - Contact */}
            <div className={`footer__column ${isLoaded ? 'footer__column--loaded' : ''}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="footer__heading">Contact</h3>
              
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <MapPin className="footer__contact-icon" />
                  <div>
                    <div className="footer__contact-city">Dar es Salaam</div>
                    <div className="footer__contact-address">
                      P.O.Box 40310<br />
                      Dar es Salaam, Tanzania<br />
                      East Africa
                    </div>
                  </div>
                </div>
                
                <div className="footer__contact-item">
                  <Mail className="footer__contact-icon" />
                  <a href="mailto:info@myfemsa.com" className="footer__contact-link">
                    info@myfemsa.com
                  </a>
                </div>
                
                <div className="footer__contact-item">
                  <Phone className="footer__contact-icon" />
                  <a href="tel:+255761351371" className="footer__contact-link">
                    +255 761 351 371
                  </a>
                </div>
                
                <div className="footer__contact-item">
                  <Clock className="footer__contact-icon" />
                  <div className="footer__contact-hours">
                    Mon–Fri: 8AM–6PM EAT
                  </div>
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="footer__offices">
                <div className="footer__offices-label">Our Offices</div>
                <div className="footer__office-links">
                  {offices.map((office) => (
                    <a key={office.city} href="#" className="footer__office-link">
                      <span className="footer__office-flag">🇳🇬</span>
                      <span>{office.city}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className={`footer__bottom ${isLoaded ? 'footer__bottom--loaded' : ''}`}>
            <div className="footer__bottom-content">
              <div className="footer__copyright">
                © 2025 FEMSA Global Trading Limited. All Rights Reserved.
              </div>
              
              <div className="footer__legal-links">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link}>
                    <a href="#" className="footer__legal-link">
                      {link}
                    </a>
                    {index < legalLinks.length - 1 && <span className="footer__legal-separator">•</span>}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="footer__back-to-top">
                <button
                  onClick={scrollToTop}
                  className={`footer__back-btn ${showBackToTop ? 'footer__back-btn--visible' : ''}`}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* Pre-Footer CTA Band */
        .pre-footer {
          background-color: var(--color-secondary);
          padding: 56px 0;
          position: relative;
          overflow: hidden;
        }

        .pre-footer__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-16);
        }

        .pre-footer__content {
          display: flex;
          align-items: center;
          gap: var(--space-16);
          flex: 1;
          opacity: 0;
          transform: translateY(30px);
        }

        .pre-footer__content--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pre-footer__text {
          flex: 0 0 70%;
        }

        .pre-footer__eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--space-4);
          opacity: 0;
          transform: translateY(20px);
        }

        .pre-footer__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .pre-footer__heading {
          margin-bottom: var(--space-4);
        }

        .pre-footer__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 40px;
          line-height: 1.1;
          color: var(--color-white);
          opacity: 0;
          transform: translateY(30px);
        }

        .pre-footer__heading--loaded .pre-footer__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .pre-footer__heading--loaded .pre-footer__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        .pre-footer__subtext {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          opacity: 0;
          transform: translateY(20px);
        }

        .pre-footer__subtext--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;
        }

        .pre-footer__buttons {
          display: flex;
          gap: var(--space-4);
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 30%;
          opacity: 0;
          transform: translateY(30px);
        }

        .pre-footer__buttons--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;
        }

        .pre-footer__btn {
          height: 52px;
          border-radius: var(--radius-full);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-base);
          border: none;
          padding: 0 var(--space-6);
        }

        .pre-footer__btn--primary {
          background: var(--color-white);
          color: var(--color-secondary);
        }

        .pre-footer__btn--primary:hover {
          box-shadow: var(--shadow-lg);
          transform: scale(1.02);
        }

        .pre-footer__btn--secondary {
          background: transparent;
          color: var(--color-white);
          border: 2px solid var(--color-white);
        }

        .pre-footer__btn--secondary:hover {
          background: var(--color-white);
          color: var(--color-secondary);
        }

        .pre-footer__circle {
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          width: 500px;
          height: 500px;
          border: 2px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Main Footer */
        .footer {
          background-color: #0D1320;
          color: var(--color-white);
          padding: 80px 0 48px;
          position: relative;
          overflow: hidden;
        }

        .footer__watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }

        .footer__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          position: relative;
          z-index: 1;
        }

        /* Newsletter Mini-Bar */
        .footer__newsletter {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: var(--space-6) var(--space-8);
          margin-bottom: var(--space-14);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
        }

        .footer__newsletter--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .footer__newsletter-left {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .footer__newsletter-icon {
          width: 20px;
          height: 20px;
          color: var(--color-secondary);
        }

        .footer__newsletter-title {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-white);
          font-weight: 600;
        }

        .footer__newsletter-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: var(--space-1);
        }

        .footer__newsletter-form {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .footer__newsletter-input {
          width: 300px;
          height: 44px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-full);
          padding: 0 var(--space-5);
          color: var(--color-white);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          transition: all var(--transition-base);
        }

        .footer__newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .footer__newsletter-input:focus {
          outline: none;
          border-color: var(--color-secondary);
        }

        .footer__newsletter-btn {
          height: 44px;
          background: var(--color-secondary);
          color: var(--color-white);
          border: none;
          border-radius: var(--radius-full);
          padding: 0 var(--space-6);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .footer__newsletter-btn:hover:not(:disabled) {
          background: #e0551a;
        }

        .footer__newsletter-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Footer Grid */
        .footer__grid {
          display: grid;
          grid-template-columns: 30% 1fr 1fr 1fr 1fr;
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        /* Brand Column */
        .footer__brand {
          opacity: 0;
          transform: translateY(30px);
        }

        .footer__brand--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer__logo {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: var(--space-4);
        }

        .footer__logo-image {
          height: 60px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
        }

        .footer__logo-image:hover {
          filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
          transform: scale(1.05);
        }

        .footer__tagline {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-style: italic;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin-top: var(--space-4);
        }

        .footer__description {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          max-width: 260px;
          margin-top: var(--space-3);
          line-height: 1.7;
        }

        .footer__social {
          display: flex;
          gap: var(--space-3);
          margin-top: var(--space-6);
        }

        .footer__social-link {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all var(--transition-base);
          opacity: 0;
          transform: scale(0.8);
        }

        .footer__social-link--loaded {
          opacity: 1;
          transform: scale(1);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer__social-link:hover {
          border-color: var(--color-secondary);
          color: var(--color-secondary);
          background: rgba(249, 100, 25, 0.08);
          transform: translateY(-2px);
        }

        .footer__certifications {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-6);
          flex-wrap: wrap;
        }

        .footer__certification {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
        }

        /* Link Columns */
        .footer__column {
          opacity: 0;
          transform: translateY(30px);
        }

        .footer__column--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer__heading {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: var(--space-5);
        }

        .footer__links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: var(--space-2) 0;
          transition: all 0.2s ease;
        }

        .footer__link:hover {
          color: var(--color-white);
          transform: translateX(4px);
        }

        .footer__link--orange {
          color: var(--color-secondary);
        }

        .footer__link--orange:hover {
          color: #ff8c42;
        }

        .footer__link-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease;
        }

        .footer__link:hover .footer__link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Contact Column */
        .footer__contact-info {
          margin-bottom: var(--space-6);
        }

        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }

        .footer__contact-icon {
          width: 16px;
          height: 16px;
          color: var(--color-secondary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .footer__contact-city {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .footer__contact-address {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        .footer__contact-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all var(--transition-base);
        }

        .footer__contact-link:hover {
          color: var(--color-white);
          text-decoration: underline;
        }

        .footer__contact-hours {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer__offices {
          margin-top: var(--space-6);
        }

        .footer__offices-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: var(--space-3);
        }

        .footer__office-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer__office-link {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: all var(--transition-base);
        }

        .footer__office-link:hover {
          color: rgba(255, 255, 255, 0.6);
        }

        .footer__office-flag {
          font-size: 10px;
        }

        /* Footer Bottom */
        .footer__bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: var(--space-8);
          margin-top: var(--space-8);
          opacity: 0;
        }

        .footer__bottom--loaded {
          opacity: 1;
          transition: opacity 0.6s ease 0.6s;
        }

        .footer__bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .footer__copyright {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
        }

        .footer__legal-links {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .footer__legal-link {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .footer__legal-link:hover {
          color: var(--color-white);
        }

        .footer__legal-separator {
          color: rgba(255, 255, 255, 0.2);
        }

        .footer__back-to-top {
          position: relative;
        }

        .footer__back-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-base);
          opacity: 0;
          transform: scale(0.8);
        }

        .footer__back-btn--visible {
          opacity: 1;
          transform: scale(1);
        }

        .footer__back-btn:hover {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
          color: var(--color-white);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .pre-footer__container {
            flex-direction: column;
            gap: var(--space-8);
            text-align: center;
          }

          .pre-footer__text {
            flex: 1;
          }

          .pre-footer__buttons {
            flex: none;
            justify-content: center;
          }

          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-8);
          }

          .footer__brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .pre-footer {
            padding: var(--space-12) 0;
          }

          .pre-footer__heading-line {
            font-size: 32px;
          }

          .footer {
            padding: var(--space-16) 0 var(--space-12);
          }

          .footer__newsletter {
            flex-direction: column;
            gap: var(--space-4);
            text-align: center;
          }

          .footer__newsletter-form {
            width: 100%;
            justify-content: center;
          }

          .footer__newsletter-input {
            width: 100%;
            max-width: 300px;
          }

          .footer__grid {
            grid-template-columns: 1fr;
            gap: var(--space-12);
          }

          .footer__bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-6);
          }

          .footer__legal-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .pre-footer__heading-line {
            font-size: 28px;
          }

          .pre-footer__buttons {
            flex-direction: column;
            width: 100%;
          }

          .footer__watermark {
            font-size: 120px;
          }

          .footer__social {
            justify-content: center;
          }

          .footer__certifications {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
