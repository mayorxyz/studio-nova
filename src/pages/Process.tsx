import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business, audience, and goals. We conduct stakeholder interviews, competitive analysis, and user research to understand the landscape.',
    details: [
      'Stakeholder interviews',
      'Competitive analysis',
      'User research & personas',
      'Goal setting & KPIs',
    ],
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Define the roadmap and creative direction. We develop a comprehensive strategy that aligns design decisions with business objectives.',
    details: [
      'Information architecture',
      'Content strategy',
      'Technical planning',
      'Timeline & milestones',
    ],
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Craft visual solutions that solve real problems. Our design process is iterative, with regular check-ins to ensure alignment.',
    details: [
      'Wireframes & prototypes',
      'Visual design exploration',
      'Design system creation',
      'Interactive prototypes',
    ],
  },
  {
    step: '04',
    title: 'Develop',
    desc: 'Build with precision and modern technology. We use cutting-edge tools and best practices to ensure performance and scalability.',
    details: [
      'Frontend development',
      'Backend integration',
      'CMS implementation',
      'Performance optimization',
    ],
  },
  {
    step: '05',
    title: 'Launch',
    desc: 'Deploy, test, and optimize for performance. We ensure a smooth launch with comprehensive testing and monitoring.',
    details: [
      'QA testing',
      'Performance audits',
      'SEO optimization',
      'Launch coordination',
    ],
  },
  {
    step: '06',
    title: 'Grow',
    desc: 'Ongoing support and iterative improvement. We provide continued partnership to help your digital presence evolve and grow.',
    details: [
      'Analytics monitoring',
      'A/B testing',
      'Continuous optimization',
      'Strategic consulting',
    ],
  },
];

export default function Process() {
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
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="hero relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute right-[5%] top-[20%] big-number opacity-10 pointer-events-none select-none hidden lg:block">
          P.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <SectionEyebrow>Our Process — How We Work</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            A proven <span className="text-[var(--safety)]">process.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Our six-step process ensures every project is delivered on time, on budget, and exceeds expectations. Transparency and collaboration at every stage.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="bento-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex items-center gap-4">
                    <div className="text-[var(--safety)] font-display font-bold text-6xl">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-h2 mb-3">{step.title}</h3>
                    <p className="text-data text-[var(--muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-3">Key Activities</div>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-data flex items-center gap-2">
                          <span className="text-[var(--safety)]">◆</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Timeline</SectionEyebrow>
            <h2 className="text-h2 mt-2">Typical project <span className="text-[var(--safety)]">duration.</span></h2>
          </div>

          <div className="bento-card reveal">
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex items-center gap-4">
                  <div className="w-20 text-[var(--safety)] font-display font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-data font-semibold">{step.title}</span>
                      <span className="text-micro text-[var(--muted)]">
                        {i === 0 && '1-2 weeks'}
                        {i === 1 && '1 week'}
                        {i === 2 && '2-4 weeks'}
                        {i === 3 && '4-8 weeks'}
                        {i === 4 && '1-2 weeks'}
                        {i === 5 && 'Ongoing'}
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--surface)] border-thin">
                      <div
                        className="h-full bg-[var(--safety)]"
                        style={{
                          width: i === 0 ? '15%' : i === 1 ? '10%' : i === 2 ? '30%' : i === 3 ? '45%' : i === 4 ? '15%' : '100%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Methodology</SectionEyebrow>
            <h2 className="text-h2 mt-2">How we ensure <span className="text-[var(--safety)]">success.</span></h2>
          </div>

          <div className="grid-3">
            <div className="bento-card reveal">
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Agile & Iterative</h3>
              <p className="text-data text-[var(--muted)]">
                We work in sprints with regular check-ins, allowing for flexibility and continuous improvement throughout the project.
              </p>
            </div>

            <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Transparent Communication</h3>
              <p className="text-data text-[var(--muted)]">
                Weekly updates, shared project boards, and open channels ensure you're always informed and involved in decisions.
              </p>
            </div>

            <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Quality Focused</h3>
              <p className="text-data text-[var(--muted)]">
                Rigorous testing, peer reviews, and attention to detail ensure every deliverable meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Ready to start your project?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's walk through our process together and discuss how we can bring your vision to life.
          </p>
          <Link to="/quote-request">
            <Button variant="primary" safety>
              Start a Project →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
