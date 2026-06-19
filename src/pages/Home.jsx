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
  { icon: '😐', title: 'Facial Expressions', count: '12 episodes' },
  { icon: '🧍', title: 'Posture & Stance', count: '10 episodes' },
  { icon: '🤲', title: 'Hand Gestures', count: '14 episodes' },
  { icon: '👁️', title: 'Eye Contact', count: '8 episodes' },
  { icon: '⚡', title: 'Micro-Expressions', count: '11 episodes' },
  { icon: '💭', title: 'Emotions & Moods', count: '15 episodes' },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">Body Language Training</p>
        <h1 className="hero-headline">
          Learn to Read People.<br />
          <span className="gold">Before Time Runs Out.</span>
        </h1>
        <p className="hero-sub">
          Watch real signals. Make your guess. Beat the clock. Build the skill
          that changes how you see every room you walk into.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Play Now</button>
          <button className="btn btn-secondary">Browse Episodes</button>
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
            <button key={cat.title} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-count">{cat.count}</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
