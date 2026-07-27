import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does object barrier mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Object barrier is the placement of a single item like a bag or cup directly between yourself and another person right at the start of an interaction, signalling a desire for protection.",
      },
    },
    {
      '@type': 'Question',
      name: "How is object barrier different from barrier objects generally?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Object barrier specifically describes the instinctive initial placement of an item at the very start of an interaction, while barrier objects covers how such items are used throughout an entire conversation.",
      },
    },
  ],
}

export default function DictObjectBarrier() {
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
        <h1 className="de-title">Object Barrier</h1>
        <p className="de-lead">
          Object barrier describes the specific, often instinctive act of placing a single item, such as a bag, cup, laptop or folder, directly between yourself and another person right at the start of an interaction, before any real conversation has begun. This differs slightly from the broader pattern of using barrier objects throughout a conversation, since object barrier specifically captures the initial, almost automatic choice of where to put something down the moment two people sit or stand together. A person who feels some degree of unfamiliarity, unease or vulnerability entering a meeting, first date or interview will frequently choose to position their bag, drink or device directly in the space between themselves and the other person, rather than to the side or out of the way entirely. This initial placement often sets the psychological tone for the rest of the interaction, since a person who begins behind a barrier tends to feel a small degree of protection that can make the opening minutes of an unfamiliar situation feel more manageable. Because the choice happens almost immediately and before much rapport has been established, an object barrier introduced right at the outset is a particularly useful early signal of how comfortable someone feels entering the interaction.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>An item such as a bag, cup or laptop placed directly between the two people within the first moments</li>
          <li>The object positioned centrally rather than to the side or out of the way</li>
          <li>The placement happening almost immediately, before much conversation has taken place</li>
          <li>The barrier remaining largely undisturbed through the early part of the interaction</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An object barrier introduced the moment someone sits down for an unfamiliar meeting or first date generally reflects a natural, low level need for protection while they settle into the situation. The same placement in a familiar, comfortable setting with people the person already knows well is far less meaningful and may simply be a convenient place to put something down. Watching whether the barrier is later moved aside as the conversation warms up is often more revealing than the initial placement itself, since a barrier that gradually disappears usually tracks growing comfort.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
          <Link to="/dictionary/hand-barrier" className="de-related-chip">Hand Barrier</Link>
          <Link to="/dictionary/back-turned" className="de-related-chip">Back Turned</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The first few moments of an interview often reveal more than the rest of the conversation combined. Our guide covers this alongside the full range of interview body language signals.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
