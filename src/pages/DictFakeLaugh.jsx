import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a fake laugh in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fake laugh is a consciously produced laughter response that appears shorter, louder and more abrupt than genuine laughter, often used to smooth over awkward moments rather than reflecting real amusement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell a fake laugh from a genuine one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine laughter builds and fades naturally and often involves the whole body, while a fake laugh tends to begin and end abruptly and stays confined mostly to the voice and mouth.',
      },
    },
  ],
}

export default function DictFakeLaugh() {
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
        <span className="de-category">Deception Signals</span>
        <h1 className="de-title">Fake Laugh</h1>
        <p className="de-lead">
          A fake laugh is a consciously produced laughter response that lacks the spontaneous
          qualities of genuine laughter, typically appearing shorter, louder and more abrupt in onset
          and ending than an authentic reaction would naturally be. Genuine laughter tends to build
          and fade with a certain natural unpredictability, often involving the whole body to some
          degree through breathing changes, shoulder movement or a slight forward or backward rocking
          motion, whereas a performed laugh is frequently confined largely to the mouth and voice,
          with comparatively little corresponding movement elsewhere in the body. A fake laugh is
          also commonly used as a social tool independent of genuine amusement, deployed to smooth
          over an awkward silence, signal polite agreement, or defuse a tense moment, meaning its
          presence does not necessarily indicate an attempt to deceive so much as a socially learned
          habit of managing group dynamics. Distinguishing a fake laugh from a genuine one depends on
          comparing its timing, physical involvement and natural variation against what a spontaneous
          reaction to that same moment would typically produce.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Laughter that begins and ends abruptly rather than building and fading naturally</li>
          <li>The reaction confined mostly to the voice and mouth with little wider body movement</li>
          <li>A volume or pitch that seems disproportionate to how funny the moment actually was</li>
          <li>The laugh appearing at socially convenient moments rather than genuinely amusing ones</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A fake laugh deployed to smooth over an awkward silence or signal polite agreement in a low
          stakes social setting is a normal and largely harmless social tool rather than a sign of
          deception. The same forced quality of laughter appearing in response to a serious or
          sensitive question, particularly one where genuine amusement would be an unusual reaction
          in the first place, is a more meaningful signal that the reaction is managed rather than
          spontaneous. Considering what would count as a natural response to the specific moment is
          essential to reading a fake laugh accurately.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/facial-symmetry-check" className="de-related-chip">Facial Symmetry Check</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A fake laugh is one of the more common social performances people miss. Our guide covers
            this alongside the clusters that actually reveal dishonesty.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
