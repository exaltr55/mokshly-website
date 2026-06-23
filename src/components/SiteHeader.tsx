import { NavLink, Link } from 'react-router-dom';

// In production, set VITE_YOUSOURCEFUL_URL to the deployed YouSourceful URL
// (e.g., https://app.mokshly.com or https://yousourceful.com).
const YOUSOURCEFUL_BASE_URL =
  import.meta.env.VITE_YOUSOURCEFUL_URL ?? 'http://localhost:3000';
const YOUSOURCEFUL_SIGNIN_URL = `${YOUSOURCEFUL_BASE_URL}/login`;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Mokshly — home">
          Mokshly
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/manifesto" className={({ isActive }) => (isActive ? 'active' : '')}>
            Manifesto
          </NavLink>
          <NavLink to="/our-offering" className={({ isActive }) => (isActive ? 'active' : '')}>
            Offering
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
          <a
            href={YOUSOURCEFUL_SIGNIN_URL}
            className="nav__signin"
            aria-label="Sign in to YouSourceful"
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}
