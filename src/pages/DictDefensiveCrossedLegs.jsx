import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does defensive crossed legs mean in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Defensive crossed legs is a tightly held, rigid seated posture, often paired with crossed arms, that signals a person feels psychologically threatened or wants to protect themselves from a perceived challenge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is defensive crossed legs different from simply sitting comfortably?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A relaxed crossed leg position shifts naturally during conversation, while the defensive version stays rigid and still, and it typically appears alongside other closed signals rather than on its own.',
      },
    },
  ],
}

export default function DictDefensiveCrossedLegs() {
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
        <span className="de-category">Defensive Signals</span>
        <h1 className="de-title">Defensive Crossed Legs</h1>
        <p className="de-lead">
          Defensive crossed legs describes a seated posture in which the legs are crossed tightly,
          often at the knee, and held in place with additional tension rather than resting loosely.
          The posture frequently appears alongside crossed arms, and together the two signals
          reinforce a single closed, guarded message rather than acting as separate, unrelated
          behaviours. Where a relaxed crossed leg position allows the upper leg to swing or shift
          naturally during conversation, the defensive version tends to remain rigidly still,
          sometimes with the foot hooked behind the opposite calf for additional stability and
          containment. This posture typically emerges in response to a perceived threat, criticism or
          a topic that makes someone feel psychologically exposed, and it functions as a way of
          protecting the body's more vulnerable areas while simultaneously reducing how much physical
          space the person occupies. Because crossing the legs is also simply a common and
          comfortable resting position for many people, distinguishing the defensive version depends
          heavily on its tightness, rigidity and the presence of other closed signals occurring at
          the same time.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Legs crossed tightly at the knee with noticeably more tension than a relaxed crossing</li>
          <li>The posture appearing alongside crossed arms or other closed body signals</li>
          <li>Minimal natural movement or shifting of the crossed leg during conversation</li>
          <li>The behaviour emerging in direct response to a specific challenging topic or question</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          A loosely crossed leg that shifts and moves naturally throughout a relaxed conversation is
          simply a comfortable resting position and carries little meaning on its own. The posture
          becomes genuinely defensive when the legs are crossed tightly, held rigidly still, and
          appear alongside other closed signals such as crossed arms or reduced eye contact,
          particularly if this combination emerges specifically after a difficult question or
          criticism. Reading the full cluster together, rather than the crossed legs in isolation, is
          essential to distinguishing genuine defensiveness from an ordinary seated habit.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/crossed-wrists" className="de-related-chip">Crossed Wrists</Link>
          <Link to="/dictionary/back-turned" className="de-related-chip">Back Turned</Link>
          <Link to="/dictionary/barrier-objects" className="de-related-chip">Barrier Objects</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Seated posture reveals a great deal in interviews. Our guide covers how to read and
            present body language while seated across the table.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
