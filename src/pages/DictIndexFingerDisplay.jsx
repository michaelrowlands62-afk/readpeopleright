import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does index finger display mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Index finger display is a chin resting posture where the index finger runs up the cheek and the thumb supports the chin, and it typically signals critical or skeptical evaluation of what is being said.",
      },
    },
    {
      '@type': 'Question',
      name: "How is index finger display different from ordinary chin resting?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ordinary chin resting is a relaxed, low effort posture, while index finger display involves a raised, pointing finger that reads as more guarded and often precedes a pointed question or objection.",
      },
    },
  ],
}

export default function DictIndexFingerDisplay() {
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
        <span className="de-category">Engagement Signals</span>
        <h1 className="de-title">Index Finger Display</h1>
        <p className="de-lead">
          Index finger display is a specific evaluation posture in which the index finger rests vertically along the cheek, sometimes reaching up toward the temple, while the thumb supports the underside of the chin and the remaining fingers curl loosely beneath the lower lip. The gesture is related to ordinary chin resting but carries a more pointed meaning, since researchers who study evaluative gestures generally associate it with critical or skeptical thinking rather than simple open minded consideration. A person displaying this posture is typically listening carefully while silently forming judgements, objections or doubts about what is being said, even if their face remains otherwise neutral or calm throughout. It commonly appears in meetings, presentations and negotiations at the exact moment a claim or proposal begins to sound questionable to the listener. Because the gesture combines physical support for the head with a raised, pointing finger, it reads as more guarded and less receptive than a relaxed chin rest, and it often precedes a pointed question or a polite but firm objection once the listener has finished processing what they have just heard.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The index finger resting vertically along the cheek or temple while the thumb props up the chin</li>
          <li>The remaining fingers curled loosely beneath the lower lip or mouth</li>
          <li>A steady, unblinking gaze directed at the speaker while the posture is held</li>
          <li>The gesture appearing right as a claim, price or proposal is first introduced</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Index finger display appearing the moment a number, price or claim is mentioned is a strong signal that the listener is quietly questioning its validity rather than accepting it at face value. The same posture held throughout a long explanation, without any real change, can simply reflect a habitual listening style rather than active doubt. Watching for the moment the gesture first appears relative to what has just been said is the clearest way to judge whether it reflects genuine skepticism or comfortable, neutral evaluation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-stroking" className="de-related-chip">Chin Stroking</Link>
          <Link to="/dictionary/brow-furrow" className="de-related-chip">Brow Furrow</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Skeptical evaluation gestures like this one can make or break a negotiation. Our guide covers how to read hesitation, doubt and genuine readiness to agree.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
