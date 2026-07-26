import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a foot tap mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A foot tap is a repetitive tapping of the foot that usually signals impatience, boredom or suppressed anxiety, often intensifying the longer a tedious or frustrating situation continues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why might someone not notice they are tapping their foot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The foot is further from the face and less consciously monitored than the hands, allowing the tapping to persist or intensify without the person fully realising they are doing it.',
      },
    },
  ],
}

export default function DictFootTap() {
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
        <h1 className="de-title">Foot Tap</h1>
        <p className="de-lead">
          A foot tap is a repetitive, rhythmic tapping of the foot against the floor, and it
          typically signals impatience, boredom or a degree of suppressed anxiety that is finding an
          outlet through small, repeated physical movement. The gesture functions similarly to
          finger tapping, using a contained, repetitive motion to discharge nervous or restless
          energy when a person feels they must wait, sit through something tedious, or tolerate a
          situation that is taking longer or feeling less engaging than they would like. Because the
          foot is further from the face and often less consciously monitored than the hands, a foot
          tap can persist and even intensify without the person fully realising they are doing it,
          particularly if their attention is focused elsewhere on managing their facial expression or
          vocal tone. The speed and intensity of a foot tap often tracks closely with the underlying
          level of impatience or suppressed anxiety, making a sudden increase in tempo a genuinely
          useful signal that someone's outward patience does not fully match their internal state.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repetitive, rhythmic tapping of the foot against the floor or a surface</li>
          <li>The tapping increasing in speed as boredom, impatience or anxiety builds</li>
          <li>The gesture continuing even when the person appears composed elsewhere in their body</li>
          <li>A stopping or easing of the tap once the source of impatience or anxiety resolves</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A foot tap during a naturally slow or reflective pause in conversation is unremarkable and
          does not necessarily suggest meaningful impatience. The gesture becomes more informative
          when it begins or clearly accelerates during a specific wait, a repetitive explanation, or
          a topic the person finds uncomfortable, since that escalation reflects genuinely rising
          internal tension rather than an unrelated habitual movement occurring throughout the entire
          interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/finger-tapping" className="de-related-chip">Finger Tapping</Link>
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A foot tap is one of the moderate stress signals covered in our guide to reading and
            recognising stress before it escalates.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
