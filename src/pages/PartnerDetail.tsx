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
    <div className="w-full max-w-full overflow-x-hidden min-w-0">
      {/* Hero */}
      <section className="hero w-full min-h-[40vh] flex flex-col justify-center py-12 sm:py-16">
        <div className="w-full max-w-7xl px-4 min-w-0 sm:px-6 md:px-8 mx-auto">
          <SectionEyebrow>
            <Link to="/partners" className="hover:text-[var(--safety)] transition-colors break-words">
              Partners
            </Link>
            {' / '}
            <span className="break-words">
              {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
            </span>
          </SectionEyebrow>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 reveal min-w-0">
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="h-16 sm:h-20 w-auto max-w-full object-contain shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-h1 break-words">{partner.name}</h1>
              <Tag variant="safety" className="mt-2 inline-block">
                {partner.partnershipType}
              </Tag>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section w-full py-12 sm:py-16">
        <div className="w-full max-w-7xl px-4 min-w-0 sm:px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] min-w-0">
            
            {/* Left Column: Main Content */}
            <div className="reveal min-w-0 space-y-6">
              <div>
                <h2 className="text-h2 mb-4 break-words">About {partner.name}</h2>
                <p className="text-data text-[var(--muted)] leading-relaxed break-words">
                  {partner.description}
                </p>
              </div>

              <div>
                <h3 className="text-h3 mb-3 break-words">Partnership Benefits</h3>
                <ul className="space-y-3">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="text-data text-[var(--muted)] flex items-start gap-2 min-w-0">
                      <span className="text-[var(--safety)] mt-1 shrink-0">◆</span>
                      <span className="break-words">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-h3 mb-3 break-words">Why We Partner</h3>
                <p className="text-data text-[var(--muted)] leading-relaxed break-words">
                  We chose to partner with {partner.name} because of their commitment to innovation, reliability, and customer success. 
                  Their platform enables us to deliver exceptional results for our clients while maintaining the highest standards of quality and performance.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="reveal min-w-0" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark sticky top-24 min-w-0 flex flex-col">
                <h3 className="text-h3 mb-4 text-[var(--base)] break-words">Partner Details</h3>
                <div className="space-y-4 mb-6 min-w-0">
                  <div className="min-w-0">
                    <div className="text-micro text-[var(--muted)] mb-1">Category</div>
                    <div className="text-data text-[var(--base)] break-words">
                      {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-micro text-[var(--muted)] mb-1">Partnership Type</div>
                    <div className="text-data text-[var(--base)] break-words">{partner.partnershipType}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-micro text-[var(--muted)] mb-1">Website</div>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-data text-[var(--safety)] hover:underline break-all inline-block"
                    >
                      {partner.website}
                    </a>
                  </div>
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--primary btn--primary--safety w-full justify-center shrink-0"
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
        <section className="section--surface w-full py-12 sm:py-16">
          <div className="w-full max-w-7xl px-4 min-w-0 sm:px-6 md:px-8 mx-auto">
            <div className="section__header reveal mb-8 min-w-0">
              <SectionEyebrow>More Partners</SectionEyebrow>
              <h2 className="text-h2 mt-2 break-words">
                Related <span className="text-[var(--safety)]">Partners</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-w-0">
              {relatedPartners.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/partners/${p.slug}`}
                  className="block reveal min-w-0"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bento-card hover-lift h-full flex flex-col min-w-0">
                    <div className="text-5xl mb-3 shrink-0">{p.logo}</div>
                    <Tag variant="safety" className="mb-3 inline-block w-max">
                      {p.partnershipType}
                    </Tag>
                    <h3 className="text-h3 mb-2 break-words">{p.name}</h3>
                    <p className="text-data text-[var(--muted)] mb-4 flex-1 break-words">{p.description}</p>
                    <span className="text-micro text-[var(--safety)] shrink-0">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section w-full py-12 sm:py-16">
        <div className="w-full max-w-7xl px-4 min-w-0 sm:px-6 md:px-8 mx-auto text-center reveal">
          <h2 className="text-h2 mb-4 break-words">Want to work with {partner.name}?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto break-words">
            As a certified {partner.name} partner, we can help you implement and optimize their platform for your needs.
          </p>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center min-w-0">
            <Link to="/partners" className="btn--primary w-full sm:w-auto justify-center">
              ← Back to Partners
            </Link>
            <a href="/quote-request" className="btn--ghost w-full sm:w-auto justify-center">
              Start a Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}