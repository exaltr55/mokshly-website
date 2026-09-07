import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) ?? 'https://app.mokshly.com';
const LOGIN_URL = `${APP_URL}/login`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false); // mobile hamburger
  const [ddOpen, setDdOpen] = useState(false); // YouSourceful dropdown
  const [scrolled, setScrolled] = useState(false); // collapse the logo on scroll
  const menuRef = useRef<HTMLDivElement>(null);
  const close = () => {
    setOpen(false);
    setDdOpen(false);
  };

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    if (!ddOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDdOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [ddOpen]);

  // Collapse the full wordmark to just the ring-and-wave mark once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Mokshly — home" onClick={close}>
          {scrolled ? (
            <img src="/logo-mark.png" alt="Mokshly — home" className="brand-mark" style={{ height: 30, width: 'auto', display: 'block' }} />
          ) : (
            <Logo height={30} />
          )}
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          <NavLink to="/manifesto" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>
            Manifesto
          </NavLink>
          <NavLink to="/our-offering" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>
            Offering
          </NavLink>
          <NavLink to="/about" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>

          {/* YouSourceful dropdown — Anthropic-style: the action, plus Learn
              and Sign in for returning visitors. */}
          <div className="nav__menu" ref={menuRef}>
            <button
              type="button"
              className="nav__try"
              aria-haspopup="true"
              aria-expanded={ddOpen}
              onClick={() => setDdOpen((o) => !o)}
            >
              <span className="nav__try-label">Be YouSourceful</span>
              <span className="nav__try-chev" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div className={`nav__dropdown ${ddOpen ? 'nav__dropdown--open' : ''}`} role="menu">
              <a href={LOGIN_URL} className="nav__dropdown-item" role="menuitem">
                Sign in
              </a>
              <NavLink to="/yousourceful" className="nav__dropdown-item" role="menuitem" onClick={close}>
                Learn
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
