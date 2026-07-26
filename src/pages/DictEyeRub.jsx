import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does rubbing your eye during conversation mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eye rub can be an attempt to block out something uncomfortable or avoid eye contact, though it very often has an innocent explanation such as tiredness, an itch or irritation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if an eye rub is meaningful rather than innocent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A meaningful eye rub tends to recur specifically around one particular topic without an obvious physical cause, especially when paired with other signals of discomfort at the same moment.',
      },
    },
  ],
}

export default function DictEyeRub() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Eye Rub</h1>
        <p className="de-lead">
          An eye rub is the act of touching, rubbing or briefly covering the eye during conversation,
          and while it is sometimes associated with an attempt to avoid eye contact or block out
          something uncomfortable, it very commonly has an entirely innocent explanation such as a
          genuine itch, tiredness or irritation from contact lenses or allergies. The gesture draws
          attention because rubbing the eye briefly interrupts direct eye contact and can appear,
          superficially, similar to other avoidance signals, which has led to its popular but often
          overstated association with deception in casual body language discussion. In reality, an
          eye rub becomes a genuinely useful signal only when it appears at a specific and repeatable
          moment, such as consistently occurring whenever a particular topic or question arises,
          rather than as an isolated occurrence that could easily be explained by physical discomfort
          unrelated to the conversation. Distinguishing a meaningful eye rub from an innocent one
          requires paying close attention to its timing, frequency and whether it coincides with
          other signals of discomfort occurring at the same moment.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Touching, rubbing or briefly covering the eye during a specific point in conversation</li>
          <li>The gesture recurring specifically around one particular topic rather than occurring once</li>
          <li>The eye rub paired with other avoidance signals such as gaze aversion or a turned body</li>
          <li>An absence of an obvious physical cause such as visible irritation, allergies or tiredness</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A single eye rub that could plausibly be explained by an itch, tiredness or seasonal
          allergies carries very little meaning on its own and should generally be disregarded. The
          gesture becomes considerably more informative when it recurs specifically around a
          particular topic or question, especially when no obvious physical explanation is present
          and the behaviour is accompanied by other signals of discomfort such as gaze aversion or a
          turned posture occurring at the same time.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/eye-contact-avoidance" className="de-related-chip">Eye Contact Avoidance</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            An eye rub is one of the deception signals people most often misread. Our guide covers
            this alongside the clusters that actually reveal dishonesty.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
