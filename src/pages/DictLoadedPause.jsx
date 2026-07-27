import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is a loaded pause in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A loaded pause is an unusually long silence before answering a question, and when combined with gaze aversion or a change in posture it can indicate fabrication rather than simple careful thought.",
      },
    },
    {
      '@type': 'Question',
      name: "Does every pause before answering indicate deception?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, brief pauses are a normal part of thoughtful conversation, and only pauses that are unusually long and paired with other discomfort signals should raise real suspicion.",
      },
    },
  ],
}

export default function DictLoadedPause() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Loaded Pause</h1>
        <p className="de-lead">
          A loaded pause is a deliberate silence inserted before answering a question, and while a brief pause on its own is a completely normal part of thoughtful conversation, a loaded pause becomes significant when it is unusually long relative to the question asked or accompanied by other signals of discomfort. On its own, taking a moment before responding often reflects careful, considered thought, and should not automatically be treated as suspicious behaviour by an observer. The picture changes considerably when the pause is combined with gaze aversion, a shift in posture or a sudden change in breathing, since this combination suggests the person may be constructing an answer rather than simply recalling or considering one honestly. The length of a loaded pause tends to scale with the complexity of the fabrication being built, since inventing a plausible, consistent answer under pressure genuinely takes more cognitive effort than retrieving a straightforward, truthful memory from the past. Distinguishing a loaded pause from an innocent, thoughtful silence requires looking closely at what surrounds it, since the pause itself is rarely meaningful when considered entirely in isolation from everything else happening.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A pause noticeably longer than the question would normally require</li>
          <li>The silence combined with gaze aversion or a shift in posture</li>
          <li>A subtle change in breathing rate accompanying the pause</li>
          <li>The pause followed by an answer that feels overly rehearsed or detailed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A loaded pause appearing before a simple factual question, especially paired with gaze aversion, is a stronger signal of possible fabrication than the same brief silence before a genuinely complex or emotionally difficult question. Innocent thoughtful pauses tend to occur naturally throughout a conversation regardless of the stakes involved, while loaded pauses cluster specifically around questions that carry some risk for the person answering. Comparing how someone pauses on easy questions versus harder ones is one of the more effective ways to spot a loaded pause worth paying closer attention to.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/gaze-aversion" className="de-related-chip">Gaze Aversion</Link>
          <Link to="/dictionary/eye-contact-avoidance" className="de-related-chip">Eye Contact Avoidance</Link>
          <Link to="/dictionary/kinesic-slip" className="de-related-chip">Kinesic Slip</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Timing and hesitation are two of the most underrated deception signals available. Our guide covers this alongside the full range of verbal and nonverbal deception clusters.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
