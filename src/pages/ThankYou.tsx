import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center px-8">
        <SectionEyebrow>Thank You</SectionEyebrow>
        
        <h1 className="text-h1 mt-4 mb-6 reveal">
          Request <span className="text-[var(--safety)]">received.</span>
        </h1>
        
        <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          Thanks for reaching out! We've received your project request and will get back to you within 24 hours with a detailed proposal.
        </p>

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
            → Reference: #NV-{Math.floor(Math.random() * 9000 + 1000)}
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span className="terminal__cursor" />
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
}
