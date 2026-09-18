import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { useSEO, seoConfigs } from '../hooks/useSEO';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Design Awards' },
  { value: '8yr', label: 'In Business' },
];

export default function Home() {
  useSEO(seoConfigs.home);
  const heroRef = useRef<HTMLDivElement>(null);

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
      {/* HERO */}
      <section className="hero relative" ref={heroRef}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
          backgroundImage: 'url(https://image.qwenlm.ai/generated-images/977aefa9-e814-453d-8829-a9c578d91173/_result.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        {/* Decorative geometry */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] border-4 border-[var(--safety)] opacity-[0.08] rotate-12 pointer-events-none hidden lg:block" />
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[22vw] h-[22vw] max-w-[360px] max-h-[360px] border-2 border-[var(--ink)] opacity-[0.06] -rotate-6 pointer-events-none hidden lg:block" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="section__label reveal">
            Creative Agency — Est. 2016
          </div>
          <h1 className="text-hero reveal" style={{ transitionDelay: '0.1s' }}>
            WE BUILD
            <br />
            <span className="text-[var(--safety)]">DIGITAL</span>
            <br />
            EXPERIENCES
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
            <Link to="/work" className="btn--primary">
              View Our Work →
            </Link>
            <Link to="/contact" className="btn--ghost">
              Start a Project
            </Link>
          </div>

          {/* Terminal strip */}
          <div className="terminal mt-12 max-w-xl reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="text-[var(--muted)] text-[var(--fs-micro)] ml-2">nova@studio:~</span>
            </div>
            <div className="terminal__line">
              <span className="terminal__prompt">$ </span>
              <span>nova init --project=your-brand</span>
            </div>
            <div className="terminal__line text-[var(--term-amber)]">
              → Initializing creative pipeline...
            </div>
            <div className="terminal__line">
              → Strategy ✓ Design ✓ Development ✓ Launch ✓
            </div>
            <div className="terminal__line">
              <span className="terminal__prompt">$ </span>
              <span className="terminal__cursor" />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker__track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="ticker__item">
              Brand Strategy ◆ Web Design ◆ UI/UX ◆ Motion Graphics ◆ Design Systems ◆ Creative Direction
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section reveal">
        <div className="grid-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO GRID - Featured Work */}
      <section className="section">
        <div className="section__header reveal">
          <div className="section__label">Selected Work</div>
          <h2 className="text-h1">Projects that<br /><span className="text-[var(--safety)]">perform.</span></h2>
        </div>

        <div className="bento__grid">
          {/* Wide card */}
          <div className="bento-card bento-card--wide bento-card--dark reveal">
            <div className="flex justify-between items-start mb-4">
              <span className="tag tag--safety">Featured</span>
              <span className="text-micro text-[var(--muted)]">2024</span>
            </div>
            <h3 className="text-h2 mb-2">Neon Coffee Co.</h3>
            <p className="text-data text-[var(--muted)] mb-4">
              Complete brand identity and e-commerce platform for a specialty coffee roaster. 
              Increased online sales by 340% in 6 months.
            </p>
            <div className="flex gap-2">
              <span className="tag tag--ghost text-[var(--base)]">Branding</span>
              <span className="tag tag--ghost text-[var(--base)]">E-commerce</span>
              <span className="tag tag--ghost text-[var(--base)]">Strategy</span>
            </div>
          </div>

          {/* Narrow card */}
          <div className="bento-card bento-card--narrow bento-card--safety reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="text-micro">02</span>
            <h3 className="text-h3 mt-4">FinFlow</h3>
            <p className="text-data mt-2">Fintech app redesign — 2.5x user engagement</p>
          </div>

          {/* Narrow card */}
          <div className="bento-card bento-card--narrow reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="text-micro">03</span>
            <h3 className="text-h3 mt-4">EcoThread</h3>
            <p className="text-data mt-2">Sustainable fashion platform — Awwwards SOTD</p>
          </div>

          {/* Mid card */}
          <div className="bento-card bento-card--mid reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[var(--safety)] flex items-center justify-center text-white font-display font-bold text-xl">S</div>
              <div>
                <h3 className="text-h3">SoundWave</h3>
                <span className="text-micro text-[var(--muted)]">Music Streaming</span>
              </div>
            </div>
            <p className="text-data">
              Motion design and brand animation for a next-gen music streaming platform. 
              50M+ impressions across social channels.
            </p>
            <div className="spark mt-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="spark__bar" style={{ height: `${20 + Math.random() * 80}%` }} />
              ))}
            </div>
          </div>

          {/* Mid card - dark */}
          <div className="bento-card bento-card--mid bento-card--dark reveal" style={{ transitionDelay: '0.25s' }}>
            <h3 className="text-h3 mb-4">Our Process</h3>
            <div className="space-y-3">
              {['Discovery & Research', 'Strategy & Planning', 'Design & Prototype', 'Build & Test', 'Launch & Optimize'].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[var(--safety)] font-bold text-sm">0{i + 1}</span>
                  <span className="text-data text-[var(--base)]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 reveal">
          <Link to="/work" className="btn--primary">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <div className="section__label">What We Do</div>
            <h2 className="text-h1">Services built for<br /><span className="text-[var(--safety)]">impact.</span></h2>
          </div>

          <div className="grid-2 gap-4">
            {[
              { num: '01', title: 'Web Design & Development', desc: 'Custom websites built with modern frameworks. From landing pages to complex web applications.', tags: ['React', 'Next.js', 'Webflow'] },
              { num: '02', title: 'Brand Identity', desc: 'Strategic brand systems that communicate your values and resonate with your audience.', tags: ['Logo', 'Guidelines', 'Strategy'] },
              { num: '03', title: 'UI/UX Design', desc: 'User-centered design that converts. Research-driven interfaces for web and mobile.', tags: ['Research', 'Wireframes', 'Prototyping'] },
              { num: '04', title: 'Motion Graphics', desc: 'Dynamic visual content that tells your story. Animation, video, and interactive experiences.', tags: ['Animation', 'Video', '3D'] },
            ].map((service, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-[var(--safety)] font-display font-bold text-3xl">{service.num}</span>
                <h3 className="text-h3 mt-4 mb-2">{service.title}</h3>
                <p className="text-data text-[var(--muted)] mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag tag--filled">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <div className="section__label text-[var(--muted)]">Client Voices</div>
            <h2 className="text-h1">What they<br /><span className="text-[var(--safety)]">say.</span></h2>
          </div>

          <div className="grid-3">
            {[
              { quote: "Studio Nova transformed our brand from the ground up. The results speak for themselves — 340% increase in online revenue.", author: 'Sarah Chen', role: 'CEO, Neon Coffee' },
              { quote: "Their process is meticulous. Every decision backed by data, every pixel placed with purpose. Best agency we've worked with.", author: 'Marcus Rivera', role: 'CTO, FinFlow' },
              { quote: "They don't just design — they solve business problems through design. Our conversion rate doubled within 3 months.", author: 'Emma Larsson', role: 'Founder, EcoThread' },
            ].map((t, i) => (
              <div key={i} className="bento-card bento-card--dark reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-[var(--safety)] text-4xl mb-4">"</div>
                <p className="text-data text-[var(--base)] mb-6">{t.quote}</p>
                <div className="border-t border-[#333] pt-4">
                  <div className="font-display font-semibold text-[var(--base)]">{t.author}</div>
                  <div className="text-micro text-[var(--muted)]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="section__header reveal">
          <div className="section__label">Trusted By</div>
          <h2 className="text-h2">Brands we've <span className="text-[var(--safety)]">built.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
          {['Neon Coffee', 'FinFlow', 'EcoThread', 'SoundWave', 'Vertex', 'Bloom', 'Atlas', 'Pulse', 'Orbit', 'Drift', 'Forge', 'Prism'].map((client, i) => (
            <div key={i} className="border-thin p-4 flex items-center justify-center h-20 hover-lift hover:bg-[var(--surface)]">
              <span className="font-display font-bold text-lg tracking-tight">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reverse Ticker */}
      <div className="ticker ticker--reverse">
        <div className="ticker__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="ticker__item">
              Neon Coffee ◆ FinFlow ◆ EcoThread ◆ SoundWave ◆ Vertex ◆ Bloom Health ◆ Atlas Ventures ◆ Pulse Fitness
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="section">
        <div className="text-center reveal">
          <div className="section__label justify-center">Let's Work Together</div>
          <h2 className="text-h1 mb-8">Ready to build<br />something <span className="text-[var(--safety)]">extraordinary</span>?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn--primary btn--primary--safety">
              Start a Project →
            </Link>
            <Link to="/work" className="btn--ghost">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
