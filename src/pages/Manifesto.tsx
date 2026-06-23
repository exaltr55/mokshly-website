import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/** Each stanza is a separate beat in the manifesto. Preserved verbatim
 *  from the build spec. Line breaks within a stanza render as <br>. */
const STANZAS: (string | string[])[] = [
  'We the humans are entering one of the most consequential transitions in history.',
  ['Artificial intelligence is not coming.', 'It is here.'],
  [
    'And it is reshaping how we live,',
    'how we work,',
    'how we think,',
    'how we relate to one another,',
    'and how we interact with machines.',
  ],
  ['Jobs will change.', 'Titles will disappear.', 'Entire industries will reorganize.'],
  ['But the deepest shift will not be economic.', 'It will be human.'],
  [
    'The meaning of work is evolving.',
    'The meaning of contribution is changing.',
    'Even our understanding of identity — what it means to be capable, relevant, and valuable — is being redefined.',
  ],
  ['This transformation will not gently adjust humanity.', 'It will shake us.'],
  'And the data already tells us something important.',
  'We are not ready.',
  ['Burnout is rising.', 'Attention is fragmented.', 'Anxiety is increasing.', 'Trust is declining.'],
  [
    'At the very moment we are building systems more powerful than ourselves,',
    'we are not strengthening ourselves to steward that power.',
  ],
  'We are scaling intelligence faster than we are scaling awareness.',
  'And that imbalance is dangerous.',
  [
    'Because intelligence without maturity creates instability.',
    'Capability without depth creates fragmentation.',
    'Acceleration without grounding creates fracture.',
  ],
  'What we need now is not resistance to technology.',
];

