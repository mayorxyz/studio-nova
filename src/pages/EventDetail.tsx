import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { events } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();

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

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/404" replace />;
  }

  // Get related events (same category)
  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/events" className="hover:text-[var(--safety)] transition-colors">
              Events
            </Link>
            {' / '}
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">{event.title}</h1>
          <div className="flex flex-wrap gap-2 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </Tag>
            <Tag variant="ghost">{event.type === 'online' ? '🌐 Online' : event.type === 'in-person' ? '📍 In-Person' : '🔄 Hybrid'}</Tag>
            <Tag variant="ghost">{event.duration}</Tag>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div className="reveal">
              <h2 className="text-h2 mb-4">About This Event</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-6">{event.description}</p>

              <h3 className="text-h3 mb-3">What You'll Learn</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Expert insights and best practices</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Real-world examples and case studies</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Interactive Q&A sessions</span>
                </li>
                <li className="text-data text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--safety)] mt-1">◆</span>
                  <span>Networking opportunities</span>
                </li>
              </ul>

              <h3 className="text-h3 mb-3">Speakers</h3>
              <div className="space-y-3 mb-6">
                {event.speakers.map((speaker) => (
                  <div key={speaker} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--safety)] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {speaker.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-data font-semibold">{speaker}</div>
                      <div className="text-micro text-[var(--muted)]">Studio Nova</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card bento-card--dark sticky top-24">
                <h3 className="text-h3 mb-4 text-[var(--base)]">Event Details</h3>
                <div className="space-y-4 mb-6">
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
                    <div className="text-micro text-[var(--muted)] mb-1">Duration</div>
                    <div className="text-data text-[var(--base)]">{event.duration}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Location</div>
                    <div className="text-data text-[var(--base)]">{event.location}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Type</div>
                    <div className="text-data text-[var(--base)]">
                      {event.type === 'online' ? 'Online Event' : event.type === 'in-person' ? 'In-Person' : 'Hybrid'}
                    </div>
                  </div>
                </div>
                <a
                  href={event.registrationUrl || '#'}
                  className="btn--primary btn--primary--safety w-full justify-center"
                >
                  Register Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="section pt-0">
        <div className="max-w-[1000px] mx-auto">
          <div className="bento-card reveal">
            <h3 className="text-h3 mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <Tag key={tag} variant="ghost">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>More Events</SectionEyebrow>
              <h2 className="text-h2 mt-2">
                Related <span className="text-[var(--safety)]">Events</span>
              </h2>
            </div>
            <div className="grid-3">
              {relatedEvents.map((ev, i) => (
                <Link
                  key={ev.id}
                  to={`/events/${ev.slug}`}
                  className="block reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bento-card hover-lift h-full">
                    <Tag variant="safety" className="mb-3">
                      {ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}
                    </Tag>
                    <h3 className="text-h3 mb-2">{ev.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{ev.description}</p>
                    <div className="text-micro text-[var(--muted)]">
                      {new Date(ev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Can't make it to this event?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Browse our other upcoming events or contact us about hosting a custom workshop.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events" className="btn--primary">
              ← Back to Events
            </Link>
            <a href="/contact" className="btn--ghost">
              Host a Workshop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
