import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Get all unique tags from blog posts
const getAllTags = () => {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Map URL slugs to actual tag names
const getTagFromSlug = (slug: string): string | null => {
  const allTags = getAllTags();
  const tagSlugMap: Record<string, string> = {};
  allTags.forEach(tag => {
    tagSlugMap[tag.toLowerCase().replace(/\s+/g, '-')] = tag;
  });
  return tagSlugMap[slug] || null;
};

export default function BlogTag() {
  const { slug } = useParams<{ slug: string }>();
  
  const tagName = slug ? getTagFromSlug(slug) : null;
  const filteredPosts = tagName 
    ? blogPosts.filter(post => post.tags.includes(tagName))
    : [];

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

  if (!tagName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Tag Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The tag you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn--primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const allTags = getAllTags();

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
            <span className="text-[var(--safety)]">#{tagName}</span>
          </SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            Posts tagged <span className="text-[var(--safety)]">#{tagName}</span>
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Explore all articles related to {tagName.toLowerCase()}. Discover insights, tutorials, and case studies.
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
                No articles found with this tag yet.
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
                    <div className="flex justify-between items-center mb-3">
                      <Tag variant="safety">{post.category}</Tag>
                      <span className="text-micro text-[var(--muted)]">{post.date}</span>
                    </div>
                    <h3 className="text-h3 mb-2">{post.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-micro text-[var(--muted)]">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All Tags */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Browse by Tag</SectionEyebrow>
            <h2 className="text-h2 mt-2">Explore all <span className="text-[var(--safety)]">topics</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 reveal">
            {allTags.map((tag) => {
              const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
              const count = blogPosts.filter(p => p.tags.includes(tag)).length;
              const isActive = tag === tagName;
              
              return (
                <Link
                  key={tag}
                  to={`/blog/tag/${tagSlug}`}
                  className={`tag cursor-pointer transition-all ${
                    isActive ? 'tag--filled' : 'tag--ghost hover:bg-[var(--safety)] hover:text-[var(--ink)]'
                  }`}
                >
                  #{tag} ({count})
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
