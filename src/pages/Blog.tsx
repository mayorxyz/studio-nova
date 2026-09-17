import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Design Tips', 'Business', 'Tutorials', 'Industry News', 'Case Studies'];

const posts = [
  { id: 1, title: 'Design Trends Shaping 2024', category: 'Industry News', date: '2024-01-15', readTime: '5 min', excerpt: 'From AI-assisted design to brutalist revival — the trends defining this year.' },
  { id: 2, title: '5 Branding Mistakes Startups Make', category: 'Design Tips', date: '2024-01-08', readTime: '4 min', excerpt: 'Avoid these common pitfalls when building your brand from scratch.' },
  { id: 3, title: 'UX Case Study: FinFlow Redesign', category: 'Case Studies', date: '2023-12-20', readTime: '8 min', excerpt: 'How we increased user engagement by 2.5x through strategic UX improvements.' },
  { id: 4, title: 'Webflow vs WordPress in 2024', category: 'Tutorials', date: '2023-12-12', readTime: '6 min', excerpt: 'A practical comparison for teams deciding on their CMS platform.' },
  { id: 5, title: 'The Psychology of Color in Branding', category: 'Design Tips', date: '2023-11-28', readTime: '7 min', excerpt: 'How color choices influence perception and drive consumer behavior.' },
  { id: 6, title: 'AI in Design: Tool or Threat?', category: 'Industry News', date: '2023-11-15', readTime: '5 min', excerpt: 'Exploring how AI is changing the creative landscape — and what it means for designers.' },
  { id: 7, title: 'Building a Design System from Scratch', category: 'Tutorials', date: '2023-10-30', readTime: '10 min', excerpt: 'A step-by-step guide to creating scalable, maintainable design systems.' },
  { id: 8, title: 'Client Onboarding: Our Process', category: 'Business', date: '2023-10-15', readTime: '4 min', excerpt: 'How we set up every project for success from day one.' },
];

export default function Blog() {
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

  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="hero relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute right-[5%] top-[20%] big-number opacity-10 pointer-events-none select-none hidden lg:block">
          B.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="section__label reveal">Blog — Insights & Resources</div>
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.1s' }}>
            The <span className="text-[var(--safety)]">Journal.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-xl reveal" style={{ transitionDelay: '0.2s' }}>
            Thoughts on design, business, technology, and the creative process. Updated weekly.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker ticker--safety">
        <div className="ticker__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="ticker__item">
              Design Tips ◆ Business ◆ Tutorials ◆ Industry News ◆ Case Studies ◆ New Posts Weekly
            </span>
          ))}
        </div>
      </div>

      {/* Filter */}
      <section className="section">
        <div className="flex flex-wrap gap-2 mb-8 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`tag cursor-pointer transition-all ${
                filter === cat ? 'tag--filled' : 'tag--ghost'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filtered.map((post, i) => (
            <div key={post.id} className="bento-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 items-center">
                <div>
                  <span className="tag tag--safety">{post.category}</span>
                  <div className="text-micro text-[var(--muted)] mt-2">{post.date}</div>
                </div>
                <div>
                  <h3 className="text-h3 mb-1">{post.title}</h3>
                  <p className="text-data text-[var(--muted)]">{post.excerpt}</p>
                </div>
                <div className="text-right">
                  <span className="text-micro text-[var(--muted)]">{post.readTime} read</span>
                  <div className="text-[var(--safety)] text-sm mt-1">Read →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <div className="section__label text-[var(--muted)] justify-center">Newsletter</div>
          <h2 className="text-h2 mb-4">Get weekly <span className="text-[var(--safety)]">insights.</span></h2>
          <p className="text-data text-[var(--muted)] mb-6 max-w-lg mx-auto">
            Join 2,000+ designers and founders who receive our weekly digest.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-[var(--term-bg)] border border-[#333] text-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
            />
            <button className="btn--primary btn--primary--safety">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
