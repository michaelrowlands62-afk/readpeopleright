import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is a microexpression in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A microexpression is a brief, involuntary facial expression lasting under half a second that reveals a true emotion before a person can consciously mask it.",
      },
    },
    {
      '@type': 'Question',
      name: "Are microexpressions the same across all cultures?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, research has found that microexpressions linked to core emotions like anger, fear and contempt follow universal patterns that hold true across different cultures.",
      },
    },
  ],
}

export default function DictMicroexpression() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Microexpression</h1>
        <p className="de-lead">
          A microexpression is a brief, involuntary facial expression that lasts only a fraction of a second, typically well under half a second, and it reveals a person's true underlying emotion before they have a chance to consciously recognise and mask it. Unlike an ordinary facial expression, which a person can control, sustain or deliberately produce, a microexpression happens automatically as an initial, honest reaction before the brain's more deliberate control systems take over and replace it with whatever expression the person actually intends to display. Because microexpressions are so brief, they are extremely easy to miss during normal conversation, and recognising them reliably generally requires either specific training or reviewing slowed down video footage frame by frame afterward. Research into microexpressions has identified a consistent set of universal facial patterns linked to core emotions including anger, contempt, disgust, fear, surprise, joy and sadness, and these patterns appear to hold true across different cultures rather than being learned or culturally specific behaviours. Because a microexpression captures a moment before conscious control takes over, spotting one that clearly contradicts a person's spoken words or their intended facial expression is considered one of the more reliable indicators that genuine emotion differs from what is being outwardly presented.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A facial expression lasting well under half a second before it disappears</li>
          <li>The expression appearing to contradict the person's words or intended demeanour</li>
          <li>A pattern matching one of the universally recognised core emotions</li>
          <li>The expression followed immediately by a more controlled, deliberate facial reaction</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A microexpression that clearly contradicts what someone is saying, such as a flash of contempt appearing during an agreeable sounding statement, is a strong signal that their genuine feelings differ from their spoken words. A single microexpression is not definitive proof of dishonesty on its own, since strong emotions can leak through even when someone is being entirely truthful about something unrelated. Because these expressions are so brief, spotting them reliably in real time takes practice, and reviewing a recorded conversation is often the more reliable way to confirm what was genuinely shown.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
          <Link to="/dictionary/genuine-surprise" className="de-related-chip">Genuine Surprise</Link>
          <Link to="/dictionary/facial-symmetry-check" className="de-related-chip">Facial Symmetry Check</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Microexpressions are the foundation of modern deception detection research. Our guide covers this alongside the full range of verbal and nonverbal lying signals.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
