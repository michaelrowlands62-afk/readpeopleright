import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a hand barrier mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hand barrier is holding both hands together in front of the body, creating a subtle psychological shield that signals mild defensiveness without appearing as obviously closed as fully crossed arms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a hand barrier different from crossed arms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hand barrier is a milder, more socially acceptable version of a closed posture, using the hands rather than the full arms to create a degree of protective separation.',
      },
    },
  ],
}

export default function DictHandBarrier() {
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
        <h1 className="de-title">Hand Barrier</h1>
        <p className="de-lead">
          A hand barrier occurs when a person holds both hands together in front of their body,
          often at waist or chest height, creating a subtle psychological shield between themselves
          and whoever they are interacting with. Unlike fully crossed arms, which represent a more
          obviously closed and defensive posture, a hand barrier is a milder, more socially
          acceptable version that still introduces a degree of physical separation without appearing
          as overtly guarded. The gesture often takes the form of loosely clasped hands, one hand
          resting over the other wrist, or fingers lightly interlaced, held in a position that
          outwardly appears composed while still functioning as a protective boundary. Hand barriers
          tend to emerge in situations involving mild uncertainty or social exposure, such as
          standing while waiting to be addressed, meeting someone new, or fielding an unexpected
          question, and because the gesture can look almost neutral or even professional at first
          glance, it is one of the more easily overlooked defensive signals unless specifically
          watched for.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Both hands held together in front of the body, often at waist or chest height</li>
          <li>Loosely clasped hands, interlaced fingers, or one hand resting over the opposite wrist</li>
          <li>The gesture appearing during moments of mild uncertainty or social exposure</li>
          <li>A posture that looks outwardly composed while still creating a degree of physical separation</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A hand barrier held consistently while standing and waiting, such as before a meeting
          begins, is a common and largely unremarkable response to mild social exposure. The gesture
          becomes more informative when it appears suddenly during a conversation, particularly right
          after a pointed question or an unexpected challenge, since that timing links the subtle
          barrier directly to a specific moment of discomfort rather than a general standing habit.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
          <Link to="/dictionary/barrier-crossing" className="de-related-chip">Barrier Crossing</Link>
          <Link to="/dictionary/arms-crossed" className="de-related-chip">Arms Crossed</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Subtle restraint gestures like a hand barrier often surface at the negotiating table.
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
