import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a downward palm gesture mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A downward palm gesture, where the hand faces toward the floor while speaking, signals authority and a desire to control, assert or suppress rather than invite open discussion.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a downward palm different from an open palm gesture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An open, upward facing palm signals honesty and openness, while a downward palm communicates a pressing down or containing quality often associated with authority and control.',
      },
    },
  ],
}

export default function DictDownwardPalm() {
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
        <span className="de-category">Confidence Signals</span>
        <h1 className="de-title">Downward Palm</h1>
        <p className="de-lead">
          A downward palm gesture occurs when a person holds their hand or hands with the palm
          facing toward the floor while speaking or gesturing, and it is widely recognised as a
          signal associated with authority, control and a desire to assert or suppress rather than
          invite discussion. This contrasts directly with an open, upward facing palm, which tends
          to signal honesty and openness, since the downward orientation visually and
          psychologically communicates a pressing down or holding steady quality, similar to
          physically calming or containing something. The gesture is frequently used deliberately by
          people in positions of authority when making a firm statement, closing down a debate or
          attempting to project calm control over a tense situation, since the downward motion
          carries an implicit message of finality rather than openness to further discussion. Because
          the downward palm is a gesture that can be consciously adopted as a deliberate authority
          technique, its presence is often as informative about how a person wants to be perceived as
          it is about their spontaneous underlying emotional state.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The palm facing down toward the floor rather than upward while speaking</li>
          <li>The gesture accompanying a firm, closing statement rather than an open question</li>
          <li>A pressing or patting motion that suggests calming or containing the situation</li>
          <li>The behaviour appearing specifically when someone wants to assert control or finality</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A downward palm gesture used briefly to calm a heated discussion generally signals a
          genuine attempt to de escalate and regain control of the room. The same gesture used
          consistently and forcefully throughout a conversation, particularly when paired with a
          raised voice or interruption, is more likely to signal an attempt to dominate or shut down
          discussion rather than to calm it. Comparing the gesture to the surrounding tone and intent
          of the conversation is essential to distinguishing genuine composure from an assertion of
          dominance.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/closed-eyes-during-speech" className="de-related-chip">Closed Eyes During Speech</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The downward palm is a classic authority gesture used by people in positions of power.
            Our guide covers this alongside the full range of dominance and status signals.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
