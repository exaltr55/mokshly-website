import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Mokshly — home" onClick={close}>
          <Logo height={30} />
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
          <NavLink
            to="/signin"
            onClick={close}
            className="nav__signin"
            aria-label="Sign in to YouSourceful"
          >
            Sign in
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
