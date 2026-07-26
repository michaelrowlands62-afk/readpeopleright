import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a hand on heart gesture mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hand on heart, placing the hand over the chest, signals sincerity, emotional connection or reassurance, often used to emphasise a truthful statement or offer comfort to someone else.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a hand on heart gesture be used deceptively?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Used spontaneously it reads as authentic, but repeated deliberate use during a persuasive appeal can shift toward appearing more calculated and performed rather than genuinely felt.',
      },
    },
  ],
}

export default function DictHandOnHeart() {
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
        <span className="de-category">Trust Signals</span>
        <h1 className="de-title">Hand on Heart</h1>
        <p className="de-lead">
          Placing a hand over the chest, typically resting flat against the heart area, is a
          gesture that signals sincerity, emotional connection or reassurance, and it draws on
          deeply rooted cultural and physical associations between the heart and genuine feeling.
          The gesture is frequently used to emphasise the truthfulness of a statement, to express
          genuine gratitude, or to offer comfort and reassurance to someone else during a difficult
          moment, and its meaning is closely tied to the specific context in which it appears.
          Because touching the chest places a hand near the body's most protected and vulnerable
          central area, the gesture also carries a quality of openness and self exposure that
          reinforces its association with sincerity, since a person displaying genuine defensiveness
          would be more likely to protect this area than draw attention to it. A hand on heart used
          spontaneously in response to a genuinely moving or meaningful moment tends to read as
          authentic, while the same gesture used repeatedly and deliberately during a persuasive
          appeal can shift toward appearing more calculated and performed.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A hand resting flat against the chest, typically over or near the heart</li>
          <li>The gesture appearing spontaneously in response to a genuinely moving or meaningful moment</li>
          <li>The behaviour used to offer comfort or reassurance to someone else during difficulty</li>
          <li>Repeated, deliberate use during a persuasive appeal suggesting a more calculated performance</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A hand on heart appearing spontaneously in response to genuinely touching news or a
          sincere expression of gratitude reads as authentic and heartfelt. The same gesture used
          repeatedly and deliberately throughout a persuasive speech or a sales pitch, particularly
          when timed precisely with claims of honesty, is more likely a consciously adopted technique
          intended to project sincerity rather than a spontaneous emotional reaction. Considering how
          naturally the gesture fits the surrounding moment is the clearest way to judge its
          authenticity.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
          <Link to="/dictionary/deliberate-touch" className="de-related-chip">Deliberate Touch</Link>
          <Link to="/dictionary/grooming-another" className="de-related-chip">Grooming Another</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Sincerity signals like hand on heart shift depending on the relationship involved. Our
            guide covers how nonverbal patterns change across different relationships.
          </p>
          <Link to="/guides/relationship-types" className="de-cta-btn">
            Read the Body Language in Different Relationships Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
