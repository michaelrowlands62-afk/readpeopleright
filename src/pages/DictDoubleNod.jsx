import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a double nod mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A double nod is a quick pair of nods performed while listening, signalling active agreement and encouraging the speaker to continue, distinct from a single slower acknowledging nod.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a double nod always a genuine signal of engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually, but a double nod repeated on a fixed rhythm regardless of what is being said may reflect a conscious rapport building habit rather than moment to moment genuine engagement.',
      },
    },
  ],
}

export default function DictDoubleNod() {
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
        <span className="de-category">Engagement Signals</span>
        <h1 className="de-title">Double Nod</h1>
        <p className="de-lead">
          A double nod is a quick, deliberate pair of nods performed in close succession while
          listening to someone speak, and it functions as one of the clearest and most universally
          understood signals of active agreement and encouragement in conversation. Unlike a single
          slow nod, which often simply acknowledges that a statement has been heard, the double nod
          carries a more energetic quality that actively encourages the speaker to continue,
          signalling genuine investment in what is being said rather than passive acknowledgement.
          The gesture typically appears at natural pause points in conversation, timed closely with
          moments where the speaker might otherwise hesitate or check whether their audience remains
          engaged, effectively functioning as a small piece of nonverbal encouragement that keeps the
          conversation flowing smoothly. Because nodding is such a widely recognised social signal,
          the double nod is also sometimes used deliberately and consciously as a technique to build
          rapport, meaning its presence should be considered alongside other engagement signals such
          as eye contact and forward lean rather than read in isolation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Two quick nods performed in close succession rather than a single slower nod</li>
          <li>The gesture timed to natural pause points during the other person's speech</li>
          <li>Double nods appearing consistently as a listener actively encourages a speaker</li>
          <li>The signal accompanied by sustained eye contact and a forward leaning posture</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A double nod appearing naturally at a pause point, paired with genuine eye contact and an
          attentive posture, is a strong signal of authentic engagement and encouragement. The same
          gesture performed rhythmically throughout an entire conversation, regardless of what is
          actually being said, may reflect a conscious rapport building habit rather than genuine
          moment to moment engagement. Considering whether the nodding responds specifically to the
          content of what is said, rather than repeating on a fixed rhythm, is the clearest way to
          judge its sincerity.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/belly-button-rule" className="de-related-chip">Belly Button Rule</Link>
          <Link to="/dictionary/chin-stroking" className="de-related-chip">Chin Stroking</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Natural, responsive nodding is one of the quiet habits of highly effective communicators.
            Our guide covers this alongside other nonverbal habits of successful people.
          </p>
          <Link to="/guides/success-body-language" className="de-cta-btn">
            Read the Body Language Secrets of Successful People Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
