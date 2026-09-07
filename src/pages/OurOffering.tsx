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
    'Assessment establishes a starting point and identifies opportunities for development.',
  ],
  [
    '02 — Strengthen',
    'Turn understanding into everyday development.',
    'The 5S Framework helps people understand themselves and the conditions shaping their choices. The Seven Practices bring that understanding into everyday life.',
  ],
  [
    '03 — Measure',
    'See how capability is strengthening over time.',
    'Individuals see their own progress. Organizations see aggregate progress — without exposing individual reflections.',
  ],
];

export default function OurOffering() {
  return (
    <>
      <SEO
        title="Our Offering — Mokshly"
        description="Human Capability Infrastructure for the AI Era. Mokshly helps organizations baseline, strengthen and measure foundational human capabilities."
      />

      {/* 1 — The premise */}
      <section className="hero">
        <div className="hero__inner">
          <p className="eyebrow">Our Offering</p>
          <h1 className="display-xl mb-md">Human Capability Infrastructure</h1>
          <p className="lede mb-md">
            The future of enterprise will be shaped by the humans who steward it.
          </p>
          <p className="lede mb-md">
            Mokshly helps organizations systematically{' '}
            <strong>baseline, strengthen and measure</strong> the foundational
            human capabilities people need to navigate continuous change.
          </p>
          <p className="lede">
            <strong>
              Built for the enterprise. Designed around the individual. Made for
              continuous change.
            </strong>
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
            The platform that delivers it.
          </h2>
          <p className="lede mb-md">
            YouSourceful brings Human Capability Infrastructure to people and
            organizations through a continuous cycle:
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--accent)', fontWeight: 500, marginBottom: 8 }}
          >
            <strong>Baseline. Strengthen. Measure.</strong>
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
            Built for the enterprise. Private for the individual.
          </h2>
          <p className="lede mb-md">
            Mokshly integrates with existing learning and development ecosystems
            rather than replacing them.
          </p>
          <p className="lede mb-md">
            Individual journeys remain private. Organizations gain an aggregate
            view of human capability over time.
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', color: 'var(--accent)', fontWeight: 500 }}
          >
            <strong>Enterprise-ready · Privacy-first · Scalable · Measurable</strong>
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
              <p>A private, individual view of practice consistency.</p>
            </div>
            <div className="card card--compact">
              <h3>HCIx — Human Capability Infrastructure Index</h3>
              <p>An aggregate organizational view of foundational human capability.</p>
            </div>
          </div>

          <p className="lede italic mt-lg" style={{ fontFamily: 'var(--font-serif)' }}>
            Measure progress without turning people into data points.
          </p>
        </div>
      </section>

      {/* 7 — Outcomes */}
      <section className="section section--airy">
        <div className="container--read center">
          <p className="eyebrow">Outcomes</p>
          <h2 className="display-lg mb-md">Stronger people. More adaptable institutions.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            Technology will keep changing. Organizations equipped to navigate it
            need people who can change with it.
          </p>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--ink)', lineHeight: 1.5, marginBottom: 36 }}
          >
            <strong>
              Greater adaptability. Better judgment. Stronger collaboration.
              More resilient people. Sustainable performance.
            </strong>
          </p>
          <Link to="/contact#enterprise" className="btn">
            Bring Human Capability Infrastructure to your organization →
          </Link>
        </div>
      </section>
    </>
  );
}
