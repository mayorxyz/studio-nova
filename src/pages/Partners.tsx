import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { partners } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Partners() {
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

  const featuredPartners = partners.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Partners</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Our <span className="text-[var(--safety)]">Partners</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            We work with leading technology partners to deliver exceptional solutions for our clients.
          </p>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Featured</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Technology <span className="text-[var(--safety)]">Partners</span>
            </h2>
          </div>
          <div className="grid-3">
            {featuredPartners.map((partner, i) => (
              <Link
                key={partner.id}
                to={`/partners/${partner.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bento-card bento-card--dark hover-lift h-full">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 mb-4 object-contain"
                  />
                  <Tag variant="safety" className="mb-3">
                    {partner.partnershipType}
                  </Tag>
                  <h3 className="text-h3 mb-2 text-[var(--base)]">{partner.name}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{partner.description}</p>
                  <span className="text-micro text-[var(--safety)]">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>All Partners</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Our <span className="text-[var(--safety)]">Ecosystem</span>
            </h2>
          </div>
          <div className="grid-2">
            {partners.map((partner, i) => (
              <Link
                key={partner.id}
                to={`/partners/${partner.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="bento-card hover-lift h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-10 object-contain"
                    />
                    <div className="flex-1">
                      <Tag variant="safety" className="mb-2">
                        {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
                      </Tag>
                      <h3 className="text-h3">{partner.name}</h3>
                    </div>
                  </div>
                  <p className="text-data text-[var(--muted)] mb-4">{partner.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {partner.benefits.slice(0, 3).map((benefit) => (
                      <Tag key={benefit} variant="ghost">
                        {benefit}
                      </Tag>
                    ))}
                  </div>
                  <span className="text-micro text-[var(--safety)]">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Why Partner With Us</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Partnership <span className="text-[var(--safety)]">Benefits</span>
            </h2>
          </div>
          <div className="grid-3">
            <div className="bento-card reveal">
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Expert Implementation</h3>
              <p className="text-data text-[var(--muted)]">
                Our certified experts ensure your technology stack is implemented correctly and optimized for performance.
              </p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Seamless Integration</h3>
              <p className="text-data text-[var(--muted)]">
                We integrate multiple platforms and tools to create cohesive, efficient workflows for your team.
              </p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Ongoing Support</h3>
              <p className="text-data text-[var(--muted)]">
                Our partnership doesn't end at launch. We provide ongoing support, training, and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Interested in becoming a partner?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We're always looking to expand our partner network. Let's discuss how we can work together.
          </p>
          <a href="/contact" className="btn--primary btn--primary--safety">
            Become a Partner →
          </a>
        </div>
      </section>
    </div>
  );
}
