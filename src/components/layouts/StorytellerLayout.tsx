import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SectionEyebrow, MetricsRibbon, SignalViz } from '../atomic';
import type { MetricsRibbonItem } from '../atomic';

export interface StorytellerLayoutProps {
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Optional metrics ribbon items */
  ribbonItems?: MetricsRibbonItem[];
  /** Ribbon variant */
  ribbonVariant?: 'default' | 'safety' | 'dark';
  /** Optional signal visualization data */
  signalData?: number[];
  /** Signal color variant */
  signalColor?: 'green' | 'amber' | 'safety';
  /** Signal label */
  signalLabel?: string;
  /** Additional className for main content */
  className?: string;
}

/**
 * StorytellerLayout (UI3) — For narrative/case study pages
 * CSS Target: the-observer.css
 * Used for: Case Studies, Team Profiles
 *
 * Composes: Header, Footer, SectionEyebrow, MetricsRibbon, SignalViz
 * Supports: Radar hero, ribbon metrics, feature grids, signal visualizations
 */
export function StorytellerLayout({
  eyebrow,
  ribbonItems,
  ribbonVariant = 'default',
  signalData,
  signalColor = 'green',
  signalLabel,
  className = '',
}: StorytellerLayoutProps) {
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

        {/* Optional metrics ribbon */}
        {ribbonItems && ribbonItems.length > 0 && (
          <section className="section pt-0">
            <div className="max-w-[1400px] mx-auto px-8">
              <MetricsRibbon items={ribbonItems} variant={ribbonVariant} />
            </div>
          </section>
        )}

        {/* Optional signal visualization */}
        {signalData && signalData.length > 0 && (
          <section className="section pt-0">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="signal__inner">
                <SignalViz data={signalData} color={signalColor} />
                {signalLabel && <div className="signal__label">{signalLabel}</div>}
              </div>
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

export default StorytellerLayout;
