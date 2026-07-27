import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does a lowered head nod mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A lowered head nod is a nod performed with the head bowed slightly forward and downward, and it typically signals respectful agreement and deference toward the speaker.",
      },
    },
    {
      '@type': 'Question',
      name: "How is a lowered head nod different from an eager, rapid nod?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A lowered head nod is slower and more measured, reflecting sincere acceptance, while a rapid nod often signals eagerness to please rather than genuine considered agreement.",
      },
    },
  ],
}

export default function DictLoweredHeadNod() {
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
        <span className="de-category">Engagement Signals</span>
        <h1 className="de-title">Lowered Head Nod</h1>
        <p className="de-lead">
          Lowered head nod is a variation of ordinary nodding in which the head is bowed slightly forward and downward while nodding, rather than remaining level or tilted upward, and it typically signals respectful agreement and a degree of deference toward the person speaking. This subtle downward angle changes the meaning of the nod considerably compared with a level nod, since lowering the head slightly is a widely recognised gesture of humility and acknowledgement across many social and professional contexts. The gesture often appears when someone is receiving instructions, feedback or correction from a person they regard as having more authority, seniority or expertise in that particular situation. Unlike an enthusiastic, rapid nod, which can sometimes signal eagerness to please rather than genuine agreement, a lowered head nod tends to be slower and more measured, reinforcing the impression of sincere, considered acceptance rather than automatic compliance. Because the gesture combines the general agreement signal of nodding with the deference signal of a lowered head, it is particularly common in formal hierarchical settings, including workplaces, classrooms and traditional social structures where showing respect to authority carries clear social importance.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The head bowed slightly forward and downward while nodding</li>
          <li>A slower, more measured pace compared with rapid, eager nodding</li>
          <li>The gesture appearing while receiving instructions, feedback or correction</li>
          <li>The behaviour most common in settings involving clear seniority or authority</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A lowered head nod appearing while receiving feedback from a senior figure generally reflects genuine, respectful acceptance of what is being said, rather than passive or forced compliance. The same gesture appearing between peers with no clear difference in status is less common and may instead simply reflect a person's habitual nodding style. Paying attention to the relationship between the two people involved helps clarify whether the lowered angle is signalling genuine deference or is simply part of someone's normal way of nodding.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/head-tilt" className="de-related-chip">Head Tilt</Link>
          <Link to="/dictionary/double-nod" className="de-related-chip">Double Nod</Link>
          <Link to="/dictionary/forward-lean" className="de-related-chip">Forward Lean</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Subtle signals of respect and deference shape how hierarchy plays out in any workplace. Our guide covers this alongside the full range of professional body language cues.
          </p>
          <Link to="/guides/workplace-body-language" className="de-cta-btn">
            Read the Reading Body Language at Work Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
