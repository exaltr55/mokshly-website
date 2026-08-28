import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PRINCIPLES: Array<[string, string, string]> = [
  [
    'Human First',
    'In an age of intelligent machines, people come first.',
    'Every decision should strengthen the people it touches.',
  ],
  [
    'Awareness',
    'Better choices begin with greater Awareness.',
    'We respond from Awareness, not reaction.',
  ],
  [
    'Responsibility',
    'With greater capability comes greater responsibility.',
    'We own the consequences of what we build.',
  ],
  [
    'Balance',
    'Sustainable performance requires balance.',
    'Growth should not come at the expense of health, relationships or purpose.',
  ],
  [
    'Compassion',
    'Dignity is a human birthright.',
    'We act with care for every life our work touches.',
  ],
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Mokshly"
        description="Mokshly is a Human Capability Infrastructure Company — a public benefit corporation building the infrastructure that strengthens the foundational human capabilities people need to thrive alongside AI."
      />

      {/* 1 — Hero */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">About Mokshly</p>
          <h1 className="display-xl mb-md">A Human Capability Infrastructure Company.</h1>
          <p className="lede mb-md">
            We build infrastructure that strengthens the foundational human
            capabilities people need to thrive alongside AI.
          </p>
          <p className="lede">
            Because as machines become more capable, strengthening people
            becomes more important.
          </p>
        </div>
      </section>

      {/* 2 — Mission */}
      <section className="section section--raised">
        <div className="container--read center">
          <p className="eyebrow">Our Mission</p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: 0,
              maxWidth: '20ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            To strengthen people for the age of AI.
          </h2>
        </div>
      </section>

      {/* 3 — Guiding Principles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="display-lg">Our Guiding Principles</h2>
            <p className="lede mt-md">
              These principles guide how we build, serve and grow.
            </p>
          </div>

          <div className="principles">
            {PRINCIPLES.map(([title, lead, body]) => (
              <article key={title} className="principle">
                <h3>{title}</h3>
                <p className="principle__lead">{lead}</p>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Why We Are Different */}
      <section className="section section--airy section--raised" id="different">
        <div className="container--read">
          <p className="eyebrow">We Consciously Choose to Be Different</p>
          <h2 className="display-lg mb-md">
            Where purpose becomes structure.
          </h2>
          <p className="lede mb-md">
            Mokshly is a public benefit corporation. Our purpose shapes how we
            are governed, funded and compensated, how we maintain our
            independence, and how we give back.
          </p>
          <p className="lede mb-md">
            These are choices built into the company — and commitments we hold
            ourselves accountable to.
          </p>

          <div className="commitments mt-xl">
            <div className="commitment">
              <h3>We are governed for our purpose.</h3>
              <p>
                Our leadership is accountable not only to business performance,
                but to our purpose and the people our work serves.
              </p>
            </div>

            <div className="commitment">
              <h3>We are accountable to those we serve.</h3>
              <p>
                We seek capital aligned with our purpose — primarily through the
                enterprises we serve and institutions that share our commitment.
              </p>
              <p className="kicker">
                Capital shapes the company it builds.
              </p>
            </div>

            <div className="commitment">
              <h3>We believe in fair compensation.</h3>
              <p>
                People should be rewarded with dignity and in proportion to
                contribution and impact.
              </p>
              <p className="kicker">
                The principles we bring to our customers, we apply to ourselves.
              </p>
            </div>

            <div className="commitment">
              <h3>We remain independent.</h3>
              <p>
                Mokshly is independent of political parties, ideologies and
                external interests.
              </p>
              <p className="kicker">
                We answer to our purpose, our customers and the commitments we
                have made.
              </p>
            </div>

            <div className="commitment">
              <h3>We give back to society.</h3>
              <p>
                A defined share of Mokshly's profits flows back to foundations
                of human life:
              </p>
              <ul className="commitment__list">
                <li><em>Food</em> for those who go without</li>
                <li><em>Education</em> for communities opportunity has overlooked</li>
                <li><em>Care</em> for the elders who built what we inherit</li>
              </ul>
              <p className="kicker">
                Not philanthropy at the end. Structure from the start.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              paddingTop: 32,
              borderTop: '1px solid var(--rule)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                fontWeight: 500,
                color: 'var(--accent)',
                marginBottom: 14,
              }}
            >
              Held to what we've promised.
            </h3>
            <p
              style={{
                color: 'var(--ink-soft)',
                fontSize: 16.5,
                lineHeight: 1.65,
              }}
            >
              We are committed to publishing an annual public benefit report
              measuring our progress against these commitments.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Founder note */}
      <section className="section">
        <div className="founder-note">
          <p className="eyebrow">A Note from Our Founder</p>
          <div className="founder-note__body">
            <p>
              Strong humans are not a side effect of progress. They are its
              foundation.
            </p>
            <p>
              That strength is not built by chance. It is built intentionally,
              through understanding and practice sustained over time.
            </p>
            <p>
              Mokshly is our part of that work — to keep humanity primary in
              everything that comes next.
            </p>
          </div>
          <p style={{ marginBottom: 8 }}>
            The fuller expression of this work is set out in the Mokshly
            Manifesto.
          </p>
          <Link to="/manifesto" className="link-arrow">
            Read the Mokshly Manifesto →
          </Link>
        </div>
      </section>

      {/* 6 — Closing */}
      <section className="section section--airy section--raised">
        <div className="container--read center">
          <h2 className="display-lg mb-md">Continue the conversation</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            If what we are building resonates with where your organization is
            headed, we'd welcome the conversation.
          </p>
          <Link to="/contact#enterprise" className="btn">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
