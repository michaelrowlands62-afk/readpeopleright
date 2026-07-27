import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does jaw clenching mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Jaw clenching is the tightening of the muscles along the jaw, and it typically signals suppressed anger, frustration or tension that a person is not expressing openly.",
      },
    },
    {
      '@type': 'Question',
      name: "How can you tell jaw clenching from a normal resting expression?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Jaw clenching usually shows a visible bulge or ripple near the back of the jaw along with a tightened mouth, and it tends to appear suddenly right after a provocative comment.",
      },
    },
  ],
}

export default function DictJawClenching() {
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
        <h1 className="de-title">Jaw Clenching</h1>
        <p className="de-lead">
          Jaw clenching is the tightening of the muscles along the sides of the jaw, often visible as a small bulge or ripple near the back of the cheek where the masseter muscle sits, and it is one of the clearest physical signals of suppressed anger, frustration or tension. Unlike gestures that involve visible movement, jaw clenching is a largely static, held signal, which can make it easy to miss unless an observer is specifically looking for the subtle bulging of the muscle or a slightly tightened, closed lipped expression. The behaviour typically occurs when someone wants to react strongly to something that has just been said or done but feels unable or unwilling to express that reaction openly, whether for professional, social or personal reasons. Because the jaw muscles are connected to the body's broader stress response, prolonged or repeated clenching can also be accompanied by a tightened neck, narrowed eyes or a fixed, unmoving stare. Spotting jaw clenching in real time gives a valuable early warning that a person is holding back a strong negative reaction, often well before that reaction shows up in their words or tone of voice.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A visible bulge or ripple near the back of the jaw where the muscle tightens</li>
          <li>A tightly closed, slightly compressed mouth held for several seconds</li>
          <li>The behaviour appearing immediately after a provocative or frustrating statement</li>
          <li>The clenching paired with a narrowed gaze or a stiffened neck and shoulders</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Jaw clenching that appears the instant a specific comment is made is a strong indicator that the comment triggered genuine anger or frustration, even if the person's verbal response stays calm and measured. The same tension held constantly throughout an entire stressful meeting or difficult day may instead reflect general, ongoing strain rather than a reaction to any single remark. Because the jaw rarely lies, this signal is especially useful for catching suppressed frustration in professional settings where an open reaction would be inappropriate.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
          <Link to="/dictionary/hostility-cluster" className="de-related-chip">Hostility Cluster</Link>
          <Link to="/dictionary/brow-furrow" className="de-related-chip">Brow Furrow</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Jaw clenching is one of the earliest physical warnings that a conversation is escalating. Our guide covers this alongside the full range of conflict signals.
          </p>
          <Link to="/guides/arguments" className="de-cta-btn">
            Read the Reading Body Language in Arguments Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
