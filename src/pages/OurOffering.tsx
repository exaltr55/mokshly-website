import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Only registered users see the substance of the 5S Framework, the 7
// Practices, and the Foursome Peer Structure. The public page names
// them, sketches what each does at a high level, and lets the reader
// be curious — but the depth lives in the YouSourceful platform and
// in conversation with the Mokshly team.

const DEPLOYMENT = [
  ['Structured onboarding', 'Aligns leadership and teams from the outset, with a guided introduction to the system and orientation to daily practice.'],
  ['Daily reinforcement', 'Structured learning content delivered through the platform, accessible across desktop and mobile, designed for engagement during the natural rhythms of the work day.'],
  ['Foursome cohort support', 'Platform-level infrastructure for cohort formation, check-ins, and shared rhythm across the organization.'],
  ['Privacy-first aggregate reporting', 'Organization-level visibility into practice adoption and integration across teams, functions, and geographies — without compromising individual privacy.'],
  ['Scalable deployment', 'Extends seamlessly across teams, functions, and geographies, at any scale your enterprise operates at.'],
  ['Long-term adoption tracking', 'Ensures sustained integration — not short-term participation.'],
];

export default function OurOffering() {
  return (
    <>
      <SEO
        title="Our Offering — Mokshly"
        description="Human Sustainability Infrastructure for the AI Era. YouSourceful: an integrated system that strengthens the foundational human capabilities every enterprise depends on."
      />

      {/* 1 — The premise */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">Our Offering</p>
          <h1 className="display-xl mb-md">Human Sustainability Infrastructure</h1>
          <p className="lede mb-md">
            The future of enterprise will be defined by the humans who steward it.
          </p>
          <p className="lede mb-md">
            Mokshly supports organizations in helping their employees navigate
            the changes AI is bringing — and stay strong through them. We embed
            Human Sustainability Infrastructure within enterprises as an integrated
            system that strengthens the people who power them.
          </p>
          <p className="lede">
            Rooted in timeless wisdom. Secular and enterprise-ready. Simple in
            practice. Powerful in effect. Built to endure at scale.
          </p>
        </div>
      </section>

      {/* 2 — What YouSourceful is — three reinforcing elements */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">YouSourceful</p>
          <h2 className="display-lg mb-md">
            One integrated system. Three reinforcing elements.
          </h2>
          <p className="lede mb-md">
            YouSourceful integrates three capabilities into one continuous
            system. A framework for shared understanding. A daily practice
            for personal activation. A peer structure for organizational
            accountability.
          </p>
          <p className="lede mb-md">
            It does not add complexity to your workforce. It strengthens what
            already exists: focus, steadiness, clarity, energy. Each element
            reinforces the others — and the system compounds capability the
            longer it runs.
          </p>

          <div className="grid grid--3 mt-lg">
            <div className="card card--compact">
              <h3>The 5S Framework</h3>
              <p>
                The framework for understanding — a practical model that helps
                each person see how their thoughts, patterns, and choices
                shape their experience.
              </p>
            </div>
            <div className="card card--compact">
              <h3>The 7 Practices</h3>
              <p>
                The daily activation — simple, structured practices that
                translate the framework into how each person actually lives.
                Foundational disciplines that cultivate awareness, steadiness,
                and capability over time.
              </p>
            </div>
            <div className="card card--compact">
              <h3>The Foursome Peer Structure</h3>
              <p>
                The accountability layer — small, structured cohorts that turn
                consistency into a shared standard within the organization,
                rather than an individual effort each employee defends alone.
              </p>
            </div>
          </div>

          <p className="lede mt-lg">
            Understanding without practice remains theoretical. Practice
            without understanding becomes mechanical. And both fade without a
            structure that holds them. YouSourceful brings the three together —
            so what is understood can be lived, what is practiced becomes
            meaningful, and the rhythm sustains itself.
          </p>
        </div>
      </section>

      {/* 3 — The Consistency Index */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">The Consistency Index</p>
          <h2 className="display-lg mb-md">
            Measuring whether the practice is taking root
          </h2>
          <p className="lede mb-md">
            Most platforms measure engagement — logins, sessions, content
            consumed. Mokshly measures something different: whether daily
            practice is being sustained over time.
          </p>
          <p className="lede mb-md">
            At the individual level, a personal mirror of practice. At the
            organizational level, aggregate visibility into where capability is
            being built across teams and functions, without compromising
            individual privacy.
          </p>
          <p className="lede italic" style={{ fontFamily: 'var(--font-serif)' }}>
            Designed to support, not surveil. The closest possible proxy for{' '}
            <em>capacity actually being built</em>.
          </p>
        </div>
      </section>

      {/* 7 — Platform & deployment */}
      <section className="section" id="deployment">
        <div className="container--read">
          <p className="eyebrow">Technology-Enabled Delivery</p>
          <h2 className="display-lg mb-md">Structured. Scalable. Measurable.</h2>
          <p className="lede mb-md">
            The Mokshly infrastructure is delivered through a secure,
            enterprise-ready platform designed for institutional deployment —
            while honoring individual experience.
          </p>

          <ul className="feature-list mt-lg">
            {DEPLOYMENT.map(([title, desc]) => (
              <li key={title} className="feature-list__item">
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — What Mokshly delivers (Outcomes) */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Outcomes</p>
          <h2 className="display-lg mb-md">What Mokshly delivers</h2>
          <p className="lede mb-md">
            Strengthen the human workforce, and your AI investment delivers the
            returns it's meant to — the business thrives through every shift in
            the work. Three outcomes consistently emerge, and they show up in
            your numbers.
          </p>
          <div className="outcomes mt-lg">
            <div className="outcome">
              <h3>Employee capability that compounds.</h3>
              <p>
                The clarity, judgment, and steadiness your employees bring to
                the work grow stronger, year over year.
              </p>
            </div>
            <div className="outcome">
              <h3>Higher internal mobility to meet the new shape of work.</h3>
              <p>
                People redeploy comfortably into new roles instead of leaving
                for the market.
              </p>
            </div>
            <div className="outcome">
              <h3>Workforce stability that endures.</h3>
              <p>
                Lower attrition among the mid-career talent you can least
                afford to lose.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>
            <Link to="/contact#enterprise" className="link-arrow">
              Bring this to your enterprise →
            </Link>
          </p>
        </div>
      </section>

      {/* 9 — Closing */}
      <section className="section section--airy section--raised">
        <div className="container--read center">
          <p className="eyebrow">Build the Infrastructure That Endures</p>
          <h2 className="display-lg mb-md">Sustainable Humans. Enduring Institutions.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 24px' }}>
            When the system is embedded across your enterprise — and the
            people who power it are strengthened, daily — steadiness becomes
            structural.
          </p>
          <p
            className="serif italic"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--ink)', lineHeight: 1.5, marginBottom: 40 }}
          >
            Decision-making strengthens. Performance endures. People thrive.
          </p>
          <p className="lede mb-md" style={{ margin: '0 auto 32px' }}>
            If your organization is ready, we welcome the conversation.
          </p>
          <Link to="/contact#enterprise" className="btn">Schedule a Leadership Conversation</Link>
          <p className="mt-md">
            <Link to="/manifesto" className="link-arrow">
              Or read the Mokshly Manifesto →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
