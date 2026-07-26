import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does genuine surprise look like in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine surprise involves widened eyes, raised eyebrows and a slightly dropped jaw that appears almost instantly and fades within about a second of the unexpected information being received.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if a surprise reaction is faked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A faked surprise tends to appear slightly delayed relative to the triggering information and lingers noticeably longer than the roughly one second window of a genuine reaction.',
      },
    },
  ],
}

export default function DictGenuineSurprise() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Genuine Surprise</h1>
        <p className="de-lead">
          Genuine surprise is a facial expression involving widened eyes, raised eyebrows and a
          slightly dropped jaw that appears and fades within roughly a second, reflecting an
          authentic, involuntary reaction to unexpected information. The speed of this expression is
          one of its defining features, since the brain registers unexpected input and produces the
          surprise response almost instantly, before conscious thought has time to shape or manage
          the reaction. A faked surprise expression, by contrast, tends to appear slightly delayed
          relative to the information that supposedly triggered it, and critically, it lingers for
          noticeably longer than the roughly one second window that characterises a genuine
          reaction, since the person consciously maintains the expression to convey surprise rather
          than allowing it to fade naturally. This timing difference, a fast onset paired with a fast
          fade for genuine surprise versus a slower onset paired with an unnaturally extended
          duration for a performed version, is one of the more reliable ways trained observers
          distinguish authentic surprise from a surprise reaction that has been consciously
          constructed for someone else's benefit.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Widened eyes, raised eyebrows and a slightly dropped jaw appearing almost instantly</li>
          <li>The expression fading naturally within approximately one second of appearing</li>
          <li>A performed version appearing slightly delayed relative to the triggering information</li>
          <li>A faked surprise lingering noticeably longer than the natural one second window</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Genuine surprise appearing instantly in direct response to truly unexpected news is
          authentic and requires no further scrutiny. A surprise expression that appears a beat after
          the supposedly surprising information is shared, and then lingers well beyond a second,
          suggests the reaction is being consciously performed rather than experienced spontaneously.
          Comparing the timing of the expression against the moment the surprising information was
          actually delivered is the clearest way to judge whether a surprise reaction is genuine.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/fixed-smile" className="de-related-chip">Fixed Smile</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/facial-symmetry-check" className="de-related-chip">Facial Symmetry Check</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Timing is one of the most reliable deception detection tools. Our guide covers this
            alongside the clusters that actually reveal dishonesty.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
