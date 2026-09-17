import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function ThankYouQuote() {
  const referenceNumber = Math.floor(Math.random() * 9000 + 1000);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto text-center px-8">
        <SectionEyebrow>Quote Request Received</SectionEyebrow>
        
        <h1 className="text-h1 mt-4 mb-6 reveal">
          Your request is <span className="text-[var(--safety)]">in our queue.</span>
        </h1>
        
        <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          Thanks for your interest in working with Studio Nova! We've received your project request and our team will review it within 24 hours.
        </p>

        {/* Reference Number */}
        <div className="bento-card bento-card--dark max-w-md mx-auto mb-8 reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="text-micro text-[var(--muted)] mb-2">Reference Number</div>
          <div className="text-h2 text-[var(--safety)] font-mono">
            #NV-{referenceNumber}
          </div>
          <div className="text-data text-[var(--muted)] mt-2">
            Please save this for your records
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal max-w-xl mx-auto text-left mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal__header">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span>nova submit --quote-request</span>
          </div>
          <div className="terminal__line text-[var(--term-green)]">
            ✓ Request queued successfully
          </div>
          <div className="terminal__line text-[var(--term-amber)]">
            → Response ETA: &lt;24 hours
          </div>
          <div className="terminal__line">
            → Assigned to: Project Team
          </div>
          <div className="terminal__line">
            → Priority: Standard
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span className="terminal__cursor" />
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bento-card max-w-2xl mx-auto mb-8 text-left reveal" style={{ transitionDelay: '0.25s' }}>
          <h2 className="text-h3 mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-data font-semibold mb-1">Initial Review (24 hours)</h3>
                <p className="text-data text-[var(--muted)]">
                  Our team will review your project requirements and assess fit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-data font-semibold mb-1">Discovery Call (48 hours)</h3>
                <p className="text-data text-[var(--muted)]">
                  We'll schedule a 30-minute call to discuss your project in detail.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-data font-semibold mb-1">Proposal Delivery (1 week)</h3>
                <p className="text-data text-[var(--muted)]">
                  You'll receive a detailed proposal with scope, timeline, and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center reveal" style={{ transitionDelay: '0.3s' }}>
          <Link to="/">
            <Button variant="primary" safety>
              Back to Home
            </Button>
          </Link>
          <Link to="/work">
            <Button variant="ghost">
              View Our Work
            </Button>
          </Link>
          <Link to="/services/process">
            <Button variant="ghost">
              Our Process
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 reveal" style={{ transitionDelay: '0.35s' }}>
          <p className="text-data text-[var(--muted)] mb-2">
            Have questions in the meantime?
          </p>
          <a href="mailto:hello@studionova.com" className="text-data text-[var(--safety)] hover:underline">
            hello@studionova.com
          </a>
        </div>
      </div>
    </div>
  );
}
