import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
  {
    title: 'How to Read Someone\'s Eyes',
    to: '/guides/reading-eyes',
    accent: 'gold',
    description: 'The eyes reveal more than any other feature. Learn to read pupil dilation, eye contact patterns, gaze direction and the micro signals that flash across the eyes before conscious control takes over.',
  },
  {
    title: 'Nervous Body Language',
    to: '/guides/nervous-body-language',
    accent: 'purple',
    description: 'Learn to recognise the signs of anxiety and nervousness in yourself and others. Understand what triggers these signals and how to manage them in high pressure situations.',
  },
]

export default function GuideArguments() {
  useEffect(() => {
    document.title = 'Reading Body Language in Arguments: What People Really Mean | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Arguments have their own body language grammar. Learn to read escalation signals, genuine distress versus performance and the nonverbal cues that reveal what your partner really means during conflict.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Reading Body Language in Arguments: What People Really Mean</h1>
        <p className="ga-intro">
          Arguments are one of the richest and most complex body language environments in human experience. When emotions run high the gap between what people say and what their bodies communicate widens dramatically. Learning to read the nonverbal signals of conflict accurately can help you understand what is really happening beneath the surface of a disagreement, recognise when an argument is escalating dangerously and identify the moments when genuine resolution becomes possible.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">The Physiology of Conflict</h2>
        <p className="ga-text">
          Arguments trigger the same fight or flight response as physical threat. Heart rate increases, muscles tense, breathing becomes shallower and faster, and the thinking brain partially hands over control to the more reactive emotional brain. This physiological state produces predictable body language signals that are largely automatic and difficult to consciously manage. Understanding that both you and the person you are arguing with are operating from a state of biological arousal helps explain why body language in arguments so often contradicts the words being spoken — the body is responding to threat while the mouth is attempting to reason.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Escalation Signals</h2>
        <p className="ga-text">
          Recognising when an argument is escalating from disagreement toward genuine danger is a critical skill. Physical escalation signals include a significant increase in volume and speech rate, finger pointing or jabbing gestures directed at the other person, invasion of personal space by moving physically closer, a reddening of the face from increased blood pressure, clenching of the fists even when not raised, a forward lean of the whole body rather than just the upper body and a quality of physical stillness that precedes explosive movement rather than indicating calm. When multiple escalation signals appear simultaneously the priority should be de-escalation rather than winning the argument.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Genuine Distress Versus Performance</h2>
        <p className="ga-text">
          One of the most important distinctions in reading arguments is between genuine emotional distress and performed distress. Genuine distress tends to produce the inner brow raise — the inner corners of the eyebrows pulling upward and together — which is one of the most difficult facial movements to produce voluntarily. It also tends to produce asymmetrical rather than symmetrical facial expressions, real tears rather than eyes that well without spilling, and a quality of physical collapse rather than the more upright posture of performed emotion. Performed distress — crying or showing upset to manipulate rather than from genuine feeling — tends to be more symmetrical, more controlled and more conveniently timed to achieve a specific effect.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Withdrawal Signals</h2>
        <p className="ga-text">
          Physical withdrawal during an argument is as significant as aggressive escalation. Turning the body away from the other person, crossed arms held tightly, gaze directed at the floor or away from the other person, reduced speech and a physical stillness that looks like shutting down rather than calm — these are signals of emotional withdrawal rather than resolution. The person has not agreed and is not calm — they have disengaged from the argument without resolving it. This state — sometimes called stonewalling — is one of the most reliable predictors of relationship distress because it prevents the repair conversation that arguments need to reach genuine resolution.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Body Language of Genuine Listening</h2>
        <p className="ga-text">
          In an argument genuine listening looks distinctly different from performed listening. Genuine listening produces natural nodding at irregular intervals, maintained eye contact that occasionally breaks to process rather than avoiding, a slight forward lean and facial expressions that respond naturally to what is being said rather than remaining fixed in an expression of disagreement or hurt. Performed listening — going through the motions while waiting for your turn to speak — tends to produce more rigid facial expressions, less responsive nodding and a quality of physical tension that reveals the person is preparing their response rather than absorbing yours.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Contempt and Why It Matters</h2>
        <p className="ga-text">
          Of all the emotional expressions that can appear during arguments the most damaging to relationships is contempt. Contempt is expressed through the unilateral lip raise — a one-sided sneer — combined with eye rolling, dismissive sighing or a physical turning away. Research by relationship psychologist John Gottman identified contempt as the single strongest predictor of relationship breakdown — more predictive than the frequency of arguments, the severity of disagreements or the presence of other negative emotions. Contempt signals that one person sees themselves as fundamentally superior to the other rather than as an equal in a disagreement. Recognising it early — in yourself as much as in others — is critical.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signs That Resolution Is Becoming Possible</h2>
        <p className="ga-text">
          The body language of approaching resolution is as readable as the body language of escalation. Physical signals that genuine resolution is becoming possible include a reduction in overall body tension visible in the shoulders and jaw, a shift in body orientation back toward the other person after a period of turning away, a softening of the facial expression particularly around the eyes, a reduction in speech rate and volume, the appearance of a genuine sad or vulnerable expression rather than an angry one, and the extension of a conciliatory physical gesture — a hand offered, a move toward rather than away. These signals tend to appear before the verbal acknowledgement of resolution and are often the most reliable indicator that the emotional temperature has genuinely dropped.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">De-escalation Through Body Language</h2>
        <p className="ga-text">
          Your own body language has a direct effect on the course of an argument. Deliberately lowering your voice when the other person raises theirs is one of the most effective de-escalation techniques available — it creates a contrast that makes continued shouting feel disproportionate. Maintaining an open rather than closed physical posture signals that you are not in fight mode even when the words are difficult. Moving slightly back rather than forward when someone becomes more aggressive reduces the physical pressure of the interaction. Making genuine eye contact rather than avoiding it signals that you are still engaged rather than withdrawn. These physical choices do not resolve the underlying disagreement but they create the conditions in which resolution becomes possible.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding conflict body language is a skill that improves with practice. Test your ability to read emotional signals in real scenarios with our interactive quiz.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Read Your Partner')}`} className="ga-cta-btn">
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
