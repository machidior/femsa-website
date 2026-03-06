import React, { useState, useEffect } from 'react';
import femsaGroupLogo from "../../resourses/femsa group (png)-10_1 1.png";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after fade out
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`page-loader ${fadeOut ? 'page-loader--fade-out' : ''}`}>
      <div className="page-loader__logo">
        <img 
          src={femsaGroupLogo} 
          alt="FEMSA Group" 
          className="page-loader__logo-image"
        />
        <div className="page-loader__aura"></div>
        <div className="page-loader__spinner">
          <div className="page-loader__spinner-segment page-loader__spinner-segment--1"></div>
          <div className="page-loader__spinner-segment page-loader__spinner-segment--2"></div>
          <div className="page-loader__spinner-segment page-loader__spinner-segment--3"></div>
          <div className="page-loader__spinner-segment page-loader__spinner-segment--4"></div>
        </div>
      </div>

      <style>{`
        .page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s ease-out;
        }

        .page-loader--fade-out {
          opacity: 0;
        }

        .page-loader__logo {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-loader__logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: logoGlow 2s ease-in-out infinite;
        }

        .page-loader__aura {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 280px;
          margin: -140px 0 0 -140px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: auraPulse 2s ease-in-out infinite;
        }

        .page-loader__spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          margin: -160px 0 0 -160px;
          animation: spinnerRotate 3s linear infinite;
        }

        .page-loader__spinner-segment {
          position: absolute;
          top: 0;
          left: 50%;
          width: 40px;
          height: 8px;
          margin-left: -20px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          border-radius: 4px;
          transform-origin: center 160px;
        }

        .page-loader__spinner-segment--1 {
          animation: segmentFade 3s ease-in-out infinite;
        }

        .page-loader__spinner-segment--2 {
          transform: rotate(90deg);
          animation: segmentFade 3s ease-in-out infinite 0.75s;
        }

        .page-loader__spinner-segment--3 {
          transform: rotate(180deg);
          animation: segmentFade 3s ease-in-out infinite 1.5s;
        }

        .page-loader__spinner-segment--4 {
          transform: rotate(270deg);
          animation: segmentFade 3s ease-in-out infinite 2.25s;
        }

        @keyframes logoGlow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
          }
          50% {
            filter: brightness(1.1) drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
          }
        }

        @keyframes auraPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes spinnerRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes segmentFade {
          0%, 100% {
            opacity: 0.2;
            transform: scaleX(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (max-width: 768px) {
          .page-loader__logo {
            width: 200px;
            height: 200px;
          }

          .page-loader__aura {
            width: 180px;
            height: 180px;
            margin: -90px 0 0 -90px;
          }

          .page-loader__spinner {
            width: 220px;
            height: 220px;
            margin: -110px 0 0 -110px;
          }

          .page-loader__spinner-segment {
            width: 30px;
            height: 6px;
            margin-left: -15px;
            transform-origin: center 110px;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
