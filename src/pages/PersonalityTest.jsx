import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PersonalityTest.css'

const PERSONALITY_TYPES = {
  Connector: { color: '#c9a84c', name: 'Connector' },
  Observer: { color: '#4ecdc4', name: 'Observer' },
  Performer: { color: '#ff6b6b', name: 'Performer' },
  Diplomat: { color: '#b794f4', name: 'Diplomat' },
  Protector: { color: '#63b3ed', name: 'Protector' },
  Authority: { color: '#68d391', name: 'Authority' },
}

const LEVEL_1_QUESTIONS = [
  {
    id: 1,
    text: 'When you walk into a room full of strangers you typically:',
    answers: [
      { text: 'Scan the room confidently and approach someone', type: 'Authority' },
      { text: 'Hang back and wait to see what happens', type: 'Protector' },
      { text: 'Find a friendly face and move toward them', type: 'Connector' },
      { text: 'Observe the room dynamics before deciding', type: 'Observer' },
    ],
  },
  {
    id: 2,
    text: 'When listening to someone speak your natural response is:',
    answers: [
      { text: 'Maintain warm eye contact and nod to encourage them', type: 'Connector' },
      { text: 'Watch their body language more carefully than their words', type: 'Observer' },
      { text: 'Use animated expressions to show you are engaged', type: 'Performer' },
      { text: 'Keep your expression neutral and controlled', type: 'Diplomat' },
    ],
  },
  {
    id: 3,
    text: 'When you are nervous your body language tends to:',
    answers: [
      { text: 'Become very still and controlled', type: 'Diplomat' },
      { text: 'Close up with crossed arms and less eye contact', type: 'Protector' },
      { text: 'Become more animated and louder than usual', type: 'Performer' },
      { text: 'Stay steady, you rarely show nerves physically', type: 'Authority' },
    ],
  },
  {
    id: 4,
    text: 'When meeting someone new you tend to:',
    answers: [
      { text: 'Make strong eye contact and offer a confident greeting', type: 'Authority' },
      { text: 'Smile warmly and lean in slightly', type: 'Connector' },
      { text: 'Mirror their energy and match their style', type: 'Diplomat' },
      { text: 'Hold back slightly until you get a feel for them', type: 'Observer' },
    ],
  },
  {
    id: 5,
    text: 'In a group conversation you typically:',
    answers: [
      { text: 'Naturally take the lead and hold the floor', type: 'Performer' },
      { text: 'Listen carefully and speak when you have real value to add', type: 'Observer' },
      { text: 'Make sure everyone feels included and heard', type: 'Connector' },
      { text: 'Read the room carefully before deciding how much to contribute', type: 'Diplomat' },
    ],
  },
  {
    id: 6,
    text: 'What do you naturally do with your hands when talking:',
    answers: [
      { text: 'Gesture freely and expressively', type: 'Performer' },
      { text: 'Keep them relaxed and open at your sides', type: 'Connector' },
      { text: 'Clasp them or keep them controlled and still', type: 'Protector' },
      { text: 'Use precise deliberate gestures to emphasise points', type: 'Authority' },
    ],
  },
  {
    id: 7,
    text: 'When someone is upset around you your instinct is to:',
    answers: [
      { text: 'Move closer and offer physical comfort', type: 'Connector' },
      { text: 'Give them space and observe before acting', type: 'Observer' },
      { text: 'Take charge and help solve the problem', type: 'Authority' },
      { text: 'Read their signals carefully before deciding how to respond', type: 'Diplomat' },
    ],
  },
  {
    id: 8,
    text: 'Your resting facial expression is most often described as:',
    answers: [
      { text: 'Warm and approachable', type: 'Connector' },
      { text: 'Serious or focused', type: 'Authority' },
      { text: 'Expressive and animated', type: 'Performer' },
      { text: 'Neutral and hard to read', type: 'Diplomat' },
    ],
  },
  {
    id: 9,
    text: 'How close do you naturally stand to people when talking:',
    answers: [
      { text: 'Close enough to feel connected', type: 'Connector' },
      { text: 'A comfortable conversational distance', type: 'Observer' },
      { text: 'You adapt depending on the person and context', type: 'Diplomat' },
      { text: 'You prefer more personal space than most', type: 'Protector' },
    ],
  },
  {
    id: 10,
    text: 'When you disagree with someone your body language:',
    answers: [
      { text: 'Stays open, you believe in calm honest discussion', type: 'Connector' },
      { text: 'Becomes more upright and direct', type: 'Authority' },
      { text: 'Closes slightly, you find conflict uncomfortable', type: 'Protector' },
      { text: 'Remains carefully neutral, you rarely reveal your true reaction', type: 'Diplomat' },
    ],
  },
  {
    id: 11,
    text: 'People who meet you for the first time often say you seem:',
    answers: [
      { text: 'Confident and in charge', type: 'Authority' },
      { text: 'Warm and easy to talk to', type: 'Connector' },
      { text: 'Quiet and hard to read', type: 'Observer' },
      { text: 'Entertaining and expressive', type: 'Performer' },
    ],
  },
  {
    id: 12,
    text: 'When you are feeling confident your body language:',
    answers: [
      { text: 'Opens up with wider stance more gestures and more eye contact', type: 'Performer' },
      { text: 'Becomes very still and commanding', type: 'Authority' },
      { text: 'Stays consistently warm and engaged', type: 'Connector' },
      { text: 'Relaxes visibly and you naturally mirror others more', type: 'Diplomat' },
    ],
  },
]

