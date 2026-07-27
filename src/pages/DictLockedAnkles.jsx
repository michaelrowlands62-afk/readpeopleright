import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does locked ankles mean in body language?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Locked ankles is a seated posture where the ankles are pressed tightly together and held rigid, and it typically signals restraint and the withholding of a strong emotion.",
      },
    },
    {
      '@type': 'Question',
      name: "How is locked ankles different from simply crossed ankles?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Crossed ankles is a looser, more casual position that can reflect comfort, while locked ankles involves a noticeably tighter grip that suggests active emotional restraint.",
      },
    },
  ],
}

export default function DictLockedAnkles() {
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
        <h1 className="de-title">Locked Ankles</h1>
        <p className="de-lead">
          Locked ankles is a seated posture in which the ankles are pressed tightly together and held rigid, often with the feet tucked slightly beneath the chair, and it is widely recognised as a classic restraint gesture associated with withholding emotion. The tight physical locking of the ankles appears to mirror an internal effort to hold something back, whether that is a strong opinion, a nervous reaction or an emotion the person does not feel comfortable expressing openly in that particular setting. Unlike a simple crossed ankle position, which can reflect casual comfort, locked ankles involves a noticeably tighter, more rigid grip that suggests active restraint rather than relaxed, comfortable sitting. The posture is especially common in formal or high pressure settings, including interviews, medical appointments and legal proceedings, where a person may feel they need to control their reaction carefully in front of others. Because the feet are positioned well outside most people's conscious attention, locked ankles often persists even when someone has successfully composed their face, voice and upper body, making it a particularly useful signal for spotting hidden tension that other parts of the body have already masked.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>The ankles pressed tightly together and held rigid rather than loosely crossed</li>
          <li>The feet sometimes tucked slightly back beneath the chair</li>
          <li>The posture appearing most often in formal or high pressure settings</li>
          <li>The tension persisting even when the face and voice appear composed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Locked ankles appearing the moment a difficult or personal topic is raised is a strong signal that the person is actively restraining an emotional reaction they would rather not show. The same posture held consistently throughout a long, formal meeting may instead reflect general unease with the setting itself rather than any single topic discussed. Because the feet are rarely consciously managed, a sudden tightening of the ankles is often one of the more honest signals available, even when everything else about a person appears calm.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/crossed-ankles" className="de-related-chip">Crossed Ankles</Link>
          <Link to="/dictionary/defensive-crossed-legs" className="de-related-chip">Defensive Crossed Legs</Link>
          <Link to="/dictionary/hand-barrier" className="de-related-chip">Hand Barrier</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Restrained lower body posture is extremely common in interviews and other high pressure settings. Our guide covers this alongside the full range of interview body language signals.
          </p>
          <Link to="/guides/job-interview" className="de-cta-btn">
            Read the Job Interview Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
