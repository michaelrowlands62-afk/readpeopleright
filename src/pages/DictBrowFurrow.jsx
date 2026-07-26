import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a brow furrow mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A brow furrow, the drawing together of the eyebrows, can signal confusion, concentration or mild displeasure depending on the surrounding context and what preceded the expression.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if a brow furrow signals confusion or displeasure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A furrow appearing while someone processes complex information likely reflects concentration, while one appearing suddenly right after a specific comment more likely reflects a flash of displeasure.',
      },
    },
  ],
}

export default function DictBrowFurrow() {
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
        <h1 className="de-title">Brow Furrow</h1>
        <p className="de-lead">
          A brow furrow is the drawing together of the eyebrows, producing vertical lines or
          creases between them, and it is one of the more flexible facial signals since it can
          accompany several quite different underlying emotional states. The most common
          associations are confusion, when someone is struggling to follow or understand something
          being said, concentration, when someone is focusing deeply on a difficult problem or task,
          and mild displeasure, when someone experiences a small flash of irritation or disagreement
          without wanting to express it more openly. Because the same muscular movement underlies
          all three of these states, a brow furrow on its own does not specify precisely which one is
          present, and the surrounding context becomes essential to interpreting it correctly. The
          furrow typically appears quickly and can be sustained for as long as the underlying mental
          state continues, fading once the confusion resolves, the concentration eases, or the
          moment of displeasure passes, which makes its duration and timing important additional
          clues alongside the accompanying situation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The eyebrows drawing together, producing visible vertical lines between them</li>
          <li>The furrow appearing during moments of listening, problem solving or processing information</li>
          <li>A quick, sharp furrow appearing specifically after a particular comment, suggesting displeasure</li>
          <li>The expression easing once confusion resolves or concentration is no longer required</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A brow furrow appearing while someone listens to complex instructions most likely reflects
          genuine concentration or an effort to understand, rather than any negative emotional
          reaction. The same furrow appearing suddenly and briefly immediately after a specific
          comment or statement is more likely to reflect a flash of displeasure or disagreement that
          the person may not be expressing verbally. Considering what was happening in the moment
          just before the furrow appeared is the clearest way to judge which of these different
          explanations actually applies.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/cheek-puffing" className="de-related-chip">Cheek Puffing</Link>
          <Link to="/dictionary/drooping-eyelids" className="de-related-chip">Drooping Eyelids</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The brow is one of the most expressive areas of the face. Our complete guide covers this
            alongside pupil dilation, gaze direction and micro expressions.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
