import React, { useEffect, useRef, useState } from 'react';

export interface SidebarItem {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  /** Visual treatment — `exit` pushes the item away from the nav group
      (used by the portal for "Exit Portal"). */
  variant?: 'default' | 'exit';
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  /** Left-hand content of the mobile top bar (defaults to "Menu"). */
  mobileTitle?: React.ReactNode;
  /** Compact action rendered in the mobile top bar, before the hamburger. */
  mobileAction?: React.ReactNode;
  /** id used by the nav element (also the `aria-controls` target). */
  id?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  collapsed = false,
  onToggle,
  header,
  footer,
  className = '',
  mobileTitle,
  mobileAction,
  id = 'sidebar-nav',
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const asideRef = useRef<HTMLElement>(null);

  // The slide-open menu only exists below the mobile breakpoint, so close it
  // when the viewport grows past that breakpoint (or on Escape) to keep the
  // DOM state in sync with what the CSS is showing.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(max-width: 767.98px)');

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setMobileOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    desktopQuery.addEventListener('change', handleBreakpointChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      desktopQuery.removeEventListener('change', handleBreakpointChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // While the mobile menu is expanded the bar owns the screen: lock the page
  // behind it so a swipe scrolls the menu instead of the dashboard.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  // Tapping outside the bar dismisses the mobile menu.
  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [mobileOpen]);

  return (
    <aside
      ref={asideRef}
      className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${mobileOpen ? 'sidebar--mobile-open' : ''} ${className}`.trim()}
    >
      {/* ── Desktop Header ── */}
      <div className="sidebar__header">
        {header || (
          <button
            type="button"
            onClick={onToggle}
            className="sidebar-toggle"
            aria-label="Toggle sidebar"
          >
            {collapsed ? '▶' : '◀'}
          </button>
        )}
      </div>

      {/* ── Mobile Header (Hamburger + quick actions) ── */}
      <div className="sidebar__mobile-header">
        <div className="sidebar__mobile-title">{mobileTitle ?? 'Menu'}</div>
        <div className="sidebar__mobile-actions">
          {mobileAction}
          <button
            type="button"
            className="sidebar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls={id}
          >
            <span className={`hamburger ${mobileOpen ? 'hamburger--active' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* ── Navigation Links ── */}
      <nav id={id} className="sidebar__nav" aria-label="Main navigation">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              if (item.onClick) item.onClick();
              setMobileOpen(false); // Auto-close on mobile after tap
            }}
            className={`sidebar__item ${
              item.variant === 'exit' ? 'sidebar__item--exit' : ''
            } ${item.active ? 'sidebar__item--active' : ''}`.trim()}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* ── Footer ── */}
      {footer && <div className="sidebar__log">{footer}</div>}
    </aside>
  );
};

export default Sidebar;