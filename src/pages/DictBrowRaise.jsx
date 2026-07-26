import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a brow raise mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A brow raise is the lifting of both eyebrows together, usually signalling surprise, interest or a deliberate attempt to appear open and approachable to the people around you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a brow raise always a genuine reaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. A brow raise appearing instantly after unexpected news is usually genuine, but the same gesture can also be performed deliberately during greetings or conversations to signal friendliness.',
      },
    },
  ],
}

export default function DictBrowRaise() {
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
        <span className="de-category">Emotion Signals</span>
        <h1 className="de-title">Brow Raise</h1>
        <p className="de-lead">
          A brow raise is the simultaneous lifting of both eyebrows, produced by the frontalis
          muscle across the forehead, and it is one of the most universally recognised facial
          signals across human cultures. Unlike a single raised eyebrow, which tends to communicate
          scepticism or a question, a full brow raise involving both eyebrows together typically
          signals surprise, heightened interest or a deliberate attempt to appear open and
          approachable. The movement briefly widens the eyes and exposes more of the white area
          around the iris, a configuration the human brain reads almost instinctively as
          attentiveness and positive engagement. Because the brow raise is quick, easy to produce
          and socially rewarded in many contexts, it is also one of the more common facial signals
          that people learn to use deliberately, particularly in greetings, negotiations and
          situations where appearing friendly and receptive carries a social advantage. This dual
          nature, spontaneous in genuine surprise yet also consciously performable as a social
          signal, means the brow raise is best read alongside its timing and the surrounding context
          rather than treated as automatic proof of any single emotion.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Both eyebrows lifting together rather than only one side rising</li>
          <li>The movement appearing quickly in response to unexpected information</li>
          <li>A brief widening of the eyes accompanying the raised brows</li>
          <li>The gesture being used deliberately during greetings or to signal friendliness</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A brow raise that appears the instant someone hears surprising news is almost always
          spontaneous and genuine, since it happens before there is time to consciously plan a
          reaction. The same gesture used repeatedly and rhythmically throughout a greeting or a
          sales conversation is far more likely to be a deliberate social signal intended to appear
          warm and approachable rather than a spontaneous emotional reaction. In negotiation and
          networking contexts, a well timed brow raise is often used consciously to signal interest
          and build rapport, which means its presence alone tells you less than whether it appears
          at a moment that would naturally produce genuine surprise.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/cheek-puffing" className="de-related-chip">Cheek Puffing</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
          <Link to="/dictionary/chin-stroking" className="de-related-chip">Chin Stroking</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The brow raise is one of the most telling signals in the eye area. Our complete guide
            covers this alongside pupil dilation, gaze direction and micro expressions.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
