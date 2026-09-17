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

export const partners: Partner[] = [
  {
    id: 'webflow',
    name: 'Webflow',
    slug: 'webflow',
    logo: '/images/partners/webflow.svg',
    category: 'platform',
    description: 'Webflow is our primary platform for building responsive, production-ready websites without writing code. We leverage Webflow\'s visual development capabilities to deliver fast, scalable solutions.',
    website: 'https://webflow.com',
    partnershipType: 'Certified Partner',
    benefits: [
      'Certified Webflow experts',
      'Custom component development',
      'CMS implementation',
      'E-commerce solutions',
      'Ongoing maintenance and support',
    ],
    featured: true,
  },
  {
    id: 'figma',
    name: 'Figma',
    slug: 'figma',
    logo: '/images/partners/figma.svg',
    category: 'technology',
    description: 'Figma is our primary design tool for creating user interfaces, design systems, and prototypes. We use Figma\'s collaborative features to work seamlessly with clients and team members.',
    website: 'https://figma.com',
    partnershipType: 'Professional Partner',
    benefits: [
      'Advanced design system creation',
      'Interactive prototyping',
      'Real-time collaboration',
      'Developer handoff',
      'Design token management',
    ],
    featured: true,
  },
  {
    id: 'shopify',
    name: 'Shopify',
    slug: 'shopify',
    logo: '/images/partners/shopify.svg',
    category: 'integration',
    description: 'Shopify is our go-to e-commerce platform for building custom online stores. We create tailored shopping experiences that drive conversions and scale with your business.',
    website: 'https://shopify.com',
    partnershipType: 'Partner',
    benefits: [
      'Custom theme development',
      'App integration',
      'Payment gateway setup',
      'Inventory management',
      'Analytics and reporting',
    ],
  },
];
