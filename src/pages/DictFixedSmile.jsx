import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a fixed smile mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fixed smile stays at exactly the same intensity without natural variation, which is almost always a sign the expression is being performed rather than genuinely felt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a fixed smile considered less genuine than a varying one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine positive emotion naturally rises, peaks and fades, while a perfectly constant smile suggests the expression is being deliberately maintained rather than arising from real feeling.',
      },
    },
  ],
}

export default function DictFixedSmile() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Fixed Smile</h1>
        <p className="de-lead">
          A fixed smile is an expression that remains at exactly the same intensity for an
          unusually long period, without the natural rising, holding and fading pattern that
          characterises a genuine spontaneous smile. Authentic smiles are dynamic, building
          gradually as positive emotion develops, peaking briefly, and then fading at a similarly
          natural pace as the feeling passes, whereas a fixed smile tends to be held deliberately at
          a constant level, almost like a mask maintained for the duration of a photograph, a
          greeting, or a social obligation. This static quality is one of the clearer indicators that
          a smile is being consciously performed rather than experienced, since genuinely felt
          positive emotion is very difficult to sustain at a perfectly constant intensity without the
          small natural fluctuations that come from real feeling ebbing and flowing. A fixed smile is
          especially common in situations where social convention requires appearing pleasant
          regardless of internal emotional state, such as customer service interactions, formal
          photographs or polite but disengaged social exchanges, making it one of the more reliable
          signals that a pleasant expression is not being genuinely felt.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A smile held at a constant, unchanging intensity for longer than feels natural</li>
          <li>The absence of the natural rising, peaking and fading pattern of a genuine reaction</li>
          <li>The expression appearing in situations requiring social politeness regardless of genuine feeling</li>
          <li>The smile ending abruptly rather than fading gradually once the social obligation passes</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A fixed smile maintained throughout a formal photograph or a brief social greeting is
          common and does not necessarily indicate anything beyond ordinary social politeness. The
          signal becomes more meaningful when a fixed, unchanging smile persists throughout a longer
          conversation that would normally be expected to produce some natural variation in
          expression, since that sustained flatness suggests the pleasant expression is being
          maintained deliberately rather than genuinely felt.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/duchenne-smile" className="de-related-chip">Duchenne Smile</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/facial-symmetry-check" className="de-related-chip">Facial Symmetry Check</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Telling a fixed smile from a genuine one is one of the most fact checked myths in body
            language. Our guide covers what the science actually says.
          </p>
          <Link to="/guides/myths" className="de-cta-btn">
            Read the Body Language Myths Debunked Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
