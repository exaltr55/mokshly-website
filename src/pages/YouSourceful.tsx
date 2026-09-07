import type { ReactElement } from 'react';
import SEO from '../components/SEO';

/**
 * Individual acquisition / landing page for YouSourceful — also the destination
 * for social / paid campaigns. Written to be compelling for a first-time reader:
 * what it is, what you strengthen (the six capabilities), how it works, and the
 * Companion. The app URL is environment-configurable.
 */
const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) ?? 'https://app.mokshly.com';
const SIGNUP_URL = `${APP_URL}/signup`;

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'YouSourceful',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web',
  url: 'https://mokshly.com/yousourceful',
  description:
    'YouSourceful is a platform for strengthening the six foundational human capabilities — self-awareness, judgment, adaptability, collaboration, resilience, and sustainable well-being.',
  offers: {
    '@type': 'Offer',
    description: 'First 60 days free for individual accounts. No credit card required.',
  },
};

const ICON = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function IconAwareness() {
  return (
    <svg {...ICON} aria-hidden="true">
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconJudgment() {
  return (
    <svg {...ICON} aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M6 21h12" />
      <path d="M5 7h14" />
      <path d="M5 7 2.5 12.5a3 3 0 0 0 5 0Z" />
      <path d="M19 7l2.5 5.5a3 3 0 0 1-5 0Z" />
    </svg>
  );
}
function IconAdapt() {
  return (
    <svg {...ICON} aria-hidden="true">
      <path d="M3 7h11a4 4 0 0 1 0 8H7" />
      <path d="m10 4 3 3-3 3" />
      <path d="m10 12-3 3 3 3" />
    </svg>
  );
}
function IconCollaboration() {
  return (
    <svg {...ICON} aria-hidden="true">
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </svg>
  );
}
function IconResilience() {
  return (
    <svg {...ICON} aria-hidden="true">
      <path d="M3 16l5-5 4 4 9-9" />
      <path d="M17 6h4v4" />
    </svg>
  );
}
function IconWellbeing() {
  return (
    <svg {...ICON} aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 4 13C4 8 9 4 20 4c0 11-4 16-9 16Z" />
      <path d="M4 20c4-6 8-8 12-9" />
    </svg>
  );
}

const CAPABILITIES: [() => ReactElement, string, string][] = [
  [IconAwareness, 'Self-awareness', "See what's shaping you, before it shapes your response."],
  [IconJudgment, 'Judgment', "Think clearly and choose well when the answer isn't obvious."],
  [IconAdapt, 'Adaptability', 'Meet change without losing your footing.'],
  [IconCollaboration, 'Collaboration', 'Bring your steadiest self to the people around you.'],
  [IconResilience, 'Resilience', 'Recover, and keep going, when things get hard.'],
  [IconWellbeing, 'Sustainable well-being', 'Sustain your energy and balance over time.'],
];

const STEPS: [string, ReactElement][] = [
  [
    'Understand',
    <>See any moment clearly with the <strong>5S Framework</strong> — five simple lenses on
    what's really happening: Source, Seed, Soil, Season, and Sowing.</>,
  ],
  [
    'Practice',
    <>Turn the everyday things you already do — breathing, thinking, talking, moving — into small
    practices that build awareness, guided by the <strong>Seven Practices</strong>.</>,
  ],
  [
    'Reflect',
    <>Make sense of what you're noticing with your <strong>Companion</strong>, a private space to
    think things through.</>,
  ],
  [
    'Grow',
    <>Watch your steadiness build over time — quietly, and only for you.</>,
  ],
];

export default function YouSourceful() {
  return (
    <>
      <SEO
        title="YouSourceful — Strengthen what stays yours"
        description="YouSourceful is a platform for strengthening the six foundational human capabilities you carry through life — self-awareness, judgment, adaptability, collaboration, resilience, and sustainable well-being. Start with 60 days free."
        jsonLd={JSON_LD}
      />

      {/* 1 — Hero */}
      <section className="hero">
        <div className="hero__inner">
          <p className="eyebrow">YouSourceful — by Mokshly</p>
          <h1 className="display-xl mb-md">Strengthen what stays yours.</h1>
          <p className="lede" style={{ marginBottom: 24 }}>
            As the world changes, the strengths that carry you are the human ones — how clearly
            you see, how well you decide, and how you adapt, connect, and recover.
          </p>
          <p className="lede">
            YouSourceful is a platform that helps you understand yourself, practice in everyday
            moments, and strengthen these capabilities over time.
          </p>
          <div className="cta-block">
            <a href={SIGNUP_URL} className="btn">Begin now →</a>
            <p className="cta-note">Your first 60 days are free. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* 2 — What you strengthen: the six capabilities */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">What you strengthen</p>
          <h2 className="display-lg mb-md">Six strengths that carry you through anything.</h2>
          <p className="lede mb-md">
            The human capabilities that matter most as the world changes — and grow stronger with
            practice.
          </p>
          <div className="grid grid--2 mt-lg">
            {CAPABILITIES.map(([Icon, title, body]) => (
              <div key={title} className="card card--compact">
                <span style={{ color: 'var(--accent)', display: 'inline-flex', marginBottom: 8 }}>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — How it works */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">How it works</p>
          <h2 className="display-lg mb-md">A simple rhythm you can keep.</h2>
          <p className="lede mb-md">
            Not a course to finish — a practice that fits a real life, a few minutes at a time.
          </p>
          <div className="grid grid--2 mt-lg">
            {STEPS.map(([label, body], i) => (
              <div key={label} className="card card--compact">
                <p className="eyebrow" style={{ marginBottom: 8 }}>{`0${i + 1} · ${label}`}</p>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Your Companion (reflect on your own) */}
      <section className="section section--raised">
        <div className="container--read">
          <p className="eyebrow">Reflect on your own</p>
          <h2 className="display-lg mb-md">Your Companion — a private conversation.</h2>
          <p className="lede">
            Bring whatever's on your mind — a decision you're weighing, a conversation that went
            sideways, or a feeling you can't quite name. Your Companion listens, asks a few good
            questions, and helps you see it more clearly.
          </p>
        </div>
      </section>

      {/* 5 — Your Foursome (practice with others) */}
      <section className="section">
        <div className="container--read">
          <p className="eyebrow">Reflect together</p>
          <h2 className="display-lg mb-md">Your Foursome — four people, sharing the journey.</h2>
          <p className="lede">
            A Foursome is a small group of four who meet regularly to reflect on their practice
            and share what it's teaching them. Everyone practices on their own — the Foursome is
            simply a space to listen, be heard, and learn from one another. It's entirely optional:
            many start solo and join when the time feels right.
          </p>
        </div>
      </section>

      {/* 6 — Final invitation */}
      <section className="section section--raised">
        <div className="container--read">
          <h2 className="display-lg mb-md">Begin where you are.</h2>
          <p className="lede">Start with one moment.</p>
          <div className="cta-block">
            <a href={SIGNUP_URL} className="btn">Begin now →</a>
            <p className="cta-note">Your first 60 days are free. No credit card required.</p>
          </div>
        </div>
      </section>
    </>
  );
}
