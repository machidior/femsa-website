import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Search, ArrowRight, Globe, Phone, Mail, ChevronDown, Menu, X, Building2, Package, Users, Award, FileText, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import femsaLogo from "../assets/femsa-logo.png";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; icon?: React.ReactNode; description?: string }[];
}

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const headerRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = useMemo(() => [
    { 
      label: "Home", 
      href: "/" 
    },
    { 
      label: "Trading Services", 
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { 
          label: "Raw Materials & Packaging", 
          href: "/raw-materials-packaging",
          icon: <Package className="w-4 h-4" />,
          description: "PET, HDPE, PP, LDPE, preforms, caps, labels"
        },
        { 
          label: "Equipment & Machinery", 
          href: "/equipment-machinery",
          icon: <Building2 className="w-4 h-4" />,
          description: "Injection machines, filling lines, quality control"
        },
        { 
          label: "Spare Parts & Components", 
          href: "/spare-parts",
          icon: <Globe className="w-4 h-4" />,
          description: "Electrical, mechanical, pneumatic parts"
        },
        { 
          label: "Consumables & Supplies", 
          href: "/consumables",
          icon: <Package className="w-4 h-4" />,
          description: "Lubricants, chemicals, maintenance tools"
        }
      ]
    },
    { 
      label: "About FEMSA", 
      href: "#about",
      hasDropdown: true,
      dropdownItems: [
        { 
          label: "Our Story", 
          href: "/our-story",
          icon: <Award className="w-4 h-4" />,
          description: "15+ years of trading excellence"
        },
        { 
          label: "Leadership Team", 
          href: "/leadership",
          icon: <Users className="w-4 h-4" />,
          description: "Meet our expert team"
        },
        { 
          label: "Mission & Values", 
          href: "/mission-values",
          icon: <Award className="w-4 h-4" />,
          description: "Our core principles"
        },
        { 
          label: "Awards & Recognition", 
          href: "/awards-recognition",
          icon: <Award className="w-4 h-4" />,
          description: "Industry recognition"
        }
      ]
    },
    { 
      label: "Resources", 
      href: "#resources",
      hasDropdown: true,
      dropdownItems: [
        { 
          label: "Trading Insights", 
          href: "/insights",
          icon: <FileText className="w-4 h-4" />,
          description: "Industry trends and analysis"
        },
        { 
          label: "Case Studies", 
          href: "/case-studies",
          icon: <FileText className="w-4 h-4" />,
          description: "Success stories"
        },
        { 
          label: "Product Catalog", 
          href: "/catalog",
          icon: <Package className="w-4 h-4" />,
          description: "Browse our products"
        },
        { 
          label: "Technical Specifications", 
          href: "/specifications",
          icon: <FileText className="w-4 h-4" />,
          description: "Detailed product info"
        }
      ]
    },
    { 
      label: "Contact", 
      href: "/contact" 
    }
  ], []);

  // Helper function to determine the correct active section
  const getActiveSection = useCallback(() => {
    // On homepage, always show 'Home' as active
    if (location.pathname === '/') {
      return '/';
    }
    
    // Check if current path matches any dropdown item
    for (const navItem of navItems) {
      if (navItem.dropdownItems) {
        const matchingDropdownItem = navItem.dropdownItems.find(
          dropdownItem => dropdownItem.href === location.pathname
        );
        if (matchingDropdownItem) {
          return navItem.href; // Return parent nav item href
        }
      }
    }
    
    // Check if current path matches any main nav item
    const matchingNavItem = navItems.find(item => item.href === location.pathname);
    if (matchingNavItem) {
      return location.pathname;
    }
    
    // Default to current path
    return location.pathname;
  }, [location.pathname, navItems]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on current location
      setActiveSection(getActiveSection());
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const currentRef = headerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Set initial active section
    handleScroll();
    setActiveSection(getActiveSection());

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [location.pathname, getActiveSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/' && !searchOpen && event.target instanceof HTMLElement && event.target.tagName !== 'INPUT') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchOpen]);

  // Debug mobileOpen state changes
  useEffect(() => {
    console.log('Mobile menu state changed:', mobileOpen);
  }, [mobileOpen]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      // Navigate to a different page
      navigate(sectionId);
    } else {
      // Scroll to a section on the same page
      const element = document.querySelector(sectionId) as HTMLElement;
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setActiveDropdown(null);
    setSearchOpen(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Clear existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Set new timeout for search
    searchTimeoutRef.current = setTimeout(() => {
      if (query.trim()) {
        console.log('Searching for:', query);
        // Implement search functionality here
      }
    }, 300);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? 'bg-blue-900/95 backdrop-blur-md shadow-2xl border-b border-blue-700/50' 
            : 'bg-blue-900/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className={`flex items-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <a 
                href="#home" 
                className="flex items-center gap-2 md:gap-3 group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
              >
                <div className="relative">
                  <img 
                    src={femsaLogo} 
                    alt="FEMSA Global Trading Limited" 
                    className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 md:gap-8 relative">
              {navItems.map((item, index) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={item.href}
                    className={`text-white/90 hover:text-white font-medium text-sm transition-all duration-300 pb-1 relative group ${
                      (item.href === '/' && location.pathname === '/') || 
                      (item.href !== '/' && activeSection === item.href) ? 'text-orange-500' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`inline-block ml-1 w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-orange-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
                    {/* Active Indicator */}
                    {((item.href === '/' && location.pathname === '/') || 
                      (item.href !== '/' && activeSection === item.href)) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 scale-x-100"></div>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-dropdown-slide">
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(dropdownItem.href);
                            }}
                          >
                            <div className="flex-1">
                              <div className="font-medium">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</div>
                              )}
                            </div>
                            <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className={`hidden md:flex lg:flex items-center gap-2 md:gap-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              {/* Search */}
              <div className="relative">
                <button 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group ${
                    searchOpen ? 'bg-white/20 border-white/40' : ''
                  }`}
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                
                {/* Premium Search Dropdown */}
                <div className={`absolute top-full right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden transition-all duration-300 z-50 ${
                  searchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {/* Search Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-white" />
                      <h4 className="text-white font-semibold text-lg">Search</h4>
                    </div>
                    <p className="text-blue-100 text-sm mt-1">Find trading services, products, and insights</p>
                  </div>
                  
                  {/* Search Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <input
                        type="text"
                        placeholder="Search for anything..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                        autoFocus
                      />
                      <button 
                        onClick={() => setSearchOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Popular Searches */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-xs text-gray-500 font-medium mb-3">POPULAR SEARCHES</div>
                      <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group">
                          <span>Raw Materials & Packaging</span>
                          <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group">
                          <span>Industrial Equipment</span>
                          <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group">
                          <span>Trading Solutions</span>
                          <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Primary CTA */}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 min-h-[44px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Quick Actions */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Search Button */}
              <button
                className="text-white p-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                type="button"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Mobile Contact Button */}
              <button
                className="text-white p-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => scrollToSection('#contact')}
                aria-label="Contact"
                type="button"
              >
                <Phone className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`relative text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                } ${mobileOpen ? 'bg-white/20 shadow-lg border border-white/30' : ''}`}
                onClick={() => {
                  console.log('Mobile menu button clicked, current state:', mobileOpen);
                  setMobileOpen(!mobileOpen);
                }}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
                type="button"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {mobileOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300" />
                  )}
                </div>
                {/* Animated indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-full transition-all duration-300 ${
                  mobileOpen ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      <div className={`md:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-50 transition-all duration-300 ${
        searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col h-full p-4">
          {/* Search Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-semibold">Search</h3>
            <button
              className="text-white p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => setSearchOpen(false)}
              type="button"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Content */}
          <div className="flex-1">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, products, insights..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-slate-800/70 transition-all duration-300 text-lg"
                autoFocus
              />
            </div>

            {/* Popular Searches */}
            <div className="border-t border-slate-700/50 pt-6">
              <h4 className="text-slate-400 text-sm font-medium mb-4">POPULAR SEARCHES</h4>
              <div className="grid grid-cols-1 gap-3">
                <button className="w-full text-left p-4 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center justify-between group">
                  <span className="text-sm">Raw Materials & Packaging</span>
                  <ChevronRightIcon className="w-4 h-4 text-slate-500 group-hover:text-orange-400" />
                </button>
                <button className="w-full text-left p-4 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center justify-between group">
                  <span className="text-sm">Industrial Equipment</span>
                  <ChevronRightIcon className="w-4 h-4 text-slate-500 group-hover:text-orange-400" />
                </button>
                <button className="w-full text-left p-4 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center justify-between group">
                  <span className="text-sm">Trading Solutions</span>
                  <ChevronRightIcon className="w-4 h-4 text-slate-500 group-hover:text-orange-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ zIndex: 9999 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            console.log('Mobile navigation overlay clicked, closing menu');
            setMobileOpen(false);
          }
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-2 md:gap-3">
              <img src={femsaLogo} alt="FEMSA Global Trading Limited" className="h-6 md:h-8 w-auto" />
            </div>
            <button
              className="text-white p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => setMobileOpen(false)}
              type="button"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="p-4 md:p-6 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-slate-800/70 transition-all duration-300"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Navigation Categories */}
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Main Menu</h3>
                <div className="space-y-2">
                  {navItems.filter(item => !item.hasDropdown).map((item, index) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 ${
                        (item.href === '/' && location.pathname === '/') || 
                        (item.href !== '/' && activeSection === item.href) ? 'text-orange-500 bg-white/20' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setMobileOpen(false);
                      }}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="font-medium">{item.label}</span>
                      {((item.href === '/' && location.pathname === '/') || 
                        (item.href !== '/' && activeSection === item.href)) && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trading Services Dropdown */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Trading Services</h3>
                <div className="space-y-2">
                  {navItems.find(item => item.label === "Trading Services")?.dropdownItems?.map((dropdownItem, index) => (
                    <button
                      key={dropdownItem.label}
                      className="w-full flex items-center justify-between p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(dropdownItem.href);
                        setMobileOpen(false);
                      }}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                          {dropdownItem.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-slate-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* About FEMSA Dropdown */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">About FEMSA</h3>
                <div className="space-y-2">
                  {navItems.find(item => item.label === "About FEMSA")?.dropdownItems?.map((dropdownItem, index) => (
                    <button
                      key={dropdownItem.label}
                      className="w-full flex items-center justify-between p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(dropdownItem.href);
                        setMobileOpen(false);
                      }}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                          {dropdownItem.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-slate-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Resources Dropdown */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Resources</h3>
                <div className="space-y-2">
                  {navItems.find(item => item.label === "Resources")?.dropdownItems?.map((dropdownItem, index) => (
                    <button
                      key={dropdownItem.label}
                      className="w-full flex items-center justify-between p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(dropdownItem.href);
                        setMobileOpen(false);
                      }}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                          {dropdownItem.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-slate-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Link */}
              <div className="pt-6 border-t border-slate-700/50">
                <button
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  onClick={() => {
                    scrollToSection('#contact');
                    setMobileOpen(false);
                  }}
                >
                  <span>Contact Us</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
