import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

// Mock event data
const eventData = {
  title: 'Design Systems Summit 2024',
  badge: 'Live Virtual Summit',
  date: 'March 15, 2024',
  time: '10:00 AM - 4:00 PM PST',
  location: 'Virtual (Zoom)',
  audience: 'Designers, Developers, Product Managers',
  description: 'Join industry leaders for a full day of insights on building scalable design systems that drive consistency and efficiency across your organization.',
};

const agenda = [
  {
    time: '10:00 AM',
    title: 'Opening Keynote: The Future of Design Systems',
    track: 'Strategy',
    speaker: { name: 'Jane Doe', title: 'Creative Director', company: 'Studio Nova' },
    abstract: 'Explore emerging trends in design systems, from AI-assisted component generation to cross-platform consistency challenges.',
  },
  {
    time: '11:00 AM',
    title: 'Building Accessible Component Libraries',
    track: 'Technical',
    speaker: { name: 'John Smith', title: 'Lead Developer', company: 'Studio Nova' },
    abstract: 'Learn how to build WCAG 2.1 AA compliant components that work seamlessly across all devices and assistive technologies.',
  },
  {
    time: '1:00 PM',
    title: 'Design Tokens: The Foundation of Scale',
    track: 'Technical',
    speaker: { name: 'Alex Chen', title: 'UX Designer', company: 'Studio Nova' },
    abstract: 'Deep dive into design tokens, their implementation, and how they enable true multi-platform consistency.',
  },
  {
    time: '2:30 PM',
    title: 'Governance Models for Enterprise Teams',
    track: 'Strategy',
    speaker: { name: 'Emma Wilson', title: 'Project Manager', company: 'Studio Nova' },
    abstract: 'Explore different governance models for managing design systems in large organizations with multiple product teams.',
  },
];

const speakers = [
  {
    name: 'Jane Doe',
    title: 'Creative Director',
    company: 'Studio Nova',
    bio: '15 years leading creative teams at top agencies. Passionate about design that drives business results.',
    avatar: 'https://image.qwenlm.ai/generated-images/10809a42-072c-40d8-abe0-1e3359ef14f3/_result.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'John Smith',
    title: 'Lead Developer',
    company: 'Studio Nova',
    bio: 'Full-stack engineer with a passion for performance and clean code. React and TypeScript specialist.',
    avatar: 'https://image.qwenlm.ai/generated-images/ea61e782-2267-4795-b632-17abadfb1c85/_result.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Alex Chen',
    title: 'UX Designer',
    company: 'Studio Nova',
    bio: 'Research-driven design for complex products. Expert in user testing and accessibility.',
    avatar: 'https://image.qwenlm.ai/generated-images/acdaa9ce-81e3-43d1-bea7-988f145f4946/_result.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Emma Wilson',
    title: 'Project Manager',
    company: 'Studio Nova',
    bio: 'Keeping projects on track and teams aligned. Agile methodology and client communication specialist.',
    avatar: 'https://image.qwenlm.ai/generated-images/a1b8d21e-5ea5-40eb-b951-d59692fdaa3e/_result.png',
    social: { linkedin: '#', twitter: '#' },
  },
];

const faqs = [
  {
    question: 'What is the refund policy?',
    answer: 'Full refunds are available up to 7 days before the event. After that, you can transfer your ticket to someone else.',
  },
  {
    question: 'Will sessions be recorded?',
    answer: 'Yes, all sessions will be recorded and available to registered attendees for 30 days after the event.',
  },
  {
    question: 'What are the technical requirements?',
    answer: 'You\'ll need a stable internet connection and a modern web browser. We recommend Chrome or Firefox for the best experience.',
  },
  {
    question: 'Is there a code of conduct?',
    answer: 'Yes, we follow a strict code of conduct to ensure a safe and inclusive environment for all participants.',
  },
];

