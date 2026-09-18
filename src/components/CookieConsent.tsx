import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './atomic';
import { CookieIcon } from './icons';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--term-bg)] border-t-4 border-[var(--safety)]">
      <div className="max-w-[1400px] mx-auto">
        {!isExpanded ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-h3 text-[var(--base)] mb-2 flex items-center gap-2">
                  <CookieIcon size={24} /> We use cookies
                </h3>
                <p className="text-data text-[var(--muted)]">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" safety onClick={handleAccept}>
                Accept All
              </Button>
              <Button variant="ghost" onClick={handleReject}>
                Reject All
              </Button>
              <Button variant="ghost" onClick={handleCustomize}>
                Customize
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-h3 text-[var(--base)] mb-4 flex items-center gap-2">
                <CookieIcon size={24} /> Cookie Preferences
              </h3>
              <p className="text-data text-[var(--muted)] mb-6">
                Choose which cookies you'd like to accept. You can change your preferences at any time.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="bento-card bento-card--dark">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-data font-semibold text-[var(--base)] mb-1">
                        Essential Cookies
                      </h4>
                      <p className="text-micro text-[var(--muted)]">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-micro text-[var(--term-green)]">✓ Always Active</span>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bento-card bento-card--dark">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-data font-semibold text-[var(--base)] mb-1">
                        Analytics Cookies
                      </h4>
                      <p className="text-micro text-[var(--muted)]">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-micro text-[var(--muted)]">Enable</span>
                    </label>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="bento-card bento-card--dark">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-data font-semibold text-[var(--base)] mb-1">
                        Functionality Cookies
                      </h4>
                      <p className="text-micro text-[var(--muted)]">
                        Allow the website to remember your preferences and provide enhanced features.
                      </p>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-micro text-[var(--muted)]">Enable</span>
                    </label>
                  </div>
                </div>
              </div>

              <p className="text-micro text-[var(--muted)] mb-4">
                For more information, please read our{' '}
                <Link to="/cookie-policy" className="text-[var(--safety)] hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" safety onClick={handleAccept}>
                Save Preferences
              </Button>
              <Button variant="ghost" onClick={handleCustomize}>
                ← Back
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
