import { Episode } from './types';

export const episodes: Episode[] = [
  // Season 1 (3 episodes)
  {
    id: 's01e01',
    title: 'The Future of Design Systems',
    slug: 's01e01-future-of-design-systems',
    season: 1,
    episode: 1,
    duration: '42 min',
    description: 'We explore how design systems are evolving with AI, component libraries, and cross-platform consistency. Featuring insights from leading design system architects.',
    guests: ['Mina Markham', 'Jina Anne'],
    type: 'podcast',
  },
  {
    id: 's01e02',
    title: 'Building Brands That Last',
    slug: 's01e02-building-brands-that-last',
    season: 1,
    episode: 2,
    duration: '38 min',
    description: 'A deep dive into brand strategy and what makes some brands endure while others fade. Lessons from rebranding Fortune 500 companies.',
    guests: ['Marty Neumeier'],
    type: 'podcast',
  },
  {
    id: 's01e03',
    title: 'Motion Design Masterclass',
    slug: 's01e03-motion-design-masterclass',
    season: 1,
    episode: 3,
    duration: '55 min',
    description: 'Our motion design team breaks down the process of creating brand animations, from storyboarding to final render. Includes live demo.',
    guests: ['Mike Johnson'],
    type: 'video',
  },

  // Season 2 (2 episodes)
  {
    id: 's02e01',
    title: 'AI Tools for Designers in 2024',
    slug: 's02e01-ai-tools-for-designers',
    season: 2,
    episode: 1,
    duration: '47 min',
    description: 'Practical guide to AI tools that are actually useful for designers. We test Midjourney, DALL-E, Figma AI, and more to see what works.',
    guests: ['Jane Doe', 'John Smith'],
    type: 'video',
  },
  {
    id: 's02e02',
    title: 'The Business of Design',
    slug: 's02e02-business-of-design',
    season: 2,
    episode: 2,
    duration: '44 min',
    description: 'How to run a successful design agency. Pricing strategies, client management, and scaling your team without losing quality.',
    guests: ['Sarah Kim', 'Emma Wilson'],
    type: 'podcast',
  },
];
