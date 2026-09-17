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
}

export const resources: Resource[] = [
  {
    id: 'branding-guide',
    title: 'Complete Branding Guide',
    slug: 'branding-guide',
    category: 'guide',
    type: 'PDF Guide',
    description: 'A comprehensive guide to building a strong brand identity from scratch. Covers strategy, visual design, and implementation.',
    downloadUrl: '/downloads/branding-guide.pdf',
    fileSize: '2.4 MB',
    pages: 48,
    tags: ['Branding', 'Strategy', 'Design'],
    featured: true,
  },
  {
    id: 'website-checklist',
    title: 'Website Launch Checklist',
    slug: 'website-checklist',
    category: 'template',
    type: 'Spreadsheet',
    description: 'Never miss a step in your website launch. This comprehensive checklist covers SEO, performance, accessibility, and more.',
    downloadUrl: '/downloads/website-checklist.xlsx',
    fileSize: '156 KB',
    tags: ['Web Design', 'Launch', 'SEO'],
    featured: true,
  },
  {
    id: 'design-system-whitepaper',
    title: 'Design Systems: A Complete Guide',
    slug: 'design-system-whitepaper',
    category: 'whitepaper',
    type: 'Whitepaper',
    description: 'Learn how to build and maintain scalable design systems that improve consistency and efficiency across your organization.',
    downloadUrl: '/downloads/design-systems.pdf',
    fileSize: '3.1 MB',
    pages: 62,
    tags: ['Design Systems', 'Scalability', 'Components'],
  },
  {
    id: 'roi-calculator',
    title: 'Design ROI Calculator',
    slug: 'roi-calculator',
    category: 'tool',
    type: 'Interactive Tool',
    description: 'Calculate the potential return on investment for your design project. Input your metrics and see projected outcomes.',
    tags: ['ROI', 'Business', 'Metrics'],
    featured: true,
  },
  {
    id: 'ux-research-template',
    title: 'UX Research Template Kit',
    slug: 'ux-research-template',
    category: 'template',
    type: 'Figma Template',
    description: 'Ready-to-use templates for user research including interview scripts, survey templates, and analysis frameworks.',
    downloadUrl: '/downloads/ux-research.fig',
    fileSize: '8.2 MB',
    tags: ['UX', 'Research', 'Templates'],
  },
  {
    id: 'seo-basics-guide',
    title: 'SEO Basics for Designers',
    slug: 'seo-basics-guide',
    category: 'guide',
    type: 'PDF Guide',
    description: 'Essential SEO knowledge for designers. Learn how to create designs that rank well and drive organic traffic.',
    downloadUrl: '/downloads/seo-basics.pdf',
    fileSize: '1.8 MB',
    pages: 32,
    tags: ['SEO', 'Web Design', 'Marketing'],
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    slug: 'color-palette-generator',
    category: 'tool',
    type: 'Interactive Tool',
    description: 'Generate beautiful, accessible color palettes for your projects. Based on color theory and accessibility standards.',
    tags: ['Color', 'Design', 'Accessibility'],
  },
  {
    id: 'client-onboarding-guide',
    title: 'Client Onboarding Playbook',
    slug: 'client-onboarding-guide',
    category: 'guide',
    type: 'PDF Guide',
    description: 'A step-by-step guide to onboarding new clients effectively. Includes templates, checklists, and best practices.',
    downloadUrl: '/downloads/client-onboarding.pdf',
    fileSize: '2.1 MB',
    pages: 38,
    tags: ['Business', 'Clients', 'Process'],
  },
  {
    id: 'typography-scale-calculator',
    title: 'Typography Scale Calculator',
    slug: 'typography-scale-calculator',
    category: 'tool',
    type: 'Interactive Tool',
    description: 'Calculate perfect typography scales for your projects. Supports multiple scale ratios and responsive adjustments.',
    tags: ['Typography', 'Design', 'Tools'],
  },
  {
    id: 'project-proposal-template',
    title: 'Project Proposal Template',
    slug: 'project-proposal-template',
    category: 'template',
    type: 'Document Template',
    description: 'Professional project proposal template for design agencies. Includes scope, timeline, pricing, and terms sections.',
    downloadUrl: '/downloads/proposal-template.docx',
    fileSize: '245 KB',
    tags: ['Business', 'Proposals', 'Templates'],
  },
  {
    id: 'accessibility-audit-checklist',
    title: 'Accessibility Audit Checklist',
    slug: 'accessibility-audit-checklist',
    category: 'template',
    type: 'Spreadsheet',
    description: 'Comprehensive WCAG 2.1 AA compliance checklist. Audit your designs and websites for accessibility issues.',
    downloadUrl: '/downloads/accessibility-checklist.xlsx',
    fileSize: '189 KB',
    tags: ['Accessibility', 'WCAG', 'Audit'],
  },
];
