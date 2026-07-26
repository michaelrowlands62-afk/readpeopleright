import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are illustrator gestures in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Illustrator gestures are hand movements that naturally accompany and emphasise speech, such as tracing shapes or indicating size, and they signal genuine engagement and enthusiasm with the topic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are illustrator gestures different from nervous hand movements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Illustrator gestures are directed outward to help express meaning and increase with genuine enthusiasm, while nervous adaptor gestures are directed at the speaker's own body and signal internal stress.",
      },
    },
  ],
}

export default function DictIllustratorGestures() {
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
        <h1 className="de-title">Illustrator Gestures</h1>
        <p className="de-lead">
          Illustrator gestures are hand movements that naturally accompany and emphasise speech,
          such as tracing shapes in the air while describing something, using the hands to indicate
          size or direction, or punctuating key words with small, spontaneous movements, and they
          indicate genuine engagement and enthusiasm with what is being discussed. Unlike self
          touching or adaptor gestures, which are directed at the speaker's own body and typically
          signal internal stress or nervousness, illustrator gestures are directed outward and are
          closely synchronised with the content and rhythm of speech itself, appearing to help the
          speaker express and emphasise their meaning rather than to self soothe. Research on
          illustrator gestures has found that they tend to increase naturally when someone is
          genuinely enthusiastic, engaged or emotionally invested in a topic, and conversely tend to
          decrease or disappear when someone is bored, distracted or speaking about something they
          find less interesting. Because illustrator gestures are so closely tied to genuine
          enthusiasm, a noticeable increase in their frequency when a particular subject comes up is
          a reliable indicator of authentic interest and investment in that topic.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Hand movements that naturally accompany and emphasise the rhythm of speech</li>
          <li>Gestures directed outward to illustrate meaning rather than self soothing touches</li>
          <li>An increase in frequency and animation when discussing a genuinely interesting topic</li>
          <li>A noticeable decrease in these gestures when a person becomes bored or disengaged</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Illustrator gestures increasing noticeably when a specific topic comes up are a strong
          and largely spontaneous indicator of genuine enthusiasm and investment in that subject. The
          same gestures decreasing or disappearing entirely when a conversation shifts to a different
          topic suggests reduced engagement with that particular content, even if the person
          continues speaking about it. Comparing the frequency of illustrator gestures across
          different topics within the same conversation is one of the more useful ways to judge where
          someone's genuine interest actually lies.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/forward-lean" className="de-related-chip">Forward Lean</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
          <Link to="/dictionary/head-tilt" className="de-related-chip">Head Tilt</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Natural gestures are one of the most powerful tools available to a confident speaker.
            Our guide covers this alongside posture, eye contact and movement.
          </p>
          <Link to="/guides/public-speaking" className="de-cta-btn">
            Read the Body Language for Public Speaking Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
