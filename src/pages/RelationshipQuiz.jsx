import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RelationshipQuiz.css'

const QUESTIONS = [
  {
    id: 1,
    text: 'When watching TV together you typically:',
    answers: [
      { text: 'Sit touching or intertwined naturally', points: 4 },
      { text: 'Sit close but not always touching', points: 3 },
      { text: 'Sit near each other with some space', points: 2 },
      { text: 'Sit separately — we both like space', points: 1 },
    ],
  },
  {
    id: 2,
    text: 'Who initiates physical touch most often:',
    answers: [
      { text: 'We both initiate equally and naturally', points: 4 },
      { text: 'One of us initiates more but the other always responds warmly', points: 3 },
      { text: 'One person initiates significantly more than the other', points: 2 },
      { text: 'Physical touch is rare between us', points: 1 },
    ],
  },
  {
    id: 3,
    text: 'Eye contact during conversations at home:',
    answers: [
      { text: 'We naturally hold warm eye contact when talking', points: 4 },
      { text: 'We make decent eye contact most of the time', points: 3 },
      { text: 'We often talk without really looking at each other', points: 2 },
      { text: 'Direct eye contact feels uncomfortable between us', points: 1 },
    ],
  },
  {
    id: 4,
    text: 'During an argument your body language:',
    answers: [
      { text: 'Stays open — we face each other and work through it', points: 4 },
      { text: 'Gets tense but we stay physically present', points: 3 },
      { text: 'One or both of us closes off or turns away', points: 2 },
      { text: 'One or both of us physically leaves the space', points: 1 },
    ],
  },
  {
    id: 5,
    text: 'How you greet each other after time apart:',
    answers: [
      { text: 'Warm physical greeting every time — hug, kiss or both', points: 4 },
      { text: 'Usually a warm greeting but not always physical', points: 3 },
      { text: 'A brief acknowledgement most of the time', points: 2 },
      { text: 'We often just say hello from across the room', points: 1 },
    ],
  },
  {
    id: 6,
    text: "Do you naturally mirror each other's body language:",
    answers: [
      { text: 'Yes — we often notice we are sitting or moving the same way', points: 4 },
      { text: 'Sometimes — especially when things are going well', points: 3 },
      { text: 'Rarely — we tend to have quite different body language styles', points: 2 },
      { text: 'Never noticed this between us', points: 1 },
    ],
  },
  {
    id: 7,
    text: 'Physical closeness in public:',
    answers: [
      { text: 'We naturally gravitate toward each other in public', points: 4 },
      { text: 'We are comfortable being close but not always touching', points: 3 },
      { text: 'We tend to give each other space in public', points: 2 },
      { text: 'Public displays of affection feel uncomfortable for one or both of us', points: 1 },
    ],
  },
  {
    id: 8,
    text: 'Touch during difficult conversations:',
    answers: [
      { text: 'We often touch each other during hard conversations — a hand on the arm or shoulder', points: 4 },
      { text: 'Sometimes — it depends on the situation', points: 3 },
      { text: 'Rarely — we tend to keep distance during difficult talks', points: 2 },
      { text: 'Physical touch during arguments would feel wrong to one or both of us', points: 1 },
    ],
  },
  {
    id: 9,
    text: 'How you sleep:',
    answers: [
      { text: 'We usually sleep touching in some way', points: 4 },
      { text: 'We start close and drift apart during sleep', points: 3 },
      { text: 'We sleep on our own sides with space between us', points: 2 },
      { text: 'We prefer completely separate sleeping spaces', points: 1 },
    ],
  },
  {
    id: 10,
    text: 'Can your partner tell your mood without you saying anything:',
    answers: [
      { text: 'Almost always — they read me very accurately', points: 4 },
      { text: 'Usually — they pick up on most signals', points: 3 },
      { text: 'Sometimes — they get it right about half the time', points: 2 },
      { text: 'Rarely — they often misread how I am feeling', points: 1 },
    ],
  },
  {
    id: 11,
    text: 'How you feel when your partner enters a room:',
    answers: [
      { text: 'I naturally look up and feel drawn toward them', points: 4 },
      { text: 'I notice and feel pleased to see them', points: 3 },
      { text: 'I notice but it does not change my energy much', points: 2 },
      { text: 'I often do not notice or it takes a moment to register', points: 1 },
    ],
  },
  {
    id: 12,
    text: 'Physical affection in front of others:',
    answers: [
      { text: 'Natural and comfortable — we do not think about it', points: 4 },
      { text: 'Comfortable with some affection but nothing too demonstrative', points: 3 },
      { text: 'We tend to be more reserved around other people', points: 2 },
      { text: 'We avoid any physical affection in front of others', points: 1 },
    ],
  },
  {
    id: 13,
    text: 'Spontaneous touch during the day:',
    answers: [
      { text: 'Frequent — we touch each other naturally as we pass or talk', points: 4 },
      { text: 'Regular — at least a few times a day', points: 3 },
      { text: 'Occasional — a few times a week', points: 2 },
      { text: 'Rare — touch tends to be planned rather than spontaneous', points: 1 },
    ],
  },
  {
    id: 14,
    text: 'When you talk do you naturally face each other:',
    answers: [
      { text: 'Always — we turn toward each other when talking', points: 4 },
      { text: 'Usually — though sometimes we talk side by side', points: 3 },
      { text: 'Often side by side or not directly facing', points: 2 },
      { text: 'We often talk without physically orienting toward each other', points: 1 },
    ],
  },
  {
    id: 15,
    text: 'Overall how would you describe the physical warmth between you:',
    answers: [
      { text: 'Consistently warm and connected', points: 4 },
      { text: 'Generally good with occasional distance', points: 3 },
      { text: 'Variable — warm sometimes but often feels lacking', points: 2 },
      { text: 'Cool or distant most of the time', points: 1 },
    ],
  },
]

