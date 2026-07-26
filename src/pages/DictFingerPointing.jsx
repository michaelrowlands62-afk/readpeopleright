import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does finger pointing mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finger pointing, extending a finger directly at someone while speaking, is perceived as aggressive and accusatory in most cultures, even when used simply to emphasise a point confidently.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does finger pointing become a sign of genuine aggression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finger pointing becomes more clearly aggressive when it is repeated, aimed persistently at one specific person, and accompanied by a raised voice or a forward leaning posture.',
      },
    },
  ],
}

export default function DictFingerPointing() {
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
        <h1 className="de-title">Finger Pointing</h1>
        <p className="de-lead">
          Finger pointing involves extending a single finger directly toward another person while
          speaking, and although it is sometimes used as a confident, assertive gesture to emphasise
          a point, it is perceived as aggressive and accusatory in most cultures, making it one of
          the more risky gestures available to a speaker. The gesture carries an inherently
          confrontational quality because pointing directly at a person, rather than at an object or
          in a general direction, singles them out in a way that can feel accusatory even when no
          accusation is intended. In assertive or confident use, finger pointing is typically brief,
          controlled and directed more generally rather than fixed on one individual, used to
          underline a specific point during an otherwise calm and measured delivery. In its more
          aggressive form, finger pointing tends to be repeated, held for longer, aimed directly and
          persistently at one specific person, and frequently accompanied by a raised voice or
          forward leaning posture, transforming what could be a simple emphatic gesture into a
          genuinely confrontational signal.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A single finger extended and pointed directly toward another person</li>
          <li>Brief, controlled pointing used to emphasise a point during calm, measured speech</li>
          <li>Repeated or sustained pointing aimed persistently at one specific individual</li>
          <li>The gesture accompanied by a raised voice or forward lean, suggesting genuine aggression</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Finger pointing used briefly and calmly to underline a specific point during an otherwise
          measured conversation can read as confident emphasis rather than aggression. The same
          gesture repeated persistently, aimed directly at one person and paired with a raised voice
          or forward leaning posture, is a much stronger signal of genuine confrontation and
          escalating conflict. Because the gesture is so widely perceived as accusatory regardless of
          intent, it is generally one of the riskier gestures to use deliberately, even when genuine
          aggression is not the intention behind it.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/catapult-gesture" className="de-related-chip">Catapult Gesture</Link>
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Finger pointing is one of the clearest escalation signals during conflict. Our guide
            covers this alongside the full range of body language seen during arguments.
          </p>
          <Link to="/guides/arguments" className="de-cta-btn">
            Read the Reading Body Language in Arguments Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
