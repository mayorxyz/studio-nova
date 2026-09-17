import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { Ticker, SectionEyebrow } from '../atomic';

export interface ShowcaseLayoutProps {
  /** Optional ticker items to display below header */
  tickerItems?: string[];
  /** Show reverse ticker variant */
  tickerReverse?: boolean;
  /** Ticker color variant */
  tickerVariant?: 'default' | 'safety';
  /** Optional eyebrow label shown above page content */
  eyebrow?: string;
  /** Additional className for the main content area */
  className?: string;
}

/**
 * ShowcaseLayout (UI1) — For grid-heavy pages
 * CSS Target: main-page.css
 * Used for: Home, Work Index, Services Index, Blog Index, Categories, Awards
 *
 * Composes: Header, Footer, Ticker, SectionEyebrow
 * Supports: BentoCard grids, StackCard layouts
 */
export function ShowcaseLayout({
  tickerItems,
  tickerReverse = false,
  tickerVariant = 'default',
  eyebrow,
  className = '',
}: ShowcaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className={`flex-1 pt-[64px] ${className}`.trim()}>
        {/* Optional ticker strip below header */}
        {tickerItems && tickerItems.length > 0 && (
          <Ticker
            items={tickerItems}
            variant={tickerVariant}
            reverse={tickerReverse}
          />
        )}

        {/* Optional eyebrow for page context */}
        {eyebrow && (
          <div className="max-w-[1400px] mx-auto px-8 pt-8">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </div>
        )}

        {/* Page content renders here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ShowcaseLayout;
