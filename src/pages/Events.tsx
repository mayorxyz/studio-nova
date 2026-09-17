import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { events } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Events() {
  const [filter, setFilter] = useState<string>('all');

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
  }, [filter]);

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);
  const categories = ['all', 'webinar', 'workshop', 'speaking'];
  const upcomingEvents = events.filter((e) => new Date(e.date) >= new Date()).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Events</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Upcoming <span className="text-[var(--safety)]">Events</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Join our webinars, workshops, and speaking engagements. Learn from industry experts and connect with the design community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>Don't Miss</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Upcoming <span className="text-[var(--safety)]">Events</span>
            </h2>
          </div>
          <div className="grid-3">
            {upcomingEvents.map((event, i) => (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bento-card bento-card--dark hover-lift h-full">
                  <div className="flex justify-between items-start mb-3">
                    <Tag variant="safety">
                      {event.category === 'webinar' && '🎥'}
                      {event.category === 'workshop' && '🛠️'}
                      {event.category === 'speaking' && '🎤'}
                      {' '}{event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Tag>
                    <span className="text-micro text-[var(--muted)]">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-h3 mb-2 text-[var(--base)]">{event.title}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-micro text-[var(--muted)]">{event.duration}</span>
                    <span className="text-micro text-[var(--safety)]">Register →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="section__header reveal">
            <SectionEyebrow>All Events</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Browse by <span className="text-[var(--safety)]">Type</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`tag cursor-pointer transition-all ${
                  filter === cat ? 'tag--filled' : 'tag--ghost'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid-2">
            {filteredEvents.map((event, i) => (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="bento-card hover-lift h-full">
                  <div className="flex justify-between items-start mb-3">
                    <Tag variant="safety">
                      {event.category === 'webinar' && '🎥'}
                      {event.category === 'workshop' && '🛠️'}
                      {event.category === 'speaking' && '🎤'}
                      {' '}{event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Tag>
                    <span className="text-micro text-[var(--muted)]">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-h3 mb-2">{event.title}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-micro text-[var(--muted)]">
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)]">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Want to host an event?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            We offer custom workshops and training sessions tailored to your team's needs.
          </p>
          <a href="/contact" className="btn--primary btn--primary--safety">
            Contact Us →
          </a>
        </div>
      </section>
    </div>
  );
}
