import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$5K–$15K',
    desc: 'Perfect for startups and small projects',
    features: [
      'Brand Identity',
      'Landing Page',
      '2 Revisions',
      '2 Week Delivery',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$15K–$50K',
    desc: 'For growing businesses needing full solutions',
    features: [
      'Full Brand System',
      'Multi-page Website',
      'UI/UX Design',
      'Motion Assets',
      '4 Revisions',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$50K+',
    desc: 'Complex projects requiring dedicated teams',
    features: [
      'Everything in Growth',
      'Custom Development',
      'Ongoing Support',
      'Dedicated Team',
      'Priority Access',
    ],
    featured: false,
  },
];

const comparisonFeatures = [
  { feature: 'Brand Identity', starter: true, growth: true, enterprise: true },
  { feature: 'Landing Page', starter: true, growth: true, enterprise: true },
  { feature: 'Multi-page Website', starter: false, growth: true, enterprise: true },
  { feature: 'UI/UX Design', starter: false, growth: true, enterprise: true },
  { feature: 'Motion Assets', starter: false, growth: true, enterprise: true },
  { feature: 'Custom Development', starter: false, growth: false, enterprise: true },
  { feature: 'Ongoing Support', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated Team', starter: false, growth: false, enterprise: true },
  { feature: 'Priority Access', starter: false, growth: false, enterprise: true },
];

export default function Pricing() {
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
          $.
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <SectionEyebrow>Pricing — Transparent & Fair</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Transparent <span className="text-[var(--safety)]">pricing.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Clear, upfront pricing with no hidden fees. Choose the package that fits your needs, or let's create a custom solution together.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid-3">
            {pricingTiers.map((plan, i) => (
              <div
                key={plan.name}
                className={`bento-card reveal ${plan.featured ? 'bento-card--dark shadow-safety' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {plan.featured && <Tag variant="safety" className="mb-4">Most Popular</Tag>}
                <h3 className="text-h3">{plan.name}</h3>
                <div className="text-h2 text-[var(--safety)] my-3">{plan.price}</div>
                <p className="text-data text-[var(--muted)] mb-4">{plan.desc}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-data flex items-center gap-2">
                      <span className="text-[var(--safety)]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote-request"
                  className={`btn--primary w-full justify-center ${plan.featured ? 'btn--primary--safety' : ''}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Compare Plans</SectionEyebrow>
            <h2 className="text-h2 mt-2">Feature <span className="text-[var(--safety)]">comparison.</span></h2>
          </div>

          <div className="bento-card reveal overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[var(--ink)]">
                  <th className="text-left py-4 text-data font-semibold">Feature</th>
                  <th className="text-center py-4 text-data font-semibold">Starter</th>
                  <th className="text-center py-4 text-data font-semibold text-[var(--safety)]">Growth</th>
                  <th className="text-center py-4 text-data font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className="border-b border-[var(--ink)]/20">
                    <td className="py-4 text-data">{row.feature}</td>
                    <td className="py-4 text-center">
                      {row.starter ? (
                        <span className="text-[var(--safety)] text-xl">✓</span>
                      ) : (
                        <span className="text-[var(--muted)]">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.growth ? (
                        <span className="text-[var(--safety)] text-xl">✓</span>
                      ) : (
                        <span className="text-[var(--muted)]">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.enterprise ? (
                        <span className="text-[var(--safety)] text-xl">✓</span>
                      ) : (
                        <span className="text-[var(--muted)]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="text-h2 mt-2">Common <span className="text-[var(--safety)]">questions.</span></h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do you offer custom pricing?',
                a: 'Absolutely. Every project is unique, and we\'re happy to create a custom package tailored to your specific needs and budget.',
              },
              {
                q: 'What\'s included in revisions?',
                a: 'Revisions include design adjustments, content updates, and minor feature changes. Major scope changes may require additional investment.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment structures. Typically 50% upfront and 50% on completion, but we can work with you to find what works best.',
              },
              {
                q: 'What happens after launch?',
                a: 'We offer ongoing support and maintenance packages. Our Enterprise plan includes dedicated support, while other plans can add support as needed.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary by scope. Starter projects typically take 2-4 weeks, Growth projects 6-12 weeks, and Enterprise projects 3-6 months.',
              },
            ].map((faq, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <h3 className="text-h3 mb-2">{faq.q}</h3>
                <p className="text-data text-[var(--muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Need something custom?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored solution.
          </p>
          <Link to="/quote-request">
            <Button variant="primary" safety>
              Request a Quote →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
