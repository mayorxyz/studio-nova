import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { jobs } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Careers() {
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
  }, []);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Careers — Join Our Team</SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            Build your <span className="text-[var(--safety)]">career</span> with us
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            We're always looking for talented individuals who are passionate about design, technology, and creating exceptional digital experiences. Join our team and help shape the future of digital.
          </p>

          <div className="flex items-center gap-4 mt-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="text-micro text-[var(--muted)]">
              {jobs.length} open {jobs.length === 1 ? 'position' : 'positions'}
            </span>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Why Studio Nova</SectionEyebrow>
            <h2 className="text-h2 mt-2">What makes us <span className="text-[var(--safety)]">different</span></h2>
          </div>
          
          <div className="grid-3">
            <div className="bento-card reveal">
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Impactful Work</h3>
              <p className="text-data text-[var(--muted)]">
                Work on projects that matter. From startups to enterprise, your work will directly impact businesses and users.
              </p>
            </div>
            
            <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Growth & Learning</h3>
              <p className="text-data text-[var(--muted)]">
                Continuous learning opportunities, conference budgets, and mentorship from industry experts.
              </p>
            </div>
            
            <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="text-[var(--safety)] text-4xl mb-3">◆</div>
              <h3 className="text-h3 mb-2">Flexible Culture</h3>
              <p className="text-data text-[var(--muted)]">
                Remote-friendly, flexible hours, and a focus on work-life balance. We trust our team to do their best work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Open Positions</SectionEyebrow>
            <h2 className="text-h2 mt-2">Current <span className="text-[var(--safety)]">opportunities</span></h2>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-20 reveal">
              <p className="text-data text-[var(--muted)] mb-8">
                No open positions at the moment. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <Link
                  key={job.slug}
                  to={`/careers/${job.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="bento-card hover-lift">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 items-center">
                      <div>
                        <h3 className="text-h3 mb-2">{job.title}</h3>
                        <p className="text-data text-[var(--muted)]">{job.department}</p>
                      </div>
                      <div>
                        <Tag variant="ghost">{job.location}</Tag>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <span className="text-data font-semibold text-[var(--safety)]">{job.salary}</span>
                        <span className="text-micro">View Details →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow className="text-[var(--muted)]">Benefits & Perks</SectionEyebrow>
            <h2 className="text-h2 mt-2 text-[var(--base)]">We take care of our <span className="text-[var(--safety)]">team</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
              { title: 'Remote Work', desc: 'Flexible work-from-home options' },
              { title: 'Learning Budget', desc: 'Annual budget for courses and conferences' },
              { title: 'Paid Time Off', desc: 'Generous PTO policy plus holidays' },
              { title: 'Equipment', desc: 'Latest hardware and software tools' },
              { title: 'Team Events', desc: 'Regular team building and social events' },
              { title: '401(k) Match', desc: 'Retirement savings with company match' },
              { title: 'Wellness', desc: 'Mental health support and wellness programs' },
            ].map((benefit, i) => (
              <div key={i} className="bento-card bento-card--dark reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <h3 className="text-h3 text-[var(--base)] mb-2">{benefit.title}</h3>
                <p className="text-data text-[var(--muted)]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Our Process</SectionEyebrow>
            <h2 className="text-h2 mt-2">What to <span className="text-[var(--safety)]">expect</span></h2>
          </div>

          <div className="grid-3">
            <div className="bento-card reveal">
              <span className="text-[var(--safety)] font-display font-bold text-4xl">01</span>
              <h3 className="text-h3 mt-2 mb-2">Apply</h3>
              <p className="text-data text-[var(--muted)]">
                Submit your application through our online form. Include your resume, portfolio, and a brief introduction.
              </p>
            </div>

            <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="text-[var(--safety)] font-display font-bold text-4xl">02</span>
              <h3 className="text-h3 mt-2 mb-2">Interview</h3>
              <p className="text-data text-[var(--muted)]">
                We'll schedule a conversation to learn more about you, your experience, and your goals.
              </p>
            </div>

            <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="text-[var(--safety)] font-display font-bold text-4xl">03</span>
              <h3 className="text-h3 mt-2 mb-2">Join Us</h3>
              <p className="text-data text-[var(--muted)]">
                If it's a match, we'll extend an offer and welcome you to the team. Onboarding begins immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Don't see the right fit?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact" className="btn--primary">
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
