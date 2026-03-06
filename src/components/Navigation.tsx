import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'About Us', href: '#about', hasDropdown: true },
    { name: 'Industries', href: '#industries', hasDropdown: true },
    { name: 'Insights', href: '#insights', hasDropdown: true },
    { name: 'Contact', href: '#contact' }
  ];

  const solutionsDropdown = [
    { name: 'Professional Global Trading', description: 'Strategic international trade solutions' },
    { name: 'Strategic Business Consulting', description: 'Expert guidance for growth' },
    { name: 'Financial Advisory Services', description: 'Tailored financial strategies' },
    { name: 'Supply Chain Management', description: 'End-to-end optimization' },
    { name: 'Market Expansion Solutions', description: 'Global reach strategies' },
    { name: 'Risk Management & Compliance', description: 'Comprehensive protection' }
  ];

  const industriesDropdown = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Energy & Resources', icon: '⚡' },
    { name: 'Financial Services', icon: '💰' },
    { name: 'Agriculture', icon: '🌾' },
    { name: 'Real Estate', icon: '🏢' },
    { name: 'Government & Public Sector', icon: '🏛️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Technology', icon: '💻' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
      
      // Update active section based on scroll position
      const sections = ['home', 'solutions', 'about', 'industries', 'insights', 'contact'];
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 80; // Account for fixed nav height
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menus
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container">
          <div className="announcement-bar__content">
            <span className="eyebrow">New:</span>
            <span className="announcement-bar__text">
              FEMSA Group expands operations to East Africa — Read our announcement →
            </span>
            <button className="btn btn-sm">Read Now</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`nav ${isScrolled ? 'nav--solid' : 'nav--transparent'} ${className}`}>
        <div className="container">
          <div className="nav__content">
            {/* Logo */}
            <div className="nav__logo">
              <a href="#home" className="nav__logo-link" onClick={() => handleNavClick('#home')}>
                <div className="nav__logo-icon"></div>
                <div className="nav__wordmark">
                  <span className="nav__femsa">FEMSA</span>
                  <span className="nav__group">GROUP</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="nav__links nav__links--desktop">
              {navLinks.map((link) => (
                <div key={link.name} className="nav__item">
                  <a
                    href={link.href}
                    className={`nav__link ${activeSection === link.href.substring(1) ? 'nav__link--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="nav__dropdown-icon" />}
                  </a>
                </div>
              ))}
              
              {/* CTA Button */}
              <a href="#contact" className="btn btn-primary nav__cta" onClick={() => handleNavClick('#contact')}>
                Book a Consultation
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="nav__actions">
              {/* Search */}
              <div className={`nav__search ${searchOpen ? 'nav__search--open' : ''}`}>
                <button 
                  className="nav__search-trigger"
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Toggle search"
                >
                  <Search className="nav__search-icon" />
                </button>
                <div className="nav__search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search services, insights, news..."
                    className="nav__search-input"
                    aria-label="Search"
                  />
                  <button className="nav__search-close" onClick={() => setSearchOpen(false)}>
                    <X />
                  </button>
                </div>
              </div>

              {/* Language Selector */}
              <div className={`nav__language ${languageOpen ? 'nav__language--open' : ''}`}>
                <button 
                  className="nav__language-trigger"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  aria-label="Select language"
                >
                  <Globe className="nav__language-icon" />
                  <span className="nav__language-text">EN</span>
                  <ChevronDown className="nav__dropdown-icon" />
                </button>
                <div className="nav__language-dropdown">
                  <a href="#" className="nav__language-option">EN</a>
                  <a href="#" className="nav__language-option">ES</a>
                  <a href="#" className="nav__language-option">FR</a>
                </div>
              </div>

              {/* Mobile Hamburger */}
              <button 
                className="nav__mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <div className={`nav__mega-menu ${isMegaMenuOpen ? 'nav__mega-menu--open' : ''}`}>
          {/* Solutions Dropdown */}
          <div className="nav__mega-menu__dropdown">
            <div className="container">
              <div className="nav__mega-menu__header">
                <h3 className="nav__mega-menu__title">Our Services</h3>
              </div>
              <div className="nav__mega-menu__grid">
                {solutionsDropdown.map((service, index) => (
                  <div key={service.name} className="nav__mega-menu__item">
                    <div className="nav__mega-menu__icon">✓</div>
                    <div className="nav__mega-menu__content">
                      <h4 className="nav__mega-menu__service-name">{service.name}</h4>
                      <p className="nav__mega-menu__description">{service.description}</p>
                      <a href="#solutions" className="nav__mega-menu__link">
                        Explore Services →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="nav__mega-menu__dropdown">
            <div className="container">
              <div className="nav__mega-menu__header">
                <h3 className="nav__mega-menu__title">Industries We Serve</h3>
              </div>
              <div className="nav__mega-menu__grid">
                {industriesDropdown.map((industry, index) => (
                  <div key={industry.name} className="nav__mega-menu__item">
                    <div className="nav__mega-menu__icon">{industry.icon}</div>
                    <div className="nav__mega-menu__content">
                      <h4 className="nav__mega-menu__service-name">{industry.name}</h4>
                      <a href="#industries" className="nav__mega-menu__link">
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`nav__mobile-menu ${isMobileMenuOpen ? 'nav__mobile-menu--open' : ''}`}>
          {/* Mobile Menu Header */}
          <div className="nav__mobile-menu__header">
            <div className="nav__mobile-menu__logo">
              <div className="nav__logo-icon"></div>
              <div className="nav__wordmark">
                <span className="nav__femsa">FEMSA</span>
                <span className="nav__group">GROUP</span>
              </div>
            </div>
            <button 
              className="nav__mobile-menu__close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="nav__mobile-menu__links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav__mobile-menu__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile CTA */}
            <a 
              href="#contact" 
              className="btn btn-primary nav__mobile-menu__cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Close Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="nav__mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-sticky);
          transition: background-color var(--transition-base), border-color var(--transition-base);
        }

        .nav--transparent {
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav--solid {
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-light-gray);
          box-shadow: var(--shadow-sm);
        }

        .nav__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .nav__logo {
          display: flex;
          align-items: center;
        }

        .nav__logo-link {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
          transition: transform var(--transition-base);
        }

        .nav__logo-link:hover {
          transform: scale(1.05);
        }

        .nav__logo-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border-radius: var(--radius-sm);
          position: relative;
        }

        .nav__logo-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: var(--color-white);
          border-radius: var(--radius-full);
          transform: translate(-50%, -50%);
        }

        .nav__wordmark {
          display: flex;
          flex-direction: column;
        }

        .nav__femsa {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: var(--text-xl);
          color: var(--color-primary);
          line-height: var(--line-height-tight);
        }

        .nav__group {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: var(--text-base);
          color: var(--color-secondary);
          letter-spacing: var(--letter-spacing-wider);
          text-transform: uppercase;
          position: relative;
        }

        .nav__group::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 20px;
          height: 2px;
          background: var(--color-secondary);
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .nav__links--desktop {
          gap: var(--space-6);
        }

        .nav__item {
          position: relative;
        }

        .nav__link {
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-dark-gray);
          text-decoration: none;
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav__link:hover {
          color: var(--color-primary);
          background-color: rgba(3, 33, 119, 0.08);
        }

        .nav__link--active {
          color: var(--color-primary);
          background-color: rgba(3, 33, 119, 0.1);
        }

        .nav__dropdown-icon {
          transition: transform var(--transition-fast);
        }

        .nav__link:hover .nav__dropdown-icon {
          transform: translateY(2px);
        }

        .nav__cta {
          white-space: nowrap;
        }

        .nav__actions {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .nav__search {
          position: relative;
        }

        .nav__search--open {
          width: 360px;
        }

        .nav__search-trigger {
          background: transparent;
          border: none;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          color: var(--color-dark-gray);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav__search-trigger:hover {
          color: var(--color-primary);
          background-color: rgba(3, 33, 119, 0.08);
        }

        .nav__search-input-wrapper {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          opacity: 0;
          transform: translateY(-10px);
          transition: all var(--transition-base);
          overflow: hidden;
        }

        .nav__search--open .nav__search-input-wrapper {
          opacity: 1;
          transform: translateY(0);
        }

        .nav__search-input {
          width: 100%;
          padding: var(--space-4);
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          color: var(--color-near-black);
        }

        .nav__search-close {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          background: transparent;
          border: none;
          padding: var(--space-2);
          border-radius: var(--radius-md);
          color: var(--color-white);
          cursor: pointer;
        }

        .nav__language {
          position: relative;
        }

        .nav__language-trigger {
          background: transparent;
          border: none;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          color: var(--color-dark-gray);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav__language-trigger:hover {
          color: var(--color-primary);
          background-color: rgba(3, 33, 119, 0.08);
        }

        .nav__language-text {
          font-family: 'Inter', sans-serif;
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .nav__language-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          opacity: 0;
          transform: translateY(-10px);
          transition: all var(--transition-base);
          overflow: hidden;
          min-width: 120px;
        }

        .nav__language--open .nav__language-dropdown {
          opacity: 1;
          transform: translateY(0);
        }

        .nav__language-option {
          display: block;
          padding: var(--space-3) var(--space-4);
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          color: var(--color-dark-gray);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .nav__language-option:hover {
          color: var(--color-primary);
        }

        .nav__mobile-toggle {
          background: transparent;
          border: none;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          color: var(--color-dark-gray);
          cursor: pointer;
          display: none;
        }

        .nav__mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-primary);
          transform: translateX(100%);
          transition: transform var(--transition-slow);
          z-index: var(--z-modal);
          overflow-y: auto;
        }

        .nav__mobile-menu--open {
          transform: translateX(0);
        }

        .nav__mobile-menu__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav__mobile-menu__logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .nav__mobile-menu__close {
          background: transparent;
          border: none;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          color: var(--color-white);
          cursor: pointer;
        }

        .nav__mobile-menu__links {
          padding: var(--space-6);
        }

        .nav__mobile-menu__link {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: var(--text-lg);
          color: var(--color-white);
          text-decoration: none;
          padding: var(--space-5) var(--space-4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color var(--transition-base);
        }

        .nav__mobile-menu__link:hover {
          color: var(--color-secondary);
        }

        .nav__mobile-menu__cta {
          margin-top: var(--space-6);
          text-align: center;
        }

        .nav__mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: var(--z-overlay);
        }

        /* Mega Menu Styles */
        .nav__mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-white);
          border: 1px solid var(--color-light-gray);
          box-shadow: var(--shadow-xl);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all var(--transition-base);
          z-index: var(--z-dropdown);
        }

        .nav__mega-menu--open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav__mega-menu__dropdown {
          padding: var(--space-10) 0;
        }

        .nav__mega-menu__header {
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .nav__mega-menu__title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: var(--text-base);
          font-weight: 600;
          letter-spacing: var(--letter-spacing-wider);
          text-transform: uppercase;
          color: var(--color-primary);
        }

        .nav__mega-menu__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .nav__mega-menu__item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          padding: var(--space-5);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
        }

        .nav__mega-menu__item:hover {
          background-color: var(--color-off-white);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .nav__mega-menu__icon {
          width: 32px;
          height: 32px;
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nav__mega-menu__content {
          flex: 1;
        }

        .nav__mega-menu__service-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: var(--text-lg);
          color: var(--color-near-black);
          margin-bottom: var(--space-2);
        }

        .nav__mega-menu__description {
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          color: var(--color-dark-gray);
          line-height: var(--line-height-relaxed);
        }

        .nav__mega-menu__link {
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          margin-top: var(--space-4);
          transition: color var(--transition-base);
        }

        .nav__mega-menu__link:hover {
          color: var(--color-primary-light);
        }

        /* Announcement Bar */
        .announcement-bar {
          background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
          padding: var(--space-2) 0;
        }

        .announcement-bar__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-3) 0;
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          color: var(--color-white);
        }

        .eyebrow {
          color: var(--color-secondary);
          margin-right: var(--space-2);
        }

        .announcement-bar__text {
          flex: 1;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav__links--desktop {
            display: none;
          }
          
          .nav__mobile-toggle {
            display: flex;
          }
          
          .nav__mega-menu__grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav__content {
            height: 64px;
          }
          
          .nav__femsa {
            font-size: var(--text-lg);
          }
          
          .nav__group {
            font-size: var(--text-sm);
          }
          
          .nav__mobile-menu__link {
            font-size: var(--text-base);
            padding: var(--space-4) var(--space-3);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
