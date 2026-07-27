import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does open stance mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Open stance is a standing posture with the feet shoulder width apart and the body facing the other person directly, and it typically signals confidence and genuine receptiveness.",
      },
    },
    {
      '@type': 'Question',
      name: "How is open stance different from a closed defensive posture?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Open stance leaves the arms and front of the body visible and facing the other person, while a closed posture like crossed arms reduces exposure and often signals guardedness instead.",
      },
    },
  ],
}

export default function DictOpenStance() {
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
        <h1 className="de-title">Open Stance</h1>
        <p className="de-lead">
          Open stance is a standing posture in which the feet are positioned roughly shoulder width apart and the body faces the other person directly, with the arms and hands left visible rather than crossed, hidden or drawn inward. This posture signals confidence and receptiveness, since facing someone fully and leaving the front of the body exposed communicates a lack of perceived threat and a genuine willingness to engage with them. Open stance contrasts sharply with defensive postures like crossed arms or an angled body position, both of which tend to reduce the amount of the body directly facing the other person and can create an impression of guardedness or reluctance to engage fully. The posture is particularly noticeable in situations where two people are meeting for the first time or discussing something important, since choosing to stand openly rather than protectively in these moments sends a clear signal about how comfortable and receptive a person feels. Because open stance requires a degree of genuine ease to maintain naturally over time, a person who begins a conversation in a closed position and gradually shifts into an open stance as the interaction progresses is generally displaying growing comfort and trust in the other person or the situation itself.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Feet positioned roughly shoulder width apart with weight evenly distributed</li>
          <li>The body and torso facing the other person directly rather than at an angle</li>
          <li>Arms and hands left visible rather than crossed or hidden</li>
          <li>The posture developing gradually from a more closed position as comfort builds</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Open stance maintained naturally throughout a conversation reflects genuine comfort, confidence and receptiveness toward the other person or the situation at hand. A stance that shifts gradually from closed to open as a conversation develops is a particularly strong signal, since it tracks a real, growing sense of trust rather than reflecting a fixed personality trait. A stance forced open despite visible tension elsewhere in the body, such as a clenched jaw or fixed smile, is less reliable and suggests the openness may be more deliberate than genuine.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/open-palms" className="de-related-chip">Open Palms</Link>
          <Link to="/dictionary/grounding-stance" className="de-related-chip">Grounding Stance</Link>
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Standing open and facing someone directly is one of the simplest ways to project genuine confidence. Our guide covers this alongside the full range of confidence building changes.
          </p>
          <Link to="/guides/confident-body-language" className="de-cta-btn">
            Read the Confident Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
