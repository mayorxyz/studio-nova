import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Map category names to URL-friendly slugs
const categorySlugs: Record<string, string> = {
  'Design Tips': 'design-tips',
  'Business': 'business',
  'Tutorials': 'tutorials',
  'Industry News': 'industry-news',
  'Case Studies': 'case-studies',
};

// Reverse mapping: slug to category name
const slugToCategory: Record<string, string> = Object.entries(categorySlugs).reduce(
  (acc, [category, slug]) => {
    acc[slug] = category;
    return acc;
  },
  {} as Record<string, string>
);

export default function BlogCategory() {
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

  const categoryName = slugToCategory[slug || ''];
  
  if (!categoryName) {
    return <Navigate to="/404" replace />;
  }

  const posts = blogPosts.filter(p => p.category === categoryName);

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    'Design Tips': 'Practical advice and techniques to improve your design skills and workflow.',
    'Business': 'Insights on running a creative business, client management, and growth strategies.',
    'Tutorials': 'Step-by-step guides and technical walkthroughs for designers and developers.',
    'Industry News': 'Latest trends, tools, and developments in the design and tech industry.',
    'Case Studies': 'Deep dives into real projects, showcasing our process and results.',
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 reveal">
            <Link to="/" className="text-micro text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
              Home
            </Link>
            <span className="text-micro text-[var(--muted)]">/</span>
            <Link to="/blog" className="text-micro text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
              Blog
            </Link>
            <span className="text-micro text-[var(--muted)]">/</span>
            <span className="text-micro text-[var(--safety)]">{categoryName}</span>
          </div>
          
          <SectionEyebrow>Category</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal" style={{ transitionDelay: '0.1s' }}>
            {categoryName}
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.2s' }}>
            {categoryDescriptions[categoryName]}
          </p>
          
          <div className="mt-6 reveal" style={{ transitionDelay: '0.3s' }}>
            <Tag variant="safety">{posts.length} {posts.length === 1 ? 'article' : 'articles'}</Tag>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-h3 text-[var(--muted)]">No articles found in this category.</p>
              <Link to="/blog" className="btn--ghost mt-6 inline-block">
                ← Back to All Articles
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="bento-card hover-lift">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 items-center">
                      <div>
                        <Tag variant="safety">{post.category}</Tag>
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
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Explore More</SectionEyebrow>
            <h2 className="text-h2 mt-2">Other <span className="text-[var(--safety)]">categories.</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(categorySlugs)
              .filter(([cat]) => cat !== categoryName)
              .map(([category, categorySlug], i) => {
                const count = blogPosts.filter(p => p.category === category).length;
                return (
                  <Link
                    key={categorySlug}
                    to={`/blog/category/${categorySlug}`}
                    className="block reveal"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="bento-card hover-lift h-full">
                      <h3 className="text-h3 mb-2">{category}</h3>
                      <p className="text-data text-[var(--muted)]">{count} articles</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Stay updated</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for weekly insights delivered to your inbox.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="btn--ghost">
              ← All Articles
            </Link>
            <Link to="/contact" className="btn--primary btn--primary--safety">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
