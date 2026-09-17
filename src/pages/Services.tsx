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
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="block"
            >
              <div className="bento-card reveal hover-lift cursor-pointer" style={{ transitionDelay: `${i * 0.1}s` }}>
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
            </Link>
          ))}
        </div>
      </section>

      {/* Process Teaser */}
      <section className="section--surface relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="section__label">Our Process</div>
              <h2 className="text-h1">How we <span className="text-[var(--safety)]">work.</span></h2>
              <p className="text-data text-[var(--muted)] mt-4 mb-6">
                Our six-step process ensures every project is delivered on time, on budget, and exceeds expectations.
              </p>
              <Link to="/services/process" className="btn--primary">
                View Full Process →
              </Link>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="grid grid-cols-2 gap-4">
                {process.slice(0, 4).map((step, i) => (
                  <div key={i} className="bento-card">
                    <span className="text-[var(--safety)] font-display font-bold text-2xl">{step.step}</span>
                    <h3 className="text-h3 mt-1">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="section__label">Pricing</div>
              <h2 className="text-h1">Transparent <span className="text-[var(--safety)]">pricing.</span></h2>
              <p className="text-data text-[var(--muted)] mt-4 mb-6">
                Clear, upfront pricing with no hidden fees. Choose the package that fits your needs.
              </p>
              <div className="flex gap-4">
                <Link to="/services/pricing" className="btn--primary">
                  View Pricing →
                </Link>
                <Link to="/quote-request" className="btn--ghost">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark">
                <div className="text-micro text-[var(--muted)] mb-2">Starting at</div>
                <div className="text-h1 text-[var(--safety)]">$5K</div>
                <p className="text-data text-[var(--muted)] mt-2">
                  Flexible packages for startups, growing businesses, and enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h1 mb-4">Need something <span className="text-[var(--safety)]">custom</span>?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored solution.
          </p>
          <Link to="/quote-request" className="btn--primary btn--primary--safety">
            Request a Quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
