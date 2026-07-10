import { useNavigate } from 'react-router-dom'
import './Home.css'

const games = [
  {
    emoji: '🧠',
    title: 'Body Language Quiz',
    description1: 'Seven categories including deception detection, attraction signals, workplace dynamics and micro-expression reading.',
    description2: 'Four difficulty levels from Beginner to Expert with real photographic images.',
    buttonText: 'Play Now',
    link: '/episodes',
  },
  {
    emoji: '🔍',
    title: 'Lie Detector Test',
    description1: 'Truth or lie? Ten scenarios across three levels of increasing difficulty.',
    description2: 'Test your ability to spot deception signals in real life situations.',
    buttonText: 'Start Test',
    link: '/lie-detector',
  },
  {
    emoji: '👁',
    title: 'Poker Face Challenge',
    description1: 'Ten scenarios featuring people actively trying to conceal their true reaction.',
    description2: 'Can you see what they are hiding? Three levels from Beginner to Expert.',
    buttonText: 'Take Challenge',
    link: '/poker-face',
  },
  {
    emoji: '👤',
    title: 'Body Language Personality Test',
    description1: 'What does your body language say about you?',
    description2: 'Answer 24 questions across two levels and discover whether you are a Connector, Observer, Performer, Diplomat, Protector or Authority.',
    buttonText: 'Discover Your Type',
    link: '/personality-test',
  },
  {
    emoji: '❤️',
    title: 'Relationship Body Language Quiz',
    description1: 'Three levels of relationship body language questions covering physical connection, emotional attunement and the subtlest signals of deep partnership.',
    description2: 'How well do you really read your partner?',
    buttonText: 'Start Quiz',
    link: '/relationship-quiz',
    fullWidth: true,
  },
]

const applications = [
  {
    title: 'Job Interviews and Career',
    text1: 'Understanding what interviewers read in your body language before you have said a word allows you to walk in with genuine presence rather than performed confidence.',
    text2: 'Reading the interviewer\'s signals accurately tells you how you are landing in real time and lets you adjust before the opportunity passes.',
  },
  {
    title: 'Relationships and Dating',
    text1: 'The ability to read what a partner or date is genuinely feeling rather than what they are saying builds deeper connection and prevents small misunderstandings from becoming serious problems.',
    text2: 'Attraction signals, withdrawal cues and the subtle language of genuine versus performed emotion are all learnable skills.',
  },
  {
    title: 'Spotting Deception',
    text1: 'Most people rely on myths when trying to detect dishonesty and as a result they are wrong more often than they would be by chance.',
    text2: 'Learning the real clusters and context-dependent signals of deception gives you a genuinely more accurate read of when something does not add up.',
  },
  {
    title: 'Confidence and Presence',
    text1: 'Your own body language communicates to others before you speak and influences how you feel about yourself as you move through the world.',
    text2: 'Understanding what confident body language actually looks like and developing it deliberately changes how others perceive you and how you experience yourself in any situation.',
  },
]

