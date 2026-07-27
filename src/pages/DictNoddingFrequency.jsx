import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does nodding frequency reveal in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nodding frequency describes how often and how quickly someone nods, and rapid, near constant nodding often signals eagerness or impatience rather than genuine, considered agreement.",
      },
    },
    {
      '@type': 'Question',
      name: "Is fast nodding always a bad sign?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not necessarily, but rapid nodding that continues throughout an entire conversation can unintentionally signal nervousness or impatience rather than the supportive engagement it is meant to convey.",
      },
    },
  ],
}

export default function DictNoddingFrequency() {
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
        <h1 className="de-title">Nodding Frequency</h1>
        <p className="de-lead">
          Nodding frequency refers to how often and how quickly a person nods during a conversation, and the pace of nodding carries meaningfully different messages depending on whether it is measured and occasional or rapid and near constant throughout. Excessive, rapid nodding often signals eagerness to please, impatience to speak, or a degree of anxiety about the interaction, rather than genuine, considered agreement with what is actually being said. Measured nodding, by contrast, tends to occur at natural pauses and typically reflects authentic engagement and real agreement with the specific point being made at that particular moment. The distinction matters considerably in professional and social settings, since a listener who nods rapidly and continuously throughout an entire conversation may unintentionally signal nervousness or a desire to end the interaction quickly, even if their intention is simply to appear supportive and engaged. Observing how nodding frequency changes at different points within the same conversation, rather than looking only at the overall amount of nodding, tends to reveal far more about a person's genuine level of engagement and agreement with specific ideas being discussed.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A slow, measured nod occurring at natural pauses in conversation</li>
          <li>Rapid, near continuous nodding suggesting eagerness or impatience rather than agreement</li>
          <li>Nodding frequency increasing noticeably when someone is eager to interject</li>
          <li>Genuine agreement nods clustering around specific points rather than continuing constantly</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Nodding frequency that increases sharply right before someone attempts to speak usually reflects eagerness to interject rather than genuine agreement with what is currently being said. Slower, more measured nodding that clusters around specific statements is a more reliable signal of authentic engagement and real agreement with those particular points. Watching for changes in nodding speed at different moments within the same conversation reveals considerably more than simply counting the overall number of nods.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
          <Link to="/dictionary/lowered-head-nod" className="de-related-chip">Lowered Head Nod</Link>
          <Link to="/dictionary/head-tilt" className="de-related-chip">Head Tilt</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Nodding pace is a small but revealing signal that interviewers and candidates alike often overlook. Our guide covers this alongside the full range of interview engagement signals.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
