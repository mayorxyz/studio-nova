import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { resources } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function ResourceDetail() {
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

  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/404" replace />;
  }

  // Get related resources (same category)
  const relatedResources = resources
    .filter((r) => r.id !== resource.id && r.category === resource.category)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/resources" className="hover:text-[var(--safety)] transition-colors">
              Resources
            </Link>
            {' / '}
            {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
          </SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">{resource.title}</h1>
          <div className="flex flex-wrap gap-2 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{resource.type}</Tag>
            {resource.fileSize && <Tag variant="ghost">{resource.fileSize}</Tag>}
            {resource.pages && <Tag variant="ghost">{resource.pages} pages</Tag>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div className="reveal">
              <h2 className="text-h2 mb-4">About This Resource</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-6">{resource.description}</p>

              <h3 className="text-h3 mb-3">What's Included</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Comprehensive coverage of {resource.category} best practices</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Ready-to-use templates and examples</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Step-by-step instructions and guidance</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Regular updates and improvements</span>
                </li>
              </ul>

              <h3 className="text-h3 mb-3">Who Is This For?</h3>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                This resource is designed for designers, developers, and business owners who want to improve their
                {resource.category === 'guide' && ' knowledge and skills'}
                {resource.category === 'template' && ' workflow efficiency'}
                {resource.category === 'whitepaper' && ' strategic understanding'}
                {resource.category === 'tool' && ' productivity and results'}
                . Whether you're just starting out or looking to refine your approach, this resource provides valuable insights and practical guidance.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark sticky top-24">
                <h3 className="text-h3 mb-4 text-[var(--base)]">Download Resource</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Format</div>
                    <div className="text-data text-[var(--base)]">{resource.type}</div>
                  </div>
                  {resource.fileSize && (
                    <div>
                      <div className="text-micro text-[var(--muted)] mb-1">File Size</div>
                      <div className="text-data text-[var(--base)]">{resource.fileSize}</div>
                    </div>
                  )}
                  {resource.pages && (
                    <div>
                      <div className="text-micro text-[var(--muted)] mb-1">Pages</div>
                      <div className="text-data text-[var(--base)]">{resource.pages}</div>
                    </div>
                  )}
                </div>
                <a
                  href={resource.downloadUrl || '#'}
                  className="btn--primary btn--primary--safety w-full justify-center"
                >
                  {resource.category === 'tool' ? 'Use Tool →' : 'Download Now →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="section pt-0">
        <div className="max-w-[1000px] mx-auto">
          <div className="bento-card reveal">
            <h3 className="text-h3 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <Tag key={tag} variant="ghost">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Related Resources</SectionEyebrow>
              <h2 className="text-h2 mt-2">
                You might also <span className="text-[var(--safety)]">like</span>
              </h2>
            </div>
            <div className="grid-3">
              {relatedResources.map((res, i) => (
                <Link
                  key={res.id}
                  to={`/resources/${res.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <Tag variant="safety" className="mb-3">
                      {res.type}
                    </Tag>
                    <h3 className="text-h3 mb-2">{res.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{res.description}</p>
                    <span className="text-micro text-[var(--safety)]">View Resource →</span>
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
          <h2 className="text-h2 mb-4">Need more resources?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Browse our complete collection of guides, templates, whitepapers, and tools.
          </p>
          <Link to="/resources" className="btn--primary">
            ← Back to Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
