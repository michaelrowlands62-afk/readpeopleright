import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does a shoulder shrug mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A shoulder shrug is a brief raising of one or both shoulders, and it typically signals uncertainty, indifference or a lack of genuine confidence in what is being said.",
      },
    },
    {
      '@type': 'Question',
      name: "Is a partial shrug different from a full shoulder shrug?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, a full shrug tends to communicate honest, openly acknowledged uncertainty, while a partial, one sided shrug often reveals hidden doubt behind an otherwise confident sounding statement.",
      },
    },
  ],
}

export default function DictShoulderShrug() {
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
        <span className="de-category">Emotion Signals</span>
        <h1 className="de-title">Shoulder Shrug</h1>
        <p className="de-lead">
          A shoulder shrug is a brief raising of one or both shoulders, ranging from a barely noticeable partial lift to a full, exaggerated raise, and it typically signals uncertainty, indifference or a lack of genuine confidence in what is currently being said. The gesture is considered one of the more universal body language signals, appearing in remarkably similar form across many different cultures, and it functions as a quick, almost automatic way of communicating that a person does not fully know, care about or stand behind a particular statement. A full, deliberate shrug involving both shoulders, an upturned palm and raised eyebrows generally communicates a straightforward and honest lack of knowledge or certainty about something. A partial shrug involving just one shoulder, however, often carries a more complicated meaning, and is frequently associated with a lack of genuine conviction behind a statement a person is making, even while their words sound confident and definite. Because a shoulder shrug can appear as a fleeting, incomplete gesture rather than a full, obvious raise, watching specifically for a small, partial lift of just one shoulder while someone speaks is one of the more useful ways to catch a subtle contradiction between their words and their actual level of confidence.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A full raise of both shoulders paired with an upturned palm and raised eyebrows</li>
          <li>A partial, brief lift of just one shoulder during a spoken statement</li>
          <li>The gesture appearing right as an uncertain or unconvincing claim is made</li>
          <li>A shrug contradicting an otherwise confident, definite sounding statement</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A partial, one sided shoulder shrug appearing while someone makes a confident sounding claim is a strong signal that their actual conviction does not match their words. A full, deliberate shrug used openly to communicate genuine uncertainty is a more straightforward and honest signal, generally requiring less interpretation than the partial version. Watching specifically for the smaller, partial shrug tends to reveal more about hidden doubt than the larger, more obvious version of the same basic gesture.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/brow-furrow" className="de-related-chip">Brow Furrow</Link>
          <Link to="/dictionary/drooping-eyelids" className="de-related-chip">Drooping Eyelids</Link>
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Small gestures of uncertainty can quietly undermine an otherwise confident presentation at work. Our guide covers this alongside the full range of professional body language signals.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
