import React, { useState, useEffect } from 'react';
import { ChevronUp, Mail, Linkedin, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !footerVisible) {
            setFooterVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('main-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [footerVisible]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#identity' },
    { name: 'Careers', href: '#careers' }
  ];

  const services = [
    { name: 'Global Trading', href: '#services' },
    { name: 'Business Consulting', href: '#services' },
    { name: 'Financial Advisory', href: '#services' },
    { name: 'Supply Chain', href: '#services' },
    { name: 'Market Expansion', href: '#services' },
    { name: 'Risk Management', href: '#services' }
  ];

  const information = [
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Cookie Settings', href: '#cookies' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const LinkColumn = ({ title, links, delay = 0 }: { title: string; links: typeof quickLinks; delay?: number }) => (
    <div className="space-y-6"
         style={{
           animation: footerVisible ? `slideInUp 0.6s ease-out ${delay}s both` : 'none'
         }}>
      <h3 className="font-mono text-amber-500 text-xs tracking-widest uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-femsa-secondary hover:text-amber-500 transition-all duration-200 inline-block hover:translate-x-1"
              style={{ fontFamily: 'DM Sans', fontSize: '14px' }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer id="main-footer" className="relative bg-[#04091E] overflow-hidden">
      
      {/* Top Border with Amber Gradient */}
      <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Newsletter/CTA Bar */}
      <div className="bg-amber-500 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-femsa-primary font-display font-bold text-lg md:text-xl"
                 style={{ fontFamily: 'Syne' }}>
              Stay ahead of the curve — Subscribe to FEMSA Group Insights
            </div>
            
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-femsa-primary text-white placeholder-femsa-muted border border-femsa-border focus:outline-none focus:border-amber-300 transition-colors"
                style={{ fontFamily: 'DM Sans' }}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-femsa-primary text-amber-500 rounded-lg font-semibold hover:bg-femsa-secondary transition-colors flex items-center gap-2"
                style={{ fontFamily: 'DM Sans' }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6"
               style={{
                 animation: footerVisible ? 'slideInUp 0.6s ease-out both' : 'none'
               }}>
            {/* Logo/Wordmark */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/resourses/femsa group (png)-10_1 1.png" 
                  alt="FEMSA Group" 
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-femsa-secondary italic"
               style={{ fontFamily: 'DM Sans' }}>
              Stronger Together. Always Moving Forward.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-full border-2 border-amber-500 flex items-center justify-center transition-all duration-300 hover:bg-amber-500 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-amber-500" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <LinkColumn title="QUICK LINKS" links={quickLinks} delay={0.1} />

          {/* Column 3 - Services */}
          <LinkColumn title="SERVICES" links={services} delay={0.2} />

          {/* Column 4 - Information */}
          <div className="space-y-6"
               style={{
                 animation: footerVisible ? `slideInUp 0.6s ease-out 0.3s both` : 'none'
               }}>
            <h3 className="font-mono text-amber-500 text-xs tracking-widest uppercase">
              INFORMATION
            </h3>
            <ul className="space-y-3">
              {information.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-femsa-secondary hover:text-amber-500 transition-all duration-200 inline-block hover:translate-x-1"
                    style={{ fontFamily: 'DM Sans', fontSize: '14px' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="space-y-2 pt-4">
              <div className="text-femsa-secondary text-sm font-medium"
                   style={{ fontFamily: 'DM Sans' }}>
                Office Hours
              </div>
              <div className="text-femsa-muted text-xs"
                   style={{ fontFamily: 'DM Sans' }}>
                Mon–Fri: 9AM – 6PM WAT
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="text-femsa-secondary text-sm font-medium"
                   style={{ fontFamily: 'DM Sans' }}>
                Visit Us
              </div>
              <div className="text-femsa-muted text-xs leading-relaxed"
                   style={{ fontFamily: 'DM Sans' }}>
                123 Business Avenue<br />
                Nairobi, Kenya<br />
                East Africa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-femsa-border-subtle">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            {/* Left - Copyright */}
            <div className="text-femsa-muted"
                 style={{ fontFamily: 'DM Sans' }}>
              2025 FEMSA Group Limited. All Rights Reserved.
            </div>

            {/* Center - Tagline */}
            <div className="text-femsa-secondary text-center"
                 style={{ fontFamily: 'DM Sans' }}>
              Designed with precision and purpose
            </div>

            {/* Right - Back to Top */}
            <div className="relative">
              <button
                onClick={scrollToTop}
                className={`w-10 h-10 bg-amber-500 text-femsa-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-amber-400 hover:scale-110 ${
                  showBackToTop 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-0 pointer-events-none'
                }`}
                aria-label="Back to top"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      
      {/* Large "FEMSA" Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-20 right-10 text-[200px] font-bold opacity-3 select-none"
             style={{ 
               fontFamily: 'Syne', 
               color: '#F59E0B',
               transform: 'rotate(-5deg)'
             }}>
          FEMSA
        </div>
      </div>

      {/* Diagonal Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .opacity-3 {
          opacity: 0.03;
        }
        `
      }} />
    </footer>
  );
};

export default FooterSection;
