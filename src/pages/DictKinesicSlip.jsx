import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is a kinesic slip in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A kinesic slip is a brief, involuntary body movement, such as a small head shake or shrug, that contradicts what a person is saying out loud and reveals their true feelings.",
      },
    },
    {
      '@type': 'Question',
      name: "Is a single kinesic slip proof that someone is lying?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, a single slip is not conclusive proof, but a repeated pattern of slips around the same topic, especially timed directly against a confident claim, is a strong warning sign.",
      },
    },
  ],
}

export default function DictKinesicSlip() {
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
        <h1 className="de-title">Kinesic Slip</h1>
        <p className="de-lead">
          A kinesic slip is a brief, involuntary body movement that contradicts what a person is saying out loud, offering a rare and often unguarded glimpse into their true feelings or intentions. Unlike a full micro expression, which involves the face, a kinesic slip can appear anywhere in the body, such as a small shake of the head while verbally agreeing, a shrug that undercuts a confident claim, or a slight recoil of the shoulders while insisting that something does not bother them. These slips happen because verbal statements are consciously chosen and easily controlled, while many body movements operate on a faster, less deliberate track that is far harder to consciously suppress in the moment. Because a kinesic slip typically lasts only a fraction of a second and is quickly followed by the person's intended, controlled behaviour, it is easy to miss unless an observer is watching closely for contradictions between words and movement. Spotting a genuine kinesic slip is considered one of the more reliable deception detection techniques, precisely because it captures a moment before conscious control has fully taken over the response.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>A brief, involuntary movement that directly contradicts the spoken statement</li>
          <li>The slip appearing for only a fraction of a second before normal behaviour resumes</li>
          <li>A small head shake, shrug or recoil occurring at odds with a confident claim</li>
          <li>The movement happening right as the contradictory statement is being made</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A kinesic slip that appears at the exact moment someone makes a confident verbal claim is a strong signal that their true feelings differ from what they are saying, even if they quickly recover and continue speaking normally. A single isolated slip is not proof of dishonesty on its own, but a pattern of repeated slips around the same topic strengthens the case considerably. Comparing the timing of the movement to the exact words being spoken is essential, since the value of a kinesic slip lies entirely in the direct contradiction it reveals.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/head-shake-during-agreement" className="de-related-chip">Head Shake During Agreement</Link>
          <Link to="/dictionary/fake-laugh" className="de-related-chip">Fake Laugh</Link>
          <Link to="/dictionary/eye-contact-avoidance" className="de-related-chip">Eye Contact Avoidance</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A kinesic slip is one of the most reliable involuntary tells available to a careful observer. Our guide covers this alongside the full range of deception clusters.
          </p>
          <Link to="/guides/spot-a-liar" className="de-cta-btn">
            Read the How to Spot a Liar Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
