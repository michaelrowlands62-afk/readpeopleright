import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does controlled breathing signal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Controlled breathing is deliberately slow and deep breathing during a stressful moment, signalling genuine emotional regulation and composure rather than an absence of pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if breathing is genuinely controlled rather than naturally calm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Controlled breathing is most meaningful when it appears precisely during a moment that would normally trigger visible stress, showing deliberate regulation rather than simply reflecting easy circumstances.',
      },
    },
  ],
}

export default function DictControlledBreathing() {
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
        <span className="de-category">Confidence Signals</span>
        <h1 className="de-title">Controlled Breathing</h1>
        <p className="de-lead">
          Controlled breathing refers to deliberately slow, even and deep breaths taken during
          moments of stress or pressure, and it is one of the clearest visible signals of genuine
          emotional regulation available to an observer. While an untrained stress response
          typically produces shallow, rapid breathing concentrated in the chest, a person actively
          managing that response will often shift toward slower, deeper breaths that visibly expand
          the abdomen rather than just the chest. This shift is significant because it requires
          conscious effort to override the automatic stress response, meaning that visible controlled
          breathing under genuine pressure reflects real composure rather than simple calm
          circumstances. The signal is particularly notable in high stakes situations such as public
          speaking, difficult negotiations or challenging conversations, where the contrast between
          an untrained rapid breathing pattern and a deliberately regulated one becomes especially
          visible. Controlled breathing can also be actively practised as a technique, meaning that
          its presence in a genuinely pressured moment often reflects prior preparation as much as
          innate temperament.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Slow, deep breaths that visibly expand the abdomen rather than only the chest</li>
          <li>A steady, even breathing rhythm maintained specifically during a pressured moment</li>
          <li>The breathing pattern remaining composed even as the surrounding situation intensifies</li>
          <li>A visible contrast between this composed breathing and the person's own baseline stress response</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Controlled breathing is most meaningful when observed specifically during a moment that
          would normally be expected to produce visible stress, such as an unexpected question or a
          high stakes confrontation. Slow breathing during an already calm, low pressure moment is
          unremarkable and tells you little. The signal becomes genuinely significant when someone
          maintains this composed breathing pattern precisely at the point where their baseline
          stress response would ordinarily take over, since that timing reveals deliberate emotional
          regulation rather than simply reflecting an easy situation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/closed-eyes-during-speech" className="de-related-chip">Closed Eyes During Speech</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Controlled breathing is one of the most effective ways to manage visible nervousness.
            Our guide covers this alongside the full range of anxiety signals.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
