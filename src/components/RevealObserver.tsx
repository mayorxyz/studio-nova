import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RevealObserver — global driver for the design-system `.reveal` animation.
 *
 * Every page marks blocks with `className="reveal"` and the design system
 * keeps them at `opacity: 0` until something adds `.visible`. Previously each
 * page created its own IntersectionObserver in a mount-only `useEffect`, which
 * meant:
 *   · content injected after mount (async/conditional renders) was never
 *     observed and stayed invisible, and
 *   · the 13 pages that ship no observer at all rendered permanently blank.
 *
 * This component owns that responsibility globally:
 *   · re-scans after every route change,
 *   · watches the DOM so late-mounted `.reveal` nodes are picked up,
 *   · fails open (reveals everything) when IntersectionObserver is missing,
 *   · respects `prefers-reduced-motion` by skipping the observer entirely
 *     (the stylesheet shows the content immediately in that case).
 *
 * Pages that already create their own observer keep working — adding the
 * `visible` class twice is harmless, and this component does not remove it.
 */
export default function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal')
        .forEach((el) => el.classList.add('visible'));
    };

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    };

    // Initial scan for the route that is already rendered.
    scan();

    // Route changes mount new content after this effect body runs, so scan
    // again on the next frame.
    const frame = requestAnimationFrame(scan);

    // Catch `.reveal` nodes added later (conditional states, filters, tabs).
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content invisible if the observer misfires.
    const fallback = window.setTimeout(() => {
      const stillHidden = document.querySelectorAll('.reveal:not(.visible)');
      if (stillHidden.length > 0) revealAll();
    }, 3000);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}