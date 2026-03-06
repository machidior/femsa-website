import React, { useState, useEffect, useRef } from 'react';
import { Search, Lightbulb, Play, BarChart3, ArrowRight, Download } from 'lucide-react';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      number: '01',
      title: 'DISCOVER',
      description: 'Deep-dive discovery sessions to understand your business context, goals, challenges, and competitive landscape.',
      icon: <Search className="w-6 h-6" />,
      details: [
        'Stakeholder interviews and workshops',
        'Market and competitive analysis',
        'Current state assessment and gap analysis'
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'STRATEGIZE',
      description: 'Co-creating a tailored strategic roadmap with measurable milestones, resource requirements, and clear success metrics.',
      icon: <Lightbulb className="w-6 h-6" />,
      details: [
        'Strategic roadmap development',
        'Resource planning and allocation',
        'Success metrics and KPI definition'
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'EXECUTE',
      description: 'Disciplined, hands-on execution with dedicated FEMSA specialists embedded in your operations for seamless delivery.',
      icon: <Play className="w-6 h-6" />,
      details: [
        'Dedicated project team deployment',
        'Agile implementation methodology',
        'Regular progress reporting and updates'
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'OPTIMIZE',
      description: 'Continuous monitoring, performance reviews, and adaptive optimizations to ensure sustained results and growth.',
      icon: <BarChart3 className="w-6 h-6" />,
      details: [
        'Performance monitoring and analytics',
        'Continuous improvement initiatives',
        'Long-term optimization strategies'
      ]
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
    <section className="process-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="process-section__header">
          <div className={`process-section__eyebrow ${isLoaded ? 'process-section__eyebrow--loaded' : ''}`}>
            OUR METHODOLOGY
          </div>
          
          <h2 className={`process-section__heading ${isLoaded ? 'process-section__heading--loaded' : ''}`}>
            <span className="process-section__heading-line">A Proven Process That</span>
            <span className="process-section__heading-line">Delivers Results</span>
          </h2>
          
          <p className={`process-section__subtitle ${isLoaded ? 'process-section__subtitle--loaded' : ''}`}>
            Our structured, four-phase approach ensures every engagement is grounded in insight, aligned to your goals, and built for measurable outcomes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-section__steps">
          {/* Connecting Line */}
          <div className="process-section__timeline-line" />
          
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`process-section__step ${isLoaded ? 'process-section__step--loaded' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => {
                setHoveredStep(step.id);
                setActiveStep(step.id);
              }}
              onMouseLeave={() => {
                setHoveredStep(step.id);
                setTimeout(() => setActiveStep(null), 200);
              }}
            >
              {/* Step Icon */}
              <div className="process-section__step-icon">
                {step.icon}
              </div>

              {/* Step Number Circle */}
              <div className={`process-section__step-circle ${activeStep === step.id || hoveredStep === step.id ? 'process-section__step-circle--active' : ''}`}>
                <span className="process-section__step-number">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="process-section__step-content">
                <h3 className="process-section__step-title">{step.title}</h3>
                
                <p className="process-section__step-description">{step.description}</p>
              </div>

              {/* Step Details Tooltip */}
              <div className={`process-section__step-details ${activeStep === step.id ? 'process-section__step-details--visible' : ''}`}>
                <div className="process-section__details-header">
                  What this looks like:
                </div>
                <ul className="process-section__details-list">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA Banner */}
        <div className={`process-section__cta-banner ${isLoaded ? 'process-section__cta-banner--loaded' : ''}`}>
          <h3 className="process-section__cta-heading">
            Ready to start your journey?
          </h3>
          
          <p className="process-section__cta-description">
            Our team is ready to assess your needs and chart the path forward.
          </p>
          
          <div className="process-section__cta-buttons">
            <button className="process-section__cta-button process-section__cta-button--primary">
              Schedule Discovery Call
            </button>
            
            <button className="process-section__cta-button process-section__cta-button--secondary">
              <Download className="w-4 h-4" />
              Download Our Methodology PDF
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          background-color: var(--color-white);
          padding: 100px 0;
        }

        /* Section Header */
        .process-section__header {
          margin-bottom: var(--space-20);
        }

        .process-section__eyebrow {
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

        .process-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .process-section__heading {
          margin-bottom: var(--space-6);
        }

        .process-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 48px;
          line-height: 1.1;
          color: var(--color-near-black);
          opacity: 0;
          transform: translateY(30px);
        }

        .process-section__heading--loaded .process-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .process-section__heading--loaded .process-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .process-section__subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-medium-gray);
          max-width: 700px;
          opacity: 0;
          transform: translateY(20px);
        }

        .process-section__subtitle--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        /* Process Steps */
        .process-section__steps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
          margin-bottom: var(--space-20);
        }

        .process-section__timeline-line {
          position: absolute;
          top: 40px;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            var(--color-secondary),
            var(--color-secondary) 8px,
            transparent 8px,
            transparent 16px
          );
          opacity: 0.4;
          z-index: 1;
        }

        .process-section__step {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(30px);
        }

        .process-section__step--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .process-section__step-icon {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          background: var(--color-white);
          border: 2px solid var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-secondary);
          z-index: 3;
        }

        .process-section__step-circle {
          width: 72px;
          height: 72px;
          border: 2px solid var(--color-secondary);
          border-radius: 50%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-5);
          transition: all var(--transition-base);
          position: relative;
          z-index: 2;
        }

        .process-section__step-circle--active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(3, 33, 119, 0.2);
        }

        .process-section__step-circle--active .process-section__step-number {
          color: var(--color-white);
        }

        .process-section__step-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--color-primary);
          transition: color var(--transition-base);
        }

        .process-section__step-content {
          text-align: center;
        }

        .process-section__step-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-bottom: var(--space-2);
        }

        .process-section__step-description {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: var(--color-medium-gray);
        }

        /* Step Details Tooltip */
        .process-section__step-details {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: 12px;
          padding: var(--space-4);
          box-shadow: var(--shadow-lg);
          z-index: 10;
          min-width: 280px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          margin-top: var(--space-4);
        }

        .process-section__step-details--visible {
          opacity: 1;
          visibility: visible;
        }

        .process-section__details-header {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--space-3);
        }

        .process-section__details-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .process-section__details-list li {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          margin-bottom: var(--space-2);
          padding-left: var(--space-3);
          position: relative;
          line-height: 1.5;
        }

        .process-section__details-list li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: 4px;
          background: var(--color-secondary);
          border-radius: 50%;
        }

        /* Process CTA Banner */
        .process-section__cta-banner {
          background: linear-gradient(135deg, #F7F8FC, var(--color-white));
          border: 1px solid var(--color-light-gray);
          border-radius: 20px;
          padding: var(--space-12);
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
        }

        .process-section__cta-banner--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
        }

        .process-section__cta-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: var(--space-4);
        }

        .process-section__cta-description {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: var(--color-medium-gray);
          margin-bottom: var(--space-8);
        }

        .process-section__cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .process-section__cta-button {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          padding: var(--space-4) var(--space-8);
          border-radius: var(--radius-lg);
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
        }

        .process-section__cta-button--primary {
          background: var(--color-secondary);
          color: var(--color-white);
        }

        .process-section__cta-button--primary:hover {
          background: #ff8c42;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249, 100, 25, 0.3);
        }

        .process-section__cta-button--secondary {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .process-section__cta-button--secondary:hover {
          background: #0a3db5;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(3, 33, 119, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .process-section__steps {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8);
          }

          .process-section__timeline-line {
            display: none;
          }

          .process-section__step {
            display: flex;
            align-items: flex-start;
            gap: var(--space-4);
            text-align: left;
          }

          .process-section__step-icon {
            position: static;
            transform: none;
            flex-shrink: 0;
          }

          .process-section__step-circle {
            margin: 0 var(--space-4) 0 0;
          }

          .process-section__step-details {
            left: 0;
            transform: none;
            margin-top: var(--space-2);
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: var(--space-20) 0;
          }

          .process-section__heading-line {
            font-size: 42px;
          }

          .process-section__steps {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .process-section__cta-banner {
            padding: var(--space-8);
          }

          .process-section__cta-heading {
            font-size: 28px;
          }

          .process-section__cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .process-section__cta-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .process-section__heading-line {
            font-size: 36px;
          }

          .process-section__step {
            flex-direction: column;
            text-align: center;
          }

          .process-section__step-circle {
            margin: 0 auto var(--space-4);
          }

          .process-section__step-details {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
