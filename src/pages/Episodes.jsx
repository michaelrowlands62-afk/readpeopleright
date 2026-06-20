import { useNavigate, useSearchParams } from 'react-router-dom'
import './Episodes.css'

const CATEGORIES = [
  'Read Your Partner',
  'Attraction Signals',
  'Workplace & Career',
  'Spot a Liar',
  'Read Emotions',
  'First Impressions',
  'Micro-Expression Expert',
]

const episodes = [
  {
    id: 1,
    title: 'Body Language Basics',
    description: 'Learn to read the fundamental signals of body language.',
    category: 'Read Emotions',
    difficulty: 'Beginner',
    questions: 8,
  },
  {
    id: 2,
    title: 'The Negotiation',
    description: 'Navigate a high stakes business negotiation by reading the room.',
    category: 'Workplace & Career',
    difficulty: 'Intermediate',
    questions: 8,
  },
  {
    id: 3,
    title: 'Can You Spot The Lie',
    description: 'Test your ability to detect dishonesty through body language.',
    category: 'Spot a Liar',
    difficulty: 'Intermediate',
    questions: 8,
  },
  {
    id: 4,
    title: 'First Impressions',
    description: 'React fast — figures appear for just a few seconds.',
    category: 'First Impressions',
    difficulty: 'Advanced',
    questions: 8,
  },
]

const difficultyClass = {
  Beginner: 'badge-beginner',
  Intermediate: 'badge-intermediate',
  Advanced: 'badge-advanced',
}

export default function Episodes() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  const filtered = activeCategory === 'All'
    ? episodes
    : episodes.filter((ep) => ep.category === activeCategory)

  const setFilter = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <main className="episodes">
      <div className="episodes-header">
        <h1 className="episodes-title">Choose Your Episode</h1>
        <p className="episodes-subtitle">
          Pick a scenario and put your people-reading skills to the test.
        </p>
      </div>

      <div className="filter-bar">
        {['All', ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="episodes-empty">No episodes in this category yet — check back soon.</p>
      ) : (
      <div className="episodes-grid">
        {filtered.map((ep) => (
          <div key={ep.id} className="episode-card">
            <div className="episode-card-top">
              <div className="episode-badges">
                <span className="badge badge-category">{ep.category}</span>
                <span className={`badge ${difficultyClass[ep.difficulty]}`}>
                  {ep.difficulty}
                </span>
              </div>
              <h2 className="episode-title">{ep.title}</h2>
              <p className="episode-description">{ep.description}</p>
            </div>
            <div className="episode-card-bottom">
              <span className="episode-questions">{ep.questions} questions</span>
              <button
                className="btn btn-play"
                onClick={() => navigate('/game')}
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
    </main>
  )
}
