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
  challenge?: string;
  solution?: string;
  approach?: string[];
  timeline?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  metrics?: Array<{ label: string; value: string }>;
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
  methodology?: string[];
  deliverables?: string[];
  timeline?: string;
  pricing?: {
    starter: string;
    growth: string;
    enterprise: string;
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  fullBio?: string;
  expertise?: string[];
  experience?: string;
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
  sections?: Array<{
    heading: string;
    body: string;
  }>;
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
  audioUrl?: string;
  videoUrl?: string;
  showNotes?: string;
  keyTakeaways?: string[];
  resources?: Array<{
    title: string;
    url: string;
  }>;
  timestamps?: Array<{
    time: string;
    topic: string;
  }>;
  subscribeLinks?: {
    apple?: string;
    spotify?: string;
    youtube?: string;
    rss?: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  category: 'guide' | 'template' | 'whitepaper' | 'tool';
  type: string;
  description: string;
  downloadUrl?: string;
  fileSize?: string;
  pages?: number;
  tags: string[];
  featured?: boolean;
  content?: Array<{
    heading: string;
    body: string;
  }>;
}

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

export interface Partner {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: 'technology' | 'integration' | 'platform';
  description: string;
  website: string;
  partnershipType: string;
  benefits: string[];
  featured?: boolean;
}
