import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a hostility cluster in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hostility cluster is the combination of crossed arms, a clenched jaw, narrowed eyes and a forward lean appearing together, forming a reliable indicator of genuine hostility or aggressive intent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a cluster more reliable than a single hostility signal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each individual signal can have an innocent explanation on its own, but four unrelated signals coinciding at the same moment is far less likely than one underlying hostile state producing all of them together.',
      },
    },
  ],
}

export default function DictHostilityCluster() {
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
        <h1 className="de-title">Hostility Cluster</h1>
        <p className="de-lead">
          A hostility cluster is a combination of several individual signals, specifically crossed
          arms, a clenched jaw, narrowed eyes and a forward lean, appearing together at the same
          time, and this specific combination forms one of the more reliable indicators of genuine
          hostility or aggressive intent available in body language reading. While each of these
          individual signals can have a range of innocent explanations when they appear in
          isolation, crossed arms from cold or comfort, a clenched jaw from concentration, narrowed
          eyes from bright light, and a forward lean from simple interest, their simultaneous
          appearance together dramatically reduces the likelihood of an innocent explanation and
          instead points toward a coordinated physiological stress and aggression response affecting
          the whole body at once. This is a clear demonstration of why clusters of signals are
          considered so much more reliable than any single signal considered alone, since the
          probability of four unrelated innocent explanations all coinciding at exactly the same
          moment is considerably lower than the probability that a single underlying emotional
          state, in this case hostility or aggression, is producing all four signals simultaneously.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Crossed arms appearing together with a visibly clenched jaw</li>
          <li>Narrowed eyes combined with the other signals rather than appearing alone</li>
          <li>A forward lean of the body accompanying the other three signals simultaneously</li>
          <li>All four signals appearing together within a short window rather than at separate times</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Any single signal within the hostility cluster, such as crossed arms alone or narrowed
          eyes alone, could easily have an innocent explanation unrelated to hostility. The full
          cluster appearing together, with all four signals present at roughly the same time, is a
          considerably stronger and more reliable indicator of genuine hostility or aggressive
          intent, since coincidentally explaining away four simultaneous signals with unrelated
          innocent causes becomes increasingly implausible the more signals are present together.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/arms-crossed" className="de-related-chip">Arms Crossed</Link>
          <Link to="/dictionary/forward-lean" className="de-related-chip">Forward Lean</Link>
          <Link to="/dictionary/clenched-fists" className="de-related-chip">Clenched Fists</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            A hostility cluster is one of the clearest escalation signals during conflict. Our guide
            covers this alongside the full range of body language seen during arguments.
          </p>
          <Link to="/guides/arguments" className="de-cta-btn">
            Read the Reading Body Language in Arguments Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
