import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does pupil dilation mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pupil dilation is the involuntary widening of the pupils in response to genuine interest, attraction or emotional arousal, controlled entirely by the nervous system rather than conscious choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can pupil dilation be faked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Because it is controlled by the autonomic nervous system, pupil dilation cannot be consciously produced, though lighting conditions must always be ruled out before reading it as a genuine interest signal.',
      },
    },
  ],
}

export default function DictPupilDilation() {
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
        <span className="de-category">Attraction Signals</span>
        <h1 className="de-title">Pupil Dilation</h1>
        <p className="de-lead">
          Pupil dilation is the involuntary widening of the pupils, controlled entirely by the
          autonomic nervous system and therefore essentially impossible for a person to consciously
          produce or suppress on demand. This widening occurs in response to genuine interest,
          attraction or emotional arousal, alongside its more commonly known function of adjusting to
          lower light conditions, which means lighting must always be accounted for before drawing
          conclusions from pupil size. When lighting conditions remain constant, a noticeable
          dilation that appears specifically in response to a particular person entering the room or
          a specific topic being discussed is considered one of the more reliable nonverbal signals
          available, precisely because it cannot be faked. Historically, this signal was well
          understood long before modern psychology formally studied it, with accounts of people in
          earlier centuries using various substances specifically to dilate their pupils and appear
          more attractive in social settings. Because it operates entirely below conscious control,
          pupil dilation carries particular weight when it appears consistently alongside other
          signals of genuine interest such as sustained eye contact or forward leaning posture.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A noticeable widening of the pupils that cannot be attributed to a change in lighting</li>
          <li>The dilation appearing specifically in response to a particular person or topic</li>
          <li>The signal appearing alongside other genuine interest cues such as leaning in or smiling</li>
          <li>Pupils returning to their normal size once the source of interest is no longer present</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Pupil dilation in a dimly lit room is simply a natural physiological response to low light
          and carries no particular meaning about interest or attraction. The signal becomes
          genuinely informative only when lighting conditions are ruled out as the cause, such as
          when dilation appears specifically as one particular person enters a well lit room while
          remaining unchanged around others. Because the signal is involuntary, it is considered a
          strong corroborating cue when it appears alongside other more visible signs of interest,
          but it should never be relied upon alone without first accounting for the lighting
          environment.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/deliberate-touch" className="de-related-chip">Deliberate Touch</Link>
          <Link to="/dictionary/direct-eye-contact" className="de-related-chip">Direct Eye Contact</Link>
          <Link to="/dictionary/brow-raise" className="de-related-chip">Brow Raise</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Pupil dilation is one of the most involuntary and reliable signals in the eyes. Our
            complete guide covers this alongside gaze direction and blinking.
          </p>
          <Link to="/guides/reading-eyes" className="de-cta-btn">
            Read the How to Read Someone's Eyes Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
