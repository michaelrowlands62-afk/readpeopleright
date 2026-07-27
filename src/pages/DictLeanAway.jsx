import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does lean away mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lean away is the backward shift of the upper body during conversation, and it typically signals discomfort, disagreement or a desire for greater personal distance.",
      },
    },
    {
      '@type': 'Question',
      name: "How can you tell if a lean away is meaningful or just a normal posture shift?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A meaningful lean away usually appears right after a specific comment or proposal, while a gradual shift over a long conversation is more likely to reflect general fatigue.",
      },
    },
  ],
}

export default function DictLeanAway() {
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
        <span className="de-category">Defensive Signals</span>
        <h1 className="de-title">Lean Away</h1>
        <p className="de-lead">
          Lean away describes the act of pulling the upper body backward during a conversation, moving further from the other person without necessarily changing the direction the feet or torso are facing. This subtle shift in distance is one of the more reliable early indicators of discomfort, disagreement or a desire for greater personal space, since increasing physical distance from someone is one of the most fundamental ways the body expresses a wish to disengage. Unlike a dramatic step backward, lean away is often small enough to go unnoticed by the person causing the reaction, making it a particularly honest and useful signal for anyone paying close attention. It commonly appears the moment a topic becomes uncomfortable, a proposal feels unwelcome, or a person's physical proximity starts to feel excessive to the listener. Because the gesture can be triggered by something as simple as an unwelcome idea or as significant as a serious disagreement, the specific timing of a lean away relative to what was just said or done is essential for correctly interpreting what is driving it.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The upper body shifting backward while the feet often remain in place</li>
          <li>The movement appearing right after a specific comment, proposal or approach</li>
          <li>A subtle increase in distance rather than a dramatic, obvious step back</li>
          <li>The gesture paired with a neutral or guarded facial expression rather than open hostility</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Lean away appearing the instant a specific proposal or comment is introduced is a strong signal that the idea has landed poorly, even if the verbal response remains polite and noncommittal. The same movement occurring gradually over the course of a long, tiring conversation may simply reflect general fatigue or a need for more personal space rather than disagreement with any particular point. Tracking exactly when the lean away occurs relative to the conversation is the clearest way to separate a meaningful reaction from an unrelated shift in posture.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/crossed-ankles" className="de-related-chip">Crossed Ankles</Link>
          <Link to="/dictionary/hand-barrier" className="de-related-chip">Hand Barrier</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Distance and proximity are two of the clearest signals of how a proposal is really landing. Our guide covers this alongside the full range of dominance and status cues.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
