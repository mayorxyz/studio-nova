import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/atomic';

export default function CookiePolicy() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Legal — Cookie Policy</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Cookie <span className="text-[var(--safety)]">Policy</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg space-y-8">
            <div className="reveal">
              <h2 className="text-h2 mb-4">1. What Are Cookies</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Cookies allow a website to recognize your device and remember information about your visit, such as your preferred language, login details, and other settings.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h2 mb-4">2. How We Use Cookies</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Studio Nova uses cookies for the following purposes:
              </p>

              <h3 className="text-h3 mb-3 mt-6">2.1 Strictly Necessary Cookies</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                These cookies are essential for the operation of our website. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.
              </p>
              <div className="bento-card mb-6">
                <table className="w-full text-data">
                  <thead>
                    <tr className="border-b border-[var(--ink)]">
                      <th className="text-left py-2">Cookie Name</th>
                      <th className="text-left py-2">Purpose</th>
                      <th className="text-left py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--ink)]/20">
                      <td className="py-2 text-[var(--muted)]">session_id</td>
                      <td className="py-2 text-[var(--muted)]">Maintains user session</td>
                      <td className="py-2 text-[var(--muted)]">Session</td>
                    </tr>
                    <tr className="border-b border-[var(--ink)]/20">
                      <td className="py-2 text-[var(--muted)]">csrf_token</td>
                      <td className="py-2 text-[var(--muted)]">Security protection</td>
                      <td className="py-2 text-[var(--muted)]">Session</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[var(--muted)]">cookie_consent</td>
                      <td className="py-2 text-[var(--muted)]">Stores cookie preferences</td>
                      <td className="py-2 text-[var(--muted)]">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-h3 mb-3 mt-6">2.2 Analytics Cookies</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve how our website works.
              </p>
              <div className="bento-card mb-6">
                <table className="w-full text-data">
                  <thead>
                    <tr className="border-b border-[var(--ink)]">
                      <th className="text-left py-2">Cookie Name</th>
                      <th className="text-left py-2">Purpose</th>
                      <th className="text-left py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--ink)]/20">
                      <td className="py-2 text-[var(--muted)]">_ga</td>
                      <td className="py-2 text-[var(--muted)]">Google Analytics - distinguishes users</td>
                      <td className="py-2 text-[var(--muted)]">2 years</td>
                    </tr>
                    <tr className="border-b border-[var(--ink)]/20">
                      <td className="py-2 text-[var(--muted)]">_ga_*</td>
                      <td className="py-2 text-[var(--muted)]">Google Analytics - maintains session state</td>
                      <td className="py-2 text-[var(--muted)]">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[var(--muted)]">_gid</td>
                      <td className="py-2 text-[var(--muted)]">Google Analytics - distinguishes users</td>
                      <td className="py-2 text-[var(--muted)]">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-h3 mb-3 mt-6">2.3 Functionality Cookies</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
              </p>
              <div className="bento-card mb-6">
                <table className="w-full text-data">
                  <thead>
                    <tr className="border-b border-[var(--ink)]">
                      <th className="text-left py-2">Cookie Name</th>
                      <th className="text-left py-2">Purpose</th>
                      <th className="text-left py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--ink)]/20">
                      <td className="py-2 text-[var(--muted)]">theme_preference</td>
                      <td className="py-2 text-[var(--muted)]">Stores theme preference (light/dark)</td>
                      <td className="py-2 text-[var(--muted)]">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[var(--muted)]">language</td>
                      <td className="py-2 text-[var(--muted)]">Stores language preference</td>
                      <td className="py-2 text-[var(--muted)]">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h2 mb-4">3. Third-Party Cookies</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span><strong>Google Analytics:</strong> Helps us understand how visitors engage with our site. These cookies track things like how long you spend on the site and the pages you visit.</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span><strong>Social Media:</strong> We use social media buttons and/or plugins that allow you to connect with our service in various ways. If you are logged into these services, they may set cookies through our site.</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-h2 mb-4">4. Managing Cookies</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                You can control and/or delete cookies as you wish. For more information on how to manage cookies, please visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[var(--safety)] hover:underline">www.aboutcookies.org</a>.
              </p>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                You can also adjust your browser settings to:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Block all cookies</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Allow only first-party cookies</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Delete cookies when you close your browser</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Receive notifications when cookies are being set</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed mt-4">
                Please note that if you disable cookies, some features of our website may not function properly.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h2 className="text-h2 mb-4">5. Cookie Consent</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                When you first visit our website, you will see a cookie consent banner that allows you to:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span><strong>Accept all cookies:</strong> Allows all cookies to be set</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span><strong>Reject non-essential cookies:</strong> Only strictly necessary cookies will be set</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span><strong>Customize preferences:</strong> Choose which types of cookies to allow</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed mt-4">
                You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <h2 className="text-h2 mb-4">6. Changes to This Policy</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.6s' }}>
              <h2 className="text-h2 mb-4">7. Contact Us</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                If you have any questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="bento-card bento-card--dark">
                <p className="text-data text-[var(--base)] mb-2">
                  <strong>Email:</strong> privacy@studionova.com
                </p>
                <p className="text-data text-[var(--base)] mb-2">
                  <strong>Address:</strong> Studio Nova, San Francisco, CA
                </p>
                <p className="text-data text-[var(--base)]">
                  <strong>Response Time:</strong> Within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section--surface">
        <div className="max-w-[800px] mx-auto text-center">
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
