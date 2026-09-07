import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * The YouSourceful app is live for test users. The "Sign in" nav link lands
 * here and points returning users to the app's sign-in, and everyone else to
 * the individual landing page. The app URL is environment-configurable so each
 * deploy points at the right place.
 */
// TODO: confirm the real app domain before launch.
const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) ?? 'https://app.mokshly.com';
const LOGIN_URL = `${APP_URL}/login`;

export default function SignIn() {
  return (
    <>
      <SEO
        title="Sign in — YouSourceful"
        description="Sign in to your YouSourceful account, or discover YouSourceful."
      />
      <section className="section section--airy">
        <div className="container--read center">
          <p className="eyebrow">YouSourceful</p>
          <h1 className="display-lg mb-md">Welcome back.</h1>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            Sign in to continue your YouSourceful journey.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={LOGIN_URL} className="btn">
              Sign in to the app →
            </a>
            <Link to="/yousourceful" className="btn btn--ghost">
              New here? Discover YouSourceful →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
