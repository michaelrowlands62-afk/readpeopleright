import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does throat touch mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Throat touch is touching or covering the base of the neck, and it typically indicates vulnerability or insecurity, functioning as an instinctive protective response to feeling exposed.",
      },
    },
    {
      '@type': 'Question',
      name: "Why is throat touch considered such a reliable signal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Throat touch draws on a genuinely instinctive protective response rather than a learned habit, which makes it difficult to consciously suppress and generally quite honest.",
      },
    },
  ],
}

export default function DictThroatTouch() {
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
        <h1 className="de-title">Throat Touch</h1>
        <p className="de-lead">
          Throat touch is a protective gesture involving touching, covering or gently stroking the base of the neck, often at or near the small hollow at the front of the throat known as the suprasternal notch, and it frequently indicates vulnerability or insecurity in the moment it appears. The neck is one of the most physically exposed and vulnerable parts of the body, and covering or touching it appears to function as an instinctive, largely unconscious protective response when a person feels threatened, exposed or uncertain in some way. The gesture is especially common among women, who often perform a more visible version involving the fingers resting lightly across the throat or collarbone, though a comparable, sometimes less visible version also appears in men, often involving a hand briefly resting against the front of the neck. Throat touch commonly appears in response to unexpected or unwelcome news, a pointed question that catches someone off guard, or any moment that produces a sudden feeling of exposure or insecurity. Because the gesture draws on a genuinely instinctive protective response rather than a learned social habit, it tends to be difficult to consciously suppress, making it a particularly honest indicator of an underlying feeling of vulnerability in that specific moment.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A hand touching, covering or resting lightly against the base of the neck</li>
          <li>The gesture appearing suddenly in response to unexpected or unwelcome news</li>
          <li>Fingers sometimes resting across the throat or collarbone specifically</li>
          <li>The touch appearing instinctive and difficult to consciously suppress</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Throat touch appearing immediately after unexpected or unwelcome news is a strong signal of a genuine, instinctive feeling of vulnerability in that specific moment. The same gesture appearing as a habitual resting position throughout a conversation, with no clear trigger, is less meaningful and may simply reflect personal habit rather than a reaction to anything specific. Because the gesture draws on a deep protective instinct, its sudden appearance right after a specific comment or question is usually the most reliable signal worth paying attention to.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/earlobe-tugging" className="de-related-chip">Earlobe Tugging</Link>
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Instinctive protective gestures like this one are some of the hardest signals to fake or suppress. Our guide covers this alongside the full range of stress indicators.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
