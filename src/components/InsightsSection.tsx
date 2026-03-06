import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  Newspaper, 
  Download,
  Clock,
  Calendar,
  User,
  Check,
  Mail,
  Globe,
  Building,
  Zap,
  BarChart3
} from 'lucide-react';

interface ContentItem {
  id: number;
  type: 'article' | 'case-study' | 'white-paper' | 'market-report' | 'news';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author?: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

interface PressLogo {
  id: number;
  name: string;
  initials: string;
}

const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const contentItems: ContentItem[] = [
    {
      id: 1,
      type: 'white-paper',
      title: 'The Future of Pan-African Trade: Opportunities Under the AfCFTA Framework',
      excerpt: 'Comprehensive analysis of trade opportunities emerging from the African Continental Free Trade Area implementation, with strategic recommendations for businesses looking to expand across borders.',
      date: 'March 2025',
      readTime: '12 min read',
      author: 'FEMSA Research Team',
      tags: ['Trade Policy', 'AfCFTA', 'Market Access'],
      featured: true
    },
    {
      id: 2,
      type: 'article',
      title: 'Five Strategic Priorities for African Manufacturers in 2025',
      excerpt: 'Key focus areas for manufacturing excellence including digital transformation, supply chain resilience, sustainability integration, and market expansion strategies.',
      date: 'March 15, 2025',
      readTime: '8 min read',
      author: 'Sarah Johnson',
      tags: ['Manufacturing', 'Strategy', '2025 Trends']
    },
    {
      id: 3,
      type: 'case-study',
      title: 'How Strategic Consulting Helped a Lagos SME Triple Revenue',
      excerpt: 'Deep dive into the transformation journey of a Nigerian small manufacturing enterprise that achieved 300% revenue growth through strategic operational improvements.',
      date: 'March 10, 2025',
      readTime: '6 min read',
      author: 'Michael Chen',
      tags: ['SME Growth', 'Lagos', 'Revenue Growth']
    },
    {
      id: 4,
      type: 'market-report',
      title: 'East Africa Trade Corridor: Investment Landscape Q1 2025',
      excerpt: 'Quarterly analysis of investment opportunities, infrastructure developments, and market trends across the East African trade corridor.',
      date: 'March 5, 2025',
      readTime: '10 min read',
      author: 'East Africa Research Team',
      tags: ['East Africa', 'Investment', 'Q1 2025']
    },
    {
      id: 5,
      type: 'article',
      title: 'Digital Banking Revolution: FinTech Trends Across Africa',
      excerpt: 'Exploring the rapid evolution of digital banking services and their impact on financial inclusion across African markets.',
      date: 'February 28, 2025',
      readTime: '7 min read',
      author: 'David Kimani',
      tags: ['FinTech', 'Digital Banking', 'Financial Inclusion']
    },
    {
      id: 6,
      type: 'white-paper',
      title: 'Supply Chain Resilience: Lessons from Global Disruptions',
      excerpt: 'Strategic framework for building resilient supply chains that can withstand global disruptions while maintaining operational efficiency.',
      date: 'February 20, 2025',
      readTime: '15 min read',
      author: 'Global Supply Chain Team',
      tags: ['Supply Chain', 'Resilience', 'Risk Management']
    }
  ];

  const pressLogos: PressLogo[] = [
    { id: 1, name: 'Financial Times', initials: 'FT' },
    { id: 2, name: 'Bloomberg', initials: 'BB' },
    { id: 3, name: 'Reuters', initials: 'RT' },
    { id: 4, name: 'Forbes Africa', initials: 'FA' },
    { id: 5, name: 'Business Daily', initials: 'BD' },
    { id: 6, name: 'African Business', initials: 'AB' }
  ];

  const tabs = [
    { id: 'all', label: 'All Content' },
    { id: 'articles', label: 'Articles' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'white-papers', label: 'White Papers' },
    { id: 'market-reports', label: 'Market Reports' },
    { id: 'news', label: 'News & Press' }
  ];

