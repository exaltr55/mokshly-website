import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// The YouSourceful app (ys.mokshly.com) isn't open for sign-in yet, so the
// "Sign in" nav link lands here with a warm greeting instead of a 404.
export default function SignIn() {
  return (
    <>
      <SEO
        title="Sign in — YouSourceful"
        description="YouSourceful is opening soon. Drop us a note and we'll get you set up."
      />
      <section className="section section--airy">
        <div className="container--read center">
          <p className="eyebrow">YouSourceful</p>
          <h1 className="display-lg mb-md">Thank you for your interest.</h1>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            The YouSourceful App is opening soon. Just drop us a note and we'll
            get you set up.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@mokshly.com" className="btn">
              Drop us a note
            </a>
            <Link to="/contact" className="btn btn--ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