export default function EventRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    jobTitle: '',
    ticketType: 'general',
    accommodations: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto text-center px-8">
          <SectionEyebrow>Registration Confirmed</SectionEyebrow>
          <h1 className="text-h1 mt-4 mb-6 reveal">
            You're <span className="text-[var(--safety)]">registered!</span>
          </h1>
          <p className="text-data text-[var(--muted)] mb-8 reveal">
            Thanks for registering for {eventData.title}. Check your email for confirmation details and calendar invite.
          </p>
          <div className="terminal max-w-xl mx-auto text-left mb-8 reveal">
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <div className="terminal__line text-[var(--term-green)]">✓ Registration confirmed</div>
            <div className="terminal__line text-[var(--term-amber)]">→ Calendar invite sent</div>
            <div className="terminal__line">→ Reminder set for event day</div>
          </div>
          <Link to="/events" className="btn--primary">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-[var(--term-bg)] text-[var(--base)] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, var(--safety) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--term-green) 0%, transparent 50%)',
          }} />
        </div>
        <div className="max-w-[var(--container-lg)] mx-auto px-8 relative z-10">
          <Tag variant="safety" className="mb-6">{eventData.badge}</Tag>
          <h1 className="text-h1 mb-6 reveal">{eventData.title}</h1>
          <p className="text-data text-[var(--muted)] mb-8 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            {eventData.description}
          </p>

          {/* Meta Bar */}
          <div className="flex flex-wrap gap-6 mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Date</div>
              <div className="text-data">{eventData.date}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Time</div>
              <div className="text-data">{eventData.time}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Location</div>
              <div className="text-data">{eventData.location}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Audience</div>
              <div className="text-data">{eventData.audience}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
            <button onClick={scrollToForm} className="btn--primary btn--primary--safety">
              Register Now →
            </button>
            <button className="btn--ghost">
              Add to Calendar ↓
            </button>
          </div>
        </div>
      </section>

      {/* Event Agenda */}
      <section className="section">
        <div className="max-w-[var(--container-lg)] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Event Schedule</SectionEyebrow>
            <h2 className="text-h2 mt-2">Full Day <span className="text-[var(--safety)]">Agenda</span></h2>
          </div>

          <div className="space-y-4">
            {agenda.map((session, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-micro text-[var(--muted)] mb-1">Time</div>
                    <div className="text-data font-semibold">{session.time}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-h3">{session.title}</h3>
                      <Tag variant="safety">{session.track}</Tag>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[var(--safety)] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {session.speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-data font-semibold">{session.speaker.name}</div>
                        <div className="text-micro text-[var(--muted)]">{session.speaker.title}, {session.speaker.company}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedSession(expandedSession === i ? null : i)}
                      className="text-micro text-[var(--safety)] hover:underline"
                    >
                      {expandedSession === i ? 'Hide Details' : 'View Session Details'}
                    </button>
                    {expandedSession === i && (
                      <p className="text-data text-[var(--muted)] mt-3 leading-relaxed">
                        {session.abstract}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section--surface">
        <div className="max-w-[var(--container-lg)] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Meet the Experts</SectionEyebrow>
            <h2 className="text-h2 mt-2">Featured <span className="text-[var(--safety)]">Speakers</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, i) => (
              <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover rounded mb-4"
                />
                <h3 className="text-h3 mb-1">{speaker.name}</h3>
                <div className="text-micro text-[var(--muted)] mb-3">{speaker.title}</div>
                <div className="text-micro text-[var(--safety)] mb-3">{speaker.company}</div>
                <p className="text-data text-[var(--muted)] mb-4">{speaker.bio}</p>
                <div className="flex gap-3">
                  <a href={speaker.social.linkedin} className="text-micro text-[var(--safety)] hover:underline">LinkedIn</a>
                  <a href={speaker.social.twitter} className="text-micro text-[var(--safety)] hover:underline">Twitter</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section" ref={formRef}>
        <div className="max-w-[var(--container-sm)] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Secure Your Spot</SectionEyebrow>
            <h2 className="text-h2 mt-2">Register <span className="text-[var(--safety)]">Now</span></h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-[var(--safety)]' : 'text-[var(--muted)]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-[var(--safety)] text-[var(--ink)]' : 'bg-[var(--surface)]'}`}>
                  1
                </div>
                <span className="text-data">Contact Info</span>
              </div>
              <div className="flex-1 h-1 bg-[var(--surface)]">
                <div className={`h-full bg-[var(--safety)] transition-all ${currentStep >= 2 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-[var(--safety)]' : 'text-[var(--muted)]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-[var(--safety)] text-[var(--ink)]' : 'bg-[var(--surface)]'}`}>
                  2
                </div>
                <span className="text-data">Ticket & Details</span>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-6 reveal">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Job Title</label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="Your role"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="btn--primary w-full justify-center"
                >
                  Continue →
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 reveal">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-3 block">Ticket Type *</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="bento-card cursor-pointer hover-lift">
                      <input
                        type="radio"
                        name="ticketType"
                        value="general"
                        checked={formData.ticketType === 'general'}
                        onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-h3 mb-2">General Access</div>
                      <div className="text-data text-[var(--safety)] font-bold mb-2">Free</div>
                      <div className="text-micro text-[var(--muted)]">Full event access</div>
                    </label>
                    <label className="bento-card bento-card--safety cursor-pointer hover-lift">
                      <input
                        type="radio"
                        name="ticketType"
                        value="vip"
                        checked={formData.ticketType === 'vip'}
                        onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-h3 mb-2">VIP Access</div>
                      <div className="text-data font-bold mb-2">$99</div>
                      <div className="text-micro">+ Exclusive workshop</div>
                      <div className="text-micro text-[var(--ink)] mt-2">Only 12 spots left!</div>
                    </label>
                    <label className="bento-card cursor-pointer hover-lift">
                      <input
                        type="radio"
                        name="ticketType"
                        value="student"
                        checked={formData.ticketType === 'student'}
                        onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-h3 mb-2">Student</div>
                      <div className="text-data text-[var(--safety)] font-bold mb-2">Free</div>
                      <div className="text-micro text-[var(--muted)]">With valid .edu email</div>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Special Accommodations</label>
                  <textarea
                    value={formData.accommodations}
                    onChange={(e) => setFormData({ ...formData, accommodations: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none"
                    placeholder="Let us know if you have any accessibility requirements or special needs"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn--ghost flex-1"
                  >
                    ← Back
                  </button>
                  <Button type="submit" variant="primary" safety className="flex-1 justify-center">
                    Complete Registration →
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ & Venue */}
      <section className="section--surface">
        <div className="max-w-[var(--container-lg)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FAQ */}
            <div>
              <div className="section__header reveal">
                <SectionEyebrow>Common Questions</SectionEyebrow>
                <h2 className="text-h2 mt-2">Frequently Asked <span className="text-[var(--safety)]">Questions</span></h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bento-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full text-left"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-h3">{faq.question}</h3>
                        <span className="text-[var(--safety)] text-2xl">
                          {expandedFaq === i ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {expandedFaq === i && (
                      <p className="text-data text-[var(--muted)] mt-3 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Venue/Access */}
            <div>
              <div className="section__header reveal">
                <SectionEyebrow>Event Access</SectionEyebrow>
                <h2 className="text-h2 mt-2">Venue <span className="text-[var(--safety)]">Details</span></h2>
              </div>
              <div className="bento-card bento-card--dark reveal">
                <div className="aspect-video bg-[var(--surface)] mb-4 flex items-center justify-center">
                  <span className="text-data text-[var(--muted)]">Map Placeholder</span>
                </div>
                <h3 className="text-h3 text-[var(--base)] mb-3">Virtual Event</h3>
                <div className="space-y-3 text-data text-[var(--muted)]">
                  <p><strong className="text-[var(--base)]">Platform:</strong> Zoom Webinar</p>
                  <p><strong className="text-[var(--base)]">Access:</strong> Link will be sent 24 hours before the event</p>
                  <p><strong className="text-[var(--base)]">Requirements:</strong> Stable internet connection, modern web browser</p>
                  <p><strong className="text-[var(--base)]">Support:</strong> tech-support@studionova.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
