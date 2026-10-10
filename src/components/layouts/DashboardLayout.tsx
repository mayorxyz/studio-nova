import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar, TerminalLog } from '../atomic';
import type { SidebarItem } from '../atomic';

export interface DashboardLayoutProps {
  /** Sidebar navigation items */
  sidebarItems?: SidebarItem[];
  /** Initial collapsed state */
  defaultCollapsed?: boolean;
  /** Terminal log entries for sidebar footer */
  terminalEntries?: Array<{
    type: 'prompt' | 'output' | 'success' | 'warning' | 'error';
    text: string;
  }>;
  /** Additional className for main content */
  className?: string;
}

/**
 * DashboardLayout (UI5) — For portal/client dashboard pages
 * CSS Target: the-observer.css (sidebar variant)
 * Used for: Client Portal (Dashboard, Projects, Invoices, Messages)
 *
 * Composes: Sidebar (atomic), TerminalLog
 * Supports: Collapsible sidebar, terminal log footer
 * Chrome: No global Header/Footer (dashboard has its own)
 */
export function DashboardLayout({
  sidebarItems,
  defaultCollapsed = false,
  terminalEntries = [
    { type: 'prompt', text: 'session --status' },
    { type: 'success', text: '→ Authenticated' },
    { type: 'output', text: '→ Role: client' },
  ],
  className = '',
}: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  /** Leave the client portal and go back to the public Studio Nova site. */
  const exitPortal = () => {
    window.location.href = '/';
  };

  // Default sidebar items with navigation
  const defaultSidebarItems: SidebarItem[] = [
    { icon: '◈', label: 'Dashboard', active: false, onClick: () => window.location.href = '/portal' },
    { icon: '◇', label: 'Projects', active: false, onClick: () => window.location.href = '/portal/projects' },
    { icon: '△', label: 'Invoices', active: false, onClick: () => window.location.href = '/portal/invoices' },
    { icon: '○', label: 'Messages', active: false, onClick: () => window.location.href = '/portal/messages' },
    { icon: '□', label: 'Settings', active: false, onClick: () => window.location.href = '/portal/settings' },
    { icon: '←', label: 'Exit Portal', variant: 'exit', onClick: exitPortal },
  ];

  // Determine active item based on current path
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/portal';
  const itemsWithActiveState = defaultSidebarItems.map(item => ({
    ...item,
    active: 
      (item.label === 'Dashboard' && currentPath === '/portal') ||
      (item.label === 'Projects' && currentPath === '/portal/projects') ||
      (item.label === 'Invoices' && currentPath === '/portal/invoices') ||
      (item.label === 'Messages' && currentPath === '/portal/messages') ||
      (item.label === 'Settings' && currentPath === '/portal/settings')
  }));

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:min-h-[calc(100vh-64px)]">
      {/* Atomic Sidebar with terminal footer */}
      <Sidebar
        items={itemsWithActiveState}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        id="portal-nav"
        mobileTitle={
          <Link to="/" aria-label="Studio Nova home">
            STUDIO<span className="text-[var(--safety)]">NOVA</span>
          </Link>
        }
        mobileAction={
          <Link
            to="/"
            className="sidebar__mobile-exit"
            aria-label="Exit portal and return to the Studio Nova website"
          >
            ← Exit
          </Link>
        }
        header={
          <div className="flex items-center justify-between w-full">
            {!collapsed && (
              <Link
                to="/"
                className="font-display text-lg font-bold text-white"
              >
                STUDIO<span className="text-[var(--safety)]">NOVA</span>
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="sidebar-toggle"
              aria-label="Toggle sidebar"
            >
              {collapsed ? '▶' : '◀'}
            </button>
          </div>
        }
        footer={
          <div className="terminal p-3">
            <div className="text-[var(--fs-micro)] text-[var(--term-green)]">
              <div>client@nova:~$</div>
              {terminalEntries.map((entry, i) => (
                <div
                  key={i}
                  className={
                    entry.type === 'success'
                      ? 'text-[var(--term-green)]'
                      : entry.type === 'warning'
                      ? 'text-[var(--term-amber)]'
                      : ''
                  }
                >
                  {entry.type === 'prompt' && (
                    <span className="text-[var(--term-amber)]">$ </span>
                  )}
                  {entry.text}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Main dashboard content */}
      <main
        className={`flex-1 min-w-0 p-4 sm:p-6 md:p-8 bg-[var(--surface)] overflow-auto ${className}`.trim()}
      >
        <div className="max-w-6xl mx-auto">
          {/* Dashboard header bar — wraps on narrow phones so the status
              readout never gets pushed off-screen. */}
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 mb-6 md:mb-8 pb-4 border-b border-[var(--ink)]">
            <Link
              to="/portal"
              className={`${
                currentPath === '/portal' ? 'hidden' : ''
              } md:hidden text-[var(--safety)] text-sm font-mono uppercase tracking-wider`}
            >
              ← Dashboard
            </Link>
            <span className="hidden md:inline text-micro text-[var(--muted)] uppercase tracking-wider">
              Client Workspace
            </span>
            <div className="flex items-center gap-2 ml-auto">
              <div className="header__status-dot" />
              <span className="text-micro text-[var(--muted)] whitespace-nowrap">
                All systems operational
              </span>
            </div>
          </div>

          {/* Page content renders here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
