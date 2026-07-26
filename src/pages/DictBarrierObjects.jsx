import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are barrier objects in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barrier objects are items such as bags, cups or folders that a person places between themselves and another person to create a subtle physical and psychological shield during a conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people use barrier objects instead of crossing their arms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Using an object feels socially more acceptable than an obviously defensive posture like crossed arms, allowing a person to create protective distance without appearing openly closed off.',
      },
    },
  ],
}

export default function DictBarrierObjects() {
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
        <h1 className="de-title">Barrier Objects</h1>
        <p className="de-lead">
          Barrier objects are physical items, such as bags, cups, folders, laptops or drinks, that a
          person places between themselves and another person during a conversation. Although the
          object itself may serve a genuine practical purpose, its position is what turns it into a
          meaningful signal. Rather than resting an item to the side or out of the way, a person
          feeling defensive or exposed will often position it directly in the space between
          themselves and whoever they are speaking with, creating a subtle physical shield. This
          behaviour draws on the same underlying psychology as crossed arms or other closed postures,
          using an object to create a sense of protection and distance without the social awkwardness
          of an openly defensive gesture. Barrier objects are especially common in situations
          involving unfamiliar people, negotiations or any interaction where a person feels a
          heightened need for psychological safety, and the choice to introduce or reposition such an
          object partway through a conversation can be just as informative as its presence from the
          very beginning.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>An object such as a bag, cup or folder placed directly between the person and whoever they are speaking with</li>
          <li>The object being repositioned to sit more centrally after a particular topic or question arises</li>
          <li>A person pulling an existing object closer to their body during a stressful moment</li>
          <li>The barrier remaining in place even when it serves no practical purpose in the conversation</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Barrier objects are easy to misread if the practical explanation is ignored entirely. A
          drink placed on a table is not automatically a defensive signal, since it may simply be the
          most convenient place to put it down. The behaviour becomes meaningful when the object is
          deliberately repositioned toward the centre of the interaction, pulled closer during a
          specific moment of discomfort, or maintained in place even when it would be more convenient
          elsewhere. In negotiation and interview settings, watching when an object is introduced or
          moved relative to the flow of conversation often reveals far more than the object itself.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/back-turned" className="de-related-chip">Back Turned</Link>
          <Link to="/dictionary/anchoring" className="de-related-chip">Anchoring</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Object placement is a subtle but revealing signal at the negotiating table. Our
            negotiation guide covers this alongside the full range of dealmaking signals.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
