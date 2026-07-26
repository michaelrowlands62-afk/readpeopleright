import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are gravity defying gestures in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gravity defying gestures are upward movements such as raised heels, upward palms or a lifted chin that signal positive emotional states and confidence, working against gravity rather than settling downward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do gravity defying gestures signal confidence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upward movement is consistently associated with positive feeling and expansion across posture and gesture, while downward, contracted movement is associated with negative feeling and withdrawal.',
      },
    },
  ],
}

export default function DictGravityDefyingGestures() {
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
        <h1 className="de-title">Gravity Defying Gestures</h1>
        <p className="de-lead">
          Gravity defying gestures are upward physical movements, such as raised heels, upward
          facing palms or a lifted chin, that share a common quality of working against gravity
          rather than settling downward, and they consistently signal positive emotional states and
          confidence across a range of contexts. The underlying psychology draws on a broader
          pattern in which upward movement is associated with positive feeling and expansion, while
          downward, contracted movement is associated with negative feeling and withdrawal, a
          pattern observed consistently across posture, gesture and even vocal pitch. Someone
          experiencing genuine confidence, excitement or positive anticipation will often display
          small upward movements without conscious awareness, such as rising slightly onto the balls
          of their feet, lifting their palms during an enthusiastic gesture, or tilting their chin
          upward as they speak. Because these movements happen largely below conscious control and
          require a degree of physical energy that is difficult to sustain artificially, a cluster of
          gravity defying gestures appearing together is considered a genuinely useful indicator of
          authentic positive emotional state rather than a deliberately performed display.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Heels rising slightly or weight shifting onto the balls of the feet</li>
          <li>Palms turning upward during expressive or enthusiastic hand gestures</li>
          <li>The chin lifting slightly as a person speaks with genuine enthusiasm or confidence</li>
          <li>Multiple upward movements appearing together rather than a single isolated gesture</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A single gravity defying gesture, such as a momentarily lifted chin, carries relatively
          little meaning in isolation and could simply reflect a passing moment of posture. The
          signal becomes considerably more informative when several gravity defying gestures appear
          together within a short space of time, such as rising heels combined with upward palms and
          a lifted chin, since that cluster is a much stronger indicator of genuine positive
          emotional state than any single upward movement considered on its own.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Gravity defying gestures are one of many practical confidence signals. Our guide covers
            ten specific changes you can make to project genuine confidence today.
          </p>
          <Link to="/guides/confident-body-language" className="de-cta-btn">
            Read the Confident Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
