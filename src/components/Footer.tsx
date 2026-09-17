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
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/services">Web Design</Link>
          <Link to="/services">Brand Identity</Link>
          <Link to="/services">UI/UX Design</Link>
          <Link to="/services">Motion Graphics</Link>
        </div>
        <div className="footer__col">
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/about">Careers</Link>
          <Link to="/contact">Get a Quote</Link>
          <Link to="/portal">Client Portal</Link>
        </div>
        <div className="footer__col">
          <h4>Connect</h4>
          <a href="#">Twitter / X</a>
          <a href="#">Instagram</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)]">
          © 2024 Studio Nova. All rights reserved.
        </span>
        <span className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)]">
          Built with precision ◆ Industrial design system
        </span>
      </div>
    </footer>
  );
}
