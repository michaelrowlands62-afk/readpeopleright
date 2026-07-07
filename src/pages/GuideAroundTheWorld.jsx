import { Link } from 'react-router-dom'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language, fact checked. The most common misconceptions explained.',
  },
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
]

export default function GuideAroundTheWorld() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language Around The World: Why the Same Gesture Means Different Things</h1>
        <p className="ga-intro">
          One of the most dangerous assumptions in body language reading is that signals are
          universal. While some basic emotional expressions appear across all human cultures, the
          vast majority of gestures, postures and nonverbal behaviours are deeply shaped by
          cultural context. What signals confidence in one country can signal arrogance in another.
          What reads as friendly in one culture can be deeply offensive in another. Understanding
          these differences is essential for anyone who interacts with people from different
          cultural backgrounds.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Contact</h2>
        <p className="ga-text">
          In most Western cultures sustained eye contact signals confidence, honesty and
          engagement. Avoiding eye contact is often read as dishonest or lacking in confidence.
          However in many East Asian cultures including Japan, China and Korea sustained direct eye
          contact with a superior or elder is considered disrespectful and presumptuous. In many
          Middle Eastern cultures prolonged eye contact between men and women who are not relatives
          carries social implications that would be completely absent in a Western context. In some
          Native American cultures direct eye contact is considered intrusive rather than engaging.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Personal Space</h2>
        <p className="ga-text">
          The comfortable distance between people during conversation varies enormously between
          cultures. Northern Europeans and North Americans typically prefer a conversational
          distance of roughly an arm's length. Latin American, Middle Eastern and Southern European
          cultures tend to be comfortable with significantly closer distances. This means that
          someone from Brazil standing close during conversation is not being intrusive by their
          cultural standards while someone from Finland maintaining greater distance is not being
          cold. Misreading these differences can lead to one person feeling crowded and another
          feeling rejected simultaneously.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Touch</h2>
        <p className="ga-text">
          Cultures vary dramatically in how much casual touch is considered normal between
          acquaintances. In many Latin American and Mediterranean cultures touching the arm or
          shoulder of someone you are speaking to is perfectly ordinary. In Japan and many Northern
          European cultures the same touch between near strangers would be considered an invasion
          of personal space. The handshake itself varies enormously in appropriate firmness,
          duration and whether it should be accompanied by eye contact depending on cultural
          context.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Head Nodding and Shaking</h2>
        <p className="ga-text">
          Most people assume that nodding means yes and shaking the head means no universally. This
          is not the case. In parts of Bulgaria, Greece and some regions of India and the Middle
          East the nod and shake are reversed or carry different meanings entirely. In some South
          Asian cultures a sideways head wobble that looks like neither a nod nor a shake to Western
          eyes indicates agreement and positive engagement. Assuming universal meanings for these
          basic signals can cause significant confusion in cross cultural interactions.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Hand Gestures</h2>
        <p className="ga-text">
          Few areas of body language are more culturally variable than hand gestures. The thumbs up
          gesture is positive in most Western cultures but offensive in parts of the Middle East,
          West Africa and South America. The OK sign formed by touching the thumb and index finger
          is a positive signal in the United States but offensive in Brazil and carries other
          meanings in France and Japan. The V for victory sign made with the palm facing inward is
          offensive in the United Kingdom and Australia. Even pointing with the index finger,
          completely normal in Western cultures, is considered rude in many Asian and African
          cultures where pointing is done with the whole hand or chin.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Silence</h2>
        <p className="ga-text">
          The meaning and acceptable duration of silence varies dramatically between cultures. In
          many Western cultures particularly American culture, silence in conversation is
          uncomfortable and people rush to fill it. In Finnish, Japanese and many East Asian
          cultures silence is a normal and respected part of conversation, indicating thoughtfulness
          rather than awkwardness or disagreement. Misreading cultural comfort with silence as
          hostility, disinterest or a communication problem is a common and consequential error.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Smiling</h2>
        <p className="ga-text">
          While the genuine smile appears to be universal, the social rules around when smiling is
          appropriate vary significantly. In Russia and many Eastern European cultures smiling at
          strangers is uncommon and can be viewed with suspicion. Customer service workers in these
          cultures typically maintain neutral expressions rather than the constant smile expected in
          American service culture. This cultural difference leads to frequent misreadings by
          Western visitors who interpret the absence of smiling as unfriendliness when it is simply
          a different social norm.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Bowing and Greeting Rituals</h2>
        <p className="ga-text">
          Greeting rituals vary enormously across cultures and getting them wrong can cause offence
          even when goodwill is genuine. In Japan the depth and duration of a bow communicates
          relative status and the appropriate response must match. In Thailand the traditional
          greeting involves pressing the palms together and the appropriate height of the hands
          indicates relative status. In many Middle Eastern cultures a light kiss on both cheeks
          between men who know each other well is a normal warm greeting while the same gesture
          between strangers would be inappropriate.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Posture and Status</h2>
        <p className="ga-text">
          The postures associated with confidence and respect also vary by culture. In many Western
          cultures standing tall with open expansive posture signals confidence and high status. In
          some Asian cultures a slightly more deferential posture that occupies less space when in
          the presence of superiors signals appropriate respect rather than lack of confidence.
          Bringing your Western confident posture into a context where it reads as arrogance is as
          counterproductive as bringing a deferential posture into a context where it reads as
          weakness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Universal Signals</h2>
        <p className="ga-text">
          Despite all this cultural variation some emotional expressions appear to have genuinely
          universal components. The basic expressions of happiness, sadness, fear, anger, disgust
          and surprise are recognisable across cultures with high reliability. Micro expressions,
          the involuntary facial movements that occur before conscious masking, also appear to be
          largely universal. This suggests that while the rules around when and how to display
          emotion vary enormously between cultures, the underlying emotional expressions themselves
          are part of our shared human biology.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Reading Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding that body language varies by culture makes you a sharper and more humble
            reader of people. Test your body language reading skills across a range of scenarios
            with our interactive quiz.
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
