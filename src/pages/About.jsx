import './About.css'

const categories = [
  { icon: '💑', title: 'Read Your Partner', description: 'Decode the unspoken signals in your closest relationships and understand what your partner is really communicating.' },
  { icon: '💘', title: 'Attraction Signals', description: 'Learn to spot genuine signs of interest, chemistry, and romantic intent through posture, gaze, and gesture.' },
  { icon: '💼', title: 'Workplace & Career', description: 'Read colleagues, managers, and clients more accurately to navigate professional situations with confidence.' },
  { icon: '🕵️', title: 'Spot a Liar', description: 'Identify deception through the subtle body language tells and micro-behaviours that give people away.' },
  { icon: '😊', title: 'Read Emotions', description: 'Recognise what people are genuinely feeling beneath the surface, even when they are trying to hide it.' },
  { icon: '⚡', title: 'First Impressions', description: 'Train your ability to make fast, accurate reads of a person from just a brief glance.' },
  { icon: '🔬', title: 'Micro-Expression Expert', description: 'Catch the fleeting involuntary expressions that flash across a face in under a second.' },
]

const steps = [
  { number: '01', title: 'Choose an Episode', description: 'Pick from one of seven categories based on what you want to learn — from spotting liars to reading attraction signals.' },
  { number: '02', title: 'Study the Image', description: 'A real photograph appears on screen. Study it carefully and read every posture, gesture, and facial expression you can see.' },
  { number: '03', title: 'Answer Before Time Runs Out', description: 'Choose your answer from four options before the countdown reaches zero, then read the explanation to understand what you saw.' },
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
          <p className="about-hero-subtitle">The interactive body language learning platform</p>
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
                ReadPeopleRight was created by Natalie Rowlands, who holds a degree in Forensic
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

        {/* What Is ReadPeopleRight */}
        <section className="about-section">
          <h2 className="about-section-title">What Is ReadPeopleRight?</h2>
          <div className="about-card about-prose">
            <p>
              ReadPeopleRight is a body language quiz game where you study images of real human poses
              and facial expressions and identify what signal is being shown — all before a countdown
              timer runs out. Each question is followed by a clear explanation of the psychology
              behind what you saw, so every round teaches you something genuinely useful. The game
              is designed to sharpen your ability to read people in real-life situations, whether
              you are in a job interview, on a first date, or simply navigating everyday
              conversations.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="about-section">
          <h2 className="about-section-title">How It Works</h2>
          <div className="about-steps">
            {steps.map((step) => (
              <div key={step.number} className="about-step-card">
                <span className="about-step-number">{step.number}</span>
                <h3 className="about-step-title">{step.title}</h3>
                <p className="about-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Categories */}
        <section className="about-section">
          <h2 className="about-section-title">Our Categories</h2>
          <div className="about-categories">
            {categories.map((cat) => (
              <div key={cat.title} className="about-category-card">
                <span className="about-category-icon">{cat.icon}</span>
                <div>
                  <h3 className="about-category-title">{cat.title}</h3>
                  <p className="about-category-desc">{cat.description}</p>
                </div>
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
                href="#"
                className="btn-youtube"
                aria-label="Watch on YouTube"
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
            <a href="mailto:hello@readpeopleright.com" className="about-contact-email">
              hello@readpeopleright.com
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
