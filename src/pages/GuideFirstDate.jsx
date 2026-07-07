import { Link } from 'react-router-dom'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Attraction Signals Explained',
    to: '/guides/attraction-signals',
    accent: 'pink',
    description: 'How to tell if someone is genuinely interested. The 12 most reliable attraction signals and what they really mean.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language, fact checked. The most common misconceptions explained.',
  },
]

export default function GuideFirstDate() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">First Date Body Language: What to Look For and What to Show</h1>
        <p className="ga-intro">
          A first date is one of the most body language rich situations in human social life. Both
          people are simultaneously trying to present themselves well and read the other person
          accurately. Understanding the signals that reveal genuine interest versus polite
          tolerance can save you from misreading situations and help you recognise real connection
          when it is there.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">The First Impression</h2>
        <p className="ga-text">
          Research suggests that first impressions form within seconds and are remarkably
          resistant to change. On a first date the way you arrive, greet and carry yourself in
          those opening moments sets the tone for everything that follows. Walk in with your head
          up, shoulders relaxed and at a measured unhurried pace. Greet with a warm genuine smile
          and comfortable eye contact. Whether you go for a handshake or a brief hug depends on
          context but whatever you do, do it with confidence rather than hesitation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signals of Genuine Interest to Look For</h2>
        <p className="ga-text">
          Genuine romantic interest produces a predictable cluster of signals. Their body will
          orient toward you even when distracted. They will lean in during conversation rather than
          maintaining or increasing distance. Their smile will reach their eyes producing natural
          crinkles at the corners. They will find reasons to make and maintain eye contact. They
          may unconsciously mirror your posture or gestures. They will become slightly more
          animated and expressive specifically in your presence. No single signal is conclusive but
          three or more appearing consistently together is a strong positive indication.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signals That Suggest Polite Tolerance</h2>
        <p className="ga-text">
          Not every date goes well and reading the signals of polite disinterest accurately can
          save both people a lot of time and awkwardness. Disengagement signals include body
          orienting away from you, feet pointing toward the exit, minimal eye contact, short
          answers that do not invite further conversation, checking phones or watches, a smile that
          stays the same intensity throughout without natural variation, and leaning back rather
          than forward. These signals do not mean the person dislikes you but they do suggest the
          romantic connection is not developing.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Nervous Energy and What It Means</h2>
        <p className="ga-text">
          Nervousness on a first date is almost universal and does not indicate disinterest. In
          fact visible nervous energy specifically in your presence can itself be a positive
          signal. Someone who fidgets slightly, laughs a little too quickly at your jokes, stumbles
          over their words when speaking to you or appears slightly flustered is someone who is
          affected by you. The key is to distinguish nervous engagement from nervous discomfort.
          Nervous engagement tends to be accompanied by continued eye contact and body orientation
          toward you. Nervous discomfort tends to be accompanied by withdrawal signals.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Touch and Physical Proximity</h2>
        <p className="ga-text">
          How physical proximity and touch develop during a date reveals a great deal about mutual
          interest. Someone who finds reasons to reduce the distance between you, who initiates
          casual touch naturally and who does not pull away when you are physically close is
          showing positive signals. Watch for the first touch and how it is received. A touch on
          the arm or hand that is met with warmth or reciprocation is a strong signal. One that is
          met with a subtle pulling away or tension is worth noting.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">What Your Own Body Language Is Communicating</h2>
        <p className="ga-text">
          While reading your date's signals it is easy to forget that your own body language is
          being read just as carefully. Nervous habits like touching your face, avoiding eye
          contact or speaking too quickly can undermine the impression you want to make regardless
          of how good the conversation is. The most attractive body language on a date is relaxed,
          open and genuinely interested. You do not need to perform confidence. Simply removing the
          nervous habits that work against you is enough.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">When the Date Is Going Well</h2>
        <p className="ga-text">
          A date going well produces a recognisable physical dynamic. The space between you
          naturally reduces over the course of the evening. Mirroring becomes more pronounced.
          Touch becomes more natural and reciprocated. Laughter becomes more genuine and full. The
          conversation becomes less effortful. Both people orient toward each other more
          consistently. Eye contact lingers slightly longer than social norms require. These
          signals together indicate that both people are genuinely enjoying the connection.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading the Goodbye</h2>
        <p className="ga-text">
          How a date ends is one of the most revealing moments in the whole interaction. A warm
          enthusiastic goodbye with genuine eye contact and physical warmth is very different from
          a polite but hurried departure. Watch for whether your date lingers or wraps up quickly,
          whether the hug or goodbye is reciprocated with warmth or merely tolerated, and whether
          they mention seeing you again spontaneously rather than as a polite social nicety. A date
          who genuinely wants to see you again will find a way to signal it.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Attraction Signal Reading Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Can you spot genuine attraction in real scenarios? Our Attraction Signals quiz tests
            your ability to read romantic interest accurately with real body language images.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Attraction Signals')}`} className="ga-cta-btn">
            Test Your Attraction Signal Skills
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