const LEVEL_2_QUESTIONS = [
  {
    id: 1,
    text: 'In a high stakes work presentation your body language:',
    answers: [
      { text: 'Becomes more expressive and energetic, you feed off the tension', type: 'Performer' },
      { text: 'Locks down into calm controlled stillness', type: 'Authority' },
      { text: 'Opens up with extra warmth to put the audience at ease', type: 'Connector' },
      { text: 'Adapts carefully to read and match the room energy', type: 'Diplomat' },
    ],
  },
  {
    id: 2,
    text: 'When someone tries to intimidate you your instinctive physical response is:',
    answers: [
      { text: 'Hold your ground and meet their energy directly', type: 'Authority' },
      { text: 'Become very still and unreadable', type: 'Diplomat' },
      { text: 'Create physical distance and withdraw', type: 'Protector' },
      { text: 'Use warmth and openness to defuse the tension', type: 'Connector' },
    ],
  },
  {
    id: 3,
    text: 'When you are genuinely excited about something your body language:',
    answers: [
      { text: 'Cannot contain it, everything opens up and animates', type: 'Performer' },
      { text: 'Shows in small precise ways, you do not over display', type: 'Observer' },
      { text: 'Warms noticeably, you lean in and make more eye contact', type: 'Connector' },
      { text: 'Stays relatively controlled, you rarely show full excitement publicly', type: 'Protector' },
    ],
  },
  {
    id: 4,
    text: 'In a conflict situation your body language strategy is:',
    answers: [
      { text: 'Stay open and face it directly', type: 'Connector' },
      { text: 'Become very upright and take command of the space', type: 'Authority' },
      { text: 'Shut down and wait for it to pass', type: 'Protector' },
      { text: 'Read both sides carefully and adapt', type: 'Diplomat' },
    ],
  },
  {
    id: 5,
    text: 'When you are bored in a conversation your body language:',
    answers: [
      { text: 'Starts to perform interest even when you feel none', type: 'Performer' },
      { text: 'Becomes very still and you observe rather than engage', type: 'Observer' },
      { text: 'Gradually closes, you cannot fully hide disengagement', type: 'Protector' },
      { text: 'Stays carefully neutral, you are skilled at masking boredom', type: 'Diplomat' },
    ],
  },
  {
    id: 6,
    text: 'How does your body language change when you are around someone you want to impress:',
    answers: [
      { text: 'You become more animated and take up more space', type: 'Performer' },
      { text: 'You become warmer and more attentive', type: 'Connector' },
      { text: 'You become more controlled and deliberate', type: 'Authority' },
      { text: 'You mirror them more carefully than usual', type: 'Diplomat' },
    ],
  },
  {
    id: 7,
    text: 'When you need to deliver difficult news your body language:',
    answers: [
      { text: 'Opens and softens, you prioritise making them feel safe', type: 'Connector' },
      { text: 'Becomes very direct and controlled', type: 'Authority' },
      { text: 'Tightens slightly, you find emotional delivery uncomfortable', type: 'Protector' },
      { text: 'Adjusts carefully to match what the person needs', type: 'Diplomat' },
    ],
  },
  {
    id: 8,
    text: 'In a social situation where you know nobody your body language after 30 minutes:',
    answers: [
      { text: 'Is fully open and you have connected with several people', type: 'Connector' },
      { text: 'Has remained observational, you know the room well but have spoken little', type: 'Observer' },
      { text: 'Is performing sociability even if you feel tired', type: 'Performer' },
      { text: 'Has found one safe connection and stayed close to them', type: 'Protector' },
    ],
  },
  {
    id: 9,
    text: 'When someone shares personal information with you your body language:',
    answers: [
      { text: 'Opens fully, you lean in and give them complete attention', type: 'Connector' },
      { text: 'Becomes very still and focused, you listen with your whole body', type: 'Observer' },
      { text: 'Stays measured, you are careful not to over react', type: 'Diplomat' },
      { text: 'Becomes slightly more guarded, intimacy makes you cautious', type: 'Protector' },
    ],
  },
  {
    id: 10,
    text: 'When you have achieved something significant your body language:',
    answers: [
      { text: 'Cannot hide the pride, your whole posture lifts', type: 'Performer' },
      { text: 'Becomes quietly more upright and assured', type: 'Authority' },
      { text: 'Warms toward those around you, you want to share it', type: 'Connector' },
      { text: 'Stays controlled, you are uncomfortable with visible pride', type: 'Protector' },
    ],
  },
  {
    id: 11,
    text: 'When you are being observed or evaluated your body language:',
    answers: [
      { text: 'Performs naturally for the audience', type: 'Performer' },
      { text: 'Locks into its most controlled and deliberate mode', type: 'Authority' },
      { text: 'Stays open, being watched does not particularly affect you', type: 'Observer' },
      { text: 'Tightens, being evaluated makes you self conscious', type: 'Protector' },
    ],
  },
  {
    id: 12,
    text: 'Your body language at the end of a long draining social day:',
    answers: [
      { text: 'Finally relaxes into its true resting state, visibly quieter', type: 'Observer' },
      { text: 'Is still performing out of habit even when exhausted', type: 'Performer' },
      { text: 'Closes down fully, you need solitude to recover', type: 'Protector' },
      { text: 'Softens into genuine warmth with those closest to you', type: 'Connector' },
    ],
  },
]

