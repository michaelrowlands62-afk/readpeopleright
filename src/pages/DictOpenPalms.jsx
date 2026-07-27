import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does open palms mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Open palms is the display of the palms while speaking, typically turned upward or outward, and it is widely recognised as a signal of honesty, openness and trustworthiness.",
      },
    },
    {
      '@type': 'Question',
      name: "Why do skilled communicators use open palms deliberately?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Open palms tends to put listeners at ease and build trust, so many experienced speakers and negotiators use the gesture deliberately to appear more transparent and approachable.",
      },
    },
  ],
}

export default function DictOpenPalms() {
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
        <span className="de-category">Trust Signals</span>
        <h1 className="de-title">Open Palms</h1>
        <p className="de-lead">
          Open palms is the deliberate or spontaneous display of the palms of the hands while speaking, typically performed by turning the hands slightly upward or outward rather than keeping them closed, hidden or facing downward. This gesture is one of the most consistently recognised signals of honesty and openness across cultures, largely because an open, empty palm has historically signalled the absence of a concealed weapon or hidden intent, a meaning that appears to have carried through into modern nonverbal communication in a more symbolic form. Skilled communicators, including experienced public speakers, negotiators and salespeople, often use open palms deliberately to appear more trustworthy, approachable and transparent to an audience or counterpart, since the gesture tends to put listeners at ease even when they are not consciously aware of why. Open palms differs meaningfully from a downward palm gesture, which tends to communicate authority or control rather than openness, and from hidden or pocketed hands, which can create an impression of guardedness even when nothing is actually being concealed. Because the gesture can be used both spontaneously and deliberately, context and consistency across a conversation matter considerably when judging how genuine the openness being signalled actually is.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The palms turned upward or outward and visibly displayed while speaking</li>
          <li>The gesture used consistently rather than only during convenient moments</li>
          <li>Open palms paired with a relaxed, unguarded upper body posture</li>
          <li>The hands remaining visible rather than hidden in pockets or behind the back</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Open palms used consistently throughout an important conversation, especially alongside a relaxed posture and steady eye contact, is a strong signal of genuine openness and honesty. The same gesture appearing only briefly around one particular claim, while the hands stay hidden or closed the rest of the time, is less convincing and may reflect a deliberate, isolated attempt to appear trustworthy rather than a consistent underlying pattern. Looking at how consistently open palms appears across an entire conversation, rather than in a single moment, gives a much more reliable read.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/open-stance" className="de-related-chip">Open Stance</Link>
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
          <Link to="/dictionary/hand-on-heart" className="de-related-chip">Hand On Heart</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Open, visible hands are one of the fastest ways a speaker builds trust with an audience. Our guide covers this alongside the full range of public speaking body language.
          </p>
          <Link to="/guides/public-speaking" className="de-cta-btn">
            Read the Body Language for Public Speaking Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
