import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';
import { useSEO } from '../hooks/useSEO';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useSEO({
    title: post?.title || 'Blog Post',
    description: post?.excerpt || '',
    keywords: post?.tags || [],
    ogTitle: post?.title,
    ogDescription: post?.excerpt,
    ogType: 'article',
  });

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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Post Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn--primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-lg mx-auto w-full">
          <SectionEyebrow>
            <Link to="/blog" className="hover:text-[var(--safety)] transition-colors">
              Blog
            </Link>
            {' / '}
            <Link to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[var(--safety)] transition-colors">
              {post.category}
            </Link>
          </SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[var(--safety)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-data font-semibold">{post.author}</div>
                <div className="text-micro text-[var(--muted)]">{post.date}</div>
              </div>
            </div>
            <span className="text-micro text-[var(--muted)]">•</span>
            <span className="text-micro text-[var(--muted)]">{post.readTime} read</span>
          </div>

          <p className="text-data text-[var(--muted)] mt-6 max-w-2xl reveal" style={{ transitionDelay: '0.2s' }}>
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-6 reveal" style={{ transitionDelay: '0.3s' }}>
            {post.tags.map((tag) => (
              <Tag key={tag} variant="ghost">{tag}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-xs mx-auto">
          <div className="prose prose-lg reveal">
            {/* Introduction */}
            <p className="text-data text-[var(--muted)] leading-relaxed mb-8 text-lg">
              {post.excerpt}
            </p>

            {/* Content Sections */}
            {post.sections && post.sections.length > 0 ? (
              post.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-h2 mt-12 mb-4">{section.heading}</h2>
                  <p className="text-data text-[var(--muted)] leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))
            ) : (
              <div className="mb-8">
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  Content coming soon. Check back later for the full article.
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[var(--ink)] reveal">
            <div className="text-micro text-[var(--muted)] mb-3">Tags</div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} to={`/blog/tag/${tag.toLowerCase()}`}>
                  <Tag variant="ghost" className="hover:bg-[var(--safety)] hover:text-[var(--ink)] cursor-pointer transition-colors">
                    {tag}
                  </Tag>
                </Link>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="mt-8 bento-card reveal">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[var(--safety)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-micro text-[var(--muted)] mb-1">Written by</div>
                <div className="text-h3 mb-2">{post.author}</div>
                <p className="text-data text-[var(--muted)]">
                  Contributing writer at Studio Nova. Passionate about design, technology, and creating meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 reveal">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="bento-card hover-lift">
                <div className="text-micro text-[var(--muted)] mb-2">← Previous</div>
                <div className="text-data font-semibold">{prevPost.title}</div>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="bento-card hover-lift md:text-right">
                <div className="text-micro text-[var(--muted)] mb-2">Next →</div>
                <div className="text-data font-semibold">{nextPost.title}</div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section--surface">
          <div className="max-w-lg mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Related Articles</SectionEyebrow>
              <h2 className="text-h2 mt-2">More in <span className="text-[var(--safety)]">{post.category}</span></h2>
            </div>
            <div className="grid-3">
              {relatedPosts.map((related, i) => (
                <Link key={related.slug} to={`/blog/${related.slug}`}>
                  <div className="bento-card hover-lift h-full reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <span className="tag tag--safety mb-3">{related.category}</span>
                    <h3 className="text-h3 mb-2">{related.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{related.excerpt}</p>
                    <div className="flex items-center gap-2 text-micro text-[var(--muted)]">
                      <span>{related.author}</span>
                      <span>•</span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="max-w-lg mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Enjoyed this article?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for weekly insights on design, business, and technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="btn--primary">
              ← Back to Blog
            </Link>
            <Link to="/contact" className="btn--ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
