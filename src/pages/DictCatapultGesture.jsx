import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a catapult gesture in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A catapult gesture is pointing with extended fingers while speaking, often with a forward or downward motion, used to emphasise authority or assert a point forcefully.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a catapult gesture come across as aggressive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Used sparingly it reads as confident emphasis, but used repeatedly or paired with a raised voice, the same gesture can come across as overbearing or aggressive.',
      },
    },
  ],
}

export default function DictCatapultGesture() {
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
        <h1 className="de-title">Catapult Gesture</h1>
        <p className="de-lead">
          The catapult gesture describes pointing with extended fingers while speaking, often
          accompanied by a forward or downward motion of the hand that resembles the release action
          of a catapult, and it is commonly used to emphasise authority or assert a point forcefully
          during conversation. Unlike a softer open palm gesture, which tends to invite discussion
          and signal openness, the catapult gesture carries a more directive and assertive quality,
          often used at moments when a speaker wants to underline a specific point or leave no
          ambiguity about their position. The gesture is frequently seen in leadership, teaching and
          public speaking contexts, where a speaker wants to project confidence and command
          attention at a key moment in their message. Because the catapult gesture is forceful and
          somewhat confrontational in tone, its impact depends heavily on the surrounding vocal
          delivery and context, since the same gesture can read as confident emphasis in one setting
          and as aggressive or overbearing in another, particularly if used excessively or paired
          with a raised voice.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Extended fingers used to point while speaking, often with a forward or downward motion</li>
          <li>The gesture timed to emphasise a specific word or key point in a statement</li>
          <li>A forceful, directive quality distinct from a softer, open palm gesture</li>
          <li>The behaviour appearing more frequently during moments requiring assertion of authority</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A catapult gesture used sparingly to underline a genuinely important point during a
          presentation generally reads as confident and purposeful. The same gesture used repeatedly
          throughout an entire conversation, particularly when paired with a raised voice or
          interruption, is more likely to read as overbearing or aggressive rather than simply
          confident. The frequency and vocal context surrounding the gesture matters as much as the
          gesture itself in determining how it will be perceived by others.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The catapult gesture is one of several power gestures used to project authority. Our
            guide covers this alongside the full range of dominance and status signals.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
