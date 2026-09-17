import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/atomic';

export default function PrivacyPolicy() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Legal — Privacy Policy</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Privacy <span className="text-[var(--safety)]">Policy</span>
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
              <h2 className="text-h2 mb-4">1. Introduction</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Studio Nova ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Please read this policy carefully. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h2 mb-4">2. Information We Collect</h2>
              <h3 className="text-h3 mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Fill out contact forms or request quotes</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Subscribe to our newsletter</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Apply for job positions</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Engage with our client portal</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="text-h3 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                When you access our website, we may automatically collect:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>IP address and browser type</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Device information and operating system</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Pages visited and time spent on pages</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Referring website addresses</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h2 mb-4">3. How We Use Your Information</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>To respond to your inquiries and provide customer support</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>To send you newsletters and marketing communications (with your consent)</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>To process job applications</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>To improve our website and services</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-h2 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>With service providers who assist us in our operations (hosting, analytics, email delivery)</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>With your explicit consent</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h2 className="text-h2 mb-4">5. Data Security</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <h2 className="text-h2 mb-4">6. Your Rights</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to access your personal information</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to correct inaccurate data</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to delete your data</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to restrict processing</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to data portability</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Right to withdraw consent</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@studionova.com.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.6s' }}>
              <h2 className="text-h2 mb-4">7. Cookies</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. For more information, please see our <Link to="/cookie-policy" className="text-[var(--safety)] hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.7s' }}>
              <h2 className="text-h2 mb-4">8. Third-Party Links</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.8s' }}>
              <h2 className="text-h2 mb-4">9. Children's Privacy</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.9s' }}>
              <h2 className="text-h2 mb-4">10. Changes to This Policy</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '1.0s' }}>
              <h2 className="text-h2 mb-4">11. Contact Us</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
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
            <Link to="/terms-of-service" className="btn--ghost">
              Terms of Service →
            </Link>
            <Link to="/cookie-policy" className="btn--ghost">
              Cookie Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
