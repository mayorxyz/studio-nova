// Studio Nova Data Layer — TypeScript Interfaces
// Step 0.3

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Branding' | 'Web Design' | 'UI/UX' | 'Motion';
  industry: 'Startups' | 'E-commerce' | 'SaaS' | 'Non-Profit';
  year: string;
  description: string;
  result: string;
  client: string;
  tags: string[];
  thumbnail?: string;
}

export interface SubService {
  id: string;
  title: string;
  slug: string;
  parentService: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  tools: string[];
  subServices: SubService[];
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  email?: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Design Tips' | 'Business' | 'Tutorials' | 'Industry News' | 'Case Studies';
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  tags: string[];
  content?: string;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
}

export interface Episode {
  id: string;
  title: string;
  slug: string;
  season: number;
  episode: number;
  duration: string;
  description: string;
  guests?: string[];
  type: 'podcast' | 'video';
  url?: string;
}
