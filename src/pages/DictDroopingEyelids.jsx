import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do drooping eyelids mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drooping eyelids can signal genuine tiredness, boredom or disengagement, or in some social contexts a deliberate attempt to appear seductive, depending on how and when the signal appears.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if drooping eyelids signal boredom rather than tiredness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine tiredness develops gradually over time, while boredom tends to appear suddenly during a conversation the person would otherwise be expected to find engaging.',
      },
    },
  ],
}

export default function DictDroopingEyelids() {
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
        <h1 className="de-title">Drooping Eyelids</h1>
        <p className="de-lead">
          Drooping eyelids describes a heavy, lowered eyelid position that partially covers the eye,
          reducing its normal open appearance, and the signal can indicate several quite different
          underlying states depending on the surrounding context. In the most straightforward
          reading, drooping eyelids reflect simple tiredness or fatigue, appearing gradually over the
          course of a long day or a late conversation as the muscles supporting the eyelids become
          less active from genuine exhaustion. In a social or professional setting, the same heavy
          eyed appearance can instead signal boredom or waning interest, particularly when it appears
          suddenly during a conversation the person would otherwise be expected to find engaging. In
          a romantic or flirtatious context, deliberately lowered eyelids combined with a direct,
          sustained gaze are sometimes used consciously as a signal intended to appear alluring or
          seductive, drawing on the same physical appearance as tiredness but produced deliberately
          rather than from genuine fatigue. Telling these three quite different explanations apart
          depends heavily on the timing of the signal and the broader context in which it appears.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Eyelids appearing heavier and more lowered than the person's normal resting expression</li>
          <li>The change happening gradually over time, consistent with genuine tiredness</li>
          <li>A sudden onset during an otherwise engaging conversation suggesting boredom instead</li>
          <li>Lowered eyelids paired with a direct, sustained gaze suggesting a deliberate flirtatious signal</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Drooping eyelids that develop gradually over the course of a long day or a late evening
          most likely reflect genuine tiredness and carry little further meaning. The same heavy
          eyed appearance emerging suddenly during a conversation that would normally hold someone's
          attention is more likely to signal boredom or disengagement. In a clearly romantic or
          flirtatious setting, deliberately lowered eyelids paired with direct eye contact and a
          slight smile are more likely a conscious signal of attraction rather than either tiredness
          or boredom, which is why the surrounding social context is essential to interpreting this
          signal correctly.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/cheek-puffing" className="de-related-chip">Cheek Puffing</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The eyes reveal tiredness, boredom and attraction in equal measure. Our complete guide
            covers drooping eyelids alongside pupil dilation and gaze direction.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
