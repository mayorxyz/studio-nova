import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Map URL slugs to actual category names
const categoryMap: Record<string, string> = {
  'branding': 'Branding',
  'web-design': 'Web Design',
  'ui-ux': 'UI/UX',
  'motion': 'Motion',
};

// Category descriptions for SEO and context
const categoryDescriptions: Record<string, string> = {
  'Branding': 'Strategic brand identity projects that create memorable, cohesive visual systems for our clients.',
  'Web Design': 'Custom website designs that combine aesthetics with functionality to drive business results.',
  'UI/UX': 'User interface and experience design projects focused on creating intuitive, engaging digital products.',
  'Motion': 'Dynamic motion graphics and animation work that brings brands and products to life.',
};

export default function WorkCategory() {
  const { slug } = useParams<{ slug: string }>();
  
  const categoryName = categoryMap[slug || ''];
  const filteredProjects = projects.filter(project => project.category === categoryName);

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
          <Link to="/work" className="btn--primary">
            ← Back to Work
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
            <Link to="/work" className="hover:text-[var(--safety)] transition-colors">
              Work
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
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)] mb-8">
                No projects found in this category yet.
              </p>
              <Link to="/work" className="btn--ghost">
                ← Back to All Projects
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
                    <div className="flex items-center justify-between">
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
            <h2 className="text-h2 mt-2">Other <span className="text-[var(--safety)]">categories</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categoryMap).map(([categorySlug, name]) => {
              if (name === categoryName) return null; // Skip current category
              const count = projects.filter(p => p.category === name).length;
              return (
                <Link
                  key={categorySlug}
                  to={`/work/category/${categorySlug}`}
                  className="reveal"
                >
                  <div className="bento-card hover-lift text-center">
                    <h3 className="text-h3 mb-2">{name}</h3>
                    <p className="text-micro text-[var(--muted)]">
                      {count} {count === 1 ? 'project' : 'projects'}
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
          <h2 className="text-h2 mb-4">Have a project in mind?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how we can help bring your vision to life with our {categoryName.toLowerCase()} expertise.
          </p>
          <Link to="/contact" className="btn--primary btn--primary--safety">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
