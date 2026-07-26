import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the belly button rule in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The belly button rule holds that the direction a person's navel and torso face reveals their true focus of attention more reliably than the direction their face is turned, since the torso is far less consciously managed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the belly button rule considered more reliable than reading the face?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The face is heavily managed by social politeness, such as looking at whoever is speaking, while the torso orients more involuntarily toward genuine interest, making it a harder signal to consciously fake.',
      },
    },
  ],
}

export default function DictBellyButtonRule() {
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
        <h1 className="de-title">Belly Button Rule</h1>
        <p className="de-lead">
          The belly button rule is a simple but reliable principle in body language reading, based
          on the observation that the torso, and specifically the direction the navel faces, reveals
          a person's genuine focus of attention more consistently than the direction their face is
          pointed. The face is the most socially managed part of the body, since we are taught from
          childhood to look at people out of politeness even when our actual interest lies elsewhere.
          The torso receives far less conscious attention and management, which means it tends to
          orient naturally and involuntarily toward whatever or whoever a person is genuinely engaged
          with. In a group conversation, a person's face might be turned politely toward the current
          speaker while their navel remains pointed toward someone else entirely, revealing where
          their real interest or intention lies. This makes the belly button rule one of the more
          dependable engagement signals precisely because it operates below the level of conscious
          social performance that governs facial behaviour.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The direction the torso and navel face relative to the direction the head is turned</li>
          <li>A torso that stays oriented toward one person even as the head turns to acknowledge others</li>
          <li>A shift in torso direction that occurs before any change in conversation or speaker</li>
          <li>Feet and knees pointing in the same direction as the torso, reinforcing the same signal</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          The belly button rule is most useful in group settings where social politeness requires the
          face to rotate toward whoever is currently speaking, masking where genuine interest
          actually lies. In a one to one conversation the signal is less necessary to apply, since
          the torso will usually already be oriented toward the only other person present. In dating
          and networking contexts specifically, watching whether the torso remains oriented toward
          you even as a person's face turns to greet someone else is one of the clearer available
          signals of sustained genuine interest.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The belly button rule is one of the clearer attraction signals covered in our guide,
            alongside eleven other reliable indicators of genuine interest.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
