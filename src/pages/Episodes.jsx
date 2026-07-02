import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Episodes.css'

const CATEGORIES = [
  { icon: '💑', title: 'Read Your Partner', description: 'Decode the unspoken signals in your closest relationships.' },
  { icon: '💘', title: 'Attraction Signals', description: 'Spot the signs of interest, chemistry, and genuine connection.' },
  { icon: '💼', title: 'Workplace & Career', description: 'Read colleagues, bosses, and clients to gain the edge.' },
  { icon: '🕵️', title: 'Spot a Liar', description: 'Detect deception through body language tells and slip-ups.' },
  { icon: '😊', title: 'Read Emotions', description: 'Identify what people are really feeling beneath the surface.' },
  { icon: '⚡', title: 'First Impressions', description: 'Make snap calls as figures flash for just a few seconds.' },
  { icon: '🔬', title: 'Micro-Expression Expert', description: 'Catch fleeting expressions that last less than a second.' },
]

const DIFFICULTIES = [
  { key: 'beginner', label: 'Beginner', className: 'diff-beginner' },
  { key: 'intermediate', label: 'Intermediate', className: 'diff-intermediate' },
  { key: 'advanced', label: 'Advanced', className: 'diff-advanced' },
  { key: 'expert', label: 'Expert', className: 'diff-expert' },
]

export default function Episodes() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const highlightedCategory = searchParams.get('category') || null
  const categoryRefs = useRef({})

  // Scroll to highlighted category when page loads
  useEffect(() => {
    if (highlightedCategory && categoryRefs.current[highlightedCategory]) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        categoryRefs.current[highlightedCategory]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }, [highlightedCategory])

  const handleDifficultyClick = (category, difficulty) => {
    navigate(`/game?episode=1&category=${encodeURIComponent(category)}&difficulty=${difficulty}`)
  }

  return (
    <main className="episodes">
      <div className="episodes-header">
        <h1 className="episodes-title">Choose Your Episode</h1>
        <p className="episodes-subtitle">
          Pick a scenario and put your people-reading skills to the test.
        </p>
      </div>

      <div className="categories-container">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            ref={(el) => categoryRefs.current[cat.title] = el}
            className={`category-block${highlightedCategory === cat.title ? ' category-block--highlighted' : ''}`}
          >
            <div className="category-block-header">
              <span className="category-block-icon">{cat.icon}</span>
              <h3 className="category-block-title">{cat.title}</h3>
              <p className="category-block-desc">{cat.description}</p>
            </div>
            <div className="difficulty-buttons">
              {DIFFICULTIES.map((diff) => (
                <button
                  key={diff.key}
                  className={`difficulty-btn ${diff.className}`}
                  onClick={() => handleDifficultyClick(cat.title, diff.key)}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
