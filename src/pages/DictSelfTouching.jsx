import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does self touching mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Self touching is the touching of your own face, neck or hair during conversation, and it typically signals discomfort or anxiety that the body is trying to soothe.",
      },
    },
    {
      '@type': 'Question',
      name: "Is a single instance of self touching meaningful?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not usually, since a single touch can simply be habitual, but a clear increase in frequency compared with a person's normal baseline is a much more reliable sign of rising discomfort.",
      },
    },
  ],
}

export default function DictSelfTouching() {
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
        <h1 className="de-title">Self Touching</h1>
        <p className="de-lead">
          Self touching describes the broad category of gestures in which a person touches their own face, neck or hair during conversation, and it is one of the most common physical outlets for discomfort or anxiety that the body produces almost automatically under mild to moderate stress. The behaviour covers a wide range of specific actions, including stroking the neck, tucking hair behind the ear, touching the cheek or resting a hand against the jaw, all of which share the same underlying function of providing a small amount of physical self soothing during an uncomfortable moment. Unlike gestures directed outward toward another person or object, self touching is directed entirely inward at the person's own body, which is part of why it is generally classified as a self soothing rather than a communicative gesture in the traditional sense. The frequency of self touching tends to increase noticeably when a person feels evaluated, criticised or uncertain, making it a useful general indicator of rising discomfort even before more specific stress signals appear elsewhere in the body. Because self touching is such a broad and common category, its meaning is considerably clearer when a noticeable increase is observed relative to a person's normal baseline rather than when a single instance is viewed entirely in isolation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Touching, stroking or scratching the face, neck or hair during conversation</li>
          <li>A noticeable increase in frequency compared with the person's normal resting behaviour</li>
          <li>The touching directed inward at the person's own body rather than outward</li>
          <li>The behaviour increasing specifically around moments of evaluation or criticism</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Self touching that increases noticeably right after a critical comment or a difficult question is a strong signal of rising discomfort tied directly to that specific moment. A steady, low level amount of self touching maintained throughout an entire conversation is less meaningful and may simply reflect a person's habitual resting behaviour rather than a reaction to anything specific being said. Establishing what a person's normal baseline looks like early in a conversation makes it considerably easier to notice a meaningful increase later on.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/hands-in-pockets" className="de-related-chip">Hands In Pockets</Link>
          <Link to="/dictionary/hair-touching" className="de-related-chip">Hair Touching</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Small self soothing gestures like this one are among the most common and overlooked signs of nervousness. Our guide covers this alongside the full range of anxiety indicators.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
