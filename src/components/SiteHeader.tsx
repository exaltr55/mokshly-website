import { NavLink, Link } from 'react-router-dom';

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
          <NavLink
            to="/signin"
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
