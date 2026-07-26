import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does closing your eyes while speaking mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Briefly closing the eyes while making a point during speech generally signals conviction and confidence, allowing a speaker to focus fully on delivering an important statement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is closing your eyes while talking a sign of nervousness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not usually. A brief closure timed with emphasis signals confidence, while a longer or more erratic closure paired with a faltering voice is more likely to reflect nervousness instead.',
      },
    },
  ],
}

export default function DictClosedEyesDuringSpeech() {
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
        <h1 className="de-title">Closed Eyes During Speech</h1>
        <p className="de-lead">
          Closing the eyes briefly while making a point during speech is a gesture that is
          frequently misread as a sign of discomfort or avoidance, when in most contexts it actually
          reflects the opposite. Rather than indicating deception or unease, a brief eye closure
          timed precisely with emphasis in speech generally signals conviction, allowing the speaker
          to momentarily block out visual distraction and focus entirely on delivering their point
          with full internal confidence. This differs meaningfully from prolonged eye closure or
          repeated blinking driven by nervousness, since the confident version is brief, deliberate
          and closely synchronised with the emphasis of the words being spoken rather than scattered
          randomly throughout a sentence. Public speakers, teachers and confident communicators
          frequently use this gesture, often without any conscious awareness that they are doing so,
          precisely at the moments where they want their statement to land with the greatest
          possible weight. Recognising the timing and brevity of the closure is what separates this
          confidence signal from other, quite different, eye related stress signals that can
          superficially resemble it.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A brief, deliberate eye closure timed with emphasis on a specific word or phrase</li>
          <li>The closure lasting only a moment rather than persisting for an extended period</li>
          <li>Confident vocal delivery continuing steadily throughout the closed eye moment</li>
          <li>The gesture appearing at points of genuine conviction rather than throughout an entire sentence</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A brief closed eye moment that lands precisely on the most important word of a sentence is
          a strong indicator of genuine conviction rather than avoidance. The signal changes meaning
          considerably if the eyes close for an extended period, appear alongside a faltering voice,
          or occur randomly rather than in sync with emphasis, since those variations point toward
          nervousness or discomfort instead. The key distinction is timing and duration, with brief
          and well placed closures signalling confidence and longer or more erratic closures
          signalling the opposite.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/controlled-breathing" className="de-related-chip">Controlled Breathing</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            This subtle confidence signal is one of many covered in our guide to projecting
            confidence through body language, with ten practical changes you can make today.
          </p>
          <Link to="/guides/confident-body-language" className="de-cta-btn">
            Read the Confident Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
