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

export default function GuideVideoCalls() {
  useEffect(() => {
    document.title = 'Body Language on Video Calls: The Complete Guide | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master the unique body language of video calls. Learn what your camera angle, eye contact, background and posture communicate to others on screen and how to project confidence remotely.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language on Video Calls: What Your Screen Says About You</h1>
        <p className="ga-intro">
          Video calls have become one of the primary ways we communicate professionally and personally. Yet most people have never thought carefully about how they appear on screen or what their video presence communicates. The rules of body language on video calls are similar to those in person but the medium introduces unique distortions, limitations and opportunities that are worth understanding.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">The Camera Angle Problem</h2>
        <p className="ga-text">
          The single most impactful element of your video presence is your camera angle and most people get it wrong. A camera positioned below eye level — which happens when a laptop sits on a desk — causes you to look down at the camera, projecting an unconscious sense of superiority or disengagement. A camera at eye level creates natural comfortable eye contact. A camera slightly above eye level can make you appear slightly submissive. The ideal position is the camera at or very slightly above your eye level so that you appear to be making natural comfortable eye contact with the other person. Raising your laptop on books or using a separate webcam at the correct height makes an immediate and significant difference to how you are perceived.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Contact on Video</h2>
        <p className="ga-text">
          Genuine eye contact on a video call requires looking at the camera rather than at the face on your screen. This feels deeply unnatural because your instinct is to look at the person you are speaking to — but on video that means looking at their image on screen which appears as downward or sideways gaze to the person watching you. Looking directly into the camera lens while speaking creates the impression of direct eye contact for the other person even though it means you cannot see their face while doing it. A useful technique is to look at the camera when making key points and allow yourself to look at their face when listening.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Framing and Presence</h2>
        <p className="ga-text">
          How much of you is visible on screen affects how you are perceived. Being too far from the camera — where you appear small in a large empty frame — can make you seem insignificant or disengaged. Being too close can feel intrusive. The ideal framing shows you from roughly the chest upward with a small amount of headroom above you. This mirrors the comfortable conversational distance of a face to face interaction and creates a sense of appropriate physical presence without intrusiveness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Background and Environment</h2>
        <p className="ga-text">
          Your background communicates before you say a word. A cluttered or chaotic background suggests disorganisation. A blank white wall can feel stark and impersonal. A thoughtfully arranged background — bookshelves, plants, a tidy workspace — signals professionalism and personality. Natural light from in front of you is ideal. Light from behind creates a silhouette effect that obscures your face and expression. If you use a virtual background choose something simple and professional rather than distracting, and be aware that virtual backgrounds can create a slight artificial quality to your movement that some people find subtly unsettling.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Posture on Screen</h2>
        <p className="ga-text">
          Posture is just as important on video as in person and arguably more visible since the camera tends to highlight the upper body and head. Sitting upright with relaxed shoulders projects engagement and confidence. Slumping or leaning back signals disengagement. Leaning forward slightly toward the camera during important points signals interest and emphasis — the video equivalent of leaning in across a table. Avoid swivelling in an office chair which creates a distracting visual rhythm and signals restlessness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Gestures and Movement</h2>
        <p className="ga-text">
          Natural hand gestures that accompany speech are just as effective on video as in person and help convey enthusiasm and emphasis. However large gestures that move outside the camera frame can look incomplete or distracting. Keep gestures within the visible frame and be aware that a slight video lag can cause gestures to appear slightly disconnected from your words. Nodding while listening is particularly important on video calls — without it you can appear blank or disengaged in a way that would not happen in person where other signals fill the gap.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading Others on Video</h2>
        <p className="ga-text">
          Reading body language on video calls requires adjustments to your normal approach. You are typically seeing only the head and shoulders of the other person which removes a significant amount of the body language information available in person. Focus more heavily on facial expressions, eye contact patterns and the quality of vocal delivery. Micro expressions are often more visible on video than in person because the face fills more of your visual field. Watch for inconsistencies between what someone says and how their face responds. Someone whose face goes slightly blank or whose eyes move away at a specific moment in a conversation is showing you something worth noticing.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Common Video Call Mistakes</h2>
        <p className="ga-text">
          The most common video call mistakes that undermine presence and credibility include poor lighting that obscures the face, camera positioned at the wrong height, looking at yourself rather than the camera, background noise or distracting environments, being too far from the microphone causing muffled audio, having notifications visible on screen, and failing to make the deliberate eye contact adjustments that video requires. Each of these is easily fixed and each makes a noticeable difference to how you are perceived by others on the call.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding body language helps in every communication context. Test your ability to read nonverbal signals with our interactive quiz.
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
