import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a head tilt mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A head tilt, moving the head to one side while maintaining eye contact, signals curiosity, genuine interest or active listening, and also exposes the neck as a subtle sign of trust.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a head tilt signal trust as well as interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tilting the head exposes part of the neck, an area instinctively protected during threat, so displaying it signals a level of comfort and openness toward the person being spoken with.',
      },
    },
  ],
}

export default function DictHeadTilt() {
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
        <span className="de-category">Engagement Signals</span>
        <h1 className="de-title">Head Tilt</h1>
        <p className="de-lead">
          A head tilt is the movement of the head to one side while maintaining eye contact with
          the person speaking, and it signals curiosity, genuine interest or active listening,
          functioning as one of the more universally recognised nonverbal cues of engaged attention.
          The gesture exposes a portion of the neck, an area that is instinctively protected during
          moments of threat or discomfort, which means tilting the head to one side is also a subtle
          signal of trust and openness toward whoever a person is interacting with, since it would
          not typically be displayed around a perceived threat. A head tilt frequently appears at
          moments when someone is processing new or unexpected information, weighing up what has
          just been said, or simply signalling to the speaker that their words are landing and being
          taken seriously. Because the gesture is small, natural and difficult to consciously fake
          convincingly over an extended period, a head tilt appearing consistently during a
          conversation is generally read as a genuinely positive indicator of attentive, engaged
          listening rather than a performed social technique.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The head tilting to one side while maintaining eye contact with the speaker</li>
          <li>The gesture appearing at moments of processing new or unexpected information</li>
          <li>A portion of the neck becoming visible, signalling trust and openness</li>
          <li>The tilt accompanied by other engagement signals such as nodding or leaning in</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A head tilt appearing naturally during a conversation that genuinely interests the
          listener is a strong and largely spontaneous signal of curiosity and engaged attention.
          The same gesture appearing rarely or not at all during a conversation that would normally
          be expected to generate interest may suggest a lower level of genuine engagement,
          particularly when combined with other signals such as reduced eye contact or a closed
          posture. The head tilt is most informative when compared against how animated or engaged a
          person normally appears in conversation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/forward-lean" className="de-related-chip">Forward Lean</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
          <Link to="/dictionary/eyebrow-raise" className="de-related-chip">Eyebrow Raise</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Reading engagement accurately in meetings starts with small signals like the head tilt.
            Our guide covers this alongside the full range of workplace body language.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
