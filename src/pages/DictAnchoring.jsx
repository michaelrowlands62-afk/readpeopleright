import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does anchoring mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anchoring refers to standing with feet planted firmly and evenly, weight distributed equally between both feet, a stance widely read as a signal of confidence and calm authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does constant weight shifting signal nervousness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repeatedly shifting weight from foot to foot uses physical movement to release nervous energy the body cannot otherwise contain, which is why it is one of the most common signals of anxiety in a standing position.',
      },
    },
  ],
}

export default function DictAnchoring() {
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
        <h1 className="de-title">Anchoring</h1>
        <p className="de-lead">
          Anchoring describes the way a person plants their feet firmly and evenly on the ground
          while standing or speaking, distributing their weight equally rather than rocking,
          shifting or shuffling. It is one of the clearest physical markers of genuine composure
          because it requires the body to remain settled under attention, something that becomes
          noticeably harder the more anxious a person feels. A well anchored stance typically
          involves feet roughly shoulder width apart, knees soft rather than locked, and weight
          spread evenly across both feet rather than concentrated on one side. This grounded quality
          is read almost instantly by observers as calm authority, even before a word is spoken. The
          opposite pattern, constant weight shifting from foot to foot, rocking gently back and
          forth or repeatedly repositioning the feet, is one of the most reliable indicators of
          nervous energy in a standing position. Because anchoring is a physical habit rather than a
          fixed trait, it can be deliberately practised and strengthened over time with attention and
          repetition.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Feet planted at roughly shoulder width with weight distributed evenly between them</li>
          <li>An absence of repeated weight shifting, rocking or foot repositioning while standing</li>
          <li>A stance that remains stable even when the person is put under direct questioning</li>
          <li>Knees that stay soft and relaxed rather than locked rigidly in place</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Anchoring is most revealing when compared against a person's own baseline rather than
          judged as a fixed rule. A naturally still person standing anchored during a casual
          conversation is not showing anything unusual. The same person suddenly beginning to shift
          their weight rapidly the moment a difficult question is raised is showing you a meaningful
          change. In public speaking and interview contexts, anchoring is often deliberately
          practised as a confidence technique, which means it can be performed as well as genuine.
          The clearest sign of authentic anchoring is that it holds up under pressure rather than
          only appearing during easy, low stakes moments of the interaction.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
          <Link to="/dictionary/body-orientation" className="de-related-chip">Body Orientation</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Anchoring is one of the ten practical changes covered in our confident body language
            guide, including a dedicated section on grounding your feet.
          </p>
          <Link to="/guides/confident-body-language" className="de-cta-btn">
            Read the Confident Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
