import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does hand wringing mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hand wringing, the repeated rubbing or clasping of the hands together, is a self soothing gesture that reliably indicates nervousness or anxiety, often intensifying as internal tension rises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people wring their hands when anxious?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hand wringing provides calming sensory stimulation through the hands, an area rich in nerve endings, offering a small physical outlet for tension the person cannot otherwise easily release.',
      },
    },
  ],
}

export default function DictHandWringing() {
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
        <h1 className="de-title">Hand Wringing</h1>
        <p className="de-lead">
          Hand wringing is the repeated rubbing, clasping or twisting of the hands together, and
          it is a self soothing gesture that reliably indicates nervousness or anxiety, functioning
          as a physical outlet for internal tension that has built up beyond what a person can
          comfortably contain. The gesture typically involves one hand rubbing or manipulating the
          other, sometimes with the fingers interlacing and separating repeatedly, and it tends to
          intensify in both speed and pressure as the underlying anxiety increases. Hand wringing
          draws on the same self soothing mechanism as other self touching behaviours, using
          physical stimulation through the hands, an area rich in nerve endings, to provide a small
          degree of calming sensory input during a stressful moment. Because the hands are usually
          visible and difficult to fully conceal during conversation, hand wringing is one of the
          more noticeable stress signals available, and its appearance, particularly when it begins
          suddenly in response to a specific topic or question, is a reliable indicator that a
          person's outward composure does not fully reflect their internal emotional state.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repeated rubbing, clasping or twisting motions performed with both hands</li>
          <li>The intensity and speed of the wringing increasing as underlying anxiety rises</li>
          <li>The gesture beginning suddenly in response to a specific topic or difficult question</li>
          <li>A visible tension in the hands that contrasts with an otherwise composed appearance</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Hand wringing appearing briefly while someone waits for uncertain news, such as in a
          waiting room, is a common and unremarkable expression of situational anxiety. The gesture
          becomes more specifically informative when it begins or intensifies at a precise moment
          within a conversation, such as immediately after a particular question is asked, since that
          timing links the visible tension directly to that specific topic rather than to general
          situational stress.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
          <Link to="/dictionary/earlobe-tugging" className="de-related-chip">Earlobe Tugging</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Hand wringing is one of the self soothing signals covered in our guide to nervous body
            language, alongside the full range of anxiety signals and how to manage them.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
