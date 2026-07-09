import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'Reading Body Language at Work',
    to: '/guides/workplace-body-language',
    accent: 'blue',
    description: 'Navigate office politics, read your boss and present yourself as a leader. The complete workplace guide.',
  },
  {
    title: 'Nervous Body Language',
    to: '/guides/nervous-body-language',
    accent: 'purple',
    description: 'Learn to recognise the signs of anxiety and nervousness in yourself and others. Understand what triggers these signals and how to manage them in high pressure situations.',
  },
]

export default function GuidePublicSpeaking() {
  useEffect(() => {
    document.title = 'Body Language for Public Speaking: Command Any Room | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master the body language of confident public speaking. Learn the posture, gestures, eye contact and movement that turn nervous presenters into compelling and memorable speakers.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language for Public Speaking: How to Command Any Room</h1>
        <p className="ga-intro">
          Public speaking is consistently rated as one of the most feared human experiences. Yet the difference between a nervous presenter and a compelling speaker is rarely about the content of what they say — it is almost entirely about how they say it physically. Your posture, your gestures, your eye contact and your movement communicate confidence, credibility and authority before you have delivered a single sentence. Understanding and developing these physical skills can transform your presence at the front of any room.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">The First Seven Seconds</h2>
        <p className="ga-text">
          Research consistently shows that audiences form strong impressions of speakers within the first few seconds — before any substantive content has been delivered. How you walk to the front of the room, how you position yourself, how you make your first eye contact and how you hold yourself in the moment of silence before you begin all contribute to this critical first impression. Confident speakers claim the space before they speak. They walk with purpose, plant their feet, take a breath and make eye contact with the room before beginning. Nervous speakers rush to start speaking, look down at their notes and never fully claim their physical presence at the front of the room.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Posture and Stance</h2>
        <p className="ga-text">
          The foundation of confident public speaking is a grounded physical stance. Stand with your feet roughly shoulder width apart and your weight evenly distributed on both feet. This grounded stance signals stability and calm authority. Avoid shifting your weight from foot to foot which signals nervousness and distracts the audience. Keep your shoulders back and your chest open — a collapsed chest and rounded shoulders signal low confidence and reduce the power of your voice by compressing your lungs. Your spine should be naturally upright without rigidity. Think of the stance as settled and present rather than military or performative.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Gestures</h2>
        <p className="ga-text">
          Natural gestures that accompany and emphasise your speech are one of the most powerful tools available to a speaker. Research shows that speakers who gesture naturally are perceived as more warm, engaging and competent than those who keep their hands still or hidden. Keep your gestures within the space in front of your body — large wild gestures that extend far to the sides look uncontrolled. Use deliberate open palm gestures to emphasise key points and signal honesty. Avoid pointing at the audience which reads as accusatory, and avoid repetitive habitual gestures that become distracting through their predictability.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Contact</h2>
        <p className="ga-text">
          Eye contact is the primary way speakers create connection with their audience. The most effective approach is to make genuine sustained eye contact with individual people in the room rather than scanning the room in a mechanical sweep or looking at the back wall. Hold eye contact with one person for a complete thought — roughly three to five seconds — before moving to another. Distribute your attention across different parts of the room over the course of your talk. Eye contact with individual audience members makes each person feel directly addressed and transforms a presentation from a broadcast into a conversation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Movement and Space</h2>
        <p className="ga-text">
          Purposeful movement around the speaking space adds energy and signals confidence. Aimless pacing or nervous movement is distracting and signals anxiety. Deliberate movement toward the audience during key emotional moments reduces distance and increases connection. Movement toward a particular section of the room when addressing a point relevant to that audience naturally draws their attention. Standing completely still in a centred grounded position during the most important moments of your talk signals that this is where all the attention should rest. The contrast between movement and stillness is one of the most powerful tools available to a speaker.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Facial Expression</h2>
        <p className="ga-text">
          Your face must match the emotional content of your words. A speaker who delivers exciting or moving content with a flat or worried expression creates a disconnect that undermines their message. Genuine enthusiasm, warmth, concern or gravity should be visible on your face as appropriate to the content. A natural resting expression between points should be engaged and present rather than blank or anxious. Smiling naturally at appropriate moments — at the opening, when making a human connection or when something genuinely amuses you — creates warmth and approachability without undermining authority.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Managing Nervous Energy</h2>
        <p className="ga-text">
          Some degree of nervous arousal before public speaking is not only normal but beneficial — it sharpens attention and increases energy. The problem is when this arousal becomes visible in ways that undermine your credibility. The most effective physical management strategies are slow controlled diaphragmatic breathing which directly activates the calm response in the nervous system, deliberate adoption of an expansive confident stance before you speak which has been shown to reduce stress hormones, and purposeful physical movement which burns off excess adrenaline. Trying to suppress nervous energy rarely works — channelling it into deliberate expressive gesture is far more effective.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Voice as Body Language</h2>
        <p className="ga-text">
          Though not strictly body language the voice is part of your physical presence and deserves attention in any guide to public speaking. Nervous speakers tend to speak too quickly, too quietly and in a monotone that suggests they want to get through the content as fast as possible. Confident speakers vary their pace, use deliberate pauses for emphasis, project their voice to the back of the room and allow silence to work for them rather than rushing to fill it. A well placed pause after a key statement gives the audience time to absorb it and signals that the speaker is in control of the room rather than at the mercy of their own anxiety.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Practice and Preparation</h2>
        <p className="ga-text">
          The physical confidence of skilled public speakers is almost always the product of deliberate practice rather than natural talent. Recording yourself presenting and watching back with the sound off is one of the most effective development tools available — you will immediately see the habits and postures you were unaware of. Practising in front of others who give honest feedback accelerates development far faster than practising alone. The goal of preparation is not to memorise a script but to make the content sufficiently automatic that cognitive resource is freed up to manage your physical presence in real time.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding body language helps you read your audience as well as manage your own signals. Test your body language reading skills with our interactive quiz.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Workplace & Career')}`} className="ga-cta-btn">
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
