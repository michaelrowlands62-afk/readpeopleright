import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does direct eye contact signal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct eye contact is sustained, comfortable eye contact that typically signals confidence, honesty and genuine engagement, though its meaning varies significantly across different cultures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is more eye contact always better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Comfortable eye contact that breaks naturally and returns easily signals genuine engagement, while an unbroken, intense stare can register as intimidating rather than trustworthy.',
      },
    },
  ],
}

export default function DictDirectEyeContact() {
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
        <span className="de-category">Trust Signals</span>
        <h1 className="de-title">Direct Eye Contact</h1>
        <p className="de-lead">
          Direct eye contact refers to sustained, comfortable eye contact maintained during
          conversation without excessive intensity or repeated breaking away, and it is one of the
          most consistently studied trust signals in human communication. In many Western cultural
          contexts, this kind of steady, relaxed eye contact is closely associated with confidence,
          honesty and genuine engagement with the person speaking, since it suggests the individual
          has nothing to hide and feels comfortable being observed while communicating. The key
          distinguishing feature of trustworthy direct eye contact is its comfortable, natural
          quality, breaking away occasionally to think or glance elsewhere before returning easily,
          rather than either avoiding eye contact altogether or maintaining an unbroken, unblinking
          stare that can register as intimidating rather than open. Direct eye contact is also one of
          the more culturally variable signals in body language, since several cultures across Asia,
          Africa and the Middle East treat sustained eye contact with authority figures as
          disrespectful rather than confident, meaning the signal must always be interpreted with
          cultural context in mind rather than as a universal rule.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Steady, relaxed eye contact maintained for a comfortable duration during conversation</li>
          <li>Natural breaks in eye contact to think or glance away before returning easily</li>
          <li>An absence of an unbroken, intense stare that feels intimidating rather than open</li>
          <li>The pattern remaining consistent even when discussing sensitive or difficult subjects</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Direct eye contact carries different weight depending on the cultural background of the
          person being observed. In many Western business and social contexts, comfortable sustained
          eye contact is read as a strong positive trust signal. In several Asian, African and Middle
          Eastern cultural contexts, the same sustained eye contact directed at an authority figure
          can be interpreted as disrespectful rather than confident. Even within a single culture,
          direct eye contact that suddenly disappears specifically when a sensitive topic arises is
          more meaningful than an overall pattern of eye contact considered in isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/pupil-dilation" className="de-related-chip">Pupil Dilation</Link>
          <Link to="/dictionary/closed-eyes-during-speech" className="de-related-chip">Closed Eyes During Speech</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Eye contact is one of the richest areas of body language to read accurately. Our
            complete guide covers this alongside pupil dilation and gaze direction.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
