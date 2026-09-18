import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'acceptance', label: '1. Acceptance of Terms', number: '1' },
    { id: 'account', label: '2. Account Responsibilities', number: '2' },
    { id: 'intellectual-property', label: '3. Intellectual Property Rights', number: '3' },
    { id: 'billing', label: '4. Subscription & Billing', number: '4' },
    { id: 'liability', label: '5. Limitation of Liability', number: '5' },
    { id: 'termination', label: '6. Account Termination', number: '6' },
    { id: 'governing-law', label: '7. Governing Law', number: '7' },
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

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-[var(--safety)]/20 px-1">{part}</mark> : part
    );
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
                Terms of <span className="text-[var(--safety)]">Service</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 text-data text-[var(--muted)]">
                <span>Effective Date: January 15, 2024</span>
              </div>
            </div>
            <Button variant="ghost" onClick={() => window.print()}>
              Print Document 🖨️
            </Button>
          </div>

          {/* TL;DR Banner */}
          <div className="mt-6 p-4 bg-[var(--safety)]/10 border-l-4 border-[var(--safety)]">
            <p className="text-data">
              <strong>TL;DR:</strong> This document outlines your legal rights and responsibilities when using our platform. Please read carefully.
            </p>
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
              {/* Search Bar */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search terms (e.g., 'refund', 'cancellation', 'IP')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                />
                {searchQuery && (
                  <p className="text-micro text-[var(--muted)] mt-2">
                    Showing results for: <strong className="text-[var(--safety)]">{searchQuery}</strong>
                  </p>
                )}
              </div>

              <div className="prose prose-slate lg:prose-lg max-w-none">
                {/* Acceptance of Terms */}
                <div id="acceptance" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">1.</span>
                    Acceptance of Terms
                    <a href="#acceptance" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  
                  <h3 className="text-h3 mb-3 mt-6">1.1 Agreement to Terms</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('By accessing or using Studio Nova\'s website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">1.2 Modifications</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('We reserve the right to modify these terms at any time. We will notify you of material changes via email or through our website. Continued use of our services constitutes acceptance of modified terms.')}
                  </p>

                  <blockquote className="border-l-4 border-[var(--safety)] pl-6 py-4 my-6 bg-[var(--surface)]">
                    <p className="text-data italic text-[var(--ink)]">
                      {highlightText('Important: It is your responsibility to review these terms periodically. Changes are effective immediately upon posting.')}
                    </p>
                  </blockquote>
                </div>

                {/* Account Responsibilities */}
                <div id="account" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">2.</span>
                    Account Responsibilities
                    <a href="#account" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <h3 className="text-h3 mb-3 mt-6">2.1 Account Creation</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">2.2 Security</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">2.3 Prohibited Activities</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="text-data text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--safety)] mt-1">◆</span>
                      <span>{highlightText('Using the service for any illegal purpose or in violation of any local, state, national, or international law')}</span>
                    </li>
                    <li className="text-data text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--safety)] mt-1">◆</span>
                      <span>{highlightText('Harassing, threatening, or intimidating other users')}</span>
                    </li>
                    <li className="text-data text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--safety)] mt-1">◆</span>
                      <span>{highlightText('Attempting to gain unauthorized access to our systems or other user accounts')}</span>
                    </li>
                    <li className="text-data text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--safety)] mt-1">◆</span>
                      <span>{highlightText('Transmitting any viruses, worms, or other malicious code')}</span>
                    </li>
                  </ul>
                </div>

                {/* Intellectual Property Rights */}
                <div id="intellectual-property" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">3.</span>
                    Intellectual Property Rights
                    <a href="#intellectual-property" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <h3 className="text-h3 mb-3 mt-6">3.1 Our Content</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('The service and its original content, features, and functionality are and will remain the exclusive property of Studio Nova and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Studio Nova.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">3.2 Your Content</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the service, including its legality, reliability, and appropriateness.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">3.3 License Grant</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('By posting content on or through the service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such material on and through the service. You retain any and all of your rights to any content you submit, post or display on or through the service and you are responsible for protecting those rights.')}
                  </p>
                </div>

                {/* Subscription & Billing */}
                <div id="billing" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">4.</span>
                    Subscription & Billing
                    <a href="#billing" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <h3 className="text-h3 mb-3 mt-6">4.1 Pricing</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Our pricing is transparent and based on the scope of work required. We offer three tiers: Starter ($5K-$15K), Growth ($15K-$50K), and Enterprise ($50K+). All prices are in USD unless otherwise specified.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">4.2 Payment Terms</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-[var(--ink)]">
                      <thead>
                        <tr className="bg-[var(--surface)]">
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Payment Milestone</th>
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Percentage</th>
                          <th className="border border-[var(--ink)] px-4 py-3 text-left text-data font-semibold">Due Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Project Kickoff</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">50%</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Upon contract signing</td>
                        </tr>
                        <tr className="bg-[var(--surface)]">
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Mid-Project Review</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">25%</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">At project midpoint</td>
                        </tr>
                        <tr>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Project Completion</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">25%</td>
                          <td className="border border-[var(--ink)] px-4 py-3 text-data text-[var(--muted)]">Upon final delivery</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-h3 mb-3 mt-6">4.3 Cancellation & Refunds</h3>
                  <blockquote className="border-l-4 border-[var(--safety)] pl-6 py-4 my-6 bg-[var(--surface)]">
                    <p className="text-data italic text-[var(--ink)]">
                      {highlightText('Refund Policy: Deposits are non-refundable once work has commenced. Cancellations made before project kickoff are eligible for a full refund minus a 10% administrative fee.')}
                    </p>
                  </blockquote>

                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Clients may cancel a project at any time with written notice. In case of cancellation, the client is responsible for payment of work completed to date. Final deliverables will be provided upon full payment.')}
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div id="liability" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">5.</span>
                    Limitation of Liability
                    <a href="#liability" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <blockquote className="border-l-4 border-red-500 pl-6 py-4 my-6 bg-red-50">
                    <p className="text-data font-bold text-red-900 uppercase">
                      {highlightText('IMPORTANT: IN NO EVENT SHALL STUDIO NOVA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH OUR SERVICES.')}
                    </p>
                  </blockquote>

                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim. This limitation applies to all causes of action in the aggregate, including but not limited to breach of contract, tort, negligence, and strict liability.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">5.1 Indemnification</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('You agree to indemnify, defend, and hold harmless Studio Nova from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.')}
                  </p>
                </div>

                {/* Account Termination */}
                <div id="termination" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">6.</span>
                    Account Termination
                    <a href="#termination" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <h3 className="text-h3 mb-3 mt-6">6.1 Termination by You</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('You may terminate your account at any time by contacting us at legal@studionova.com. Upon termination, your right to use the service will immediately cease.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">6.2 Termination by Us</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">6.3 Effect of Termination</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Upon termination, all provisions of the Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.')}
                  </p>
                </div>

                {/* Governing Law */}
                <div id="governing-law" className="mb-12 scroll-mt-24">
                  <h2 className="text-h2 mb-4 flex items-center gap-2">
                    <span className="text-[var(--safety)]">7.</span>
                    Governing Law
                    <a href="#governing-law" className="text-[var(--muted)] hover:text-[var(--safety)] text-sm opacity-0 hover:opacity-100 transition-opacity">#</a>
                  </h2>

                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.')}
                  </p>

                  <h3 className="text-h3 mb-3 mt-6">7.1 Dispute Resolution</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('Any disputes arising from these terms or our services shall be resolved through:')}
                  </p>
                  <ol className="space-y-2 list-decimal list-inside mb-6">
                    <li className="text-data text-[var(--muted)]">{highlightText('Good faith negotiation between parties')}</li>
                    <li className="text-data text-[var(--muted)]">{highlightText('Mediation by a mutually agreed mediator')}</li>
                    <li className="text-data text-[var(--muted)]">{highlightText('Binding arbitration in San Francisco, CA')}</li>
                  </ol>

                  <h3 className="text-h3 mb-3 mt-6">7.2 Contact Information</h3>
                  <p className="text-data text-[var(--muted)] leading-[1.7] mb-4">
                    {highlightText('For questions about these Terms of Service, please contact us:')}
                  </p>
                  <div className="bento-card bento-card--dark">
                    <p className="text-data text-[var(--base)] mb-2">
                      <strong>Email:</strong> legal@studionova.com
                    </p>
                    <p className="text-data text-[var(--base)] mb-2">
                      <strong>Address:</strong> Studio Nova, San Francisco, CA
                    </p>
                    <p className="text-data text-[var(--base)]">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
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
            <Link to="/privacy-policy" className="btn--ghost">
              Privacy Policy →
            </Link>
            <Link to="/cookie-policy" className="btn--ghost">
              Cookie Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style>{`
        @media print {
          .sticky, nav, button, .btn--ghost, .btn--primary {
            display: none !important;
          }
          .grid-cols-12 {
            display: block !important;
          }
          .col-span-3 {
            display: none !important;
          }
          .col-span-9 {
            width: 100% !important;
          }
          body {
            font-size: 12pt;
            line-height: 1.5;
          }
          h1, h2, h3 {
            page-break-after: avoid;
          }
          blockquote {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
