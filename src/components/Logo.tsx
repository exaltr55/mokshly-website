/**
 * Mokshly logo — the official horizontal lockup (ring-and-wave mark + MOKSHLY
 * wordmark), served from `public/logo.png`. `height` controls the display size;
 * width scales with the artwork's aspect ratio.
 */
export default function Logo({ height = 30 }: { height?: number }) {
  return (
    <img
      src="/logo.png"
      alt="Mokshly"
      className="brand-logo"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
