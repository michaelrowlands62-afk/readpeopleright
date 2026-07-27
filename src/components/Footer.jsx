import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-column">
          <Link to="/" className="footer-brand-link">
            <h3 className="footer-heading">BodyLanguageIQ</h3>
          </Link>
          <p className="footer-description">
            The free interactive body language learning platform. Quizzes, games, guides and tools to help you read people better.
          </p>
          <p className="footer-copyright">
            Copyright 2025 BodyLanguageIQ. All rights reserved.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.pinterest.com/BodyLanguageIQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 0a12 12 0 0 0-4.373 23.178c-.017-.775-.010-1.703.192-2.549.218-.910 1.461-6.187 1.461-6.187s-.372-.744-.372-1.845c0-1.729 1.003-3.019 2.25-3.019 1.061 0 1.573.797 1.573 1.751 0 1.066-.679 2.660-1.029 4.137-.293 1.236.620 2.244 1.837 2.244 2.204 0 3.899-2.325 3.899-5.68 0-2.970-2.135-5.048-5.184-5.048-3.532 0-5.606 2.649-5.606 5.386 0 1.066.412 2.209.925 2.831a.371.371 0 0 1 .086.356c-.093.394-.301 1.235-.343 1.406-.054.222-.176.269-.406.162-1.518-.707-2.466-2.929-2.466-4.716 0-3.833 2.784-7.354 8.020-7.354 4.211 0 7.484 3.001 7.484 7.014 0 4.187-2.639 7.554-6.303 7.554-1.231 0-2.389-.639-2.785-1.396l-.757 2.887c-.274 1.056-1.016 2.379-1.512 3.187A12 12 0 1 0 12 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Play Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Play</h3>
          <ul className="footer-links">
            <li>
              <Link to="/episodes">Body Language Quiz</Link>
            </li>
            <li>
              <Link to="/lie-detector">Lie Detector Test</Link>
            </li>
            <li>
              <Link to="/poker-face">Poker Face Challenge</Link>
            </li>
            <li>
              <Link to="/personality-test">Personality Test</Link>
            </li>
            <li>
              <Link to="/relationship-quiz">Relationship Quiz</Link>
            </li>
          </ul>
        </div>

        {/* Learn Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Learn</h3>
          <ul className="footer-links">
            <li>
              <Link to="/dictionary">Body Language Dictionary</Link>
            </li>
            <li>
              <Link to="/guides">Body Language Guides</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
