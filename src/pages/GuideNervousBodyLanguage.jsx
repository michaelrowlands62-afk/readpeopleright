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
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'Job Interview Body Language',
    to: '/guides/job-interview',
    accent: 'gold',
    description: 'Master the signals that win interviews. Learn what interviewers are really reading and how to present yourself with confidence.',
  },
]

export default function GuideNervousBodyLanguage() {
  useEffect(() => {
    document.title = 'Nervous Body Language: Signs of Anxiety and How to Manage Them | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn to recognise the signs of nervousness in yourself and others. Understand what triggers anxiety signals, how to read them accurately and how to manage them in high pressure situations.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Nervous Body Language: How to Read and Manage Anxiety Signals</h1>
        <p className="ga-intro">
          Nervousness is one of the most universally recognisable states in human body language — and one of the most commonly misread. The same physical signals that reveal genuine anxiety can also indicate excitement, cold temperature, discomfort with a specific topic or simply a naturally fidgety personality. Understanding nervous body language accurately means learning to read clusters of signals in context rather than treating individual gestures as definitive proof of anything.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Why the Body Shows Nervousness</h2>
        <p className="ga-text">
          Nervous body language is produced by the autonomic nervous system responding to perceived threat or pressure. When the brain registers stress it triggers the fight or flight response — releasing adrenaline and cortisol, increasing heart rate, heightening muscle tension and preparing the body for action. These physiological changes produce visible physical signals that we read as nervousness even when the person is trying to conceal them. Because these responses are largely automatic they are very difficult to fully suppress, which is why nervous body language tends to leak through even when someone is trying hard to appear calm.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Most Common Nervous Signals</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Self Touching</h3>
          <p className="ga-text">
            Touching the face, neck, hair or arms is one of the most universal nervous signals. These self soothing gestures replicate the comfort of being touched by another person and help regulate anxiety through physical stimulation. Common forms include touching the base of the throat, rubbing the back of the neck, playing with hair, pulling an earlobe, touching the nose or stroking an arm. The significance of self touching as a nervous signal is greatest when it appears in specific response to a topic or question rather than consistently throughout an interaction.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Fidgeting</h3>
          <p className="ga-text">
            Repetitive movement — tapping fingers, bouncing a knee, clicking a pen, shuffling feet — releases nervous energy and is a reliable indicator of underlying anxiety or impatience. Like self touching the significance is greatest when the fidgeting begins or intensifies in response to something specific. A person who fidgets consistently throughout an interaction has established this as baseline behaviour. A person who is still for most of an interaction and then begins fidgeting when a specific topic arises is showing you something more meaningful.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Vocal Changes</h3>
          <p className="ga-text">
            The voice is one of the first things affected by nervousness. Common changes include a rise in pitch as the vocal cords tighten under stress, a faster speaking pace as the person rushes to fill silence, stumbling over words, excessive filler words such as um and er, and a reduction in vocal volume as confidence drops. Swallowing or clearing the throat before speaking is also a common nervous signal as stress causes the throat to tighten and dry.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Breathing Changes</h3>
          <p className="ga-text">
            Nervous breathing tends to be shallower and more rapid than relaxed breathing. Visible chest movement rather than the slow deep abdominal breathing of a calm person is a reliable indicator of elevated stress. In extreme nervousness the breath can become audible or slightly ragged. Conversely someone taking deliberate slow controlled breaths is actively managing their anxiety response — which itself can be a signal that they are under more pressure than they appear.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Postural Collapse</h3>
          <p className="ga-text">
            Anxiety tends to make people physically smaller. Rounded shoulders, a slightly bowed head, arms pulled close to the body and a narrower stance all signal a desire to take up less space and reduce visibility. This is a submission posture — the body signalling that it does not want to be noticed or challenged. In contrast someone who is genuinely relaxed will tend to take up more space naturally and hold their posture with less visible effort.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Nervousness Versus Deception</h2>
        <p className="ga-text">
          One of the most important distinctions in body language reading is between nervousness and deception. The physical signals are almost identical — increased heart rate, self soothing gestures, vocal changes, averted gaze — because the same autonomic stress response underlies both states. An honest person being questioned about something sensitive will display the same nervous signals as someone who is lying. The key differentiator is not the presence of nervous signals but whether those signals are consistent throughout the interaction or appear specifically in response to certain topics. Nervousness that is present from the start of an interaction and remains consistent throughout suggests genuine anxiety about the situation rather than specific deception.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Nervousness Versus Excitement</h2>
        <p className="ga-text">
          Nervous body language and excited body language are physiologically almost identical — the same fight or flight response, the same adrenaline, the same physical arousal. The difference is in cognitive interpretation and context. Someone about to give a presentation they are genuinely enthusiastic about may display almost the same physical signals as someone dreading it. The signals to look for to distinguish the two are facial expression — genuine excitement tends to produce positive facial expressions alongside the arousal signals — and body orientation. Excited people tend to move toward the source of their excitement. Nervous people tend to withdraw or create distance from what makes them anxious.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Managing Your Own Nervous Body Language</h2>
        <p className="ga-text">
          Understanding that nervous signals are produced by the autonomic nervous system means that the most effective way to manage them is to address the underlying physiological state rather than trying to suppress individual signals. Slow controlled breathing activates the parasympathetic nervous system and directly counteracts the stress response. Deliberately adopting an expanded confident posture has been shown to reduce cortisol and increase confidence — your posture influences your internal state as much as your internal state influences your posture. Preparation reduces the cognitive load that contributes to nervous body language — the more automatic your content the more cognitive resource is available to manage your physical presence.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Can you distinguish nervousness from deception in real body language scenarios? Our interactive quiz tests your ability to read the signals accurately.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Spot a Liar')}`} className="ga-cta-btn">
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
