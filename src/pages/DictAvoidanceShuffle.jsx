import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the avoidance shuffle in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The avoidance shuffle is a pattern of small, repeated steps or weight shifts that gradually increase the physical distance between two people during a conversation, usually signalling discomfort with closeness.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the avoidance shuffle different from a single step backward?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single step backward can have many explanations, but the avoidance shuffle involves a repeated pattern of small movements away from someone over the course of an interaction, which makes it a more reliable signal of ongoing discomfort.',
      },
    },
  ],
}

export default function DictAvoidanceShuffle() {
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
        <h1 className="de-title">Avoidance Shuffle</h1>
        <p className="de-lead">
          The avoidance shuffle describes a pattern of small, repeated steps or shifts of the body
          that gradually increase the distance between two people during a conversation. Unlike a
          single deliberate step backward, the avoidance shuffle tends to happen in a series of
          small, almost imperceptible movements, as the body responds to discomfort by continually
          seeking slightly more personal space. It often begins with a subtle lean or weight shift
          away from the other person, followed by a small step, and can repeat several times over
          the course of an exchange if the source of discomfort does not change. Because each
          individual movement is so minor, the avoidance shuffle is easy to miss unless you are
          specifically watching for a pattern of cumulative distance rather than a single obvious
          action. Over time, the overall effect is that the two people end up considerably further
          apart than when the conversation began, even though neither took one large, obvious step
          away from the other.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A series of small steps or weight shifts that gradually increase distance during a conversation</li>
          <li>Repeated backward leaning combined with subtle repositioning of the feet</li>
          <li>A noticeable gap forming between two people that was not present at the start of the exchange</li>
          <li>The shuffle continuing specifically while one particular person or topic remains present</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          The avoidance shuffle is highly dependent on baseline personal space preferences, which
          vary between individuals and cultures. Someone from a culture that favours greater
          conversational distance may naturally increase space without any discomfort being present.
          The signal becomes meaningful when it represents a clear change from how that same person
          behaved moments earlier in the same conversation, particularly if the shuffling begins
          right after a specific comment, question or topic is introduced. In social and dating
          contexts, a consistent avoidance shuffle is one of the more reliable indicators that a
          person wants to reduce closeness with someone specific rather than simply preferring more
          space in general.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/back-turned" className="de-related-chip">Back Turned</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The avoidance shuffle is one of the clearest signs someone wants to disengage at a social
            gathering. Our party guide covers this and many more social signals.
          </p>
          <Link to="/guides/social-situations" className="de-cta-btn">
            Read the Body Language at a Party Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