const PERSONALITY_DESCRIPTIONS = {
  Connector: {
    tagline: 'You radiate warmth and people feel instantly at ease around you',
    description: 'You radiate warmth and people feel instantly at ease around you. Your body language is naturally open, engaged and inviting.',
    strengths: 'People trust you quickly and feel genuinely heard in your presence.',
    blindSpot: 'You can sometimes come across as too intense or overfamiliar with more reserved personalities.',
    tips: [
      'Be mindful of personal space with people who need more distance.',
      'Practice reading when someone needs space versus connection.',
      'Your warmth is your superpower, use it intentionally in high stakes situations.',
    ],
  },
  Observer: {
    tagline: 'You are a quiet and powerful reader of people',
    description: 'You are a quiet and powerful reader of people. While others talk you watch, and you rarely miss a thing.',
    strengths: 'You see what others miss and your insights are usually accurate.',
    blindSpot: 'People can misread your stillness as coldness or disinterest.',
    tips: [
      'Add small engagement signals like nodding or leaning in slightly.',
      'Make slightly more eye contact than feels natural.',
      'Share your observations more, people will value them enormously.',
    ],
  },
  Performer: {
    tagline: 'You have natural stage presence and your body language fills a room',
    description: 'You have natural stage presence and your body language fills a room. Expressive, animated and energetic, you draw people in.',
    strengths: 'You are engaging, entertaining and make a strong first impression.',
    blindSpot: 'Your expressiveness can overwhelm quieter personalities.',
    tips: [
      'Practice moments of stillness, pausing creates impact.',
      'Watch for signs that others need more space to contribute.',
      'Channel your energy deliberately in formal situations.',
    ],
  },
  Diplomat: {
    tagline: 'You are a natural chameleon who reads the room and adapts instinctively',
    description: 'You are a natural chameleon who reads the room and adapts instinctively. Your body language mirrors others and keeps people comfortable.',
    strengths: 'You move fluidly between social situations and rarely cause offence.',
    blindSpot: 'Your adaptability can make you seem difficult to read or untrustworthy.',
    tips: [
      'Let your genuine reactions show more, vulnerability builds trust.',
      'In close relationships practice being more emotionally readable.',
      'Use your mirroring skill deliberately in negotiations.',
    ],
  },
  Protector: {
    tagline: 'Your body language tends toward the guarded and private',
    description: 'Your body language tends toward the guarded and private. You take time to open up and are selective about who receives your trust.',
    strengths: 'When you do open up people feel genuinely chosen and valued.',
    blindSpot: 'Your closed body language can cost you opportunities before you get a chance to show your real self.',
    tips: [
      'Practice one open body language signal in new situations.',
      'Make eye contact slightly earlier than feels comfortable.',
      'Remember that first impressions are formed in seconds, give yours a head start.',
    ],
  },
  Authority: {
    tagline: 'You carry natural command presence',
    description: 'You carry natural command presence. Your posture is upright, your eye contact steady and your movements deliberate.',
    strengths: 'You project confidence and competence even under pressure.',
    blindSpot: 'Your presence can feel intimidating making it harder for others to approach you.',
    tips: [
      'Soften your entry into new situations with a genuine warm smile.',
      'Consciously create space for others to speak.',
      'Show vulnerability occasionally, it makes your authority feel human.',
    ],
  },
}

