import { Link } from 'react-router-dom'
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
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
]

export default function GuideJobInterview() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Job Interview Body Language: How to Make the Right Impression</h1>
        <p className="ga-intro">
          Research consistently shows that interviewers form a strong impression of candidates
          within the first few seconds of meeting them, long before a single question has been
          answered. Your body language communicates your confidence, competence and character
          before you open your mouth. Understanding what interviewers are reading and how to
          present yourself physically can make a significant difference to your success.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Before You Even Sit Down</h2>
        <p className="ga-text">
          The interview begins the moment you enter the building not when you sit across from the
          interviewer. How you walk, how you greet the receptionist and how you wait all form part
          of the impression. Walk with purpose and at a measured pace. Sit upright while waiting
          rather than slumping. When the interviewer appears stand to greet them, make eye contact
          and offer a firm but not crushing handshake. These first moments set the tone for
          everything that follows.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Handshake</h2>
        <p className="ga-text">
          A confident handshake is firm without being aggressive, lasts two to three seconds and is
          accompanied by direct eye contact and a genuine smile. Avoid the limp handshake which
          signals a lack of confidence, and the overly aggressive grip which can feel threatening.
          If you are sitting when the interviewer approaches stand before shaking hands. Remaining
          seated while shaking hands signals low status and poor social awareness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Posture in the Chair</h2>
        <p className="ga-text">
          Sit toward the front of the chair rather than sinking back into it. Keep your back
          straight but not rigid. Lean forward very slightly to signal engagement. Avoid crossing
          your arms which signals defensiveness, and avoid spreading too wide which can seem
          arrogant in a formal setting. Keep your feet flat on the floor or ankles loosely crossed
          rather than legs twisted or bouncing.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Eye Contact</h2>
        <p className="ga-text">
          Confident sustained eye contact is one of the most important signals in an interview. Aim
          for consistent but natural eye contact throughout your answers rather than staring at
          your notes, the floor or somewhere over the interviewer's shoulder. If there are multiple
          interviewers distribute your eye contact across all of them, returning to the person who
          asked the question when you conclude your answer. Breaking eye contact briefly to think
          is natural and expected. Just avoid excessive downward gaze which reads as lack of
          confidence.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Hand Gestures</h2>
        <p className="ga-text">
          Natural hand gestures that accompany your speech make you appear more engaged, articulate
          and confident. Keep them controlled and within the space in front of your body rather
          than wildly expansive. Avoid pointing at the interviewer which reads as aggressive.
          Clasping your hands loosely on the table or resting them naturally in your lap between
          gestures is ideal. Never hide your hands under the table as this can read as
          untrustworthy.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Facial Expression</h2>
        <p className="ga-text">
          Your resting facial expression between answers matters as much as your expression during
          them. A naturally engaged and interested expression signals enthusiasm for the role.
          Avoid a furrowed brow when listening which can seem disapproving, and avoid a completely
          blank expression which can read as boredom or arrogance. Nodding occasionally while the
          interviewer speaks shows you are engaged and listening.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Nervous Habits to Avoid</h2>
        <p className="ga-text">
          Most people have unconscious nervous habits that appear under pressure. Common ones
          include touching the face or hair, fidgeting with objects on the table, tapping feet,
          playing with jewellery or repeatedly clearing the throat. These habits signal anxiety and
          distract from what you are saying. Before your interview identify your specific habits
          and practice managing them in mock interviews or in front of a mirror.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading the Interviewer</h2>
        <p className="ga-text">
          Body language works both ways. Paying attention to the interviewer's signals can give you
          valuable information about how the interview is going. Leaning forward and increased eye
          contact suggests genuine engagement with what you are saying. Leaning back or reduced eye
          contact may suggest they are less convinced. Mirroring your posture is a strong positive
          signal. If you notice disengagement try varying your energy or asking a question to
          regain their attention.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">How to Close the Interview</h2>
        <p className="ga-text">
          The final impression is as important as the first. When the interview concludes stand
          confidently, make eye contact, thank the interviewer by name and offer a firm handshake.
          Leave with the same measured confident walk you arrived with. Many candidates visibly
          relax the moment they think the interview is over. Maintain your composure until you are
          completely out of sight.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Practice Makes Permanent</h2>
        <p className="ga-text">
          Confident body language in interviews is a skill that improves with practice. Record
          yourself answering common interview questions and watch back with the sound off. You
          will immediately see the habits and postures you were unaware of. Mock interviews with
          friends or family who give honest feedback are invaluable. The goal is not to perform
          confidence but to remove the physical habits that undermine the confidence you already
          have.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Reading Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding body language signals is a skill that helps in every professional
            situation. Test your ability to read workplace and confidence signals with our
            interactive quiz.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Workplace & Career')}`} className="ga-cta-btn">
            Test Your Workplace Body Language Skills
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
