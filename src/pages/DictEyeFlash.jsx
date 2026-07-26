import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an eye flash mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eye flash is a brief, sudden widening of the eyes lasting a fraction of a second, signalling genuine surprise or a sharp spike of heightened interest at that specific moment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is an eye flash difficult to notice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because it lasts only a fraction of a second and returns to normal almost immediately, catching an eye flash requires close attention at the exact moment it occurs during a conversation.',
      },
    },
  ],
}

export default function DictEyeFlash() {
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
        <h1 className="de-title">Eye Flash</h1>
        <p className="de-lead">
          An eye flash is a brief, sudden widening of the eyes during conversation, lasting only a
          fraction of a second, that signals genuine surprise or a sharp spike of heightened interest
          at that specific moment. The gesture is closely related to the eyebrow flash but involves
          the eyes themselves widening rather than the eyebrows lifting, and it tends to occur as an
          involuntary reaction to something unexpected, exciting or particularly engaging within a
          conversation. Because the eye flash happens so quickly and disappears almost as soon as it
          appears, it is easy to miss entirely unless close attention is being paid at the exact
          moment it occurs, which makes it one of the more challenging engagement signals to catch
          reliably in real time. When noticed, however, an eye flash is considered a strong and
          largely involuntary indicator that a specific piece of information, a particular comment or
          a certain person has produced a genuine spike in interest or surprise that the person may
          not consciously acknowledge or express verbally.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A brief, sudden widening of the eyes lasting only a fraction of a second</li>
          <li>The flash appearing in direct response to a specific piece of information or comment</li>
          <li>The eyes returning to their normal width almost immediately afterward</li>
          <li>The gesture accompanied by a shift in posture or attention toward the source of interest</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An eye flash occurring at the exact moment a surprising piece of information is shared is a
          strong and largely involuntary indicator of genuine interest or surprise at that specific
          content. Because the signal is so brief, its absence should not be read as disinterest,
          since many genuinely engaged people simply do not display a visible flash for every moment
          of interest. When it does appear, however, its precise timing relative to what was just
          said makes it one of the more reliably informative micro signals available in a
          conversation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/chin-stroking" className="de-related-chip">Chin Stroking</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            An eye flash is one of the fastest and most genuine attraction signals available. Our
            guide covers this alongside the twelve most reliable signs of interest.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
