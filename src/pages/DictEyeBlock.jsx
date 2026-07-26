import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an eye block in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eye block is a prolonged eye closure that lasts longer than a normal blink, an instinctive attempt to visually shut out something uncomfortable or unwelcome that has just been said.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell an eye block apart from simple tiredness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eye block that appears precisely in response to a specific statement or question is more meaningful than one that occurs generally throughout a conversation, which is more likely to reflect ordinary fatigue.',
      },
    },
  ],
}

export default function DictEyeBlock() {
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
        <h1 className="de-title">Eye Block</h1>
        <p className="de-lead">
          An eye block is a form of prolonged eye closure that lasts noticeably longer than a normal
          blink, functioning as an instinctive attempt to visually shut out something uncomfortable,
          threatening or unwelcome. The gesture draws on the same protective instinct that causes
          people to flinch or turn away from an unpleasant sight, applied instead to information
          received through conversation rather than through direct visual threat. An eye block can
          appear as a single extended closure, a slow deliberate blink held for a fraction of a
          second longer than usual, or in more pronounced cases a brief closing of the eyes
          accompanied by a slight turning or tilting of the head away from the source of discomfort.
          Because the gesture happens quickly and is easily mistaken for an ordinary blink unless
          watched for specifically, it requires close attention to catch reliably, but its appearance
          in direct response to a specific piece of information or a pointed question is one of the
          more consistent signals that something in the conversation has registered as genuinely
          uncomfortable or threatening to the person experiencing it.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Eye closure that lasts noticeably longer than a normal, quick blink</li>
          <li>The gesture appearing specifically in response to a particular statement or question</li>
          <li>A slight turning or tilting of the head accompanying the closed eyes in some cases</li>
          <li>The behaviour occurring as an isolated response rather than as part of general tiredness</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An eye block appearing once during a long conversation, particularly if the person appears
          generally tired, may simply reflect fatigue rather than any specific discomfort. The signal
          becomes considerably more meaningful when it appears precisely at the moment a specific
          piece of information or a pointed question is delivered, since that timing links the
          gesture directly to a reaction against that particular content rather than to generalised
          tiredness throughout the interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/earlobe-tugging" className="de-related-chip">Earlobe Tugging</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The eye block is one of the signals covered in our complete guide to reading eyes,
            appearing most reliably under genuine psychological pressure.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
