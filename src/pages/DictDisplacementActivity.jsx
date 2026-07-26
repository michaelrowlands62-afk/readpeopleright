import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is displacement activity in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Displacement activity is performing unnecessary, repetitive actions such as straightening papers or adjusting clothing to release nervous energy during a stressful moment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people perform displacement activities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These actions provide a physical outlet for stress that has nowhere else to go, allowing a person to maintain outward composure in their face and voice while releasing tension through small physical tasks.',
      },
    },
  ],
}

export default function DictDisplacementActivity() {
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
        <h1 className="de-title">Displacement Activity</h1>
        <p className="de-lead">
          Displacement activity refers to performing unnecessary, often repetitive actions, such as
          straightening papers, adjusting clothing, reorganising objects on a desk or fidgeting with
          a pen, as a way of discharging nervous energy during a stressful moment. The term
          originates from the observation that these actions serve no direct practical purpose in
          the situation at hand, yet they provide the body with a physical outlet for tension that
          has nowhere else productive to go. Displacement activity tends to increase in frequency and
          intensity as underlying stress rises, functioning as a kind of pressure release valve that
          allows a person to maintain outward composure in their face and voice while the excess
          nervous energy is directed into small physical tasks instead. Because the behaviour is
          common and often socially unremarkable in isolation, such as tidying a desk or adjusting a
          sleeve, it is easy to overlook unless attention is paid specifically to when it begins, how
          often it repeats and whether it corresponds to a particular point in the conversation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Unnecessary, repetitive actions such as straightening papers or adjusting clothing</li>
          <li>The behaviour increasing in frequency as a conversation becomes more stressful</li>
          <li>Actions with no practical purpose relative to the actual situation taking place</li>
          <li>The activity appearing specifically at moments of pressure rather than throughout</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Someone who tidies their desk once at the start of a meeting is simply being organised and
          the behaviour means little on its own. The same person repeatedly straightening the same
          papers or adjusting their clothing multiple times specifically after a difficult question
          is displaying displacement activity as a genuine stress release. The frequency and timing
          of the behaviour, rather than its mere presence, is what turns an ordinary action into a
          meaningful signal of rising internal tension.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/cradling" className="de-related-chip">Cradling</Link>
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Displacement activity is one of the moderate stress signals covered in our guide to
            reading and recognising stress before it escalates.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
