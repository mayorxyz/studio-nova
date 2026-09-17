import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero hero--center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <div className="text-hero text-[var(--safety)] reveal">404</div>
        <h1 className="text-h1 mt-4 reveal" style={{ transitionDelay: '0.1s' }}>
          Page <span className="text-[var(--safety)]">Not Found.</span>
        </h1>
        <p className="text-data text-[var(--muted)] mt-4 mb-8 max-w-md mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="terminal max-w-md mx-auto text-left mb-8 reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="terminal__header">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
          </div>
          <div className="terminal__line text-[var(--term-amber)]">nova@studio:~$ find --page={window.location.pathname}</div>
          <div className="terminal__line text-red-400">→ ERROR: Resource not found</div>
          <div className="terminal__line text-[var(--term-green)]">→ Suggestion: Try the homepage or sitemap</div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span className="terminal__cursor" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center reveal" style={{ transitionDelay: '0.4s' }}>
          <Link to="/" className="btn--primary btn--primary--safety">
            ← Back to Home
          </Link>
          <Link to="/work" className="btn--ghost">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
