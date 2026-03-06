import React, { useEffect, useState } from 'react';

const SocialProof: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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

    const element = document.querySelector('.social-proof');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const clientLogos = [
    'Coca-Cola',
    'Uber', 
    'Vodacom',
    'Shell',
    'Standard Bank',
    'SABMiller',
    'MTN',
    'Lafarge',
    // Duplicate for seamless loop
    'Coca-Cola',
    'Uber',
    'Vodacom',
    'Shell',
    'Standard Bank',
    'SABMiller',
    'MTN',
    'Lafarge'
  ];

  return (
    <section className="social-proof">
      <div className="container">
        <div className="social-proof__content">
          {/* Left Text */}
          <div className={`social-proof__text ${isLoaded ? 'social-proof__text--loaded' : ''}`}>
            <div className="social-proof__line" />
            <span>Trusted by industry leaders across Africa</span>
          </div>

          {/* Right Marquee */}
          <div className="social-proof__marquee">
            <div className="social-proof__marquee-track">
              {clientLogos.map((logo, index) => (
                <div key={index} className="social-proof__logo">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .social-proof {
          background-color: var(--color-off-white);
          border-top: 1px solid var(--color-light-gray);
          border-bottom: 1px solid var(--color-light-gray);
          height: 80px;
          overflow: hidden;
        }

        .social-proof__content {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .social-proof__text {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          width: 30%;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-medium-gray);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .social-proof__text--loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .social-proof__line {
          width: 3px;
          height: 28px;
          background-color: var(--color-primary);
          flex-shrink: 0;
        }

        .social-proof__marquee {
          width: 70%;
          overflow: hidden;
          position: relative;
        }

        .social-proof__marquee-track {
          display: flex;
          animation: marquee 35s linear infinite;
          width: fit-content;
        }

        .social-proof__marquee:hover .social-proof__marquee-track {
          animation-play-state: paused;
        }

        .social-proof__logo {
          width: 120px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--color-dark-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 var(--space-4);
          filter: grayscale(100%) opacity(0.5);
          transition: all 300ms ease;
          cursor: default;
          user-select: none;
        }

        .social-proof__logo:hover {
          filter: grayscale(0%) opacity(1);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .social-proof__content {
            flex-direction: column;
            justify-content: center;
            gap: var(--space-4);
          }

          .social-proof__text {
            width: 100%;
            justify-content: center;
            font-size: 13px;
          }

          .social-proof__marquee {
            width: 100%;
          }

          .social-proof__logo {
            width: 100px;
            font-size: 14px;
          }
        }

        @media (max-width: 640px) {
          .social-proof {
            height: auto;
            padding: var(--space-4) 0;
          }

          .social-proof__logo {
            width: 80px;
            font-size: 12px;
            padding: 0 var(--space-2);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
