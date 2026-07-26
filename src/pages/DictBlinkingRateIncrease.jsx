import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an increased blinking rate mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An increase in blinking rate above a person\'s normal baseline is a well documented sign of stress, anxiety or cognitive overload, driven automatically by the nervous system rather than conscious choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a normal blinking rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most people blink somewhere between fifteen and twenty times per minute under relaxed conditions, and a noticeable rise above a person's own normal rate is what makes the signal meaningful.",
      },
    },
  ],
}

export default function DictBlinkingRateIncrease() {
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
        <h1 className="de-title">Blinking Rate Increase</h1>
        <p className="de-lead">
          An increase in blinking rate is one of the most well documented physiological stress
          signals, driven by the autonomic nervous system rather than conscious control. The average
          person blinks somewhere between fifteen and twenty times per minute under relaxed
          conditions, and this rate tends to rise noticeably when the brain experiences heightened
          stress, anxiety or cognitive load. The increase reflects genuine internal arousal, since
          the eyes respond automatically to elevated tension in ways that are very difficult for most
          people to consciously suppress or control. This makes blinking rate a particularly useful
          signal precisely because it sits largely outside deliberate management, unlike facial
          expressions or posture which can be at least partially performed. A sudden rise in blink
          rate that coincides with a specific question, topic or moment in a conversation is
          generally a more reliable indicator of stress than an elevated rate that remains constant
          throughout an entire interaction, which may simply reflect a person's usual baseline.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A noticeable increase in blink frequency compared to the person's normal resting pattern</li>
          <li>Blinking that intensifies specifically around a particular question or topic</li>
          <li>Rapid blinking paired with other stress signals such as increased self touching or vocal changes</li>
          <li>A return to a normal blink rate once the stressful subject has passed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Blinking rate must always be judged against a person's individual baseline rather than a
          fixed universal number, since some people naturally blink more or less frequently than
          average. A person who blinks rapidly throughout an entire conversation regardless of
          subject matter has simply established that as their normal pattern, and the signal tells
          you little in isolation. The rate becomes meaningful when it changes noticeably in response
          to a specific stimulus, particularly when combined with other physical stress signals
          appearing at the same moment, since clusters of corroborating signals are always more
          reliable than any single one considered alone.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Blinking is one of the most revealing signals in the eyes. Our complete guide covers
            blink rate alongside pupil dilation, gaze direction and micro expressions.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
