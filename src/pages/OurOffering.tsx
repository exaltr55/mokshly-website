import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// The public page names the model and the platform, and sketches how
// Mokshly baselines, strengthens, and measures foundational human
// capability. The depth lives in the YouSourceful platform and in
// conversation with the Mokshly team.

const PLATFORM = [
  [
    '01 — Baseline',
    'Understand where people and the organization are today.',
    'Assessment establishes a baseline and identifies opportunities for development — for individuals and across the enterprise.',
  ],
  [
    '02 — Practice',
    'Capability is built through practice, not content alone.',
    'Seven foundational practices help people bring greater awareness and intentionality into everyday life — at work and beyond it.',
  ],
  [
    '03 — Measure',
    'See whether practice is becoming consistent and capability is strengthening over time.',
    'A private view for the individual; an aggregate view for the organization — without exposing individual data.',
  ],
];

export default function OurOffering() {
  return (
    <>
      <SEO
        title="Our Offering — Mokshly"
        description="Human Capability Infrastructure for the AI Era. Mokshly helps organizations baseline, strengthen and measure the foundational human capabilities people need to thrive alongside AI."
      />

      {/* 1 — The premise */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">Our Offering</p>
          <h1 className="display-xl mb-md">Human Capability Infrastructure</h1>
          <p className="lede mb-md">
            The future of enterprise will be shaped by the humans who steward it.
          </p>
          <p className="lede mb-md">
            Mokshly helps organizations systematically baseline, strengthen and
            measure the foundational human capabilities people need to thrive
            alongside AI.
          </p>
          <p className="lede">
            Built for the enterprise. Designed around the individual. Made for
            continuous change.
          </p>
        </div>
      </section>

      {/* 2 — Foundational Human Capabilities */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Foundational Human Capabilities</p>
          <h2 className="display-lg mb-md">
            What becomes more important as machines become more capable.
          </h2>
          <p className="lede mb-md">
            <strong>Awareness</strong> sits at the foundation — the space from
            which intentional choice becomes possible.
          </p>
          <p className="lede mb-md">
            From that foundation, Mokshly strengthens six capabilities:
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(19px, 2vw, 23px)', lineHeight: 1.5, color: 'var(--ink)' }}
          >
            <strong>
              Self-awareness · Judgment · Adaptability · Collaboration ·
              Resilience · Sustainable well-being
            </strong>
          </p>
          <p className="lede mt-md">
            These capabilities are not tied to a role or technology. They travel
            with people as work changes.
          </p>
        </div>
      </section>

      {/* 3 — YouSourceful: the platform (Baseline · Practice · Measure) */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">YouSourceful</p>
          <h2 className="display-lg mb-md">
            The platform for Human Capability Infrastructure.
          </h2>
          <p className="lede mb-md">
            YouSourceful turns human capability development from an occasional
            intervention into continuous infrastructure — organized around a
            simple loop that runs at scale:
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--accent)', fontWeight: 500, marginBottom: 8 }}
          >
            Baseline. Practice. Measure.
          </p>

          <div className="grid grid--3 mt-lg">
            {PLATFORM.map(([title, lead, body]) => (
              <div key={title} className="card card--compact">
                <h3>{title}</h3>
                <p>{lead}</p>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — The Foundation */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">The Foundation</p>
          <h2 className="display-lg mb-md">Awareness becomes practice.</h2>
          <p className="lede mb-md">
            Awareness is the foundation — but a foundation only holds when it is
            returned to, in real moments, again and again. Capability is
            strengthened not by understanding Awareness, but by practicing it.
          </p>
          <p className="lede mb-md">
            Mokshly gives that a structure: a way to understand, and a way to
            act on that understanding every day.
          </p>
          <p className="lede mb-md">
            The <strong>5S Framework</strong> provides a simple way to understand
            ourselves and the conditions shaping our choices.
          </p>
          <p className="lede mb-md">
            The <strong>Seven Practices</strong> turn that understanding into
            everyday action.
          </p>
          <p className="lede">
            Together, they help people move from reaction toward greater
            Awareness and intentional choice.
          </p>
        </div>
      </section>

      {/* 5 — Enterprise Infrastructure */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">Enterprise Infrastructure</p>
          <h2 className="display-lg mb-md">
            Built to become part of how the organization develops people.
          </h2>
          <p className="lede mb-md">
            Mokshly integrates with existing learning and development ecosystems
            rather than replacing them.
          </p>
          <p className="lede mb-md">
            The platform provides a foundational capability layer while existing
            systems continue to develop role-specific, technical, leadership and
            other capabilities.
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', color: 'var(--accent)', fontWeight: 500 }}
          >
            Enterprise-ready · Privacy-first · Scalable · Measurable
          </p>
        </div>
      </section>

      {/* 6 — Measurement (the one place Consistency Index vs HCIx is defined) */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Measurement</p>
          <h2 className="display-lg mb-md">From participation to capability.</h2>
          <p className="lede mb-md">
            Traditional learning measures what people completed. Mokshly measures
            whether practice is becoming consistent and foundational capability
            is strengthening.
          </p>

          <div className="grid grid--2 mt-lg">
            <div className="card card--compact">
              <h3>Consistency Index</h3>
              <p>A private, individual measure of practice consistency.</p>
            </div>
            <div className="card card--compact">
              <h3>HCIx — Human Capability Infrastructure Index</h3>
              <p>An aggregate organizational measure of foundational human capability.</p>
            </div>
          </div>

          <p className="lede italic mt-lg" style={{ fontFamily: 'var(--font-serif)' }}>
            Measure progress without turning people into data points.
          </p>
        </div>
      </section>

      {/* 7 — Outcomes */}
      <section className="section section--airy section--raised">
        <div className="container--read center">
          <p className="eyebrow">Outcomes</p>
          <h2 className="display-lg mb-md">Stronger people. More adaptable institutions.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 24px' }}>
            As foundational capabilities strengthen, organizations become better
            equipped to navigate continuous change.
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--ink)', lineHeight: 1.5, marginBottom: 32 }}
          >
            Greater adaptability. Better judgment. Stronger collaboration.
            More resilient people. Sustainable performance.
          </p>
          <p className="lede mb-md" style={{ margin: '0 auto 32px' }}>
            The goal is not simply to prepare people for the next change. It is
            to strengthen their capacity for whatever comes after it.
          </p>
          <Link to="/contact#enterprise" className="btn">
            Bring Human Capability Infrastructure to your organization
          </Link>
        </div>
      </section>
    </>
  );
}
