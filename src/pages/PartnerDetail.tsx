import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { partners } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function PartnerDetail() {
  const { slug } = useParams<{ slug: string }>();

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

  const partner = partners.find((p) => p.slug === slug);

  if (!partner) {
    return <Navigate to="/404" replace />;
  }

  // Get related partners (same category)
  const relatedPartners = partners
    .filter((p) => p.id !== partner.id && p.category === partner.category)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/partners" className="hover:text-[var(--safety)] transition-colors">
              Partners
            </Link>
            {' / '}
            {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
          </SectionEyebrow>
          <div className="flex items-center gap-6 mt-4 reveal">
            <div className="text-8xl">{partner.logo}</div>
            <div>
              <h1 className="text-h1">{partner.name}</h1>
              <Tag variant="safety" className="mt-2">
                {partner.partnershipType}
              </Tag>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div className="reveal">
              <h2 className="text-h2 mb-4">About {partner.name}</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-6">{partner.description}</p>

              <h3 className="text-h3 mb-3">Partnership Benefits</h3>
              <ul className="space-y-2 mb-6">
                {partner.benefits.map((benefit) => (
                  <li key={benefit} className="text-data text-[var(--muted)] flex items-start gap-2">
                    <span className="text-[var(--safety)] mt-1">◆</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-h3 mb-3">Why We Partner</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                We chose to partner with {partner.name} because of their commitment to innovation, reliability, and customer success. 
                Their platform enables us to deliver exceptional results for our clients while maintaining the highest standards of quality and performance.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark sticky top-24">
                <h3 className="text-h3 mb-4 text-[var(--base)]">Partner Details</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Category</div>
                    <div className="text-data text-[var(--base)]">
                      {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Partnership Type</div>
                    <div className="text-data text-[var(--base)]">{partner.partnershipType}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Website</div>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-data text-[var(--safety)] hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--primary btn--primary--safety w-full justify-center"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Partners */}
      {relatedPartners.length > 0 && (
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>More Partners</SectionEyebrow>
              <h2 className="text-h2 mt-2">
                Related <span className="text-[var(--safety)]">Partners</span>
              </h2>
            </div>
            <div className="grid-3">
              {relatedPartners.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/partners/${p.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <div className="text-5xl mb-3">{p.logo}</div>
                    <Tag variant="safety" className="mb-3">
                      {p.partnershipType}
                    </Tag>
                    <h3 className="text-h3 mb-2">{p.name}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{p.description}</p>
                    <span className="text-micro text-[var(--safety)]">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Want to work with {partner.name}?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            As a certified {partner.name} partner, we can help you implement and optimize their platform for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/partners" className="btn--primary">
              ← Back to Partners
            </Link>
            <a href="/quote-request" className="btn--ghost">
              Start a Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
