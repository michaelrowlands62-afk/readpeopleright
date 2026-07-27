import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does interlaced fingers mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Interlaced fingers is the clasping of both hands together with woven fingers, and when held tightly or raised to chest height it typically signals frustration or restrained emotional tension.",
      },
    },
    {
      '@type': 'Question',
      name: "Does interlaced fingers always mean someone is stressed?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not always, since a loose, low clasp in the lap often reflects genuine relaxation, while a tight, high, rigid clasp is the version most reliably linked to suppressed tension.",
      },
    },
  ],
}

export default function DictInterlacedFingers() {
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
        <h1 className="de-title">Interlaced Fingers</h1>
        <p className="de-lead">
          Interlaced fingers describe the gesture of clasping both hands together with the fingers woven between each other, a posture that can appear resting in the lap, on a table or raised in front of the chest. While the gesture can occasionally look calm or composed from a distance, researchers who study hand posture have found that interlaced fingers, especially when held tightly or raised higher than waist level, frequently signal frustration, restrained tension or an attempt to suppress a strong emotional reaction. The tighter the clasp and the whiter the knuckles become, the more intense the underlying tension is likely to be, since the hands are essentially squeezing against each other as an outlet for energy that cannot otherwise be expressed. This differs from a loose, low, relaxed clasp, which tends to reflect genuine calm rather than suppressed feeling. The height at which the hands are held also matters, since interlaced fingers raised to chest height or higher, sometimes described as a steeple in reverse, generally indicate a more negative or defensive emotional state than the same gesture resting loosely in the lap.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Fingers woven tightly together with visible tension or whitening at the knuckles</li>
          <li>The clasped hands raised to chest height rather than resting loosely in the lap</li>
          <li>The gesture appearing immediately after a frustrating or contradicted statement</li>
          <li>A rigid, unmoving clasp held for an extended period rather than shifting naturally</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Interlaced fingers held tightly at chest height during a disagreement or a difficult negotiation usually reflect suppressed frustration that the person is not expressing verbally. The same gesture appearing loosely in the lap during a relaxed conversation is far less significant and may simply be a comfortable resting position. Paying attention to how tightly the fingers are clasped and how high the hands are held gives a much clearer read than the gesture alone, since intensity and height both track closely with the underlying level of restrained tension.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Restrained hand gestures like this one are among the clearest windows into suppressed stress. Our guide covers this alongside the full range of tension signals.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
