import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { jobs } from '../data';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const job = jobs.find(j => j.slug === slug);

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

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Position Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The job posting you're looking for doesn't exist or has been filled.
          </p>
          <Link to="/careers" className="btn--primary">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/careers" className="hover:text-[var(--safety)] transition-colors">
              Careers
            </Link>
            {' / '}
            {job.title}
          </SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            {job.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{job.department}</Tag>
            <Tag variant="ghost">{job.location}</Tag>
            <Tag variant="ghost">{job.type}</Tag>
          </div>

          <div className="flex items-center gap-4 mt-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Salary Range</div>
              <div className="text-h3 text-[var(--safety)]">{job.salary}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
            {/* Main Content */}
            <div className="reveal">
              <h2 className="text-h2 mb-4">About the Role</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-8">
                {job.description}
              </p>

              <h2 className="text-h2 mb-4">Requirements</h2>
              <ul className="space-y-3 mb-8">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-data text-[var(--muted)] flex items-start gap-2">
                    <span className="text-[var(--safety)] mt-1">◆</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-h2 mb-4">What You'll Do</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Collaborate with cross-functional teams to deliver exceptional results</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Contribute to strategic decisions and help shape our direction</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Mentor junior team members and share knowledge</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Stay current with industry trends and best practices</span>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark sticky top-24">
                <h3 className="text-h3 text-[var(--base)] mb-4">Quick Info</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Department</div>
                    <div className="text-data text-[var(--base)]">{job.department}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Location</div>
                    <div className="text-data text-[var(--base)]">{job.location}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Job Type</div>
                    <div className="text-data text-[var(--base)]">{job.type}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Salary</div>
                    <div className="text-data text-[var(--safety)] font-semibold">{job.salary}</div>
                  </div>
                </div>

                <Link to="/quote-request" className="btn--primary btn--primary--safety w-full justify-center">
                  Apply Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section--surface">
        <div className="max-w-[1000px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Benefits & Perks</SectionEyebrow>
            <h2 className="text-h2 mt-2">What we <span className="text-[var(--safety)]">offer</span></h2>
          </div>

          <div className="grid-2">
            {job.benefits.map((benefit, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="text-[var(--safety)] text-2xl mb-2">✓</div>
                <p className="text-data">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Next Steps</SectionEyebrow>
            <h2 className="text-h2 mt-2">How to <span className="text-[var(--safety)]">apply</span></h2>
          </div>

          <div className="bento-card reveal">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[var(--safety)] font-display font-bold text-2xl">01</span>
                <div>
                  <h3 className="text-h3 mb-1">Submit Application</h3>
                  <p className="text-data text-[var(--muted)]">
                    Click "Apply Now" and fill out our application form. Include your resume and portfolio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[var(--safety)] font-display font-bold text-2xl">02</span>
                <div>
                  <h3 className="text-h3 mb-1">Initial Screening</h3>
                  <p className="text-data text-[var(--muted)]">
                    We'll review your application and reach out within 5 business days if there's a match.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[var(--safety)] font-display font-bold text-2xl">03</span>
                <div>
                  <h3 className="text-h3 mb-1">Interview Process</h3>
                  <p className="text-data text-[var(--muted)]">
                    Participate in 2-3 interviews to discuss your experience, skills, and fit for the role.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[var(--safety)] font-display font-bold text-2xl">04</span>
                <div>
                  <h3 className="text-h3 mb-1">Offer & Onboarding</h3>
                  <p className="text-data text-[var(--muted)]">
                    If selected, we'll extend an offer and begin the onboarding process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1000px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4 text-[var(--base)]">Ready to join our team?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Take the next step in your career. Apply now and help us create exceptional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/quote-request">
              <Button variant="primary" safety>
                Apply Now →
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant="ghost">
                ← View All Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
