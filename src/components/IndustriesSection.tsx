import React, { useState, useEffect, useRef } from 'react';
import { 
  Factory, 
  Zap, 
  Building2, 
  Tractor, 
  Home, 
  Building, 
  Heart, 
  Cpu,
  Target,
  Settings,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface Industry {
  id: number;
  name: string;
  tagline: string;
  icon: React.ReactNode;
}

interface AudiencePath {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const IndustriesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries: Industry[] = [
    {
      id: 1,
      name: 'Manufacturing',
      tagline: 'Industrial solutions for scale',
      icon: <Factory className="w-12 h-12" />
    },
    {
      id: 2,
      name: 'Energy & Resources',
      tagline: 'Powering sustainable growth',
      icon: <Zap className="w-12 h-12" />
    },
    {
      id: 3,
      name: 'Financial Services',
      tagline: 'Capital meets strategy',
      icon: <Building2 className="w-12 h-12" />
    },
    {
      id: 4,
      name: 'Agriculture & Agribusiness',
      tagline: 'From farm to market',
      icon: <Tractor className="w-12 h-12" />
    },
    {
      id: 5,
      name: 'Real Estate & Construction',
      tagline: 'Building with precision',
      icon: <Home className="w-12 h-12" />
    },
    {
      id: 6,
      name: 'Government & Public Sector',
      tagline: 'Public value, delivered',
      icon: <Building className="w-12 h-12" />
    },
    {
      id: 7,
      name: 'Healthcare & Pharma',
      tagline: 'Health systems optimization',
      icon: <Heart className="w-12 h-12" />
    },
    {
      id: 8,
      name: 'Technology & Innovation',
      tagline: 'Digital transformation',
      icon: <Cpu className="w-12 h-12" />
    }
  ];

  const audiencePaths: AudiencePath[] = [
    {
      id: 1,
      title: 'For Executives',
      description: 'Strategic oversight and enterprise transformation.',
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'For Operations',
      description: 'Operational efficiency and supply chain excellence.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'For Investors',
      description: 'Market intelligence and investment facilitation.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="industries-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="industries-section__header">
          <div className={`industries-section__eyebrow ${isLoaded ? 'industries-section__eyebrow--loaded' : ''}`}>
            OUR EXPERTISE
          </div>
          
          <h2 className={`industries-section__heading ${isLoaded ? 'industries-section__heading--loaded' : ''}`}>
            <span className="industries-section__heading-line">Solutions Tailored to</span>
            <span className="industries-section__heading-line">Your Industry</span>
          </h2>
          
          <p className={`industries-section__subtitle ${isLoaded ? 'industries-section__subtitle--loaded' : ''}`}>
            Deep sector knowledge enables us to deliver solutions that are not just excellent — but precisely calibrated to the challenges of your industry.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="industries-section__grid">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`industries-section__card ${isLoaded ? 'industries-section__card--loaded' : ''} ${hoveredCard === industry.id ? 'industries-section__card--hovered' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(industry.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`industries-section__icon-container ${hoveredCard === industry.id ? 'industries-section__icon-container--hovered' : ''}`}>
                {industry.icon}
              </div>
              
              <h3 className="industries-section__industry-name">{industry.name}</h3>
              
              <p className="industries-section__industry-tagline">{industry.tagline}</p>
              
              <a href="#" className={`industries-section__explore-link ${hoveredCard === industry.id ? 'industries-section__explore-link--visible' : ''}`}>
                Explore <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Audience Path Banner */}
        <div className={`industries-section__banner ${isLoaded ? 'industries-section__banner--loaded' : ''}`}>
          <div className="industries-section__banner-content">
            {audiencePaths.map((path, index) => (
              <div key={path.id} className="industries-section__banner-column">
                <div className="industries-section__banner-icon">{path.icon}</div>
                
                <h4 className="industries-section__banner-title">{path.title}</h4>
                
                <p className="industries-section__banner-description">{path.description}</p>
                
                <a href="#" className="industries-section__banner-link">
                  Start Here <ArrowRight className="w-4 h-4" />
                </a>
                
                {index < audiencePaths.length - 1 && (
                  <div className="industries-section__banner-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .industries-section {
          background-color: #F7F8FC;
          padding: 100px 0;
        }

        /* Section Header */
        .industries-section__header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .industries-section__eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--space-6);
          opacity: 0;
          transform: translateY(20px);
        }

        .industries-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .industries-section__heading {
          margin-bottom: var(--space-6);
        }

        .industries-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 48px;
          line-height: 1.1;
          color: var(--color-near-black);
          opacity: 0;
          transform: translateY(30px);
        }

        .industries-section__heading--loaded .industries-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .industries-section__heading--loaded .industries-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .industries-section__subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-medium-gray);
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
        }

        .industries-section__subtitle--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        /* Industry Cards Grid */
        .industries-section__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
          margin-bottom: var(--space-16);
        }

        .industries-section__card {
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: 16px;
          padding: var(--space-7);
          text-align: center;
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          overflow: hidden;
        }

        .industries-section__card--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .industries-section__card--hovered {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
          background: linear-gradient(135deg, #ffffff, #F0F4FF);
        }

        .industries-section__icon-container {
          width: 72px;
          height: 72px;
          background: #F0F4FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
          color: var(--color-primary);
          transition: all var(--transition-base);
        }

        .industries-section__icon-container--hovered {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .industries-section__industry-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-top: var(--space-4);
        }

        .industries-section__industry-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          margin-top: var(--space-1);
        }

        .industries-section__explore-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-secondary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          margin-top: var(--space-4);
          opacity: 0;
          transform: translateY(10px);
          transition: all var(--transition-base);
        }

        .industries-section__explore-link--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .industries-section__explore-link:hover {
          color: #ff8c42;
        }

        /* Audience Path Banner */
        .industries-section__banner {
          background: var(--color-primary);
          border-radius: 20px;
          padding: var(--space-12) var(--space-16);
          opacity: 0;
          transform: translateY(30px);
        }

        .industries-section__banner--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
        }

        .industries-section__banner-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
          position: relative;
        }

        .industries-section__banner-column {
          text-align: center;
          position: relative;
        }

        .industries-section__banner-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
          color: var(--color-white);
        }

        .industries-section__banner-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-secondary);
          margin-bottom: var(--space-3);
        }

        .industries-section__banner-description {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--space-4);
          line-height: 1.6;
        }

        .industries-section__banner-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-secondary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          transition: gap var(--transition-base);
        }

        .industries-section__banner-link:hover {
          gap: var(--space-2);
        }

        .industries-section__banner-divider {
          position: absolute;
          right: -var(--space-4);
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .industries-section__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-5);
          }
        }

        @media (max-width: 768px) {
          .industries-section {
            padding: var(--space-20) 0;
          }

          .industries-section__heading-line {
            font-size: 42px;
          }

          .industries-section__grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }

          .industries-section__banner {
            padding: var(--space-8);
          }

          .industries-section__banner-content {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .industries-section__banner-divider {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .industries-section__heading-line {
            font-size: 36px;
          }

          .industries-section__card {
            padding: var(--space-5);
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
