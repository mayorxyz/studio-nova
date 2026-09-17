import { useParams, Link } from 'react-router-dom';
import { events } from '../data';
import { SectionEyebrow, Button } from '../components/atomic';

export default function EventRegistrationSuccess() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Event Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The event you're looking for doesn't exist.
          </p>
          <Link to="/events" className="btn--primary">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center px-8">
        <SectionEyebrow>Registration Confirmed</SectionEyebrow>
        
        <h1 className="text-h1 mt-4 mb-6 reveal">
          You're <span className="text-[var(--safety)]">registered!</span>
        </h1>
        
        <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          Thanks for registering for <strong>{event.title}</strong>. We've sent a confirmation email with all the event details and a calendar invite.
        </p>

        {/* Event Details */}
        <div className="bento-card bento-card--dark max-w-xl mx-auto mb-8 reveal" style={{ transitionDelay: '0.15s' }}>
          <h3 className="text-h3 text-[var(--base)] mb-4">Event Details</h3>
          <div className="space-y-3 text-left">
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Date</div>
              <div className="text-data text-[var(--base)]">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Time</div>
              <div className="text-data text-[var(--base)]">{event.time}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Location</div>
              <div className="text-data text-[var(--base)]">{event.location}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Duration</div>
              <div className="text-data text-[var(--base)]">{event.duration}</div>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal max-w-xl mx-auto text-left mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal__header">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span>nova register --event={event.slug}</span>
          </div>
          <div className="terminal__line text-[var(--term-green)]">
            ✓ Registration confirmed
          </div>
          <div className="terminal__line text-[var(--term-amber)]">
            → Calendar invite sent to your email
          </div>
          <div className="terminal__line">
            → Reminder set for 24 hours before event
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span className="terminal__cursor" />
          </div>
        </div>

        {/* What's Next */}
        <div className="bento-card max-w-xl mx-auto mb-8 text-left reveal" style={{ transitionDelay: '0.25s' }}>
          <h3 className="text-h3 mb-4">What's Next?</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Check Your Email</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  You'll receive a confirmation email shortly with event details and a calendar invite.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Add to Calendar</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  Click the calendar invite link in your email to add the event to your calendar.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Prepare Questions</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  Think about questions you'd like to ask during the Q&A session.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center reveal" style={{ transitionDelay: '0.3s' }}>
          <Link to="/events">
            <Button variant="primary" safety>
              Back to Events
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              Go to Home
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 reveal" style={{ transitionDelay: '0.35s' }}>
          <p className="text-data text-[var(--muted)] mb-2">
            Questions about the event?
          </p>
          <a href="mailto:events@studionova.com" className="text-data text-[var(--safety)] hover:underline">
            events@studionova.com
          </a>
        </div>
      </div>
    </div>
  );
}
