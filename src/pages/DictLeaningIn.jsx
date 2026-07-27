import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does leaning in mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Leaning in is the forward movement of the upper body toward another person, and it typically signals genuine interest, engagement or attraction to that person or topic.",
      },
    },
    {
      '@type': 'Question',
      name: "Is leaning in always a romantic signal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not always, since leaning in can simply reflect strong interest in a story or piece of information, though when paired with sustained eye contact it often does suggest deeper interest.",
      },
    },
  ],
}

export default function DictLeaningIn() {
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
        <h1 className="de-title">Leaning In</h1>
        <p className="de-lead">
          Leaning in is the act of moving the upper body closer to another person during a conversation, reducing the physical distance between the two of you without necessarily reaching out or touching. This forward shift is one of the clearest and most consistent signals of genuine interest, engagement or attraction, since closing physical distance is a fundamental way the body communicates a desire for greater connection. Leaning in can appear during a fascinating story, an important piece of shared information, or a moment of growing personal or romantic interest, and it often happens well before either person consciously registers the shift in distance. The gesture is typically accompanied by other engagement signals, including sustained eye contact, a forward tilt of the head or a slight softening of the facial expression, all of which reinforce the same underlying message of attentiveness. Because leaning in requires closing personal space, which most people guard fairly carefully by default, a genuine and sustained lean toward someone is considered a particularly strong and difficult to fake indicator of real interest in that person or in what they are saying.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The upper body shifting forward, reducing distance from the other person</li>
          <li>The movement paired with sustained eye contact or a forward head tilt</li>
          <li>The gesture appearing at a specific point of interest rather than throughout</li>
          <li>A softened facial expression accompanying the closer physical distance</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Leaning in that appears the moment a particular topic or story is introduced is a strong signal of genuine interest in that specific subject, especially when the person was sitting further back beforehand. The same forward posture maintained consistently throughout an entire conversation may instead reflect a generally engaged personality rather than interest tied to any one moment. Because closing personal space is not something people do carelessly, a clear and sustained lean toward someone remains one of the more trustworthy engagement signals available.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/forward-lean" className="de-related-chip">Forward Lean</Link>
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Closing physical distance is one of the most honest signals of genuine interest. Our guide covers this alongside the full range of attraction and connection cues.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
