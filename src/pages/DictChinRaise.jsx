import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a chin raise mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chin raise is a slight upward tilt of the head that exposes the front of the neck, generally read as a signal of confidence, and in a more pronounced form, defiance or challenge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does raising the chin signal confidence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lifting the chin exposes a vulnerable part of the body that is instinctively protected during fear, so doing so voluntarily signals a lack of perceived threat and genuine self assurance.',
      },
    },
  ],
}

export default function DictChinRaise() {
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
        <span className="de-category">Confidence Signals</span>
        <h1 className="de-title">Chin Raise</h1>
        <p className="de-lead">
          A chin raise is a small upward tilt of the chin that lifts the head slightly and subtly
          changes the angle at which a person is viewed by others. Because raising the chin exposes
          the vulnerable front of the neck, a body area that is instinctively protected during
          moments of genuine fear or submission, doing so voluntarily is read by observers as a
          display of confidence and a lack of perceived threat. The gesture is commonly seen just
          before someone makes an assertive statement, pushes back against a challenge, or wants to
          project authority without raising their voice or becoming visibly aggressive. In its milder
          form the chin raise signals simple self assurance. In a more pronounced form, held longer
          and combined with direct eye contact, it can shift toward signalling defiance or a degree
          of challenge directed at whoever the person is speaking with. The chin raise is one of the
          more deliberately controllable confidence signals, which means it is frequently practised
          and consciously adopted by people preparing for high stakes situations such as interviews
          or public appearances.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The chin lifting slightly, exposing more of the front of the neck than usual</li>
          <li>The gesture appearing just before an assertive statement or pushback</li>
          <li>A more pronounced, held raise combined with direct eye contact signalling defiance</li>
          <li>The behaviour being used deliberately before high stakes moments such as interviews</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A brief, natural chin raise during relaxed conversation generally reflects simple ease and
          self assurance. The same gesture held for a longer duration, combined with a fixed stare
          and a stationary body, shifts in meaning toward challenge or defiance, particularly in a
          tense or confrontational exchange. In professional settings, a deliberately adopted chin
          raise before a difficult conversation is often a conscious confidence technique rather than
          a spontaneous emotional signal, which means its presence should be weighed alongside how
          naturally it appears to sit within the rest of the person's posture.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/closed-eyes-during-speech" className="de-related-chip">Closed Eyes During Speech</Link>
          <Link to="/dictionary/controlled-breathing" className="de-related-chip">Controlled Breathing</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The chin raise is one of the classic power gestures covered in our guide to dominance,
            status and authority signals.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
