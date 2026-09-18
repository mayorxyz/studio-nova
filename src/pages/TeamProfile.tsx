import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { team } from '../data';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

export default function TeamProfile() {
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
  }, []);

  const member = team.find(m => m.slug === slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/about/team" className="hover:text-[var(--safety)] transition-colors">
              Team
            </Link>
            {' / '}
            {member.name}
          </SectionEyebrow>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
            {/* Avatar */}
            <div className="reveal">
              {member.avatar ? (
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-[var(--safety)] flex items-center justify-center">
                  <span className="text-9xl font-display font-bold text-white opacity-50">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h1 className="text-h1">{member.name}</h1>
              <Tag variant="safety" className="mt-4 mb-6">{member.role}</Tag>
              <p className="text-data text-[var(--muted)] mb-6">{member.bio}</p>
              
              {/* Social Links */}
              {member.social && (
                <div className="flex gap-4">
                  {member.social.twitter && (
                    <a
                      href={`https://twitter.com/${member.social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-data text-[var(--safety)] hover:underline"
                    >
                      Twitter
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-data text-[var(--safety)] hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a
                      href={`https://dribbble.com/${member.social.dribbble}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-data text-[var(--safety)] hover:underline"
                    >
                      Dribbble
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Bio */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
            <div className="reveal">
              <SectionEyebrow>About</SectionEyebrow>
              <h2 className="text-h2 mt-2">Background</h2>
              {member.experience && (
                <div className="mt-4">
                  <div className="text-micro text-[var(--muted)] mb-1">Experience</div>
                  <div className="text-data text-[var(--safety)] font-semibold">{member.experience}</div>
                </div>
              )}
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <p className="text-data text-[var(--muted)] leading-relaxed">
                {member.fullBio || member.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Expertise</SectionEyebrow>
            <h2 className="text-h2 mt-2">What they <span className="text-[var(--safety)]">bring.</span></h2>
          </div>
          
          {member.expertise && member.expertise.length > 0 ? (
            <div className="grid-3">
              {member.expertise.slice(0, 6).map((skill, index) => (
                <div key={index} className="bento-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="text-[var(--safety)] text-4xl font-display font-bold mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-h3">{skill}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="bento-card reveal">
              <p className="text-data text-[var(--muted)]">
                Expertise details coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Want to work with {member.name.split(' ')[0]}?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how {member.name.split(' ')[0]} can help bring your vision to life.
          </p>
          <Link to="/quote-request">
            <Button variant="primary" safety>
              Start a Project →
            </Button>
          </Link>
        </div>
      </section>

      {/* Back to Team */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center">
          <Link to="/about/team" className="btn--ghost">
            ← Back to Team
          </Link>
        </div>
      </section>
    </div>
  );
}
