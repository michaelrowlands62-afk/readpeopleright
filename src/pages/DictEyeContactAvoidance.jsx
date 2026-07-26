import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does avoiding eye contact always mean someone is lying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Eye contact avoidance can reflect discomfort, social anxiety or cultural norms just as easily as deception, and many practised liars deliberately maintain strong eye contact to avoid suspicion.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes eye contact avoidance more meaningful as a signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It becomes more informative when it represents a clear change from a person's own normal baseline, particularly when it appears specifically in response to one topic rather than throughout an entire conversation.",
      },
    },
  ],
}

export default function DictEyeContactAvoidance() {
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
        <h1 className="de-title">Eye Contact Avoidance</h1>
        <p className="de-lead">
          Eye contact avoidance refers to a person consistently looking away from another during
          conversation, and while it is popularly associated with lying, the reality is considerably
          more complicated and context dependent than the popular belief suggests. Looking away
          during conversation can reflect genuine discomfort with a topic, deception, social anxiety,
          cultural norms around eye contact, or simply the natural pattern of glancing away while
          thinking through a complex answer. Because avoiding eye contact is such a widely known
          supposed indicator of dishonesty, many practised liars deliberately compensate by
          maintaining unusually strong eye contact specifically to avoid appearing suspicious, which
          means the presence or absence of eye contact alone tells an observer very little without
          additional context. What matters far more than whether eye contact is present is whether a
          person's eye contact pattern changes noticeably from their own established baseline,
          particularly in relation to specific topics or questions, since a genuine shift from a
          person's normal pattern is considerably more informative than the pattern considered on its
          own.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A noticeable pattern of looking away that departs from the person's usual baseline</li>
          <li>The avoidance appearing specifically in response to a particular question or topic</li>
          <li>Eye contact avoidance paired with other signals such as self touching or vocal changes</li>
          <li>A return to the person's normal eye contact pattern once the topic has passed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Eye contact avoidance during a difficult personal question may reflect genuine social
          anxiety or discomfort rather than deception, particularly for someone who is naturally shy
          or from a cultural background where sustained eye contact with certain people is considered
          inappropriate. The signal becomes more meaningful when it represents a clear and specific
          change from how the same person maintained eye contact moments earlier in the same
          conversation, especially when the shift coincides precisely with a particular topic being
          raised rather than persisting throughout the whole interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
          <Link to="/dictionary/eye-rub" className="de-related-chip">Eye Rub</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Eye contact is one of the most misunderstood deception signals. Our guide covers this
            alongside the clusters that actually reveal dishonesty.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
