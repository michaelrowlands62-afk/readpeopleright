import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a fist pump mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fist pump is a contained pulling motion of a clenched fist toward the body that signals private celebration or genuine satisfaction with an outcome, often appearing almost involuntarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a fist pump always a genuine emotional reaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A contained fist pump performed privately at the moment of good news is usually genuine, while a larger, more theatrical version performed for an audience may carry more deliberate performance.',
      },
    },
  ],
}

export default function DictFistPump() {
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
        <span className="de-category">Emotion Signals</span>
        <h1 className="de-title">Fist Pump</h1>
        <p className="de-lead">
          A fist pump is a contained, controlled pulling motion of a clenched fist toward the
          body, typically performed close to the chest or waist rather than raised high overhead,
          and it signals private celebration or genuine satisfaction with an outcome. Unlike a
          large, expansive celebratory gesture aimed at an audience, the contained fist pump tends
          to be a more personal, almost involuntary release of positive emotion, appearing at the
          exact moment someone learns of good news or successfully completes something they cared
          about. The gesture draws on the same underlying physical mechanism as other emotional
          release behaviours, where built up anticipation or effort finds a small physical outlet
          the instant it resolves favourably. Because the contained fist pump is brief, modest in
          scale and often performed almost unconsciously, it tends to be one of the more genuine and
          trustworthy indicators of authentic positive emotion, since it is rarely performed for an
          audience in the way a larger, more theatrical celebratory gesture might be, making it a
          reliable signal that a person's satisfaction with an outcome is real rather than
          exaggerated for others to see.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A contained, controlled pulling motion of a clenched fist toward the body</li>
          <li>The gesture appearing at the exact moment good news or a positive outcome is confirmed</li>
          <li>A modest scale distinct from a larger, more theatrical celebratory gesture aimed at an audience</li>
          <li>The behaviour appearing almost involuntarily rather than as a performed reaction</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A fist pump appearing the instant someone privately receives good news, such as reading a
          message or seeing a result, is a strong and largely involuntary signal of genuine
          satisfaction. The same gesture performed in a larger, more exaggerated form specifically in
          front of an audience may carry more performance and social signalling alongside the genuine
          emotion. The scale and privacy of the moment in which the gesture appears helps distinguish
          authentic personal celebration from a more deliberate display intended for others to
          notice.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/duchenne-smile" className="de-related-chip">Duchenne Smile</Link>
          <Link to="/dictionary/genuine-surprise" className="de-related-chip">Genuine Surprise</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Genuine positive emotion is one of the quiet markers of people who project real
            confidence. Our guide covers the nonverbal habits of successful people in depth.
          </p>
          <Link to="/guides/success-body-language" className="de-cta-btn">
            Read the Body Language Secrets of Successful People Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
