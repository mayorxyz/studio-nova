import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Map URL slugs to actual category names
const categoryMap: Record<string, string> = {
  'design-tips': 'Design Tips',
  'business': 'Business',
  'tutorials': 'Tutorials',
  'industry-news': 'Industry News',
  'case-studies': 'Case Studies',
};

// Category descriptions for SEO and context
const categoryDescriptions: Record<string, string> = {
  'Design Tips': 'Practical advice and insights to improve your design workflow and create better user experiences.',
  'Business': 'Strategies and insights for running a successful design business and growing your practice.',
  'Tutorials': 'Step-by-step guides and technical tutorials to help you master design tools and techniques.',
  'Industry News': 'Latest trends, updates, and developments shaping the design and technology landscape.',
  'Case Studies': 'Deep dives into real projects, showcasing our process, challenges, and results.',
};

export default function BlogCategory() {
  const { slug } = useParams<{ slug: string }>();
  
  const categoryName = categoryMap[slug || ''];
  const filteredPosts = blogPosts.filter(post => post.category === categoryName);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  if (!categoryName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Category Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn--primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const description = categoryDescriptions[categoryName] || '';

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/blog" className="hover:text-[var(--safety)] transition-colors">
              Blog
            </Link>
            {' / '}
            {categoryName}
          </SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            {categoryName}
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            {description}
          </p>

          <div className="flex items-center gap-4 mt-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="text-micro text-[var(--muted)]">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)] mb-8">
                No articles found in this category yet.
              </p>
              <Link to="/blog" className="btn--ghost">
                ← Back to All Articles
              </Link>
            </div>
          ) : (
            <div className="grid-2">
              {filteredPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <div className="flex justify-between items-start mb-3">
                      <Tag variant="safety">{post.category}</Tag>
                      <span className="text-micro text-[var(--muted)]">{post.date}</span>
                    </div>
                    <h3 className="text-h3 mb-2">{post.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-micro text-[var(--muted)]">
                      <span>{post.author}</span>
                      <span>{post.readTime} read</span>
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
            <h2 className="text-h2 mt-2">Other <span className="text-[var(--safety)]">categories</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(categoryMap).map(([categorySlug, name]) => {
              if (name === categoryName) return null; // Skip current category
              const count = blogPosts.filter(p => p.category === name).length;
              return (
                <Link
                  key={categorySlug}
                  to={`/blog/category/${categorySlug}`}
                  className="reveal"
                >
                  <div className="bento-card hover-lift text-center">
                    <h3 className="text-h3 mb-2">{name}</h3>
                    <p className="text-micro text-[var(--muted)]">
                      {count} {count === 1 ? 'article' : 'articles'}
                    </p>
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
          <h2 className="text-h2 mb-4">Want to see all articles?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Browse our complete collection of insights, tutorials, and case studies.
          </p>
          <Link to="/blog" className="btn--primary">
            View All Articles →
          </Link>
        </div>
      </section>
    </div>
  );
}
