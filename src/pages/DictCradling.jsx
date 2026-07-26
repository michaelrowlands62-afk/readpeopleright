import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does cradling mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cradling is holding an object such as a cup or phone close to the chest with both hands, a self comforting gesture that creates a subtle sense of security during moments of anxiety or discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is cradling different from simply holding a drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cradling goes beyond practical necessity, involving a tighter grip and closer proximity to the chest than the object requires, and it typically appears or intensifies at a specific moment of social discomfort.',
      },
    },
  ],
}

export default function DictCradling() {
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
        <h1 className="de-title">Cradling</h1>
        <p className="de-lead">
          Cradling is a self comforting gesture in which a person holds an object, such as a cup,
          glass or phone, with both hands close to the chest rather than resting it on a table or
          holding it loosely at a distance. The behaviour draws on the same underlying psychology as
          hugging oneself or holding a comfort object, using the physical presence of something held
          close to the body to create a subtle sense of security during a moment of anxiety or
          emotional discomfort. Unlike gestures that are purely practical, such as holding a hot
          drink to keep warm, cradling is distinguished by its proximity to the chest and the amount
          of surface contact involved, often using both hands rather than one. The gesture tends to
          appear or intensify during moments of social discomfort, uncertainty or when someone feels
          exposed in front of others, and it typically eases once the source of that discomfort
          passes. Because it uses an everyday object as its vehicle, cradling is a socially
          acceptable way for a person to seek physical comfort without drawing attention to an
          otherwise more obvious self soothing behaviour.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>An object such as a cup, glass or phone held with both hands close to the chest</li>
          <li>The grip and proximity going noticeably beyond what the object practically requires</li>
          <li>The behaviour appearing or intensifying during a specific moment of social discomfort</li>
          <li>A gradual relaxing of the grip once the source of discomfort has passed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Cradling a warm drink on a cold day is simply practical and carries no particular meaning
          on its own. The gesture becomes significant when the grip is unusually tight, held
          unusually close to the chest, or appears specifically at a moment of social pressure such
          as being asked a difficult question in a group setting. In interview and networking
          contexts, someone who begins cradling a drink or a folder tightly only after a specific
          question is asked is showing a meaningful shift toward needing physical comfort, distinct
          from someone who has held the same object the same way throughout the entire conversation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/displacement-activity" className="de-related-chip">Displacement Activity</Link>
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Cradling is one of the quieter self soothing signals of anxiety. Our guide covers this
            alongside the full range of nervous body language.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
