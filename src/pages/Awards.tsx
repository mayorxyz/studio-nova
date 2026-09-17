import { useEffect, useState } from 'react';
import { awards } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Awards() {
  const [filter, setFilter] = useState<number | 'all'>('all');

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

  const filteredAwards = filter === 'all' ? awards : awards.filter((a) => a.year === filter);
  const years = Array.from(new Set(awards.map((a) => a.year))).sort((a, b) => b - a);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Recognition</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Awards & <span className="text-[var(--safety)]">Recognition</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Our work has been recognized by leading industry organizations and publications. We're proud of the impact we've made for our clients.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">{awards.length}</div>
              <div className="stat-card__label">Awards Won</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">{years.length}</div>
              <div className="stat-card__label">Years Recognized</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">
                {awards.filter((a) => a.featured).length}
              </div>
              <div className="stat-card__label">Featured Awards</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">
                {new Set(awards.map((a) => a.organization)).size}
              </div>
              <div className="stat-card__label">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            <button
              onClick={() => setFilter('all')}
              className={`tag cursor-pointer transition-all ${
                filter === 'all' ? 'tag--filled' : 'tag--ghost'
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilter(year)}
                className={`tag cursor-pointer transition-all ${
                  filter === year ? 'tag--filled' : 'tag--ghost'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="grid-3">
            {filteredAwards.map((award, i) => (
              <div
                key={award.id}
                className="bento-card reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="text-[var(--safety)] font-display font-bold text-4xl">01</div>
                  <span className="text-micro text-[var(--muted)]">{award.year}</span>
                </div>
                <h3 className="text-h3 mb-2">{award.title}</h3>
                <Tag variant="safety">{award.organization}</Tag>
                <p className="text-data text-[var(--muted)] mt-3 mb-3">{award.description}</p>
                {award.project && (
                  <div className="text-micro text-[var(--muted)]">
                    Project: <span className="text-[var(--safety)]">{award.project}</span>
                  </div>
                )}
                {award.url && (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-micro text-[var(--safety)] hover:underline mt-2 inline-block"
                  >
                    View Award →
                  </a>
                )}
              </div>
            ))}
          </div>

          {filteredAwards.length === 0 && (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)]">No awards found for the selected year.</p>
            </div>
          )}
        </div>
      </section>

      {/* Press Mentions */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>As Seen In</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Press <span className="text-[var(--safety)]">Mentions</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
            {['Awwwards', 'CSS Design', 'Behance', 'Dribbble', 'AIGA', 'Communication Arts'].map(
              (pub, i) => (
                <div key={i} className="bento-card text-center hover-lift">
                  <div className="font-display font-bold text-lg">{pub}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Want to create award-winning work?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
          <a href="/quote-request" className="btn--primary btn--primary--safety">
            Start a Project →
          </a>
        </div>
      </section>
    </div>
  );
}
