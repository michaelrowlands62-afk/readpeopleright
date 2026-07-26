import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does cowering mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cowering is a defensive posture involving hunched shoulders, limbs pulled inward and a lowered head, reflecting genuine fear or a submission response to a perceived threat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cowering the same as simply being shy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Cowering appears suddenly in response to a specific frightening or aggressive trigger and represents a clear change from the person's normal posture, unlike ordinary shyness which is more consistent.",
      },
    },
  ],
}

export default function DictCowering() {
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
        <h1 className="de-title">Cowering</h1>
        <p className="de-lead">
          Cowering is a defensive posture in which a person makes their body smaller by hunching the
          shoulders, pulling the limbs inward toward the torso and lowering the head, often
          accompanied by reduced or completely avoided eye contact. It is one of the clearest
          physical expressions of fear and submission available in human body language, drawing on
          the same underlying instinct seen across much of the animal kingdom, in which reducing
          one's physical size and visibility is a way of appearing less threatening or less
          noticeable to a perceived source of danger. The posture typically emerges rapidly in
          response to a specific triggering event, such as a raised voice, an aggressive gesture from
          another person, or sudden unexpected criticism, and it tends to persist for as long as the
          perceived threat remains present in the environment. Because cowering is such a strong and
          instinctive response, it is rarely a deliberate performance, which makes it one of the more
          reliable indicators that a person is experiencing genuine fear or feels unsafe in their
          current situation rather than simply displaying mild discomfort.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Shoulders hunching and limbs pulling inward to make the body appear smaller</li>
          <li>The head lowering, often paired with reduced or fully avoided eye contact</li>
          <li>The posture appearing suddenly following a specific frightening or aggressive trigger</li>
          <li>The behaviour persisting for as long as the perceived source of threat remains present</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Cowering appearing suddenly in response to a raised voice or an aggressive action is a
          strong and reliable signal of genuine fear rather than simple shyness or mild discomfort.
          The posture is far more significant when it represents a clear change from how the same
          person was holding themselves moments earlier, since a naturally small or hunched resting
          posture for that individual carries less meaning on its own. In workplace and family
          settings particularly, recognising genuine cowering as a fear response rather than
          dismissing it as shyness allows for a more appropriate and protective response to whatever
          triggered it.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Cowering is one of the clearest signs of anxiety or fear in a child. Our guide covers
            this alongside the full range of signals children display nonverbally.
          </p>
          <Link to="/guides/reading-children" className="de-cta-btn">
            Read the Reading Children's Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
