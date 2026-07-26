import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a blank stare mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A blank stare is a fixed, expressionless gaze with a reduced blink rate that can indicate shock, dissociation or a deliberate emotional shutdown when a person feels overwhelmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a blank stare different from someone simply concentrating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ordinary concentration still involves natural blinking and subtle facial movement, while a genuine blank stare has a held, frozen quality that lasts noticeably longer than a normal thinking pause.',
      },
    },
  ],
}

export default function DictBlankStare() {
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
        <h1 className="de-title">Blank Stare</h1>
        <p className="de-lead">
          A blank stare is a fixed, expressionless gaze accompanied by a noticeably reduced blink
          rate, in which the eyes appear to look at or through something without visible emotional
          engagement. It is distinct from ordinary concentration, which typically still involves
          natural blinking and subtle facial movement, because a genuine blank stare has a held,
          almost frozen quality that persists for longer than a natural pause would normally allow.
          This signal tends to emerge when a person's emotional processing system becomes temporarily
          overwhelmed, either by acute shock, a stress response that exceeds their capacity to manage
          in the moment, or a deliberate, semi conscious withdrawal from the emotional weight of a
          situation. Rather than displaying visible distress, the nervous system effectively reduces
          outward expression as a way of coping with more input than it can process. Because a blank
          stare often appears alongside other signs of shutdown, such as reduced responsiveness to
          questions or a delayed reaction time, it is generally read as one of the more serious
          indicators of significant internal stress.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A fixed, unfocused gaze that persists significantly longer than a natural pause</li>
          <li>A noticeably reduced blink rate compared to the person's normal pattern</li>
          <li>Minimal or delayed facial and verbal response to questions during the stare</li>
          <li>The stare appearing suddenly following distressing or overwhelming information</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A blank stare occurring briefly while someone processes a difficult question is a normal
          part of thinking and rarely significant on its own. The signal becomes far more meaningful
          when it persists well beyond a natural thinking pause, appears immediately after receiving
          distressing news, or is accompanied by delayed responses and reduced overall engagement. In
          supportive settings such as counselling or sensitive conversations, recognising a genuine
          blank stare as a sign of overwhelm rather than simple inattention allows for a more
          appropriate and compassionate response.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
          <Link to="/dictionary/adaptor-gestures" className="de-related-chip">Adaptor Gestures</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A blank stare is one of the more serious high stress signals covered in our guide to
            reading and recognising stress before it escalates.
          </p>
          <Link to="/guides/stress-signals" className="de-cta-btn">
            Read the Body Language Signs of Stress Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
