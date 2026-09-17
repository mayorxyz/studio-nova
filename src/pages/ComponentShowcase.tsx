import { useEffect } from 'react';
import {
  Tag,
  Button,
  SectionEyebrow,
  StatCard,
  BentoCard,
  SpecCell,
  FeatCard,
  MetricsRibbon,
  Ticker,
  TerminalLog,
  SignalViz,
  Sidebar,
  StackCard,
} from '../components/atomic';

export default function ComponentShowcase() {
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
    <div className="pb-20">
      {/* Header */}
      <section className="section">
        <SectionEyebrow>Step 0.1 — Atomic Components</SectionEyebrow>
        <h1 className="text-h1 mt-2">
          Component <span className="text-[var(--safety)]">Library.</span>
        </h1>
        <p className="text-data text-[var(--muted)] mt-4 max-w-2xl">
          All 13 atomic UI components built with TypeScript, proper prop interfaces, 
          and aligned with the industrial design system CSS.
        </p>
      </section>

      {/* 1. Tag */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.1</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">Tag</h2>
        <div className="flex flex-wrap gap-2 reveal">
          <Tag>Default</Tag>
          <Tag variant="filled">Filled</Tag>
          <Tag variant="safety">Safety</Tag>
          <Tag variant="ghost">Ghost</Tag>
        </div>
      </section>

      {/* 2. Button */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.2</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">Button</h2>
        <div className="flex flex-wrap gap-4 reveal">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" safety>Safety</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* 3. SectionEyebrow */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.3</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">SectionEyebrow</h2>
        <div className="space-y-2 reveal">
          <SectionEyebrow>Left aligned eyebrow</SectionEyebrow>
          <SectionEyebrow align="center">Center aligned eyebrow</SectionEyebrow>
        </div>
      </section>

      {/* 4. StatCard */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.4</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">StatCard</h2>
        <div className="grid-3 reveal">
          <StatCard value="150+" label="Projects" />
          <StatCard value="98%" label="Satisfaction" />
          <StatCard value="12" label="Awards" dark />
        </div>
      </section>

      {/* 5. BentoCard */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.5</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">BentoCard</h2>
        <div className="bento__grid reveal">
          <BentoCard variant="dark" span="wide">
            <h3 className="text-h3">Dark Wide Card</h3>
            <p className="text-data mt-2">Spans 8 columns in the bento grid.</p>
          </BentoCard>
          <BentoCard variant="safety" span="narrow">
            <h3 className="text-h3">Safety Narrow</h3>
          </BentoCard>
          <BentoCard span="mid">
            <h3 className="text-h3">Default Mid</h3>
            <p className="text-data mt-2">Standard bento card spanning 6 columns.</p>
          </BentoCard>
          <BentoCard variant="dark" span="mid">
            <h3 className="text-h3 text-[var(--base)]">Dark Mid</h3>
            <p className="text-data text-[var(--muted)] mt-2">Dark variant spanning 6 columns.</p>
          </BentoCard>
        </div>
      </section>

      {/* 6. SpecCell */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.6</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">SpecCell</h2>
        <div className="spec-grid reveal">
          <SpecCell label="Founded" value="2016" />
          <SpecCell label="Team" value="6+" />
          <SpecCell label="Clients" value="150+" variant="dark" />
          <SpecCell label="Awards" value="12" variant="safety" />
        </div>
      </section>

      {/* 7. FeatCard */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.7</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">FeatCard</h2>
        <div className="features__grid reveal">
          <FeatCard
            icon="◆"
            title="Precision"
            description="Every pixel crafted with intention."
          />
          <FeatCard
            icon="▲"
            title="Performance"
            description="Built for speed and scale."
            variant="dark"
          />
          <FeatCard
            icon="●"
            title="Impact"
            description="Design that drives results."
            variant="safety"
          />
        </div>
      </section>

      {/* 8. MetricsRibbon */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.8</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">MetricsRibbon</h2>
        <div className="reveal">
          <MetricsRibbon
            items={[
              { label: 'Revenue', value: '$2.4M' },
              { label: 'Users', value: '45K' },
              { label: 'Growth', value: '+340%' },
              { label: 'Retention', value: '94%' },
              { label: 'NPS', value: '72' },
            ]}
          />
        </div>
        <div className="mt-4 reveal">
          <MetricsRibbon
            items={[
              { label: 'Projects', value: '150+' },
              { label: 'Awards', value: '12' },
              { label: 'Team', value: '6' },
            ]}
            variant="safety"
          />
        </div>
      </section>

      {/* 9. Ticker */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.9</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">Ticker</h2>
        <div className="reveal">
          <Ticker
            items={['Brand Strategy', 'Web Design', 'UI/UX', 'Motion Graphics']}
          />
        </div>
        <div className="mt-4 reveal">
          <Ticker
            items={['Neon Coffee', 'FinFlow', 'EcoThread', 'SoundWave']}
            variant="safety"
            reverse
          />
        </div>
      </section>

      {/* 10. TerminalLog */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.10</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">TerminalLog</h2>
        <div className="max-w-xl reveal">
          <TerminalLog
            entries={[
              { type: 'prompt', text: 'nova init --project=demo' },
              { type: 'warning', text: '→ Initializing creative pipeline...' },
              { type: 'success', text: '→ Strategy ✓ Design ✓ Development ✓' },
              { type: 'output', text: '→ Project ready for launch' },
            ]}
          />
        </div>
      </section>

      {/* 11. SignalViz */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.11</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">SignalViz</h2>
        <div className="signal__inner max-w-xl reveal">
          <SignalViz
            data={Array.from({ length: 30 }, () => 20 + Math.random() * 80)}
            color="green"
          />
          <div className="signal__label">Signal Strength — Real-time</div>
        </div>
        <div className="signal__inner max-w-xl mt-4 reveal">
          <SignalViz
            data={Array.from({ length: 30 }, () => 20 + Math.random() * 80)}
            color="amber"
          />
          <div className="signal__label">Amber Variant</div>
        </div>
      </section>

      {/* 12. Sidebar */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.12</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">Sidebar</h2>
        <div className="flex gap-4 reveal" style={{ minHeight: '300px' }}>
          <Sidebar
            items={[
              { icon: '◈', label: 'Dashboard', active: true },
              { icon: '◇', label: 'Projects' },
              { icon: '△', label: 'Invoices' },
              { icon: '○', label: 'Messages' },
            ]}
          />
          <div className="flex-1 border-thin p-4">
            <p className="text-data text-[var(--muted)]">Main content area</p>
          </div>
        </div>
      </section>

      {/* 13. StackCard */}
      <section className="section pt-0">
        <SectionEyebrow>0.1.13</SectionEyebrow>
        <h2 className="text-h2 mt-2 mb-4">StackCard</h2>
        <div className="grid-3 reveal">
          <StackCard
            title="Design Tools"
            items={['Figma', 'Illustrator', 'After Effects']}
          />
          <StackCard
            title="Dev Stack"
            items={['React', 'Next.js', 'TypeScript']}
            variant="dark"
          />
          <StackCard
            title="Highlights"
            items={['Awwwards SOTD', 'CSS Design Awards', 'Featured in AIGA']}
            variant="safety"
          />
        </div>
      </section>

      {/* Completion Summary */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center">
          <SectionEyebrow align="center">Step 0.1 Complete</SectionEyebrow>
          <h2 className="text-h1 mt-2">
            13 / 13 <span className="text-[var(--safety)]">Components</span>
          </h2>
          <div className="grid-4 mt-8">
            <StatCard value="13" label="Components Built" dark />
            <StatCard value="100%" label="TypeScript Coverage" dark />
            <StatCard value="13" label="CSS Classes Aligned" dark />
            <StatCard value="1" label="Barrel Export" dark />
          </div>
        </div>
      </section>
    </div>
  );
}
