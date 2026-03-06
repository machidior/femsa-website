import React, { useEffect, useRef, useState } from 'react';
import { X, Send, MessageCircle, Cookie, Check, AlertCircle, Info } from 'lucide-react';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const GlobalEnhancements: React.FC = () => {
  const [cursorDot, setCursorDot] = useState({ x: 0, y: 0 });
  const [cursorRing, setCursorRing] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm here to help. Ask me anything about FEMSA Group's services.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    analytics: true,
    marketing: true,
    functional: true
  });
  const [showCookieModal, setShowCookieModal] = useState(false);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const toastIdRef = useRef(0);

  // Check if device supports touch
  const isTouchDevice = () => navigator.maxTouchPoints > 0;

  // Custom cursor system
  useEffect(() => {
    if (isTouchDevice()) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setCursorDot({ x, y });
      setCursorRing({ x, y });
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Cursor hover states
  useEffect(() => {
    if (isTouchDevice()) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('card-base')) {
        setIsHovering(true);
        setIsTextHovering(false);
      } else if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'P') {
        setIsTextHovering(true);
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsTextHovering(false);
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cookie consent check
  useEffect(() => {
    const hasAccepted = localStorage.getItem('femsa_cookies_accepted');
    if (!hasAccepted) {
      setTimeout(() => setShowCookieBanner(true), 1500);
    }
  }, []);

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const direction = element.dataset.reveal || 'up';
            const delay = parseFloat(element.dataset.delay || '0');
            
            setTimeout(() => {
              element.classList.remove('reveal-hidden');
              element.classList.add('reveal-visible');
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-60px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Parallax scrolling
  useEffect(() => {
    const handleParallaxScroll = () => {
      const scrolled = window.scrollY;
      
      // Hero background
      const heroBg = document.querySelector('.hero__background');
      if (heroBg) {
        (heroBg as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      
      // Hero text
      const heroText = document.querySelector('.hero__content');
      if (heroText) {
        (heroText as HTMLElement).style.transform = `translateY(${scrolled * 0.1}px)`;
      }
      
      // Floating cards
      const floatingCards = document.querySelectorAll('.floating-card');
      floatingCards.forEach(card => {
        (card as HTMLElement).style.transform = `translateY(${-scrolled * 0.08}px)`;
      });
    };

    window.addEventListener('scroll', handleParallaxScroll);
    return () => window.removeEventListener('scroll', handleParallaxScroll);
  }, []);

  // Toast system
  const addToast = (type: Toast['type'], message: string, duration = 4000) => {
    const id = `toast-${toastIdRef.current++}`;
    const toast: Toast = { id, type, message, duration };
    
    setToasts(prev => [...prev, toast]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    
    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Chat functions
  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simulate agent response
    setTimeout(() => {
      const agentMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        text: "Thank you for your message! Our team will get back to you shortly.",
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, agentMessage]);
    }, 1000);
  };

  // Cookie functions
  const acceptAllCookies = () => {
    localStorage.setItem('femsa_cookies_accepted', 'all');
    setShowCookieBanner(false);
    addToast('success', 'Cookie preferences saved');
  };

  const rejectNonEssential = () => {
    localStorage.setItem('femsa_cookies_accepted', 'essential');
    setCookiePreferences({ analytics: false, marketing: false, functional: true });
    setShowCookieBanner(false);
    addToast('info', 'Only essential cookies accepted');
  };

  const saveCookiePreferences = () => {
    localStorage.setItem('femsa_cookies_accepted', 'custom');
    localStorage.setItem('femsa_cookie_prefs', JSON.stringify(cookiePreferences));
    setShowCookieBanner(false);
    setShowCookieModal(false);
    addToast('success', 'Cookie preferences saved');
  };

  // Magnetic button effect
  useEffect(() => {
    if (isTouchDevice()) return;

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    const handleMouseMove = (e: MouseEvent) => {
      const button = e.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / 4;
      const deltaY = (e.clientY - centerY) / 4;
      
      const maxOffset = 8;
      const offsetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      const offsetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));
      
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const button = e.currentTarget as HTMLElement;
      button.style.transform = '';
    };

    buttons.forEach(button => {
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Ripple effect for buttons
  useEffect(() => {
    const createRipple = (e: MouseEvent) => {
      const button = e.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    };

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
      button.addEventListener('click', createRipple);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', createRipple);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor - Temporarily Disabled */}
      {/* {!isTouchDevice() && (
        <>
          <div
            ref={cursorDotRef}
            className="cursor-dot"
            style={{
              left: `${cursorDot.x}px`,
              top: `${cursorDot.y}px`,
              transform: `translate(-50%, -50%) ${isPressed ? 'scale(1.5)' : isTextHovering ? 'scale(0.5, 2)' : isHovering ? 'scale(0.5)' : 'scale(1)'}`
            }}
          />
          <div
            ref={cursorRingRef}
            className="cursor-ring"
            style={{
              left: `${cursorRing.x}px`,
              top: `${cursorRing.y}px`,
              transform: `translate(-50%, -50%) ${isPressed ? 'scale(0.78)' : isTextHovering ? 'scale(0)' : isHovering ? 'scale(1.44)' : 'scale(1)'}`
            }}
          />
        </>
      )} */}

      {/* Scroll Progress Indicator */}
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            <div className="toast__content">
              {toast.type === 'success' && <Check className="w-5 h-5" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5" />}
              {toast.type === 'info' && <Info className="w-5 h-5" />}
              <span>{toast.message}</span>
            </div>
            <button onClick={() => removeToast(toast.id)} className="toast__close">
              <X className="w-4 h-4" />
            </button>
            {toast.duration && toast.duration > 0 && (
              <div className="toast__progress" style={{ animationDuration: `${toast.duration}ms` }} />
            )}
          </div>
        ))}
      </div>

      {/* Live Chat Widget */}
      <div className="chat-widget">
        {/* Chat Bubble */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="chat-bubble"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="chat-bubble__badge">1</span>
            <span className="chat-bubble__tooltip">Chat with us</span>
          </button>
        )}

        {/* Chat Panel */}
        {isChatOpen && (
          <div ref={chatPanelRef} className="chat-panel">
            <div className="chat-panel__header">
              <div className="chat-panel__logo">
                <span className="chat-panel__logo-text">FEMSA</span>
                <span className="chat-panel__logo-sub">Support</span>
              </div>
              <div className="chat-panel__status">
                <div className="chat-panel__status-dot" />
                <span>Online</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="chat-panel__close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="chat-panel__messages">
              {chatMessages.map(message => (
                <div
                  key={message.id}
                  className={`chat-message ${message.isUser ? 'chat-message--user' : 'chat-message--agent'}`}
                >
                  <div className="chat-message__bubble">
                    {message.text}
                  </div>
                  <div className="chat-message__time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chat-panel__input">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Type a message..."
                className="chat-panel__input-field"
              />
              <button
                onClick={sendChatMessage}
                className="chat-panel__send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-banner__content">
            <div className="cookie-banner__header">
              <Cookie className="w-5 h-5" />
              <span>Cookie Preferences</span>
            </div>
            <p className="cookie-banner__text">
              We use cookies to enhance your experience, analyze traffic, and personalize content. 
              <a href="#" className="cookie-banner__link">Privacy Policy</a>
            </p>
            <div className="cookie-banner__buttons">
              <button onClick={acceptAllCookies} className="btn-primary btn-primary--small">
                Accept All
              </button>
              <button onClick={() => setShowCookieModal(true)} className="btn-ghost">
                Manage Preferences
              </button>
              <button onClick={rejectNonEssential} className="btn-ghost btn-ghost--gray">
                Reject Non-Essential
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showCookieModal && (
        <div className="cookie-modal">
          <div className="cookie-modal__content">
            <div className="cookie-modal__header">
              <h3>Cookie Preferences</h3>
              <button onClick={() => setShowCookieModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="cookie-modal__options">
              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={cookiePreferences.functional}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, functional: e.target.checked }))}
                  disabled
                />
                <span className="cookie-option__label">
                  <span className="cookie-option__title">Essential Cookies</span>
                  <span className="cookie-option__description">Required for the site to function</span>
                </span>
              </label>
              
              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                />
                <span className="cookie-option__label">
                  <span className="cookie-option__title">Analytics Cookies</span>
                  <span className="cookie-option__description">Help us improve our website</span>
                </span>
              </label>
              
              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                />
                <span className="cookie-option__label">
                  <span className="cookie-option__title">Marketing Cookies</span>
                  <span className="cookie-option__description">Used for advertising personalization</span>
                </span>
              </label>
            </div>
            
            <div className="cookie-modal__buttons">
              <button onClick={saveCookiePreferences} className="btn-primary">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Custom Cursor */
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: var(--color-secondary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 80ms linear;
        }

        .cursor-ring {
          position: fixed;
          width: 36px;
          height: 36px;
          border: 2px solid rgba(249, 100, 25, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;
        }

        /* Scroll Progress */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--color-secondary);
          z-index: 9000;
          transition: width 50ms linear;
        }

        /* Toast Notifications */
        .toast-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .toast {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-radius: 10px;
          box-shadow: var(--shadow-lg);
          max-width: 320px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: white;
          position: relative;
          overflow: hidden;
          animation: slideInRight 300ms ease;
        }

        .toast--success {
          background: #10b981;
        }

        .toast--error {
          background: #ef4444;
        }

        .toast--info {
          background: var(--color-primary);
        }

        .toast__content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .toast__close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .toast__progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          animation: progressShrink linear;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes progressShrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        /* Chat Widget */
        .chat-widget {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 500;
        }

        .chat-bubble {
          position: relative;
          width: 60px;
          height: 60px;
          background: var(--color-secondary);
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-orange);
          transition: transform 0.2s ease;
          animation: pulse 2s infinite ease-in-out;
        }

        .chat-bubble:hover {
          transform: scale(1.08);
        }

        .chat-bubble__badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
        }

        .chat-bubble__tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          color: var(--color-primary);
          padding: 6px 12px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }

        .chat-bubble:hover .chat-bubble__tooltip {
          opacity: 1;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .chat-panel {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 360px;
          height: 480px;
          background: white;
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          animation: scaleIn 300ms ease;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .chat-panel__header {
          background: var(--color-primary);
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          color: white;
        }

        .chat-panel__logo {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .chat-panel__logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 16px;
        }

        .chat-panel__logo-sub {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 12px;
          color: var(--color-secondary);
        }

        .chat-panel__status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
        }

        .chat-panel__status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }

        .chat-panel__close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0;
        }

        .chat-panel__messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chat-message {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chat-message--user {
          align-items: flex-end;
        }

        .chat-message--agent {
          align-items: flex-start;
        }

        .chat-message__bubble {
          max-width: 240px;
          padding: 12px 16px;
          border-radius: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.4;
        }

        .chat-message--agent .chat-message__bubble {
          background: #f0f4ff;
          color: var(--color-primary);
          border-radius: 16px 16px 16px 4px;
        }

        .chat-message--user .chat-message__bubble {
          background: var(--color-primary);
          color: white;
          border-radius: 16px 16px 4px 16px;
        }

        .chat-message__time {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #8892a4;
        }

        .chat-panel__input {
          border-top: 1px solid #eef0f6;
          padding: 12px 16px;
          display: flex;
          gap: 8px;
        }

        .chat-panel__input-field {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
        }

        .chat-panel__send {
          width: 32px;
          height: 32px;
          background: var(--color-secondary);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Cookie Banner */
        .cookie-banner {
          position: fixed;
          bottom: 24px;
          left: 24px;
          max-width: 560px;
          background: white;
          border-radius: 16px;
          padding: 24px 32px;
          box-shadow: var(--shadow-xl);
          z-index: 400;
          animation: slideUp 500ms ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .cookie-banner__content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cookie-banner__header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .cookie-banner__text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #4a5568;
          line-height: 1.5;
        }

        .cookie-banner__link {
          color: var(--color-secondary);
          text-decoration: none;
        }

        .cookie-banner__buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Cookie Modal */
        .cookie-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .cookie-modal__content {
          background: white;
          border-radius: 16px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
        }

        .cookie-modal__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .cookie-modal__header h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .cookie-modal__options {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .cookie-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
        }

        .cookie-option input[type="checkbox"] {
          margin-top: 2px;
        }

        .cookie-option__label {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cookie-option__title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .cookie-option__description {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #8892a4;
        }

        .cookie-modal__buttons {
          display: flex;
          justify-content: flex-end;
        }

        /* Ripple Effect */
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: rippleEffect 500ms ease-out;
          pointer-events: none;
        }

        @keyframes rippleEffect {
          to {
            transform: scale(3);
            opacity: 0;
          }
        }

        /* Reveal Animations */
        .reveal-hidden {
          opacity: 0;
        }

        .reveal-hidden[data-reveal="up"] {
          transform: translateY(40px);
        }

        .reveal-hidden[data-reveal="left"] {
          transform: translateX(-40px);
        }

        .reveal-hidden[data-reveal="right"] {
          transform: translateX(40px);
        }

        .reveal-hidden[data-reveal="fade"] {
          transform: none;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
          
          html {
            scroll-behavior: auto !important;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .chat-panel {
            width: calc(100vw - 32px);
            right: -16px;
          }
          
          .cookie-banner {
            left: 16px;
            right: 16px;
            max-width: none;
          }
          
          .toast-container {
            right: 16px;
            left: 16px;
          }
          
          .toast {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
};

export default GlobalEnhancements;
