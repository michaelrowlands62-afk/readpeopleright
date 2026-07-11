import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

export default function NotFound() {
  const suggestions = [
    { emoji: '🧠', title: 'Play the Quiz', label: 'Play Now', path: '/episodes' },
    { emoji: '🔍', title: 'Try the Lie Detector', label: 'Start Test', path: '/lie-detector' },
    { emoji: '📚', title: 'Read the Guides', label: 'Browse Guides', path: '/guides' },
    { emoji: '🏠', title: 'Go Home', label: 'Home Page', path: '/' },
  ]

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-number">404</div>

          <h1 className="not-found-title">Page Not Found</h1>

          <p className="not-found-description">
            The page you are looking for does not exist or may have been moved. Let us help you find what you need.
          </p>

          <div className="not-found-suggestions">
            {suggestions.map((suggestion) => (
              <div key={suggestion.path} className="not-found-card">
                <span className="not-found-emoji">{suggestion.emoji}</span>
                <h3 className="not-found-card-title">{suggestion.title}</h3>
                <Link to={suggestion.path} className="not-found-btn">
                  {suggestion.label}
                </Link>
              </div>
            ))}
          </div>

          <p className="not-found-footer-text">
            Or use the navigation menu above to find what you are looking for.
          </p>
        </div>
      </div>
    </div>
  )
}
