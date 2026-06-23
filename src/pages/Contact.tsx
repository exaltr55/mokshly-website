import { useState, type FormEvent } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired yet — front-end stub. When the team is ready,
    // route to a /contact endpoint or a service like Formspree.
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Contact — Mokshly"
        description="Get in touch with Mokshly. Schedule a Leadership Conversation, or write to us directly."
      />

      {/* Hero */}
      <section className="section">
        <div className="container--read">
          <h1 className="display-xl mb-md">Get in touch</h1>
          <p className="lede">
            If your organization is looking to strengthen your people for
            the age of AI — or if you'd like to understand our work more
            deeply — we welcome the conversation.
          </p>
        </div>
      </section>

      {/* For enterprises */}
      <section className="section section--raised" id="enterprise">
        <div className="container--read">
          <p className="eyebrow">For Enterprises</p>
          <h2 className="display-lg mb-md">Schedule a Leadership Conversation</h2>
          <p className="lede mb-md">
            If your organization is navigating AI-driven transformation and
            exploring how to strengthen your workforce through it, we welcome a
            leadership conversation.
          </p>
          <p className="lede" style={{ marginBottom: 36 }}>
            Conversations typically begin with 30 minutes — understanding your
            context, your people, and what you are building. From there, we
            shape what comes next.
          </p>

          {submitted ? (
            <div className="form__success">
              <strong>Thank you.</strong> We'll be in touch within two business days.
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name *</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="role">Role / Title *</label>
                <input id="role" name="role" type="text" required autoComplete="organization-title" />
              </div>
              <div className="field">
                <label htmlFor="company">Company *</label>
                <input id="company" name="company" type="text" required autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="email">Work email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="size">Approximate company size *</label>
                <select id="size" name="size" required defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option value="under-500">Under 500</option>
                  <option value="500-2000">500 – 2,000</option>
                  <option value="2000-10000">2,000 – 10,000</option>
                  <option value="over-10000">Over 10,000</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="context">Brief context (optional)</label>
                <textarea
                  id="context"
                  name="context"
                  placeholder="What's prompting you to reach out?"
                />
              </div>
              <div>
                <button type="submit" className="btn">
                  Schedule a Leadership Conversation
                </button>
                <p className="subtle" style={{ fontSize: 13, marginTop: 14 }}>
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" style={{ color: 'var(--accent)' }}>Privacy Policy</a>.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* For everything else */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">For Everything Else</p>
          <h2 className="display-lg mb-md">Reach us directly.</h2>
          <p className="lede">
            For press inquiries, potential partnerships, or any other reason you
            might be writing — reach us at{' '}
            <a
              href="mailto:support@mokshly.com"
              style={{ color: 'var(--accent)', borderBottom: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)' }}
            >
              support@mokshly.com
            </a>
            . We read every message, and we respond personally.
          </p>
        </div>
      </section>
    </>
  );
}
