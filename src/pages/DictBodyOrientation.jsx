import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does body orientation mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Body orientation refers to the direction a person's torso and shoulders face, which reveals genuine interest and engagement more reliably than the direction of the face alone.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is body orientation more reliable than facial direction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The face is often directed toward someone out of social politeness, while the torso orients more involuntarily toward genuine interest, making it a harder signal to consciously control.',
      },
    },
  ],
}

export default function DictBodyOrientation() {
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
        <h1 className="de-title">Body Orientation</h1>
        <p className="de-lead">
          Body orientation refers to the direction a person's torso and shoulders face relative to
          another person or group, and it is one of the most consistently reliable engagement
          signals available because it operates largely outside conscious social management. While
          the face is frequently directed toward someone purely out of politeness, the torso tends to
          orient more honestly toward whatever a person is genuinely focused on or drawn to. A fully
          open body orientation, with shoulders and chest squared toward another person, generally
          signals attentiveness, comfort and genuine engagement with that individual. A partial or
          angled orientation, where the torso is turned somewhat away even as the face remains
          directed forward, often signals a more reserved or divided level of engagement. Because
          body orientation shifts naturally and often unconsciously in response to genuine interest,
          tracking how it changes over the course of an interaction, particularly in comparison to
          where the face is pointed, offers one of the clearer windows into a person's true level of
          engagement.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Shoulders and chest squared fully toward a person rather than angled away</li>
          <li>A torso orientation that remains consistent even as other people join or leave a conversation</li>
          <li>A mismatch between where the face is pointed and where the torso actually faces</li>
          <li>Feet and knees pointing in the same direction as the torso, reinforcing genuine focus</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Body orientation carries different weight depending on the size and formality of a setting.
          In a one to one conversation, a fully open orientation is the expected default and its
          absence is more significant than its presence. In a group setting, where social norms
          require briefly turning to acknowledge each new speaker, a torso that consistently returns
          to and remains with one particular person after each exchange is a much stronger and more
          specific signal of genuine interest than momentary orientation during a single exchange.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/belly-button-rule" className="de-related-chip">Belly Button Rule</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/back-turned" className="de-related-chip">Back Turned</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Body orientation is one of the twelve most reliable attraction signals covered in our
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
