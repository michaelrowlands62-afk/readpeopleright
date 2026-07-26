import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an eyebrow raise signal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eyebrow raise, lifting both eyebrows and holding them briefly, typically signals genuine interest, surprise or a deliberate attempt to appear more open and approachable during conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is an eyebrow raise different from an eyebrow flash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eyebrow flash is fast and largely involuntary, usually seen during greetings, while an eyebrow raise is held a little longer and often accompanies active listening or engagement.',
      },
    },
  ],
}

export default function DictEyebrowRaise() {
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
        <h1 className="de-title">Eyebrow Raise</h1>
        <p className="de-lead">
          An eyebrow raise involves lifting both eyebrows and holding them in a raised position for
          longer than the brief flash seen during a greeting, and in engagement contexts it
          typically signals genuine interest, surprise or a deliberate attempt to appear more open
          and approachable to whoever a person is speaking with. Where an eyebrow flash is fast and
          largely involuntary, an eyebrow raise used for engagement tends to be sustained a little
          longer and often accompanies active listening, such as when someone wants to visually
          signal that they find what is being said interesting or noteworthy. The gesture is also
          commonly used deliberately in social and professional settings as a way of appearing more
          receptive and friendly, since a raised brow slightly widens the eyes and softens the
          overall facial expression, making a person appear less guarded and more inviting of
          continued conversation. Because the gesture can be both a genuine spontaneous reaction and
          a consciously adopted social technique, its sincerity is best judged by how naturally it
          fits with the rest of a person's expression and their overall level of engagement in the
          conversation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Both eyebrows lifting and holding in a raised position rather than a quick flash</li>
          <li>The gesture accompanying active listening or a moment of genuine surprise</li>
          <li>A softened, open facial expression accompanying the raised eyebrows</li>
          <li>The behaviour used consciously in social settings to appear more approachable</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An eyebrow raise appearing naturally in response to genuinely surprising or interesting
          information reflects authentic engagement and interest. The same gesture used repeatedly
          and consistently throughout an entire conversation, regardless of what is actually being
          discussed, is more likely a consciously adopted social habit intended to appear friendly
          and receptive rather than a moment to moment genuine reaction. Considering whether the
          raise responds specifically to particular content, rather than repeating on a fixed
          pattern, helps distinguish genuine engagement from a practised social technique.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/eyebrow-flash" className="de-related-chip">Eyebrow Flash</Link>
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Appearing open and approachable starts with small facial signals like the eyebrow raise.
            Our guide covers this alongside the full range of social gathering signals.
          </p>
          <Link to="/guides/social-situations" className="de-cta-btn">
            Read the How to Read Body Language at a Party Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