const guides = [
  {
    title: 'How to Spot a Liar',
    description: 'The body language clusters that reveal deception and why the most popular beliefs about lying are wrong.',
    link: '/guides/spot-a-liar',
  },
  {
    title: 'Attraction Signals Explained',
    description: 'The 12 most reliable body language signals of genuine romantic interest and how to distinguish them from politeness.',
    link: '/guides/attraction-signals',
  },
  {
    title: 'Job Interview Body Language',
    description: 'What interviewers are really reading and how to present yourself with genuine confidence from the moment you walk in.',
    link: '/guides/job-interview',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">
      {/* Section 1: Hero */}
      <section className="hero">
        <h1 className="hero-h1">Body Language IQ</h1>
        <h2 className="hero-h2">The Free Interactive Body Language Learning Platform</h2>
        <p className="hero-paragraph">
          BodyLanguageIQ is the free online platform where you test and develop your ability to read people through interactive quizzes, games, personality tests and in-depth guides. Whether you want to spot a liar, read attraction signals, decode workplace dynamics, understand your own body language personality or simply become a sharper reader of the people around you, BodyLanguageIQ has the tools to help you build that skill.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/episodes')}>Play Now</button>
          <button className="btn btn-secondary" onClick={() => navigate('/guides')}>Explore Guides</button>
        </div>
      </section>

      {/* Section 2: What Is Body Language */}
      <section className="what-is-section">
        <h2 className="section-heading">What Is Body Language and Why Does It Matter</h2>
        <div className="what-is-content">
          <p>
            Body language is the nonverbal dimension of human communication, the posture, gestures, facial expressions, eye contact patterns and physical movements that accompany and often contradict what we say in words. Research consistently suggests that a significant portion of the emotional meaning we communicate to others is delivered through these nonverbal channels rather than through the words themselves. Learning to read these signals accurately is one of the most practically useful skills a person can develop.
          </p>
          <p>
            Body language operates largely below conscious awareness. Most people display their genuine emotions and intentions through their body without realising they are doing so, and most people read the body language of others instinctively but inaccurately. Popular myths, that liars always avoid eye contact, that crossed arms always mean defensiveness, that confident people always make direct eye contact, lead people to misread the signals they observe and to draw wrong conclusions from what they see. Real body language reading is based on clusters of signals, baseline behaviour and context rather than on individual gestures interpreted in isolation.
          </p>
          <p>
            The applications of body language knowledge are genuinely wide. In job interviews understanding what interviewers are really reading allows you to present yourself more effectively. In relationships being able to read what your partner is feeling but not saying builds deeper connection and prevents misunderstandings from becoming serious problems. In negotiations reading genuine interest versus performed indifference gives you real information the other side did not intend to share. In social situations understanding attraction signals, status dynamics and who is genuinely engaged helps you navigate any room with greater confidence and accuracy.
          </p>
          <p>
            BodyLanguageIQ was created by Natalie Rowlands, who holds a degree in Forensic Psychology. Her background in understanding human behaviour and nonverbal communication inspired a platform that makes body language education genuinely accessible and engaging. Every quiz, game and guide on this site is grounded in real body language psychology rather than popular myths, designed to teach skills that are practically useful in real life situations.
          </p>
        </div>
      </section>

      {/* Section 3: Interactive Games and Tools */}
      <section className="games-section">
        <h2 className="section-heading">Interactive Body Language Games and Tests</h2>
        <p className="section-subtitle">Five ways to test and develop your body language reading skills. All completely free.</p>
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.title} className={`game-card ${game.fullWidth ? 'game-card--full-width' : ''}`}>
              <div className="game-emoji">{game.emoji}</div>
              <h3 className="game-title">{game.title}</h3>
              <p className="game-text">{game.description1}</p>
              <p className="game-text">{game.description2}</p>
              <button className="btn btn-game" onClick={() => navigate(game.link)}>
                {game.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: How Body Language Knowledge Helps */}
      <section className="applications-section">
        <h2 className="section-heading">How Body Language Knowledge Changes Real Life</h2>
        <div className="applications-grid">
          {applications.map((app) => (
            <div key={app.title} className="application-card">
              <h3 className="application-title">{app.title}</h3>
              <p>{app.text1}</p>
              <p>{app.text2}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Featured Guides */}
      <section className="guides-section">
        <h2 className="section-heading">Body Language Guides</h2>
        <p className="section-subtitle">In-depth guides on every aspect of reading people. Backed by psychology and written in plain English. Free to read.</p>
        <div className="featured-guides-grid">
          {guides.map((guide) => (
            <div key={guide.title} className="guide-card">
              <h3 className="guide-title">{guide.title}</h3>
              <p className="guide-description">{guide.description}</p>
              <button className="btn btn-guide" onClick={() => navigate(guide.link)}>
                Read Guide
              </button>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <button className="btn btn-view-all" onClick={() => navigate('/guides')}>
            View All 23 Guides
          </button>
        </div>
      </section>

      {/* Section 6: Dictionary and Courses */}
      <section className="resources-section">
        <div className="resources-grid">
          <div className="resource-card">
            <h3 className="resource-title">Body Language Dictionary</h3>
            <p className="resource-text">Our free dictionary covers 100 body language signals with clear plain English explanations. Search any signal and understand exactly what it means and when it appears.</p>
            <button className="btn btn-resource" onClick={() => navigate('/dictionary')}>
              Browse Dictionary
            </button>
          </div>
          <div className="resource-card">
            <h3 className="resource-title">Body Language Courses</h3>
            <p className="resource-text">In-depth downloadable guides covering workplace signals, attraction, deception detection and more. Coming soon.</p>
            <button className="btn btn-resource btn-resource--outlined" onClick={() => navigate('/courses')}>
              Explore Courses
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
