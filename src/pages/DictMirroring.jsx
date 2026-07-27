import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does mirroring mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mirroring is the largely unconscious copying of another person's posture, gestures or speech pace, and it is widely regarded as one of the strongest signs of genuine rapport.",
      },
    },
    {
      '@type': 'Question',
      name: "How can you tell if mirroring is genuine or deliberate?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Genuine mirroring builds gradually as a conversation develops, while deliberate mirroring often appears rigid or instant, and testing it by changing your posture can reveal which one is occurring.",
      },
    },
  ],
}

export default function DictMirroring() {
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
        <span className="de-category">Attraction Signals</span>
        <h1 className="de-title">Mirroring</h1>
        <p className="de-lead">
          Mirroring is the largely unconscious copying of another person's posture, gestures or general body language during a conversation, and it is widely regarded as one of the strongest and most reliable signs of genuine rapport and connection between two people. When mirroring occurs naturally, it happens without either person deliberately deciding to imitate the other, and it tends to emerge gradually as a conversation builds momentum and both people become more comfortable and engaged with each other over time. The behaviour can appear in countless small ways, including matching someone's crossed legs, adopting a similar hand position, leaning in a similar direction or even beginning to speak at a similar pace and volume. Because mirroring reflects a deep, largely automatic social bonding mechanism, it is generally considered far more meaningful when it happens spontaneously than when someone consciously and deliberately copies another person's movements, which can come across as insincere or even unsettling if noticed. A useful way to test whether mirroring is genuine is to change your own posture partway through a conversation and see whether the other person naturally follows, since spontaneous, unprompted mirroring in response is a particularly strong indicator of real rapport.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Matching posture, gestures or hand position without conscious awareness</li>
          <li>Speech pace or volume gradually converging between two people</li>
          <li>The mirroring building gradually as a conversation develops rather than appearing instantly</li>
          <li>The other person naturally following a deliberate change in your own posture</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Mirroring that develops naturally over the course of a genuinely engaging conversation is a strong signal of real rapport and connection between the two people involved. Mirroring that appears instantly and rigidly, especially if it seems deliberate or forced, is less likely to reflect genuine connection and may instead come across as awkward or insincere. Testing the mirror by changing your own posture and observing whether the other person naturally follows remains one of the more reliable ways to confirm that genuine rapport is present.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/hair-touching" className="de-related-chip">Hair Touching</Link>
          <Link to="/dictionary/deliberate-touch" className="de-related-chip">Deliberate Touch</Link>
          <Link to="/dictionary/grooming-another" className="de-related-chip">Grooming Another</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Mirroring is one of the most consistent signs of real rapport across dating, friendship and professional relationships. Our guide covers this alongside the full range of attraction signals.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
