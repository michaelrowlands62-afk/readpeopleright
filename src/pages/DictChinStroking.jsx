import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does chin stroking mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chin stroking is a repeated touching or stroking of the chin that signals active evaluation, typically appearing while a person is considering a proposal or weighing up information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chin stroking a positive or negative signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chin stroking is generally a positive engagement signal, since it shows a person is seriously considering what has been said rather than dismissing it outright.',
      },
    },
  ],
}

export default function DictChinStroking() {
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
        <h1 className="de-title">Chin Stroking</h1>
        <p className="de-lead">
          Chin stroking is the repeated touching or gentle stroking of the chin, often performed
          with the thumb and forefinger, and it is one of the clearest and most widely recognised
          signals of active evaluation during a conversation. The gesture typically appears when
          someone is weighing up information, considering a proposal or forming a judgement about
          what has just been said, and it functions almost as a visible marker of active mental
          processing taking place in real time. Unlike signals that suggest discomfort or
          disengagement, chin stroking generally reflects a positive form of engagement, since it
          shows the listener is taking the input seriously enough to deliberate over it rather than
          dismissing it immediately. It is especially common in negotiation, sales and decision
          making contexts, where one party is presenting an option or offer and the other is visibly
          processing whether to accept it. The duration and intensity of the stroking can offer
          additional information, with a longer, slower stroke generally suggesting a more
          significant or difficult decision is being weighed than a brief, quick touch.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repeated stroking or touching of the chin, often with the thumb and forefinger</li>
          <li>The gesture appearing specifically while considering a proposal, offer or piece of information</li>
          <li>A slower, more sustained stroke suggesting a more significant decision being weighed</li>
          <li>The behaviour paired with a slightly furrowed brow or a downward, thoughtful gaze</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Chin stroking during a sales pitch or negotiation is generally a positive signal, since it
          indicates the listener is genuinely considering the proposal rather than having already
          dismissed it. The same gesture appearing during a casual conversation with no decision
          being weighed may simply reflect a habitual resting behaviour for that particular person.
          Context around what has just been said is essential here, since chin stroking that begins
          immediately after a specific offer or statement is being directly linked to evaluating
          that statement, while a gesture present throughout an entire conversation regardless of
          content is more likely to be an unrelated personal habit.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Chin stroking is one of the clearest evaluation signals at the negotiating table. Our
            guide covers this alongside the full range of dealmaking signals.
          </p>
          <Link to="/guides/negotiation-body-language" className="de-cta-btn">
            Read the Reading Body Language in Negotiations Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