const STANZAS_2: (string | string[])[] = [
  [
    'Human sustainability is the capacity to remain whole while everything changes —',
    'to build capability while staying grounded in purpose,',
    'to grow in power without losing depth,',
    'and to navigate transformation without forgetting who we are.',
  ],
  [
    'It is the ability to endure rapid change',
    'without losing clarity, integrity, or connection to what matters most.',
  ],
  ['In a world that scales intelligence,', 'we must scale inner steadiness.'],
  ['Human sustainability is not a luxury.', 'It is infrastructure.'],
  [
    'Because the coming years will determine whether we remain the stewards of this transformation —',
    'or are carried by forces we no longer understand.',
  ],
  ['Humanity has endured disruption before.', 'We have adapted.', 'We have reorganized.', 'We have rebuilt.'],
  'Resilience lives within us.',
  ['But what is different now', 'is the speed and scale of change.'],
  'We are no longer building tools that extend human effort.',
  [
    'We are building systems that can operate without us —',
    'systems that learn, adapt, decide, and execute at scale.',
  ],
  [
    'Entire categories of work once considered uniquely human',
    'can now be replicated, augmented, or replaced by intelligent systems.',
  ],
  'Which is precisely why human infrastructure must rise alongside technological infrastructure.',
  [
    'If we are engineering increasingly intelligent systems,',
    'we must also strengthen the humans who live and work within them.',
  ],
  'Human sustainability is not automatic.',
  ['Like all infrastructure,', 'it must be designed, built, and maintained.'],
  ['And to endure,', 'it must be built on fundamentals.'],
  ['Not complexity.', 'Not trends.', 'Not symbolic gestures.'],
  [
    'Every human being needs structured support',
    'to sustain the capacities that keep us steady and whole.',
  ],
  'A human sustainability system must strengthen our ability:',
  [
    'To cultivate awareness — the space from which clarity emerges.',
    'To breathe with intention — steadying our internal rhythms.',
    'To move with presence — restoring balance and vitality.',
    'To speak consciously — shaping meaning and connection.',
    'To live in alignment — with our deeper nature, through life\'s seasons.',
  ],
  'These are not productivity techniques.',
  'They are the foundations of human stability.',
  [
    'No machine can cultivate our awareness.',
    'No system can breathe with intention for us.',
    'No algorithm can move our body.',
    'No intelligence can choose our words or align us with our own nature.',
  ],
  'They require our participation.',
  [
    'And for a system to endure —',
    'to remain steady as the world evolves —',
    'it must be anchored in principles that outlast the moment.',
  ],
  'The system must be:',
  [
    'Grounded in timeless wisdom.',
    'Essential to human functioning.',
    'Accessible to every person.',
    'Practiced in daily life.',
    'Structurally embedded — not treated as an afterthought.',
  ],
  'Because human sustainability cannot be restored through inspiration or a weekend seminar.',
  ['It is rebuilt through fundamentals.', 'And it must be delivered at scale.'],
  [
    'This is both an opportunity and a responsibility —',
    'for individuals, and even more so for organizations.',
  ],
  ['Corporations today shape more than markets.', 'They shape the environments where millions work and live.'],
  'They are building the systems driving this transformation.',
  'And those systems depend on sustainable humans to steward them.',
  [
    'You cannot architect increasing complexity with people who are fragmenting.',
    'You cannot scale intelligence with teams in chronic depletion.',
    'You cannot entrust critical decisions to minds without clarity or steadiness.',
  ],
  [
    'When human sustainability is built into the fabric of work as infrastructure, not added as programming,',
    'performance strengthens.',
    'Trust deepens.',
    'Adaptability expands.',
    'Innovation becomes more durable.',
  ],
  'This is the pairing this moment requires:',
  ['Intelligence with awareness.', 'Capability with depth.', 'Acceleration with steadiness.'],
  ['This is not compliance.', 'It is not another wellness initiative.'],
  'It is a strategic advantage aligned with the greater good.',
  [
    'Institutions educating the next generation',
    'and governments shaping the frameworks of society',
    'also play a decisive role.',
  ],
  [
    'Together with corporations,',
    'they shape the conditions in which people learn, contribute, and evolve —',
    'and how this era of intelligence unfolds.',
  ],
  ['Because intelligence without sustainable humans', 'cannot endure.'],
  ['This is how we catch up with the speed of change.', 'And bring humans back to the center of this revolution.'],
  ['Sustainable humans build sustainable institutions.', 'Sustainable institutions shape sustainable societies.'],
  ['The AI revolution will continue —', 'rapidly, relentlessly, irreversibly.'],
  [
    'The question is whether we will strengthen the world within us',
    'at the same pace.',
  ],
  [
    'The future is being shaped now —',
    'in code,',
    'in classrooms,',
    'in boardrooms,',
    'and in the daily rhythms we choose to normalize.',
  ],
  ['What we build in this decade', 'will echo for centuries.'],
  [
    'And it will be shaped not only by the systems we design —',
    'but by the steadiness of the humans within them.',
  ],
  ['In how we show up.', 'In what we practice.', 'In what we quietly normalize within our teams, families, and communities.'],
  'This is our moment.',
  ['Not to fear what is coming —', 'but to strengthen what is enduring.'],
  ['To become steadier as the world accelerates.', 'Clearer as complexity increases.', 'More aligned as power expands.'],
  ['Let us rise —', 'not in dominance, but in depth.', 'Not in speed, but in steadiness.', 'Not in power alone, but in wisdom.'],
  ['And let us seize this opportunity —', 'available to all of us, today.'],
  'The future will carry the imprint of the humans who shape it.',
  'Let it carry ours.',
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

        {STANZAS.slice(1).map((s, i) => <Stanza key={`a-${i}`} s={s} />)}

        <div className="stanza">
          <p>
            We need{' '}
            <strong className="keyword">human sustainability</strong>.
          </p>
        </div>

        {STANZAS_2.slice(0, -1).map((s, i) => <Stanza key={`b-${i}`} s={s} />)}

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
            If this resonates with what you are doing at your enterprise,
            we welcome the conversation.
          </p>
          <Link to="/contact#enterprise" className="btn">
            Schedule a Leadership Conversation
          </Link>
          <p className="mt-md">
            <Link to="/our-offering" className="link-arrow">
              Learn about Our Offering →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
