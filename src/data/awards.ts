export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  category: string;
  description: string;
  url?: string;
  project?: string;
  featured?: boolean;
}

export const awards: Award[] = [
  {
    id: 'awwwards-sotd-ecothread',
    title: 'Site of the Day',
    year: 2024,
    organization: 'Awwwards',
    category: 'Web Design',
    description: 'EcoThread sustainable fashion marketplace recognized for outstanding design and innovation.',
    url: 'https://www.awwwards.com/sites/ecothread-fashion',
    project: 'EcoThread',
    featured: true,
  },
  {
    id: 'css-design-awards-neon',
    title: 'Best UI Design',
    year: 2024,
    organization: 'CSS Design Awards',
    category: 'UI/UX',
    description: 'Neon Coffee brand identity and e-commerce platform recognized for exceptional UI design.',
    url: 'https://www.cssdesignawards.com/sites/neon-coffee/45678',
    project: 'Neon Coffee',
    featured: true,
  },
  {
    id: 'fwa-honorable-mention',
    title: 'Honorable Mention',
    year: 2024,
    organization: 'The FWA',
    category: 'Innovation',
    description: 'FinFlow app redesign recognized for innovative approach to financial data visualization.',
    url: 'https://thefwa.com/daily/finflow-app/12345',
    project: 'FinFlow',
  },
  {
    id: 'webby-award-soundwave',
    title: 'Webby Award',
    year: 2023,
    organization: 'The Webby Awards',
    category: 'Motion Design',
    description: 'SoundWave motion graphics campaign recognized for excellence in digital advertising.',
    url: 'https://www.webbyawards.com/winners/2023/motion-design/soundwave-campaign',
    project: 'SoundWave',
    featured: true,
  },
  {
    id: 'communication-arts',
    title: 'Design Annual',
    year: 2023,
    organization: 'Communication Arts',
    category: 'Interactive',
    description: 'Selected for Communication Arts Design Annual for outstanding interactive design work.',
    url: 'https://www.commarts.com/columns/design-annual-2023-interactive',
  },
  {
    id: 'aiga-50',
    title: 'AIGA 50|50',
    year: 2023,
    organization: 'AIGA',
    category: 'Brand Identity',
    description: 'Selected for AIGA 50|50 competition for exceptional brand identity work.',
    url: 'https://www.aiga.org/awards-design/50-50-2023-brand-identity',
  },
  {
    id: 'behance-featured',
    title: 'Featured Gallery',
    year: 2023,
    organization: 'Behance',
    category: 'Web Design',
    description: 'Multiple projects featured in Behance curated galleries for outstanding web design.',
    url: 'https://www.behance.net/galleries/featured/web-design-2023',
  },
  {
    id: 'dribbble-popular',
    title: 'Popular Shot',
    year: 2023,
    organization: 'Dribbble',
    category: 'UI Design',
    description: 'Multiple shots featured as Popular on Dribbble for exceptional UI design work.',
    url: 'https://dribbble.com/shots/popular/ui-design-2023',
  },
];
