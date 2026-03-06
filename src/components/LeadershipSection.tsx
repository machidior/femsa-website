import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Users, Building, Globe, Briefcase } from 'lucide-react';

interface Leader {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  initials: string;
}

const LeadershipSection: React.FC = () => {
  const [hoveredLeader, setHoveredLeader] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const leaders: Leader[] = [
    {
      id: 1,
      name: 'Michael Thompson',
      title: 'Chief Executive Officer',
      role: 'CEO',
      bio: 'Visionary leader with 15+ years in enterprise transformation and pan-African business development.',
      expertise: ['Strategy', 'Business Development', 'Leadership'],
      initials: 'MT'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Chief Operating Officer',
      role: 'COO',
      bio: 'Operations specialist with deep expertise in supply chain, logistics, and process optimization.',
      expertise: ['Operations', 'Supply Chain', 'Process Optimization'],
      initials: 'SJ'
    },
    {
      id: 3,
      name: 'David Chen',
      title: 'Chief Financial Officer',
      role: 'CFO',
      bio: 'Financial strategist with a track record of scaling businesses from Series A to enterprise level.',
      expertise: ['Finance', 'Strategy', 'Scaling'],
      initials: 'DC'
    },
    {
      id: 4,
      name: 'Amara Okonkwo',
      title: 'Director of Global Trade',
      role: 'Director',
      bio: 'International trade expert with operations across 15 African and European markets.',
      expertise: ['Global Trade', 'International Markets', 'Trade Policy'],
      initials: 'AO'
    }
  ];

  const teamStats = [
    { label: '50+ Staff', icon: <Users className="w-4 h-4" /> },
    { label: '5 Offices', icon: <Building className="w-4 h-4" /> },
    { label: '12 Nationalities', icon: <Globe className="w-4 h-4" /> },
    { label: '8 Departments', icon: <Briefcase className="w-4 h-4" /> }
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
    <section className="leadership-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="leadership-section__header">
          <div className={`leadership-section__eyebrow ${isLoaded ? 'leadership-section__eyebrow--loaded' : ''}`}>
            OUR PEOPLE
          </div>
          
          <h2 className={`leadership-section__heading ${isLoaded ? 'leadership-section__heading--loaded' : ''}`}>
            <span className="leadership-section__heading-line">Led by <span className="leadership-section__heading-blue">Experts</span>,</span>
            <span className="leadership-section__heading-line">Driven by <span className="leadership-section__heading-orange">Purpose</span></span>
          </h2>
          
          <p className={`leadership-section__subtitle ${isLoaded ? 'leadership-section__subtitle--loaded' : ''}`}>
            Our leadership team brings decades of combined experience across finance, trade, operations, and strategic consulting.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="leadership-section__grid">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className={`leadership-section__card ${isLoaded ? 'leadership-section__card--loaded' : ''} ${hoveredLeader === leader.id ? 'leadership-section__card--hovered' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredLeader(leader.id)}
              onMouseLeave={() => setHoveredLeader(null)}
            >
              {/* Image Container */}
              <div className="leadership-section__image-container">
                <div className="leadership-section__image-gradient" />
                <div className="leadership-section__initials">{leader.initials}</div>
                
                {/* Overlay Text */}
                <div className={`leadership-section__overlay ${hoveredLeader === leader.id ? 'leadership-section__overlay--visible' : ''}`}>
                  <div className="leadership-section__overlay-name">{leader.name}</div>
                  <div className="leadership-section__overlay-title">{leader.title}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="leadership-section__card-content">
                <h3 className="leadership-section__leader-name">{leader.name}</h3>
                
                <div className="leadership-section__leader-title">{leader.title}</div>
                
                <div className={`leadership-section__leader-bio ${hoveredLeader === leader.id ? 'leadership-section__leader-bio--visible' : ''}`}>
                  {leader.bio}
                </div>
                
                <div className={`leadership-section__social-links ${hoveredLeader === leader.id ? 'leadership-section__social-links--visible' : ''}`}>
                  <a href="#" className="leadership-section__social-link">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="leadership-section__social-link">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="leadership-section__expertise-tags">
                  {leader.expertise.map((tag, idx) => (
                    <span key={idx} className="leadership-section__expertise-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats Strip */}
        <div className={`leadership-section__team-strip ${isLoaded ? 'leadership-section__team-strip--loaded' : ''}`}>
          <div className="leadership-section__team-content">
            <div className="leadership-section__team-left">
              A team of 50+ professionals across 5 offices
            </div>
            
            <div className="leadership-section__team-stats">
              {teamStats.map((stat, index) => (
                <div key={index} className="leadership-section__team-stat">
                  {stat.icon}
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="leadership-section__team-right">
              <button className="leadership-section__join-btn">
                Join Our Team →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-section {
          background-color: var(--color-white);
          padding: 120px 0;
        }

        /* Section Header */
        .leadership-section__header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .leadership-section__eyebrow {
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

        .leadership-section__eyebrow--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .leadership-section__heading {
          margin-bottom: var(--space-6);
        }

        .leadership-section__heading-line {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 52px;
          line-height: 1.1;
          color: var(--color-near-black);
          opacity: 0;
          transform: translateY(30px);
        }

        .leadership-section__heading-blue {
          color: var(--color-primary);
        }

        .leadership-section__heading-orange {
          color: var(--color-secondary);
        }

        .leadership-section__heading--loaded .leadership-section__heading-line:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }

        .leadership-section__heading--loaded .leadership-section__heading-line:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .leadership-section__subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: var(--color-medium-gray);
          max-width: 500px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
        }

        .leadership-section__subtitle--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        /* Leadership Cards Grid */
        .leadership-section__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-7);
          margin-bottom: var(--space-16);
        }

        .leadership-section__card {
          background: var(--color-white);
          border: 1px solid var(--color-light-gray);
          border-radius: 16px;
          overflow: hidden;
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(30px);
        }

        .leadership-section__card--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .leadership-section__card--hovered {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-lg);
        }

        /* Image Container */
        .leadership-section__image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 16px;
        }

        .leadership-section__image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-primary), #0a3db5);
          transition: transform var(--transition-base);
        }

        .leadership-section__card--hovered .leadership-section__image-gradient {
          transform: scale(1.05);
        }

        .leadership-section__initials {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: var(--color-white);
          z-index: 1;
        }

        .leadership-section__overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent 50%, rgba(3, 33, 119, 0.85) 100%);
          padding: var(--space-6);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-base);
        }

        .leadership-section__overlay--visible {
          opacity: 1;
          visibility: visible;
        }

        .leadership-section__overlay-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: var(--space-1);
        }

        .leadership-section__overlay-title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-secondary);
        }

        /* Card Content */
        .leadership-section__card-content {
          padding: var(--space-6);
        }

        .leadership-section__leader-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--color-near-black);
          margin-bottom: var(--space-2);
        }

        .leadership-section__leader-title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--color-secondary);
          margin-bottom: var(--space-3);
        }

        .leadership-section__leader-bio {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--color-medium-gray);
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
          margin-bottom: var(--space-4);
        }

        .leadership-section__leader-bio--visible {
          max-height: 60px;
        }

        .leadership-section__social-links {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-base);
        }

        .leadership-section__social-links--visible {
          opacity: 1;
          visibility: visible;
        }

        .leadership-section__social-link {
          width: 28px;
          height: 28px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          text-decoration: none;
          transition: all var(--transition-base);
        }

        .leadership-section__social-link:hover {
          background: #0a3db5;
          transform: translateY(-2px);
        }

        .leadership-section__expertise-tags {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .leadership-section__expertise-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--color-medium-gray);
          background: var(--color-light-gray);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
        }

        /* Team Stats Strip */
        .leadership-section__team-strip {
          background: #F0F4FF;
          padding: var(--space-10) 0;
          opacity: 0;
          transform: translateY(30px);
        }

        .leadership-section__team-strip--loaded {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
        }

        .leadership-section__team-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-6);
        }

        .leadership-section__team-left {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .leadership-section__team-stats {
          display: flex;
          gap: var(--space-6);
        }

        .leadership-section__team-stat {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-near-black);
        }

        .leadership-section__team-stat .w-4.h-4 {
          color: var(--color-secondary);
        }

        .leadership-section__team-right {
          flex-shrink: 0;
        }

        .leadership-section__join-btn {
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

        .leadership-section__join-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .leadership-section__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .leadership-section__team-content {
            flex-direction: column;
            gap: var(--space-4);
            text-align: center;
          }

          .leadership-section__team-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .leadership-section {
            padding: var(--space-20) 0;
          }

          .leadership-section__heading-line {
            font-size: 42px;
          }

          .leadership-section__grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .leadership-section__team-stats {
            flex-wrap: wrap;
            gap: var(--space-4);
          }

          .leadership-section__team-strip {
            padding: var(--space-8) 0;
          }
        }

        @media (max-width: 640px) {
          .leadership-section__heading-line {
            font-size: 36px;
          }

          .leadership-section__card-content {
            padding: var(--space-4);
          }

          .leadership-section__expertise-tags {
            gap: var(--space-1);
          }

          .leadership-section__team-left {
            font-size: 18px;
          }

          .leadership-section__team-stats {
            gap: var(--space-3);
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;
