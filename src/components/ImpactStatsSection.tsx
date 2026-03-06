import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, TrendingUp, Users, Building, Globe, Award, Target } from 'lucide-react';

interface ImpactMetric {
  id: number;
  value: string;
  suffix: string;
  label: string;
  subLabel: string;
  target: number;
}

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}

const ImpactStatsSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const impactMetrics: ImpactMetric[] = [
    {
      id: 1,
      value: '500',
      suffix: '+',
      label: 'Industrial Partners',
      subLabel: 'Trusted manufacturers & suppliers',
      target: 500
    },
    {
      id: 2,
      value: '94',
      suffix: '%',
      label: 'Client Profitability',
      subLabel: 'Average increase achieved',
      target: 94
    },
    {
      id: 3,
      value: '1,000',
      suffix: '+',
      label: 'Products',
      subLabel: 'Packaging & equipment solutions',
      target: 1000
    },
    {
      id: 4,
      value: '15',
      suffix: '+',
      label: 'Years Trading',
      subLabel: 'Of proven excellence',
      target: 15
    },
    {
      id: 5,
      value: '30',
      suffix: '%',
      label: 'Cost Reduction',
      subLabel: 'Average savings for clients',
      target: 30
    },
    {
      id: 6,
      value: '99',
      suffix: '%',
      label: 'On-Time Delivery',
      subLabel: 'Supply reliability rate',
      target: 99
    },
    {
      id: 7,
      value: '4',
      suffix: '',
      label: 'Office Locations',
      subLabel: 'Across Tanzania',
      target: 4
    },
    {
      id: 8,
      value: 'TSh',
      suffix: '500M+',
      label: 'Annual Trading Volume',
      subLabel: 'In industrial supplies',
      target: 500000000
    }
  ];

  const milestones: Milestone[] = [
    {
      id: 1,
      year: '2009',
      title: 'FEMSA Founded',
      description: 'Established as industrial trading company in Dar es Salaam'
    },
    {
      id: 2,
      year: '2012',
      title: 'Packaging Division Launch',
      description: 'Expanded into raw materials and packaging supplies trading'
    },
    {
      id: 3,
      year: '2015',
      title: 'Equipment Division',
      description: 'Added machinery and equipment trading services'
    },
    {
      id: 4,
      year: '2018',
      title: 'Strategic Partnerships',
      description: 'Secured partnerships with 100+ global manufacturers'
    },
    {
      id: 5,
      year: '2021',
      title: 'Regional Expansion',
      description: 'Opened offices in Mwanza, Arusha, and Zanzibar'
    },
    {
      id: 6,
      year: '2024',
      title: 'Digital Trading Platform',
      description: 'Launched online procurement system for industrial clients'
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

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            animateStats();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, [statsVisible]);

  const animateStats = () => {
    impactMetrics.forEach((metric) => {
      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;
      const endValue = metric.target;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easeOut;

        setAnimatedStats(prev => ({
          ...prev,
          [metric.label]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  const formatStatValue = (metric: ImpactMetric) => {
    const value = animatedStats[metric.label] || 0;
    
    if (metric.label === 'Economic Value Created') {
      return `R${(value / 1000000000).toFixed(1)}B+`;
    }
    
    return `${Math.floor(value).toLocaleString()}${metric.suffix}`;
  };

  return (
    <section className="impact-stats-section" ref={sectionRef}>
      {/* Decorative Background */}
      <div className="impact-stats-section__background">
        <svg className="impact-stats-section__grid-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        
        <div className="impact-stats-section__circle impact-stats-section__circle--1" />
        <div className="impact-stats-section__circle impact-stats-section__circle--2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="impact-stats-section__header">
          <div className={`impact-stats-section__eyebrow ${isLoaded ? 'impact-stats-section__eyebrow--loaded' : ''}`}>
            OUR IMPACT
          </div>
          
          <h2 className={`impact-stats-section__heading ${isLoaded ? 'impact-stats-section__heading--loaded' : ''}`}>
            <span className="impact-stats-section__heading-line">Numbers That Define</span>
            <span className="impact-stats-section__heading-line">Our Excellence</span>
            <div className={`impact-stats-section__underline ${isLoaded ? 'impact-stats-section__underline--loaded' : ''}`} />
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="impact-stats-section__stats-grid" ref={statsRef}>
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`impact-stats-section__stat ${isLoaded ? 'impact-stats-section__stat--loaded' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="impact-stats-section__stat-number">
                <span className="impact-stats-section__stat-value">
                  {statsVisible ? formatStatValue(metric) : '0'}
                </span>
                <span className="impact-stats-section__stat-suffix">
                  {metric.suffix}
                </span>
              </div>
              
              <div className="impact-stats-section__stat-label">{metric.label}</div>
              
              <div className="impact-stats-section__stat-sub-label">{metric.subLabel}</div>
            </div>
          ))}
        </div>

        {/* Timeline Strip */}
        <div className={`impact-stats-section__timeline ${isLoaded ? 'impact-stats-section__timeline--loaded' : ''}`}>
          <div className="impact-stats-section__timeline-header">
            Our Milestones
          </div>
          
          <div className="impact-stats-section__timeline-content">
            {/* Timeline Line */}
            <div className="impact-stats-section__timeline-line" />
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`impact-stats-section__milestone ${hoveredMilestone === milestone.id ? 'impact-stats-section__milestone--hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredMilestone(milestone.id)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Milestone Dot */}
                <div className={`impact-stats-section__milestone-dot ${hoveredMilestone === milestone.id ? 'impact-stats-section__milestone-dot--active' : ''}`} />
                
                {/* Milestone Content */}
                <div className="impact-stats-section__milestone-content">
                  <div className="impact-stats-section__milestone-year">{milestone.year}</div>
                  <div className="impact-stats-section__milestone-title">{milestone.title}</div>
                  
                  <div className={`impact-stats-section__milestone-description ${hoveredMilestone === milestone.id ? 'impact-stats-section__milestone-description--visible' : ''}`}>
                    {milestone.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`impact-stats-section__cta-banner ${isLoaded ? 'impact-stats-section__cta-banner--loaded' : ''}`}>
          <div className="impact-stats-section__cta-content">
            <h3 className="impact-stats-section__cta-heading">
              Join 5,000+ businesses already growing with FEMSA.
            </h3>
            
            <p className="impact-stats-section__cta-subtext">
              The next success story could be yours.
            </p>
            
            <div className="impact-stats-section__cta-buttons">
              <button className="impact-stats-section__cta-button impact-stats-section__cta-button--primary">
                Schedule a Consultation
              </button>
              
              <button className="impact-stats-section__cta-button impact-stats-section__cta-button--secondary">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .impact-stats-section {
          background-color: var(--color-primary);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        /* Decorative Background */
        .impact-stats-section__background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .impact-stats-section__grid-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .impact-stats-section__circle {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .impact-stats-section__circle--1 {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
        }

        .impact-stats-section__circle--2 {
          width: 600px;
          height: 600px;
          bottom: -200px;
          right: -200px;
        }

        /* Section Header */
        .impact-stats-section__header {
          text-align: center;
          margin-bottom: var(--space-16);
          position: relative;
          z-index: 1;
        }

        .impact-stats-section__eyebrow {
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

        .impact-stats-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .impact-stats-section__heading {
          margin-bottom: var(--space-6);
        }

        .impact-stats-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 52px;
          line-height: 1.1;
          color: var(--color-white);
          opacity: 0;
          transform: translateY(30px);
        }

        .impact-stats-section__heading--loaded .impact-stats-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .impact-stats-section__heading--loaded .impact-stats-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .impact-stats-section__underline {
          width: 60px;
          height: 3px;
          background: var(--color-secondary);
          margin: var(--space-6) auto 0;
          transform: scaleX(0);
          transform-origin: center;
        }

        .impact-stats-section__underline--loaded {
          transform: scaleX(1);
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        /* Stats Grid */
        .impact-stats-section__stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-bottom: var(--space-20);
          position: relative;
          z-index: 1;
        }

        .impact-stats-section__stat {
          padding: var(--space-8) var(--space-6);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
        }

        .impact-stats-section__stat:nth-child(4n) {
          border-right: none;
        }

        .impact-stats-section__stat:nth-child(-n+4) {
          border-bottom: none;
        }

        .impact-stats-section__stat--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .impact-stats-section__stat-number {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: var(--space-1);
          margin-bottom: var(--space-2);
        }

        .impact-stats-section__stat-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 60px;
          font-weight: 800;
          color: var(--color-secondary);
          line-height: 1;
        }

        .impact-stats-section__stat-suffix {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--color-secondary);
          line-height: 1;
        }

        .impact-stats-section__stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: var(--space-2);
        }

        .impact-stats-section__stat-sub-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: var(--space-1);
        }

        /* Timeline Strip */
        .impact-stats-section__timeline {
          margin-bottom: var(--space-20);
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
        }

        .impact-stats-section__timeline--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
        }

        .impact-stats-section__timeline-header {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .impact-stats-section__timeline-content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 var(--space-4);
        }

        .impact-stats-section__timeline-line {
          position: absolute;
          top: 20px;
          left: var(--space-4);
          right: var(--space-4);
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 0;
        }

        .impact-stats-section__milestone {
          position: relative;
          z-index: 1;
          text-align: center;
          flex: 1;
          padding: 0 var(--space-2);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .impact-stats-section__milestone--hovered {
          transform: translateY(-4px);
        }

        .impact-stats-section__milestone-dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          margin: 0 auto var(--space-4);
          transition: all var(--transition-base);
        }

        .impact-stats-section__milestone-dot--active {
          width: 16px;
          height: 16px;
          background: var(--color-secondary);
          border-color: var(--color-secondary);
          box-shadow: 0 0 20px rgba(249, 100, 25, 0.5);
        }

        .impact-stats-section__milestone-content {
          position: relative;
        }

        .impact-stats-section__milestone-year {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--color-secondary);
          margin-bottom: var(--space-2);
        }

        .impact-stats-section__milestone-title {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: var(--space-2);
        }

        .impact-stats-section__milestone-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        .impact-stats-section__milestone-description--visible {
          max-height: 60px;
        }

        /* CTA Banner */
        .impact-stats-section__cta-banner {
          background: var(--color-white);
          border-radius: 20px;
          padding: var(--space-12) var(--space-16);
          border-top: 4px solid var(--color-secondary);
          box-shadow: var(--shadow-xl);
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
        }

        .impact-stats-section__cta-banner--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s;
        }

        .impact-stats-section__cta-content {
          text-align: center;
        }

        .impact-stats-section__cta-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: var(--space-4);
        }

        .impact-stats-section__cta-subtext {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: var(--color-medium-gray);
          margin-bottom: var(--space-8);
        }

        .impact-stats-section__cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .impact-stats-section__cta-button {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          padding: var(--space-4) var(--space-8);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-base);
          border: none;
        }

        .impact-stats-section__cta-button--primary {
          background: var(--color-secondary);
          color: var(--color-white);
        }

        .impact-stats-section__cta-button--primary:hover {
          background: #ff8c42;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249, 100, 25, 0.3);
        }

        .impact-stats-section__cta-button--secondary {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .impact-stats-section__cta-button--secondary:hover {
          background: #0a3db5;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(3, 33, 119, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .impact-stats-section__stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-stats-section__timeline-content {
            flex-wrap: wrap;
            gap: var(--space-6);
          }

          .impact-stats-section__timeline-line {
            display: none;
          }

          .impact-stats-section__milestone {
            flex: 1 1 45%;
          }
        }

        @media (max-width: 768px) {
          .impact-stats-section {
            padding: var(--space-20) 0;
          }

          .impact-stats-section__heading-line {
            font-size: 42px;
          }

          .impact-stats-section__stats-grid {
            grid-template-columns: 1fr;
          }

          .impact-stats-section__stat {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .impact-stats-section__stat:last-child {
            border-bottom: none;
          }

          .impact-stats-section__stat-value {
            font-size: 48px;
          }

          .impact-stats-section__stat-suffix {
            font-size: 24px;
          }

          .impact-stats-section__milestone {
            flex: 1 1 100%;
          }

          .impact-stats-section__cta-banner {
            padding: var(--space-8);
          }

          .impact-stats-section__cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .impact-stats-section__cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 640px) {
          .impact-stats-section__heading-line {
            font-size: 36px;
          }

          .impact-stats-section__stat-value {
            font-size: 40px;
          }

          .impact-stats-section__stat-suffix {
            font-size: 20px;
          }

          .impact-stats-section__milestone-year {
            font-size: 18px;
          }

          .impact-stats-section__milestone-title {
            font-size: 14px;
          }

          .impact-stats-section__cta-heading {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactStatsSection;
