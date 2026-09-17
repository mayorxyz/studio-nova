import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data';
import { SectionEyebrow, Tag, MetricsRibbon, Button } from '../components/atomic';
import { useSEO } from '../hooks/useSEO';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useSEO({
    title: project ? `${project.title} — Case Study` : 'Case Study',
    description: project?.description || '',
    keywords: project?.tags || [],
    ogTitle: project?.title,
    ogDescription: project?.description,
    ogType: 'article',
  });

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

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Use project data for case study content
  const caseStudyContent = {
    challenge: project.challenge || 'Project details coming soon.',
    solution: project.solution || 'Project details coming soon.',
    approach: project.approach || [],
    timeline: project.timeline || 'Timeline not specified',
    results: project.metrics || [],
    testimonial: project.testimonial || null,
  };

  return (
    <article className="pb-20">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute right-[5%] top-[20%] big-number opacity-10 pointer-events-none select-none hidden lg:block">
          {project.category.charAt(0)}
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <SectionEyebrow>Case Study — {project.year}</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            {project.title}
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6 reveal" style={{ transitionDelay: '0.2s' }}>
            {project.tags.map((tag) => (
              <Tag key={tag} variant="safety">{tag}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.thumbnail && (
        <section className="section pt-0">
          <div className="max-w-[1400px] mx-auto px-8 reveal">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}

      {/* Metrics Ribbon */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto px-8 reveal">
          <MetricsRibbon items={caseStudyContent.results} variant="safety" />
        </div>
      </section>

      {/* Client Info */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="spec-grid reveal">
            <div className="spec-cell">
              <div className="spec-cell__label">Client</div>
              <div className="spec-cell__value">{project.client}</div>
            </div>
            <div className="spec-cell">
              <div className="spec-cell__label">Category</div>
              <div className="spec-cell__value">{project.category}</div>
            </div>
            <div className="spec-cell">
              <div className="spec-cell__label">Year</div>
              <div className="spec-cell__value">{project.year}</div>
            </div>
            <div className="spec-cell spec-cell--safety">
              <div className="spec-cell__label">Key Result</div>
              <div className="spec-cell__value">{project.result}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
            <div className="reveal">
              <SectionEyebrow>The Challenge</SectionEyebrow>
              <h2 className="text-h2 mt-2">What we<br />solved.</h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                {caseStudyContent.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
            <div className="reveal">
              <SectionEyebrow>The Solution</SectionEyebrow>
              <h2 className="text-h2 mt-2">How we<br />did it.</h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                {caseStudyContent.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudyContent.testimonial && (
        <section className="section--dark">
          <div className="max-w-[1400px] mx-auto text-center reveal">
            <div className="text-[var(--safety)] text-6xl mb-6">"</div>
            <blockquote className="text-h2 text-[var(--base)] mb-8 max-w-3xl mx-auto">
              {caseStudyContent.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-display font-semibold text-[var(--base)] text-lg">
                {caseStudyContent.testimonial.author}
              </div>
              <div className="text-micro text-[var(--muted)] mt-1">
                {caseStudyContent.testimonial.role}, {caseStudyContent.testimonial.company || project.client}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Like what you see?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's create something extraordinary for your brand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/quote-request">
              <Button variant="primary" safety>
                Start Your Project →
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="ghost">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
