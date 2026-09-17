import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { resources } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Resources() {
  const [filter, setFilter] = useState<string>('all');

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
  }, [filter]);

  const filteredResources = filter === 'all' ? resources : resources.filter((r) => r.category === filter);
  const categories = ['all', 'guide', 'template', 'whitepaper', 'tool'];
  const featuredResources = resources.filter((r) => r.featured);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Resources</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Free <span className="text-[var(--safety)]">Resources</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Guides, templates, whitepapers, and tools to help you improve your design process and grow your business.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Featured</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Most <span className="text-[var(--safety)]">Popular</span>
            </h2>
          </div>
          <div className="grid-3">
            {featuredResources.map((resource, i) => (
              <Link
                key={resource.id}
                to={resource.category === 'tool' ? `/resources/tools/${resource.slug}` : `/resources/${resource.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bento-card bento-card--dark hover-lift h-full">
                  <Tag variant="safety" className="mb-3">
                    Featured
                  </Tag>
                  <h3 className="text-h3 mb-2 text-[var(--base)]">{resource.title}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <Tag variant="ghost">{resource.type}</Tag>
                    <span className="text-micro text-[var(--safety)]">
                      {resource.category === 'tool' ? 'Use Tool →' : 'Download →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>All Resources</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Browse by <span className="text-[var(--safety)]">Category</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`tag cursor-pointer transition-all ${
                  filter === cat ? 'tag--filled' : 'tag--ghost'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid-2">
            {filteredResources.map((resource, i) => (
              <Link
                key={resource.id}
                to={resource.category === 'tool' ? `/resources/tools/${resource.slug}` : `/resources/${resource.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="bento-card hover-lift h-full">
                  <div className="flex justify-between items-start mb-3">
                    <Tag variant="safety">
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </Tag>
                    {resource.fileSize && (
                      <span className="text-micro text-[var(--muted)]">{resource.fileSize}</span>
                    )}
                  </div>
                  <h3 className="text-h3 mb-2">{resource.title}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag} variant="ghost">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-micro text-[var(--muted)]">{resource.type}</span>
                    <span className="text-micro text-[var(--safety)]">
                      {resource.category === 'tool' ? 'Use Tool →' : 'Download →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)]">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Need something custom?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We can create custom resources, templates, and tools tailored to your specific needs.
          </p>
          <a href="/quote-request" className="btn--primary btn--primary--safety">
            Request Custom Resources →
          </a>
        </div>
      </section>
    </div>
  );
}
