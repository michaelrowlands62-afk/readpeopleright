import { Link } from 'react-router-dom'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Job Interview Body Language',
    to: '/guides/job-interview',
    accent: 'gold',
    description: 'Master the signals that win interviews. Learn what interviewers are really reading and how to present yourself with confidence.',
  },
  {
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
]

export default function GuideWorkplaceBodyLanguage() {
  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Reading Body Language at Work: The Complete Workplace Guide</h1>
        <p className="ga-intro">
          The workplace is one of the richest environments for body language reading. Every
          meeting, presentation, negotiation and casual corridor conversation is filled with
          nonverbal signals that reveal what people are really thinking, feeling and intending.
          Learning to read these signals accurately can help you navigate office politics, build
          better relationships with colleagues and present yourself more effectively to those
          above you.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Reading Your Boss</h2>
        <p className="ga-text">
          Understanding your manager's body language can give you valuable early warning signals
          about how they are feeling, how a conversation is going and whether your ideas are
          landing well. A boss who leans forward during your presentation is genuinely engaged. One
          who leans back and crosses their arms may be sceptical or unconvinced. Watch for
          micro expressions of contempt or dismissal which appear briefly before a managed neutral
          expression takes over. If your boss's feet are pointing toward the door during a meeting
          they are probably thinking about ending it. Pay particular attention to changes from
          their baseline behaviour when you are speaking versus when others are speaking.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading the Room in Meetings</h2>
        <p className="ga-text">
          Group meetings are a masterclass in body language. The person with the most power in a
          room is not always the one who speaks the most. Watch for who others orient their bodies
          toward, who people glance at after making a point seeking approval, and who sits at the
          psychological head of the table regardless of where they are physically positioned.
          Secondary conversations happening in body language between attendees often reveal the
          real dynamic beneath the surface discussion.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Spotting Disengagement</h2>
        <p className="ga-text">
          Recognising when colleagues or clients have mentally checked out of a meeting is a
          valuable skill. Classic disengagement signals include gaze drifting to phones or windows,
          body orienting away from the speaker, head dropping slightly, decreased eye contact and a
          reduction in reactive facial expressions. When you spot these signals in your audience it
          is worth changing your approach, asking a question or taking a short break rather than
          continuing to address a room that has stopped listening.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading Negotiation Body Language</h2>
        <p className="ga-text">
          Negotiations are some of the most body language rich interactions in professional life. A
          counterpart who mirrors your posture is likely building rapport and moving toward
          agreement. Steepled fingers signal confidence and evaluation. Sudden crossing of arms
          after an offer is made often signals rejection even before words confirm it. Leaning back
          and looking at the ceiling signals consideration rather than dismissal. Collecting
          objects like pens or papers toward oneself is a territorial signal often seen when someone
          feels their position is being encroached upon.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Power Dynamics and Status Signals</h2>
        <p className="ga-text">
          Status expresses itself physically in predictable ways. Higher status individuals tend to
          take up more space, move more slowly and deliberately, initiate touch more often and
          interrupt more freely. Lower status individuals tend to make themselves physically
          smaller, move more quickly and deferentially and wait for permission before acting.
          Understanding these dynamics helps you read the real hierarchy in any organisation which
          often differs significantly from the official one shown on an org chart.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Presenting With Confidence</h2>
        <p className="ga-text">
          How you physically present information matters as much as the content itself. Plant your
          feet and avoid swaying or shifting weight. Use deliberate open hand gestures to emphasise
          key points. Make eye contact with individuals around the room rather than staring at
          slides or notes. Pause deliberately between points rather than rushing to fill silence.
          Your physical stillness and deliberate pace signal that you are in control of both the
          material and the room.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Reading Interviews From Both Sides</h2>
        <p className="ga-text">
          Whether you are being interviewed or conducting interviews, body language provides
          crucial information. As a candidate the signals you send in the first few seconds shape
          the entire conversation. As an interviewer watch for the gap between what candidates say
          and what their body language reveals. Genuine enthusiasm produces open animated body
          language. Performed enthusiasm tends to be slightly too consistent, too maintained and
          disconnected from natural spontaneous reactions.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Difficult Conversations</h2>
        <p className="ga-text">
          Workplace difficult conversations require particular body language awareness. Facing
          someone directly and maintaining open posture signals that you are approaching the
          conversation in good faith rather than ambushing them. Sitting beside rather than across
          from someone reduces the adversarial dynamic. Leaning forward slightly signals care and
          engagement rather than confrontation. Mirroring their emotional energy at a slightly
          calmer level helps regulate the conversation toward resolution rather than escalation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Workplace Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Can you read the signals in real workplace scenarios? Our Workplace and Career quiz
            tests your ability to read professional body language accurately.
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
