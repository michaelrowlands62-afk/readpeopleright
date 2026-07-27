import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does steepling mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Steepling is pressing the fingertips of both hands together with the palms apart, forming a steeple shape, and it typically signals confidence, authority and a settled internal decision.",
      },
    },
    {
      '@type': 'Question',
      name: "Does the height of a steeple change its meaning?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, a higher steeple held near the chin generally signals stronger confidence than a lower one held near the waist, though both versions reflect the same basic authority signal.",
      },
    },
  ],
}

export default function DictSteepling() {
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
        <h1 className="de-title">Steepling</h1>
        <p className="de-lead">
          Steepling is the gesture of pressing the fingertips of both hands together while keeping the palms apart, forming a shape that resembles a church steeple, and it is one of the most widely recognised nonverbal signals of confidence and authority. The gesture is typically held in front of the chest or below the chin, and it tends to appear when a person feels genuinely certain about what they are saying or confident in a decision they have already made. Because steepling requires a relaxed, controlled hand position rather than any nervous fidgeting, it stands in clear contrast to stress related hand gestures like wringing or interlacing, and it is generally regarded as a positive rather than a defensive signal. Steepling is especially common among senior professionals, negotiators and decision makers, since the gesture is closely associated with a settled, authoritative mindset, often appearing at the exact moment someone has finished carefully considering a proposal and reached a firm internal conclusion. A higher steeple held near the chin generally signals stronger confidence than a lower one held near the waist, and the gesture is frequently followed by a clear, decisive statement once the person is ready to share their conclusion out loud.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Fingertips of both hands pressed together with the palms held apart</li>
          <li>The steeple held near the chest or below the chin rather than lower down</li>
          <li>The gesture appearing right after a proposal has been carefully considered</li>
          <li>A higher steeple generally signalling stronger confidence than a lower one</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Steepling appearing right after someone finishes listening to a proposal is a strong signal that they have reached a firm internal conclusion and feel confident about it. The same gesture appearing throughout an entire conversation, regardless of what is being discussed, is less meaningful and may simply be a habitual resting hand position for that person. Watching for the specific moment steepling appears, particularly right before a decisive statement, gives a much clearer read on genuine confidence and authority.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-stroking" className="de-related-chip">Chin Stroking</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
          <Link to="/dictionary/elbow-placement" className="de-related-chip">Elbow Placement</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A settled, confident hand position like this one often signals a decision has already been made. Our guide covers this alongside the full range of negotiation signals.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
