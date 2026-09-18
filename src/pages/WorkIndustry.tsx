import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

// Map URL slugs to actual industry names
const industryMap: Record<string, string> = {
  'startups': 'Startups',
  'e-commerce': 'E-commerce',
  'saas': 'SaaS',
  'non-profit': 'Non-Profit',
};

// Industry descriptions for SEO and context
const industryDescriptions: Record<string, string> = {
  'Startups': 'Innovative projects built for early-stage companies looking to make their mark and scale quickly.',
  'E-commerce': 'Digital experiences designed to drive sales, increase conversions, and delight online shoppers.',
  'SaaS': 'Software-as-a-Service platforms with intuitive interfaces, powerful features, and seamless user experiences.',
  'Non-Profit': 'Mission-driven projects that help organizations amplify their impact and connect with their communities.',
};

export default function WorkIndustry() {
  const { slug } = useParams<{ slug: string }>();
  
  const industryName = industryMap[slug || ''];
  const filteredProjects = projects.filter(project => project.industry === industryName);

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

  if (!industryName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Industry Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The industry you're looking for doesn't exist.
          </p>
          <Link to="/work" className="btn--primary">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const description = industryDescriptions[industryName] || '';

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
            {industryName}
          </SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            {industryName} Projects
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
                No projects found in this industry yet.
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
                    <div className="flex justify-between items-center mb-3">
                      <Tag variant="safety">{project.industry}</Tag>
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

      {/* Other Industries */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Explore More</SectionEyebrow>
            <h2 className="text-h2 mt-2">Other <span className="text-[var(--safety)]">industries</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(industryMap).map(([industrySlug, name]) => {
              if (name === industryName) return null; // Skip current industry
              const count = projects.filter(p => p.industry === name).length;
              return (
                <Link
                  key={industrySlug}
                  to={`/work/industry/${industrySlug}`}
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
            Let's discuss how we can help bring your vision to life with our {industryName.toLowerCase()} expertise.
          </p>
          <Link to="/contact" className="btn--primary btn--primary--safety">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
