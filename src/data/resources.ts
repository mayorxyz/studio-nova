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
    content: [
      {
        heading: 'Chapter 1: Brand Strategy Foundation',
        body: 'Before you design a single logo or choose a color palette, you need to understand your brand\'s core purpose. This chapter walks you through defining your mission, vision, values, and unique value proposition. We cover market research, competitive analysis, and audience persona development. You\'ll learn how to conduct brand workshops, facilitate stakeholder interviews, and synthesize research into actionable insights that will guide every design decision.',
      },
      {
        heading: 'Chapter 2: Visual Identity Design',
        body: 'This chapter dives deep into creating a cohesive visual identity system. We cover logo design principles, typography selection, color theory and psychology, and creating a comprehensive design system. You\'ll learn how to create logo variations, establish visual hierarchy, and build a flexible system that works across all touchpoints. We include real examples from our client work and explain the thinking behind each decision.',
      },
      {
        heading: 'Chapter 3: Brand Voice & Messaging',
        body: 'A strong brand isn\'t just visual—it\'s verbal too. This chapter covers developing your brand voice, tone guidelines, and messaging framework. You\'ll learn how to create a brand story that resonates, develop key messaging pillars, and write copy that consistently reflects your brand personality. We provide templates and exercises to help you define and document your brand voice.',
      },
      {
        heading: 'Chapter 4: Implementation & Guidelines',
        body: 'The final chapter focuses on rolling out your brand and ensuring consistency. We cover creating comprehensive brand guidelines, training your team, and establishing governance processes. You\'ll learn how to create a brand asset library, set up approval workflows, and measure brand consistency over time. We also discuss how to evolve your brand as your company grows.',
      },
    ],
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
    content: [
      {
        heading: 'Pre-Launch Technical Checklist',
        body: 'Before you go live, verify all technical elements are in place. Check that all pages load correctly, forms submit properly, and links work across the site. Test on multiple browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablet, mobile). Verify that your SSL certificate is active and all pages load over HTTPS. Check that your 404 page is custom-designed and helpful. Ensure all analytics tracking codes are installed and firing correctly.',
      },
      {
        heading: 'SEO Optimization Checklist',
        body: 'Optimize your site for search engines before launch. Verify that all pages have unique, descriptive title tags (50-60 characters) and meta descriptions (150-160 characters). Check that all images have descriptive alt text. Ensure your URL structure is clean and logical. Create and submit an XML sitemap to Google Search Console. Set up 301 redirects for any old URLs. Verify that your robots.txt file is configured correctly. Check that your site loads in under 3 seconds.',
      },
      {
        heading: 'Performance & Accessibility Checklist',
        body: 'Ensure your site is fast and accessible to all users. Run your site through Google PageSpeed Insights and aim for scores above 90. Compress all images and use modern formats (WebP). Minify CSS, JavaScript, and HTML. Implement lazy loading for images and videos. Check accessibility with tools like WAVE or axe. Ensure all interactive elements are keyboard accessible. Verify color contrast ratios meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text).',
      },
      {
        heading: 'Content & Legal Checklist',
        body: 'Review all content for accuracy and completeness. Check for spelling and grammar errors. Verify that all contact information is correct. Ensure your privacy policy, terms of service, and cookie policy are up to date and legally compliant. Add a cookie consent banner if required. Verify that your copyright notice is current. Check that all social media links work. Test your newsletter signup form and ensure it connects to your email service.',
      },
    ],
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
