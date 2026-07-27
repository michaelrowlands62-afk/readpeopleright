import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does mutual gaze mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mutual gaze is sustained eye contact held simultaneously by two people, and it is widely regarded as one of the strongest indicators of mutual attraction and shared rapport.",
      },
    },
    {
      '@type': 'Question',
      name: "How is mutual gaze different from one sided staring?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mutual gaze requires genuine comfort and engagement from both people at the same time, while one sided staring involves only one person maintaining eye contact and often reflects a different dynamic.",
      },
    },
  ],
}

export default function DictMutualGaze() {
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
        <h1 className="de-title">Mutual Gaze</h1>
        <p className="de-lead">
          Mutual gaze occurs when two people hold sustained eye contact with each other at the same time, each looking into the other's eyes rather than one person simply watching while the other looks away, and it is considered one of the strongest available indicators of mutual attraction and shared rapport. Because sustained eye contact requires both comfort and genuine engagement from both people simultaneously, mutual gaze differs meaningfully from one sided staring or brief, glancing eye contact, which can occur for many reasons unrelated to attraction or connection. Research into mutual gaze has found that the duration people are willing to sustain it, and how frequently they choose to re establish it after naturally looking away, both correlate closely with the level of comfort and interest each person feels toward the other. Mutual gaze often appears alongside other signals of genuine engagement, including a relaxed, open posture, a slight forward lean and pupils that appear more dilated than usual, all of which reinforce the same underlying message. Because holding another person's gaze for an extended period can feel exposing or vulnerable, the willingness to sustain mutual gaze, rather than breaking it quickly, is a particularly meaningful signal of comfort and interest between two people.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Both people sustaining eye contact simultaneously rather than one looking away</li>
          <li>Gaze being re established quickly and naturally after a brief break</li>
          <li>The eye contact paired with a relaxed posture and slight forward lean</li>
          <li>Pupils appearing more dilated than usual during the sustained contact</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Mutual gaze that is sustained comfortably and re established quickly after natural breaks is a strong signal of genuine attraction or rapport between two people. Eye contact that feels one sided, or that one person consistently breaks first and does not re establish, suggests a difference in comfort or interest level between the two people involved. Watching how quickly and naturally gaze returns after a break, rather than focusing only on the initial contact, gives a more accurate read on the underlying connection.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
          <Link to="/dictionary/pupil-dilation" className="de-related-chip">Pupil Dilation</Link>
          <Link to="/dictionary/mirroring" className="de-related-chip">Mirroring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Sustained eye contact between two people is one of the clearest and most honest attraction signals available. Our guide covers this alongside the full range of eye based cues.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
