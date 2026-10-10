/**
 * React 18 typings predate the standardised `inert` HTML attribute, so the
 * `inert={...}` usage in Header.tsx's mobile overlay failed `tsc --noEmit`
 * while working fine at runtime. React 19's own typings declare it as a
 * boolean, so we backfill the same shape here instead of casting at the
 * call site.
 */
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    inert?: boolean | undefined;
  }
}
