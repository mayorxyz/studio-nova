import { Outlet, Link } from 'react-router-dom';
import { TerminalLog } from '../atomic';
import type { TerminalLogEntry } from '../atomic';

export interface MinimalLayoutProps {
  /** Show minimal header bar (just logo) */
  showHeader?: boolean;
  /** Show minimal footer */
  showFooter?: boolean;
  /** Optional terminal log entries to display */
  terminalEntries?: TerminalLogEntry[];
  /** Additional className for main content */
  className?: string;
}

/**
 * MinimalLayout (UI4) — For utility pages
 * CSS Target: industrial.css only
 * Used for: Thank You, 404, Login
 *
 * Composes: TerminalLog, Button
 * Supports: Centered hero layout pattern
 * Chrome: Stripped-down (no full navigation)
 */
export function MinimalLayout({
  showHeader = true,
  showFooter = false,
  terminalEntries,
  className = '',
}: MinimalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--base)]">
      {/* Minimal header — just the logo, no navigation */}
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--term-bg)] border-b-4 border-[var(--safety)] px-8 h-16 flex items-center">
          <Link to="/" className="font-display text-xl font-bold text-white">
            STUDIO<span className="text-[var(--safety)]">NOVA</span>
          </Link>
        </header>
      )}

      <main
        className={`flex-1 flex items-center justify-center ${
          showHeader ? 'pt-16' : ''
        } ${className}`.trim()}
      >
        <div className="w-full max-w-2xl px-8">
          {/* Optional terminal decoration */}
          {terminalEntries && terminalEntries.length > 0 && (
            <div className="mb-8">
              <TerminalLog entries={terminalEntries} />
            </div>
          )}

          {/* Page content renders here */}
          <Outlet />
        </div>
      </main>

      {/* Minimal footer — just copyright */}
      {showFooter && (
        <footer className="bg-[var(--term-bg)] text-[var(--base)] py-4 px-8 border-t-4 border-[var(--safety)]">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <span className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--muted)]">
              © 2024 Studio Nova
            </span>
            <Link
              to="/"
              className="text-[var(--fs-micro)] uppercase tracking-widest text-[var(--safety)] hover:text-[var(--base)] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
}

export default MinimalLayout;
