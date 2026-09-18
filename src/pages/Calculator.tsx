import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/atomic';

export default function Calculator() {
  const [budget, setBudget] = useState(25000);
  const [timeline, setTimeline] = useState(3);
  const [teamSize, setTeamSize] = useState(3);
  const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('medium');

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

  // Calculate ROI based on inputs
  const calculateROI = () => {
    const baseROI = 3.5; // 3.5x base return
    const complexityMultiplier = complexity === 'simple' ? 0.8 : complexity === 'medium' ? 1.0 : 1.3;
    const timelineMultiplier = timeline <= 2 ? 1.2 : timeline <= 4 ? 1.0 : 0.9;
    const teamMultiplier = teamSize <= 2 ? 0.9 : teamSize <= 5 ? 1.0 : 1.1;

    const roi = baseROI * complexityMultiplier * timelineMultiplier * teamMultiplier;
    const estimatedReturn = budget * roi;
    const profit = estimatedReturn - budget;

    return {
      roi: roi.toFixed(1),
      estimatedReturn: Math.round(estimatedReturn),
      profit: Math.round(profit),
      paybackPeriod: (budget / (profit / 12)).toFixed(1),
    };
  };

  const results = calculateROI();

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Interactive Tool</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Design ROI <span className="text-[var(--safety)]">Calculator</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Estimate the return on investment for your design project. Adjust the inputs below to see how different factors affect your projected ROI.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6 reveal">
              <div className="bento-card">
                <h2 className="text-h3 mb-6">Project Parameters</h2>

                {/* Budget */}
                <div className="mb-6">
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Project Budget: ${budget.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--surface)] rounded-lg appearance-none cursor-pointer accent-[var(--safety)]"
                  />
                  <div className="flex justify-between text-micro text-[var(--muted)] mt-1">
                    <span>$5K</span>
                    <span>$100K</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-6">
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Timeline: {timeline} month{timeline !== 1 ? 's' : ''}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={timeline}
                    onChange={(e) => setTimeline(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--surface)] rounded-lg appearance-none cursor-pointer accent-[var(--safety)]"
                  />
                  <div className="flex justify-between text-micro text-[var(--muted)] mt-1">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>

                {/* Team Size */}
                <div className="mb-6">
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Team Size: {teamSize} member{teamSize !== 1 ? 's' : ''}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--surface)] rounded-lg appearance-none cursor-pointer accent-[var(--safety)]"
                  />
                  <div className="flex justify-between text-micro text-[var(--muted)] mt-1">
                    <span>1 member</span>
                    <span>10 members</span>
                  </div>
                </div>

                {/* Complexity */}
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Project Complexity</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['simple', 'medium', 'complex'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setComplexity(level)}
                        className={`p-3 border-2 transition-all ${
                          complexity === level
                            ? 'border-[var(--safety)] bg-[var(--safety)] text-[var(--ink)]'
                            : 'border-[var(--ink)] hover:border-[var(--safety)]'
                        }`}
                      >
                        <div className="text-sm font-semibold capitalize">{level}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark">
                <h2 className="text-h3 mb-6 text-[var(--base)]">Projected Results</h2>

                <div className="space-y-6">
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Estimated ROI</div>
                    <div className="text-h1 text-[var(--safety)]">{results.roi}x</div>
                    <div className="text-micro text-[var(--muted)] mt-1">Return on investment</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-micro text-[var(--muted)] mb-1">Estimated Return</div>
                      <div className="text-h2 text-[var(--base)]">${results.estimatedReturn.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-micro text-[var(--muted)] mb-1">Net Profit</div>
                      <div className="text-h2 text-[var(--term-green)]">${results.profit.toLocaleString()}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Payback Period</div>
                    <div className="text-h3 text-[var(--base)]">{results.paybackPeriod} months</div>
                  </div>
                </div>
              </div>

              <div className="bento-card">
                <h3 className="text-h3 mb-4">Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-data text-[var(--muted)]">Initial Investment</span>
                    <span className="text-data font-semibold">${budget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-data text-[var(--muted)]">Estimated Return</span>
                    <span className="text-data font-semibold">${results.estimatedReturn.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-[var(--ink)]">
                    <span className="text-data font-semibold">Net Profit</span>
                    <span className="text-data font-semibold text-[var(--safety)]">
                      ${results.profit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bento-card bento-card--safety">
                <h3 className="text-h3 mb-2">Ready to get started?</h3>
                <p className="text-data mb-4">
                  Let's discuss your project and create a custom proposal tailored to your needs.
                </p>
                <Link to="/quote-request" className="btn--primary w-full justify-center">
                  Request a Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto reveal">
          <div className="bento-card">
            <h3 className="text-h3 mb-3">Disclaimer</h3>
            <p className="text-data text-[var(--muted)]">
              This calculator provides estimates based on industry averages and typical project outcomes. Actual results may vary based on project specifics, market conditions, and implementation quality. Contact us for a detailed analysis of your specific project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
