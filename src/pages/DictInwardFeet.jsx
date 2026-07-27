import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does inward feet mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Inward feet is a posture where the toes point toward each other rather than forward, and it typically signals submission, shyness or a desire to appear less threatening.",
      },
    },
    {
      '@type': 'Question',
      name: "Why are the feet considered a reliable signal of shyness?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The feet are one of the least consciously controlled parts of the body, so inward pointing toes often reveal genuine discomfort even when the face and voice appear composed.",
      },
    },
  ],
}

export default function DictInwardFeet() {
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
        <h1 className="de-title">Inward Feet</h1>
        <p className="de-lead">
          Inward feet describe a standing or seated posture in which the toes point toward each other rather than facing forward or toward the person being spoken to, sometimes accompanied by the knees turning slightly inward as well. This foot position is widely recognised as a submission and shyness signal, since it effectively makes the body appear smaller and less imposing while also reducing the amount of space the person occupies. It is especially common in children and in adults who feel unsure of themselves in a social or professional setting, such as during a first meeting with someone senior or while being introduced to an unfamiliar group. The gesture often appears alongside other small body signals, including hunched shoulders, a lowered chin or hands clasped in front of the body, all of which combine to communicate a desire to appear unthreatening and to avoid drawing unwanted attention. Because feet are among the most honest and least consciously controlled parts of the body, inward pointing toes are considered a particularly reliable indicator of underlying shyness or discomfort, even when a person's face and voice appear outwardly composed.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Toes pointing toward each other rather than forward or toward the other person</li>
          <li>Knees turning slightly inward alongside the feet</li>
          <li>The posture paired with hunched shoulders or a lowered chin</li>
          <li>The gesture appearing most strongly during introductions or unfamiliar social settings</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Inward feet appearing when someone is introduced to a new group or a senior figure usually reflects genuine shyness or a lack of confidence in that specific moment, rather than a permanent personality trait. The same posture seen consistently across many different situations may instead point to a more general pattern of social discomfort. Because the feet are rarely consciously managed, this signal is particularly useful for spotting discomfort that a person's face or voice may be successfully masking.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/cowering" className="de-related-chip">Cowering</Link>
          <Link to="/dictionary/crossed-ankles" className="de-related-chip">Crossed Ankles</Link>
          <Link to="/dictionary/hands-in-pockets" className="de-related-chip">Hands In Pockets</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Foot position is one of the most honest and least controlled signals of nervousness. Our guide covers this alongside the full range of anxiety indicators.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
