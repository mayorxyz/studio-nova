import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data';
import { SectionEyebrow, Tag, Button, FeatCard } from '../components/atomic';
import type { Service, SubService } from '../data';

export default function ServiceDetail() {
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
  }, [slug]);

  // Find parent service
  const parentService = services.find(s => s.slug === slug);

  // Find sub-service if not a parent
  let subService: SubService | undefined;
  let parentOfSubService: Service | undefined;

  if (!parentService) {
    for (const service of services) {
      const found = service.subServices.find(sub => sub.slug === slug);
      if (found) {
        subService = found;
        parentOfSubService = service;
        break;
      }
    }
  }

  // If neither found, redirect to 404
  if (!parentService && !subService) {
    return <Navigate to="/404" replace />;
  }

  // Render sub-service page
  if (subService && parentOfSubService) {
    return (
      <div className="pb-20">
        {/* Hero */}
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="max-w-[1400px] mx-auto w-full">
            <SectionEyebrow>
              <Link to={`/services/${parentOfSubService.slug}`} className="hover:text-[var(--safety)] transition-colors">
                {parentOfSubService.title}
              </Link>
              {' / '}
              {subService.title}
            </SectionEyebrow>
            <h1 className="text-h1 mt-4 reveal">
              {subService.title}
            </h1>
            <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
              {subService.description}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>What's Included</SectionEyebrow>
              <h2 className="text-h2 mt-2">Service <span className="text-[var(--safety)]">features.</span></h2>
            </div>
            <div className="grid-2">
              {subService.features.map((feature, i) => (
                <FeatCard
                  key={feature}
                  icon="◆"
                  title={feature}
                  description={`Expert ${feature.toLowerCase()} delivered with precision and care.`}
                  variant={i % 2 === 0 ? 'default' : 'dark'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Related Services</SectionEyebrow>
              <h2 className="text-h2 mt-2">Explore more</h2>
            </div>
            <div className="grid-3">
              {parentOfSubService.subServices
                .filter(s => s.slug !== subService!.slug)
                .slice(0, 3)
                .map((related) => (
                  <Link key={related.slug} to={`/services/${related.slug}`}>
                    <div className="bento-card hover-lift h-full">
                      <h3 className="text-h3">{related.title}</h3>
                      <p className="text-data text-[var(--muted)] mt-2">{related.description}</p>
                      <div className="mt-4 text-[var(--safety)] text-sm">Learn more →</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="max-w-[1400px] mx-auto text-center reveal">
            <h2 className="text-h2 mb-4">Ready to get started?</h2>
            <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Let's discuss how {subService.title} can help your business grow.
            </p>
            <Link to="/quote-request">
              <Button variant="primary" safety>
                Request a Quote →
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Render parent service page
  if (parentService) {
    return (
      <div className="pb-20">
        {/* Hero */}
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="max-w-[1400px] mx-auto w-full">
            <SectionEyebrow>Service {parentService.number}</SectionEyebrow>
            <h1 className="text-h1 mt-4 reveal">
              {parentService.title}
            </h1>
            <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
              {parentService.description}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Core Capabilities</SectionEyebrow>
              <h2 className="text-h2 mt-2">What we <span className="text-[var(--safety)]">deliver.</span></h2>
            </div>
            <div className="grid-2">
              {parentService.features.map((feature, i) => (
                <FeatCard
                  key={feature}
                  icon="◆"
                  title={feature}
                  description={`Comprehensive ${feature.toLowerCase()} solutions tailored to your needs.`}
                  variant={i % 2 === 0 ? 'default' : 'dark'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Our Toolkit</SectionEyebrow>
              <h2 className="text-h2 mt-2">Technologies we <span className="text-[var(--safety)]">use.</span></h2>
            </div>
            <div className="grid-4">
              {parentService.tools.map((tool) => (
                <div key={tool} className="bento-card text-center hover-lift">
                  <div className="text-h3 text-[var(--safety)]">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        {parentService.methodology && parentService.methodology.length > 0 && (
          <section className="section">
            <div className="max-w-[1400px] mx-auto">
              <div className="section__header reveal">
                <SectionEyebrow>Our Process</SectionEyebrow>
                <h2 className="text-h2 mt-2">How we <span className="text-[var(--safety)]">work.</span></h2>
              </div>
              <div className="space-y-4">
                {parentService.methodology.map((step, i) => (
                  <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="flex gap-6">
                      <div className="text-[var(--safety)] font-display font-bold text-4xl flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <p className="text-data text-[var(--muted)] leading-relaxed">{step}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables */}
        {parentService.deliverables && parentService.deliverables.length > 0 && (
          <section className="section--surface">
            <div className="max-w-[1400px] mx-auto">
              <div className="section__header reveal">
                <SectionEyebrow>What You Get</SectionEyebrow>
                <h2 className="text-h2 mt-2">Project <span className="text-[var(--safety)]">deliverables.</span></h2>
              </div>
              <div className="grid-2">
                {parentService.deliverables.map((deliverable, i) => (
                  <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--safety)] text-xl mt-1">✓</span>
                      <p className="text-data">{deliverable}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline & Pricing */}
        {(parentService.timeline || parentService.pricing) && (
          <section className="section">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {parentService.timeline && (
                  <div className="bento-card reveal">
                    <div className="text-micro text-[var(--muted)] mb-2">Typical Timeline</div>
                    <div className="text-h2 text-[var(--safety)]">{parentService.timeline}</div>
                  </div>
                )}
                {parentService.pricing && (
                  <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
                    <div className="text-micro text-[var(--muted)] mb-3">Investment Range</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-data">Starter</span>
                        <span className="text-data font-semibold">{parentService.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-data">Growth</span>
                        <span className="text-data font-semibold">{parentService.pricing.growth}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-data">Enterprise</span>
                        <span className="text-data font-semibold">{parentService.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Sub-Services */}
        <section className="section">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Specializations</SectionEyebrow>
              <h2 className="text-h2 mt-2">Explore our <span className="text-[var(--safety)]">services.</span></h2>
            </div>
            <div className="grid-3">
              {parentService.subServices.map((sub) => (
                <Link key={sub.slug} to={`/services/${sub.slug}`}>
                  <div className="bento-card hover-lift h-full">
                    <h3 className="text-h3">{sub.title}</h3>
                    <p className="text-data text-[var(--muted)] mt-2">{sub.description}</p>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {sub.features.slice(0, 3).map((f) => (
                        <Tag key={f} variant="ghost">{f}</Tag>
                      ))}
                    </div>
                    <div className="mt-4 text-[var(--safety)] text-sm">Learn more →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {parentService.faq && parentService.faq.length > 0 && (
          <section className="section--surface">
            <div className="max-w-[1400px] mx-auto">
              <div className="section__header reveal">
                <SectionEyebrow>Common Questions</SectionEyebrow>
                <h2 className="text-h2 mt-2">Frequently asked <span className="text-[var(--safety)]">questions.</span></h2>
              </div>
              <div className="space-y-4">
                {parentService.faq.map((item, i) => (
                  <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <h3 className="text-h3 mb-3">{item.question}</h3>
                    <p className="text-data text-[var(--muted)] leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section--dark">
          <div className="max-w-[1400px] mx-auto text-center reveal">
            <h2 className="text-h2 mb-4">Ready to transform your business?</h2>
            <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Let's discuss how {parentService.title} can help you achieve your goals.
            </p>
            <Link to="/quote-request">
              <Button variant="primary" safety>
                Request a Quote →
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return null;
}
