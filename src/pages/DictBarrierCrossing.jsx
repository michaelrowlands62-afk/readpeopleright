import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does barrier crossing mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barrier crossing is reaching one arm across the body to touch the opposite arm or shoulder, a subtle self protective gesture that creates a partial barrier during moments of mild discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is barrier crossing different from fully crossed arms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barrier crossing uses only one arm rather than both, allowing a person to appear more outwardly relaxed while still creating a degree of physical and psychological protection.',
      },
    },
  ],
}

export default function DictBarrierCrossing() {
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
        <span className="de-category">Defensive Signals</span>
        <h1 className="de-title">Barrier Crossing</h1>
        <p className="de-lead">
          Barrier crossing is a subtle self protective gesture in which a person reaches one arm
          across the front of their body to touch the opposite arm or shoulder, creating a partial
          physical barrier without fully crossing both arms. The gesture sits somewhere between a
          fully open posture and a completely closed one, making it a particularly useful signal to
          notice because it is less obviously defensive than fully crossed arms and therefore more
          likely to slip past unnoticed in everyday interaction. The behaviour tends to emerge in
          moments of mild social discomfort, such as standing in an unfamiliar group, waiting to be
          introduced to someone, or feeling momentarily exposed or self conscious in a social
          setting. Because barrier crossing uses only one arm rather than both, it allows a person to
          maintain an outwardly more relaxed appearance while still creating a degree of physical and
          psychological protection, which is precisely what makes it worth watching for in
          situations where someone might otherwise want to appear more comfortable than they actually
          feel.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>One arm reaching across the body to touch the opposite arm or shoulder</li>
          <li>The gesture appearing in unfamiliar or mildly uncomfortable social situations</li>
          <li>A partial barrier created without the more obvious signal of fully crossed arms</li>
          <li>The behaviour easing once the person becomes more familiar or comfortable in the setting</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Barrier crossing while waiting alone in an unfamiliar setting, such as before a meeting
          begins, is a common and unremarkable response to mild social exposure. The gesture becomes
          more informative when it appears specifically during a conversation, particularly right
          after being introduced to someone new or asked an unexpected question, since that timing
          links the partial barrier directly to a specific moment of discomfort rather than general
          situational unfamiliarity.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/arms-crossed" className="de-related-chip">Arms Crossed</Link>
          <Link to="/dictionary/crossed-wrists" className="de-related-chip">Crossed Wrists</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Subtle restraint gestures like barrier crossing often surface at the negotiating table.
            Our guide covers this alongside the full range of dealmaking signals.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
