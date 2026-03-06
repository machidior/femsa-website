import React, { useState, useEffect } from 'react';
import { X, Settings, Cookie } from 'lucide-react';

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: true,
    marketing: true,
    functional: true
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('femsa-cookie-consent');
    if (!hasConsent) {
      // Show banner after a short delay to allow page to load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allPreferences);
    saveConsent(allPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('femsa-cookie-consent', JSON.stringify(prefs));
    // Here you would typically initialize tracking scripts based on preferences
    initializeTracking(prefs);
  };

  const initializeTracking = (prefs: CookiePreferences) => {
    // Initialize Google Analytics if analytics is accepted
    if (prefs.analytics) {
      // Initialize GA4 or other analytics
      console.log('Analytics cookies accepted');
    }

    // Initialize marketing pixels if marketing is accepted
    if (prefs.marketing) {
      // Initialize Facebook Pixel, LinkedIn Insight Tag, etc.
      console.log('Marketing cookies accepted');
    }

    // Functional cookies are always enabled for basic site functionality
    console.log('Functional cookies enabled');
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-femsa-border-subtle p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Content */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-femsa-text text-sm md:text-base mb-2">
                  We use cookies to enhance your experience.
                </p>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="text-amber-500 hover:text-amber-400 text-sm underline transition-colors"
                >
                  Manage Preferences
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 rounded-full border border-femsa-border-subtle text-femsa-muted hover:text-white transition-colors flex items-center justify-center"
                aria-label="Decline cookies"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-amber-500 text-femsa-primary rounded-full font-semibold transition-all duration-300 hover:bg-amber-400 hover:scale-105 min-h-[44px]"
                style={{ fontFamily: 'DM Sans' }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Panel */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-femsa-primary/80 backdrop-blur-sm"
            onClick={() => setShowPreferences(false)}
          />

          {/* Panel */}
          <div className="relative glass-card border border-femsa-border-subtle rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-amber-500" />
                <h3 
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="w-8 h-8 rounded-full border border-femsa-border-subtle text-femsa-muted hover:text-white transition-colors flex items-center justify-center"
                aria-label="Close preferences"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-femsa-secondary text-sm mb-6">
              We use different types of cookies to provide you with the best experience on our website. You can choose which cookies you want to allow.
            </p>

            {/* Cookie Options */}
            <div className="space-y-4 mb-6">
              {/* Functional Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="functional"
                  checked={preferences.functional}
                  onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                  className="mt-1 w-4 h-4 text-amber-500 border-femsa-border rounded focus:ring-amber-500 focus:ring-2"
                  disabled // Functional cookies are always required
                />
                <div className="flex-1">
                  <label 
                    htmlFor="functional"
                    className="font-medium text-white block mb-1"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Functional Cookies
                  </label>
                  <p className="text-femsa-muted text-xs">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                  className="mt-1 w-4 h-4 text-amber-500 border-femsa-border rounded focus:ring-amber-500 focus:ring-2"
                />
                <div className="flex-1">
                  <label 
                    htmlFor="analytics"
                    className="font-medium text-white block mb-1"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Analytics Cookies
                  </label>
                  <p className="text-femsa-muted text-xs">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                  className="mt-1 w-4 h-4 text-amber-500 border-femsa-border rounded focus:ring-amber-500 focus:ring-2"
                />
                <div className="flex-1">
                  <label 
                    htmlFor="marketing"
                    className="font-medium text-white block mb-1"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Marketing Cookies
                  </label>
                  <p className="text-femsa-muted text-xs">
                    Used to track visitors across websites to display relevant ads and marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-amber-500 text-femsa-primary rounded-full font-semibold transition-all duration-300 hover:bg-amber-400 hover:scale-105 min-h-[44px]"
                style={{ fontFamily: 'DM Sans' }}
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 border border-femsa-border text-white rounded-full font-semibold transition-all duration-300 hover:bg-femsa-border hover:scale-105 min-h-[44px]"
                style={{ fontFamily: 'DM Sans' }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
