import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does crossed arms always mean someone is defensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Crossed arms can simply reflect feeling cold, a comfortable resting position or personal habit, and only becomes meaningful when combined with other closed signals occurring at the same time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes crossed arms a genuine defensive signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine defensiveness is more likely when crossed arms appear suddenly alongside other signals such as a turned body, reduced eye contact or a tightened jaw, rather than as an isolated resting position.',
      },
    },
  ],
}

export default function DictArmsCrossed() {
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
        <h1 className="de-title">Arms Crossed</h1>
        <p className="de-lead">
          Arms crossed is perhaps the single most recognisable body language signal in popular
          culture, and also one of the most frequently misread. The posture involves folding the
          arms across the chest, and it is almost universally assumed to indicate defensiveness,
          disagreement or a closed attitude toward whatever is being discussed. In reality, people
          cross their arms for a wide range of reasons that have nothing to do with emotional state,
          including feeling cold, finding the position simply comfortable, having nowhere else
          convenient to rest the arms, or doing so out of pure habit developed over many years.
          Genuine defensive crossed arms tend to appear alongside other signals occurring at the same
          moment, such as a turned body, reduced eye contact, a tightened jaw or a sudden change from
          how the person was sitting or standing just before. When crossed arms appear in isolation,
          without any accompanying signals and without any apparent change from the person's normal
          resting posture, they are far more likely to reflect simple physical comfort than any
          genuine emotional resistance to the conversation taking place.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Arms folded across the chest, whether standing or seated</li>
          <li>The posture appearing alongside other closed signals such as a turned body or tightened jaw</li>
          <li>A sudden change from how the person was positioned moments before the gesture appeared</li>
          <li>The absence of any accompanying signals suggesting a purely comfortable resting position</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Crossed arms in a cold room or a chair without armrests are almost certainly just practical
          and carry no emotional weight at all. The same gesture appearing suddenly in response to a
          specific comment, combined with a turned body and reduced eye contact, is a much more
          meaningful cluster suggesting genuine defensiveness or disagreement. The key is never to
          read crossed arms in isolation, since the same physical position can mean almost anything
          depending entirely on what else is happening around it.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/crossed-ankles" className="de-related-chip">Crossed Ankles</Link>
          <Link to="/dictionary/defensive-crossed-legs" className="de-related-chip">Defensive Crossed Legs</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Crossed arms is the single most debunked body language myth. Our guide covers this
            alongside the science behind the most common misconceptions.
          </p>
          <Link to="/guides/myths" className="de-cta-btn">
            Read the Body Language Myths Debunked Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
