import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * SEO Hook — Manages document title, meta tags, and structured data
 * Usage: useSEO({ title: 'Page Title', description: 'Page description' })
 */
export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  canonical,
  jsonLd,
}: SEOProps = {}) {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = `${title} | Studio Nova`;
    } else {
      document.title = 'Studio Nova — Creative Agency';
    }

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Set meta description
    if (description) {
      setMeta('description', description);
    }

    // Set meta keywords
    if (keywords && keywords.length > 0) {
      setMeta('keywords', keywords.join(', '));
    }

    // Set Open Graph tags
    if (ogTitle || title) {
      setMeta('og:title', ogTitle || title || 'Studio Nova', true);
    }
    if (ogDescription || description) {
      setMeta('og:description', ogDescription || description || '', true);
    }
    setMeta('og:type', ogType, true);
    if (ogImage) {
      setMeta('og:image', ogImage, true);
    }

    // Set Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    if (ogTitle || title) {
      setMeta('twitter:title', ogTitle || title || 'Studio Nova');
    }
    if (ogDescription || description) {
      setMeta('twitter:description', ogDescription || description || '');
    }

    // Set canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Set JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    // Cleanup on unmount
    return () => {
      // Reset title
      document.title = 'Studio Nova — Creative Agency';
      
      // Remove dynamic meta tags
      const dynamicMetas = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"]');
      dynamicMetas.forEach(meta => meta.remove());
      
      // Remove canonical
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.remove();
      
      // Remove JSON-LD
      const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogType, ogImage, canonical, jsonLd]);
}

/**
 * Pre-defined SEO configurations for common page types
 */
export const seoConfigs = {
  home: {
    title: 'Home',
    description: 'Studio Nova is a creative agency specializing in web design, brand identity, UI/UX design, and motion graphics. We build digital experiences that perform.',
    keywords: ['creative agency', 'web design', 'brand identity', 'UI/UX', 'motion graphics', 'digital agency'],
  },
  work: {
    title: 'Work',
    description: 'Explore our portfolio of award-winning design projects. From branding to web design, UI/UX to motion graphics.',
    keywords: ['portfolio', 'case studies', 'design work', 'web design portfolio'],
  },
  services: {
    title: 'Services',
    description: 'End-to-end creative services including web design, brand identity, UI/UX design, and motion graphics.',
    keywords: ['services', 'web design services', 'branding services', 'UI/UX services'],
  },
  about: {
    title: 'About',
    description: 'Learn about Studio Nova — our mission, values, team, and the story behind our creative agency.',
    keywords: ['about us', 'our team', 'creative agency', 'design studio'],
  },
  blog: {
    title: 'Blog',
    description: 'Insights on design, business, technology, and the creative process. Updated weekly by the Studio Nova team.',
    keywords: ['blog', 'design insights', 'creative process', 'design tips'],
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with Studio Nova. Start a project, request a quote, or just say hello.',
    keywords: ['contact', 'get in touch', 'request quote', 'start project'],
  },
  careers: {
    title: 'Careers',
    description: 'Join the Studio Nova team. Explore open positions and build your career with a leading creative agency.',
    keywords: ['careers', 'jobs', 'hiring', 'design jobs', 'developer jobs'],
  },
};

export default useSEO;
