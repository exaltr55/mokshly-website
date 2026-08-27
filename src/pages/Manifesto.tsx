import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/** Each stanza is a separate beat in the manifesto. Line breaks within a
 *  stanza (arrays) render as separate lines. */
const STANZAS: (string | string[])[] = [
  ['Artificial intelligence is not coming.', 'It is here.'],
  [
    'And it is reshaping how we live,',
    'how we work,',
    'how we think,',
    'how we relate to one another,',
    'and how we interact with machines.',
  ],
  ['Jobs will change.', 'Roles will be rewritten.', 'Entire industries will reorganize.'],
  ['But the deepest shift will not be economic.', 'It will be human.'],
  'The meaning of work is evolving.',
  'The meaning of contribution is changing.',
  'Even our understanding of what it means to be capable, relevant, and valuable is being redefined.',
  'And this transformation is moving faster than most of us can absorb.',
  'At the very moment we are building increasingly capable machines, we must ask:',
  'Are we strengthening the humans who will work alongside them and steward what comes next?',
  'We are scaling intelligence faster than we are strengthening human capability.',
  'That imbalance matters.',
  [
    'Because intelligence without judgment creates risk.',
    'Acceleration without adaptability creates disruption.',
    'Capability without awareness can take us somewhere we never intended to go.',
  ],
  ['The answer is not resistance to technology.', 'It is to strengthen what is fundamentally human.'],
  'Awareness. Judgment. Adaptability. Collaboration. Resilience. Sustainable well-being.',
  ['These capabilities have always mattered.', 'In the age of AI, they become foundational.'],
  'And beneath them sits something even more fundamental:',
  'Awareness — the space in which we can see clearly enough to choose intentionally rather than simply react.',
  [
    'No machine can cultivate our awareness for us.',
    'No algorithm can make us more grounded, more resilient, or more intentional.',
  ],
  ['Technology can support us.', 'But strengthening these capabilities requires our participation.'],
  'Humanity has navigated disruption before.',
  ['We have adapted.', 'We have reorganized.', 'We have rebuilt.'],
  'What is different now is the speed, scale, and continuity of change.',
  'We are building systems that can learn, reason, decide, create, and act alongside us.',
  'As technological capability rises, human capability must rise with it.',
  [
    'And human capability cannot be left to chance.',
    'It must be strengthened deliberately, continuously, and at scale.',
  ],
  [
    'Not through another program that begins and ends.',
    'Not through inspiration that fades.',
    'But through understanding, practice, reflection, and measurement woven into how we live and work.',
  ],
];

const STANZAS_AFTER: (string | string[])[] = [
  [
    'This is both an opportunity and a responsibility.',
    'For individuals.',
    'For institutions.',
    'And especially for organizations whose decisions shape how millions of people experience this transformation.',
  ],
  [
    'Organizations are investing billions in technological infrastructure for the age of AI.',
    'The human infrastructure deserves equal intention.',
  ],
  [
    'Because you cannot navigate increasing complexity without judgment.',
    'You cannot absorb continuous change without adaptability.',
    'You cannot build enduring institutions without collaboration, resilience, and well-being.',
    'And you cannot exercise any of these fully without awareness.',
  ],
  'When foundational human capabilities strengthen, something larger becomes possible.',
  [
    'People become better equipped to navigate change.',
    'Teams make better decisions.',
    'Organizations become more adaptable.',
    'Technology and human capability begin to reinforce one another.',
  ],
  'Strong humans build strong institutions.',
  'And strong institutions can help shape a future in which technological progress and human progress move together.',
  [
    'This is the opportunity before us.',
    'Not to compete with machines at what machines increasingly do well.',
    'But to strengthen what is distinctly human.',
  ],
  [
    'To become more aware as intelligence expands.',
    'More adaptable as change accelerates.',
    'More discerning as choices multiply.',
    'More collaborative as boundaries shift.',
    'More resilient through uncertainty.',
    'More sustainable in how we live and work.',
  ],
  [
    'The AI revolution will continue.',
    'The question is what kind of humans — and what kind of institutions — will grow alongside it.',
  ],
  [
    'The future is being shaped now:',
    'in code,',
    'in classrooms,',
    'in boardrooms,',
    'and in the choices we make every day.',
  ],
  'What we build in this decade may echo for generations.',
  [
    'And it will be shaped not only by the intelligence of the systems we create —',
    'but by the awareness, judgment, and humanity of the people who create and steward them.',
  ],
  'This is our moment.',
  ['Not to fear what is coming.', 'But to strengthen what is enduring.'],
  [
    'To become steadier as the world accelerates.',
    'Clearer as complexity increases.',
    'More intentional as capability expands.',
  ],
  [
    'Let us rise —',
    'not in dominance, but in depth.',
    'Not in speed alone, but in wisdom.',
    'Not by becoming more like the machines we build —',
    'but by strengthening what is distinctly human.',
  ],
  'The future will carry the imprint of the humans who shape it.',
];

function Stanza({ s }: { s: string | string[] }) {
  if (typeof s === 'string') {
    return (
      <div className="stanza">
        <p>{s}</p>
      </div>
    );
  }
  return (
    <div className="stanza">
      {s.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

export default function Manifesto() {
  return (
    <>
      <SEO
        title="The Mokshly Manifesto"
        description="We the humans are entering one of the most consequential transitions in history."
      />

      <article className="manifesto" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h1>The Mokshly Manifesto</h1>

        <div className="stanza" style={{ marginTop: 48 }}>
          <p>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.45em',
                fontWeight: 500,
                letterSpacing: '-0.005em',
                marginBottom: 8,
              }}
            >
              We the humans
            </span>
            are entering one of the most consequential
            <br />
            transitions in history.
          </p>
        </div>

        {STANZAS.map((s, i) => <Stanza key={`a-${i}`} s={s} />)}

        <div className="stanza">
          <p>
            Human capability must become{' '}
            <strong className="keyword">infrastructure</strong>.
          </p>
        </div>

        {STANZAS_AFTER.map((s, i) => <Stanza key={`b-${i}`} s={s} />)}

        <div className="stanza">
          <p>
            Let it carry ours.
            <span
              style={{
                display: 'block',
                marginTop: 8,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.45em',
                fontWeight: 500,
                letterSpacing: '-0.005em',
              }}
            >
              Fully human.
            </span>
          </p>
        </div>

        <div className="signature" style={{ marginTop: 48 }}>
          <p>Anuj Kanish<br />Founder, Mokshly</p>
        </div>
      </article>

      <section className="section section--airy section--raised">
        <div className="container--read center">
          <p className="eyebrow">From Words to Work</p>
          <h2 className="display-lg mb-md">Let's begin the work.</h2>
          <p className="lede mb-md" style={{ margin: '0 auto 32px' }}>
            If this resonates with what your organization is navigating, we
            welcome the conversation.
          </p>
          <Link to="/contact#enterprise" className="btn">
            Schedule a Leadership Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
