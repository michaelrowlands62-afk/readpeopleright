import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can you tell a genuine smile from a forced one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A genuine smile engages the muscles around the eyes, producing natural crinkles, and builds and fades gradually, while a forced smile often fails to reach the eyes and can appear more abrupt or asymmetrical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the mouth alone not a reliable way to judge a smile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The mouth is the easiest part of a smile to consciously control, so genuine sincerity is better judged by the eyes, timing and symmetry, which are much harder to fake deliberately.',
      },
    },
  ],
}

export default function DictGenuineVsForcedSmile() {
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
        <span className="de-category">Emotion Signals</span>
        <h1 className="de-title">Genuine vs Forced Smile</h1>
        <p className="de-lead">
          The distinction between a genuine and a forced smile is one of the most important and
          most researched concepts in reading facial sincerity, since smiling is simultaneously one
          of the most common expressions and one of the most frequently performed rather than
          genuinely felt. A genuine smile engages the muscles surrounding the eyes, producing
          natural crinkles at the outer corners, builds and fades gradually, and tends to appear
          symmetrically across both sides of the face. A forced smile, by comparison, frequently
          fails to reach the eyes at all, leaving them comparatively flat and unchanged, often
          appears more abruptly and disappears more suddenly than a genuine reaction would, and can
          show subtle asymmetry between the two sides of the face that a fully spontaneous expression
          rarely displays. Learning to distinguish these two versions reliably requires looking
          beyond the mouth alone, since the mouth is the easiest part of a smile to consciously
          control, and paying closer attention to the eyes, the timing of the expression and its
          symmetry, all of which are considerably harder to manage deliberately.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Natural crinkles around the eyes present in a genuine smile but absent in a forced one</li>
          <li>A gradual build and fade in a genuine smile versus an abrupt onset and offset in a forced one</li>
          <li>Symmetry across both sides of the face in a genuine smile versus subtle unevenness in a forced one</li>
          <li>The eyes remaining animated in genuine smiles but comparatively flat in performed ones</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Distinguishing a genuine from a forced smile matters most in situations where sincerity
          carries real weight, such as assessing whether an apology, a greeting or an expression of
          enthusiasm is authentic. In low stakes social moments, such as a passing greeting to a
          stranger, a forced smile is simply normal social courtesy and does not indicate anything
          deceptive. The distinction becomes meaningful specifically when genuine sincerity is being
          claimed or implied, such as during an apparent expression of enthusiasm, agreement or
          warmth that the surrounding context suggests should be genuinely felt.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/fixed-smile" className="de-related-chip">Fixed Smile</Link>
          <Link to="/dictionary/duchenne-smile" className="de-related-chip">Duchenne Smile</Link>
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Reading real sincerity in a smile starts with the eyes. Our complete guide covers this
            alongside pupil dilation, gaze direction and micro expressions.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
