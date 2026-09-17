import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function BlogPost() {
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

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="mb-4 reveal">
            <Link to="/blog" className="text-micro text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{post.category}</Tag>
            {post.tags.map(tag => (
              <Tag key={tag} variant="ghost">{tag}</Tag>
            ))}
          </div>
          
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.2s' }}>
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-6 text-data text-[var(--muted)] reveal" style={{ transitionDelay: '0.3s' }}>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <div className="text-h3 text-[var(--muted)] mb-8 reveal">
            {post.excerpt}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none reveal" style={{ transitionDelay: '0.1s' }}>
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div className="space-y-6">
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  This is a placeholder for the full blog post content. In a production environment, 
                  this would contain the complete article with rich text formatting, images, code blocks, 
                  and other multimedia content.
                </p>
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  The content management system would provide a rich text editor for authors to create 
                  and format their posts, with support for markdown, embedded media, and custom components.
                </p>
                <h2 className="text-h2 mt-8 mb-4">Key Takeaways</h2>
                <ul className="space-y-2 text-data text-[var(--muted)]">
                  <li>• Important insight from the article</li>
                  <li>• Actionable advice for readers</li>
                  <li>• Practical implementation steps</li>
                  <li>• Measurable outcomes and results</li>
                </ul>
                <h2 className="text-h2 mt-8 mb-4">Conclusion</h2>
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  This section would summarize the main points and provide a call-to-action for readers, 
                  such as subscribing to the newsletter, reading related articles, or contacting the team.
                </p>
              </div>
            )}
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 border-hard bg-[var(--surface)] reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[var(--safety)] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-display font-bold text-white">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-h3 mb-1">{post.author}</h3>
                <p className="text-data text-[var(--muted)]">
                  Content creator at Studio Nova. Writing about design, technology, and the creative process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Related Articles</SectionEyebrow>
              <h2 className="text-h2 mt-2">Keep <span className="text-[var(--safety)]">reading.</span></h2>
            </div>
            
            <div className="grid-3">
              {relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <Tag variant="safety" className="mb-3">{related.category}</Tag>
                    <h3 className="text-h3 mb-2">{related.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{related.excerpt}</p>
                    <div className="flex justify-between items-center text-micro text-[var(--muted)]">
                      <span>{related.author}</span>
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
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Enjoyed this article?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for weekly insights on design, technology, and the creative process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="btn--ghost">
              ← Back to Blog
            </Link>
            <Link to="/contact" className="btn--primary btn--primary--safety">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
