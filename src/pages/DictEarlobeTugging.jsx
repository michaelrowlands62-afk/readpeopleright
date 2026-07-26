import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does earlobe tugging mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earlobe tugging is a self soothing gesture involving pulling or touching the earlobe, often signalling indecision or mild anxiety, particularly at a moment when someone must make a choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does touching the earlobe have a calming effect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The earlobe contains a dense concentration of nerve endings, and light touch or pulling in this area provides a small genuine calming sensation similar to other self soothing gestures.',
      },
    },
  ],
}

export default function DictEarlobeTugging() {
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
        <span className="de-category">Stress Signals</span>
        <h1 className="de-title">Earlobe Tugging</h1>
        <p className="de-lead">
          Earlobe tugging is a self soothing gesture in which a person pulls, touches or rubs their
          own earlobe during conversation, and it is one of several small pacifying behaviours the
          body uses to manage mild anxiety or indecision. The earlobe contains a dense concentration
          of nerve endings, and light touch or gentle pulling in this area provides a small but
          genuine calming sensation, similar in function to other self touching behaviours directed
          at the neck, face or hair. Earlobe tugging tends to appear specifically during moments of
          uncertainty, such as when someone is being asked to make a decision, is unsure how to
          answer a question, or is weighing up two competing options in real time. Because the
          gesture is subtle, brief and easily mistaken for an unrelated habit, it is one of the more
          overlooked stress signals available, yet its timing relative to a specific decision point
          or difficult question often makes it a genuinely useful indicator of internal hesitation
          that a person may not be expressing verbally.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repeated pulling, touching or rubbing of the earlobe with the fingers</li>
          <li>The gesture appearing specifically at a moment of decision or uncertainty</li>
          <li>Brief and understated movement rather than a prolonged or dramatic gesture</li>
          <li>The behaviour easing once the decision has been made or the uncertainty resolved</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Earlobe tugging that appears consistently throughout a conversation regardless of subject
          matter is likely just a personal habit and carries little meaning on its own. The gesture
          becomes more informative when it appears specifically at the moment someone is asked to
          make a choice or give an answer they are uncertain about, since that timing links the
          behaviour directly to genuine indecision rather than a generalised nervous habit. Watching
          for the gesture alongside a pause in speech or a hesitant tone adds further confirmation
          that genuine uncertainty is present.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Earlobe tugging is one of the small self touching signals of anxiety covered in our
            guide to nervous body language.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
