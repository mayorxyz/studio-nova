import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/atomic';

export default function Sitemap() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Site Map — All Pages</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Site <span className="text-[var(--safety)]">Map</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            A complete directory of all pages on the Studio Nova website.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="reveal">
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Services</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/process" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link to="/services/pricing" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-design" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/brand-identity" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link to="/services/ui-ux-design" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/motion-graphics" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Motion Graphics
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">About</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about/mission" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/about/values" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Our Values
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work Categories */}
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Work Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/work/category/branding" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/work/category/web-design" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link to="/work/category/ui-ux" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link to="/work/category/motion" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Motion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work Industries */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Work Industries</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/work/industry/startups" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Startups
                  </Link>
                </li>
                <li>
                  <Link to="/work/industry/ecommerce" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link to="/work/industry/saas" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    SaaS
                  </Link>
                </li>
                <li>
                  <Link to="/work/industry/non-profit" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Non-Profit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Case Studies */}
            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Case Studies</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/work/neon-coffee" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Neon Coffee
                  </Link>
                </li>
                <li>
                  <Link to="/work/fintech-app" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    FinTech App
                  </Link>
                </li>
                <li>
                  <Link to="/work/sustainable-fashion" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Sustainable Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/work/music-streaming" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Music Streaming
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog Categories */}
            <div className="reveal" style={{ transitionDelay: '0.6s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Blog Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/category/design-tips" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Design Tips
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/business" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/tutorials" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/industry-news" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Industry News
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/case-studies" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers */}
            <div className="reveal" style={{ transitionDelay: '0.7s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Careers</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/careers" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    All Open Positions
                  </Link>
                </li>
                <li>
                  <Link to="/careers/senior-designer" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Senior Designer
                  </Link>
                </li>
                <li>
                  <Link to="/careers/frontend-developer" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Frontend Developer
                  </Link>
                </li>
                <li>
                  <Link to="/careers/project-manager" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Project Manager
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="reveal" style={{ transitionDelay: '0.8s' }}>
              <h2 className="text-h3 mb-4 text-[var(--safety)]">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-data text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Quick Links</SectionEyebrow>
            <h2 className="text-h2 mt-2">Popular <span className="text-[var(--safety)]">pages</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/contact" className="bento-card hover-lift reveal">
              <h3 className="text-h3 mb-2">Contact Us</h3>
              <p className="text-data text-[var(--muted)]">Get in touch with our team</p>
            </Link>
            <Link to="/quote-request" className="bento-card hover-lift reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-h3 mb-2">Request Quote</h3>
              <p className="text-data text-[var(--muted)]">Start your project with us</p>
            </Link>
            <Link to="/services/pricing" className="bento-card hover-lift reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-h3 mb-2">Pricing</h3>
              <p className="text-data text-[var(--muted)]">View our service packages</p>
            </Link>
            <Link to="/careers" className="bento-card hover-lift reveal" style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-h3 mb-2">Careers</h3>
              <p className="text-data text-[var(--muted)]">Join our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
