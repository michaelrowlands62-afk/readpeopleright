import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a grounding stance in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A grounding stance is standing with feet wider than shoulder width and weight evenly distributed, a posture that signals calm authority and readiness rather than nervous instability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a wider stance signal confidence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A wider base of support is genuinely more physically stable, and this stability metaphorically extends to how the posture is read, with a grounded stance appearing less easily destabilised by pressure.',
      },
    },
  ],
}

export default function DictGroundingStance() {
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
        <span className="de-category">Confidence Signals</span>
        <h1 className="de-title">Grounding Stance</h1>
        <p className="de-lead">
          A grounding stance is a standing posture in which the feet are placed wider than
          shoulder width, weight is distributed evenly across both feet, and the body maintains a
          stable, settled quality rather than shifting or repositioning frequently. This wider,
          evenly balanced foundation signals calm authority and readiness, communicating that a
          person feels physically and psychologically secure enough to occupy a stable, unmoving
          position rather than needing to constantly adjust or retreat. The stance draws on a simple
          physical reality, a wider base of support is genuinely more stable and harder to knock off
          balance, and the body language reading of this stance follows the same logic
          metaphorically, with a grounded person appearing less easily destabilised by whatever
          pressure or challenge they might be facing. A grounding stance is frequently associated
          with people in positions of genuine authority, since it requires a degree of comfort with
          being observed and a lack of the nervous energy that typically produces constant
          repositioning. Because the stance can be consciously adopted, it is also a commonly taught
          technique for anyone wanting to project more calm authority in high pressure situations.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Feet placed wider than shoulder width with weight evenly distributed</li>
          <li>The body remaining stable and settled rather than shifting or repositioning frequently</li>
          <li>The stance held consistently even under direct questioning or pressure</li>
          <li>A readiness quality that suggests comfort with the current situation rather than a desire to retreat</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A grounding stance adopted naturally during a relaxed conversation reflects genuine ease
          and comfort with the situation. The same stance deliberately adopted just before a high
          stakes conversation, such as a difficult negotiation or a public appearance, is often a
          conscious technique for projecting calm authority rather than a spontaneous reflection of
          internal calm. The clearest sign of a genuinely grounded person is that the stance holds up
          naturally under pressure rather than only appearing during low stakes, comfortable moments.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/gravity-defying-gestures" className="de-related-chip">Gravity Defying Gestures</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A grounded stance signals stability and calm authority the moment you step in front of
            an audience. Our guide covers this alongside posture, gestures and eye contact.
          </p>
          <Link to="/guides/public-speaking" className="de-cta-btn">
            Read the Body Language for Public Speaking Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