function ScoreIndicators({ scores, lastAnsweredType }) {
  const types = Object.keys(PERSONALITY_TYPES)
  const maxScore = 24

  return (
    <div className="pt-indicators">
      {types.map((type) => {
        const score = scores[type] || 0
        const size = 20 + (score / maxScore) * 20
        const isJustAnswered = lastAnsweredType === type

        return (
          <div key={type} className="pt-indicator">
            <div
              className={`pt-indicator-dot ${isJustAnswered ? 'pt-indicator-dot--pulse' : ''}`}
              style={{
                backgroundColor: PERSONALITY_TYPES[type].color,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
            <div className="pt-indicator-label">{type}</div>
          </div>
        )
      })}
    </div>
  )
}

function RadarChart({ scores, dominantType, isAnimating }) {
  const types = Object.keys(PERSONALITY_TYPES)
  const maxScore = 24
  const size = 120
  const center = size / 2

  const getAngle = (index) => (index / 6) * Math.PI * 2 - Math.PI / 2

  const getCoordinates = (angle, distance) => {
    const radius = (distance / maxScore) * 50
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const points = types.map((type, index) => {
    const angle = getAngle(index)
    const score = scores[type] || 0
    const coords = getCoordinates(angle, score)
    return `${coords.x},${coords.y}`
  }).join(' ')

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={`pt-radar ${isAnimating ? 'pt-radar--animate' : ''}`}
    >
      {types.map((type, index) => {
        const angle = getAngle(index)
        const maxCoords = getCoordinates(angle, maxScore)
        return (
          <line
            key={`axis-${index}`}
            x1={center}
            y1={center}
            x2={maxCoords.x}
            y2={maxCoords.y}
            stroke="#4a3d5e"
            strokeWidth="0.5"
          />
        )
      })}

      {[6, 12, 18, 24].map((score) => {
        const points = types.map((_, index) => {
          const angle = getAngle(index)
          const coords = getCoordinates(angle, score)
          return `${coords.x},${coords.y}`
        }).join(' ')
        return (
          <polygon
            key={`grid-${score}`}
            points={points}
            fill="none"
            stroke="#4a3d5e"
            strokeWidth="0.3"
            opacity="0.3"
          />
        )
      })}

      <polygon
        points={points}
        fill={PERSONALITY_TYPES[dominantType].color}
        fillOpacity="0.3"
        stroke={PERSONALITY_TYPES[dominantType].color}
        strokeWidth="1"
        className="pt-radar-fill"
      />

      {types.map((type, index) => {
        const angle = getAngle(index)
        const labelCoords = getCoordinates(angle, maxScore + 8)
        return (
          <g key={`label-${type}`}>
            <circle
              cx={labelCoords.x}
              cy={labelCoords.y}
              r="4"
              fill={PERSONALITY_TYPES[type].color}
              opacity={dominantType === type ? 1 : 0.5}
            />
            <text
              x={labelCoords.x}
              y={labelCoords.y + 12}
              textAnchor="middle"
              fontSize="8"
              fill={dominantType === type ? PERSONALITY_TYPES[type].color : '#9ca3af'}
              fontWeight={dominantType === type ? '700' : '400'}
            >
              {type}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function PersonalityTest() {
  const [phase, setPhase] = useState('intro')
  const [level, setLevel] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({
    Connector: 0,
    Observer: 0,
    Performer: 0,
    Diplomat: 0,
    Protector: 0,
    Authority: 0,
  })
  const [level1Scores, setLevel1Scores] = useState(null)
  const [dominantType, setDominantType] = useState(null)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [lastAnsweredType, setLastAnsweredType] = useState(null)
  const [expandedDetails, setExpandedDetails] = useState(false)
  const navigate = useNavigate()

  const questions = level === 1 ? LEVEL_1_QUESTIONS : LEVEL_2_QUESTIONS
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const getDominantType = (currentScores) => {
    return Object.entries(currentScores).reduce((a, b) =>
      b[1] > a[1] ? b : a
    )[0]
  }

  function handleAnswer(answerIndex) {
    const selectedAnswer = question.answers[answerIndex]
    const newScores = {
      ...scores,
      [selectedAnswer.type]: scores[selectedAnswer.type] + 2,
    }
    setScores(newScores)
    setDominantType(getDominantType(newScores))
    setLastAnsweredType(selectedAnswer.type)
    setTimeout(() => setLastAnsweredType(null), 600)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      if (level === 1) {
        setLevel1Scores(newScores)
        setPhase('level1-results')
      } else {
        setPhase('final-results')
      }
    }
  }

  function handleContinueToLevel2() {
    setLevel(2)
    setCurrentQuestion(0)
    setPhase('questions')
  }

  function handleSkipToResults() {
    setPhase('final-results')
  }

  function handleRestart() {
    setPhase('intro')
    setLevel(1)
    setCurrentQuestion(0)
    setScores({
      Connector: 0,
      Observer: 0,
      Performer: 0,
      Diplomat: 0,
      Protector: 0,
      Authority: 0,
    })
    setLevel1Scores(null)
    setDominantType(null)
  }

  async function handleShare() {
    const primary = getDominantType(scores)
    const allScores = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
    const secondary = allScores[1][0]

    const shareText = `I just took the Body Language Personality Test and I am a ${primary} with ${secondary} tendencies. Find out yours at bodylanguageiq.com/personality-test`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (phase === 'intro') {
    return (
      <main className="pt-main" style={{ backgroundColor: '#1a0f1f' }}>
        <div className="pt-intro">
          <div className="pt-orbs">
            {Object.entries(PERSONALITY_TYPES).map(([type, info]) => (
              <div
                key={type}
                className="pt-orb"
                style={{
                  backgroundColor: info.color,
                  '--orbit-delay': `${Object.keys(PERSONALITY_TYPES).indexOf(type) * 0.1}s`,
                }}
              />
            ))}
          </div>

          <h1 className="pt-intro-title">What Does Your Body Language Say About You</h1>
          <p className="pt-intro-subtitle">Answer 12 questions and discover your body language personality type. Then go deeper with Level 2 to reveal your complete profile.</p>

          <button className="pt-button pt-button--gold" onClick={() => setPhase('questions')}>
            Start Level 1
          </button>
        </div>
      </main>
    )
  }

  if (phase === 'level1-results') {
    const primary = getDominantType(level1Scores)
    const info = PERSONALITY_DESCRIPTIONS[primary]

    return (
      <main className="pt-main">
        <div className="pt-level-results">
          <h2 className="pt-result-type" style={{ color: PERSONALITY_TYPES[primary].color }}>
            {primary}
          </h2>
          <p className="pt-result-description-short">{info.description}</p>

          <div className="pt-result-buttons">
            <button className="pt-button pt-button--primary" onClick={handleContinueToLevel2}>
              Continue to Level 2
            </button>
            <button className="pt-button pt-button--secondary" onClick={handleSkipToResults}>
              Skip to Full Results
            </button>
          </div>
        </div>
      </main>
    )
  }

  if (phase === 'final-results') {
    const primary = getDominantType(scores)
    const allScores = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
    const secondary = allScores[1][0]
    const info = PERSONALITY_DESCRIPTIONS[primary]

    return (
      <main className="pt-main">
        <div className="pt-final-results">
          <h2 className="pt-result-type" style={{ color: PERSONALITY_TYPES[primary].color }}>
            {primary}
          </h2>
          <p className="pt-result-secondary">with {secondary} tendencies</p>

          <p className="pt-result-description-short">{info.description}</p>

          <button
            className="pt-see-more-btn"
            onClick={() => setExpandedDetails(!expandedDetails)}
          >
            {expandedDetails ? 'See Less' : 'See More'}
          </button>

          {expandedDetails && (
            <div className="pt-expanded-details">
              <div className="pt-result-section">
                <h3 className="pt-result-heading">Strengths</h3>
                <p className="pt-result-text">{info.strengths}</p>
              </div>

              <div className="pt-result-section">
                <h3 className="pt-result-heading">Blind Spot</h3>
                <p className="pt-result-text">{info.blindSpot}</p>
              </div>

              <div className="pt-result-section">
                <h3 className="pt-result-heading">Three Tips for You</h3>
                <ul className="pt-tips-list">
                  {info.tips.map((tip, i) => (
                    <li key={i} className="pt-tip">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="pt-result-actions">
            <button className="pt-button pt-button--gold" onClick={handleShare}>
              {shareSuccess ? 'Copied to Clipboard' : 'Share Your Result'}
            </button>
            <button className="pt-button pt-button--secondary" onClick={handleRestart}>
              Take The Test Again
            </button>
            <button className="pt-button pt-button--secondary" onClick={() => navigate('/episodes')}>
              Play The Quiz
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-main">
      <div className="pt-container">
        <div className="pt-header">
          <div className="pt-level-indicator">Level {level}</div>
          <div className="pt-progress-bar" style={{ width: `${progress}%` }} />
          <ScoreIndicators scores={scores} lastAnsweredType={lastAnsweredType} />
        </div>

        <div className="pt-question-section">
          <div className="pt-question-number">Question {currentQuestion + 1} of {questions.length}</div>
          <h2 className="pt-question-text">{question.text}</h2>
        </div>

        <div className="pt-answers">
          {question.answers.map((answer, index) => {
            const letter = String.fromCharCode(65 + index)
            return (
              <button
                key={index}
                className="pt-answer-button"
                onClick={() => handleAnswer(index)}
              >
                <span className="pt-answer-letter">{letter}</span>
                <span className="pt-answer-text">{answer.text}</span>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
