import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does an Adam's apple jump mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An Adam's apple jump is a visible upward and downward movement of the throat during a hard swallow, and it often signals nervousness or suppressed emotion in that moment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is every swallow a meaningful body language signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, ordinary swallowing happens constantly and carries no meaning, and only a hard, visible swallow timed closely to a specific stressful moment should be read as a genuine signal.',
      },
    },
  ],
}

export default function DictAdamsAppleJump() {
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
        <h1 className="de-title">Adam's Apple Jump</h1>
        <p className="de-lead">
          Adam's apple jump is a visible upward and downward movement of the larynx during a hard, noticeable swallow, most easily seen in people with a more prominent thyroid cartilage at the front of the throat. The gesture often appears involuntarily at a moment of heightened nervousness, discomfort or suppressed emotion, since a dry mouth and tightened throat under stress can make an ordinary swallow considerably more effortful and visible than usual. Because swallowing is a basic bodily function that happens constantly without any conscious thought, most instances of it carry no meaning at all, and only a swallow that is unusually hard, sudden or timed closely to a specific stressful moment should be treated as a genuine signal worth noting. The movement commonly appears right before someone is about to answer a difficult question, deliver unwelcome news or respond to something that has caught them off guard, since these are exactly the moments when the throat tightens under sudden pressure. Because the muscles controlling the throat operate largely outside conscious control, an Adam's apple jump is difficult for a person to consciously suppress or fake, which makes a genuinely well timed instance a relatively honest window into a person's internal state at that precise moment.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A visible upward and downward movement of the larynx during a hard swallow</li>
          <li>The swallow appearing noticeably more effortful than an ordinary one</li>
          <li>The movement timed closely to a specific difficult question or piece of news</li>
          <li>The gesture paired with other stress signals like a tightened jaw or gaze aversion</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          An Adam's apple jump appearing right before someone answers a difficult or unexpected question is a strong signal of genuine nervousness or suppressed emotion tied to that specific moment. Ordinary, unremarkable swallowing that happens throughout a conversation carries no real meaning and should not be read as a signal at all. Because the throat is so difficult to consciously control, a hard, visible swallow timed precisely around a stressful moment is one of the more honest signals available, especially when it appears alongside other stress cues rather than in isolation.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/throat-touch" className="de-related-chip">Throat Touch</Link>
          <Link to="/dictionary/jaw-clenching" className="de-related-chip">Jaw Clenching</Link>
          <Link to="/dictionary/gaze-aversion" className="de-related-chip">Gaze Aversion</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A hard, visible swallow is one of the most involuntary stress signals the body produces. Our guide covers this alongside the full range of nervous body language cues.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
