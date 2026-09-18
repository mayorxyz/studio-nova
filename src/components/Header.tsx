import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ExternalLinkIcon, XIcon, MenuIcon } from './icons';

// ─── Types ───────────────────────────────────────────────────────────────────
interface DropdownLink {
  label: string;
  path: string;
}

interface DropdownSection {
  title?: string;
  items: DropdownLink[];
}

interface DropdownConfig {
  headerLink?: DropdownLink;
  sections?: DropdownSection[];
  footerLink?: DropdownLink;
}

interface NavItem {
  label: string;
  path?: string;
  dropdown?: DropdownConfig;
  activePaths?: string[];
}

// ─── Navigation Data ─────────────────────────────────────────────────────────
const navItems: NavItem[] = [
  {
    label: 'Work',
    path: '/work',
    activePaths: ['/work'],
    dropdown: {
      headerLink: { label: 'All Projects →', path: '/work' },
      sections: [
        {
          title: 'BY CATEGORY',
          items: [
            { label: 'Branding', path: '/work/category/branding' },
            { label: 'Web Design', path: '/work/category/web-design' },
            { label: 'UI/UX', path: '/work/category/ui-ux' },
            { label: 'Motion', path: '/work/category/motion' },
          ],
        },
        {
          title: 'BY INDUSTRY',
          items: [
            { label: 'Startups', path: '/work/industry/startups' },
            { label: 'E-commerce', path: '/work/industry/ecommerce' },
            { label: 'SaaS', path: '/work/industry/saas' },
            { label: 'Non-Profit', path: '/work/industry/non-profit' },
          ],
        },
      ],
      footerLink: { label: 'Awards & Recognition', path: '/work/awards' },
    },
  },
  {
    label: 'Services',
    path: '/services',
    activePaths: ['/services'],
    dropdown: {
      headerLink: { label: 'All Services →', path: '/services' },
      sections: [
        {
          title: 'CORE SERVICES',
          items: [
            { label: 'Web Design & Development', path: '/services/web-design' },
            { label: 'Brand Identity', path: '/services/brand-identity' },
            { label: 'UI/UX Design', path: '/services/ui-ux-design' },
            { label: 'Motion Graphics', path: '/services/motion-graphics' },
          ],
        },
        {
          title: 'MORE',
          items: [
            { label: 'Our Process', path: '/services/process' },
            { label: 'Pricing', path: '/services/pricing' },
          ],
        },
      ],
    },
  },
  {
    label: 'About',
    path: '/about',
    activePaths: ['/about', '/careers', '/partners'],
    dropdown: {
      sections: [
        {
          items: [
            { label: 'Our Story', path: '/about' },
            { label: 'Mission', path: '/about/mission' },
            { label: 'Values', path: '/about/values' },
          ],
        },
        {
          title: 'PEOPLE & CAREERS',
          items: [
            { label: 'Team', path: '/about/team' },
            { label: 'Careers', path: '/careers' },
          ],
        },
        {
          title: 'NETWORK',
          items: [{ label: 'Partners', path: '/partners' }],
        },
      ],
    },
  },
  {
    label: 'Insights',
    path: '/blog',
    activePaths: ['/blog', '/resources', '/events', '/podcast'],
    dropdown: {
      headerLink: { label: 'All Articles →', path: '/blog' },
      sections: [
        {
          title: 'BY CATEGORY',
          items: [
            { label: 'Design Tips', path: '/blog/category/design-tips' },
            { label: 'Business', path: '/blog/category/business' },
            { label: 'Tutorials', path: '/blog/category/tutorials' },
            { label: 'Industry News', path: '/blog/category/industry-news' },
            { label: 'Case Studies', path: '/blog/category/case-studies' },
          ],
        },
        {
          title: 'EXPLORE',
          items: [
            { label: 'Resources', path: '/resources' },
            { label: 'Events', path: '/events' },
            { label: 'Event Registration', path: '/event-registration' },
            { label: 'Podcast', path: '/podcast' },
            { label: 'Newsletter', path: '/newsletter' },
          ],
        },
      ],
    },
  },
];

