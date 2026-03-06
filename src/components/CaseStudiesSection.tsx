import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Clock, X, Download, MessageSquare } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  company: string;
  industry: string;
  category: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    value: string;
    label: string;
  }[];
  quote?: string;
  author?: string;
  readTime: string;
  date: string;
  featured: boolean;
}

interface Metric {
  value: string;
  label: string;
  description: string;
  target: number;
  suffix: string;
}

const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'ACME MANUFACTURING',
      company: 'ACME',
      industry: 'Manufacturing',
      category: 'supply-chain',
      title: 'Reduced Supply Chain Costs by 34% in 8 Months',
      description: 'Comprehensive supply chain optimization delivering significant cost reductions and improved efficiency.',
      challenge: 'Rising operational costs and inefficient logistics processes were impacting profitability.',
      solution: 'Implemented end-to-end supply chain redesign with advanced analytics and strategic partnerships.',
      results: 'Achieved 34% cost reduction, improved delivery times by 28%, and enhanced supplier relationships.',
      metrics: [
        { value: '34%', label: 'Cost Reduction' },
        { value: '28%', label: 'Faster Delivery' },
        { value: '8', label: 'Months' }
      ],
      quote: 'FEMSA transformed our entire supply chain operation. The results exceeded our expectations.',
      author: 'Sarah Johnson, COO',
      readTime: '8 min read',
      date: '2024-03-15',
      featured: true
    },
    {
      id: 2,
      client: 'GLOBAL FINANCE CORP',
      company: 'GFC',
      industry: 'Financial Services',
      category: 'finance',
      title: 'Digital Banking Platform Launch in 6 Months',
      description: 'Complete digital transformation of banking services with modern technology stack.',
      challenge: 'Legacy systems were limiting growth and customer experience was falling behind competitors.',
      solution: 'Developed and deployed comprehensive digital banking platform with cloud infrastructure.',
      results: 'Launched in 6 months, 45% increase in digital adoption, 60% reduction in processing time.',
      metrics: [
        { value: '45%', label: 'Digital Adoption' },
        { value: '60%', label: 'Faster Processing' },
        { value: '6', label: 'Months' }
      ],
      quote: 'The digital platform has revolutionized how we serve our customers.',
      author: 'Michael Chen, CTO',
      readTime: '10 min read',
      date: '2024-02-28',
      featured: true
    },
    {
      id: 3,
      client: 'AGRI-TECH SOLUTIONS',
      company: 'ATS',
      industry: 'Agriculture',
      category: 'market-expansion',
      title: 'Expanded to 5 New African Markets',
      description: 'Strategic market entry and expansion across multiple African countries.',
      challenge: 'Limited market presence and regulatory barriers to expansion.',
      solution: 'Developed market entry strategies and navigated complex regulatory environments.',
      results: 'Successfully entered 5 new markets, 200% revenue growth, established local partnerships.',
      metrics: [
        { value: '5', label: 'New Markets' },
        { value: '200%', label: 'Revenue Growth' },
        { value: '12', label: 'Months' }
      ],
      readTime: '6 min read',
      date: '2024-01-20',
      featured: false
    },
    {
      id: 4,
      client: 'ENERGY SYSTEMS LTD',
      company: 'ESL',
      industry: 'Energy',
      category: 'consulting',
      title: 'Sustainable Energy Strategy Implementation',
      description: 'Comprehensive sustainability strategy reducing environmental impact.',
      challenge: 'High carbon footprint and increasing regulatory pressure.',
      solution: 'Implemented renewable energy solutions and efficiency optimization programs.',
      results: '40% reduction in carbon emissions, 25% energy cost savings, improved ESG ratings.',
      metrics: [
        { value: '40%', label: 'Carbon Reduction' },
        { value: '25%', label: 'Cost Savings' },
        { value: '18', label: 'Months' }
      ],
      readTime: '7 min read',
      date: '2024-01-15',
      featured: false
    },
    {
      id: 5,
      client: 'TECH INNOVATIONS INC',
      company: 'TII',
      industry: 'Technology',
      category: 'consulting',
      title: 'AI-Powered Customer Service Transformation',
      description: 'Artificial intelligence implementation for customer service excellence.',
      challenge: 'High customer service costs and inconsistent response quality.',
      solution: 'Deployed AI-powered customer service platform with machine learning capabilities.',
      results: '70% reduction in response time, 50% cost savings, 95% customer satisfaction.',
      metrics: [
        { value: '70%', label: 'Faster Response' },
        { value: '50%', label: 'Cost Savings' },
        { value: '95%', label: 'Satisfaction' }
      ],
      readTime: '9 min read',
      date: '2023-12-10',
      featured: false
    },
    {
      id: 6,
      client: 'REAL ESTATE GROUP',
      company: 'REG',
      industry: 'Real Estate',
      category: 'global-trading',
      title: 'International Property Portfolio Optimization',
      description: 'Global real estate portfolio management and optimization strategy.',
      challenge: 'Underperforming international assets and complex regulatory compliance.',
      solution: 'Developed comprehensive portfolio optimization strategy with local expertise.',
      results: '35% portfolio value increase, improved compliance, streamlined operations.',
      metrics: [
        { value: '35%', label: 'Value Increase' },
        { value: '100%', label: 'Compliance' },
        { value: '15', label: 'Months' }
      ],
      readTime: '8 min read',
      date: '2023-11-25',
      featured: false
    }
  ];

  const bottomMetrics: Metric[] = [
    { value: '300%', label: 'Average ROI for Clients', description: 'Consistent high returns across all engagements', target: 300, suffix: '%' },
    { value: '8 Months', label: 'Average Time-to-Results', description: 'Quick implementation with lasting impact', target: 8, suffix: '' },
    { value: '96%', label: 'Client Renewal Rate', description: 'Long-term partnerships and sustained value', target: 96, suffix: '%' },
    { value: '20+', label: 'Countries of Impact', description: 'Global reach with local expertise', target: 20, suffix: '+' }
  ];

  const filters = [
    { id: 'all', label: 'All', count: 36 },
    { id: 'global-trading', label: 'Global Trading', count: 12 },
    { id: 'consulting', label: 'Consulting', count: 8 },
    { id: 'finance', label: 'Finance', count: 6 },
    { id: 'supply-chain', label: 'Supply Chain', count: 7 },
    { id: 'market-expansion', label: 'Market Expansion', count: 3 }
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
    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !metricsVisible) {
            setMetricsVisible(true);
            animateMetrics();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (metricsRef.current) {
      metricsObserver.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        metricsObserver.unobserve(metricsRef.current);
      }
    };
  }, [metricsVisible]);

  const animateMetrics = () => {
    bottomMetrics.forEach((metric) => {
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

        setAnimatedMetrics(prev => ({
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

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const featuredStudies = filteredCaseStudies.filter(study => study.featured);
  const compactStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <section className="case-studies-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="case-studies-section__header">
          <div className="case-studies-section__header-left">
            <div className={`case-studies-section__eyebrow ${isLoaded ? 'case-studies-section__eyebrow--loaded' : ''}`}>
              CLIENT SUCCESS
            </div>
            
            <h2 className={`case-studies-section__heading ${isLoaded ? 'case-studies-section__heading--loaded' : ''}`}>
              <span className="case-studies-section__heading-line">Real Results for</span>
              <span className="case-studies-section__heading-line">Real Businesses</span>
            </h2>
            
            <p className={`case-studies-section__subtitle ${isLoaded ? 'case-studies-section__subtitle--loaded' : ''}`}>
              Every story here represents a business transformation — measurable outcomes, strategic breakthroughs, and sustainable impact achieved in partnership with FEMSA Group.
            </p>
          </div>
          
          <div className="case-studies-section__header-right">
            <button className="case-studies-section__view-all-btn">
              View All Case Studies
            </button>
            <div className="case-studies-section__case-count">
              36+ Case Studies Available
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`case-studies-section__filters ${isLoaded ? 'case-studies-section__filters--loaded' : ''}`}>
          <div className="case-studies-section__filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`case-studies-section__filter-tab ${activeFilter === filter.id ? 'case-studies-section__filter-tab--active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
                <span className="case-studies-section__filter-count">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="case-studies-section__featured-grid">
          {featuredStudies.map((study, index) => (
            <div
              key={study.id}
              className={`case-studies-section__featured-card ${isLoaded ? 'case-studies-section__featured-card--loaded' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Area */}
              <div className="case-studies-section__card-image">
                <div className="case-studies-section__image-overlay" />
                <div className="case-studies-section__card-tags">
                  <span className="case-studies-section__industry-tag">{study.industry}</span>
                  <span className="case-studies-section__featured-tag">Featured</span>
                </div>
                <div className="case-studies-section__company-badge">
                  {study.company.charAt(0)}
                </div>
              </div>

              {/* Card Body */}
              <div className="case-studies-section__card-body">
                <div className="case-studies-section__client-info">
                  CLIENT: {study.client}
                </div>
                
                <h3 className="case-studies-section__card-title">
                  {study.title}
                </h3>
                
                <p className="case-studies-section__card-description">
                  {study.description}
                </p>
                
                <div className="case-studies-section__card-metrics">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="case-studies-section__metric">
                      <div className="case-studies-section__metric-value">{metric.value}</div>
                      <div className="case-studies-section__metric-label">{metric.label}</div>
                      {idx < study.metrics.length - 1 && (
                        <div className="case-studies-section__metric-divider" />
                      )}
                    </div>
                  ))}
                </div>
                
                {study.quote && (
                  <blockquote className="case-studies-section__card-quote">
                    "{study.quote}"
                    <cite>— {study.author}</cite>
                  </blockquote>
                )}
                
                <div className="case-studies-section__card-footer">
                  <button 
                    className="case-studies-section__read-more-btn"
                    onClick={() => setSelectedCase(study)}
                  >
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="case-studies-section__card-meta">
                    <span className="case-studies-section__read-time">
                      <Clock className="w-4 h-4" />
                      {study.readTime}
                    </span>
                    <span className="case-studies-section__date">
                      <Calendar className="w-4 h-4" />
                      {new Date(study.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Case Studies */}
        <div className="case-studies-section__compact-grid">
          {compactStudies.map((study, index) => (
            <div
              key={study.id}
              className={`case-studies-section__compact-card ${isLoaded ? 'case-studies-section__compact-card--loaded' : ''}`}
              style={{ animationDelay: `${(featuredStudies.length + index) * 0.1}s` }}
            >
              <div className="case-studies-section__compact-accent" />
              
              <div className="case-studies-section__compact-tags">
                <span className="case-studies-section__industry-tag">{study.industry}</span>
              </div>
              
              <h3 className="case-studies-section__compact-title">
                {study.title}
              </h3>
              
              <p className="case-studies-section__compact-description">
                {study.description}
              </p>
              
              <div className="case-studies-section__compact-metric">
                <div className="case-studies-section__compact-metric-value">
                  {study.metrics[0].value}
                </div>
                <div className="case-studies-section__compact-metric-label">
                  {study.metrics[0].label}
                </div>
              </div>
              
              <div className="case-studies-section__compact-footer">
                <button 
                  className="case-studies-section__read-story-btn"
                  onClick={() => setSelectedCase(study)}
                >
                  Read Story <ArrowRight className="w-4 h-4" />
                </button>
                <div className="case-studies-section__company-logo">
                  {study.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Metrics Strip */}
        <div className="case-studies-section__metrics-strip" ref={metricsRef}>
          <div className="case-studies-section__metrics-content">
            {bottomMetrics.map((metric, index) => (
              <div key={metric.label} className="case-studies-section__bottom-metric">
                <div className="case-studies-section__bottom-metric-value">
                  {metricsVisible ? (
                    <>
                      {metric.label === 'Average Time-to-Results' 
                        ? animatedMetrics[metric.label] || 0
                        : Math.floor(animatedMetrics[metric.label] || 0).toLocaleString()
                      }{metric.suffix}
                    </>
                  ) : (
                    '0'
                  )}
                </div>
                <div className="case-studies-section__bottom-metric-label">{metric.label}</div>
                <div className="case-studies-section__bottom-metric-description">{metric.description}</div>
                {index < bottomMetrics.length - 1 && (
                  <div className="case-studies-section__metric-divider" />
                )}
              </div>
            ))}
          </div>
          
          <div className="case-studies-section__metrics-cta">
            <p>Want results like these? Let's talk.</p>
            <button className="case-studies-section__metrics-btn">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Detail Panel */}
      {selectedCase && (
        <div className="case-studies-section__overlay" onClick={() => setSelectedCase(null)}>
          <div 
            className="case-studies-section__detail-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="case-studies-section__close-btn"
              onClick={() => setSelectedCase(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="case-studies-section__detail-content">
              <div className="case-studies-section__detail-header">
                <span className="case-studies-section__industry-tag">{selectedCase.industry}</span>
                <h2>{selectedCase.title}</h2>
                <div className="case-studies-section__detail-client">{selectedCase.client}</div>
              </div>
              
              <div className="case-studies-section__detail-section">
                <h3>The Challenge</h3>
                <p>{selectedCase.challenge}</p>
              </div>
              
              <div className="case-studies-section__detail-section">
                <h3>Our Solution</h3>
                <p>{selectedCase.solution}</p>
              </div>
              
              <div className="case-studies-section__detail-section">
                <h3>Results Achieved</h3>
                <p>{selectedCase.results}</p>
                <div className="case-studies-section__detail-metrics">
                  {selectedCase.metrics.map((metric, idx) => (
                    <div key={idx} className="case-studies-section__detail-metric">
                      <div className="case-studies-section__detail-metric-value">{metric.value}</div>
                      <div className="case-studies-section__detail-metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedCase.quote && (
                <blockquote className="case-studies-section__detail-quote">
                  "{selectedCase.quote}"
                  <cite>— {selectedCase.author}</cite>
                </blockquote>
              )}
              
              <div className="case-studies-section__detail-actions">
                <button className="case-studies-section__detail-btn">
                  <Download className="w-4 h-4" />
                  Download Full PDF
                </button>
                <button className="case-studies-section__detail-btn case-studies-section__detail-btn--secondary">
                  <MessageSquare className="w-4 h-4" />
                  Book a Similar Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .case-studies-section {
          background-color: #F7F8FC;
          padding: 120px 0;
        }

        /* Section Header */
        .case-studies-section__header {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: var(--space-8);
          align-items: center;
          margin-bottom: var(--space-10);
        }

        .case-studies-section__eyebrow {
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

        .case-studies-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .case-studies-section__heading {
          margin-bottom: var(--space-6);
        }

        .case-studies-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 52px;
          line-height: 1.1;
        }

        .case-studies-section__heading-line:nth-child(1) {
          color: var(--color-near-black);
          opacity: 0;
          transform: translateY(30px);
        }

        .case-studies-section__heading-line:nth-child(2) {
          color: var(--color-primary);
          opacity: 0;
          transform: translateY(30px);
        }

        .case-studies-section__heading--loaded .case-studies-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .case-studies-section__heading--loaded .case-studies-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .case-studies-section__subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: var(--color-medium-gray);
          opacity: 0;
          transform: translateY(20px);
        }

        .case-studies-section__subtitle--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        .case-studies-section__header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--space-3);
        }

        .case-studies-section__view-all-btn {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .case-studies-section__view-all-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .case-studies-section__case-count {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-secondary);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Filter Tabs */
        .case-studies-section__filters {
          margin: var(--space-10) 0 var(--space-12);
          opacity: 0;
          transform: translateY(20px);
        }

        .case-studies-section__filters--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;
        }

        .case-studies-section__filter-tabs {
          display: flex;
          gap: var(--space-3);
          overflow-x: auto;
          padding-bottom: var(--space-2);
        }

        .case-studies-section__filter-tab {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-medium-gray);
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-5);
          cursor: pointer;
          transition: all var(--transition-base);
          white-space: nowrap;
          position: relative;
        }

        .case-studies-section__filter-tab:hover {
          background: #F0F4FF;
          color: var(--color-primary);
        }

        .case-studies-section__filter-tab--active {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
        }

        .case-studies-section__filter-count {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-secondary);
          background: var(--color-secondary);
          color: var(--color-white);
          padding: 2px 6px;
          border-radius: var(--radius-full);
          margin-left: var(--space-2);
        }

        .case-studies-section__filter-tab--active .case-studies-section__filter-count {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Featured Cards Grid */
        .case-studies-section__featured-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-7);
          margin-bottom: var(--space-12);
        }

        .case-studies-section__featured-card {
          background: var(--color-white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(30px);
          position: relative;
        }

        .case-studies-section__featured-card--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .case-studies-section__featured-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }

        .case-studies-section__featured-card:hover::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--color-secondary);
          transform: scaleY(0);
          transform-origin: top;
          animation: slideInLeft 0.3s ease forwards;
        }

        @keyframes slideInLeft {
          to {
            transform: scaleY(1);
          }
        }

        /* Card Image */
        .case-studies-section__card-image {
          height: 260px;
          background: linear-gradient(135deg, var(--color-primary), #0a3db5);
          position: relative;
          overflow: hidden;
        }

        .case-studies-section__image-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);
        }

        .case-studies-section__card-tags {
          position: absolute;
          top: var(--space-4);
          left: var(--space-4);
          right: var(--space-4);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .case-studies-section__industry-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-white);
          background: var(--color-secondary);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .case-studies-section__featured-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-primary);
          background: var(--color-white);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .case-studies-section__company-badge {
          position: absolute;
          bottom: -20px;
          left: var(--space-6);
          width: 48px;
          height: 48px;
          background: var(--color-white);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }

        /* Card Body */
        .case-studies-section__card-body {
          padding: var(--space-8);
        }

        .case-studies-section__client-info {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: var(--space-4);
        }

        .case-studies-section__card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-bottom: var(--space-4);
          line-height: 1.3;
        }

        .case-studies-section__card-description {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-medium-gray);
          line-height: 1.6;
          margin-bottom: var(--space-6);
        }

        .case-studies-section__card-metrics {
          display: flex;
          gap: var(--space-6);
          margin-bottom: var(--space-6);
          align-items: center;
        }

        .case-studies-section__metric {
          text-align: center;
          flex: 1;
          position: relative;
        }

        .case-studies-section__metric-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: var(--color-secondary);
        }

        .case-studies-section__metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--color-medium-gray);
          margin-top: var(--space-1);
        }

        .case-studies-section__metric-divider {
          position: absolute;
          right: -var(--space-3);
          top: 10%;
          height: 80%;
          width: 1px;
          background: var(--color-light-gray);
        }

        .case-studies-section__card-quote {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-style: italic;
          color: var(--color-medium-gray);
          line-height: 1.6;
          margin-bottom: var(--space-6);
          padding-left: var(--space-4);
          border-left: 3px solid var(--color-secondary);
        }

        .case-studies-section__card-quote cite {
          display: block;
          font-style: normal;
          font-weight: 600;
          margin-top: var(--space-2);
          color: var(--color-near-black);
        }

        .case-studies-section__card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-4);
          border-top: 1px solid var(--color-light-gray);
        }

        .case-studies-section__read-more-btn {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          transition: gap var(--transition-base);
        }

        .case-studies-section__read-more-btn:hover {
          gap: var(--space-3);
        }

        .case-studies-section__card-meta {
          display: flex;
          gap: var(--space-4);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
        }

        .case-studies-section__read-time,
        .case-studies-section__date {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        /* Compact Cards Grid */
        .case-studies-section__compact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
          margin-bottom: var(--space-16);
        }

        .case-studies-section__compact-card {
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: 16px;
          padding: var(--space-7);
          position: relative;
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(30px);
        }

        .case-studies-section__compact-card--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .case-studies-section__compact-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .case-studies-section__compact-accent {
          position: absolute;
          left: var(--space-7);
          top: var(--space-7);
          width: 4px;
          height: 40px;
          background: var(--color-secondary);
          border-radius: 2px;
        }

        .case-studies-section__compact-tags {
          margin-bottom: var(--space-4);
        }

        .case-studies-section__compact-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-bottom: var(--space-3);
          line-height: 1.3;
        }

        .case-studies-section__compact-description {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-medium-gray);
          line-height: 1.6;
          margin-bottom: var(--space-4);
        }

        .case-studies-section__compact-metric {
          margin-bottom: var(--space-4);
        }

        .case-studies-section__compact-metric-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--color-secondary);
        }

        .case-studies-section__compact-metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
        }

        .case-studies-section__compact-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .case-studies-section__read-story-btn {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          transition: gap var(--transition-base);
        }

        .case-studies-section__read-story-btn:hover {
          gap: var(--space-3);
        }

        .case-studies-section__company-logo {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          opacity: 0.7;
        }

        /* Results Metrics Strip */
        .case-studies-section__metrics-strip {
          background: linear-gradient(135deg, var(--color-primary), #041f8a);
          border-radius: 24px;
          padding: var(--space-16) 0;
        }

        .case-studies-section__metrics-content {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: var(--space-8);
        }

        .case-studies-section__bottom-metric {
          text-align: center;
          color: var(--color-white);
          flex: 1;
          position: relative;
        }

        .case-studies-section__bottom-metric-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 52px;
          font-weight: 800;
          color: var(--color-secondary);
          margin-bottom: var(--space-2);
        }

        .case-studies-section__bottom-metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .case-studies-section__bottom-metric-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 200px;
          margin: 0 auto;
        }

        .case-studies-section__metric-divider {
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .case-studies-section__metrics-cta {
          text-align: center;
        }

        .case-studies-section__metrics-cta p {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: var(--color-white);
          margin-bottom: var(--space-4);
        }

        .case-studies-section__metrics-btn {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--color-white);
          background: var(--color-secondary);
          border: none;
          padding: var(--space-4) var(--space-8);
          border-radius: var(--radius-lg);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          transition: all var(--transition-base);
        }

        .case-studies-section__metrics-btn:hover {
          background: #ff8c42;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249, 100, 25, 0.3);
        }

        /* Detail Panel */
        .case-studies-section__overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .case-studies-section__detail-panel {
          width: 480px;
          height: 100vh;
          background: var(--color-white);
          box-shadow: var(--shadow-xl);
          overflow-y: auto;
          transform: translateX(100%);
          animation: slideIn 0.4s ease forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }

        .case-studies-section__close-btn {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          width: 40px;
          height: 40px;
          background: var(--color-light-gray);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .case-studies-section__close-btn:hover {
          background: var(--color-medium-gray);
          color: var(--color-white);
        }

        .case-studies-section__detail-content {
          padding: var(--space-8);
        }

        .case-studies-section__detail-header {
          margin-bottom: var(--space-8);
        }

        .case-studies-section__detail-header h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--color-near-black);
          margin: var(--space-4) 0;
          line-height: 1.2;
        }

        .case-studies-section__detail-client {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-medium-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .case-studies-section__detail-section {
          margin-bottom: var(--space-8);
        }

        .case-studies-section__detail-section h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-bottom: var(--space-3);
        }

        .case-studies-section__detail-section p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-medium-gray);
        }

        .case-studies-section__detail-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-top: var(--space-4);
        }

        .case-studies-section__detail-metric {
          text-align: center;
        }

        .case-studies-section__detail-metric-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--color-secondary);
        }

        .case-studies-section__detail-metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
        }

        .case-studies-section__detail-quote {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: italic;
          color: var(--color-medium-gray);
          line-height: 1.6;
          padding: var(--space-6);
          background: #F7F8FC;
          border-radius: 12px;
          margin-bottom: var(--space-8);
        }

        .case-studies-section__detail-quote cite {
          display: block;
          font-style: normal;
          font-weight: 600;
          margin-top: var(--space-2);
          color: var(--color-near-black);
        }

        .case-studies-section__detail-actions {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .case-studies-section__detail-btn {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          padding: var(--space-4) var(--space-6);
          border-radius: var(--radius-lg);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          transition: all var(--transition-base);
        }

        .case-studies-section__detail-btn {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .case-studies-section__detail-btn:hover {
          background: #0a3db5;
          transform: translateY(-2px);
        }

        .case-studies-section__detail-btn--secondary {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
        }

        .case-studies-section__detail-btn--secondary:hover {
          background: var(--color-primary);
          color: var(--color-white);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .case-studies-section__header {
            grid-template-columns: 1fr;
            gap: var(--space-6);
            text-align: center;
          }

          .case-studies-section__header-right {
            align-items: center;
          }

          .case-studies-section__featured-grid {
            grid-template-columns: 1fr;
          }

          .case-studies-section__compact-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .case-studies-section__metrics-content {
            flex-wrap: wrap;
            gap: var(--space-6);
          }

          .case-studies-section__bottom-metric {
            flex: 1 1 45%;
          }

          .case-studies-section__metric-divider {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .case-studies-section {
            padding: var(--space-20) 0;
          }

          .case-studies-section__heading-line {
            font-size: 42px;
          }

          .case-studies-section__filter-tabs {
            flex-wrap: wrap;
          }

          .case-studies-section__compact-grid {
            grid-template-columns: 1fr;
          }

          .case-studies-section__metrics-content {
            flex-direction: column;
            gap: var(--space-8);
          }

          .case-studies-section__bottom-metric {
            flex: 1;
          }

          .case-studies-section__bottom-metric-value {
            font-size: 42px;
          }

          .case-studies-section__detail-panel {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .case-studies-section__heading-line {
            font-size: 36px;
          }

          .case-studies-section__card-metrics {
            flex-direction: column;
            gap: var(--space-3);
          }

          .case-studies-section__metric-divider {
            display: none;
          }

          .case-studies-section__card-footer {
            flex-direction: column;
            gap: var(--space-3);
            align-items: flex-start;
          }

          .case-studies-section__compact-footer {
            flex-direction: column;
            gap: var(--space-3);
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;
