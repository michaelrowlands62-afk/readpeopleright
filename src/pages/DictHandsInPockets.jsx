import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does having your hands in your pockets signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hands in pockets can signal a lack of confidence or an attempt to hide nervous hand movements, since concealing the hands removes a significant channel of visible nonverbal communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hands in pockets always a sign of low confidence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. For some people it is simply a comfortable habit, and it becomes more meaningful mainly when it appears as a sudden change during a moment of pressure or scrutiny.',
      },
    },
  ],
}

export default function DictHandsInPockets() {
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
        <h1 className="de-title">Hands in Pockets</h1>
        <p className="de-lead">
          Standing or sitting with hands in pockets can signal a lack of confidence or an attempt
          to hide nervous hand movements from view, removing the hands from sight rather than risk
          revealing fidgeting, trembling or other visible signs of anxiety. Because the hands are
          one of the more expressive and frequently observed parts of the body during conversation,
          hiding them removes a significant channel of nonverbal communication, which is itself a
          meaningful signal, since confident, comfortable communicators generally allow their hands
          to remain visible and expressive rather than concealed. The gesture is not universally
          negative, since some people simply find pockets a comfortable resting place for their
          hands as a matter of habit, but when it appears as a noticeable change from how someone
          normally holds their hands, particularly during a moment of increased pressure or
          scrutiny, it becomes a more meaningful indicator of discomfort. Hands in pockets combined
          with hunched shoulders or a generally contracted posture further reinforces the reading of
          reduced confidence rather than simple habitual comfort.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Both hands placed in pockets rather than remaining visible during conversation</li>
          <li>The gesture appearing as a change from how the person normally holds their hands</li>
          <li>Hands in pockets combined with hunched shoulders or a contracted overall posture</li>
          <li>The behaviour increasing specifically during moments of pressure or direct scrutiny</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Hands in pockets as a person's consistent, habitual resting position throughout a relaxed
          conversation is simply a comfortable personal habit and carries little particular meaning.
          The gesture becomes more informative when it appears suddenly, particularly during a moment
          of increased pressure or a difficult question, especially if combined with other signals
          such as hunched shoulders, since that combination suggests genuine discomfort rather than
          an unrelated resting habit.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
          <Link to="/dictionary/hand-barrier" className="de-related-chip">Hand Barrier</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Hand visibility matters more than most candidates realise in an interview setting. Our
            guide covers hand gestures alongside the full range of interview body language.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
