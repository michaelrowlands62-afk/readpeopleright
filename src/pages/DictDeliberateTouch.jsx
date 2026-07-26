import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does deliberate touch mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deliberate touch is intentional physical contact such as a hand on the arm or shoulder, which can signal warmth, authority or romantic interest depending on the relationship and context involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if deliberate touch signals attraction rather than friendliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Attraction is more likely when the touch lingers slightly longer than necessary, repeats over the course of an interaction and is warmly reciprocated rather than simply tolerated.',
      },
    },
  ],
}

export default function DictDeliberateTouch() {
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
        <span className="de-category">Attraction Signals</span>
        <h1 className="de-title">Deliberate Touch</h1>
        <p className="de-lead">
          Deliberate touch refers to intentional physical contact initiated during conversation,
          such as a hand briefly placed on the arm or shoulder, and it is one of the more direct and
          revealing signals available in reading interpersonal dynamics. Unlike incidental contact
          that occurs by accident in a crowded space, deliberate touch is purposeful, timed to a
          specific moment in the conversation, and often accompanied by a brief pause or a change in
          vocal tone that marks it as significant to the person initiating it. The meaning of
          deliberate touch depends heavily on the relationship and context in which it occurs, since
          the same gesture can signal simple warmth and friendliness between colleagues, an assertion
          of authority or dominance in a hierarchical relationship, or genuine romantic interest
          between two people who are attracted to each other. Watching how the touch is received is
          just as informative as the touch itself, since a person who leans into or reciprocates
          deliberate touch is signalling comfort and openness, while one who subtly withdraws or
          stiffens is signalling the opposite.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Purposeful contact such as a hand on the arm or shoulder timed to a specific moment</li>
          <li>The touch accompanied by a brief pause, a smile or a shift in vocal tone</li>
          <li>The recipient leaning into or reciprocating the touch rather than pulling away</li>
          <li>The gesture repeating over the course of an interaction rather than occurring only once</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Deliberate touch between colleagues in a professional setting generally signals warmth or
          encouragement rather than romantic interest, particularly when it is brief and consistent
          with how that person treats others. The same gesture on a date or during a personal
          conversation, especially when it lingers slightly longer than necessary or is repeated at
          several points, is far more likely to signal genuine attraction. The clearest way to
          interpret deliberate touch is to consider the existing relationship, the setting and how
          the touch is received, rather than reading the gesture in isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/pupil-dilation" className="de-related-chip">Pupil Dilation</Link>
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/belly-button-rule" className="de-related-chip">Belly Button Rule</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Touch initiation is one of the twelve most reliable attraction signals covered in our
            complete guide to genuine interest and connection.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
