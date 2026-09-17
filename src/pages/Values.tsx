import { Link } from 'react-router-dom';
import { SectionEyebrow, BentoCard } from '../components/atomic';
import { useSEO } from '../hooks/useSEO';

const values = [
  {
    number: '01',
    title: 'Precision',
    description: 'Every pixel, every line of code — crafted with intention. We believe the details matter, and we obsess over getting them right.',
    example: 'Our design systems are built with meticulous attention to spacing, typography, and color consistency across every touchpoint.',
  },
  {
    number: '02',
    title: 'Transparency',
    description: 'Open communication, honest timelines, no surprises. We believe trust is built through clarity and candor.',
    example: 'Weekly updates, shared project boards, and direct access to our team ensure you\'re always informed and involved.',
  },
  {
    number: '03',
    title: 'Impact',
    description: 'Design that drives measurable business results. We don\'t just make things look good — we make them work better.',
    example: 'Our work has driven 340% sales increases, 2.5x engagement boosts, and countless other measurable outcomes for clients.',
  },
  {
    number: '04',
    title: 'Craft',
    description: 'We take pride in the details others overlook. Quality isn\'t a checkbox — it\'s a commitment to excellence.',
    example: 'From micro-interactions to macro-strategy, every element of our work reflects our dedication to craft and quality.',
  },
];

export default function Values() {
  useSEO({
    title: 'Our Values',
    description: 'The core values that guide everything we do at Studio Nova: Precision, Transparency, Impact, and Craft.',
    keywords: ['values', 'company culture', 'design principles', 'creative agency values'],
  });

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>About — Our Values</SectionEyebrow>
          
          <h1 className="text-h1 mt-4 reveal">
            What we <span className="text-[var(--safety)]">stand for.</span>
          </h1>
          
          <p className="text-data text-[var(--muted)] mt-6 max-w-3xl reveal" style={{ transitionDelay: '0.1s' }}>
            Our values aren't just words on a wall — they're the principles that guide every decision we make, every project we take on, and every relationship we build.
          </p>

          <div className="mt-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="terminal max-w-2xl">
              <div className="terminal__header">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
                <span className="text-[var(--muted)] text-[var(--fs-micro)] ml-2">values.config</span>
              </div>
              <div className="terminal__line text-[var(--term-amber)]">## Core Values</div>
              <div className="terminal__line text-[var(--term-green)]">✓ Precision</div>
              <div className="terminal__line text-[var(--term-green)]">✓ Transparency</div>
              <div className="terminal__line text-[var(--term-green)]">✓ Impact</div>
              <div className="terminal__line text-[var(--term-green)]">✓ Craft</div>
              <div className="terminal__line mt-2 text-[var(--term-amber)]">## Status</div>
              <div className="terminal__line">All values: ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>The Four Pillars</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Our core <span className="text-[var(--safety)]">values.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {values.map((value, i) => (
              <BentoCard
                key={value.number}
                className="reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 items-start">
                  <div>
                    <div className="text-[var(--safety)] font-display font-bold text-6xl">
                      {value.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h2 mb-4">{value.title}</h3>
                    <p className="text-data text-[var(--muted)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  <div className="bento-card bento-card--dark">
                    <div className="text-micro text-[var(--muted)] mb-2">In Practice</div>
                    <p className="text-data text-[var(--base)]">
                      {value.example}
                    </p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Values in Action</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              How we live our <span className="text-[var(--safety)]">values.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard className="reveal">
              <div className="text-[var(--safety)] text-4xl mb-4">◆</div>
              <h3 className="text-h3 mb-3">Daily Standups</h3>
              <p className="text-data text-[var(--muted)]">
                Every morning, our team gathers to share progress, blockers, and wins. This embodies our value of Transparency — keeping everyone aligned and informed.
              </p>
            </BentoCard>

            <BentoCard variant="dark" className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="text-[var(--safety)] text-4xl mb-4">◆</div>
              <h3 className="text-h3 mb-3 text-[var(--base)]">Design Reviews</h3>
              <p className="text-data text-[var(--muted)]">
                Every design goes through rigorous peer review before reaching clients. This reflects our commitment to Precision and Craft — ensuring nothing leaves our studio unless it meets our standards.
              </p>
            </BentoCard>

            <BentoCard className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="text-[var(--safety)] text-4xl mb-4">◆</div>
              <h3 className="text-h3 mb-3">Impact Reports</h3>
              <p className="text-data text-[var(--muted)]">
                Three months after launch, we deliver comprehensive impact reports showing how our work has performed against business goals. This demonstrates our focus on Impact — measuring what matters.
              </p>
            </BentoCard>

            <BentoCard variant="safety" className="reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="text-4xl mb-4">◆</div>
              <h3 className="text-h3 mb-3">Continuous Learning</h3>
              <p className="text-data">
                Every team member has a learning budget and dedicated time for professional development. This reflects our belief that Craft requires constant evolution and growth.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Team Culture</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Built on <span className="text-[var(--safety)]">trust.</span>
            </h2>
          </div>

          <div className="bento-card bento-card--dark reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-h2 text-[var(--base)] mb-4">
                  Our culture is our <span className="text-[var(--safety)]">superpower.</span>
                </h3>
                <p className="text-data text-[var(--muted)] mb-6">
                  We've built a team of talented, passionate individuals who share our values and commitment to excellence. Together, we create an environment where great work thrives.
                </p>
                <Link to="/about/team" className="btn--primary">
                  Meet the Team →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bento-card text-center">
                  <div className="text-h2 text-[var(--safety)] mb-2">6+</div>
                  <div className="text-micro text-[var(--muted)]">Team Members</div>
                </div>
                <div className="bento-card text-center">
                  <div className="text-h2 text-[var(--safety)] mb-2">8</div>
                  <div className="text-micro text-[var(--muted)]">Years Together</div>
                </div>
                <div className="bento-card text-center">
                  <div className="text-h2 text-[var(--safety)] mb-2">100%</div>
                  <div className="text-micro text-[var(--muted)]">Remote Friendly</div>
                </div>
                <div className="bento-card text-center">
                  <div className="text-h2 text-[var(--safety)] mb-2">4.9★</div>
                  <div className="text-micro text-[var(--muted)]">Team Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4 text-[var(--base)]">
            Share our <span className="text-[var(--safety)]">values</span>?
          </h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We're always looking for talented people who share our passion for precision, transparency, impact, and craft.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/careers" className="btn--primary btn--primary--safety">
              View Open Positions →
            </Link>
            <Link to="/about/mission" className="btn--ghost">
              Our Mission →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
