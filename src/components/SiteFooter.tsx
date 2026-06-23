import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <p className="brand" style={{ marginBottom: 4 }}>Mokshly</p>
            <p className="subtle" style={{ fontSize: 13, margin: 0 }}>
              A Human Sustainability Company.
            </p>
          </div>
          <nav className="site-footer__links" aria-label="Footer">
            <Link to="/manifesto">Mokshly Manifesto</Link>
            <Link to="/our-offering">Our Offering</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
        <p className="site-footer__legal">
          © {new Date().getFullYear()} Mokshly LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
