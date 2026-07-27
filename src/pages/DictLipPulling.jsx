import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does lip pulling mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lip pulling is the drawing of the lower lip inward between the teeth, and it typically signals that a person is deliberately holding back words they want to say but have decided not to voice.",
      },
    },
    {
      '@type': 'Question',
      name: "Is lip pulling the same as lip compression?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, lip compression is a tight pressing together of both lips, while lip pulling specifically involves the lower lip being drawn inward and gripped between the teeth.",
      },
    },
  ],
}

export default function DictLipPulling() {
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
        <h1 className="de-title">Lip Pulling</h1>
        <p className="de-lead">
          Lip pulling is the gesture of drawing the lower lip inward and holding it lightly between the teeth, and it is a reliable signal that a person is deliberately holding back words they want to say but have decided, for whatever reason, not to voice out loud. The action physically restrains the mouth in a way that mirrors the restraint being applied internally, functioning almost as a small, visible act of self censorship performed in real time during the conversation. It commonly appears in the moment just before someone almost interrupts, corrects or contradicts another person, only to change their mind and stay silent instead. Because the gesture involves the teeth actively gripping the lip, it produces a distinctive, sustained visual signal that is generally easier to spot than more fleeting mouth movements, making it one of the more reliable ways to notice when someone is biting back a comment. Lip pulling frequently appears in meetings, family gatherings and other settings where speaking freely carries some social or professional risk, and it often resolves either into continued silence or into a carefully rephrased, softer version of whatever the person originally intended to say.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The lower lip drawn inward and held lightly between the teeth</li>
          <li>The gesture appearing right as a person almost interrupts or objects</li>
          <li>A sustained hold rather than a quick, momentary touch of the lip</li>
          <li>The behaviour resolving into either silence or a softened, rephrased comment</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Lip pulling appearing the instant someone else finishes a controversial or debatable statement is a strong signal that the observer disagrees but has decided not to say so directly. The same gesture appearing randomly throughout a conversation with no clear trigger is less meaningful and may simply be a habitual comfort behaviour for that person. Watching what happens immediately afterward, whether the person stays silent or eventually speaks up in a softer way, often confirms what the gesture was originally signalling.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/lip-compression" className="de-related-chip">Lip Compression</Link>
          <Link to="/dictionary/jaw-clenching" className="de-related-chip">Jaw Clenching</Link>
          <Link to="/dictionary/hand-wringing" className="de-related-chip">Hand Wringing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Holding back words under pressure is one of the clearest signs of suppressed tension. Our guide covers this alongside the full range of stress and restraint signals.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
