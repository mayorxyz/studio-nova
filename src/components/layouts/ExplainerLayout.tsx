import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SectionEyebrow, StatCard, TerminalLog } from '../atomic';

export interface ExplainerLayoutProps {
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Optional stats to display in a row */
  stats?: Array<{ value: string; label: string }>;
  /** Optional terminal log entries */
  terminalEntries?: Array<{
    type: 'prompt' | 'output' | 'success' | 'warning' | 'error';
    text: string;
  }>;
  /** Show dark variant for stats */
  statsDark?: boolean;
  /** Additional className for main content */
  className?: string;
}

/**
 * ExplainerLayout (UI2) — For content-heavy pages
 * CSS Target: landing-page.css
 * Used for: Service Details, About, Blog Posts, FAQ, Contact, Careers, Process, Pricing
 *
 * Composes: Header, Footer, SectionEyebrow, StatCard, TerminalLog
 * Supports: 5+7 column grids, spec grids, CTA bands
 */
export function ExplainerLayout({
  eyebrow,
  stats,
  terminalEntries,
  statsDark = false,
  className = '',
}: ExplainerLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className={`flex-1 pt-[64px] ${className}`.trim()}>
        {/* Optional eyebrow */}
        {eyebrow && (
          <div className="max-w-[1400px] mx-auto px-8 pt-8">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </div>
        )}

        {/* Optional stats row */}
        {stats && stats.length > 0 && (
          <section className="section">
            <div className="max-w-[1400px] mx-auto">
              <div className={`grid-${stats.length <= 4 ? stats.length : 4}`}>
                {stats.map((stat, i) => (
                  <StatCard
                    key={i}
                    value={stat.value}
                    label={stat.label}
                    dark={statsDark}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Optional terminal strip */}
        {terminalEntries && terminalEntries.length > 0 && (
          <section className="section pt-0">
            <div className="max-w-[1400px] mx-auto px-8">
              <TerminalLog entries={terminalEntries} />
            </div>
          </section>
        )}

        {/* Page content renders here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ExplainerLayout;
