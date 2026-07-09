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
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language — fact checked. The most common misconceptions explained.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
]

export default function GuideReadingEyes() {
  useEffect(() => {
    document.title = "How to Read Someone's Eyes: The Complete Guide | BodyLanguageIQ"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Learn to read the eyes accurately. Pupil dilation, eye contact patterns, gaze direction and the micro signals that reveal true emotion before conscious control takes over.")
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">How to Read Someone's Eyes: What They Reveal Before Words</h1>
        <p className="ga-intro">
          The eyes are the most expressive part of the human face and the hardest to fully control. While we can manage our posture, our gestures and even our facial expressions to a degree, the eyes leak genuine emotion in ways that are extraordinarily difficult to suppress. Learning to read the signals in someone's eyes accurately is one of the most valuable body language skills you can develop.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Contact and What It Reveals</h2>
        <p className="ga-text">
          Eye contact is one of the most studied aspects of human nonverbal communication. In most Western cultures comfortable sustained eye contact signals confidence, honesty and genuine engagement. However the relationship between eye contact and truthfulness is far more nuanced than popular belief suggests. Research consistently shows that liars do not reliably avoid eye contact — many deliberately increase it because they know the myth. What matters is not whether someone makes eye contact but whether the quality and pattern of their eye contact is consistent with their baseline behaviour and the emotional content of what they are saying.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Pupil Dilation</h2>
        <p className="ga-text">
          The pupils widen involuntarily in response to genuine interest, attraction and positive emotional arousal. They constrict in response to negative emotion, disgust or concentrated focus. Because pupil response is controlled by the autonomic nervous system it cannot be consciously managed, making it one of the most reliable signals available to the careful observer. Lighting conditions affect pupil size significantly so always compare against the ambient light level before drawing conclusions. In consistent lighting a noticeable dilation during a specific topic or in the presence of a specific person is a genuine signal of positive emotional response.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Gaze Direction</h2>
        <p className="ga-text">
          The direction someone looks when thinking or speaking has been studied extensively. While early pop psychology claimed that looking up and to the right always indicated lying, this has been thoroughly debunked by research. However gaze direction does provide useful information. Looking upward while thinking often indicates visual processing — someone constructing or recalling an image. Looking sideways often indicates auditory processing. Downward gaze often accompanies emotional processing or internal dialogue. What matters is not the direction itself but whether it is consistent with what the person says they are doing.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Blinking</h2>
        <p className="ga-text">
          The average person blinks between 15 and 20 times per minute under normal conditions. Significant deviations from this baseline are meaningful. Elevated blink rate is associated with stress, anxiety and cognitive overload — the brain processing more than usual and the eyes responding to the tension. Reduced blink rate — sometimes to near zero — can signal concentrated focus, deliberate composure under pressure, or in some cases a conscious attempt to appear calm. A sudden change in blink rate in response to a specific question or topic is more significant than a generally elevated or reduced rate throughout a conversation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Duchenne Marker</h2>
        <p className="ga-text">
          The single most important thing to learn about reading eyes is the Duchenne marker — the involvement of the orbicularis oculi muscle that surrounds the eye. When someone smiles genuinely this muscle contracts, producing natural crinkles at the outer corners of the eyes. When someone performs a smile this muscle typically does not engage and the eyes remain flat and unchanged. This distinction — between a smile that reaches the eyes and one that does not — is the most reliable indicator of genuine versus performed positive emotion and is one of the most consistently validated findings in body language research.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Block</h2>
        <p className="ga-text">
          The eye block is an instinctive response to something uncomfortable — a prolonged blink, a downward gaze or even a hand raised toward the eye area. It is a vestige of the physical response to block out something threatening or unpleasant. In conversation an eye block appearing in response to a specific piece of information or question — rather than throughout the interaction — is a signal that the person has found something difficult to hear or is suppressing a reaction to what they know. It is one of the signals that appears most reliably under genuine psychological pressure.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Micro Expressions Around the Eyes</h2>
        <p className="ga-text">
          Some of the most important micro expressions are centred around the eye area. The inner corners of the eyebrows pulling upward and together is one of the most reliable signals of genuine sadness or distress and is very difficult to produce voluntarily. A brief widening of the eyes — the eyebrow flash — signals genuine surprise or positive recognition. Narrowed eyes signal suspicion or critical evaluation. These signals last fractions of a second and require attention and practice to catch but they are among the most reliable windows into genuine emotional states.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading Eyes in Context</h2>
        <p className="ga-text">
          No eye signal should ever be read in isolation. All the signals described here need to be assessed against the person's baseline behaviour, the cultural context they come from and the situation they are in. Someone from a culture where sustained eye contact with authority figures is considered disrespectful will naturally avoid eye contact in ways that look evasive in a Western context. Someone who is simply tired will blink more frequently without any deceptive intent. The skill is in reading patterns and changes rather than individual signals and in always asking what else is consistent with this reading before drawing conclusions.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Eye Reading Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Put your eye reading skills to the test with our interactive body language quiz. Real scenarios, real signals, real learning.
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