// ─── Scoped Styles ───────────────────────────────────────────────────────────
const headerStyles = `
  /* ── Header Dropdown & Accordion ── */
  .header__nav-item { position: relative; }

  .header__nav-btn {
    background: transparent;
    border: none;
    color: var(--base);
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-data);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0;
    text-decoration: none;
    transition: color 0.15s ease;
  }
  .header__nav-btn:hover,
  .header__nav-btn.active { color: var(--safety); }
  .header__nav-btn .chevron {
    font-size: 0.6rem;
    transition: transform 0.2s ease;
    display: inline-block;
  }
  .header__nav-item:hover .chevron,
  .header__nav-item:focus-within .chevron { transform: rotate(180deg); }

  .header__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 250px;
    background: var(--ink);
    border: 2px solid var(--safety);
    box-shadow: var(--shadow-safety);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
    padding: 0.4rem 0;
    margin-top: 0.75rem;
  }
  .header__nav-item:hover .header__dropdown,
  .header__nav-item:focus-within .header__dropdown,
  .header__dropdown.is-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .header__dropdown-head a {
    display: block;
    padding: 0.6rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-micro);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--safety);
    font-weight: 600;
    border-bottom: 1px solid rgba(var(--base-rgb), 0.08);
    text-decoration: none;
    transition: background 0.1s ease;
  }
  .header__dropdown-head a:hover { background: rgba(var(--safety-rgb), 0.12); }

  .header__dropdown a.dd-link {
    display: block;
    padding: 0.5rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-micro);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(var(--base-rgb), 0.6);
    text-decoration: none;
    border-bottom: 1px solid rgba(var(--base-rgb), 0.03);
    transition: background 0.1s ease, color 0.1s ease;
  }
  .header__dropdown a.dd-link:hover,
  .header__dropdown a.dd-link:focus {
    background: var(--safety);
    color: var(--base);
    outline: none;
  }

  .header__dropdown .dd-label {
    padding: 0.65rem 1rem 0.25rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.52rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--safety);
    opacity: 0.65;
  }

  .header__dropdown .dd-divider {
    height: 1px;
    background: rgba(var(--base-rgb), 0.06);
    margin: 0.25rem 0;
  }

  .header__dropdown-foot a {
    display: block;
    padding: 0.6rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: var(--fs-micro);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--safety);
    font-weight: 600;
    border-top: 1px solid rgba(var(--base-rgb), 0.08);
    text-decoration: none;
    transition: background 0.1s ease;
  }
  .header__dropdown-foot a:hover { background: rgba(var(--safety-rgb), 0.12); }

  /* ── Mobile Accordion ── */
  @media (max-width: 768px) {
    .header__dropdown {
      position: static;
      opacity: 1;
      visibility: visible;
      transform: none;
      box-shadow: none;
      border: none;
      border-left: 1px solid rgba(var(--base-rgb), 0.12);
      margin: 0 0 0 1.25rem;
      background: transparent;
      display: none;
      padding: 0;
      min-width: 0;
    }
    .header__dropdown.is-open-mobile { display: block; }
    .header__dropdown a.dd-link {
      padding: 0.55rem 1rem;
      font-size: 0.72rem;
    }
    .header__dropdown .dd-label {
      padding: 0.55rem 1rem 0.2rem;
      font-size: 0.5rem;
    }
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────
export default function Header() {
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // ── Clock ──
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileAccordions({});
  }, [location.pathname]);

  // ── Escape key closes dropdown ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ── Cleanup timeout on unmount ──
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // ── Active state detection ──
  const isNavItemActive = useCallback(
    (item: NavItem): boolean => {
      const paths = item.activePaths || (item.path ? [item.path] : []);
      return paths.some((p) => {
        if (p === '/') return location.pathname === '/';
        return location.pathname === p || location.pathname.startsWith(p + '/');
      });
    },
    [location.pathname]
  );

  // ── Desktop dropdown handlers ──
  const handleMouseEnter = useCallback((key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  }, []);

  // ── Mobile accordion toggle ──
  const toggleMobileAccordion = (key: string) => {
    setMobileAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ── Close dropdown on link click ──
  const closeDropdown = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{headerStyles}</style>
      <header className="header">
        {/* Logo → Home */}
        <Link to="/" className="header__logo">
          STUDIO<span>NOVA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav hidden md:flex" style={{ gap: '1.75rem' }}>
          {navItems.map((item) => {
            const key = item.label.toLowerCase();
            const isActive = isNavItemActive(item);
            const hasDropdown = !!item.dropdown;
            const isOpen = openDropdown === key;

            if (hasDropdown && item.dropdown) {
              return (
                <div
                  key={key}
                  className={`header__nav-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path || '/'}
                    className={`header__nav-btn ${isActive ? 'active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onFocus={() => handleMouseEnter(key)}
                    onClick={closeDropdown}
                  >
                    {item.label}
                    <ChevronDownIcon className="chevron" size={12} />
                  </Link>

                  <div className={`header__dropdown ${isOpen ? 'is-open' : ''}`}>
                    {/* Header Link */}
                    {item.dropdown.headerLink && (
                      <div className="header__dropdown-head">
                        <Link to={item.dropdown.headerLink.path} onClick={closeDropdown}>
                          {item.dropdown.headerLink.label}
                        </Link>
                      </div>
                    )}

                    {/* Sections */}
                    {item.dropdown.sections?.map((section, sIdx) => (
                      <div key={sIdx}>
                        {section.title && (
                          <div className="dd-label">{section.title}</div>
                        )}
                        {section.items.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="dd-link"
                            onClick={closeDropdown}
                          >
                            {link.label}
                          </Link>
                        ))}
                        {sIdx < (item.dropdown!.sections?.length || 0) - 1 && (
                          <div className="dd-divider" />
                        )}
                      </div>
                    ))}

                    {/* Footer Link */}
                    {item.dropdown.footerLink && (
                      <div className="header__dropdown-foot">
                        <Link to={item.dropdown.footerLink.path} onClick={closeDropdown}>
                          {item.dropdown.footerLink.label}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.path || key}
                to={item.path || '/'}
                className={isActive ? 'active' : ''}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Portal Button */}
          <Link to="/portal" className="btn--ghost !py-2 !px-4 !text-[0.7rem]">
            Portal <ExternalLinkIcon size={12} className="inline ml-1" />
          </Link>
        </nav>

        {/* Status Indicator */}
        <div className="header__status hidden sm:flex">
          <div className="header__status-dot" />
          <span className="header__clock">{time}</span>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 top-[64px] bg-[var(--term-bg)] z-50 flex flex-col p-4 sm:p-6 md:hidden overflow-y-auto">
            {navItems.map((item) => {
              const key = item.label.toLowerCase();
              const isActive = isNavItemActive(item);
              const isAccordionOpen = mobileAccordions[key];

              if (item.dropdown) {
                return (
                  <div key={key} className="border-b border-[var(--muted)]">
                    <button
                      className={`w-full flex items-center justify-between py-4 text-left font-display text-lg ${
                        isActive ? 'text-[var(--safety)]' : 'text-white'
                      }`}
                      onClick={() => toggleMobileAccordion(key)}
                      aria-expanded={isAccordionOpen}
                    >
                      <span>{item.label}</span>
                      <span
                        className="transition-transform duration-200"
                        style={{
                          transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDownIcon size={12} />
                      </span>
                    </button>

                    <div className={`header__dropdown ${isAccordionOpen ? 'is-open-mobile' : ''}`}>
                      {item.dropdown.headerLink && (
                        <div className="header__dropdown-head">
                          <Link to={item.dropdown.headerLink.path} onClick={closeDropdown}>
                            {item.dropdown.headerLink.label}
                          </Link>
                        </div>
                      )}
                      {item.dropdown.sections?.map((section, sIdx) => (
                        <div key={sIdx}>
                          {section.title && (
                            <div className="dd-label">{section.title}</div>
                          )}
                          {section.items.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className="dd-link"
                              onClick={closeDropdown}
                            >
                              {link.label}
                            </Link>
                          ))}
                          {sIdx < (item.dropdown!.sections?.length || 0) - 1 && (
                            <div className="dd-divider" />
                          )}
                        </div>
                      ))}
                      {item.dropdown.footerLink && (
                        <div className="header__dropdown-foot">
                          <Link to={item.dropdown.footerLink.path} onClick={closeDropdown}>
                            {item.dropdown.footerLink.label}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path || key}
                  to={item.path || '/'}
                  className={`block py-4 text-lg font-display border-b border-[var(--muted)] ${
                    isActive ? 'text-[var(--safety)]' : 'text-white'
                  }`}
                  onClick={closeDropdown}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Portal Link */}
            <Link
              to="/portal"
              className="text-[var(--safety)] text-lg font-display py-4 mt-4 border-b border-[var(--muted)] flex items-center gap-2"
              onClick={closeDropdown}
            >
              Client Portal <ExternalLinkIcon size={16} />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
