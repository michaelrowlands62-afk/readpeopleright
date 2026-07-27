import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is a power pose in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A power pose is an expanded, wide standing posture, such as hands on the hips or feet planted apart, and it is one of the most direct signals of confidence and dominance.",
      },
    },
    {
      '@type': 'Question',
      name: "Why do people use a power pose before a stressful event?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Many people find that briefly adopting an expansive posture in private before a presentation or interview helps them feel more confident and composed once the actual moment arrives.",
      },
    },
  ],
}

export default function DictPowerPose() {
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
        <h1 className="de-title">Power Pose</h1>
        <p className="de-lead">
          A power pose is a standing posture involving an expanded, wide stance with the limbs taking up more physical space than usual, such as hands on the hips, feet planted well apart or arms raised overhead, and it is one of the most direct and visible signals of confidence and dominance available. The underlying idea behind a power pose is that occupying more physical space communicates a stronger, more assertive presence to others, drawing on the same territorial instincts that make expansive postures a common signal of status across the animal kingdom more broadly. Beyond how a power pose is perceived by others, many people report that deliberately adopting an expanded posture before a stressful situation, such as a presentation or interview, helps them feel more confident and composed once the moment actually arrives. A power pose differs from more subtle confidence signals like a relaxed open stance by being considerably more deliberate and pronounced, making it especially common in moments where someone wants to project strength clearly, such as before stepping into a competitive negotiation or a high stakes public appearance. Because a power pose is so visibly expansive, holding one for an extended period during an actual interaction can appear excessive, which is why it is most often used briefly in private before a challenging moment rather than sustained throughout an entire conversation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Hands placed confidently on the hips or arms raised overhead</li>
          <li>Feet planted well apart with the body taking up more physical space</li>
          <li>The pose typically held briefly and privately before a stressful moment</li>
          <li>A noticeably wider, more expansive posture than a person's normal resting stance</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A power pose adopted briefly before a stressful event, such as a big presentation or important interview, often reflects a deliberate attempt to build confidence rather than a spontaneous display for an audience. The same expansive posture held for an extended period during an actual conversation with another person can come across as excessive or overly dominant rather than simply confident. Because the pose is most commonly used in private moments of preparation, its presence in front of others is comparatively rare and tends to signal a deliberate effort to project strength in that specific moment.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chest-expansion" className="de-related-chip">Chest Expansion</Link>
          <Link to="/dictionary/grounding-stance" className="de-related-chip">Grounding Stance</Link>
          <Link to="/dictionary/gravity-defying-gestures" className="de-related-chip">Gravity Defying Gestures</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            An expansive stance is one of the clearest ways the body communicates natural authority. Our guide covers this alongside the full range of confidence and leadership signals.
          </p>
          <Link to="/guides/alpha-body-language" className="de-cta-btn">
            Read the Alpha Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
