import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ExternalLinkIcon, XIcon, MenuIcon } from './icons';

/* ─── Types ────────────────────────────────────────────────────────────────── */
interface DropdownLink { label: string; path: string }
interface DropdownSection { title?: string; items: DropdownLink[] }
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

/* ─── Nav data ─────────────────────────────────────────────────────────────── */
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

/* ─── Styles ───────────────────────────────────────────────────────────────── */
const styles = `
  /* ── Root ── */
  .hdr {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 1000;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    gap: 1.5rem;
    background: #0a0a0a;
    border-bottom: 1px solid transparent;
    transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  }
  .hdr--scrolled {
    background: rgba(10, 10, 10, 0.88);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-color: rgba(255, 255, 255, 0.07);
  }

  /* ── Logo ── */
  .hdr__logo {
    flex-shrink: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;
    line-height: 1;
  }
  .hdr__logo span { color: var(--safety); }

  /* ── Desktop nav ── */
  .hdr__nav {
    display: flex;
    align-items: center;
    gap: 0;
    flex: 1;
    justify-content: center;
  }

  /* ── Nav item ── */
  .hdr__item { position: relative; }

  .hdr__link {
    display: inline-flex;
    align-items: center;
    gap: 0.28rem;
    padding: 0.45rem 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.67rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
    line-height: 1;
  }
  .hdr__link:hover { color: #ffffff; background: rgba(255, 255, 255, 0.05); }
  .hdr__link--active { color: #ffffff; background: rgba(255, 255, 255, 0.06); }
  .hdr__link--open { color: var(--safety) !important; background: rgba(255, 62, 0, 0.07); }

  .hdr__chevron {
    transition: transform 0.2s ease;
    flex-shrink: 0;
    opacity: 0.5;
  }
  .hdr__link--open .hdr__chevron { transform: rotate(180deg); opacity: 1; }

  /* ── Dropdown panel ── */
  .hdr__dd {
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 50%;
    transform: translateX(-50%) translateY(-5px);
    min-width: 210px;
    background: #0a0a0a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 2px solid var(--safety);
    box-shadow: 0 24px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255, 255, 255, 0.03);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
    padding: 0.3rem 0;
  }
  .hdr__dd--open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  .hdr__dd-head,
  .hdr__dd-foot {
    display: block;
    padding: 0.5rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.58rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: var(--safety);
    text-decoration: none;
    transition: background 0.1s;
  }
  .hdr__dd-head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: 0.15rem;
  }
  .hdr__dd-foot {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    margin-top: 0.15rem;
  }
  .hdr__dd-head:hover,
  .hdr__dd-foot:hover { background: rgba(255, 62, 0, 0.09); }

  .hdr__dd-label {
    padding: 0.55rem 1rem 0.18rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.46rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--safety);
    opacity: 0.45;
  }

  .hdr__dd-link {
    display: block;
    padding: 0.42rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.63rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    border-left: 2px solid transparent;
    transition: color 0.1s, border-color 0.1s, background 0.1s, padding-left 0.15s;
  }
  .hdr__dd-link:hover,
  .hdr__dd-link:focus-visible {
    color: #ffffff;
    border-left-color: var(--safety);
    background: rgba(255, 255, 255, 0.04);
    padding-left: calc(1rem + 5px);
    outline: none;
  }

  .hdr__dd-div {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    margin: 0.3rem 0;
  }

  /* ── Right rail ── */
  .hdr__rail {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    margin-left: auto;
  }

  .hdr__status {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .hdr__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00e676;
    box-shadow: 0 0 7px #00e676;
    animation: hdr-pulse 2.4s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes hdr-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.45; transform: scale(0.75); }
  }

  .hdr__portal {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.38rem 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    border: 1px solid var(--safety);
    color: var(--safety);
    border-radius: 2px;
    transition: background 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .hdr__portal:hover {
    background: var(--safety);
    color: var(--ink);
  }

  /* ── Burger ── */
  .hdr__burger {
    display: none;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
    color: #ffffff;
    padding: 0.3rem;
    border-radius: 3px;
    transition: color 0.15s, border-color 0.15s;
    flex-shrink: 0;
  }
  .hdr__burger:hover { color: var(--safety); border-color: var(--safety); }

  /* ═══════════════════════════ MOBILE ══════════════════════════════════ */
  @media (max-width: 768px) {
    .hdr { padding: 0 0.9rem; gap: 0; }

    /* Hide desktop-only elements */
    .hdr__nav   { display: none; }
    .hdr__rail  { display: none; }
    .hdr__burger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: auto;
      padding: 0;
    }

    .hdr__logo {
      font-size: 0.78rem;
      letter-spacing: 0.08em;
    }

    /* Slide-down overlay */
    .hdr__mob {
      position: fixed;
      top: 64px;
      left: 0;
      width: 100%;
      height: calc(100dvh - 64px);
      background: #0a0a0a;
      z-index: 9999;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      display: flex;
      flex-direction: column;
      padding: 0.5rem 1rem 1.5rem;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: opacity 0.22s ease, transform 0.22s ease;
    }
    .hdr__mob--open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    /* Mobile item row */
    .mob__row {
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }

    .mob__row-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .mob__link {
      flex: 1;
      padding: 0.8rem 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.76rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #ffffff;
      text-decoration: none;
      transition: color 0.15s;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mob__link--active { color: var(--safety); }
    .mob__link:hover { color: var(--safety); }

    .mob__toggle-btn {
      padding: 0.8rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.15s;
      flex-shrink: 0;
    }
    .mob__toggle-btn:hover { color: var(--safety); }

    .mob__icon {
      transition: transform 0.3s ease;
      flex-shrink: 0;
    }
    .mob__icon--open { transform: rotate(180deg); }

    /* Accordion body — robust grid animation (no max-height clipping) */
    .mob__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
    }
    .mob__body > div {
      overflow: hidden;
    }
    .mob__body--open {
      grid-template-rows: 1fr;
    }

    .mob__sec-label {
      padding: 0.55rem 0.6rem 0.18rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.46rem;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: var(--safety);
      opacity: 0.45;
    }

    .mob__dd-link {
      display: block;
      padding: 0.58rem 0.6rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      border-left: 2px solid transparent;
      transition: color 0.12s, border-color 0.12s, padding-left 0.15s, background 0.12s;
    }
    .mob__dd-link:hover,
    .mob__dd-link:active {
      color: #ffffff;
      border-left-color: var(--safety);
      background: rgba(255, 255, 255, 0.04);
      padding-left: calc(0.6rem + 5px);
    }

    .mob__head-link {
      display: block;
      padding: 0.5rem 0.6rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.56rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--safety);
      text-decoration: none;
      margin-bottom: 0.2rem;
    }

    /* Footer block inside mobile menu */
    .mob__footer {
      margin-top: auto;
      padding-top: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .mob__portal {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0.85rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      border: 1px solid var(--safety);
      color: var(--safety);
      transition: background 0.15s, color 0.15s;
    }
    .mob__portal:hover,
    .mob__portal:active { background: var(--safety); color: var(--ink); }

    .mob__status {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
    }
  }

  @media (min-width: 769px) {
    .hdr__mob { display: none !important; }
  }

  /* Force dark mode aesthetics for header components */
  .hdr,
  .hdr__dd,
  .hdr__mob {
    color-scheme: dark;
  }
`;

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeDD, setActiveDD]       = useState<string | null>(null);
  const [mobOpen, setMobOpen]         = useState<Record<string, boolean>>({});
  const closeTimer                    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location                      = useLocation();

  /* Scroll → backdrop */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Route change cleanup */
  useEffect(() => {
    setMenuOpen(false);
    setActiveDD(null);
    setMobOpen({});
  }, [location.pathname]);

  /* Body scroll lock */
  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Escape */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setActiveDD(null);
      if (menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [menuOpen]);

  /* Cleanup */
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  /* Active path detection */
  const isActive = useCallback((item: NavItem) => {
    const paths = item.activePaths ?? (item.path ? [item.path] : []);
    return paths.some(p =>
      p === '/' ? location.pathname === '/' : location.pathname.startsWith(p),
    );
  }, [location.pathname]);

  /* Desktop dropdown mouse handlers */
  const ddEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDD(key);
  };
  const ddLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDD(null), 180);
  };

  /* Mobile accordion toggle (Exclusive: closes others when one opens) */
  const toggleMob = (key: string) => {
    setMobOpen(prev => {
      const isCurrentlyOpen = prev[key];
      const newState: Record<string, boolean> = {};
      
      navItems.forEach(item => {
        const itemKey = item.label.toLowerCase();
        // Toggle the clicked item, force all others to false
        newState[itemKey] = itemKey === key ? !isCurrentlyOpen : false;
      });
      
      return newState;
    });
  };

  /* Close everything */
  const close = useCallback(() => {
    setActiveDD(null);
    setMenuOpen(false);
  }, []);

  /* ── Dropdown renderer (shared between desktop & mobile) ── */
  const renderDDContent = (dd: DropdownConfig, linkClass: string, headClass: string) => (
    <>
      {dd.headerLink && (
        <Link to={dd.headerLink.path} className={headClass} onClick={close}>
          {dd.headerLink.label}
        </Link>
      )}
      {dd.sections?.map((s, si) => (
        <div key={si}>
          {s.title && <div className={`${linkClass === 'hdr__dd-link' ? 'hdr__dd-label' : 'mob__sec-label'}`}>{s.title}</div>}
          {s.items.map(l => (
            <Link key={l.path} to={l.path} className={linkClass} onClick={close}>
              {l.label}
            </Link>
          ))}
          {si < (dd.sections!.length - 1) && linkClass === 'hdr__dd-link' && (
            <div className="hdr__dd-div" />
          )}
        </div>
      ))}
      {dd.footerLink && (
        <Link to={dd.footerLink.path} className="hdr__dd-foot" onClick={close}>
          {dd.footerLink.label}
        </Link>
      )}
    </>
  );

  /* ── Render ── */
  return (
    <>
      <style>{styles}</style>

      {/* Header is strictly the top bar */}
      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
        <Link to="/" className="hdr__logo" onClick={close}>
          STUDIO<span>NOVA</span>
        </Link>

        <nav className="hdr__nav" aria-label="Main">
          {navItems.map(item => {
            const key    = item.label.toLowerCase();
            const active = isActive(item);
            const open   = activeDD === key;

            if (item.dropdown) {
              return (
                <div
                  key={key}
                  className="hdr__item"
                  onMouseEnter={() => ddEnter(key)}
                  onMouseLeave={ddLeave}
                >
                  <Link
                    to={item.path ?? '/'}
                    className={[
                      'hdr__link',
                      active ? 'hdr__link--active' : '',
                      open   ? 'hdr__link--open'   : '',
                    ].join(' ').trim()}
                    aria-haspopup="true"
                    aria-expanded={open}
                    onClick={close}
                  >
                    {item.label}
                    <ChevronDownIcon className="hdr__chevron" size={10} />
                  </Link>

                  <div
                    className={`hdr__dd${open ? ' hdr__dd--open' : ''}`}
                    role="menu"
                    onMouseEnter={() => ddEnter(key)}
                    onMouseLeave={ddLeave}
                  >
                    {renderDDContent(item.dropdown, 'hdr__dd-link', 'hdr__dd-head')}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.path ?? key}
                to={item.path ?? '/'}
                className={`hdr__link${active ? ' hdr__link--active' : ''}`}
                onClick={close}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hdr__rail">
          <div className="hdr__status">
            <div className="hdr__dot" aria-hidden />
          </div>
          <Link to="/portal" className="hdr__portal" onClick={close}>
            Portal <ExternalLinkIcon size={10} />
          </Link>
        </div>

        <button
          className="hdr__burger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="hdr-mobile"
        >
          {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </header>

      {/* Mobile overlay (Sibling to header to escape backdrop-filter containing block) */}
      <nav
        id="hdr-mobile"
        className={`hdr__mob${menuOpen ? ' hdr__mob--open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenuOpen(false);
          }
        }}
      >
        {navItems.map(item => {
          const key    = item.label.toLowerCase();
          const active = isActive(item);
          const open   = !!mobOpen[key];

          if (item.dropdown) {
            return (
              <div key={key} className="mob__row">
                {/* Split row: Link for navigation, Button for toggle */}
                <div className="mob__row-header">
                  <Link
                    to={item.path ?? '/'}
                    className={`mob__link ${active ? 'mob__link--active' : ''}`}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="mob__toggle-btn"
                    onClick={() => toggleMob(key)}
                    aria-expanded={open}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDownIcon
                      size={16}
                      className={`mob__icon ${open ? 'mob__icon--open' : ''}`}
                    />
                  </button>
                </div>

                <div className={`mob__body ${open ? 'mob__body--open' : ''}`}>
                  <div>
                    {item.dropdown.headerLink && (
                      <Link
                        to={item.dropdown.headerLink.path}
                        className="mob__head-link"
                        onClick={close}
                      >
                        {item.dropdown.headerLink.label}
                      </Link>
                    )}
                    {item.dropdown.sections?.map((s, si) => (
                      <div key={si}>
                        {s.title && <div className="mob__sec-label">{s.title}</div>}
                        {s.items.map(l => (
                          <Link key={l.path} to={l.path} className="mob__dd-link" onClick={close}>
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.dropdown.footerLink && (
                      <Link to={item.dropdown.footerLink.path} className="mob__head-link" onClick={close}>
                        {item.dropdown.footerLink.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={item.path ?? key} className="mob__row">
              <Link
                to={item.path ?? '/'}
                className={`mob__link ${active ? 'mob__link--active' : ''}`}
                onClick={close}
              >
                {item.label}
              </Link>
            </div>
          );
        })}

        <div className="mob__footer">
          <Link to="/portal" className="mob__portal" onClick={close}>
            Client Portal <ExternalLinkIcon size={14} />
          </Link>
          <div className="mob__status">
            <div className="hdr__dot" aria-hidden />
          </div>
        </div>
      </nav>
    </>
  );
}