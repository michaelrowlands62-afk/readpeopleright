import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'

const playLinks = [
  { to: '/episodes', label: 'Quiz Game' },
  { to: '/personality-test', label: 'Personality Test' },
  { to: '/relationship-quiz', label: 'Relationship Quiz' },
  { to: '/lie-detector', label: 'Lie Detector' },
]

const learnLinks = [
  { to: '/dictionary', label: 'Body Language Dictionary' },
  { to: '/courses', label: 'Courses' },
  { to: '/guides', label: 'Guides' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [playExpanded, setPlayExpanded] = useState(false)
  const [learnExpanded, setLearnExpanded] = useState(false)
  const location = useLocation()

  const isPlayActive = playLinks.some(link => link.to === location.pathname)
  const isLearnActive = learnLinks.some(link => link.to === location.pathname)

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="navbar-logo"
        aria-label="BodyLanguageIQ home"
        onClick={() => setMenuOpen(false)}
      >
        <svg className="navbar-eye" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <ellipse cx="11" cy="11" rx="10" ry="6.5" stroke="#c9a84c" strokeWidth="1.75"/>
          <circle cx="11" cy="11" r="3" fill="#c9a84c"/>
          <circle cx="12" cy="10" r="1" fill="#1a0f1f"/>
        </svg>
        <span className="navbar-wordmark">
          Body<span className="navbar-people">Language</span>IQ
        </span>
      </NavLink>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            Home
          </NavLink>
        </li>

        <li className="navbar-dropdown">
          <button
            className={isPlayActive ? 'navbar-link navbar-link--active navbar-dropdown-toggle' : 'navbar-link navbar-dropdown-toggle'}
            aria-haspopup="true"
          >
            Play
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="navbar-dropdown-arrow">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="navbar-dropdown-menu">
            {playLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    isActive ? 'navbar-dropdown-link navbar-dropdown-link--active' : 'navbar-dropdown-link'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li className="navbar-dropdown">
          <button
            className={isLearnActive ? 'navbar-link navbar-link--active navbar-dropdown-toggle' : 'navbar-link navbar-dropdown-toggle'}
            aria-haspopup="true"
          >
            Learn
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="navbar-dropdown-arrow">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="navbar-dropdown-menu">
            {learnLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    isActive ? 'navbar-dropdown-link navbar-dropdown-link--active' : 'navbar-dropdown-link'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        type="button"
        className={menuOpen ? 'navbar-toggle navbar-toggle--open' : 'navbar-toggle'}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={menuOpen ? 'navbar-mobile-menu navbar-mobile-menu--open' : 'navbar-mobile-menu'}>
        <li>
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            Home
          </NavLink>
        </li>

        <li className="navbar-mobile-dropdown">
          <button
            className={isPlayActive ? 'navbar-link navbar-link--active navbar-mobile-dropdown-toggle' : 'navbar-link navbar-mobile-dropdown-toggle'}
            onClick={() => setPlayExpanded(!playExpanded)}
            aria-expanded={playExpanded}
          >
            Play
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={playExpanded ? 'navbar-mobile-dropdown-arrow navbar-mobile-dropdown-arrow--open' : 'navbar-mobile-dropdown-arrow'}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className={playExpanded ? 'navbar-mobile-submenu navbar-mobile-submenu--open' : 'navbar-mobile-submenu'}>
            {playLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'navbar-mobile-sublink navbar-mobile-sublink--active' : 'navbar-mobile-sublink'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li className="navbar-mobile-dropdown">
          <button
            className={isLearnActive ? 'navbar-link navbar-link--active navbar-mobile-dropdown-toggle' : 'navbar-link navbar-mobile-dropdown-toggle'}
            onClick={() => setLearnExpanded(!learnExpanded)}
            aria-expanded={learnExpanded}
          >
            Learn
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={learnExpanded ? 'navbar-mobile-dropdown-arrow navbar-mobile-dropdown-arrow--open' : 'navbar-mobile-dropdown-arrow'}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className={learnExpanded ? 'navbar-mobile-submenu navbar-mobile-submenu--open' : 'navbar-mobile-submenu'}>
            {learnLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'navbar-mobile-sublink navbar-mobile-sublink--active' : 'navbar-mobile-sublink'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <NavLink
            to="/about"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
