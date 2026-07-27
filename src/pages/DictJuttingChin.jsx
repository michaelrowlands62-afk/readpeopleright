import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does jutting chin mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Jutting chin is the forward and slightly upward push of the chin that exposes the throat, and it typically signals defiance, assertiveness or readiness for confrontation.",
      },
    },
    {
      '@type': 'Question',
      name: "How is jutting chin different from a normal confident chin raise?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A simple chin raise reflects general confidence, while jutting chin adds a deliberate forward push that carries a more pointed, challenging quality, often just before a firm response.",
      },
    },
  ],
}

export default function DictJuttingChin() {
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
        <h1 className="de-title">Jutting Chin</h1>
        <p className="de-lead">
          Jutting chin describes the deliberate pushing forward and slight upward tilt of the chin, a posture that exposes more of the throat than usual and visibly extends the lower part of the face toward the other person. This gesture is widely recognised as a signal of defiance and assertiveness, and it frequently appears in the moments just before someone stands their ground, delivers a firm response or enters a confrontation they intend to win rather than avoid. Because exposing the throat is, in evolutionary terms, a vulnerable position, jutting the chin forward anyway communicates a form of confident challenge, essentially signalling that the person does not feel threatened enough to protect that vulnerable area. The gesture is often accompanied by a widened stance, squared shoulders and direct, unblinking eye contact, all of which combine to project dominance and readiness. Jutting chin differs from a simple confident chin raise in both intensity and context, since the forward push adds a pointed, almost challenging quality that a relaxed, lifted chin alone does not carry, making it a particularly strong signal when it appears during tense or competitive exchanges.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The chin pushed noticeably forward and slightly upward, exposing more of the throat</li>
          <li>The gesture paired with squared shoulders and a widened, planted stance</li>
          <li>Direct, unblinking eye contact held steadily on the other person</li>
          <li>The posture appearing in the moments just before a firm response or confrontation</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Jutting chin appearing right before someone delivers a firm rejection or stands their ground in an argument is a strong signal of genuine confidence and readiness to confront the situation directly. The same gesture appearing in a casual, low stakes conversation is less meaningful and may simply reflect a person's habitual resting posture. Watching for the combination of the forward chin with squared shoulders and steady eye contact gives the clearest read on whether real defiance is being signalled.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/gravity-defying-gestures" className="de-related-chip">Gravity Defying Gestures</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A jutting chin is one of the most direct signals of natural confidence and readiness to confront a situation. Our guide covers this alongside the full range of authority signals.
          </p>
          <Link to="/guides/alpha-body-language" className="de-cta-btn">
            Read the Alpha Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
