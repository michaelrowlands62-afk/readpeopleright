import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does steady posture mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Steady posture is a stable, largely unmoving body position maintained through conversation, and in most cases it reflects genuine calm and confidence in the situation.",
      },
    },
    {
      '@type': 'Question',
      name: "Can steady posture ever be a sign of deception?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, an unusually rigid and effortful stillness, rather than a naturally relaxed one, can sometimes reflect a deliberate, controlled effort to suppress nervous movement and appear composed.",
      },
    },
  ],
}

export default function DictSteadyPosture() {
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
        <h1 className="de-title">Steady Posture</h1>
        <p className="de-lead">
          Steady posture describes a stable, largely unmoving body position maintained throughout a conversation, with minimal shifting, fidgeting or unnecessary movement from the shoulders, torso or limbs. In most contexts, this kind of stability reflects genuine calm and confidence, since a person who feels comfortable and secure in a situation generally has little internal restlessness driving them to move or adjust their position frequently. Steady posture is often viewed favourably in professional settings, since it can project composure, reliability and control, qualities that are generally associated with genuine confidence rather than nervous energy. However, steady posture carries an important exception worth understanding, since in some cases an unusually rigid, deliberately controlled stillness can actually reflect controlled deception rather than authentic calm, as a person consciously suppressing nervous movement in an effort to appear composed can sometimes overcorrect into an unnatural, overly still posture. Distinguishing genuine steady posture from this deliberately controlled version generally requires looking at whether the stillness feels natural and relaxed or slightly rigid and effortful, since authentic calm tends to still allow for small, natural movements rather than producing complete, unnatural stillness throughout an entire conversation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Minimal shifting, fidgeting or unnecessary movement throughout a conversation</li>
          <li>The stillness appearing natural and relaxed rather than rigid or effortful</li>
          <li>Small, natural movements still present rather than complete unnatural stillness</li>
          <li>The posture remaining consistent even during difficult or challenging questions</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Steady posture that feels naturally relaxed, allowing for small, unforced movements, generally reflects authentic calm and genuine confidence in the situation. Steady posture that feels unnaturally rigid or effortful, particularly if it appears suddenly during a difficult question, can instead reflect a deliberate, conscious effort to suppress nervous movement and control an outward appearance of calm. Paying attention to whether stillness feels effortless or forced is essential for correctly distinguishing genuine composure from controlled, deliberate concealment.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/grounding-stance" className="de-related-chip">Grounding Stance</Link>
          <Link to="/dictionary/controlled-breathing" className="de-related-chip">Controlled Breathing</Link>
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Genuine composure under pressure is one of the clearest signals of real authority. Our guide covers this alongside the full range of dominance and status cues.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
