import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Map category names to URL-friendly slugs
const categorySlugs: Record<string, string> = {
  'Branding': 'branding',
  'Web Design': 'web-design',
  'UI/UX': 'ui-ux',
  'Motion': 'motion',
};

// Reverse mapping: slug to category name
const slugToCategory: Record<string, string> = Object.entries(categorySlugs).reduce(
  (acc, [category, slug]) => {
    acc[slug] = category;
    return acc;
  },
  {} as Record<string, string>
);

export default function WorkCategory() {
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

  const filteredProjects = projects.filter(p => p.category === categoryName);

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    'Branding': 'Strategic brand identities that capture essence and drive recognition.',
    'Web Design': 'Custom websites and digital experiences built for performance and conversion.',
    'UI/UX': 'User-centered interfaces designed for clarity, accessibility, and delight.',
    'Motion': 'Dynamic animations and video content that bring brands to life.',
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
            <Link to="/work" className="text-micro text-[var(--muted)] hover:text-[var(--safety)] transition-colors">
              Work
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
            <Tag variant="safety">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</Tag>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-h3 text-[var(--muted)]">No projects found in this category.</p>
              <Link to="/work" className="btn--ghost mt-6 inline-block">
                ← Back to All Work
              </Link>
            </div>
          ) : (
            <div className="grid-2">
              {filteredProjects.map((project, i) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <div className="flex justify-between items-start mb-3">
                      <Tag variant="safety">{project.category}</Tag>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categorySlugs)
              .filter(([cat]) => cat !== categoryName)
              .map(([category, categorySlug], i) => {
                const count = projects.filter(p => p.category === category).length;
                return (
                  <Link
                    key={categorySlug}
                    to={`/work/category/${categorySlug}`}
                    className="block reveal"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="bento-card hover-lift h-full">
                      <h3 className="text-h3 mb-2">{category}</h3>
                      <p className="text-data text-[var(--muted)]">{count} projects</p>
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
          <h2 className="text-h2 mb-4">Have a project in mind?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how we can bring your vision to life with our expertise in {categoryName.toLowerCase()}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/work" className="btn--ghost">
              ← All Work
            </Link>
            <Link to="/contact" className="btn--primary btn--primary--safety">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
