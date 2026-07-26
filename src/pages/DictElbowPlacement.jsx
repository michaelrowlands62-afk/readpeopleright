import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does elbow placement reveal in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elbow placement reveals confidence and perceived status, with generous, relaxed positioning signalling comfort with occupying space, while tightly pulled in arms signal deference or discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is claiming more table space considered a confidence signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Occupying more physical space is a deeply rooted status signal, since confident and higher status individuals instinctively take up more room while lower status individuals make themselves smaller.',
      },
    },
  ],
}

export default function DictElbowPlacement() {
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
        <h1 className="de-title">Elbow Placement</h1>
        <p className="de-lead">
          Elbow placement refers to how much space a person claims at a table or in a shared
          environment through the positioning of their arms and elbows, and it is a reliable and
          often overlooked signal of confidence and perceived status. Taking up generous elbow room,
          resting the arms in a spread, relaxed position rather than pulling them tightly against the
          body, signals comfort with occupying physical space and a lack of anxiety about being
          observed or judged by others nearby. This territorial use of space is deeply rooted in
          status signalling across many social species, where confident, higher status individuals
          occupy more physical space while lower status individuals instinctively make themselves
          smaller and more contained. In a meeting or shared table setting, someone who spreads their
          materials and arms comfortably across the available surface is making an unconscious
          statement of ownership and ease, while someone who pulls their elbows tightly to their
          sides and minimises their footprint is signalling deference or discomfort with the amount
          of attention and space they feel entitled to occupy.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Arms and elbows resting in a spread, relaxed position rather than pulled tightly inward</li>
          <li>Personal materials and belongings spread comfortably across a shared table surface</li>
          <li>The posture remaining consistent even as others join the space or table</li>
          <li>An absence of frequent repositioning or shrinking of the arms during conversation</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Generous elbow placement in a casual, relaxed setting among friends is unremarkable and
          reflects simple comfort rather than any particular status claim. The same expansive elbow
          placement in a formal meeting or negotiation, especially when maintained confidently in the
          presence of someone senior, is a much stronger and more deliberate signal of perceived
          status and self assurance. Comparing how much space a person claims relative to others in
          the same setting is often more revealing than considering their elbow placement in
          isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
          <Link to="/dictionary/chin-raise" className="de-related-chip">Chin Raise</Link>
          <Link to="/dictionary/downward-palm" className="de-related-chip">Downward Palm</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Space and territory are among the clearest signals of dominance. Our guide covers elbow
            placement alongside the full range of status and authority signals.
          </p>
          <Link to="/guides/power-body-language" className="de-cta-btn">
            Read the Power Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
