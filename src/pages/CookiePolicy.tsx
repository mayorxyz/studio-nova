import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function CookiePolicy() {
  const [activeTab, setActiveTab] = useState<'essential' | 'analytics' | 'marketing'>('essential');
  const [expandedBrowser, setExpandedBrowser] = useState<string | null>(null);

  const cookieCategories = {
    essential: {
      title: 'Essential Cookies',
      description: 'Required for the website to function properly. Cannot be disabled.',
      cookies: [
        { name: 'session_id', provider: 'studionova.com', expiration: 'Session', purpose: 'Maintains user session', status: 'Always Active', locked: true },
        { name: 'csrf_token', provider: 'studionova.com', expiration: 'Session', purpose: 'Security protection', status: 'Always Active', locked: true },
        { name: 'cookie_consent', provider: 'studionova.com', expiration: '1 year', purpose: 'Stores cookie preferences', status: 'Always Active', locked: true },
      ]
    },
    analytics: {
      title: 'Analytics & Performance Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      cookies: [
        { name: '_ga', provider: 'Google Analytics', expiration: '2 years', purpose: 'Distinguishes users', status: 'Active', locked: false },
        { name: '_ga_*', provider: 'Google Analytics', expiration: '2 years', purpose: 'Maintains session state', status: 'Active', locked: false },
        { name: '_gid', provider: 'Google Analytics', expiration: '24 hours', purpose: 'Distinguishes users', status: 'Active', locked: false },
        { name: 'ph_*', provider: 'PostHog', expiration: '1 year', purpose: 'Product analytics and heatmaps', status: 'Active', locked: false },
      ]
    },
    marketing: {
      title: 'Marketing & Targeting Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging ads.',
      cookies: [
        { name: '_fbp', provider: 'Facebook', expiration: '3 months', purpose: 'Delivers advertisements and tracks conversions', status: 'Active', locked: false },
        { name: 'li_fat_id', provider: 'LinkedIn', expiration: '6 months', purpose: 'Tracks ad conversions', status: 'Active', locked: false },
        { name: 'IDE', provider: 'Google DoubleClick', expiration: '1 year', purpose: 'Measures ad performance', status: 'Active', locked: false },
      ]
    }
  };

  const browserInstructions = [
    {
      name: 'Chrome',
      steps: [
        'Click the three dots in the top-right corner',
        'Go to Settings > Privacy and security',
        'Click on Cookies and other site data',
        'Choose your preferred cookie settings',
        'To clear cookies: Click "Clear data" next to the site'
      ]
    },
    {
      name: 'Safari',
      steps: [
        'Go to Safari > Preferences',
        'Click on the Privacy tab',
        'Choose your cookie blocking preference',
        'To manage specific sites: Click "Manage Website Data"',
        'Select sites and click "Remove" or "Remove All"'
      ]
    },
    {
      name: 'Firefox',
      steps: [
        'Click the menu button and select Settings',
        'Go to Privacy & Security',
        'Under Cookies and Site Data, choose your settings',
        'To clear cookies: Click "Clear Data"',
        'Select "Cookies and Site Data" and click "Clear"'
      ]
    },
    {
      name: 'Edge',
      steps: [
        'Click the three dots in the top-right corner',
        'Go to Settings > Cookies and site permissions',
        'Click on Manage and delete cookies and site data',
        'Choose your preferred settings',
        'To clear: Click "See all cookies and site data" and remove'
      ]
    },
    {
      name: 'Brave',
      steps: [
        'Click the menu icon and go to Settings',
        'Navigate to Shields',
        'Adjust cookie blocking settings',
        'For detailed control: Go to Privacy and security',
        'Click "Clear browsing data" to remove cookies'
      ]
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-[var(--surface)] py-12 border-b border-[var(--ink)]">
        <div className="max-w-[var(--container-lg)] mx-auto px-8">
          <SectionEyebrow>Legal Document</SectionEyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4">
            <div>
              <h1 className="text-h1">
                Cookie <span className="text-[var(--safety)]">Policy</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 text-data text-[var(--muted)]">
                <span>Last Revised: January 15, 2024</span>
              </div>
            </div>
            <Button variant="primary" safety>
              Manage Cookie Preferences 🍪
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="max-w-[var(--container-sm)] mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <h2 className="text-h2 mb-4">What Are Cookies?</h2>
            <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
            <p className="text-data text-[var(--muted)] leading-[1.7] mb-8">
              Cookies allow a website to recognize your device and remember information about your visit, such as your preferred language, login details, and other settings. We use cookies to enhance your browsing experience, serve personalized content, and analyze how our site is used.
            </p>

            <div className="bento-card bento-card--safety mb-8">
              <h3 className="text-h3 mb-2">Your Control</h3>
              <p className="text-data">
                You have full control over which cookies are active on our site. You can manage your preferences at any time by clicking the "Manage Cookie Preferences" button above or through your browser settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="section pt-0">
        <div className="max-w-[var(--container-md)] mx-auto">
          <h2 className="text-h2 mb-6">Cookie Categories</h2>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-[var(--ink)]">
            {Object.entries(cookieCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`px-6 py-3 text-data font-semibold transition-all border-b-2 ${
                  activeTab === key
                    ? 'border-[var(--safety)] text-[var(--safety)]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            <p className="text-data text-[var(--muted)] mb-6">
              {cookieCategories[activeTab].description}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--ink)]">
                <thead>
                  <tr className="bg-[var(--surface)]">
                    <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Cookie Name</th>
                    <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Provider</th>
                    <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Expiration</th>
                    <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Purpose</th>
                    <th className="border border-[var(--ink)] px-4 py-3 text-center text-data font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieCategories[activeTab].cookies.map((cookie, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-[var(--surface)]'}>
                      <td className="border border-[var(--ink)] px-4 py-3 text-data font-mono text-[var(--ink)]">
                        {cookie.name}
                      </td>
                      <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">
                        {cookie.provider}
                      </td>
                      <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">
                        {cookie.expiration}
                      </td>
                      <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">
                        {cookie.purpose}
                      </td>
                      <td className="border border-[var(--ink)] px-4 py-3 text-center">
                        <span className={`inline-block px-3 py-1 text-micro font-semibold rounded ${
                          cookie.locked 
                            ? 'bg-[var(--safety)] text-[var(--ink)]' 
                            : cookie.status === 'Active'
                            ? 'bg-[var(--term-green)]/20 text-[var(--term-green)]'
                            : 'bg-[var(--muted)]/20 text-[var(--muted)]'
                        }`}>
                          {cookie.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Control Instructions */}
      <section className="section--surface">
        <div className="max-w-[var(--container-md)] mx-auto">
          <h2 className="text-h2 mb-6">How to Control Cookies in Your Browser</h2>
          <p className="text-data text-[var(--muted)] mb-8">
            You can control and manage cookies through your browser settings. Here's how to do it in popular browsers:
          </p>

          <div className="space-y-4">
            {browserInstructions.map((browser, i) => (
              <div key={i} className="bento-card">
                <button
                  onClick={() => setExpandedBrowser(expandedBrowser === browser.name ? null : browser.name)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-h3">{browser.name}</h3>
                  <span className="text-[var(--safety)] text-2xl">
                    {expandedBrowser === browser.name ? '−' : '+'}
                  </span>
                </button>
                
                {expandedBrowser === browser.name && (
                  <div className="mt-4 pt-4 border-t border-[var(--ink)]">
                    <ol className="space-y-3">
                      {browser.steps.map((step, j) => (
                        <li key={j} className="text-data text-[var(--muted)] flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[var(--safety)] text-[var(--ink)] rounded-full flex items-center justify-center text-sm font-bold">
                            {j + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section">
        <div className="max-w-[var(--container-sm)] mx-auto">
          <h2 className="text-h2 mb-6">Additional Information</h2>
          
          <div className="space-y-6">
            <div className="bento-card">
              <h3 className="text-h3 mb-3">Third-Party Cookies</h3>
              <p className="text-data text-[var(--muted)] leading-[1.7]">
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site. We use Google Analytics to help us understand how visitors engage with our site. Social media buttons and plugins allow you to connect with our service in various ways.
              </p>
            </div>

            <div className="bento-card">
              <h3 className="text-h3 mb-3">Disabling Cookies</h3>
              <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the site. Therefore it is recommended that you do not disable cookies.
              </p>
              <p className="text-data text-[var(--muted)] leading-[1.7]">
                For more information on how to manage cookies, please visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[var(--safety)] hover:underline">www.aboutcookies.org</a>.
              </p>
            </div>

            <div className="bento-card">
              <h3 className="text-h3 mb-3">Changes to This Policy</h3>
              <p className="text-data text-[var(--muted)] leading-[1.7]">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last Revised" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section--dark">
        <div className="max-w-[var(--container-sm)] mx-auto text-center">
          <h2 className="text-h2 mb-4 text-[var(--base)]">Questions About Cookies?</h2>
          <p className="text-data text-[var(--muted)] mb-6">
            If you have any questions about our use of cookies or this policy, please contact us.
          </p>
          <div className="inline-block">
            <a href="mailto:privacy@studionova.com" className="text-data text-[var(--safety)] hover:underline">
              privacy@studionova.com
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section">
        <div className="max-w-[var(--container-sm)] mx-auto text-center">
          <h2 className="text-h2 mb-6">Related Policies</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/privacy-policy" className="btn--ghost">
              Privacy Policy →
            </Link>
            <Link to="/terms-of-service" className="btn--ghost">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
