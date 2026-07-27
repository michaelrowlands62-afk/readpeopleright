import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does vocal pitch rise mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Vocal pitch rise is a noticeable increase in the pitch of someone's voice, and it often accompanies nervous body language as a result of physical tension around the throat.",
      },
    },
    {
      '@type': 'Question',
      name: "Is a naturally high pitched voice the same as vocal pitch rise?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, vocal pitch rise refers specifically to a shift upward from a person's own normal speaking register, so comparing their voice against their own baseline matters more than the absolute pitch.",
      },
    },
  ],
}

export default function DictVocalPitchRise() {
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
        <h1 className="de-title">Vocal Pitch Rise</h1>
        <p className="de-lead">
          Vocal pitch rise refers to a noticeable increase in the pitch of a person's voice, making it sound higher than their normal speaking register, and although it is not strictly a visual body language signal, it very often accompanies nervous body language and provides a genuinely useful additional layer of information when reading someone. The rise typically occurs because physical tension under stress affects the muscles around the vocal cords and throat, producing a tighter, higher pitched sound without the person consciously intending or even noticing the change themselves. Because vocal pitch rise happens largely outside conscious control, it tends to surface even in people who are successfully managing their facial expression, posture and word choice, making it a particularly honest signal that complements more visual cues rather than replacing them. The change is often most noticeable when comparing a person's voice at the start of a conversation, before any stress has built up, with their voice at a later, more difficult moment, since the shift itself is usually more revealing than the absolute pitch on its own. Vocal pitch rise commonly appears alongside other stress signals like gaze aversion or increased blinking, and when multiple signals cluster together at the same moment, the combined picture becomes considerably more reliable than any single cue considered in isolation.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A noticeable increase in vocal pitch compared with a person's normal speaking voice</li>
          <li>The rise appearing suddenly around a specific difficult question or topic</li>
          <li>The change happening without the person appearing consciously aware of it</li>
          <li>Vocal pitch rise paired with visual stress signals like gaze aversion or fidgeting</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Vocal pitch rise appearing suddenly around a specific question, especially alongside gaze aversion or increased fidgeting, is a strong signal of rising stress tied directly to that particular topic. A person whose pitch stays elevated consistently throughout an entire conversation may simply have a naturally higher speaking voice, making a comparison against their own earlier baseline essential for spotting a meaningful shift. Listening for the moment pitch actually changes, rather than judging the absolute pitch itself, gives a much more reliable read on genuine stress.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/gaze-aversion" className="de-related-chip">Gaze Aversion</Link>
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
          <Link to="/dictionary/finger-tapping" className="de-related-chip">Finger Tapping</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The voice often reveals stress that a carefully managed face and posture successfully hide. Our guide covers this alongside the full range of nervous body language signals.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
