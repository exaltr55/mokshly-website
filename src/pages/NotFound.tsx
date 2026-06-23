import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found — Mokshly" />
      <section className="section section--airy">
        <div className="container--read center">
          <p className="eyebrow">404</p>
          <h1 className="display-lg mb-md">This page is not here.</h1>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            The page you were looking for has moved or never existed. Continue
            from one of the doorways below.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn">Home</Link>
            <Link to="/our-offering" className="btn btn--ghost">Our Offering</Link>
            <Link to="/manifesto" className="btn btn--ghost">Manifesto</Link>
          </div>
        </div>
      </section>
    </>
  );
}
