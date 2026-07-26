import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does cheek puffing mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cheek puffing is a brief inflation of the cheeks followed by a controlled exhale, commonly signalling relief, frustration or a pause while processing difficult information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cheek puffing always mean someone is relieved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The same gesture can signal frustration if it follows a setback or irritating comment, or simply mark a thinking pause before a person responds to something difficult.',
      },
    },
  ],
}

export default function DictCheekPuffing() {
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
        <h1 className="de-title">Cheek Puffing</h1>
        <p className="de-lead">
          Cheek puffing is the brief inflation of the cheeks with air, held for a moment and then
          released in a controlled exhale, and it is one of the more distinctive but often
          overlooked emotional release signals. The gesture tends to appear at a specific
          transitional moment, immediately after a period of tension, difficulty or concentrated
          effort, and functions as a physical way of discharging built up pressure before returning
          to a normal expression. It commonly follows the resolution of a stressful situation, such
          as narrowly avoiding a mistake or finishing a difficult task, where it reads as relief. It
          can equally follow frustration, where the exhale carries a sharper or more forceful quality
          than a relief driven puff. Cheek puffing can also appear while someone is processing
          complicated or unwelcome information, functioning as a brief pause that buys a moment of
          thinking time before a verbal response is given. Because the gesture is brief and easy to
          miss if attention lapses even slightly, catching it requires watching closely at exactly
          the moments when tension in a conversation is building toward some kind of resolution.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The cheeks visibly inflating with air before a controlled, deliberate exhale</li>
          <li>The gesture appearing immediately after a stressful or effortful moment resolves</li>
          <li>A sharper, more forceful puff pattern associated with frustration rather than relief</li>
          <li>The puff appearing as a brief pause before a person responds to difficult information</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Cheek puffing means something different depending on what immediately precedes it.
          Appearing right after a piece of good news or the resolution of a tense situation, it
          reads clearly as relief. Appearing after a mistake, a setback or an irritating comment, the
          same gesture reads as frustration being physically discharged rather than expressed
          verbally. When it appears during a pause before answering a question, it often signals
          that the person is buying a moment to process something difficult rather than experiencing
          relief or frustration at all, which is why the surrounding moment matters more than the
          gesture itself.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/controlled-breathing" className="de-related-chip">Controlled Breathing</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Cheek puffing is one of the small physical releases that appear as stress builds and
            resolves. Our stress guide covers this and many more early warning signals.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
