import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/* Short leader voices heard "in the halls" — each surfaces the tension that
 * one of the six foundational capabilities answers, in canonical order:
 * self-awareness, judgment, adaptability, collaboration, resilience,
 * sustainable well-being. The `capability` field is the mapping (not shown). */
const VOICES: Array<{ text: string; role: string; industry: string; capability: string }> = [
  {
    text: "We move so fast now, I barely notice my own assumptions before I act.",
    role: 'Managing Director',
    industry: 'Financial Services',
    capability: 'Self-awareness',
  },
  {
    text: "AI hands me an answer in seconds. Knowing when to trust it is the hard part.",
    role: 'Head of Risk',
    industry: 'Banking',
    capability: 'Judgment',
  },
  {
    text: "The way we work gets rewritten every quarter, and we start over.",
    role: 'Engineering Lead',
    industry: 'Technology',
    capability: 'Adaptability',
  },
  {
    text: "My team works alongside AI agents now — no one taught us how.",
    role: 'VP Operations',
    industry: 'Manufacturing',
    capability: 'Collaboration',
  },
  {
    text: "We absorb one disruption and the next is already here.",
    role: 'Chief Operating Officer',
    industry: 'Healthcare',
    capability: 'Resilience',
  },
  {
    text: "My best people are exhausted, and the pace never lets up.",
    role: 'Chief People Officer',
    industry: 'Consulting',
    capability: 'Sustainable Well-being',
  },
];

/* Subtle position offsets around the central anchor — each quote drifts
 * to a different spot so the reader feels voices arriving from different
 * places in their organization. Kept small on mobile. */
function VoicesSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Sequential transitions — one quote fully fades out before the
  // next fades in. No overlap, no layering. Editorial pace.
  useEffect(() => {
    const HOLD = 2250;       // visible duration
    const FADE = 1200;       // fade-out OR fade-in duration

    const tick = setInterval(() => {
      setVisible(false);                                            // begin fade-out
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % VOICES.length);                   // swap content while invisible
        window.setTimeout(() => setVisible(true), 60);              // begin fade-in
      }, FADE);
    }, HOLD + FADE * 2);

    return () => clearInterval(tick);
  }, []);

  const v = VOICES[index];

  return (
    <section className="voices-section" aria-label="Voices from inside knowledge work">
      <div className="voices-section__card">
        <header className="voices-section__head">
          <p className="voices-section__eyebrow">The Conversations Already in Your Halls</p>
          <h2 className="voices-section__title">
            You are probably hearing some of this already.
          </h2>
        </header>

        <div className="voices-section__stage">
          <div
            className={`voices-section__quote-block ${
              visible ? 'voices-section__quote-block--visible' : ''
            }`}
          >
            <blockquote className="voices-section__quote">
              <p>“{v.text}”</p>
            </blockquote>
            <p className="voices-section__attribution">
              — {v.role}, {v.industry}
            </p>
          </div>
        </div>

        <div
          className="voices-section__progress"
          role="tablist"
          aria-label={`Quote ${index + 1} of ${VOICES.length}`}
        >
          {VOICES.map((_, i) => (
            <span
              key={i}
              className={`voices-section__dot ${
                i === index ? 'voices-section__dot--active' : ''
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <span style={{ whiteSpace: 'nowrap' }}>
              AI is rewriting humanity's relationship with work.
            </span>
            <br />
            Mokshly is a public benefit corporation dedicated
            <br />
            to strengthening the foundational human capabilities
            <br />
            needed to thrive through this transformation.
          </p>
        </div>
      </section>

      {/* 2 — Voices: cycling quotes that bring the reader into their own
          company's lived experience of the AI moment. */}
      <VoicesSection />

      {/* 3 — The moment */}
      <section className="section section--raised">
        <div className="container--read">
          <h2 className="display-lg mb-md">
            AI is reshaping knowledge work faster than people can absorb it.
          </h2>
          <p className="lede mb-md">
            Roles are changing. Expectations are shifting. Uncertainty is growing.
          </p>
          <p className="lede mb-md">
            The foundational human capabilities that help people navigate change —
            self-awareness, judgment, adaptability, collaboration, resilience and
            sustainable well-being — are becoming more consequential.
          </p>
          <Link to="/manifesto" className="link-arrow">
            Read our perspective on this moment →
          </Link>
        </div>
      </section>

      {/* 4 — The answer: Human Capability Infrastructure */}
      <section className="section">
        <div className="container--read">
          <h2 className="display-lg mb-md">
            Human Capability Infrastructure for the AI Era.
          </h2>
          <p className="lede mb-md">
            Mokshly helps organizations systematically <strong>baseline,
            strengthen and measure</strong> the foundational human capabilities
            their people need to thrive alongside AI.
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

      {/* 5 — Enterprise grade */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Enterprise-Grade</p>
          <h2 className="display-lg mb-md">
            Built for the enterprise. Designed for people.
          </h2>
          <p className="lede mb-md">
            Mokshly integrates across functions, geographies and existing
            learning ecosystems — while protecting individual privacy and
            giving organizations a measurable view of human capability over
            time.
          </p>
          <Link to="/our-offering" className="link-arrow">
            See how Mokshly works →
          </Link>
        </div>
      </section>

      {/* 6 — A different kind of company (Public Benefit Corporation framing) */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">A Different Kind of Company</p>
          <h2 className="display-lg mb-md">
            Purpose, by design.
          </h2>
          <p className="lede mb-md">
            For Mokshly, being a public benefit corporation shapes how we are
            governed, who we serve, how we grow and how our success is shared.
          </p>
          <p className="hook-coda">
            Purpose isn't beside the business. It's built into it.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link to="/about#different" className="link-arrow">See how Mokshly is structured →</Link>
          </p>
        </div>
      </section>

      {/* 7 — The deeper why (Manifesto pull quote) */}
      <section className="section section--airy section--ink">
        <div className="pullquote">
          <blockquote>
            “The organizations that strengthen their people will be the ones
            capable of navigating what's coming.”
          </blockquote>
          <p className="attribution">From the Mokshly Manifesto</p>
          <Link to="/manifesto" className="btn btn--ghost">
            Read the Full Manifesto
          </Link>
        </div>
      </section>

      {/* 8 — Final CTA */}
      <section className="section">
        <div className="container--read center">
          <h2 className="display-lg mb-md">Begin the conversation.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 12px' }}>
            AI will continue to change work.
          </p>
          <p className="lede mb-md" style={{ margin: '0 auto 36px', fontWeight: 600 }}>
            The opportunity is to strengthen the people who will shape what comes next.
          </p>
          <Link to="/contact#enterprise" className="btn">Schedule a Leadership Conversation</Link>
        </div>
      </section>
    </>
  );
}
