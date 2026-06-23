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
    'Better decisions begin with greater awareness.',
    'We respond from awareness, not reaction.',
  ],
  [
    'Responsibility',
    'With greater capability comes greater responsibility.',
    'We own the consequences of what we build.',
  ],
  [
    'Balance',
    'Sustainable performance requires balance.',
    'People should grow without trading away their health, relationships, or purpose.',
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
        description="Mokshly is a Human Sustainability Company — built to operate as a Public Benefit Corporation, with structural commitments to the people, communities, and causes our work serves."
      />

      {/* 1 — Hero */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">About Mokshly</p>
          <h1 className="display-xl mb-md">A Human Sustainability Company.</h1>
          <p className="lede mb-md">
            We build the infrastructure that strengthens people for the age of
            accelerating intelligence — through an integrated system embedded
            across the workforce, designed to endure.
          </p>
          <p className="lede">
            We exist because the age of AI demands not just smarter machines,
            but stronger humans. Building that strength — by design, at scale,
            sustained over time — is the work we do.
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
              These principles guide how we build Mokshly, how we serve
              organizations, and how we show up in the world.
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
            Mokshly is a public benefit corporation. The five commitments
            below are how that translates into structure — how we are
            governed, how we are funded, how we compensate, how we stay
            independent, and how we give back.
          </p>
          <p className="lede mb-md">
            Each is a deliberate choice, written into how the company is
            built — and held against outcomes each year, in public.
          </p>

          <div className="commitments mt-xl">
            <div className="commitment">
              <h3>We are governed for our purpose.</h3>
              <p>
                Mokshly's leadership is accountable not just to the bottom
                line, but to the people we serve, the communities our work
                touches, and the commitments we have made.
              </p>
              <p className="kicker">
                Submitted to annual review — verifiable, not merely asserted.
              </p>
            </div>

            <div className="commitment">
              <h3>We are accountable to those we serve.</h3>
              <p>
                We accept capital only from sources aligned with our
                purpose — revenue from the enterprises we serve, and grants
                from institutions that share our commitment.
              </p>
              <p className="kicker">
                Capital shapes the company it builds — ours is shaped to
                strengthen our accountability to those we serve.
              </p>
            </div>

            <div className="commitment">
              <h3>We believe in fair compensation.</h3>
              <p>
                People are rewarded with dignity, in proportion to contribution
                and impact — never to extraction.
              </p>
              <p className="kicker">
                The discipline we bring to our customers, we hold ourselves to.
              </p>
            </div>

            <div className="commitment">
              <h3>We remain independent.</h3>
              <p>
                Mokshly is independent of parties, ideologies, and external
                interests — so that we remain trusted by everyone committed
                to strengthening humans.
              </p>
              <p className="kicker">
                We answer to our purpose, our customers, and the commitments
                we have made.
              </p>
            </div>

            <div className="commitment">
              <h3>We give back to society.</h3>
              <p>
                A defined share of Mokshly's profit — set in our corporate
                structure — flows back to the foundations of human life that
                make all other work possible:
              </p>
              <ul className="commitment__list">
                <li><em>Food</em> for those who go without</li>
                <li><em>Education</em> for communities the system has overlooked</li>
                <li><em>Care</em> for the elders who built what we now inherit</li>
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
                marginBottom: 12,
              }}
            >
              Mokshly is committed to publishing an annual public benefit
              report — measuring how we perform against the commitments above.
            </p>
            <p
              style={{
                color: 'var(--ink-soft)',
                fontSize: 16.5,
                lineHeight: 1.65,
              }}
            >
              The commitments are structural. The reporting is how we keep
              them honest.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Founder note */}
      <section className="section">
        <div className="founder-note">
          <p className="eyebrow">A Note from Our Founder</p>
          <p>
            Strong humans are not a side effect of progress. They are its
            foundation. That strength is not built by chance — it is built
            by design, through structured understanding and practice,
            sustained over time.
          </p>
          <p>
            Mokshly is our part of the work — to keep humanity primary in
            everything that comes next.
          </p>
          <div className="sig">
            <p>Founder, Mokshly</p>
          </div>
          <p style={{ marginBottom: 8 }}>
            The fuller statement of this work is set out in the Mokshly
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
            If what Mokshly is — as a company, as a system, as a commitment —
            resonates with what your organization is building, we'd welcome the
            opportunity to talk.
          </p>
          <Link to="/contact#enterprise" className="btn">Schedule a Leadership Conversation</Link>
          <p className="mt-md">
            <Link to="/our-offering" className="link-arrow">
              Or learn more about our offering →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
