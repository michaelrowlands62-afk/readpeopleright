import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does clenched fists mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clenched fists reflect strong internal tension, which can signal suppressed anger or strong determination depending on the facial expression, tone and posture accompanying the gesture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if clenched fists signal anger or determination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clenched fists paired with a tense jaw, raised voice or forward lean generally suggest suppressed anger, while the same gesture paired with calm focus more likely reflects determination.',
      },
    },
  ],
}

export default function DictClenchedFists() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="de-page">
      <Link to="/dictionary" className="de-back-link">← Back to Dictionary</Link>

      <header className="de-header">
        <span className="de-category">Stress Signals</span>
        <h1 className="de-title">Clenched Fists</h1>
        <p className="de-lead">
          Clenched fists occur when a person tightens their hands into a closed grip, often without
          conscious awareness that they are doing so, and the signal reflects one of the body's most
          direct physical expressions of internal tension. The gesture is produced by the same
          physiological arousal that underlies the wider stress response, in which muscles
          throughout the body tighten in preparation for action, and the hands are frequently among
          the first and most visible places this tension becomes apparent. Clenched fists can
          reflect suppressed anger, where the tightening substitutes for a physical action that
          social norms prevent someone from actually taking. They can equally reflect strong
          determination or resolve, where the same muscular tension accompanies focused effort rather
          than hostility. Distinguishing between these two very different underlying states depends
          heavily on the surrounding signals present at the same time, including facial expression,
          vocal tone and overall posture, since the fists themselves communicate intensity of feeling
          without specifying its exact nature.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Hands tightening into a closed grip, often without the person consciously noticing</li>
          <li>The gesture appearing suddenly in response to a specific comment or situation</li>
          <li>Clenched fists paired with a tense jaw or forward lean suggesting suppressed anger</li>
          <li>The same gesture paired with focused calm suggesting determination rather than hostility</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Clenched fists appearing alongside a raised voice, a reddening face or forward leaning
          posture generally point toward suppressed anger that is being held back rather than
          expressed openly. The same clenched fists appearing during a calm, focused moment, such as
          before an important presentation or a competitive event, more likely reflect concentrated
          determination rather than any hostility at all. Because the gesture alone cannot
          distinguish between these two states, it should always be read together with facial
          expression, vocal tone and the overall emotional register of the surrounding interaction
          rather than in isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/cowering" className="de-related-chip">Cowering</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Clenched fists are a classic escalation signal during conflict. Our guide covers this
            alongside the full range of body language seen during arguments.
          </p>
          <Link to="/guides/arguments" className="de-cta-btn">
            Read the Reading Body Language in Arguments Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
