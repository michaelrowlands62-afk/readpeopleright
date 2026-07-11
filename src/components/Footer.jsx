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
