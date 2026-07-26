import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an eyebrow flash mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eyebrow flash is a quick, simultaneous raise of both eyebrows lasting a fraction of a second, a largely unconscious signal of recognition or interest often seen when greeting someone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an eyebrow flash the same in every culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The eyebrow flash appears in remarkably similar form across many different cultures, making it one of the more universal nonverbal greeting signals identified in body language research.',
      },
    },
  ],
}

export default function DictEyebrowFlash() {
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
        <h1 className="de-title">Eyebrow Flash</h1>
        <p className="de-lead">
          An eyebrow flash is a quick, simultaneous raise of both eyebrows, typically lasting only
          a fraction of a second, that functions as a fast and largely unconscious signal of
          recognition or interest, most commonly observed at the moment of greeting someone. The
          gesture is remarkably consistent across human cultures, appearing in essentially the same
          form in societies around the world, which has led researchers to consider it one of the
          more universal nonverbal greeting signals available. When someone notices a person they
          recognise, like or find interesting entering a room or making eye contact, the eyebrows
          often flash upward briefly before returning to their resting position, communicating
          positive recognition before a single word has been exchanged. Because the gesture is so
          brief and happens largely below conscious control, it is considered a genuinely useful
          signal of authentic positive interest, particularly in social and dating contexts, where
          catching an eyebrow flash directed specifically at oneself is often one of the clearest
          early indicators that the interest is being reciprocated.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A quick, simultaneous raise of both eyebrows lasting only a fraction of a second</li>
          <li>The gesture appearing at the moment of eye contact or greeting a specific person</li>
          <li>The eyebrows returning to their resting position almost immediately afterward</li>
          <li>The flash appearing consistently when a particular person enters or is noticed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An eyebrow flash appearing consistently every time a particular person enters a room or
          makes eye contact is a strong and largely involuntary signal of positive recognition and
          interest in that specific individual. Because the gesture is so brief and easy to miss, its
          absence should not automatically be read as disinterest, since not every person displays it
          as visibly. When it is noticed directed specifically and repeatedly at one person, however,
          it is one of the more reliable early signals of genuine positive interest available in
          social interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/eyebrow-raise" className="de-related-chip">Eyebrow Raise</Link>
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/pupil-dilation" className="de-related-chip">Pupil Dilation</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The eyebrow flash is one of the twelve most reliable attraction signals covered in our
            complete guide to genuine interest and connection.
          </p>
          <Link to="/guides/attraction-signals" className="de-cta-btn">
            Read the Attraction Signals Explained Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
