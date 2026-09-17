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
    showNotes: `In this inaugural episode, we sit down with two pioneers in the design systems space: Mina Markham, who built the design system for Hillary for America, and Jina Anne, author of "Design Systems" and advocate for systematic design. We discuss how AI is changing the way we think about components, the importance of governance in large organizations, and practical tips for getting started with design systems in your company.

Mina shares her experience building design systems under pressure during the 2016 campaign, while Jina explains the evolution of design systems from simple style guides to complex, living ecosystems. We also explore the tension between consistency and creativity, and how the best design systems empower rather than constrain designers.`,
    keyTakeaways: [
      'Design systems should be living documents that evolve with your product',
      'AI can help generate component variations, but human judgment is still essential',
      'Governance models vary: some teams use centralized control, others use federated ownership',
      'Start small with a core set of components and expand based on user needs',
      'Documentation is as important as the components themselves',
    ],
    resources: [
      { title: 'Jina Anne - Design Systems Book', url: 'https://abookapart.com/products/design-systems' },
      { title: 'Mina Markham - Pantsuit Design System', url: 'https://minamarkham.github.io/pantsuit/' },
      { title: 'Design Systems Repo', url: 'https://designsystemsrepo.com/' },
    ],
    timestamps: [
      { time: '00:00', topic: 'Introduction and guest backgrounds' },
      { time: '05:30', topic: 'What is a design system?' },
      { time: '12:45', topic: 'Mina\'s experience with Pantsuit' },
      { time: '20:15', topic: 'AI and design systems' },
      { time: '28:00', topic: 'Governance and ownership models' },
      { time: '35:20', topic: 'Getting started advice' },
      { time: '40:00', topic: 'Future predictions and wrap-up' },
    ],
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
    showNotes: `Marty Neumeier, author of "The Brand Gap" and "Zag," joins us to discuss what separates enduring brands from fleeting trends. With decades of experience working with companies like Apple, IBM, and Lenovo, Marty shares his framework for building brands that resonate deeply with audiences and stand the test of time.

We explore the concept of "onliness" - the idea that great brands are the only ones doing what they do. Marty explains why most companies fail at branding by trying to be everything to everyone, and how the most successful brands make radical differentiation their core strategy. We also discuss the role of emotion in branding, the importance of consistency across touchpoints, and how to measure brand success beyond just awareness.`,
    keyTakeaways: [
      'Great brands are built on radical differentiation, not incremental improvement',
      'Brand is not what you say it is - it\'s what they say it is',
      'Consistency across all touchpoints builds trust and recognition',
      'Emotional connection matters more than rational features',
      'Brand strategy should drive business strategy, not the other way around',
    ],
    resources: [
      { title: 'The Brand Gap by Marty Neumeier', url: 'https://martineumeier.com/books/the-brand-gap/' },
      { title: 'Zag: The Number One Strategy of High-Performance Brands', url: 'https://martineumeier.com/books/zag/' },
      { title: 'Brand A-Z Glossary', url: 'https://martineumeier.com/brandz/' },
    ],
    timestamps: [
      { time: '00:00', topic: 'Introduction to Marty Neumeier' },
      { time: '04:20', topic: 'What is brand, really?' },
      { time: '10:15', topic: 'The concept of "onliness"' },
      { time: '18:30', topic: 'Case study: Apple\'s brand strategy' },
      { time: '25:00', topic: 'Emotional vs rational branding' },
      { time: '32:15', topic: 'Measuring brand success' },
      { time: '36:00', topic: 'Final advice for brand builders' },
    ],
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
    showNotes: `In this video masterclass, our lead motion designer Mike Johnson takes you behind the scenes of our motion design process. From initial concept to final render, Mike demonstrates the tools, techniques, and creative thinking that go into creating compelling brand animations.

This episode includes a live demo where Mike builds a logo animation from scratch in After Effects, showing his workflow for keyframing, easing, and creating smooth, professional motion. We also explore the principles of motion design, how to create storyboards that communicate effectively, and tips for working with clients who may not be familiar with animation.`,
    keyTakeaways: [
      'Start with the story, not the software',
      'The 12 principles of animation still apply to digital motion design',
      'Easing curves are what separate amateur from professional motion',
      'Always create storyboards before opening After Effects',
      'Sound design is 50% of the motion experience',
    ],
    resources: [
      { title: 'The Animator\'s Survival Kit by Richard Williams', url: 'https://www.amazon.com/Animators-Survival-Kit-Principles-Classic/dp/086547897X' },
      { title: 'School of Motion', url: 'https://www.schoolofmotion.com/' },
      { title: 'Motion Design School', url: 'https://motiondesign.school/' },
    ],
    timestamps: [
      { time: '00:00', topic: 'Introduction to motion design' },
      { time: '06:30', topic: 'The 12 principles of animation' },
      { time: '15:00', topic: 'Storyboarding techniques' },
      { time: '22:45', topic: 'Live demo: Logo animation setup' },
      { time: '35:20', topic: 'Keyframing and easing curves' },
      { time: '45:00', topic: 'Adding sound design' },
      { time: '52:00', topic: 'Final render and delivery' },
    ],
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
    showNotes: `Creative Director Jane Doe and Lead Developer John Smith team up to test and review the most popular AI tools for designers in 2024. This isn't just theory - we actually use each tool on real projects and share our honest experiences, including what works, what doesn't, and what's overhyped.

We cover image generation tools like Midjourney and DALL-E, design assistants like Figma AI and Galileo, copywriting tools like Jasper and Copy.ai, and development tools like GitHub Copilot. For each tool, we discuss pricing, learning curve, practical applications, and limitations. We also address the ethical considerations of using AI in design work and how to maintain your creative voice in an AI-assisted world.`,
    keyTakeaways: [
      'AI is best used as a starting point, not a final solution',
      'Midjourney excels at concept exploration but struggles with brand consistency',
      'Figma AI is great for repetitive tasks but not yet for complex design decisions',
      'Always verify AI-generated content for accuracy and appropriateness',
      'The best designers use AI to augment their skills, not replace them',
    ],
    resources: [
      { title: 'Midjourney', url: 'https://www.midjourney.com/' },
      { title: 'Figma AI Features', url: 'https://www.figma.com/ai/' },
      { title: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
    ],
    timestamps: [
      { time: '00:00', topic: 'Introduction to AI in design' },
      { time: '05:15', topic: 'Image generation: Midjourney vs DALL-E' },
      { time: '14:30', topic: 'Design assistants: Figma AI and Galileo' },
      { time: '23:45', topic: 'Copywriting tools: Jasper and Copy.ai' },
      { time: '31:20', topic: 'Development tools: GitHub Copilot' },
      { time: '38:00', topic: 'Ethical considerations' },
      { time: '43:30', topic: 'Future predictions and recommendations' },
    ],
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
    showNotes: `Brand Strategist Sarah Kim and Project Manager Emma Wilson share their insights on running a successful design agency. This episode is packed with practical advice on pricing, client management, team building, and maintaining quality as you scale.

Sarah discusses different pricing models (hourly, project-based, value-based) and when to use each one. She shares real examples of how they've priced projects and what they've learned about communicating value to clients. Emma dives into project management best practices, including how to set clear expectations, manage scope creep, and keep projects on track. They also discuss the challenges of hiring and retaining talent, building company culture, and maintaining work-life balance in a demanding industry.`,
    keyTakeaways: [
      'Value-based pricing aligns your success with your client\'s success',
      'Clear contracts and scope documents prevent 90% of client issues',
      'Hire for culture fit first, skills second - you can teach skills',
      'Document your processes to maintain quality as you scale',
      'Your team is your product - invest in their growth and wellbeing',
    ],
    resources: [
      { title: 'The Win Without Pitching Manifesto by Blair Enns', url: 'https://www.winwithoutpitching.com/' },
      { title: 'Built to Sell by John Warrilow', url: 'https://builttosell.com/' },
      { title: 'Project Management for Designers', url: 'https://www.smashingmagazine.com/project-management-for-designers/' },
    ],
    timestamps: [
      { time: '00:00', topic: 'Introduction to the business of design' },
      { time: '06:00', topic: 'Pricing strategies and models' },
      { time: '15:30', topic: 'Communicating value to clients' },
      { time: '22:45', topic: 'Project management best practices' },
      { time: '30:00', topic: 'Building and scaling your team' },
      { time: '37:15', topic: 'Maintaining quality and culture' },
      { time: '41:30', topic: 'Final advice and resources' },
    ],
  },
];