  const contentTypeConfig = {
    article: { color: '#032177', icon: <FileText className="w-5 h-5" />, label: 'ARTICLE' },
    'case-study': { color: '#F96419', icon: <Briefcase className="w-5 h-5" />, label: 'CASE STUDY' },
    'white-paper': { color: '#F96419', icon: <FileText className="w-5 h-5" />, label: 'WHITE PAPER' },
    'market-report': { color: '#032177', icon: <TrendingUp className="w-5 h-5" />, label: 'MARKET REPORT' },
    news: { color: '#032177', icon: <Newspaper className="w-5 h-5" />, label: 'NEWS' }
  };

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !company) return;

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribing(false);
    setIsSubscribed(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
      setName('');
      setCompany('');
    }, 3000);
  };

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const featuredItem = filteredContent.find(item => item.featured);
  const regularItems = filteredContent.filter(item => !item.featured).slice(0, 3);

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText className="w-5 h-5" />;
      case 'case-study': return <Briefcase className="w-5 h-5" />;
      case 'white-paper': return <FileText className="w-5 h-5" />;
      case 'market-report': return <TrendingUp className="w-5 h-5" />;
      case 'news': return <Newspaper className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getContentGradient = (type: string) => {
    switch (type) {
      case 'article': return 'linear-gradient(135deg, #032177, #0a3db5)';
      case 'case-study': return 'linear-gradient(135deg, #F96419, #ff8c42)';
      case 'white-paper': return 'linear-gradient(135deg, #032177, #0a3db5)';
      case 'market-report': return 'linear-gradient(135deg, #032177, #0a3db5)';
      case 'news': return 'linear-gradient(135deg, #032177, #0a3db5)';
      default: return 'linear-gradient(135deg, #032177, #0a3db5)';
    }
  };

  return (
    <section className="insights-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="insights-section__header">
          <div className="insights-section__header-left">
            <div className={`insights-section__eyebrow ${isLoaded ? 'insights-section__eyebrow--loaded' : ''}`}>
              INSIGHTS & RESOURCES
            </div>
            
            <h2 className={`insights-section__heading ${isLoaded ? 'insights-section__heading--loaded' : ''}`}>
              <span className="insights-section__heading-line">Knowledge That Drives</span>
              <span className="insights-section__heading-line">
                <span className="insights-section__heading-gradient">Smarter</span> Decisions
              </span>
            </h2>
            
            <p className={`insights-section__subtitle ${isLoaded ? 'insights-section__subtitle--loaded' : ''}`}>
              Access our latest thinking — market reports, industry analyses, case studies, and expert perspectives on the future of African business.
            </p>
          </div>
          
          <div className="insights-section__header-right">
            <button className="insights-section__hub-btn">
              Visit Insights Hub <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Type Tabs */}
        <div className={`insights-section__tabs ${isLoaded ? 'insights-section__tabs--loaded' : ''}`}>
          <div className="insights-section__tab-list">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`insights-section__tab ${activeTab === tab.id ? 'insights-section__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="insights-section__tab-description">
            Showing {activeTab === 'all' ? 'all content' : `${activeTab.replace('-', ' ')} content`}
          </div>
        </div>

        {/* Featured Insight */}
        {featuredItem && (
          <div className={`insights-section__featured ${isLoaded ? 'insights-section__featured--loaded' : ''}`}>
            <div className="insights-section__featured-content">
              {/* Left Text */}
              <div className="insights-section__featured-left">
                <div className="insights-section__featured-tags">
                  <span className="insights-section__featured-tag">FEATURED INSIGHT</span>
                  <span className="insights-section__content-type">
                    {contentTypeConfig[featuredItem.type as keyof typeof contentTypeConfig]?.label}
                  </span>
                  <span className="insights-section__featured-date">{featuredItem.date}</span>
                </div>
                
                <h3 className="insights-section__featured-title">
                  {featuredItem.title}
                </h3>
                
                <p className="insights-section__featured-excerpt">
                  {featuredItem.excerpt}
                </p>
                
                <div className="insights-section__featured-tag-row">
                  {featuredItem.tags.map((tag, idx) => (
                    <span key={idx} className="insights-section__featured-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="insights-section__featured-footer">
                  <div className="insights-section__author-info">
                    <div className="insights-section__author-avatar">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="insights-section__author-name">By {featuredItem.author}</div>
                      <div className="insights-section__read-time">
                        <Clock className="w-3 h-3" />
                        {featuredItem.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="insights-section__featured-actions">
                    <button className="insights-section__download-btn">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <a href="#" className="insights-section__read-link">
                      Read Online
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="insights-section__featured-right">
                <div className="insights-section__featured-image">
                  <div className="insights-section__image-gradient" />
                  <Globe className="insights-section__featured-icon" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="insights-section__grid">
          {regularItems.map((item, index) => (
            <div
              key={item.id}
              className={`insights-section__card ${isLoaded ? 'insights-section__card--loaded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Area */}
              <div className="insights-section__card-image">
                <div 
                  className="insights-section__card-gradient"
                  style={{ background: getContentGradient(item.type) }}
                />
                <div className="insights-section__card-tags">
                  <span className="insights-section__card-type">
                    {getContentIcon(item.type)}
                    {contentTypeConfig[item.type as keyof typeof contentTypeConfig]?.label}
                  </span>
                  <span className="insights-section__card-read-time">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="insights-section__card-body">
                <div className="insights-section__card-date">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                
                <h3 className="insights-section__card-title">
                  {item.title}
                </h3>
                
                <p className="insights-section__card-excerpt">
                  {item.excerpt}
                </p>
                
                <div className="insights-section__card-tag-row">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="insights-section__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="insights-section__card-footer">
                  <span className="insights-section__card-author">{item.author}</span>
                  <a href="#" className="insights-section__card-link">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Capture Panel */}
        <div className={`insights-section__newsletter ${isLoaded ? 'insights-section__newsletter--loaded' : ''}`}>
          <div className="insights-section__newsletter-content">
            {/* Left Side */}
            <div className="insights-section__newsletter-left">
              <div className="insights-section__newsletter-icon">
                <Mail className="w-8 h-8" />
              </div>
              
              <h3 className="insights-section__newsletter-heading">
                Get FEMSA Insights Delivered to Your Inbox
              </h3>
              
              <p className="insights-section__newsletter-subtext">
                Monthly briefings on market trends, thought leadership, and practical strategies for business growth in Africa.
              </p>
              
              <ul className="insights-section__newsletter-benefits">
                <li>
                  <Check className="w-4 h-4" />
                  Monthly market intelligence
                </li>
                <li>
                  <Check className="w-4 h-4" />
                  Exclusive case studies
                </li>
                <li>
                  <Check className="w-4 h-4" />
                  Invitations to events & webinars
                </li>
              </ul>
              
              <p className="insights-section__newsletter-privacy">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="insights-section__newsletter-right">
              {!isSubscribed ? (
                <form className="insights-section__newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="insights-section__form-input"
                    required
                  />
                  
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="insights-section__form-input"
                    required
                  />
                  
                  <input
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="insights-section__form-input"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="insights-section__subscribe-btn"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <div className="insights-section__spinner" />
                    ) : (
                      'Subscribe to Insights'
                    )}
                  </button>
                </form>
              ) : (
                <div className="insights-section__success-message">
                  <div className="insights-section__success-icon">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4>You're subscribed!</h4>
                  <p>Welcome to FEMSA Insights. Check your email for confirmation.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Press & Media Strip */}
        <div className={`insights-section__press ${isLoaded ? 'insights-section__press--loaded' : ''}`}>
          <div className="insights-section__press-label">
            FEATURED IN & ENDORSED BY
          </div>
          
          <div className="insights-section__press-logos">
            {pressLogos.map((logo) => (
              <div key={logo.id} className="insights-section__press-logo">
                <span className="insights-section__logo-text">{logo.initials}</span>
                <span className="insights-section__logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
          
          <a href="#" className="insights-section__newsroom-link">
            View Newsroom <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style>{`
        .insights-section {
          background-color: var(--color-white);
          padding: 120px 0;
        }

        /* Section Header */
        .insights-section__header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-8);
          align-items: start;
          margin-bottom: var(--space-12);
        }

        .insights-section__eyebrow {
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

        .insights-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .insights-section__heading {
          margin-bottom: var(--space-6);
        }

        .insights-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 52px;
          line-height: 1.1;
          color: var(--color-near-black);
          opacity: 0;
          transform: translateY(30px);
        }

        .insights-section__heading-gradient {
          background: linear-gradient(135deg, var(--color-secondary), #ff8c42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .insights-section__heading--loaded .insights-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .insights-section__heading--loaded .insights-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .insights-section__subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-medium-gray);
          max-width: 520px;
          opacity: 0;
          transform: translateY(20px);
        }

        .insights-section__subtitle--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        .insights-section__hub-btn {
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
          display: flex;
          align-items: center;
          gap: var(--space-2);
          white-space: nowrap;
        }

        .insights-section__hub-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
        }

        /* Content Type Tabs */
        .insights-section__tabs {
          margin-bottom: var(--space-12);
          opacity: 0;
          transform: translateY(20px);
        }

        .insights-section__tabs--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;
        }

        .insights-section__tab-list {
          display: flex;
          gap: var(--space-3);
          overflow-x: auto;
          padding-bottom: var(--space-2);
        }

        .insights-section__tab {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-medium-gray);
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-5);
          cursor: pointer;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .insights-section__tab:hover {
          background: #F0F4FF;
          color: var(--color-primary);
        }

        .insights-section__tab--active {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
        }

        .insights-section__tab-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          margin-top: var(--space-3);
        }

        /* Featured Insight */
        .insights-section__featured {
          background: var(--color-primary);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: var(--space-16);
          opacity: 0;
          transform: translateY(30px);
        }

        .insights-section__featured--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;
        }

        .insights-section__featured-content {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 0;
        }

        .insights-section__featured-left {
          padding: var(--space-14);
          color: var(--color-white);
        }

        .insights-section__featured-tags {
          display: flex;
          gap: var(--space-3);
          align-items: center;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
        }

        .insights-section__featured-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-white);
          background: var(--color-secondary);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .insights-section__content-type {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-secondary);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .insights-section__featured-date {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .insights-section__featured-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: var(--space-6);
        }

        .insights-section__featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: var(--space-6);
        }

        .insights-section__featured-tag-row {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-8);
          flex-wrap: wrap;
        }

        .insights-section__featured-tag-pill {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--color-white);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
        }

        .insights-section__featured-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-6);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .insights-section__author-info {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .insights-section__author-avatar {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insights-section__author-name {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
        }

        .insights-section__read-time {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: var(--space-1);
          margin-top: var(--space-1);
        }

        .insights-section__featured-actions {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .insights-section__download-btn {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-white);
          background: var(--color-secondary);
          border: none;
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-lg);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          transition: all var(--transition-base);
        }

        .insights-section__download-btn:hover {
          background: #ff8c42;
          transform: translateY(-2px);
        }

        .insights-section__read-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-white);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .insights-section__read-link:hover {
          color: var(--color-secondary);
        }

        .insights-section__featured-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insights-section__featured-image {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insights-section__image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(3, 33, 119, 0.1), rgba(10, 61, 181, 0.1));
        }

        .insights-section__featured-icon {
          width: 160px;
          height: 160px;
          color: rgba(255, 255, 255, 0.08);
        }

        /* Articles Grid */
        .insights-section__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-bottom: var(--space-16);
        }

        .insights-section__card {
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: 16px;
          overflow: hidden;
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(30px);
        }

        .insights-section__card--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .insights-section__card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .insights-section__card:hover .insights-section__card-title {
          color: var(--color-primary);
        }

        .insights-section__card-image {
          height: 180px;
          position: relative;
          overflow: hidden;
        }

        .insights-section__card-gradient {
          position: absolute;
          inset: 0;
        }

        .insights-section__card-tags {
          position: absolute;
          top: var(--space-3);
          left: var(--space-3);
          right: var(--space-3);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .insights-section__card-type {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-white);
          background: rgba(0, 0, 0, 0.3);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .insights-section__card-read-time {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--color-white);
          background: rgba(0, 0, 0, 0.3);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .insights-section__card-body {
          padding: var(--space-6);
        }

        .insights-section__card-date {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--color-medium-gray);
          display: flex;
          align-items: center;
          gap: var(--space-1);
          margin-bottom: var(--space-3);
        }

        .insights-section__card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-near-black);
          line-height: 1.3;
          margin-bottom: var(--space-3);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color var(--transition-base);
        }

        .insights-section__card-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-medium-gray);
          line-height: 1.6;
          margin-bottom: var(--space-4);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .insights-section__card-tag-row {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
        }

        .insights-section__card-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--color-medium-gray);
          background: var(--color-light-gray);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
        }

        .insights-section__card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-light-gray);
        }

        .insights-section__card-author {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
        }

        .insights-section__card-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: var(--space-1);
          transition: gap var(--transition-base);
        }

        .insights-section__card-link:hover {
          gap: var(--space-2);
        }

        /* Newsletter Capture Panel */
        .insights-section__newsletter {
          background: #F0F4FF;
          border: 1px solid rgba(3, 33, 119, 0.1);
          border-radius: 20px;
          padding: var(--space-14) var(--space-16);
          margin-bottom: var(--space-16);
          opacity: 0;
          transform: translateY(30px);
        }

        .insights-section__newsletter--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
        }

        .insights-section__newsletter-content {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: var(--space-12);
          align-items: center;
        }

        .insights-section__newsletter-left {
          color: var(--color-primary);
        }

        .insights-section__newsletter-icon {
          width: 64px;
          height: 64px;
          background: var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          margin-bottom: var(--space-6);
        }

        .insights-section__newsletter-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: var(--space-4);
          line-height: 1.2;
        }

        .insights-section__newsletter-subtext {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: var(--color-medium-gray);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }

        .insights-section__newsletter-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--space-6);
        }

        .insights-section__newsletter-benefits li {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--color-near-black);
          margin-bottom: var(--space-3);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .insights-section__newsletter-benefits li .w-4.h-4 {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .insights-section__newsletter-privacy {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--color-medium-gray);
        }

        .insights-section__newsletter-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insights-section__newsletter-form {
          width: 100%;
          max-width: 400px;
        }

        .insights-section__form-input {
          width: 100%;
          height: 52px;
          border: 1px solid #D1D5DB;
          border-radius: 10px;
          padding: 0 var(--space-4);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          margin-bottom: var(--space-4);
          transition: border-color var(--transition-base);
        }

        .insights-section__form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .insights-section__subscribe-btn {
          width: 100%;
          height: 52px;
          background: var(--color-secondary);
          color: var(--color-white);
          border: none;
          border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insights-section__subscribe-btn:hover:not(:disabled) {
          background: #ff8c42;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249, 100, 25, 0.3);
        }

        .insights-section__subscribe-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .insights-section__spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--color-white);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .insights-section__success-message {
          text-align: center;
          color: var(--color-primary);
        }

        .insights-section__success-icon {
          width: 64px;
          height: 64px;
          background: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          margin: 0 auto var(--space-4);
          animation: scaleIn 0.5s ease;
        }

        @keyframes scaleIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .insights-section__success-message h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .insights-section__success-message p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--color-medium-gray);
        }

        /* Press & Media Strip */
        .insights-section__press {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
        }

        .insights-section__press--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s;
        }

        .insights-section__press-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-medium-gray);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: var(--space-6);
        }

        .insights-section__press-logos {
          display: flex;
          justify-content: center;
          gap: var(--space-8);
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
        }

        .insights-section__press-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          transition: all var(--transition-base);
          filter: grayscale(100%);
          opacity: 0.5;
        }

        .insights-section__press-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: translateY(-2px);
        }

        .insights-section__logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--color-near-black);
        }

        .insights-section__logo-name {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--color-medium-gray);
        }

        .insights-section__newsroom-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          transition: gap var(--transition-base);
        }

        .insights-section__newsroom-link:hover {
          gap: var(--space-3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .insights-section__header {
            grid-template-columns: 1fr;
            gap: var(--space-6);
            text-align: center;
          }

          .insights-section__header-right {
            justify-content: center;
          }

          .insights-section__featured-content {
            grid-template-columns: 1fr;
          }

          .insights-section__featured-left {
            padding: var(--space-8);
          }

          .insights-section__featured-right {
            height: 300px;
          }

          .insights-section__grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .insights-section__newsletter-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .insights-section__press-logos {
            gap: var(--space-4);
          }
        }

        @media (max-width: 768px) {
          .insights-section {
            padding: var(--space-20) 0;
          }

          .insights-section__heading-line {
            font-size: 42px;
          }

          .insights-section__tab-list {
            flex-wrap: wrap;
          }

          .insights-section__grid {
            grid-template-columns: 1fr;
          }

          .insights-section__featured-title {
            font-size: 28px;
          }

          .insights-section__newsletter {
            padding: var(--space-8);
          }

          .insights-section__newsletter-heading {
            font-size: 24px;
          }

          .insights-section__press-logos {
            gap: var(--space-3);
          }
        }

        @media (max-width: 640px) {
          .insights-section__heading-line {
            font-size: 36px;
          }

          .insights-section__featured-tags {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-2);
          }

          .insights-section__featured-footer {
            flex-direction: column;
            gap: var(--space-4);
            align-items: flex-start;
          }

          .insights-section__featured-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
};

export default InsightsSection;
