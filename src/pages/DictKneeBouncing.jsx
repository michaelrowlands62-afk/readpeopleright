import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does knee bouncing mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Knee bouncing is the repetitive up and down movement of the knee while seated, and it typically signals nervous energy, impatience or restlessness that a person may not be aware of.",
      },
    },
    {
      '@type': 'Question',
      name: "Is knee bouncing always a sign of anxiety?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not always, since a slow, steady bounce can simply be a longstanding habit, but a sudden increase in speed during a specific moment usually points to rising impatience or anxiety.",
      },
    },
  ],
}

export default function DictKneeBouncing() {
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
        <h1 className="de-title">Knee Bouncing</h1>
        <p className="de-lead">
          Knee bouncing is the repetitive up and down movement of one or both knees while seated, typically driven by the heel lifting and lowering rapidly against the floor, and it is one of the most common physical outlets for nervous or restless energy. The behaviour is largely unconscious, meaning most people who bounce their knee are not actively aware they are doing it until someone else points it out or the movement is interrupted. Knee bouncing tends to increase in speed and intensity as underlying impatience, anxiety or restlessness builds, making it a useful real time gauge of how a person's internal state is shifting during a meeting, interview or waiting period. Because the legs are further from a person's conscious attention than the hands or face, this gesture often continues even when someone has otherwise composed their expression and tone of voice, making it a particularly honest signal. It commonly appears in situations involving anticipation, such as waiting for results, sitting through a long presentation, or feeling eager to speak but being unable to interrupt.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Rapid, repetitive up and down movement of one or both knees while seated</li>
          <li>The heel lifting and dropping quickly against the floor to drive the motion</li>
          <li>The speed of the bouncing increasing as impatience or anxiety builds</li>
          <li>The behaviour continuing even when the face and voice appear composed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Knee bouncing that speeds up noticeably during a specific part of a meeting or conversation usually reflects rising impatience or anxiety tied to that exact moment. A slower, steady bounce maintained throughout an entire conversation is more likely to be a longstanding personal habit rather than a reaction to anything specific being discussed. Because the legs are rarely consciously monitored, a sudden change in bouncing speed is often a more honest signal than a person's face or tone of voice at that same moment.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/foot-tap" className="de-related-chip">Foot Tap</Link>
          <Link to="/dictionary/finger-tapping" className="de-related-chip">Finger Tapping</Link>
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Restless leg movements like this one are common in meetings and interviews under pressure. Our guide covers this alongside the full range of workplace signals.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
