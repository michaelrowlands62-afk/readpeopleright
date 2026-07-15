import { Link } from 'react-router-dom'
import './About.css'

const whatYouCanDo = [
  { emoji: '🧠', title: 'Body Language Quiz', description: 'Seven categories covering deception, attraction, workplace dynamics, micro-expressions and more. Four difficulty levels from Beginner to Expert with real photographic images and a 20 second countdown clock.' },
  { emoji: '🔍', title: 'Lie Detector Test', description: 'Read ten scenarios and decide — truth or lie? Three levels of increasing difficulty test your ability to spot deception signals in realistic everyday situations.' },
  { emoji: '👁️', title: 'Poker Face Challenge', description: 'Ten scenarios featuring people actively concealing their true reaction. Three levels from Beginner to Expert challenge you to see beneath even the most controlled surface.' },
  { emoji: '👤', title: 'Body Language Personality Test', description: 'Answer 24 questions across two levels and discover whether you are a Connector, Observer, Performer, Diplomat, Protector or Authority. Find out what your body language says about you.' },
  { emoji: '❤️', title: 'Relationship Body Language Quiz', description: 'Three levels of relationship body language questions covering physical connection, emotional attunement and the subtlest signals of deep partnership. Compare results with your partner.' },
  { emoji: '📚', title: 'Body Language Guides', description: 'Twenty three in-depth guides covering every aspect of reading people — from spotting liars and reading attraction signals to body language in negotiations, arguments and video calls.' },
]

const whatYouWillLearn = [
  { emoji: '🔎', title: 'Spotting Deception', description: 'Learn the real clusters and context-dependent signals that reveal dishonesty — and unlearn the popular myths that make most people worse at detecting lies than they would be by chance.' },
  { emoji: '😍', title: 'Reading Attraction', description: 'Develop the ability to distinguish genuine romantic interest from social politeness and read the subtle signals of attraction that most people miss entirely.' },
  { emoji: '💼', title: 'Workplace Dynamics', description: 'Read colleagues, managers, clients and interviewers more accurately and understand the nonverbal power dynamics that shape every professional interaction.' },
  { emoji: '💪', title: 'Projecting Confidence', description: 'Understand what genuinely confident body language looks like, how it differs from performed confidence and how to develop it deliberately in yourself.' },
  { emoji: '👥', title: 'Relationship Attunement', description: 'Build the ability to read what your partner is genuinely feeling rather than what they are saying and develop the nonverbal sensitivity that deepens long term relationships.' },
  { emoji: '🔬', title: 'Micro-Expression Awareness', description: 'Train your ability to catch the fleeting involuntary expressions that flash across a face in fractions of a second before conscious control reasserts itself.' },
]

export default function About() {
  return (
    <main className="about">
      <div className="about-container">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-logo" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 22 22" fill="none">
              <ellipse cx="11" cy="11" rx="10" ry="6.5" stroke="#c9a84c" strokeWidth="1.75"/>
              <circle cx="11" cy="11" r="3" fill="#c9a84c"/>
              <circle cx="12" cy="10" r="1" fill="#1a0f1f"/>
            </svg>
          </div>
          <h1 className="about-hero-title">About Me</h1>
          <p className="about-hero-subtitle">Test Your People Reading Skills</p>
        </section>

        {/* Meet The Creator */}
        <section className="about-section">
          <h2 className="about-section-title">Meet The Creator</h2>
          <div className="about-card about-creator">
            <div className="about-creator-avatar" aria-hidden="true">NR</div>
            <div className="about-creator-body">
              <h3 className="about-creator-name">Natalie Rowlands</h3>
              <p className="about-creator-credential">BSc Forensic Psychology</p>
              <p className="about-creator-bio">
                BodyLanguageIQ was created by Natalie Rowlands, who holds a degree in Forensic
                Psychology. Her academic background in understanding human behaviour and nonverbal
                communication inspired her to build a platform that makes body language education
                accessible, engaging, and genuinely useful for everyone. The purpose of the site is
                to improve the body language reading skills of all those interested in understanding
                people better — whether in their personal relationships, professional lives, or
                everyday interactions.
              </p>
            </div>
          </div>
        </section>

        {/* What Is BodyLanguageIQ */}
        <section className="about-section">
          <h2 className="about-section-title">What Is BodyLanguageIQ?</h2>
          <div className="about-card about-prose">
            <p>
              BodyLanguageIQ is a body language quiz game where you study images of real human poses
              and facial expressions and identify what signal is being shown — all before a countdown
              timer runs out. Each question is followed by a clear explanation of the psychology
              behind what you saw, so every round teaches you something genuinely useful. The game
              is designed to sharpen your ability to read people in real-life situations, whether
              you are in a job interview, on a first date, or simply navigating everyday
              conversations.
            </p>
          </div>
        </section>

        {/* What You Can Do Here */}
        <section className="about-section">
          <h2 className="about-section-title">What You Can Do Here</h2>
          <p className="about-section-intro">BodyLanguageIQ is far more than a quiz. Here is everything the platform has to offer.</p>
          <div className="about-features-grid">
            {whatYouCanDo.map((feature) => (
              <div key={feature.title} className="about-feature-card">
                <span className="about-feature-emoji">{feature.emoji}</span>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="about-section">
          <h2 className="about-section-title">What You Will Learn</h2>
          <p className="about-section-intro">Every game, test and guide on BodyLanguageIQ is designed to build practical skills you can use in real life.</p>
          <div className="about-skills-grid">
            {whatYouWillLearn.map((skill) => (
              <div key={skill.title} className="about-skill-card">
                <span className="about-skill-emoji">{skill.emoji}</span>
                <h3 className="about-skill-title">{skill.title}</h3>
                <p className="about-skill-desc">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Watch On YouTube */}
        <section className="about-section">
          <h2 className="about-section-title">Watch On YouTube</h2>
          <div className="about-card about-youtube">
            <div className="about-youtube-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="#FF0000"/>
                <path d="M28.5 20c0 1.1-.7 2-1.6 2.4l-10 5.5c-.9.5-2-.1-2-1.2V13.3c0-1.1 1.1-1.7 2-1.2l10 5.5c.9.4 1.6 1.3 1.6 2.4z" fill="white"/>
              </svg>
            </div>
            <div className="about-youtube-body">
              <p className="about-youtube-text">
                New tutorial episodes are uploaded regularly to our YouTube channel. Watch in-depth
                walkthroughs, body language breakdowns, and tips to help you get the most out of
                your training.
              </p>
              <a
                href="https://www.youtube.com/@BodyLanguageIQOfficial"
                className="btn-youtube"
                aria-label="Watch on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="about-section about-contact-section">
          <h2 className="about-section-title">Get In Touch</h2>
          <div className="about-card about-contact">
            <p className="about-contact-text">
              For questions, feedback, or partnership enquiries, we would love to hear from you.
            </p>
            <Link to="/contact" className="about-contact-btn">Contact Us</Link>
          </div>
        </section>

      </div>
    </main>
  )
}
