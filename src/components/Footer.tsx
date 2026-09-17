import { Link } from 'react-router-dom';

// ─── Scoped Styles ───────────────────────────────────────────────────────────
const footerStyles = `
  /* ── Footer 12-Column Grid ── */
  .footer__top {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 3rem;
  }

  .footer__col--brand { grid-column: span 5; }
  .footer__col--company { grid-column: span 2; }
  .footer__col--services { grid-column: span 2; }
  .footer__col--insights { grid-column: span 2; }
  .footer__col--connect { grid-column: span 3; }

  .footer__brand-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--base);
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }
  .footer__brand-title span { color: var(--safety); }

  .footer__brand-tagline {
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-data);
    color: var(--muted);
    line-height: 1.6;
    max-width: 320px;
  }

  .footer__bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 1.5rem;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer__bottom-center {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .footer__bottom-center a {
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-micro);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s ease;
  }
  .footer__bottom-center a:hover { color: var(--safety); }

  .footer__back-to-top {
    background: transparent;
    border: 1px solid var(--muted);
    color: var(--muted);
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-micro);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .footer__back-to-top:hover {
    border-color: var(--safety);
    color: var(--safety);
  }

  @media (max-width: 768px) {
    .footer__top {
      grid-template-columns: repeat(2, 1fr);
    }
    .footer__col--brand { grid-column: span 2; }
    .footer__col--company,
    .footer__col--services,
    .footer__col--insights,
    .footer__col--connect { grid-column: span 1; }
  }

  @media (max-width: 480px) {
    .footer__top {
      grid-template-columns: 1fr;
    }
    .footer__col--brand,
    .footer__col--company,
    .footer__col--services,
    .footer__col--insights,
    .footer__col--connect { grid-column: span 1; }
    .footer__bottom {
      flex-direction: column;
      text-align: center;
    }
    .footer__bottom-center {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

// ─── Link Data ───────────────────────────────────────────────────────────────
const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Team', path: '/about/team' },
  { label: 'Careers', path: '/careers' },
  { label: 'Partners', path: '/partners' },
  { label: 'Awards', path: '/work/awards' },
];

const servicesLinks = [
  { label: 'Web Design', path: '/services/web-design' },
  { label: 'Brand Identity', path: '/services/brand-identity' },
  { label: 'UI/UX Design', path: '/services/ui-ux-design' },
  { label: 'Motion Graphics', path: '/services/motion-graphics' },
  { label: 'Process', path: '/services/process' },
  { label: 'Pricing', path: '/services/pricing' },
];

const insightsLinks = [
  { label: 'Blog', path: '/blog' },
  { label: 'Resources', path: '/resources' },
  { label: 'Events', path: '/events' },
  { label: 'Podcast', path: '/podcast' },
];

const connectLinks = [
  { label: 'Contact', path: '/contact' },
  { label: 'Quote Request', path: '/quote-request' },
  { label: 'Newsletter', path: '/blog/newsletter/subscribe' },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        {/* Top Grid */}
        <div className="footer__top">
          {/* Brand Block */}
          <div className="footer__col footer__col--brand">
            <h3 className="footer__brand-title">
              STUDIO <span>NOVA</span>
            </h3>
            <p className="footer__brand-tagline">
              We design digital experiences that move people.
            </p>
          </div>

          {/* Company Links */}
          <div className="footer__col footer__col--company">
            <h4>Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services Links */}
          <div className="footer__col footer__col--services">
            <h4>Services</h4>
            {servicesLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Insights Links */}
          <div className="footer__col footer__col--insights">
            <h4>Insights</h4>
            {insightsLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect Links */}
          <div className="footer__col footer__col--connect">
            <h4>Connect</h4>
            {connectLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="footer__bottom">
          <span className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)]">
            © 2024 Studio Nova. All rights reserved.
          </span>

          <div className="footer__bottom-center">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>

          <button className="footer__back-to-top" onClick={scrollToTop}>
            Back to Top ↑
          </button>
        </div>
      </footer>
    </>
  );
}
