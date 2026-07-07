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
    title: 'Job Interview Body Language',
    to: '/guides/job-interview',
    accent: 'gold',
    description: 'Master the signals that win interviews. Learn what interviewers are really reading and how to present yourself with confidence.',
  },
  {
    title: 'Reading Body Language at Work',
    to: '/guides/workplace-body-language',
    accent: 'blue',
    description: 'Navigate office politics, read your boss and present yourself as a leader. The complete workplace guide.',
  },
]

export default function GuideConfidentBodyLanguage() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Confident Body Language: How to Project Confidence Even When You Do Not Feel It</h1>
        <p className="ga-intro">
          Confidence is not just something you feel — it is something you communicate through every
          movement, posture and gesture your body makes. The good news is that confident body
          language can be learned and practised. Research by social psychologist Amy Cuddy and
          others suggests that adopting confident postures does not just change how others perceive
          you — it can change how you feel about yourself. Here are ten specific, practical changes
          you can make starting today.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">1. Stand Tall and Take Up Space</h2>
        <p className="ga-text">
          Confident people do not make themselves small. They stand with feet roughly shoulder
          width apart, weight evenly distributed, shoulders back and spine naturally upright. This
          is not a military stance — it is simply not collapsing inward. Slouching, crossing legs
          tightly and pulling the arms close to the body all signal low confidence. Expand your
          physical presence and you immediately change how others read you.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">2. Slow Down Your Movements</h2>
        <p className="ga-text">
          Nervous people move quickly — fast gestures, rapid head movements, hurried walking.
          Confident people move deliberately and at a measured pace. Slow your gestures down. Take
          a moment before responding rather than rushing to fill silence. Walk at a pace that
          suggests you are comfortable rather than anxious to get somewhere. Stillness and
          deliberate movement communicate control.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">3. Make Steady Eye Contact</h2>
        <p className="ga-text">
          Confident eye contact is warm and steady — not a staring contest but a comfortable hold.
          A useful rule is to maintain eye contact for roughly 60 to 70 percent of a conversation,
          breaking it occasionally to think or gesture rather than looking away the moment you feel
          uncomfortable. When you look away, look to the side rather than down — downward gaze
          signals submission.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">4. Use Open Hand Gestures</h2>
        <p className="ga-text">
          Visible open palms are one of the oldest trust and confidence signals in human
          communication. When you gesture with open hands rather than pointing or keeping hands
          hidden, you signal both confidence and honesty. Keep your hands visible during
          conversations — hands hidden in pockets or behind the back can read as either nervous or
          suspicious.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">5. Control Your Facial Expression</h2>
        <p className="ga-text">
          A resting face that looks worried, tense or disapproving works against you even when you
          feel perfectly calm. Practice a neutral to slightly warm resting expression — not a
          forced smile but a relaxed face with the jaw unclenched and the corners of the mouth
          neither pulled down nor forced up. The confident resting face communicates ease rather
          than anxiety.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">6. Reduce Self-Touching</h2>
        <p className="ga-text">
          Touching your face, neck, hair or clothing during conversation signals self-consciousness
          and anxiety. Every time you catch yourself doing this, gently lower your hand. This is
          one of the hardest habits to break because it is unconscious, but reducing self-touch
          immediately changes how confident you appear to others.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">7. Enter Rooms Intentionally</h2>
        <p className="ga-text">
          The first few seconds after entering a room set the tone for every interaction that
          follows. Confident people pause briefly at the entrance, take in the room and then move
          with purpose. Anxious people rush in, immediately look for somewhere to go and make
          themselves small. Practice entering spaces as if you belong there — because you do.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">8. Speak at the Right Pace and Volume</h2>
        <p className="ga-text">
          Though not strictly body language, voice is part of your physical presence. Speaking too
          quickly signals nerves. Speaking too softly signals uncertainty. Confident speaking is
          measured, clear and pitched to be heard without effort. Pause between sentences rather
          than filling gaps with filler words. Silence in speech, like stillness in movement,
          signals confidence rather than weakness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">9. Mirror Selectively</h2>
        <p className="ga-text">
          Subtle mirroring of another person's posture and gestures builds rapport and signals
          social ease — both markers of confidence. Confident people mirror naturally and
          selectively. They do not copy every movement but gradually and naturally adopt similar
          postures. This works particularly well in interviews, meetings and first meetings where
          you want to build connection quickly.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">10. Ground Your Feet</h2>
        <p className="ga-text">
          Confident people plant their feet. Shifting weight constantly from foot to foot, pointing
          feet toward exits or crossing ankles tightly all signal discomfort. When standing,
          distribute your weight evenly on both feet and keep them relatively still. This grounding
          creates a physical stability that reads directly as emotional confidence to everyone
          watching.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Most Important Thing to Remember</h2>
        <p className="ga-text">
          Confident body language is not about performance or pretending to be something you are
          not. It is about removing the physical habits that actively undermine the confidence you
          already have. Most of us are more capable than our body language suggests. Start with one
          change from this list today — just one — and build from there.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Now that you know what confident body language looks like, can you spot it in others?
            Our interactive quiz tests your ability to read confidence signals in real scenarios.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Read Emotions')}`} className="ga-cta-btn">
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
