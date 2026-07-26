import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does crossing your ankles mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crossed ankles is a subtler version of crossed arms, often signalling restraint or mild discomfort, and it is especially common in formal settings where a more visible defensive posture would seem inappropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is crossing your ankles always a defensive signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. It is also a simple, comfortable seated position for many people, and becomes meaningful mainly when it appears as a sudden change from how someone was sitting moments earlier.',
      },
    },
  ],
}

export default function DictCrossedAnkles() {
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
        <h1 className="de-title">Crossed Ankles</h1>
        <p className="de-lead">
          Crossed ankles is a seated posture, typically involving one ankle resting lightly over
          the other, that functions as a subtler and more socially acceptable version of fully
          crossed arms or crossed legs. Because crossing the ankles is a much smaller and less
          visually obvious gesture than crossing the arms across the chest, it frequently appears in
          formal or professional settings where a more obviously defensive posture would seem
          inappropriate or overly revealing, such as during interviews, formal meetings or public
          appearances. The gesture still carries a similar underlying function of introducing a
          small degree of physical restraint and containment to the body, often emerging when
          someone feels mildly judged, exposed or uncertain, without the person consciously choosing
          a more obviously guarded posture. Because crossed ankles is also simply a common and
          comfortable way of sitting for many people regardless of their emotional state,
          distinguishing a meaningful instance from an unremarkable habit depends heavily on whether
          the posture represents a noticeable change from how the person was sitting moments
          earlier.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>One ankle resting lightly over the other while seated</li>
          <li>The posture appearing in formal settings where crossed arms would seem too obvious</li>
          <li>A subtle tightening or held quality distinct from a loose, comfortable ankle cross</li>
          <li>The behaviour appearing as a change from how the person was sitting moments before</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Crossed ankles maintained consistently and comfortably throughout a relaxed conversation is
          simply a common seated position and carries little particular meaning. The posture becomes
          more informative when it appears suddenly, held with slightly more tension than before,
          right after a pointed question or a moment of scrutiny, since that timing suggests a
          specific and immediate response rather than an unrelated seating habit.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/arms-crossed" className="de-related-chip">Arms Crossed</Link>
          <Link to="/dictionary/defensive-crossed-legs" className="de-related-chip">Defensive Crossed Legs</Link>
          <Link to="/dictionary/crossed-wrists" className="de-related-chip">Crossed Wrists</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Seated posture reveals a great deal in interviews. Our guide covers how to read and
            present body language while seated across the table.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
