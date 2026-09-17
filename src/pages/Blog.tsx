import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const categories = ['All', 'Design Tips', 'Business', 'Tutorials', 'Industry News', 'Case Studies'];

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

  const filtered = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter);

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
          {categories.map((cat) => {
            const slug = cat === 'All' ? null : cat.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                key={cat}
                to={slug ? `/blog/category/${slug}` : '/blog'}
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

        {/* Posts */}
        <div className="space-y-4">
          {filtered.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="bento-card hover-lift">
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
            </Link>
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
