import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 100);

    // Complete loading after delay
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      // Add loaded class to body for initial animations
      document.body.classList.add('loaded');
    }, 1500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="page-loader__content">
        {/* FEMSA GROUP Wordmark */}
        <div className="page-loader__logo">
          <div className="page-loader__wordmark">
            <span className="page-loader__femsa">FEMSA</span>
            <span className="page-loader__group">GROUP</span>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="page-loader__progress">
          <div 
            className="page-loader__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="page-loader__text">Loading...</div>
      </div>

      <style>{`
        .page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: var(--z-modal);
          opacity: 1;
          transition: opacity 600ms ease-out;
        }

        .page-loader__content {
          text-align: center;
          transform: translateY(0);
          transition: transform 600ms ease-out 600ms;
        }

        .page-loader__logo {
          margin-bottom: var(--space-8);
        }

        .page-loader__wordmark {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          color: var(--color-white);
          margin-bottom: var(--space-6);
        }

        .page-loader__femsa {
          display: block;
          font-size: var(--text-4xl);
          line-height: var(--line-height-tight);
          margin-bottom: var(--space-1);
        }

        .page-loader__group {
          display: block;
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--color-secondary);
          letter-spacing: var(--letter-spacing-wider);
          text-transform: uppercase;
        }

        .page-loader__progress {
          width: 256px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin: 0 auto var(--space-6);
        }

        .page-loader__progress-bar {
          height: 100%;
          background-color: var(--color-secondary);
          border-radius: var(--radius-full);
          transition: width 1000ms ease-out;
        }

        .page-loader__text {
          font-family: 'Inter', sans-serif;
          font-size: var(--text-sm);
          color: var(--color-white);
          opacity: 0.8;
        }

        /* Exit animation */
        body.loaded .page-loader {
          opacity: 0;
        }

        body.loaded .page-loader__content {
          transform: translateY(-20px);
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
