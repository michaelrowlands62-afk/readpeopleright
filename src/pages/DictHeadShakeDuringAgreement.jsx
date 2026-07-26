import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a head shake during agreement mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A head shake during agreement, saying yes while making a subtle side to side head movement, is a contradiction signal that often reveals genuine underlying disagreement the person is not expressing verbally.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is this contradiction considered a reliable deception signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The verbal and physical channels of communication are processed somewhat separately, so a genuine internal conflict between what someone says and believes can leak through as an involuntary contradictory movement.',
      },
    },
  ],
}

export default function DictHeadShakeDuringAgreement() {
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
        <h1 className="de-title">Head Shake During Agreement</h1>
        <p className="de-lead">
          A head shake during agreement occurs when a person verbally agrees with a statement
          while simultaneously making a small, often barely noticeable side to side shaking motion
          with their head, the same physical movement typically associated with saying no. This
          contradiction between the spoken word and the accompanying head movement is considered a
          classic signal revealing true underlying disagreement, since the verbal channel and the
          physical channel of communication are processed somewhat separately in the brain, and a
          genuine internal conflict between what someone says and what they actually believe can
          leak through in exactly this kind of physical contradiction. The head shake is often small
          and easy to miss, sometimes reduced to only a slight, brief movement rather than a full
          deliberate shake, precisely because the person saying the words is not consciously choosing
          to shake their head at all. When this contradiction appears, it is one of the more reliable
          nonverbal indicators that a person's stated agreement does not match their genuine internal
          position on the matter being discussed.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A small side to side head movement occurring at the same time as verbal agreement</li>
          <li>The shake being brief and subtle rather than an obvious, deliberate movement</li>
          <li>The contradiction appearing specifically during a statement of agreement or acceptance</li>
          <li>The behaviour occurring without the person appearing consciously aware of the movement</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A head shake during agreement that appears consistently and clearly, timed precisely with
          the verbal statement of agreement, is a strong and specific indicator that the person's
          true feelings contradict what they are saying. A very slight or ambiguous head movement,
          particularly one that could also be explained by a general habit of moving the head while
          speaking, should be weighed more cautiously and considered alongside other contradictory
          signals before drawing firm conclusions about genuine disagreement.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/asymmetrical-expression" className="de-related-chip">Asymmetrical Expression</Link>
          <Link to="/dictionary/contempt-micro-expression" className="de-related-chip">Contempt Micro Expression</Link>
          <Link to="/dictionary/eye-contact-avoidance" className="de-related-chip">Eye Contact Avoidance</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Contradictions between words and body language are one of the clearest deception
            signals. Our guide covers this alongside the clusters that actually reveal dishonesty.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
