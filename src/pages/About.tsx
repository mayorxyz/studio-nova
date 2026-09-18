import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data';
import { useSEO, seoConfigs } from '../hooks/useSEO';

const values = [
  { title: 'Precision', desc: 'Every pixel, every line of code — crafted with intention.' },
  { title: 'Transparency', desc: 'Open communication, honest timelines, no surprises.' },
  { title: 'Impact', desc: 'Design that drives measurable business results.' },
  { title: 'Craft', desc: 'We take pride in the details others overlook.' },
];

export default function About() {
  useSEO(seoConfigs.about);

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
          A.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="section__label reveal">About — Our Story</div>
          <h1 className="text-h1 reveal" style={{ transitionDelay: '0.1s' }}>
            We are <span className="text-[var(--safety)]">Studio Nova.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.2s' }}>
            A creative agency built on the belief that great design solves real problems. 
            Founded in 2016, we've helped 150+ brands build digital experiences that perform.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="section__label">Our Mission</div>
              <h2 className="text-h2 mb-4">Design with <span className="text-[var(--safety)]">purpose.</span></h2>
              <p className="text-data text-[var(--muted)] mb-4">
                We believe design isn't decoration — it's a strategic tool. Every project we take on 
                starts with understanding the business problem, then crafting a solution that drives results.
              </p>
              <p className="text-data text-[var(--muted)] mb-6">
                Our team combines strategic thinking with technical excellence to deliver work 
                that looks exceptional and performs even better.
              </p>
              <Link to="/about/mission" className="btn--ghost">
                Learn More →
              </Link>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="terminal">
                <div className="terminal__header">
                  <span className="terminal__dot terminal__dot--red" />
                  <span className="terminal__dot terminal__dot--yellow" />
                  <span className="terminal__dot terminal__dot--green" />
                  <span className="text-[var(--muted)] text-[var(--fs-micro)] ml-2">about.md</span>
                </div>
                <div className="terminal__line text-[var(--term-amber)]">## Founded</div>
                <div className="terminal__line">2016 — San Francisco, CA</div>
                <div className="terminal__line mt-2 text-[var(--term-amber)]">## Team</div>
                <div className="terminal__line">6 full-time + network of specialists</div>
                <div className="terminal__line mt-2 text-[var(--term-amber)]">## Clients</div>
                <div className="terminal__line">Startups → Fortune 500</div>
                <div className="terminal__line mt-2 text-[var(--term-amber)]">## Focus</div>
                <div className="terminal__line">Web • Brand • UI/UX • Motion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section__header reveal">
          <div className="section__label">Core Values</div>
          <h2 className="text-h2">What drives us</h2>
        </div>
        <div className="grid-4 mb-8">
          {values.map((v, i) => (
            <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="text-[var(--safety)] font-display font-bold text-2xl">0{i + 1}</span>
              <h3 className="text-h3 mt-2 mb-1">{v.title}</h3>
              <p className="text-data text-[var(--muted)]">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center reveal">
          <Link to="/about/values" className="btn--ghost">
            Explore Our Values →
          </Link>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="section__label text-[var(--muted)]">The Team</div>
              <h2 className="text-h1">Meet the <span className="text-[var(--safety)]">humans.</span></h2>
              <p className="text-data text-[var(--muted)] mt-4 mb-6">
                A diverse team of {team.length} designers, developers, and strategists united by a passion for creating exceptional digital experiences.
              </p>
              <Link to="/about/team" className="btn--primary">
                Meet the Team →
              </Link>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="grid grid-cols-2 gap-4">
                {team.slice(0, 4).map((member, i) => (
                  <div key={i} className="bento-card bento-card--dark">
                    <div className="w-full h-20 bg-[var(--safety)] mb-2 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-white opacity-50">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-data text-[var(--base)] font-semibold">{member.name}</h3>
                    <span className="text-micro text-[var(--safety)]">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="grid-4 reveal">
          {[
            { value: '150+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '12', label: 'Awards' },
            { value: '8', label: 'Years' },
          ].map((stat, i) => (
            <div key={i} className="stat-card corner-marks">
              <div className="stat-card__value text-[var(--safety)]">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured In */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <div className="section__label">Recognition</div>
            <h2 className="text-h2">Featured in</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
            {['Awwwards', 'CSS Design', 'Behance', 'Dribbble', 'AIGA', 'Communication Arts'].map((pub, i) => (
              <div key={i} className="border-thin p-6 flex items-center justify-center h-24 hover-lift hover:bg-[var(--base)]">
                <span className="font-display font-bold text-sm tracking-wider uppercase">{pub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Want to join the team?</h2>
          <p className="text-data text-[var(--muted)] mb-6 max-w-lg mx-auto">
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
