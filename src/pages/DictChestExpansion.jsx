import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does chest expansion signal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chest expansion, puffing out the chest and drawing the shoulders back, signals confidence, pride or an attempt to appear more dominant, depending on whether it is spontaneous or deliberately held.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chest expansion always a deliberate display of dominance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. A brief, spontaneous chest expansion right after good news reflects genuine pride, while a sustained, held expansion in a competitive setting is more likely a deliberate status display.',
      },
    },
  ],
}

export default function DictChestExpansion() {
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
        <h1 className="de-title">Chest Expansion</h1>
        <p className="de-lead">
          Chest expansion refers to puffing out the chest and drawing the shoulders back, a
          postural change that visibly enlarges the upper body and signals confidence, pride or an
          attempt to appear more dominant to those nearby. The gesture draws on a deeply rooted
          biological pattern seen across many species, where physically expanding the body
          communicates strength and status, while contracting or shrinking the body communicates
          submission or reduced confidence. In humans, chest expansion frequently appears at moments
          of genuine achievement or pride, such as after a personal success, but it is equally used
          as a deliberate display in competitive or status conscious situations, where someone
          consciously expands their posture to project greater confidence or authority than they
          might otherwise feel internally. Because the gesture can be either a spontaneous reaction
          to genuine pride or a deliberately adopted display of dominance, distinguishing between the
          two requires paying attention to what triggered the expansion and whether it appears
          alongside other genuine emotional signals or as a more calculated positioning within a
          social hierarchy.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The chest visibly puffing outward with the shoulders drawn back</li>
          <li>The posture appearing spontaneously following a genuine personal achievement or success</li>
          <li>A deliberately held, sustained expansion used in competitive or status conscious settings</li>
          <li>The gesture accompanied by other confidence signals such as a raised chin or wide stance</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Chest expansion appearing briefly and spontaneously right after receiving good news or
          achieving something meaningful reflects genuine pride and positive emotion. The same
          posture held deliberately and consistently throughout an entire interaction, particularly
          in a competitive or hierarchical setting, is more likely a conscious display intended to
          project dominance and status to others present. Considering whether the expansion appeared
          as an immediate reaction or as a sustained posture helps distinguish genuine pride from a
          deliberate assertion of status.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/catapult-gesture" className="de-related-chip">Catapult Gesture</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
          <Link to="/dictionary/elbow-placement" className="de-related-chip">Elbow Placement</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Chest expansion is one of the physical markers of natural authority. Our guide covers
            this alongside the signals that project genuine calm confidence.
          </p>
          <Link to="/guides/alpha-body-language" className="de-cta-btn">
            Read the Alpha Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
