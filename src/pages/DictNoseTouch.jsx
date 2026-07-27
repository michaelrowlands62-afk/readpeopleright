import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Does touching your nose mean you are lying?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not necessarily, since nose touch is a popular deception myth, and the gesture is at least as likely to reflect an itch, allergies or a habitual mannerism as genuine dishonesty.",
      },
    },
    {
      '@type': 'Question',
      name: "When should nose touch be taken seriously as a deception signal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nose touch is more worth noting when it appears at a moment tied to a risky claim and is combined with other signals like gaze aversion or a change in vocal pitch.",
      },
    },
  ],
}

export default function DictNoseTouch() {
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
        <h1 className="de-title">Nose Touch</h1>
        <p className="de-lead">
          Nose touch refers to the brief touching, rubbing or scratching of the nose during conversation, a gesture that has long been popularly associated with deception in body language folklore, though the reality is considerably more nuanced than the popular myth suggests. While an increase in nose touching can sometimes accompany lying, largely due to a genuine physiological change in blood flow to the nasal tissue that occurs under stress, the same simple gesture is at least as likely to reflect nothing more than an actual itch, mild allergies or a habitual, meaningless mannerism specific to that individual. Treating nose touch as a reliable, standalone lie detection signal is one of the more common mistakes people make when trying to read deception, since doing so ignores how common and mundane the gesture is in completely honest, everyday conversation. What matters far more than the touch itself is whether it appears alongside other signals, including gaze aversion, a change in vocal pitch or a sudden shift in posture, and specifically whether it occurs at a moment directly tied to a claim or question that carries some risk for the person being asked.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A brief touch, rub or scratch of the nose during conversation</li>
          <li>The gesture appearing at a moment tied to a specific risky claim or question</li>
          <li>Nose touch combined with gaze aversion or a change in vocal pitch</li>
          <li>The absence of any obvious itch, allergy or environmental explanation</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Nose touch appearing at the exact moment a risky claim is made, especially alongside gaze aversion or a shift in posture, deserves closer attention as a possible deception cluster rather than a standalone signal. The same gesture appearing randomly throughout a conversation, with no clear connection to anything specific being discussed, is far more likely to reflect an itch or an unrelated personal habit. Treating nose touch on its own as reliable proof of lying is a common misreading, and the surrounding context always matters more than the single gesture.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/eye-rub" className="de-related-chip">Eye Rub</Link>
          <Link to="/dictionary/fake-laugh" className="de-related-chip">Fake Laugh</Link>
          <Link to="/dictionary/head-shake-during-agreement" className="de-related-chip">Head Shake During Agreement</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Nose touch is one of the most widely misunderstood deception myths in popular culture. Our guide separates the signals backed by real research from the ones that are not.
          </p>
          <Link to="/guides/myths" className="de-cta-btn">
            Read the Body Language Myths Debunked Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
