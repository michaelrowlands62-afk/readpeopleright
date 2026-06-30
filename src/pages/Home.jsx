import { useNavigate } from 'react-router-dom'
import './Home.css'

const steps = [
  {
    number: '01',
    title: 'Watch',
    description: 'An animated figure or facial expression appears on screen.',
  },
  {
    number: '02',
    title: 'Guess',
    description: 'Name the body language signal before the countdown runs out.',
  },
  {
    number: '03',
    title: 'Learn',
    description: 'See the answer and discover what the signal really means.',
  },
]

const categories = [
  { icon: '💑', title: 'Read Your Partner', description: 'Decode the unspoken signals in your closest relationships.' },
  { icon: '💘', title: 'Attraction Signals', description: 'Spot the signs of interest, chemistry, and genuine connection.' },
  { icon: '💼', title: 'Workplace & Career', description: 'Read colleagues, bosses, and clients to gain the edge.' },
  { icon: '🕵️', title: 'Spot a Liar', description: 'Detect deception through body language tells and slip-ups.' },
  { icon: '😊', title: 'Read Emotions', description: 'Identify what people are really feeling beneath the surface.' },
  { icon: '⚡', title: 'First Impressions', description: 'Make snap calls as figures flash for just a few seconds.' },
  { icon: '🔬', title: 'Micro-Expression Expert', description: 'Catch fleeting expressions that last less than a second.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">Can You Read People?</p>
        <h1 className="hero-headline">
          Body Language IQ
        </h1>
        <p className="hero-sub">
          Watch real signals. Make your guess. Beat the clock. Build the skill
          that changes how you see every room you walk into.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/game?episode=1')}>Play Now</button>
          <button className="btn btn-secondary" onClick={() => navigate('/episodes')}>Browse Episodes</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Episode Categories */}
      <section className="categories">
        <h2 className="section-title">Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <button key={cat.title} className="category-card" onClick={() => navigate(`/episodes?category=${encodeURIComponent(cat.title)}`)}>
              <span className="category-icon">{cat.icon}</span>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Why Body Language Matters */}
      <section className="why-matters">
        <h2 className="section-title">Why Body Language Matters</h2>
        <p className="why-matters-intro">
          Most of what people communicate is never spoken aloud. Learning to read it changes everything.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-stat">93%</span>
            <p className="why-text">of communication is delivered through tone and body language, not words alone.</p>
          </div>
          <div className="why-card">
            <span className="why-stat">4 seconds</span>
            <p className="why-text">is all it takes to form a lasting first impression of someone.</p>
          </div>
          <div className="why-card">
            <span className="why-stat">7 signals</span>
            <p className="why-text">are typically visible in any single interaction, most of which go unnoticed.</p>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="platform-stats">
        <div className="platform-stats-row">
          <div className="platform-stat">
            <span className="platform-stat-value">7</span>
            <span className="platform-stat-label">Categories</span>
          </div>
          <div className="platform-stat">
            <span className="platform-stat-value">70+</span>
            <span className="platform-stat-label">Questions</span>
          </div>
          <div className="platform-stat">
            <span className="platform-stat-value">4</span>
            <span className="platform-stat-label">Difficulty Levels</span>
          </div>
          <div className="platform-stat">
            <span className="platform-stat-value">100%</span>
            <span className="platform-stat-label">Free To Play</span>
          </div>
        </div>
      </section>

      {/* Courses Teaser */}
      <section className="courses-teaser">
        <div className="courses-teaser-card">
          <h2 className="courses-teaser-title">Ready To Go Deeper?</h2>
          <p className="courses-teaser-desc">
            Explore our in-depth guides covering workplace signals, attraction, deception and more.
          </p>
          <button className="btn courses-teaser-btn" onClick={() => navigate('/courses')}>
            Explore Courses
          </button>
        </div>
      </section>
    </main>
  )
}
