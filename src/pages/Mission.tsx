import { Link } from 'react-router-dom';
import { SectionEyebrow, BentoCard } from '../components/atomic';
import { useSEO, seoConfigs } from '../hooks/useSEO';

export default function Mission() {
  useSEO({
    title: 'Our Mission',
    description: 'Studio Nova\'s mission is to create digital experiences that drive real business results. Learn about our purpose and how we approach every project.',
    keywords: ['mission', 'purpose', 'creative agency mission', 'design philosophy'],
  });

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>About — Our Mission</SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            Design with <span className="text-[var(--safety)]">purpose.</span>
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-6 max-w-3xl reveal" style={{ transitionDelay: '0.1s' }}>
            We believe design isn't decoration — it's a strategic tool. Every project we take on starts with understanding the business problem, then crafting a solution that drives measurable results.
          </p>

          <div className="mt-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="terminal max-w-2xl">
              <div className="terminal__header">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
                <span className="text-[var(--muted)] text-[var(--fs-micro)] ml-2">mission.md</span>
              </div>
              <div className="terminal__line text-[var(--term-amber)]">## Our Mission</div>
              <div className="terminal__line">To create digital experiences that</div>
              <div className="terminal__line">drive real business results through</div>
              <div className="terminal__line">strategic design and technical excellence.</div>
              <div className="terminal__line mt-2 text-[var(--term-amber)]">## Our Vision</div>
              <div className="terminal__line">To be the most trusted creative</div>
              <div className="terminal__line">partner for ambitious brands worldwide.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <SectionEyebrow>The Why</SectionEyebrow>
              <h2 className="text-h2 mt-2 mb-6">
                Why we <span className="text-[var(--safety)]">exist.</span>
              </h2>
              <div className="space-y-4 text-data text-[var(--muted)] leading-relaxed">
                <p>
                  In a world saturated with mediocre design, we saw an opportunity to do things differently. 
                  Too many agencies treat design as an afterthought — a pretty layer on top of broken experiences.
                </p>
                <p>
                  We founded Studio Nova to challenge that status quo. We believe that great design is strategic design. 
                  It's not about making things look good; it's about making things work better.
                </p>
                <p>
                  Every pixel we place, every interaction we design, every brand we build is in service of a larger goal: 
                  helping our clients achieve their business objectives through exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="space-y-4">
                <BentoCard variant="dark">
                  <div className="text-[var(--safety)] text-4xl font-display font-bold mb-3">01</div>
                  <h3 className="text-h3 mb-2 text-[var(--base)]">Strategic Foundation</h3>
                  <p className="text-data text-[var(--muted)]">
                    Every project begins with deep strategic thinking. We don't just design — we solve business problems.
                  </p>
                </BentoCard>

                <BentoCard variant="safety">
                  <div className="text-4xl font-display font-bold mb-3">02</div>
                  <h3 className="text-h3 mb-2">Measurable Impact</h3>
                  <p className="text-data">
                    We measure success by results, not awards. Our work drives real business outcomes for our clients.
                  </p>
                </BentoCard>

                <BentoCard>
                  <div className="text-[var(--safety)] text-4xl font-display font-bold mb-3">03</div>
                  <h3 className="text-h3 mb-2">Lasting Partnerships</h3>
                  <p className="text-data text-[var(--muted)]">
                    We build long-term relationships with our clients, becoming trusted partners in their growth journey.
                  </p>
                </BentoCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Our Approach</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              How we <span className="text-[var(--safety)]">deliver.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard className="reveal">
              <div className="text-[var(--safety)] text-6xl font-display font-bold mb-4">→</div>
              <h3 className="text-h3 mb-3">Research-Driven</h3>
              <p className="text-data text-[var(--muted)]">
                We start every project with deep research. Understanding users, markets, and business goals ensures our design decisions are grounded in reality, not assumptions.
              </p>
            </BentoCard>

            <BentoCard variant="dark" className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="text-[var(--safety)] text-6xl font-display font-bold mb-4">→</div>
              <h3 className="text-h3 mb-3 text-[var(--base)]">Iterative Process</h3>
              <p className="text-data text-[var(--muted)]">
                Design is never done. We iterate rapidly, testing and refining our solutions based on real feedback and data. This ensures we deliver the best possible outcome.
              </p>
            </BentoCard>

            <BentoCard className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="text-[var(--safety)] text-6xl font-display font-bold mb-4">→</div>
              <h3 className="text-h3 mb-3">Technical Excellence</h3>
              <p className="text-data text-[var(--muted)]">
                Beautiful design means nothing if it doesn't work. We combine creative vision with technical expertise to deliver solutions that perform flawlessly.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Our Impact</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Results that <span className="text-[var(--safety)]">matter.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">150+</div>
              <div className="stat-card__label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">98%</div>
              <div className="stat-card__label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">340%</div>
              <div className="stat-card__label">Avg. ROI Increase</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value text-[var(--safety)]">12</div>
              <div className="stat-card__label">Design Awards</div>
            </div>
          </div>

          <div className="mt-12 bento-card bento-card--dark reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-h2 text-[var(--base)] mb-4">
                  Our work speaks for <span className="text-[var(--safety)]">itself.</span>
                </h3>
                <p className="text-data text-[var(--muted)] mb-6">
                  From startups to Fortune 500 companies, we've helped businesses across industries achieve their goals through strategic design.
                </p>
                <Link to="/work" className="btn--primary btn--primary--safety">
                  View Our Work →
                </Link>
              </div>
              <div className="terminal">
                <div className="terminal__header">
                  <span className="terminal__dot terminal__dot--red" />
                  <span className="terminal__dot terminal__dot--yellow" />
                  <span className="terminal__dot terminal__dot--green" />
                </div>
                <div className="terminal__line text-[var(--term-green)]">✓ Neon Coffee: +340% sales</div>
                <div className="terminal__line text-[var(--term-green)]">✓ FinFlow: 2.5x engagement</div>
                <div className="terminal__line text-[var(--term-green)]">✓ EcoThread: Awwwards SOTD</div>
                <div className="terminal__line text-[var(--term-green)]">✓ SoundWave: 50M+ impressions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4 text-[var(--base)]">
            Ready to make an <span className="text-[var(--safety)]">impact</span>?
          </h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how our mission-driven approach can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn--primary btn--primary--safety">
              Start a Project →
            </Link>
            <Link to="/about/values" className="btn--ghost">
              Our Values →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
