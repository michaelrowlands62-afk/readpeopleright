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
    title: 'First Date Body Language',
    to: '/guides/first-date',
    accent: 'pink',
    description: 'What to look for on a first date. The signals that reveal genuine interest, nerves and attraction.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
]

export default function GuideAttractionSignals() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Attraction Signals: How to Tell if Someone is Genuinely Interested</h1>
        <p className="ga-intro">
          Reading attraction signals is one of the most sought after body language skills and one
          of the most misunderstood. The difference between genuine romantic interest and simple
          friendliness can be surprisingly subtle. Understanding the signals that reliably indicate
          attraction, and distinguishing them from those that do not, can save you from misreading
          situations and help you recognise genuine connection when it is there.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Why Single Signals Are Misleading</h2>
        <p className="ga-text">
          A smile does not mean attraction. Eye contact does not mean attraction. Even touching
          someone's arm does not necessarily mean attraction. Any individual signal can have dozens
          of explanations. What matters is clusters of signals appearing together, and crucially,
          whether those signals are directed specifically at you rather than at everyone in the
          room. The most reliable way to read attraction is to look for multiple signals pointing
          in the same direction simultaneously.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The 12 Most Reliable Attraction Signals</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">1. Prolonged Eye Contact</h3>
          <p className="ga-text">
            Genuine attraction tends to produce sustained eye contact that lingers slightly longer
            than normal social interaction would require. The person holds your gaze and finds
            reasons to return to it. Combined with slightly dilated pupils which the brain produces
            involuntarily in response to someone found attractive this is one of the most reliable
            early signals of interest.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">2. Genuine Smiling</h3>
          <p className="ga-text">
            A smile that reaches the eyes with natural crinkles at the corners is called a Duchenne
            smile and is very difficult to fake convincingly. When someone smiles this way
            specifically in your presence and the smile appears spontaneously rather than as a
            social performance it is a strong positive signal.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">3. Body Orientation</h3>
          <p className="ga-text">
            People unconsciously turn toward things they are interested in and away from things
            they are not. Someone attracted to you will orient their body toward you even in group
            settings. Their feet, navel and chest will all point in your direction. This happens
            below the level of conscious awareness and is therefore one of the more reliable
            signals.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">4. Mirroring</h3>
          <p className="ga-text">
            Unconsciously copying another person's posture, gestures or speech patterns is one of
            the strongest signals of connection and attraction. It happens naturally when someone
            is genuinely engaged with you. If you notice someone sitting the way you sit,
            gesturing the way you gesture or adopting similar body positions, this mirroring is a
            very positive sign.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">5. Preening</h3>
          <p className="ga-text">
            When someone becomes aware of your presence and instinctively adjusts their appearance,
            smoothing their hair, straightening their clothing or sitting up slightly taller, this
            preening behaviour is a strong attraction signal. It happens automatically and the
            person is often unaware they are doing it.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">6. Leaning In</h3>
          <p className="ga-text">
            Physical proximity is a powerful signal. Someone attracted to you will naturally reduce
            the distance between you, leaning in during conversation, moving closer when given an
            opportunity and finding reasons to be physically near you. Conversely someone who is
            not interested will maintain or increase distance.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">7. Touch Initiation</h3>
          <p className="ga-text">
            Deliberately initiating physical contact, even something as casual as touching your arm
            during a laugh or your shoulder when making a point, is one of the clearest signals of
            attraction. The person is testing your comfort with physical closeness and signalling
            their own. Watch for whether touch is initiated and whether it is reciprocated.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">8. Eyebrow Flash</h3>
          <p className="ga-text">
            A quick raise of both eyebrows upon seeing someone, lasting roughly a fifth of a
            second, is a universal greeting signal that also indicates positive recognition and
            interest. It happens so quickly that it is easy to miss but if you catch it it is a
            reliable signal that the person is genuinely pleased to see you.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">9. Hair Touching</h3>
          <p className="ga-text">
            Playing with hair in someone's presence is a classic preening and self consciousness
            signal that often accompanies attraction. Combined with other signals it suggests the
            person is aware of your attention and responding to it physically even without
            conscious intention.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">10. Feet Pointing Toward You</h3>
          <p className="ga-text">
            The direction someone's feet point reveals their genuine focus of attention more
            reliably than the direction of their face. In a group setting if someone's feet
            consistently point toward you despite their face being directed elsewhere this is a
            strong signal of interest. The feet tell the truth even when social politeness directs
            the face elsewhere.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">11. Increased Animation</h3>
          <p className="ga-text">
            People naturally become more expressive, louder and more animated in the presence of
            someone they are attracted to. If someone seems noticeably more energetic, funnier or
            more engaged specifically around you compared to others this heightened animation is a
            reliable attraction signal.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">12. Nervous Energy</h3>
          <p className="ga-text">
            Genuine attraction often produces visible nervous energy in ways that friendliness does
            not. Fidgeting, self conscious laughter, stumbling slightly over words or appearing
            flustered in your presence are all signs that someone is affected by you in a way that
            goes beyond ordinary social comfort.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signals That Are Often Misread as Attraction</h2>
        <p className="ga-text">
          Friendliness is not attraction. Some people are naturally warm, tactile and engaging with
          everyone they meet. The key test is whether these signals are directed specifically at
          you or whether they are consistent with how that person behaves with everyone. Similarly
          nervousness around someone does not always indicate attraction, it can simply reflect
          social anxiety or an intimidating presence. Always read signals in context and look for
          clusters rather than individual behaviours.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Difference Between Interest and Politeness</h2>
        <p className="ga-text">
          One of the most useful distinctions in reading attraction is between a genuine smile and
          a polite one. A genuine smile involves the muscles around the eyes producing natural
          crinkles and cannot be sustained at the same intensity indefinitely. A polite smile stays
          the same, involves mainly the mouth and can be held as long as social courtesy requires.
          Learning to distinguish these two smiles is one of the most valuable body language skills
          you can develop.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Attraction Signal Reading Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Can you spot genuine attraction in real scenarios? Our interactive quiz tests your
            ability to read attraction signals with real images and body language challenges.
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
