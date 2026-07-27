import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does lip compression mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lip compression is the pressing together of the lips into a thin, tight line, and it typically signals suppressed disagreement, discomfort or words being deliberately held back.",
      },
    },
    {
      '@type': 'Question',
      name: "Why is lip compression considered a reliable stress signal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lip compression happens through largely involuntary muscle tension, so it often surfaces even when a person is successfully managing their tone of voice and overall demeanour.",
      },
    },
  ],
}

export default function DictLipCompression() {
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
        <h1 className="de-title">Lip Compression</h1>
        <p className="de-lead">
          Lip compression is the pressing together of the lips into a thin, tight line, often accompanied by a slight whitening of the skin around the mouth as the muscles tighten. This gesture is a widely recognised signal of suppressed emotion, and it frequently appears when someone disagrees with what has just been said, feels uncomfortable with a situation, or is deliberately holding back words they have decided not to say out loud. Because lip compression happens almost entirely through involuntary muscle tension rather than a deliberate, chosen movement, it tends to surface even in people who are otherwise successfully managing their tone of voice and general demeanour. The gesture typically appears suddenly and briefly, often lasting only a second or two before the lips relax again, which means it is easy to miss unless an observer happens to be looking directly at the mouth at that exact moment. Lip compression is especially telling when it appears immediately after a question is asked or a statement is made, since the timing usually points directly to the specific trigger behind the suppressed reaction.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The lips pressed together into a thin, tight line</li>
          <li>A slight whitening or paling of the skin around the mouth</li>
          <li>The compression lasting only a second or two before the lips relax</li>
          <li>The gesture appearing right after a specific question or statement</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Lip compression appearing the instant a difficult question is asked is a strong signal that the person disagrees with or is uncomfortable answering it honestly, even if their spoken response sounds measured and calm. The same brief tightening appearing at random points throughout a conversation with no clear trigger is less meaningful and may simply be a habitual expression for that individual. Watching for the precise timing of the compression relative to what was just said remains the most reliable way to interpret this quick but telling signal.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/jaw-clenching" className="de-related-chip">Jaw Clenching</Link>
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A tightened, compressed mouth is one of the fastest and most involuntary stress signals to spot. Our guide covers this alongside the full range of tension indicators.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
