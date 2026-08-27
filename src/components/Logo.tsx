import { useId } from 'react';

/**
 * Mokshly logo lockup — a ring-and-wave mark plus the MOKSHLY wordmark.
 *
 * The mark is an inline SVG using `currentColor`, so it inherits the brand
 * colour from CSS (deep teal today). This is a faithful recreation of the
 * supplied logo's composition; to use the exact artwork, drop the real file
 * in `public/` and point the mark at it, or replace this SVG path.
 */
export default function Logo({ height = 30 }: { height?: number }) {
  const clip = useId();
  return (
    <span className="logo">
      <svg
        className="logo__mark"
        width={height}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="5" />
        <clipPath id={clip}>
          <circle cx="32" cy="32" r="24.5" />
        </clipPath>
        <path
          clipPath={`url(#${clip})`}
          fill="currentColor"
          d="M2 38 C 14 27 24 30 32 37 C 40 44 50 44 62 30 L 62 64 L 2 64 Z"
        />
      </svg>
      <span className="logo__word">MOKSHLY</span>
    </span>
  );
}