const RESULT_LEVELS = [
  {
    min: 50,
    max: 60,
    name: 'Deeply Connected',
    description: 'Your physical and emotional attunement is exceptional. You read each other instinctively and your body language reflects a deep bond built on genuine security and trust. Your relationship has a strong physical foundation that supports you through difficult times.',
    tips: [
      'Continue prioritising physical connection even during busy periods.',
      'Use your strong attunement to help each other through stress without words.',
      'Share this result with your partner and celebrate what you have built together.',
    ],
  },
  {
    min: 38,
    max: 49,
    name: 'Strongly Bonded',
    description: 'You have a solid physical and emotional connection with real warmth and attunement. There may be small areas where you could deepen your awareness of each other but the foundation is strong.',
    tips: [
      'Notice which questions scored lower and discuss them openly with your partner.',
      'Try one new small gesture of physical connection each day.',
      'Ask your partner to take the test separately and compare your scores.',
    ],
  },
  {
    min: 26,
    max: 37,
    name: 'Building Connection',
    description: 'Your connection has a good foundation but there is meaningful room to grow in how you read and respond to each other physically. Small intentional changes can make a significant difference over time.',
    tips: [
      'Start with one daily intentional physical gesture — a longer hug, eye contact during conversation.',
      'Discuss the questions where you scored lowest with your partner.',
      'Consider whether busyness or stress is affecting your physical connection.',
    ],
  },
  {
    min: 14,
    max: 25,
    name: 'Growing Apart',
    description: 'Your body language suggests some distance has developed in the relationship. This is common in long term relationships and is absolutely fixable with awareness and intention — but it deserves attention.',
    tips: [
      'Have an honest conversation about physical connection with your partner.',
      'Small consistent gestures matter more than grand ones — start small.',
      'Both partners taking this test separately and comparing results can open important conversations.',
    ],
  },
  {
    min: 0,
    max: 13,
    name: 'Needs Attention',
    description: 'Your physical attunement is low right now. This does not mean the relationship cannot improve but it suggests the physical and emotional connection needs deliberate and consistent attention from both partners.',
    tips: [
      'Consider whether this reflects a temporary difficult period or a longer pattern.',
      'Professional couples counselling can provide tools to rebuild physical and emotional attunement.',
      'Share this result with your partner and have an open honest conversation about what you both need.',
    ],
  },
]

