import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data';

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business, audience, and goals.' },
  { step: '02', title: 'Strategy', desc: 'Define the roadmap and creative direction.' },
  { step: '03', title: 'Design', desc: 'Craft visual solutions that solve real problems.' },
  { step: '04', title: 'Develop', desc: 'Build with precision and modern technology.' },
  { step: '05', title: 'Launch', desc: 'Deploy, test, and optimize for performance.' },
  { step: '06', title: 'Grow', desc: 'Ongoing support and iterative improvement.' },
];

export default function Services() {
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

  return (
    <div>
      {/* Hero */}
      <section className="hero relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute right-[5%] top-[20%] big-number opacity-10 pointer-events-none select-none hidden lg:block">
          S.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="section__label reveal">Services — What We Do</div>
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.1s' }}>
            Services built for<br /><span className="text-[var(--safety)]">impact.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-xl reveal" style={{ transitionDelay: '0.2s' }}>
            We offer end-to-end creative services — from strategy and brand identity to design, development, and motion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="space-y-4">
          {services.map((service, i) => (
            <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
                <div>
                  <span className="text-[var(--safety)] font-display font-bold text-4xl">{service.number}</span>
                  <h3 className="text-h3 mt-2">{service.title}</h3>
                </div>
                <div>
                  <p className="text-data text-[var(--muted)] mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((f) => (
                      <li key={f} className="text-data flex items-center gap-2">
                        <span className="text-[var(--safety)]">◆</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-micro text-[var(--muted)]">Tools</span>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {service.tools.map((t) => (
                      <span key={t} className="tag tag--filled text-[0.6rem]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section--surface relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="section__header reveal">
            <div className="section__label">Our Process</div>
            <h2 className="text-h1">How we <span className="text-[var(--safety)]">work.</span></h2>
          </div>
          <div className="grid-3">
            {process.map((step, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-[var(--safety)] font-display font-bold text-3xl">{step.step}</span>
                <h3 className="text-h3 mt-2 mb-1">{step.title}</h3>
                <p className="text-data text-[var(--muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section__header reveal">
          <div className="section__label">Pricing</div>
          <h2 className="text-h1">Transparent <span className="text-[var(--safety)]">pricing.</span></h2>
        </div>
        <div className="grid-3">
          {[
            { name: 'Starter', price: '$5K–$15K', desc: 'Perfect for startups and small projects', features: ['Brand Identity', 'Landing Page', '2 Revisions', '2 Week Delivery'] },
            { name: 'Growth', price: '$15K–$50K', desc: 'For growing businesses needing full solutions', features: ['Full Brand System', 'Multi-page Website', 'UI/UX Design', 'Motion Assets', '4 Revisions'], featured: true },
            { name: 'Enterprise', price: '$50K+', desc: 'Complex projects requiring dedicated teams', features: ['Everything in Growth', 'Custom Development', 'Ongoing Support', 'Dedicated Team', 'Priority Access'] },
          ].map((plan, i) => (
            <div
              key={i}
              className={`bento-card reveal ${plan.featured ? 'bento-card--dark shadow-safety' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.featured && <span className="tag tag--safety mb-4">Most Popular</span>}
              <h3 className="text-h3">{plan.name}</h3>
              <div className="text-h2 text-[var(--safety)] my-3">{plan.price}</div>
              <p className="text-data text-[var(--muted)] mb-4">{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-data flex items-center gap-2">
                    <span className="text-[var(--safety)]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`btn--primary w-full justify-center ${plan.featured ? 'btn--primary--safety' : ''}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h1 mb-4">Need something <span className="text-[var(--safety)]">custom</span>?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored solution.
          </p>
          <Link to="/contact" className="btn--primary btn--primary--safety">
            Request a Quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
