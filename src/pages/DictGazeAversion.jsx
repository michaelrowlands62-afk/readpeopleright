import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does gaze aversion mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gaze aversion is a sustained or repeated looking away from someone during conversation, often signalling discomfort or a desire to disengage, though its meaning depends heavily on context.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is gaze aversion different from natural eye movement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural eye movement is quick, varied and unrelated to emotion, while gaze aversion is more sustained or repeated and often linked to discomfort with a specific topic or moment.',
      },
    },
  ],
}

export default function DictGazeAversion() {
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
        <h1 className="de-title">Gaze Aversion</h1>
        <p className="de-lead">
          Gaze aversion refers to a deliberate or semi deliberate looking away from another person
          during conversation, distinct from the natural, brief eye movements everyone makes while
          thinking or processing information. Where natural eye movement is quick, varied and
          unconnected to any particular emotional state, gaze aversion tends to be a more sustained
          or repeated turning away from the other person, often signalling discomfort, a desire to
          disengage, or an attempt to manage difficult emotions without the added pressure of
          maintaining eye contact at the same time. The gesture draws on a protective instinct
          similar to physically turning away from something unpleasant, applied instead to the
          social discomfort of a conversation rather than a direct physical threat. Because gaze
          aversion can stem from many different underlying causes, including genuine social anxiety,
          cultural norms around eye contact, or a specific discomfort with the current topic, it
          becomes a meaningful stress signal mainly when it represents a clear departure from how a
          person normally makes eye contact, rather than being read as universally significant on
          its own.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A sustained or repeated turning away from another person's gaze during conversation</li>
          <li>The aversion appearing specifically in response to a particular question or topic</li>
          <li>A departure from the person's own normal, comfortable eye contact pattern</li>
          <li>The behaviour accompanied by other stress signals such as self touching or vocal changes</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Gaze aversion during a naturally reflective pause, or from someone who is simply shy or
          from a culture with different eye contact norms, does not necessarily reflect meaningful
          stress. The signal becomes more informative when it represents a clear and specific change
          from how the same person maintained eye contact just moments before, particularly when the
          aversion coincides precisely with a specific topic or question rather than persisting evenly
          throughout the entire conversation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/eye-contact-avoidance" className="de-related-chip">Eye Contact Avoidance</Link>
          <Link to="/dictionary/eye-block" className="de-related-chip">Eye Block</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Gaze aversion is one of the signals covered in our guide to nervous body language,
            alongside the full range of anxiety signals and how to manage them.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
