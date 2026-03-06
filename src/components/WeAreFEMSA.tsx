import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Award } from 'lucide-react';

const WeAreFEMSA = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const accordionItems = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: 'To empower businesses with innovative solutions and strategic guidance that drive sustainable growth and long-term success. We are committed to excellence in every partnership we build.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: 'To be the leading business solutions provider that transforms ambitious organizations into industry leaders through cutting-edge technology and unparalleled expertise.'
    },
    {
      id: 'values',
      title: 'Our Values',
      content: 'Integrity, innovation, and partnership form the foundation of everything we do. We believe in building lasting relationships based on trust, transparency, and mutual success.'
    }
  ];

  const partnerLogos = [
    { name: 'TechCorp', id: 1 },
    { name: 'GlobalFinance', id: 2 },
    { name: 'InnovationLab', id: 3 },
    { name: 'EnterprisePlus', id: 4 },
    { name: 'DigitalFirst', id: 5 },
    { name: 'FutureSystems', id: 6 },
    { name: 'SmartSolutions', id: 7 },
    { name: 'NextGenTech', id: 8 }
  ];

  const toggleAccordion = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <>
      {/* Main Section */}
      <section id="identity" className="relative bg-[#F8FAFC] py-[120px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT COLUMN (45%) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Section Label */}
              <div className="font-mono text-amber-500 text-xs tracking-widest uppercase">
                OUR IDENTITY
              </div>

              {/* Large Heading */}
              <div className="relative">
                {/* Background Numeral */}
                <div className="absolute -top-20 -left-8 text-[200px] font-bold opacity-5"
                     style={{ color: '#04091E', fontFamily: 'Syne' }}>
                  01
                </div>
                
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]"
                    style={{ color: '#04091E', fontFamily: 'Syne', fontWeight: 800 }}>
                  Built on Trust.<br />
                  Driven by Results.
                </h2>
              </div>

              {/* Body Text */}
              <p className="text-base leading-relaxed font-body"
                 style={{ color: '#374151', fontFamily: 'DM Sans', lineHeight: 1.8 }}>
                FEMSA Group stands at the forefront of business innovation, delivering comprehensive solutions 
                that transform challenges into opportunities. With decades of combined expertise and a proven 
                track record of success, we partner with organizations to unlock their full potential and 
                achieve sustainable growth in today's dynamic marketplace.
              </p>

              {/* Accordion Items */}
              <div className="space-y-4">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className={`border-l-4 transition-all duration-300 ${
                      expandedItem === item.id 
                        ? 'border-amber-500 bg-amber-50/30' 
                        : 'border-transparent hover:border-amber-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 rounded-r-lg"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold text-lg"
                            style={{ fontFamily: 'Syne', color: '#04091E' }}>
                          {item.title}
                        </h3>
                        <div className="text-amber-500 transition-transform duration-300"
                             style={{
                               transform: expandedItem === item.id ? 'rotate(180deg)' : 'rotate(0deg)'
                             }}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedItem === item.id ? 'max-h-32' : 'max-h-0'
                    }`}>
                      <div className="p-4 pt-0">
                        <p className="text-femsa-secondary font-body"
                           style={{ fontFamily: 'DM Sans', color: '#374151' }}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <button className="group inline-flex items-center gap-2 text-amber-500 font-medium transition-all duration-300 hover:gap-3"
                      style={{ fontFamily: 'DM Sans' }}>
                Learn More About Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* RIGHT COLUMN (55%) */}
            <div className="lg:col-span-7 relative">
              
              {/* Main Image Area */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg"
                     style={{
                       clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                       borderLeft: '4px solid #F59E0B'
                     }}>
                  {/* Placeholder for team image */}
                  <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-display">Professional Team Photo</p>
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" 
                         style={{ 
                           background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 70%)'
                         }} />
                  </div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute bottom-8 left-8 glass-card p-6 rounded-lg max-w-xs"
                     style={{
                       backgroundColor: 'rgba(15, 31, 61, 0.9)',
                       backdropFilter: 'blur(20px)',
                       border: '1px solid rgba(245, 158, 11, 0.2)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                     }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-femsa-primary" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-lg">
                        20+ Years
                      </div>
                      <div className="font-body text-femsa-secondary text-sm">
                        of Combined Expertise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY BAR */}
      <section className="relative bg-[#F1F5F9] py-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 pr-8">
              <div className="font-mono text-femsa-muted text-xs tracking-widest uppercase">
                TRUSTED BY
              </div>
            </div>
            
            {/* Logo Marquee */}
            <div className="relative flex-1 overflow-hidden">
              <div className="flex animate-marquee">
                {/* First set of logos */}
                {partnerLogos.map((logo) => (
                  <div key={`first-${logo.id}`} 
                       className="flex items-center justify-center h-16 w-32 mx-8 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600 font-medium">{logo.name}</p>
                    </div>
                  </div>
                ))}
                
                {/* Duplicated set for seamless loop */}
                {partnerLogos.map((logo) => (
                  <div key={`second-${logo.id}`} 
                       className="flex items-center justify-center h-16 w-32 mx-8 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600 font-medium">{logo.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        `
      }} />
    </>
  );
};

export default WeAreFEMSA;