function getResultLevel(score) {
  return RESULT_LEVELS.find(level => score >= level.min && score <= level.max) ?? RESULT_LEVELS[RESULT_LEVELS.length - 1]
}

export default function RelationshipQuiz() {
  const [phase, setPhase] = useState('intro') // 'intro' | 'questions' | 'results'
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [compareSuccess, setCompareSuccess] = useState(false)
  const navigate = useNavigate()

  function handleStart() {
    setPhase('questions')
    setCurrentQuestion(0)
    setTotalScore(0)
  }

  function handleAnswer(points) {
    const newScore = totalScore + points

    if (currentQuestion < QUESTIONS.length - 1) {
      setTotalScore(newScore)
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 200)
    } else {
      setTotalScore(newScore)
      setTimeout(() => {
        setPhase('results')
      }, 200)
    }
  }

  function handleRestart() {
    setPhase('intro')
    setCurrentQuestion(0)
    setTotalScore(0)
    setShareSuccess(false)
    setCompareSuccess(false)
  }

  async function handleShare() {
    const result = getResultLevel(totalScore)
    const shareText = `I scored ${totalScore}/60 on the Relationship Body Language Quiz — ${result.name}! How connected are you and your partner? Find out at bodylanguageiq.com/relationship-quiz`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  async function handleCompare() {
    const compareText = 'bodylanguageiq.com/relationship-quiz'

    try {
      await navigator.clipboard.writeText(compareText)
      setCompareSuccess(true)
      setTimeout(() => setCompareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // ── Intro screen ──────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <main className="rq-page">
        <div className="rq-intro">
          <h1 className="rq-intro-title">Relationship Body Language Quiz</h1>
          <p className="rq-intro-subtitle">
            How physically and emotionally connected are you and your partner? Answer 15 questions and find out your Relationship Connection Score.
          </p>
          <button className="rq-start-btn" onClick={handleStart}>
            Start Quiz
          </button>
          <p className="rq-intro-note">
            Take it separately from your partner then compare your scores.
          </p>
        </div>
      </main>
    )
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (phase === 'results') {
    const result = getResultLevel(totalScore)
    return (
      <main className="rq-page">
        <div className="rq-results">
          <h1 className="rq-results-label">Your Relationship Connection Score</h1>
          <div className="rq-results-score">{totalScore}<span className="rq-results-score-max">/60</span></div>
          <h2 className="rq-results-level">{result.name}</h2>

          <div className="rq-results-section">
            <p className="rq-results-desc">{result.description}</p>
          </div>

          <div className="rq-results-section">
            <h3 className="rq-results-heading">Three Tips For You</h3>
            <ul className="rq-results-tips">
              {result.tips.map((tip, i) => (
                <li key={i} className="rq-results-tip">{tip}</li>
              ))}
            </ul>
          </div>

          <div className="rq-results-actions">
            <button className="rq-results-btn rq-results-btn--primary" onClick={handleShare}>
              {shareSuccess ? '✓ Copied to Clipboard' : 'Share Your Score'}
            </button>
            <button className="rq-results-btn rq-results-btn--secondary" onClick={handleCompare}>
              {compareSuccess ? '✓ Link Copied' : 'Compare With Your Partner'}
            </button>
            <button className="rq-results-btn rq-results-btn--secondary" onClick={handleRestart}>
              Take The Test Again
            </button>
          </div>
        </div>
      </main>
    )
  }

  // ── Questions screen ──────────────────────────────────────────────────────
  const question = QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <main className="rq-page">
      <div className="rq-container">
        <div className="rq-header">
          <h1 className="rq-title">Relationship Body Language Quiz</h1>
        </div>

        <div className="rq-progress-wrap">
          <div className="rq-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="rq-question-number">
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </div>

        <div className="rq-question">
          <h2 className="rq-question-text">{question.text}</h2>
        </div>

        <div className="rq-answers">
          {question.answers.map((answer, index) => {
            const letter = String.fromCharCode(65 + index)
            return (
              <button
                key={index}
                className="rq-answer"
                onClick={() => handleAnswer(answer.points)}
              >
                <span className="rq-answer-letter">{letter}</span>
                <span className="rq-answer-text">{answer.text}</span>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
