import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { episodes } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';
import AudioPlayer from '../components/AudioPlayer';

export default function PodcastEpisode() {
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

  const episode = episodes.find((ep) => ep.slug === slug);

  if (!episode) {
    return <Navigate to="/404" replace />;
  }

  // Get related episodes (same season or same type)
  const relatedEpisodes = episodes
    .filter((ep) => ep.id !== episode.id && (ep.season === episode.season || ep.type === episode.type))
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to="/podcast" className="hover:text-[var(--safety)] transition-colors">
              Podcast
            </Link>
            {' / '}
            Season {episode.season}, Episode {episode.episode}
          </SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">{episode.title}</h1>
          <div className="flex flex-wrap gap-2 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{episode.type === 'podcast' ? 'Podcast' : 'Video'}</Tag>
            <Tag variant="ghost">{episode.duration}</Tag>
            {episode.guests?.map((guest) => (
              <Tag key={guest} variant="ghost">
                {guest}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Player */}
      <section className="section pt-0">
        <div className="max-w-[1000px] mx-auto">
          {episode.audioUrl ? (
            <AudioPlayer
              audioUrl={episode.audioUrl}
              title={episode.title}
              duration={episode.duration}
            />
          ) : episode.videoUrl ? (
            <div className="bento-card bento-card--dark reveal">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-h3 mb-2 text-[var(--base)]">Video Episode</h3>
                <p className="text-data text-[var(--muted)] mb-4">
                  Watch this episode on our YouTube channel
                </p>
                <a
                  href={episode.subscribeLinks?.youtube || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--primary btn--primary--safety"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ) : (
            <div className="bento-card bento-card--dark reveal">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎙️</div>
                <h3 className="text-h3 mb-2 text-[var(--base)]">Coming Soon</h3>
                <p className="text-data text-[var(--muted)]">
                  This episode is currently being produced. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="section pt-0">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div className="reveal">
              <h2 className="text-h2 mb-4">About This Episode</h2>
              <p className="text-data text-[var(--muted)] leading-relaxed mb-6">{episode.description}</p>
              
              {/* Show Notes */}
              {episode.showNotes && (
                <div className="mb-8">
                  <h3 className="text-h3 mb-3">Show Notes</h3>
                  <div className="text-data text-[var(--muted)] leading-relaxed whitespace-pre-line">
                    {episode.showNotes}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {episode.keyTakeaways && episode.keyTakeaways.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-h3 mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {episode.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="text-data text-[var(--muted)] flex items-start gap-2">
                        <span className="text-[var(--safety)] mt-1">◆</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              {episode.resources && episode.resources.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-h3 mb-3">Resources Mentioned</h3>
                  <ul className="space-y-2">
                    {episode.resources.map((resource, i) => (
                      <li key={i} className="text-data flex items-start gap-2">
                        <span className="text-[var(--safety)] mt-1">→</span>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[var(--safety)] hover:underline"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card">
                <h3 className="text-h3 mb-4">Episode Details</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Season</div>
                    <div className="text-data">Season {episode.season}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Episode</div>
                    <div className="text-data">Episode {episode.episode}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Duration</div>
                    <div className="text-data">{episode.duration}</div>
                  </div>
                  <div>
                    <div className="text-micro text-[var(--muted)] mb-1">Type</div>
                    <div className="text-data">{episode.type === 'podcast' ? 'Audio Podcast' : 'Video'}</div>
                  </div>
                  {episode.guests && episode.guests.length > 0 && (
                    <div>
                      <div className="text-micro text-[var(--muted)] mb-1">Guests</div>
                      <div className="text-data">{episode.guests.join(', ')}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timestamps */}
              {episode.timestamps && episode.timestamps.length > 0 && (
                <div className="bento-card mt-4">
                  <h3 className="text-h3 mb-4">Timestamps</h3>
                  <div className="space-y-2">
                    {episode.timestamps.map((timestamp, i) => (
                      <div key={i} className="flex gap-3 text-data">
                        <span className="text-[var(--safety)] font-mono flex-shrink-0">{timestamp.time}</span>
                        <span className="text-[var(--muted)]">{timestamp.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="section--surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="section__header reveal">
              <SectionEyebrow>Continue Listening</SectionEyebrow>
              <h2 className="text-h2 mt-2">
                Related <span className="text-[var(--safety)]">Episodes</span>
              </h2>
            </div>
            <div className="grid-3">
              {relatedEpisodes.map((ep, i) => (
                <Link key={ep.id} to={`/podcast/${ep.slug}`} className="block reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="bento-card hover-lift h-full">
                    <div className="flex justify-between items-start mb-3">
                      <Tag variant="safety">{ep.type === 'podcast' ? 'Podcast' : 'Video'}</Tag>
                      <span className="text-micro text-[var(--muted)]">
                        S{ep.season}E{ep.episode}
                      </span>
                    </div>
                    <h3 className="text-h3 mb-2">{ep.title}</h3>
                    <p className="text-data text-[var(--muted)] mb-4">{ep.description}</p>
                    <div className="text-micro text-[var(--muted)]">{ep.duration}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe Links */}
      {episode.subscribeLinks && (
        <section className="section pt-0">
          <div className="max-w-[1000px] mx-auto">
            <div className="bento-card reveal">
              <h3 className="text-h3 mb-4">Subscribe & Listen</h3>
              <div className="flex flex-wrap gap-3">
                {episode.subscribeLinks.apple && (
                  <a
                    href={episode.subscribeLinks.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--ghost"
                  >
                    Apple Podcasts
                  </a>
                )}
                {episode.subscribeLinks.spotify && (
                  <a
                    href={episode.subscribeLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--ghost"
                  >
                    Spotify
                  </a>
                )}
                {episode.subscribeLinks.youtube && (
                  <a
                    href={episode.subscribeLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--ghost"
                  >
                    YouTube
                  </a>
                )}
                {episode.subscribeLinks.rss && (
                  <a
                    href={episode.subscribeLinks.rss}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--ghost"
                  >
                    RSS Feed
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Enjoyed this episode?</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Subscribe to our podcast on your favorite platform to get notified when new episodes are released.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/podcast" className="btn--primary">
              ← Back to Podcast
            </Link>
            {episode.subscribeLinks?.spotify && (
              <a
                href={episode.subscribeLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="btn--ghost"
              >
                Subscribe on Spotify
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
