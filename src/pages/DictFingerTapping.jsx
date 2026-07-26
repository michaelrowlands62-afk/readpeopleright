import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does finger tapping mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finger tapping is a rhythmic, repetitive tapping motion that usually signals impatience or restlessness, often increasing in speed the longer a frustrating or tedious situation continues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does finger tapping increase during a long wait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finger tapping functions as a release for nervous or restless energy, and its speed and intensity often rise the longer someone must tolerate a delay or a situation they find tedious.',
      },
    },
  ],
}

export default function DictFingerTapping() {
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
        <h1 className="de-title">Finger Tapping</h1>
        <p className="de-lead">
          Finger tapping is a rhythmic, repetitive tapping motion made with the fingers, usually
          against a table, armrest or one's own leg, and it typically signals impatience or
          restlessness rather than a more acute form of anxiety or fear. The gesture belongs to a
          broader category of small, repetitive movements the body uses to discharge nervous or
          restless energy when a person feels they must wait, sit still, or tolerate a situation that
          is taking longer than they would like. Finger tapping tends to increase in speed and
          intensity the longer a frustrating or tedious situation continues, functioning almost as a
          visible countdown of a person's patience wearing thin. Because the gesture is common,
          subtle and easy to perform without much conscious awareness, it is frequently overlooked,
          yet its presence and increasing tempo can offer a useful early indicator that someone's
          stated patience or interest in a situation does not fully match how they are actually
          feeling as time continues to pass without the outcome they are waiting for.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Rhythmic, repetitive tapping of the fingers against a surface or one's own leg</li>
          <li>The tapping increasing in speed or intensity as a wait or delay continues</li>
          <li>The gesture appearing specifically during moments of enforced waiting or tedium</li>
          <li>A stopping or easing of the tapping once the source of impatience is resolved</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Occasional finger tapping during a naturally slow or reflective moment in conversation is
          unremarkable and does not necessarily indicate meaningful impatience. The gesture becomes
          more informative when it begins or noticeably increases in speed during a specific delay, a
          long wait, or a repetitive explanation the person has already understood, since that
          escalation reflects genuinely rising restlessness rather than an unrelated habit occurring
          throughout the entire interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Finger tapping is one of the moderate stress signals covered in our guide to reading and
            recognising stress before it escalates.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
