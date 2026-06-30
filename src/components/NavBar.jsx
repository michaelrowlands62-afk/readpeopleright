import { NavLink } from 'react-router-dom'
import './NavBar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/episodes', label: 'Episodes' },
  { to: '/courses', label: 'Courses' },
  { to: '/dictionary', label: 'Dictionary' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" aria-label="BodyLanguageIQ home">
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
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
