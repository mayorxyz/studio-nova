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
  sidebarItems = [
    { icon: '◈', label: 'Dashboard', active: true },
    { icon: '◇', label: 'Projects' },
    { icon: '△', label: 'Invoices' },
    { icon: '○', label: 'Messages' },
    { icon: '□', label: 'Settings' },
  ],
  defaultCollapsed = false,
  terminalEntries = [
    { type: 'prompt', text: 'session --status' },
    { type: 'success', text: '→ Authenticated' },
    { type: 'output', text: '→ Role: client' },
  ],
  className = '',
}: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Atomic Sidebar with terminal footer */}
      <Sidebar
        items={sidebarItems}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
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
        className={`flex-1 p-6 md:p-8 bg-[var(--surface)] overflow-auto ${className}`.trim()}
      >
        <div className="max-w-6xl mx-auto">
          {/* Dashboard header bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--ink)]">
            <div>
              <Link
                to="/portal"
                className="md:hidden text-[var(--safety)] text-sm font-mono uppercase tracking-wider"
              >
                ← Back
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="header__status-dot" />
              <span className="text-micro text-[var(--muted)]">
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
