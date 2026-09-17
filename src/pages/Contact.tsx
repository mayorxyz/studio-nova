import { useEffect, useState } from 'react';
import { useSEO, seoConfigs } from '../hooks/useSEO';

export default function Contact() {
  useSEO(seoConfigs.contact);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="hero hero--center" style={{ minHeight: '80vh' }}>
        <div className="reveal">
          <div className="text-[var(--safety)] text-6xl mb-6">✓</div>
          <h1 className="text-h1 mb-4">Message <span className="text-[var(--safety)]">Sent.</span></h1>
          <p className="text-data text-[var(--muted)] mb-8 max-w-md mx-auto">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </p>
          <div className="terminal max-w-md mx-auto text-left">
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <div className="terminal__line text-[var(--term-green)]">→ Message queued successfully</div>
            <div className="terminal__line text-[var(--term-amber)]">→ Response ETA: &lt;24 hours</div>
            <div className="terminal__line">→ Reference: #NV-{Math.floor(Math.random() * 9000 + 1000)}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="section__label reveal">Contact — Let's Talk</div>
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.1s' }}>
            Start a <span className="text-[var(--safety)]">project.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-xl reveal" style={{ transitionDelay: '0.2s' }}>
            Tell us about your project and we'll get back to you within 24 hours with a plan.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-micro text-[var(--muted)] mb-1 block">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-micro text-[var(--muted)] mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-micro text-[var(--muted)] mb-1 block">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                placeholder="Your company"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-micro text-[var(--muted)] mb-1 block">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Design & Development</option>
                  <option value="brand">Brand Identity</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="motion">Motion Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-micro text-[var(--muted)] mb-1 block">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                >
                  <option value="">Select budget</option>
                  <option value="5-15">$5K – $15K</option>
                  <option value="15-50">$15K – $50K</option>
                  <option value="50+">$50K+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-micro text-[var(--muted)] mb-1 block">Project Details *</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
            <button type="submit" className="btn--primary btn--primary--safety">
              Send Message →
            </button>
          </form>

          {/* Info */}
          <div className="space-y-4 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bento-card bento-card--dark">
              <h3 className="text-h3 text-[var(--base)] mb-3">Quick Contact</h3>
              <div className="space-y-3">
                <div className="text-data text-[var(--muted)]">
                  <span className="text-[var(--safety)]">Email</span><br />
                  <span className="italic opacity-60">[Email address to be added]</span>
                </div>
                <div className="text-data text-[var(--muted)]">
                  <span className="text-[var(--safety)]">Phone</span><br />
                  <span className="italic opacity-60">[Phone number to be added]</span>
                </div>
                <div className="text-data text-[var(--muted)]">
                  <span className="text-[var(--safety)]">Location</span><br />
                  <span className="italic opacity-60">[Office address to be added]</span>
                </div>
              </div>
            </div>
            <div className="bento-card">
              <h3 className="text-h3 mb-3">Response Time</h3>
              <div className="text-data text-[var(--muted)]">
                We typically respond within <span className="text-[var(--safety)] font-bold">24 hours</span>.
              </div>
            </div>
            <div className="bento-card bento-card--safety">
              <h3 className="text-h3 mb-2">Free Consultation</h3>
              <p className="text-data">
                Not sure where to start? Book a free 30-minute strategy call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
