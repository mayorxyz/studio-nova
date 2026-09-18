import { Link, useSearchParams } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'general';

  const getHeading = () => {
    switch (type) {
      case 'contact':
        return 'Message received.';
      case 'newsletter':
        return 'Subscription confirmed.';
      case 'application':
        return 'Application received.';
      default:
        return 'Submission received.';
    }
  };

  const getMessage = () => {
    switch (type) {
      case 'contact':
        return 'Thanks for reaching out! We\'ve received your message and will get back to you within 24 hours.';
      case 'newsletter':
        return 'Thanks for subscribing! You\'ll receive our weekly insights on design, business, and technology.';
      case 'application':
        return 'Thanks for your interest in joining our team! We\'ve received your application and will review it shortly.';
      default:
        return 'Thanks for your submission! We\'ve received your information and will get back to you soon.';
    }
  };

  const getTerminalCommand = () => {
    switch (type) {
      case 'contact':
        return 'nova submit --contact-form';
      case 'newsletter':
        return 'nova subscribe --newsletter';
      case 'application':
        return 'nova apply --job-application';
      default:
        return 'nova submit --form';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center px-8">
        <SectionEyebrow>Thank You</SectionEyebrow>
        
        <h1 className="text-h1 mt-4 mb-6 reveal">
          {getHeading()}
        </h1>
        
        <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          {getMessage()}
        </p>

        <div className="terminal max-w-xl mx-auto text-left mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal__header">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span>{getTerminalCommand()}</span>
          </div>
          <div className="terminal__line text-[var(--term-green)]">
            ✓ Submission received successfully
          </div>
          <div className="terminal__line text-[var(--term-amber)]">
            → Processing your request...
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
