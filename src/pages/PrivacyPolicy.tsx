import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: '1. Introduction', number: '1' },
    { id: 'information-collect', label: '2. Information We Collect', number: '2' },
    { id: 'how-we-use', label: '3. How We Use Data', number: '3' },
    { id: 'third-party', label: '4. Third-Party Sharing', number: '4' },
    { id: 'cookies', label: '5. Cookies & Tracking', number: '5' },
    { id: 'your-rights', label: '6. Your Rights & Choices', number: '6' },
    { id: 'data-retention', label: '7. Data Retention', number: '7' },
    { id: 'contact', label: '8. Contact Us', number: '8' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-[var(--surface)] py-12 border-b border-[var(--ink)]">
        <div className="max-w-[1400px] mx-auto px-8">
          <SectionEyebrow>Legal Document</SectionEyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4">
            <div>
              <h1 className="text-h1">
                Privacy <span className="text-[var(--safety)]">Policy</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 text-data text-[var(--muted)]">
                <span>Version 2.4</span>
                <span>•</span>
                <span>Effective Date: January 15, 2024</span>
                <span>•</span>
                <span>Last Updated: January 15, 2024</span>
              </div>
            </div>
            <Button variant="ghost">
              Download PDF ↓
            </Button>
          </div>
        </div>
      </section>

      {/* 2-Column Layout */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Sticky TOC */}
            <div className="col-span-12 lg:col-span-3">
              <div className="sticky top-24">
                <h3 className="text-h3 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-data transition-all border-l-2 ${
                        activeSection === section.id
                          ? 'border-[var(--safety)] text-[var(--safety)] bg-[var(--safety)]/5'
                          : 'border-transparent text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="col-span-12 lg:col-span-9">
              <div className="prose prose-slate lg:prose-lg max-w-none">
                {/* Introduction */}
                <div id="introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">1.</span>
                    Introduction
                    <a href="#introduction" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    Studio Nova ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-data text-[var(--muted)] leading-[1.7]">
                    Please read this policy carefully. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div id="information-collect" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">2.</span>
                    Information We Collect
                    <a href="#information-collect" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  
                  <h3 className="text-h3 mb-3 mt-6">2.1 Personal Information</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
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

                  <h3 className="text-h3 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
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

                {/* How We Use Data */}
                <div id="how-we-use" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">3.</span>
                    How We Use Your Information
                    <a href="#how-we-use" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
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

                {/* Third-Party Sharing */}
                <div id="third-party" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">4.</span>
                    Data Sharing and Disclosure
                    <a href="#third-party" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
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

                {/* Cookies & Tracking */}
                <div id="cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">5.</span>
                    Cookies & Tracking
                    <a href="#cookies" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. For more information, please see our <Link to="/cookie-policy" className="text-[var(--safety)] hover:underline">Cookie Policy</Link>.
                  </p>
                </div>

                {/* Your Rights */}
                <div id="your-rights" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">6.</span>
                    Your Rights & Choices
                    <a href="#your-rights" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  {/* GDPR Callout */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 className="text-h3 mb-2 text-blue-900">GDPR Rights (European Union)</h3>
                    <p className="text-data text-blue-800 leading-[1.7] mb-4">
                      If you are a resident of the European Union, you have the following rights:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to access your personal information</span>
                      </li>
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to correct inaccurate data</span>
                      </li>
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to delete your data ("right to be forgotten")</span>
                      </li>
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to restrict processing</span>
                      </li>
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to data portability</span>
                      </li>
                      <li className="text-data text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">◆</span>
                        <span>Right to withdraw consent</span>
                      </li>
                    </ul>
                  </div>

                  {/* CCPA Callout */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                    <h3 className="text-h3 mb-2 text-amber-900">CCPA Rights (California Residents)</h3>
                    <p className="text-data text-amber-800 leading-[1.7] mb-4">
                      If you are a California resident, you have the following rights under the California Consumer Privacy Act:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to know what personal information is being collected</span>
                      </li>
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to know whether personal information is sold or disclosed and to whom</span>
                      </li>
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to say no to the sale of personal information</span>
                      </li>
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to access your personal information</span>
                      </li>
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to request deletion of your personal information</span>
                      </li>
                      <li className="text-data text-amber-800 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">◆</span>
                        <span>Right to equal service and price, even for consumers who exercise their privacy rights</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-data text-[var(--muted)] leading-[1.7]">
                    To exercise these rights, please contact us at <a href="mailto:privacy@studionova.com" className="text-[var(--safety)] hover:underline">privacy@studionova.com</a>.
                  </p>
                </div>

                {/* Data Retention */}
                <div id="data-retention" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">7.</span>
                    Data Retention
                    <a href="#data-retention" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-6">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-[var(--ink)]">
                      <thead>
                        <tr className="bg-[var(--surface)]">
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Data Category</th>
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Retention Period</th>
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Contact Information</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">3 years after last contact</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Customer support, marketing</td>
                        </tr>
                        <tr className="bg-[var(--surface)]">
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Project Data</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Duration of project + 2 years</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Service delivery</td>
                        </tr>
                        <tr>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Analytics Data</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">26 months</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Website improvement</td>
                        </tr>
                        <tr className="bg-[var(--surface)]">
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Job Applications</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">1 year after application</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Recruitment</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">8.</span>
                    Contact Us
                    <a href="#contact" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-6">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>

                  {/* DPO Contact Box */}
                  <div className="border-2 border-[var(--safety)] p-6 bg-[var(--surface)]">
                    <h3 className="text-h3 mb-4">Data Protection Officer (DPO)</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-micro text-[var(--muted)] mb-1">Email</div>
                        <a href="mailto:dpo@studionova.com" className="text-data text-[var(--safety)] hover:underline">
                          dpo@studionova.com
                        </a>
                      </div>
                      <div>
                        <div className="text-micro text-[var(--muted)] mb-1">Address</div>
                        <div className="text-data text-[var(--ink)]">
                          Studio Nova<br />
                          Attn: Data Protection Officer<br />
                          123 Design Street<br />
                          San Francisco, CA 94102<br />
                          United States
                        </div>
                      </div>
                      <div>
                        <div className="text-micro text-[var(--muted)] mb-1">Response Time</div>
                        <div className="text-data text-[var(--ink)]">Within 30 days</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-[var(--ink)]">
                      <p className="text-data text-[var(--muted)] mb-4">
                        Need to submit a data deletion or export request?
                      </p>
                      <Link to="/contact" className="btn--primary">
                        Submit Data Request →
                      </Link>
                    </div>
                  </div>
                </div>
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
