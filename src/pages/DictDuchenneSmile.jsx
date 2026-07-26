import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Duchenne smile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Duchenne smile is a genuine smile that engages the muscles around the eyes, producing natural crinkles, distinguishing it from a polite or forced smile that involves only the mouth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a Duchenne smile considered more reliable than an ordinary smile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The muscles around the eyes involved in a Duchenne smile are largely outside conscious control, making the expression very difficult to produce deliberately, unlike a smile confined to the mouth.',
      },
    },
  ],
}

export default function DictDuchenneSmile() {
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
        <h1 className="de-title">Duchenne Smile</h1>
        <p className="de-lead">
          A Duchenne smile is a genuine smile that engages the orbicularis oculi, the muscle
          encircling the eye, producing natural crinkles at the outer corners that are extremely
          difficult to create voluntarily. Named after the nineteenth century physician who first
          documented the distinction, this type of smile is widely regarded as the clearest visible
          marker separating spontaneous positive emotion from a smile that is performed or socially
          obligatory. In a Duchenne smile, the muscles around the eyes contract involuntarily as part
          of a genuine positive emotional response, producing the characteristic crinkling sometimes
          described as crow's feet, alongside a subtle raising of the cheeks that a purely voluntary
          smile struggles to replicate convincingly. A polite or social smile, by contrast, tends to
          engage only the muscles around the mouth, leaving the eyes comparatively still and
          unchanged. Because the eye muscles involved in a genuine smile are largely outside
          conscious control for most people, learning to distinguish a Duchenne smile from its
          performed counterpart is one of the single most useful skills in reading whether someone's
          positive expression reflects how they actually feel.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Natural crinkles appearing at the outer corners of the eyes during the smile</li>
          <li>A subtle raising of the cheeks accompanying the movement around the mouth</li>
          <li>The smile building gradually and fading naturally rather than switching on and off</li>
          <li>The eyes remaining animated and engaged rather than static throughout the expression</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A Duchenne smile appearing spontaneously in response to genuinely good news or a funny
          moment reliably reflects authentic positive emotion. A smile confined to the mouth, held at
          a constant intensity and appearing on cue during a photograph or a polite greeting, is far
          more likely to be a social smile rather than a genuine emotional response. Because some
          people have learned to consciously engage their eye muscles to a degree, the smile should
          be considered alongside its timing and the wider emotional context rather than treated as
          an infallible test on its own.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
          <Link to="/dictionary/drooping-eyelids" className="de-related-chip">Drooping Eyelids</Link>
          <Link to="/dictionary/cheek-puffing" className="de-related-chip">Cheek Puffing</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            The Duchenne smile is one of the most consistently validated findings in body language
            research. Our complete guide covers this alongside pupil dilation and gaze direction.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
