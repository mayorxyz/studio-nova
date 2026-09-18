export interface Event {
  id: string;
  title: string;
  slug: string;
  category: 'webinar' | 'workshop' | 'speaking';
  date: string;
  time: string;
  duration: string;
  location: string;
  type: 'online' | 'in-person' | 'hybrid';
  description: string;
  registrationUrl?: string;
  speakers: string[];
  tags: string[];
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: 'design-systems-webinar',
    title: 'Building Scalable Design Systems',
    slug: 'design-systems-webinar',
    category: 'webinar',
    date: '2024-03-15',
    time: '2:00 PM PST',
    duration: '60 min',
    location: 'Online (Zoom)',
    type: 'online',
    description: 'Learn how to build and maintain design systems that scale with your organization. We\'ll cover component libraries, documentation, and governance.',
    registrationUrl: 'https://example.com/register/design-systems',
    speakers: ['Jane Doe', 'John Smith'],
    tags: ['Design Systems', 'Webinar', 'Scalability'],
    featured: true,
  },
  {
    id: 'ux-research-workshop',
    title: 'UX Research Fundamentals Workshop',
    slug: 'ux-research-workshop',
    category: 'workshop',
    date: '2024-03-22',
    time: '10:00 AM - 4:00 PM PST',
    duration: '6 hours',
    location: 'San Francisco, CA',
    type: 'in-person',
    description: 'Hands-on workshop covering user research methods, interview techniques, and synthesis. Perfect for designers looking to improve their research skills.',
    registrationUrl: 'https://example.com/register/ux-research',
    speakers: ['Alex Chen'],
    tags: ['UX', 'Research', 'Workshop'],
    featured: true,
  },
  {
    id: 'brand-strategy-speaking',
    title: 'The Future of Brand Strategy',
    slug: 'brand-strategy-speaking',
    category: 'speaking',
    date: '2024-04-05',
    time: '11:00 AM PST',
    duration: '45 min',
    location: 'Design Conference 2024, New York',
    type: 'in-person',
    description: 'Keynote presentation on emerging trends in brand strategy and how AI is changing the way we think about brand identity.',
    speakers: ['Sarah Kim'],
    tags: ['Branding', 'Strategy', 'Conference'],
  },
  {
    id: 'figma-advanced-workshop',
    title: 'Advanced Figma Techniques',
    slug: 'figma-advanced-workshop',
    category: 'workshop',
    date: '2024-04-12',
    time: '1:00 PM - 5:00 PM PST',
    duration: '4 hours',
    location: 'Online (Zoom)',
    type: 'online',
    description: 'Master advanced Figma features including auto-layout, components, variants, and prototyping. Take your design workflow to the next level.',
    registrationUrl: 'https://example.com/register/figma-advanced',
    speakers: ['Mike Johnson'],
    tags: ['Figma', 'Design Tools', 'Workshop'],
  },
  {
    id: 'design-leadership-webinar',
    title: 'Leading Design Teams',
    slug: 'design-leadership-webinar',
    category: 'webinar',
    date: '2024-04-20',
    time: '11:00 AM PST',
    duration: '75 min',
    location: 'Online (Zoom)',
    type: 'online',
    description: 'Insights on managing design teams, fostering creativity, and building a strong design culture in your organization.',
    registrationUrl: 'https://example.com/register/design-leadership',
    speakers: ['Jane Doe', 'Emma Wilson'],
    tags: ['Leadership', 'Management', 'Webinar'],
  },
  {
    id: 'motion-design-speaking',
    title: 'Motion Design in Product Design',
    slug: 'motion-design-speaking',
    category: 'speaking',
    date: '2024-05-08',
    time: '3:00 PM PST',
    duration: '30 min',
    location: 'Motion Design Summit, Los Angeles',
    type: 'in-person',
    description: 'Presentation on integrating motion design into product design workflows. Covers tools, techniques, and best practices.',
    speakers: ['Mike Johnson'],
    tags: ['Motion', 'Product Design', 'Conference'],
  },
];
