import { Link } from 'react-router-dom'
import './Guides.css'

const GUIDES = [
  {
    id: 1,
    title: 'Job Interview Body Language',
    to: '/guides/job-interview',
    accent: 'gold',
    description: 'Master the signals that win interviews. Learn what interviewers are really reading and how to present yourself with confidence.',
  },
  {
    id: 2,
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
  {
    id: 3,
    title: 'Attraction Signals Explained',
    to: '/guides/attraction-signals',
    accent: 'pink',
    description: 'How to tell if someone is genuinely interested. The 12 most reliable attraction signals and what they really mean.',
  },
  {
    id: 4,
    title: 'Confident Body Language',
    to: '/guides/confident-body-language',
    accent: 'green',
    description: 'How to look and feel more confident through body language. Ten changes you can make starting today.',
  },
  {
    id: 5,
    title: 'Reading Body Language at Work',
    to: '/guides/workplace-body-language',
    accent: 'blue',
    description: 'Navigate office politics, read your boss and present yourself as a leader. The complete workplace guide.',
  },
  {
    id: 6,
    title: 'First Date Body Language',
    to: '/guides/first-date',
    accent: 'pink',
    description: 'What to look for on a first date. The signals that reveal genuine interest, nerves and attraction.',
  },
  {
    id: 7,
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language — fact checked. The most common misconceptions explained.',
  },
  {
    id: 8,
    title: 'Body Language Around The World',
    to: '/guides/around-the-world',
    accent: 'purple',
    description: 'The same gesture means different things in different cultures. The essential guide to avoiding costly misunderstandings.',
  },
  {
    id: 9,
    title: 'How to Read Someone\'s Eyes',
    to: '/guides/reading-eyes',
    accent: 'gold',
    description: 'The eyes reveal more than any other feature. Learn to read pupil dilation, eye contact patterns, gaze direction and the micro signals that flash across the eyes before conscious control takes over.',
  },
  {
    id: 10,
    title: 'Body Language on Video Calls',
    to: '/guides/video-calls',
    accent: 'blue',
    description: 'Remote work has changed how we read each other. Master the unique signals of video communication and learn what your camera angle, eye contact and background say about you.',
  },
  {
    id: 11,
    title: 'Nervous Body Language',
    to: '/guides/nervous-body-language',
    accent: 'purple',
    description: 'Learn to recognise the signs of anxiety and nervousness in yourself and others. Understand what triggers these signals and how to manage them in high pressure situations.',
  },
  {
    id: 12,
    title: 'Body Language for Public Speaking',
    to: '/guides/public-speaking',
    accent: 'green',
    description: 'Command any room with confidence. The complete guide to posture, gestures, eye contact and movement that turns nervous presenters into compelling speakers.',
  },
  {
    id: 13,
    title: 'Reading Body Language in Arguments',
    to: '/guides/arguments',
    accent: 'red',
    description: 'Arguments have their own body language grammar. Learn to read escalation signals, genuine distress versus performance, and the nonverbal cues that reveal what your partner really means.',
  },
  {
    id: 14,
    title: 'Reading Children\'s Body Language',
    to: '/guides/reading-children',
    accent: 'gold',
    description: 'Children cannot always express what they feel in words. Learn to read the nonverbal signals that reveal how your child is really feeling, from anxiety and fear to joy and genuine confidence.',
  },
  {
    id: 15,
    title: 'Body Language Signs of Stress',
    to: '/guides/stress-signals',
    accent: 'red',
    description: 'Stress leaks through the body before the mind acknowledges it. Learn to recognise the early physical signals of stress in yourself and others and respond before it escalates.',
  },
  {
    id: 16,
    title: 'Power Body Language',
    to: '/guides/power-body-language',
    accent: 'green',
    description: 'Understand the nonverbal signals of dominance, status and authority. Learn how power expresses itself physically and how to project calm confidence in any situation.',
  },
  {
    id: 17,
    title: 'Body Language Signs Someone is Lying to You',
    to: '/guides/lying-signs',
    accent: 'purple',
    description: 'A personal guide to spotting deception in everyday situations. The signals that reveal dishonesty in partners, colleagues and friends — and why context always matters.',
  },
  {
    id: 18,
    title: 'How to Read Body Language at a Party',
    to: '/guides/social-situations',
    accent: 'blue',
    description: 'Social gatherings are rich with nonverbal signals. Learn to read who is genuinely enjoying themselves, who wants to leave and what the body language of real connection looks like in a crowd.',
  },
  {
    id: 19,
    title: 'Body Language of Attraction in Men',
    to: '/guides/male-attraction-signals',
    accent: 'gold',
    description: 'The specific signals men display when genuinely attracted to someone. Learn to distinguish real interest from social politeness and read the subtle cues most people miss.',
  },
  {
    id: 20,
    title: 'Alpha Body Language',
    to: '/guides/alpha-body-language',
    accent: 'green',
    description: 'What genuine confidence and natural authority look like in the body. The signals that project leadership and calm command without aggression or performance.',
  },
  {
    id: 21,
    title: 'Body Language Secrets of Successful People',
    to: '/guides/success-body-language',
    accent: 'gold',
    description: 'What do the most successful people do differently with their body language? The nonverbal habits that build trust, project competence and open doors before a word is spoken.',
  },
  {
    id: 22,
    title: 'Body Language in Different Relationships',
    to: '/guides/relationship-types',
    accent: 'purple',
    description: 'Friends, family, colleagues and romantic partners all have different nonverbal languages. Learn to read the unique body language patterns of each type of relationship.',
  },
  {
    id: 23,
    title: 'Reading Body Language in Negotiations',
    to: '/guides/negotiation-body-language',
    accent: 'blue',
    description: 'Negotiations are won and lost in the nonverbal space. Learn to read the signals that reveal genuine interest, resistance and readiness to agree before the other side says a word.',
  },
]

export default function Guides() {
  return (
    <main className="guides">
      <section className="guides-hero">
        <h1 className="guides-hero-title">Body Language Guides</h1>
        <p className="guides-hero-subtitle">
          In-depth guides to help you read people better in every area of life. Backed by psychology, written in plain English.
        </p>
      </section>

      <div className="guides-grid">
        {GUIDES.map((guide) => (
          <div key={guide.id} className={`guide-card guide-card--${guide.accent}`}>
            <div className="guide-card-accent" />
            <div className="guide-card-body">
              <h2 className="guide-card-title">{guide.title}</h2>
              <p className="guide-card-description">{guide.description}</p>
              <Link to={guide.to} className="guide-card-btn">
                Read Guide
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
