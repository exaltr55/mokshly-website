import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Mokshly — Human Capability Infrastructure for the AI Era" />

      {/* 1 — Hero: two-column split. Headline left, supporting subhead
          right (stacks on mobile). No CTA — the page pulls the reader down. */}
      <section className="hero">
        <div className="hero__inner hero__inner--split">
          <h1 className="display-xl">
            Strong humans build strong institutions.
          </h1>
          <p className="lede">
            AI is rewriting humanity's relationship with work. Mokshly is a
            public benefit corporation dedicated to strengthening the
            foundational human capabilities needed to thrive through this
            transformation.
          </p>
        </div>
      </section>

      {/* 2 — The moment */}
      <section className="section section--raised">
        <div className="container--read">
          <h2 className="display-lg mb-md">
            AI is reshaping knowledge work faster than people can absorb it.
          </h2>
          <p className="lede mb-md">
            Roles are changing. Expectations are shifting. Uncertainty is growing.
          </p>
          <p className="lede">
            The foundational human capabilities that help people navigate change
            are becoming more consequential.
          </p>
          <p className="mt-lg">
            <Link to="/manifesto" className="link-arrow">Read our perspective on this moment →</Link>
          </p>
        </div>
      </section>

      {/* 3 — Human Capability Infrastructure */}
      <section className="section">
        <div className="container--read">
          <h2 className="display-lg mb-md">
            Human Capability Infrastructure for the AI Era.
          </h2>
          <p className="lede mb-md">
            Mokshly helps organizations systematically <strong>baseline,
            strengthen and measure</strong> the foundational human capabilities
            their people need to thrive through continuous change.
          </p>
          <p className="lede">
            Built not as another training program, but as infrastructure for
            continuous human development.
          </p>
          <p className="mt-lg">
            <Link to="/our-offering" className="link-arrow">Explore our approach →</Link>
          </p>
        </div>
      </section>

      {/* 4 — Enterprise grade */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Enterprise-Grade</p>
          <h2 className="display-lg mb-md">
            Built for the enterprise. Designed for people.
          </h2>
          <p className="lede">
            Mokshly integrates across functions, geographies and existing
            learning ecosystems — while protecting individual privacy and
            giving organizations a measurable view of human capability over
            time.
          </p>
        </div>
      </section>

      {/* 5 — A different kind of company (Public Benefit Corporation framing) */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">A Different Kind of Company</p>
          <h2 className="display-lg mb-md">
            Purpose, by design.
          </h2>
          <p className="lede mb-md">
            Being a public benefit corporation shapes how Mokshly is governed,
            how we grow and how our success is shared.
          </p>
          <p className="hook-coda">
            Purpose isn't beside the business. It's built into it.
          </p>
          <p className="mt-lg">
            <Link to="/about#different" className="link-arrow">See how Mokshly is structured →</Link>
          </p>
        </div>
      </section>

      {/* 6 — YouSourceful (brief): the individual platform. A distinct card
          that sends the visitor to the YouSourceful landing page. */}
      <section className="section section--tight">
        <div className="container">
          <div className="yc-spotlight">
            <p className="eyebrow">YouSourceful</p>
            <h2 className="display-lg">
              Human capability starts with You.
            </h2>
            <p className="lede">
              YouSourceful is a platform for strengthening the foundational
              human capabilities that travel with you through life.
            </p>
            <div className="yc-spotlight__actions">
              <Link to="/yousourceful" className="link-arrow">Discover YouSourceful →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Final CTA */}
      <section className="section">
        <div className="container--read center">
          <h2 className="display-lg mb-md">Begin the conversation.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 36px' }}>
            The opportunity is to strengthen the people who will shape what comes next.
          </p>
          <Link to="/contact#enterprise" className="btn">Schedule a Leadership Conversation →</Link>
        </div>
      </section>
    </>
  );
}
