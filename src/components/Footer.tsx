import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/services/web-design">Web Design</Link>
          <Link to="/services/brand-identity">Brand Identity</Link>
          <Link to="/services/ui-ux-design">UI/UX Design</Link>
          <Link to="/services/motion-graphics">Motion Graphics</Link>
        </div>
        <div className="footer__col">
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Get a Quote</Link>
          <Link to="/portal">Client Portal</Link>
        </div>
        <div className="footer__col">
          <h4>Connect</h4>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="footer__col">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)]">
          © 2024 Studio Nova. All rights reserved.
        </span>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
            Privacy
          </Link>
          <Link to="/terms-of-service" className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
            Terms
          </Link>
          <Link to="/cookie-policy" className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
