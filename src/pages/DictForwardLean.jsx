import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a forward lean mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forward lean, moving the upper body toward someone during conversation, signals genuine interest and engagement, since reducing physical distance reflects a desire for greater closeness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a forward lean be faked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A brief forward lean is difficult to sustain convincingly without genuine interest, since maintaining reduced distance over time requires ongoing physical effort that tends to reflect authentic engagement.',
      },
    },
  ],
}

export default function DictForwardLean() {
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
        <h1 className="de-title">Forward Lean</h1>
        <p className="de-lead">
          A forward lean is the movement of the upper body toward another person during
          conversation, reducing the physical distance between the two people, and it is one of the
          more immediate and reliable signals of genuine interest and engagement available in
          everyday interaction. The lean can be subtle, involving only a small shift of the
          shoulders and torso, or more pronounced, involving the whole upper body moving noticeably
          closer, but in both cases it reflects an unconscious desire to reduce distance from
          whatever is currently holding someone's attention. Because physical proximity and
          emotional closeness are deeply linked in human psychology, leaning toward someone
          communicates engagement in a way that is difficult to fake convincingly over an extended
          period, since maintaining a forward lean requires ongoing physical effort that naturally
          reflects genuine sustained interest. A forward lean appearing specifically at a particular
          point in conversation, such as when a person begins discussing something especially
          interesting or important to the listener, is a particularly strong and immediate signal
          that the content has captured genuine attention.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The upper body or shoulders shifting noticeably closer to another person during conversation</li>
          <li>The lean appearing specifically at a moment of increased interest in what is being said</li>
          <li>Sustained forward positioning maintained across an extended part of the conversation</li>
          <li>The lean accompanied by other engagement signals such as eye contact or nodding</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A forward lean appearing briefly during an especially interesting moment in conversation is
          a strong, largely spontaneous signal of genuine engagement with that specific content. A
          forward lean sustained consistently throughout an entire meeting or conversation, regardless
          of what is being discussed, may reflect a more general habit of engaged posture rather than
          interest tied to one particular moment. Noticing when the lean specifically increases
          relative to a person's own baseline posture is more informative than considering the
          presence of a forward lean in isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/eye-flash" className="de-related-chip">Eye Flash</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Leaning in is one of the twelve most reliable attraction signals covered in our complete
            guide to genuine interest and connection.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
