import { Link } from 'react-router-dom'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'Attraction Signals Explained',
    to: '/guides/attraction-signals',
    accent: 'pink',
    description: 'How to tell if someone is genuinely interested. The 12 most reliable attraction signals and what they really mean.',
  },
]

export default function GuideMyths() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language Myths Debunked: What the Science Actually Says</h1>
        <p className="ga-intro">
          Body language advice is everywhere, in self help books, corporate training sessions and
          social media. The problem is that much of it is oversimplified, misquoted or simply
          wrong. Understanding what the science actually says about nonverbal communication can
          make you a sharper reader of people and help you avoid costly misreadings.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 1: Liars Always Avoid Eye Contact</h2>
        <p className="ga-text">
          This is probably the most widely believed body language myth and one of the least
          reliable. Multiple studies have found no consistent relationship between gaze aversion
          and deception. In fact research shows that many practised liars deliberately increase eye
          contact because they know this myth and compensate for it. The science is clear, eye
          contact alone tells you almost nothing about whether someone is being truthful.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 2: Crossed Arms Always Mean Defensiveness</h2>
        <p className="ga-text">
          Crossed arms are almost universally interpreted as a defensive or hostile signal. In
          reality people cross their arms for dozens of reasons, they are cold, they are
          comfortable, it is a habitual resting position, or the chair they are sitting in does not
          have armrests. Research consistently shows that crossed arms alone are not a reliable
          indicator of negative emotion. What matters is whether crossed arms appear as part of a
          cluster of other signals and whether they represent a change from the person's normal
          baseline behaviour.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 3: 93 Percent of Communication is Nonverbal</h2>
        <p className="ga-text">
          This famous statistic comes from research by Albert Mehrabian in the 1960s and has been
          almost universally misunderstood. Mehrabian's finding was specifically about
          communicating feelings and attitudes in ambiguous situations, not about all
          communication. He never claimed that 93 percent of all human communication is nonverbal.
          In reality the balance between verbal and nonverbal communication is highly context
          dependent. Both matter and neither can be dismissed.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 4: You Can Always Tell if a Smile is Fake</h2>
        <p className="ga-text">
          The Duchenne smile, a genuine smile involving the muscles around the eyes, is real and
          research validated. However the idea that you can reliably distinguish genuine from fake
          smiles without training is largely a myth. Studies show that most untrained people
          perform only marginally better than chance when trying to identify fake smiles. The
          ability to distinguish genuine from performed smiles improves significantly with training
          and practice but is never foolproof.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 5: Confident People Always Make Direct Eye Contact</h2>
        <p className="ga-text">
          Sustained direct eye contact is associated with confidence in many Western cultures. But
          this relationship does not hold universally. In many Asian, African and Latin American
          cultures sustained eye contact with an authority figure is considered disrespectful
          rather than confident. Even within Western cultures introverted or highly intelligent
          people sometimes make less eye contact not because they lack confidence but because they
          are processing information internally. Always read body language in cultural context.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 6: You Can Read Anyone if You Know the Signals</h2>
        <p className="ga-text">
          Perhaps the most dangerous myth in body language is the idea that learning a set of
          signals gives you the ability to reliably read any person in any situation. Even trained
          professionals, including FBI agents, psychologists and experienced interviewers, perform
          only slightly better than chance when trying to detect deception without prior knowledge
          of the person. Body language is a probabilistic tool not a certainty machine. Clusters of
          signals in context give you useful information. Individual signals in isolation tell you
          very little.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 7: Mirroring Always Means Someone Likes You</h2>
        <p className="ga-text">
          Mirroring, unconsciously adopting similar postures or gestures to someone else, is indeed
          associated with rapport and positive connection. However it can also occur simply as a
          result of shared attention to the same thing, a common cultural background or proximity
          over time. Deliberate mirroring as a rapport building technique also produces the
          physical behaviour without the underlying genuine connection. Like all signals mirroring
          is meaningful in clusters and context, not in isolation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Myth 8: Body Language is Universal</h2>
        <p className="ga-text">
          While some basic emotional expressions, including happiness, sadness, fear, anger,
          disgust and surprise, appear to have universal components, most body language is
          significantly shaped by culture. The meaning of gestures, acceptable distances between
          people, norms around eye contact and the appropriate display of emotion all vary
          enormously between cultures. Applying body language rules learned in one cultural context
          to people from a different background can lead to serious misreadings.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">What Good Body Language Reading Actually Looks Like</h2>
        <p className="ga-text">
          Effective body language reading is humble, contextual and cluster based. It means looking
          for changes from baseline rather than fixed rules. It means considering multiple
          explanations for any single signal. It means acknowledging uncertainty rather than
          claiming false certainty. And it means continuing to update your reading as new
          information becomes available rather than locking onto an initial impression and
          ignoring contradicting evidence.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test What You Actually Know</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Now that you know what the myths are, test your real body language reading skills
            against genuine scenarios. Our interactive quiz is based on real psychological research
            not popular myths.
          </p>
          <Link to="/episodes" className="ga-cta-btn">
            Test Your Body Language Skills
          </Link>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Learn More</h2>
        <div className="ga-related-grid">
          {RELATED_GUIDES.map((guide) => (
            <Link key={guide.to} to={guide.to} className={`ga-related-card ga-related-card--${guide.accent}`}>
              <div className="ga-related-accent" />
              <div className="ga-related-body">
                <h3 className="ga-related-title">{guide.title}</h3>
                <p className="ga-related-desc">{guide.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
