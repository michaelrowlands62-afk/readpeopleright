import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does crossing your wrists mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crossing the wrists while standing is a subtle restraint gesture that creates a small physical barrier, often appearing when a person feels judged, exposed or under scrutiny.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people cross their wrists instead of their arms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crossed wrists achieve a similar protective function to crossed arms while looking more composed and less obviously defensive, making it common in formal settings where fully closed posture would look inappropriate.',
      },
    },
  ],
}

export default function DictCrossedWrists() {
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
        <h1 className="de-title">Crossed Wrists</h1>
        <p className="de-lead">
          Crossing the wrists while standing, typically in front of the body at waist or groin
          height, is a subtle restraint gesture that creates a small physical barrier while
          appearing far less obviously defensive than fully crossed arms. The gesture often emerges
          when a person feels judged, exposed or under some form of scrutiny, such as standing at the
          front of a room, waiting to be addressed by an authority figure, or being photographed. By
          holding the wrists together rather than crossing the entire arms, the body achieves a
          similar protective and self restraining function while looking more composed and less
          obviously guarded to a casual observer. This makes crossed wrists a particularly useful
          signal to notice precisely because it is easy to overlook or mistake for simple stillness.
          The gesture frequently appears in formal settings where fully defensive body language would
          be socially inappropriate, such as official photographs, award ceremonies or moments of
          public address, where the underlying discomfort still needs somewhere to go.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Wrists held together in front of the body, typically at waist or groin height</li>
          <li>The gesture appearing in formal or public settings where crossed arms would look inappropriate</li>
          <li>A stance that looks composed on the surface but restrained rather than relaxed underneath</li>
          <li>The behaviour emerging specifically when a person feels watched, judged or exposed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Crossed wrists during a formal photograph or public appearance are extremely common and do
          not necessarily indicate anything beyond the ordinary self consciousness of being watched.
          The gesture becomes more meaningful when it appears suddenly during a conversation,
          particularly right after a pointed question or a moment of direct scrutiny, since that
          timing suggests a specific and immediate discomfort rather than a general habit of standing
          that way. Comparing the gesture to how the same person stands in more relaxed moments is
          the clearest way to judge its significance.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/defensive-crossed-legs" className="de-related-chip">Defensive Crossed Legs</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Restrained postures like crossed wrists often surface at the negotiating table. Our
            guide covers this alongside the full range of dealmaking signals.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
