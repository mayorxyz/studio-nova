import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function TeamGrid() {
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
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Our Team — {team.length} Members</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Meet the <span className="text-[var(--safety)]">humans.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            A diverse team of designers, developers, and strategists united by a passion for creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid-3">
            {team.map((member, i) => (
              <Link
                key={member.id}
                to={`/about/team/${member.slug}`}
                className="block"
              >
                <div
                  className="bento-card bento-card--dark hover-lift cursor-pointer h-full"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Avatar placeholder */}
                  <div className="w-full h-48 bg-[var(--safety)] mb-4 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-white opacity-50">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-h3 text-[var(--base)]">{member.name}</h3>
                  <Tag variant="safety" className="mt-2 mb-3">{member.role}</Tag>
                  <p className="text-data text-[var(--muted)]">{member.bio}</p>
                  
                  <div className="mt-4 pt-4 border-t border-[#333]">
                    <span className="text-micro text-[var(--safety)]">View Profile →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto text-center">
          <SectionEyebrow align="center">Join Our Team</SectionEyebrow>
          <h2 className="text-h2 mt-2 mb-4">Want to work with us?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We're always looking for talented people who share our passion for great design.
          </p>
          <Link to="/careers" className="btn--primary">
            View Open Positions →
          </Link>
        </div>
      </section>
    </div>
  );
}
