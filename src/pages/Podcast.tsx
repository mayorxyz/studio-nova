import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { episodes } from '../data';
import { SectionEyebrow, Tag } from '../components/atomic';

export default function Podcast() {
  const [filter, setFilter] = useState<'all' | 'podcast' | 'video'>('all');
  const [seasonFilter, setSeasonFilter] = useState<number | 'all'>('all');

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
  }, [filter, seasonFilter]);

  const filteredEpisodes = episodes.filter((ep) => {
    const typeMatch = filter === 'all' || ep.type === filter;
    const seasonMatch = seasonFilter === 'all' || ep.season === seasonFilter;
    return typeMatch && seasonMatch;
  });

  const seasons = Array.from(new Set(episodes.map((ep) => ep.season))).sort();

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Podcast & Videos</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            The Studio Nova <span className="text-[var(--safety)]">Podcast</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Insights on design, business, and technology from the Studio Nova team. Listen to our podcast or watch our video content.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section pt-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-4 mb-8 reveal">
            <div>
              <span className="text-micro text-[var(--muted)] mb-2 block">Type</span>
              <div className="flex gap-2">
                {(['all', 'podcast', 'video'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`tag cursor-pointer transition-all ${
                      filter === type ? 'tag--filled' : 'tag--ghost'
                    }`}
                  >
                    {type === 'all' ? 'All' : type === 'podcast' ? 'Podcast' : 'Video'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-micro text-[var(--muted)] mb-2 block">Season</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSeasonFilter('all')}
                  className={`tag cursor-pointer transition-all ${
                    seasonFilter === 'all' ? 'tag--filled' : 'tag--ghost'
                  }`}
                >
                  All Seasons
                </button>
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSeasonFilter(season)}
                    className={`tag cursor-pointer transition-all ${
                      seasonFilter === season ? 'tag--filled' : 'tag--ghost'
                    }`}
                  >
                    Season {season}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Episodes Grid */}
          <div className="grid-2">
            {filteredEpisodes.map((episode, i) => (
              <Link
                key={episode.id}
                to={`/podcast/${episode.slug}`}
                className="block reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="bento-card hover-lift h-full">
                  <div className="flex justify-between items-center mb-3">
                    <Tag variant="safety">
                      {episode.type === 'podcast' ? 'Podcast' : 'Video'}
                    </Tag>
                    <span className="text-micro text-[var(--muted)]">
                      S{episode.season}E{episode.episode}
                    </span>
                  </div>
                  <h3 className="text-h3 mb-2">{episode.title}</h3>
                  <p className="text-data text-[var(--muted)] mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between text-micro text-[var(--muted)]">
                    <span>{episode.duration}</span>
                    <span>{episode.guests?.join(', ') || 'Studio Nova Team'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-data text-[var(--muted)]">No episodes found with the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section--surface">
        <div className="max-w-[1400px] mx-auto text-center reveal">
          <h2 className="text-h2 mb-4">Never miss an episode</h2>
          <p className="text-data text-[var(--muted)] mb-8 max-w-lg mx-auto">
            Subscribe to our podcast on your favorite platform to get notified when new episodes are released.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="btn--primary">
              Apple Podcasts
            </a>
            <a href="#" className="btn--primary">
              Spotify
            </a>
            <a href="#" className="btn--ghost">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
