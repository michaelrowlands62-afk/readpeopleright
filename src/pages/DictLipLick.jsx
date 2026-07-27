import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does lip licking mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lip licking is a brief touching or wetting of the lips with the tongue, and depending on context it can signal anxiety, anticipation or attraction rather than one fixed meaning.",
      },
    },
    {
      '@type': 'Question',
      name: "How can you tell if lip licking signals stress or attraction?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lip licking paired with a tightened jaw or gaze aversion usually points to stress, while the same gesture paired with sustained eye contact and a relaxed posture more often signals attraction.",
      },
    },
  ],
}

export default function DictLipLick() {
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
        <h1 className="de-title">Lip Lick</h1>
        <p className="de-lead">
          Lip licking is a brief, often unconscious touching or wetting of the lips with the tongue, and depending on the surrounding context it can point to anxiety, anticipation or attraction rather than one single fixed meaning. The mouth is one of the first places the body registers stress, since nervous tension tends to dry out the mouth and lips, which triggers a natural, largely reflexive urge to moisten them with the tongue. When it appears alongside other stress signals like a tightened jaw or gaze aversion during a difficult question, lip licking generally reflects genuine nervousness or discomfort with the situation at hand. But the same gesture can carry a very different meaning in a social or romantic setting, where it often signals anticipation or attraction, especially when paired with sustained eye contact and a relaxed, open posture rather than defensive body language. Because a single dry mouth explanation cannot cover every appearance of the gesture, the surrounding cluster of signals is essential for correctly reading lip licking, since the same simple action of the tongue touching the lips can point toward stress in one setting and toward genuine interest in another entirely.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A quick touch or sweep of the tongue across the upper or lower lip</li>
          <li>The gesture appearing right after a difficult or unexpected question</li>
          <li>Lip licking paired with a tightened jaw or gaze aversion during stress</li>
          <li>The same gesture paired with sustained eye contact and a relaxed posture during attraction</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Lip licking that appears the moment a difficult question is asked, especially alongside a tightened jaw or averted gaze, generally points to genuine nervousness about how to respond. The same gesture appearing during a relaxed social conversation, paired with sustained eye contact and an open, comfortable posture, is far more likely to reflect anticipation or attraction rather than stress. Reading the surrounding cluster of signals, rather than the lip lick in isolation, is essential for telling these two very different meanings apart.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/lip-compression" className="de-related-chip">Lip Compression</Link>
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
          <Link to="/dictionary/gaze-aversion" className="de-related-chip">Gaze Aversion</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Mouth and lip signals shift quickly between stress and attraction depending on context. Our guide covers how to read nervous tension accurately across different situations.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
