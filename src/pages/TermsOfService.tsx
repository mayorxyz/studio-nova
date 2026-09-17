import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/atomic';

export default function TermsOfService() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Legal — Terms of Service</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Terms of <span className="text-[var(--safety)]">Service</span>
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
              <h2 className="text-h2 mb-4">1. Acceptance of Terms</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                By accessing or using Studio Nova's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                These terms apply to all users of the site, including users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h2 mb-4">2. Services Description</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Studio Nova provides creative agency services including but not limited to:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Web design and development</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Brand identity and strategy</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>UI/UX design</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Motion graphics and animation</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Consulting and strategy</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed mt-4">
                Specific project deliverables, timelines, and pricing will be outlined in individual project proposals and contracts.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h2 mb-4">3. Client Responsibilities</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Respond to requests for information in a timely manner</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Provide necessary assets and access to systems</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Review and approve deliverables within agreed timeframes</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Make payments according to the agreed schedule</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-h2 mb-4">4. Payment Terms</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>A deposit is required before work begins (typically 50% of project value)</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Remaining balance is due upon project completion</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Invoices are payable within 30 days of issue</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Late payments may incur additional fees</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                All prices are in USD unless otherwise specified. Additional costs may apply for out-of-scope work or project changes.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h2 className="text-h2 mb-4">5. Intellectual Property</h2>
              <h3 className="text-h3 mb-3 mt-6">5.1 Ownership</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Upon full payment, clients receive ownership of final deliverables as specified in the project agreement. Studio Nova retains ownership of:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Pre-existing tools, frameworks, and methodologies</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Working files and source code (unless otherwise agreed)</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Rejected concepts and unused designs</span>
                </li>
              </ul>

              <h3 className="text-h3 mb-3 mt-6">5.2 Portfolio Rights</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Studio Nova reserves the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <h2 className="text-h2 mb-4">6. Confidentiality</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This includes:
              </p>
              <ul className="space-y-2">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Business strategies and plans</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Financial information</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Technical specifications</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Customer data and lists</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.6s' }}>
              <h2 className="text-h2 mb-4">7. Project Changes and Cancellations</h2>
              <h3 className="text-h3 mb-3 mt-6">7.1 Scope Changes</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Changes to project scope may result in additional costs and timeline adjustments. All scope changes must be approved in writing.
              </p>

              <h3 className="text-h3 mb-3 mt-6">7.2 Cancellation</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Either party may cancel a project with written notice. In case of cancellation:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Client is responsible for payment of work completed to date</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Deposits are non-refundable</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Final deliverables will be provided upon full payment</span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.7s' }}>
              <h2 className="text-h2 mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Studio Nova warrants that:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Services will be performed in a professional manner</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Deliverables will conform to agreed specifications</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>We have the right to enter into this agreement</span>
                </li>
              </ul>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                EXCEPT AS EXPRESSLY PROVIDED, STUDIO NOVA MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.8s' }}>
              <h2 className="text-h2 mb-4">9. Limitation of Liability</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                IN NO EVENT SHALL STUDIO NOVA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH OUR SERVICES, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE.
              </p>
              <p className="text-data text-[var(--muted)] leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.9s' }}>
              <h2 className="text-h2 mb-4">10. Indemnification</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                You agree to indemnify, defend, and hold harmless Studio Nova from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '1.0s' }}>
              <h2 className="text-h2 mb-4">11. Governing Law</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '1.1s' }}>
              <h2 className="text-h2 mb-4">12. Dispute Resolution</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be resolved through:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li className="text-data text-[var(--muted)]">Good faith negotiation between parties</li>
                <li className="text-data text-[var(--muted)]">Mediation by a mutually agreed mediator</li>
                <li className="text-data text-[var(--muted)]">Binding arbitration in San Francisco, CA</li>
              </ol>
            </div>

            <div className="reveal" style={{ transitionDelay: '1.2s' }}>
              <h2 className="text-h2 mb-4">13. Modifications to Terms</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                Studio Nova reserves the right to modify these terms at any time. We will notify clients of material changes via email or through our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '1.3s' }}>
              <h2 className="text-h2 mb-4">14. Contact Information</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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
    </div>
  );
}
