import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does hair touching mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hair touching can signal nervousness through self soothing repetitive movement, or in social and dating contexts, flirtation and attraction through unconscious preening behaviour.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if hair touching signals nervousness or attraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nervous hair touching tends to appear with closed signals like reduced eye contact, while flirtatious hair touching appears alongside open signals such as smiling and sustained eye contact.',
      },
    },
  ],
}

export default function DictHairTouching() {
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
        <span className="de-category">Attraction Signals</span>
        <h1 className="de-title">Hair Touching</h1>
        <p className="de-lead">
          Hair touching involves repeatedly touching, twirling or adjusting one's own hair during
          conversation, and the gesture can signal two quite different underlying states depending
          on the surrounding context, either nervousness or, particularly in social and dating
          situations, flirtation and attraction. As a nervous gesture, hair touching functions
          similarly to other self soothing behaviours, providing a small physical outlet for anxious
          energy through repetitive, comforting movement. As a flirtation signal, the same gesture
          becomes a form of preening, an unconscious attempt to draw attention to one's appearance
          and signal awareness of and interest in another person's presence. The two interpretations
          are distinguished mainly by the accompanying signals present at the same time, since
          nervous hair touching tends to appear alongside other stress indicators such as reduced eye
          contact or a closed posture, while flirtatious hair touching tends to appear alongside
          positive engagement signals such as smiling, sustained eye contact and a body oriented
          toward the person of interest. Because the same physical gesture can carry such different
          meanings, hair touching is one of the clearer examples of why context always matters more
          than any single signal in isolation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repeated touching, twirling or adjusting of the hair during conversation</li>
          <li>The gesture paired with reduced eye contact and closed posture, suggesting nervousness</li>
          <li>The same gesture paired with smiling, eye contact and open posture, suggesting flirtation</li>
          <li>Hair touching appearing specifically in the presence of a particular person of interest</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Hair touching that appears consistently regardless of who is present or what topic is
          being discussed likely reflects a general nervous habit rather than attraction toward
          anyone specific. The same gesture appearing specifically and consistently in the presence
          of one particular person, combined with genuine smiling and sustained eye contact, is a
          much stronger indicator of flirtation and attraction. Watching for which other signals
          accompany the hair touching, rather than reading the gesture alone, is essential to
          correctly interpreting what it reveals.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/earlobe-tugging" className="de-related-chip">Earlobe Tugging</Link>
          <Link to="/dictionary/grooming-another" className="de-related-chip">Grooming Another</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Hair touching is one of the twelve most reliable attraction signals covered in our
            complete guide to genuine interest and connection.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
