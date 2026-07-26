import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does grooming another person mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grooming another person, such as adjusting their clothing or hair, signals a notable level of intimacy, affection and comfort that is normally only appropriate within established close relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if someone pulls away from being groomed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a person stiffens or steps back when groomed, they are signalling that the physical familiarity exceeds their own comfort level, even if the other person intended it affectionately.',
      },
    },
  ],
}

export default function DictGroomingAnother() {
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
        <h1 className="de-title">Grooming Another</h1>
        <p className="de-lead">
          Grooming another person, such as adjusting their clothing, brushing off a piece of lint,
          or lightly smoothing their hair, is a gesture that signals a notable level of intimacy,
          affection and comfort between two people, since it involves entering another person's
          physical space in a way that is only socially acceptable within relationships that have an
          established degree of closeness. The behaviour draws on grooming instincts observed
          widely across social species, where physically tending to another individual builds and
          reinforces social bonds and signals a caring, protective or affectionate relationship.
          Because grooming another person requires a level of physical familiarity that most
          relationships have not yet established, the gesture appearing between two people is a
          meaningful indicator that a significant degree of comfort and closeness already exists, or
          is actively developing in that moment. The recipient's response to being groomed is just as
          informative as the gesture itself, since someone who welcomes the contact and does not
          pull away is signalling reciprocal comfort, while a recipient who stiffens or steps back is
          signalling that the physical familiarity has exceeded their own comfort level.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Adjusting another person's clothing, hair or appearance during an interaction</li>
          <li>The gesture occurring only within relationships with an established degree of closeness</li>
          <li>The recipient welcoming the contact rather than pulling away or stiffening</li>
          <li>The behaviour appearing alongside other signals of comfort such as sustained eye contact</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Grooming another person within an established romantic relationship or close friendship is
          a normal expression of intimacy and affection that reinforces an existing bond. The same
          gesture appearing early in a new relationship or between people who do not yet know each
          other well is a much more significant signal, since it indicates a level of comfort and
          closeness that is developing considerably faster than the relationship's history alone
          would suggest. How the recipient responds, whether they welcome or resist the contact, is
          essential to correctly reading what the gesture reveals about the relationship.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/deliberate-touch" className="de-related-chip">Deliberate Touch</Link>
          <Link to="/dictionary/pupil-dilation" className="de-related-chip">Pupil Dilation</Link>
          <Link to="/dictionary/foot-pointing" className="de-related-chip">Foot Pointing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Grooming another person reveals a great deal about closeness across different
            relationships. Our guide covers how nonverbal patterns shift with intimacy and context.
          </p>
          <Link to="/guides/relationship-types" className="de-cta-btn">
            Read the Body Language in Different Relationships Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
