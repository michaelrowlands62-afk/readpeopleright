import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does weight shifting mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Weight shifting is the repeated movement of body weight from one foot to the other while standing, and it typically signals impatience, nervousness or a desire to leave the situation.",
      },
    },
    {
      '@type': 'Question',
      name: "How is weight shifting different from foot tapping?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Weight shifting happens while standing and involves the entire lower body, while foot tapping usually happens while seated and involves just the foot or ankle moving repeatedly.",
      },
    },
  ],
}

export default function DictWeightShifting() {
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
        <h1 className="de-title">Weight Shifting</h1>
        <p className="de-lead">
          Weight shifting is the repeated movement of body weight from one foot to the other while standing, often appearing as a subtle rocking or swaying motion rather than any single dramatic movement, and it frequently signals impatience, nervousness or a growing desire to leave the current situation. The behaviour is largely driven by restless physical energy that builds up during a stressful or tedious moment and needs some kind of outlet, and shifting weight between the feet offers a low effort, socially acceptable way of releasing that energy without drawing significant attention. Weight shifting is especially common in situations involving prolonged standing, such as waiting in a line, standing through a long presentation or waiting for an uncomfortable conversation to end, where the combination of physical discomfort and psychological restlessness reinforces the behaviour. Unlike foot tapping, which usually happens while seated, weight shifting specifically requires a standing position and tends to involve the entire lower body rather than just the foot or ankle. The frequency and speed of weight shifting generally increase as impatience or discomfort builds, making the pace of the movement itself a useful indicator of how a person's underlying state is changing in real time.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Weight rocking or swaying repeatedly from one foot to the other while standing</li>
          <li>The behaviour appearing most often during prolonged standing or waiting</li>
          <li>The pace of shifting increasing as impatience or discomfort builds</li>
          <li>The movement involving the entire lower body rather than just the foot</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Weight shifting that speeds up noticeably during a specific part of a conversation or wait usually reflects rising impatience or a growing desire to leave that particular situation. A slower, occasional shift maintained evenly throughout a long period of standing is less meaningful and may simply reflect ordinary physical discomfort from standing still for an extended time. Watching for a clear increase in the pace of shifting, rather than its simple presence, gives a more accurate read on a person's genuine underlying state.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/foot-tap" className="de-related-chip">Foot Tap</Link>
          <Link to="/dictionary/knee-bouncing" className="de-related-chip">Knee Bouncing</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Restless standing behaviour is easy to spot once you know what to look for in meetings and presentations. Our guide covers this alongside the full range of workplace signals.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
