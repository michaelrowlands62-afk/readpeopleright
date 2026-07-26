import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does foot pointing reveal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Foot pointing reveals where a person's genuine attention or interest lies, since the feet are rarely consciously managed and continue pointing toward what someone is truly focused on.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is foot direction considered more honest than facial direction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The face is often turned toward someone out of social politeness, while the feet receive far less conscious management and tend to point toward genuine interest instead.',
      },
    },
  ],
}

export default function DictFootPointing() {
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
        <h1 className="de-title">Foot Pointing</h1>
        <p className="de-lead">
          Foot pointing refers to the direction a person's feet face during conversation, and it
          is considered one of the more reliable nonverbal signals of genuine interest and attention
          precisely because the feet receive very little conscious social management compared to
          the face or upper body. While social convention teaches people to turn their face and upper
          body toward whoever is speaking out of politeness, the feet tend to continue pointing
          toward whatever or whoever a person is genuinely focused on or drawn to, even when their
          face is turned elsewhere entirely. In a group setting, someone's face might be politely
          angled toward the current speaker while their feet remain firmly pointed toward a
          different person they are more genuinely interested in, quietly revealing where their real
          attention lies. Because foot direction operates so far below conscious control, it is
          regarded as a particularly honest signal, and noticing a consistent mismatch between where
          someone's face points and where their feet point is often one of the more revealing
          observations available in a social or professional setting.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The direction the feet point relative to the direction the face or upper body is turned</li>
          <li>Feet remaining consistently pointed toward one particular person in a group setting</li>
          <li>A mismatch between polite facial attention and genuine foot direction toward someone else</li>
          <li>Feet pointing toward an exit or doorway, suggesting a desire to leave the interaction</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Foot pointing is most revealing in group settings, where social politeness requires
          briefly turning the face toward each new speaker while the feet remain a more honest
          indicator of sustained interest. In a private one to one conversation the signal is less
          necessary to apply, since the feet will typically already be oriented toward the only
          other person present. Noticing that someone's feet consistently return to pointing toward
          you, even as their face turns to acknowledge others nearby, is one of the more reliable
          available signals of genuine ongoing interest.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/belly-button-rule" className="de-related-chip">Belly Button Rule</Link>
          <Link to="/dictionary/deliberate-touch" className="de-related-chip">Deliberate Touch</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Feet pointing toward you is one of the twelve most reliable attraction signals covered
            in our complete guide to genuine interest and connection.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
