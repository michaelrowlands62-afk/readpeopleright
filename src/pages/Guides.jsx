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
