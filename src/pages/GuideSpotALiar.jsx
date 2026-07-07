import { Link } from 'react-router-dom'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Attraction Signals Explained',
    to: '/guides/attraction-signals',
    accent: 'pink',
    description: 'How to tell if someone is genuinely interested. The 12 most reliable attraction signals and what they really mean.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language — fact checked. The most common misconceptions explained.',
  },
]

export default function GuideSpotALiar() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">How to Spot a Liar: What Body Language Really Reveals</h1>
        <p className="ga-intro">
          Detecting deception is one of the most sought-after skills in human psychology. From FBI
          interrogators to relationship counsellors, the ability to read the subtle signals that
          reveal dishonesty can be genuinely life-changing. But the truth about spotting liars is
          more nuanced than most people realise — and most of what you think you know is probably
          wrong.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">The Biggest Myth About Lying</h2>
        <p className="ga-text">
          The most common belief — that liars avoid eye contact — is one of the least reliable
          signals of deception. Research consistently shows that practised liars often make more
          eye contact than truthful people, precisely because they know this myth and compensate
          for it. Relying on any single signal to detect deception is a fast route to false
          conclusions.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Why Clusters Matter</h2>
        <p className="ga-text">
          Professional deception detectors — whether psychologists, investigators or trained
          interviewers — never rely on one signal. They look for clusters. A cluster is a group of
          signals appearing together that collectively point in the same direction. One nervous
          gesture means nothing. Three or four appearing simultaneously in response to a specific
          question means something worth paying attention to. The key question is always: what
          changed? If someone's body language shifts noticeably when a particular topic arises,
          that shift is more meaningful than any individual signal.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Most Reliable Deception Signals</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Micro-Expressions</h3>
          <p className="ga-text">
            Micro-expressions are involuntary facial expressions lasting a fraction of a second —
            typically between 1/25th and 1/5th of a second. They occur before the person has time
            to consciously mask their true emotion. Common micro-expressions that may indicate
            deception include a flash of contempt, a brief expression of fear, or a flicker of
            disgust quickly replaced by a neutral or smiling face. They require training to spot
            reliably but are one of the most scientifically validated indicators of concealed
            emotion.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Speech and Body Contradiction</h3>
          <p className="ga-text">
            One of the clearest deception signals is when what someone says and what their body
            does contradict each other. Nodding while saying no. Shrugging while claiming
            certainty. Smiling while describing something that should feel sad. These
            contradictions happen because conscious speech and unconscious body language are
            processed differently in the brain — and the body often tells the truth even when the
            mouth does not.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Self-Soothing Gestures Under Pressure</h3>
          <p className="ga-text">
            When someone is being deceptive, the stress of maintaining the lie triggers physical
            discomfort. The body responds with self-soothing gestures — touching the face, stroking
            the neck, rubbing the hands together, pulling at clothing. These gestures are not proof
            of lying but they are reliable indicators of stress. The crucial question is whether
            these gestures appear specifically in response to certain topics or questions, or
            whether they are present throughout the conversation regardless of subject.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Throat Clearing and Swallowing</h3>
          <p className="ga-text">
            The stress response associated with deception can cause physical changes in the throat
            and mouth — dryness, tension and a need to clear the throat or swallow. Frequent throat
            clearing or a noticeable dry swallow immediately before or after answering a question
            can be a signal worth noting, particularly when it does not occur at other points in
            the conversation.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Timing and Freeze Responses</h3>
          <p className="ga-text">
            Truthful answers tend to come naturally and at a consistent pace. Deceptive answers may
            be preceded by an unusually long pause — the person is constructing rather than
            recalling. Alternatively a very rapid answer to a sensitive question can also be
            significant — sometimes people rehearse their lie and deliver it too quickly compared
            to their normal speech pattern. A sudden physical freeze or reduction in movement when
            asked a specific question is also worth noting — the body is literally holding itself
            still under scrutiny.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">What NOT to Read as Deception</h2>
        <p className="ga-text">
          Nervousness is not the same as deception. Many honest people become visibly anxious when
          questioned — particularly in high stakes situations like job interviews, medical
          appointments or difficult conversations with partners. Anxiety looks almost identical to
          deception in terms of body language signals. The difference is context. If someone is
          generally nervous throughout an interaction their baseline behaviour is anxious —
          individual signals need to be read against that baseline rather than in isolation.
          Similarly cultural differences mean that behaviours common in one culture — avoiding eye
          contact as a sign of respect, for example — may be misread as deceptive by someone from a
          different background.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Baseline Principle</h2>
        <p className="ga-text">
          The most important concept in deception detection is the baseline. Before you can
          identify deceptive body language you need to know what normal looks like for that
          specific person. Everyone has different habits, tics and natural behaviours. What looks
          suspicious in one person is completely ordinary for another. Establish a baseline by
          observing someone in neutral, non-threatening conversation before moving to topics where
          deception might occur. Changes from their baseline are meaningful. Behaviour that is
          consistent throughout tells you nothing.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Deception Detection Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            The best way to develop your ability to spot deception is through practice. Our
            interactive quiz puts your skills to the test with real body language scenarios.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Spot a Liar')}`} className="ga-cta-btn">
            Play Spot a Liar — Test Your Skills
          </Link>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Learn More</h2>
        <div className="ga-related-grid">
          {RELATED_GUIDES.map((guide) => (
            <Link key={guide.to} to={guide.to} className={`ga-related-card ga-related-card--${guide.accent}`}>
              <div className="ga-related-accent" />
              <div className="ga-related-body">
                <h3 className="ga-related-title">{guide.title}</h3>
                <p className="ga-related-desc">{guide.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
