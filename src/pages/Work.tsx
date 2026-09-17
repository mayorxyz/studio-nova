import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const categories = ['All', 'Branding', 'Web Design', 'UI/UX', 'Motion'];

export default function Work() {
  const [filter, setFilter] = useState('All');

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

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="hero relative overflow-hidden" style={{ minHeight: '60vh' }}>
        {/* Large decorative number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 big-number opacity-20 pointer-events-none select-none hidden md:block" style={{ fontSize: 'clamp(8rem, 25vw, 25rem)' }}>
          W.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="section__label reveal">Work Index — {projects.length} Projects</div>
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.1s' }}>
            Our <span className="text-[var(--safety)]">Work</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-xl reveal" style={{ transitionDelay: '0.2s' }}>
            Every project is a collaboration. Here's a selection of work we're proud of — from startups to enterprise.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section pt-0">
        <div className="flex flex-wrap gap-2 mb-8 reveal">
          {categories.map((cat) => {
            const slug = cat === 'All' ? null : cat.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                key={cat}
                to={slug ? `/work/category/${slug}` : '/work'}
                className={`tag cursor-pointer transition-all ${
                  filter === cat ? 'tag--filled' : 'tag--ghost'
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="block"
            >
              <div
                className="bento-card reveal hover-lift cursor-pointer"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="tag tag--safety">{project.category}</span>
                  <span className="text-micro text-[var(--muted)]">{project.year}</span>
                </div>
                <h3 className="text-h3 mb-2">{project.title}</h3>
                <p className="text-data text-[var(--muted)] mb-4">{project.description}</p>
                <div className="flex justify-between items-center border-t border-[var(--ink)] pt-3">
                  <span className="text-data font-semibold text-[var(--safety)]">{project.result}</span>
                  <span className="text-micro">View Case Study →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <div className="section__label">Browse by Category</div>
            <h2 className="text-h2">Find work by type</h2>
          </div>
          <div className="grid-4">
            {[
              { name: 'Branding', slug: 'branding', count: 24, color: 'bg-[var(--safety)]' },
              { name: 'Web Design', slug: 'web-design', count: 38, color: 'bg-[var(--ink)]' },
              { name: 'UI/UX', slug: 'ui-ux', count: 31, color: 'bg-[var(--term-bg)]' },
              { name: 'Motion', slug: 'motion', count: 18, color: 'bg-[var(--safety)]' },
            ].map((cat, i) => (
              <Link
                key={i}
                to={`/work/category/${cat.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bento-card hover-lift h-full">
                  <div className={`w-full h-2 ${cat.color} mb-4`} />
                  <h3 className="text-h3">{cat.name}</h3>
                  <p className="text-data text-[var(--muted)]">{cat.count} projects</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="text-center reveal">
          <h2 className="text-h2 mb-4">Have a project in mind?</h2>
          <Link to="/contact" className="btn--primary btn--primary--safety">
            Let's Talk →
          </Link>
        </div>
      </section>
    </div>
  );
}
