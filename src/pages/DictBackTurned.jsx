import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean when someone turns their back on you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turning the back is one of the strongest and most direct body language signals of disinterest or dismissal, since it removes the possibility of continued eye contact or engagement entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a turned back ever be accidental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A brief turn in a crowded space is often incidental, but a back that remains turned for an extended period, especially toward the same person repeatedly, is rarely accidental and usually signals genuine disengagement.',
      },
    },
  ],
}

export default function DictBackTurned() {
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
        <span className="de-category">Defensive Signals</span>
        <h1 className="de-title">Back Turned</h1>
        <p className="de-lead">
          Presenting the back to someone during a social interaction is one of the most direct and
          unambiguous body language signals available, because it removes the possibility of
          continued visual or verbal engagement entirely. Where many defensive signals are subtle and
          open to interpretation, a fully turned back leaves very little ambiguity about the message
          being sent. It can occur gradually, as someone slowly rotates away from a person or group
          over the course of a conversation, or abruptly, as a sudden and deliberate movement in
          response to something said or done. Because turning the back requires a conscious or semi
          conscious decision to disengage the body entirely, it tends to be one of the later signals
          in an escalating sequence of disinterest, usually appearing after other more subtle cues
          such as reduced eye contact or a closed posture have already been shown and ignored. In
          group settings, a back turned toward one person while the body remains open to others is a
          particularly pointed and specific signal of exclusion.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A gradual or sudden rotation of the torso and shoulders fully away from a person or group</li>
          <li>The back remaining turned even as the conversation or interaction continues</li>
          <li>A pattern where the back is turned to one specific person while others remain included</li>
          <li>The behaviour appearing after other more subtle disengagement signals have already occurred</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          In most Western social contexts, a fully turned back is read as one of the clearest
          possible signals of dismissal or disinterest, and rarely has an innocent alternative
          explanation once it persists for more than a moment. In crowded environments such as
          parties, a temporary turn to greet someone else is not significant on its own, but a back
          that remains turned for an extended period, particularly toward the same person repeatedly,
          is a much stronger signal. In professional settings, turning the back during a meeting is a
          serious signal of exclusion or disagreement that is rarely accidental given the social cost
          of appearing rude.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A turned back is one of the clearest disengagement signals in any professional setting.
            Our workplace guide covers this alongside the full range of office body language.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
