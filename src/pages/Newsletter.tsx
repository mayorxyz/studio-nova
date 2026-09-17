import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Tag, Button } from '../components/atomic';
import { CheckIcon, CalendarIcon, ClockIcon, LockIcon, GearIcon } from '../components/icons';

const pastIssues = [
  {
    number: '47',
    date: 'Jan 9, 2024',
    title: 'Design Systems at Scale',
    excerpt: 'How top companies maintain consistency across 100+ products without sacrificing innovation.',
    link: '#',
  },
  {
    number: '46',
    date: 'Jan 2, 2024',
    title: 'The AI Design Revolution',
    excerpt: 'Practical applications of AI in design workflows that are actually saving time, not just hype.',
    link: '#',
  },
  {
    number: '45',
    date: 'Dec 26, 2023',
    title: 'Accessibility Beyond Compliance',
    excerpt: 'Why accessible design isn\'t just about meeting WCAG standards—it\'s about creating better experiences for everyone.',
    link: '#',
  },
];

const testimonials = [
  {
    name: 'Alex Rivera',
    title: 'Senior Engineer at Stripe',
    quote: 'The only newsletter I actually read every week. Consistently delivers actionable insights.',
    avatar: 'AR',
  },
  {
    name: 'Priya Sharma',
    title: 'Design Lead at Figma',
    quote: 'Studio Nova\'s newsletter is my go-to resource for staying current with design systems and frontend architecture.',
    avatar: 'PS',
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
  };

  return (
    <div className="pb-20">
      {/* Hero Container */}
      <section className="section py-20">
        <div className="max-w-[640px] mx-auto text-center">
          {isSubscribed ? (
            // Success State
            <div className="reveal">
              <div className="mb-6 flex justify-center">
                <CheckIcon size={64} className="text-[var(--safety)]" />
              </div>
              <h1 className="text-h1 mb-4">
                You're <span className="text-[var(--safety)]">subscribed!</span>
              </h1>
              <p className="text-data text-[var(--muted)] mb-8">
                Check your inbox for a confirmation email. Your first newsletter arrives next Tuesday.
              </p>
              <div className="terminal max-w-md mx-auto text-left">
                <div className="terminal__header">
                  <span className="terminal__dot terminal__dot--red" />
                  <span className="terminal__dot terminal__dot--yellow" />
                  <span className="terminal__dot terminal__dot--green" />
                </div>
                <div className="terminal__line text-[var(--term-green)] flex items-center gap-2">
                  <CheckIcon size={14} /> Subscription confirmed
                </div>
                <div className="terminal__line text-[var(--term-amber)]">→ Next issue: Tuesday 10 AM PST</div>
                <div className="terminal__line">→ Unsubscribe anytime</div>
              </div>
            </div>
          ) : (
            // Subscription Form
            <>
              <h1 className="text-h1 mb-4 reveal">
                Join <span className="text-[var(--safety)]">10,000+</span> Industry Insiders
              </h1>
              <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
                Weekly actionable insights on full-stack web development, system architecture, and UI engineering.
              </p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-3 justify-center mb-12 reveal" style={{ transitionDelay: '0.2s' }}>
                <Tag variant="ghost"><CalendarIcon size={14} className="inline mr-1" /> Delivered every Tuesday</Tag>
                <Tag variant="ghost"><ClockIcon size={14} className="inline mr-1" /> 5-minute read</Tag>
                <Tag variant="ghost"><LockIcon size={14} className="inline mr-1" /> No spam, unsubscribe anytime</Tag>
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name (optional)"
                    className="flex-1 px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address *"
                    className="flex-1 px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    autoFocus
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  safety
                  disabled={isSubmitting}
                  className="w-full justify-center text-lg py-4"
                >
                  {isSubmitting ? (
                    <>
                      <GearIcon size={16} className="animate-spin mr-2 inline" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe Free →'
                  )}
                </Button>
              </form>

              <p className="text-micro text-[var(--muted)] mt-4">
                By subscribing, you agree to our privacy policy. Unsubscribe with one click.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Past Issues */}
      <section className="section--surface">
        <div className="max-w-[1000px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Archive</SectionEyebrow>
            <h2 className="text-h2 mt-2">Read Past <span className="text-[var(--safety)]">Issues</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastIssues.map((issue, i) => (
              <Link
                key={issue.number}
                to={issue.link}
                className="bento-card hover-lift reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Tag variant="safety">Issue #{issue.number}</Tag>
                  <span className="text-micro text-[var(--muted)]">{issue.date}</span>
                </div>
                <h3 className="text-h3 mb-3">{issue.title}</h3>
                <p className="text-data text-[var(--muted)] mb-4">{issue.excerpt}</p>
                <span className="text-micro text-[var(--safety)]">Read Issue →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          {/* Subscriber Count */}
          <div className="text-center mb-12 reveal">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-3">
                {['JD', 'JS', 'AC', 'SK', 'MJ'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-[var(--safety)] border-2 border-[var(--base)] rounded-full flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">{initials}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-data text-[var(--muted)]">
              Join <strong className="text-[var(--safety)]">10,000+</strong> designers and developers
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--safety)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-data font-semibold">{testimonial.name}</div>
                    <div className="text-micro text-[var(--muted)]">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-data text-[var(--muted)] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {!isSubscribed && (
        <section className="section--dark">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 className="text-h2 mb-4 text-[var(--base)]">Ready to level up your skills?</h2>
            <p className="text-data text-[var(--muted)] mb-8">
              Join thousands of professionals who trust Studio Nova for weekly insights.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn--primary btn--primary--safety"
            >
              Subscribe Now →
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
