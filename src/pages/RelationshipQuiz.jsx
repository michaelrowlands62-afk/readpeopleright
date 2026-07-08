import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './RelationshipQuiz.css'

const LEVELS = {
  1: {
    name: 'Good Foundation',
    description: 'Physical connection and basic attunement',
    questions: [
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
    ],
  },
  2: {
    name: 'Growing Together',
    description: 'Emotional attunement and reading unspoken signals',
    questions: [
      {
        id: 1,
        text: 'When your partner walks through the door after work you can usually tell within seconds how their day has been without them saying a word. How accurately do you read this:',
        answers: [
          { text: 'Almost always accurately', points: 4 },
          { text: 'Usually get it right', points: 3 },
          { text: 'About half the time', points: 2 },
          { text: 'I rarely pick up on it until they tell me', points: 1 },
        ],
      },
      {
        id: 2,
        text: 'When your partner is quietly worried about something they have not mentioned, how often do you sense it:',
        answers: [
          { text: 'Almost always, I notice subtle changes in their energy', points: 4 },
          { text: 'Usually, though I sometimes miss it', points: 3 },
          { text: 'Sometimes, when the signals are obvious', points: 2 },
          { text: 'Rarely, I tend to take things at face value', points: 1 },
        ],
      },
      {
        id: 3,
        text: 'During a difficult conversation how well do you read when your partner needs you to listen rather than offer solutions:',
        answers: [
          { text: 'Very well, I naturally shift into listening mode', points: 4 },
          { text: 'Usually well though I sometimes jump in too soon', points: 3 },
          { text: 'I struggle with this and often get it wrong', points: 2 },
          { text: 'I almost always try to fix rather than listen', points: 1 },
        ],
      },
      {
        id: 4,
        text: 'When your partner says they are not bothered about something how often can you tell whether they genuinely mean it:',
        answers: [
          { text: 'Almost always, I know the difference between fine and not fine', points: 4 },
          { text: 'Usually, though occasionally I misread it', points: 3 },
          { text: 'About half the time', points: 2 },
          { text: 'I tend to take what they say at face value', points: 1 },
        ],
      },
      {
        id: 5,
        text: "How well do you read your partner's mood from physical signals alone before any conversation has started:",
        answers: [
          { text: 'Very well, their posture and energy tell me everything', points: 4 },
          { text: 'Fairly well for strong moods but I miss subtle ones', points: 3 },
          { text: 'Not very well, I need verbal cues', points: 2 },
          { text: 'I rarely read their mood until they express it', points: 1 },
        ],
      },
      {
        id: 6,
        text: 'When your partner is putting on a brave face how often do you see through it:',
        answers: [
          { text: 'Almost always, I know their real face too well', points: 4 },
          { text: 'Usually, the small signals give it away', points: 3 },
          { text: 'Sometimes, when they are not trying too hard to hide it', points: 2 },
          { text: 'Rarely, they can usually convince me they are fine', points: 1 },
        ],
      },
      {
        id: 7,
        text: "How attuned are you to changes in your partner's touch:",
        answers: [
          { text: 'Very, I immediately notice if their touch feels different or more distant', points: 4 },
          { text: 'Usually, significant changes register with me', points: 3 },
          { text: 'Sometimes, only when the change is obvious', points: 2 },
          { text: 'I rarely notice changes in how they touch me', points: 1 },
        ],
      },
      {
        id: 8,
        text: 'When your partner laughs, how well can you distinguish their genuine laugh from their polite social laugh:',
        answers: [
          { text: 'Immediately and always', points: 4 },
          { text: 'Usually, though in noisy social settings I sometimes miss it', points: 3 },
          { text: 'Sometimes, when the difference is pronounced', points: 2 },
          { text: 'I have never really thought about this or noticed a difference', points: 1 },
        ],
      },
      {
        id: 9,
        text: "How aware are you of your partner's breathing patterns and what they signal:",
        answers: [
          { text: 'Very, I notice when their breathing is tense shallow or relieved', points: 4 },
          { text: 'Fairly, I pick up on it in emotional moments', points: 3 },
          { text: 'Occasionally, only when it is quite obvious', points: 2 },
          { text: 'Not at all, I have never noticed this', points: 1 },
        ],
      },
      {
        id: 10,
        text: 'When your partner is disappointed but trying not to show it, how often do you catch it:',
        answers: [
          { text: 'Almost always, disappointment is hard to hide from me', points: 4 },
          { text: 'Usually, the micro signals give it away', points: 3 },
          { text: 'Sometimes, when it is significant disappointment', points: 2 },
          { text: 'Rarely, I tend to miss hidden disappointment', points: 1 },
        ],
      },
      {
        id: 11,
        text: 'How well do you read when your partner needs reassurance but is not asking for it:',
        answers: [
          { text: 'Very well, I sense it and offer it naturally', points: 4 },
          { text: 'Usually, though I sometimes need a hint', points: 3 },
          { text: 'Not very well, I often miss this need', points: 2 },
          { text: 'I rarely notice unless they ask directly', points: 1 },
        ],
      },
      {
        id: 12,
        text: 'When you and your partner are in a social situation together, how connected do you feel nonverbally:',
        answers: [
          { text: 'Very, we exchange glances and communicate without words constantly', points: 4 },
          { text: 'Usually connected, we check in with each other regularly', points: 3 },
          { text: 'Somewhat, occasional glances but not much nonverbal exchange', points: 2 },
          { text: 'Not very, we tend to operate independently in social settings', points: 1 },
        ],
      },
      {
        id: 13,
        text: "How quickly do you notice when your partner's posture changes during a conversation:",
        answers: [
          { text: 'Immediately, I am always aware of how they are holding themselves', points: 4 },
          { text: 'Usually, significant changes register quickly', points: 3 },
          { text: 'Sometimes, only when the change is obvious', points: 2 },
          { text: 'Rarely, I focus more on words than posture', points: 1 },
        ],
      },
      {
        id: 14,
        text: 'When your partner is excited about something but trying to contain it, how often do you notice:',
        answers: [
          { text: 'Almost always, contained excitement is obvious to me', points: 4 },
          { text: 'Usually, it leaks out in small ways I catch', points: 3 },
          { text: 'Sometimes, when they are not very good at hiding it', points: 2 },
          { text: 'Rarely, I tend to miss contained emotions', points: 1 },
        ],
      },
      {
        id: 15,
        text: "Overall how would you describe your ability to read your partner's unspoken emotional state:",
        answers: [
          { text: 'Exceptional, I rarely miss what they are really feeling', points: 4 },
          { text: 'Good, I get it right most of the time', points: 3 },
          { text: 'Moderate, I catch obvious signals but miss subtle ones', points: 2 },
          { text: 'Limited, I rely mainly on what they tell me', points: 1 },
        ],
      },
    ],
  },
  3: {
    name: 'Soul Mates',
    description: 'Subtlest signals and micro moments of connection',
    questions: [
      {
        id: 1,
        text: 'When your partner glances at you across a room full of people, how much information do you get from that single glance:',
        answers: [
          { text: 'Everything, I know exactly what they are thinking and feeling', points: 4 },
          { text: 'Quite a lot, their eyes tell me the broad emotional picture', points: 3 },
          { text: 'Something, but I often need confirmation', points: 2 },
          { text: 'Not much, a glance is just a glance to me', points: 1 },
        ],
      },
      {
        id: 2,
        text: 'How aware are you of the micro moment when your partner decides to say nothing rather than something:',
        answers: [
          { text: 'Very, I notice the small pause and the decision not to speak', points: 4 },
          { text: 'Sometimes, when the moment is charged', points: 3 },
          { text: 'Rarely, I tend to only notice what is said', points: 2 },
          { text: 'I have never noticed this', points: 1 },
        ],
      },
      {
        id: 3,
        text: 'When your partner touches you during a conversation, how much do you read from the quality of that touch:',
        answers: [
          { text: 'A great deal, pressure duration and intention all communicate something', points: 4 },
          { text: 'Quite a bit, I notice obvious differences in touch quality', points: 3 },
          { text: 'A little, only significant differences register', points: 2 },
          { text: 'Not much, touch is touch to me', points: 1 },
        ],
      },
      {
        id: 4,
        text: "How aware are you of the precise moment when your partner's energy shifts in a room:",
        answers: [
          { text: 'Immediately, I feel it before I see it', points: 4 },
          { text: 'Usually within a few moments', points: 3 },
          { text: 'Eventually, when the shift is significant', points: 2 },
          { text: 'Rarely, I tend not to notice energy shifts', points: 1 },
        ],
      },
      {
        id: 5,
        text: 'When your partner disagrees with something said in a group but says nothing, how often do you catch the micro signal:',
        answers: [
          { text: 'Almost always, their face shows it for a fraction of a second', points: 4 },
          { text: 'Sometimes, when the disagreement is strong', points: 3 },
          { text: 'Rarely, subtle disagreement is hard for me to catch', points: 2 },
          { text: 'Never, I would not notice this', points: 1 },
        ],
      },
      {
        id: 6,
        text: 'How well do you read the difference between your partner needing space and your partner feeling disconnected:',
        answers: [
          { text: 'Very well, they feel completely different to me', points: 4 },
          { text: 'Usually, though I occasionally misread space as distance', points: 3 },
          { text: 'Not very well, I often confuse the two', points: 2 },
          { text: 'I do not distinguish between them', points: 1 },
        ],
      },
      {
        id: 7,
        text: 'When your partner is genuinely present with you versus physically there but mentally elsewhere, how quickly do you notice:',
        answers: [
          { text: 'Immediately, their quality of presence is unmistakable', points: 4 },
          { text: 'Usually within a few minutes', points: 3 },
          { text: 'Eventually, when it becomes obvious', points: 2 },
          { text: 'I rarely notice until they tell me their mind was elsewhere', points: 1 },
        ],
      },
      {
        id: 8,
        text: "How attuned are you to the micro expressions that cross your partner's face before they compose themselves:",
        answers: [
          { text: 'Very, I catch the flicker before the managed expression takes over', points: 4 },
          { text: 'Sometimes, when the underlying emotion is strong', points: 3 },
          { text: 'Rarely, I tend to read the composed expression rather than what preceded it', points: 2 },
          { text: 'I have never noticed this in my partner', points: 1 },
        ],
      },
      {
        id: 9,
        text: 'When your partner says yes but means no or says fine but means anything but, how reliably do you catch it:',
        answers: [
          { text: 'Almost always, the mismatch between words and signals is clear to me', points: 4 },
          { text: 'Usually, though occasionally I take the words at face value', points: 3 },
          { text: 'Sometimes, only when the mismatch is significant', points: 2 },
          { text: 'Rarely, I tend to believe what I am told', points: 1 },
        ],
      },
      {
        id: 10,
        text: "How aware are you of changes in your partner's breathing or muscle tension when something is bothering them:",
        answers: [
          { text: 'Very aware, these are often the first signals I notice', points: 4 },
          { text: 'Fairly aware, I notice it in emotionally charged moments', points: 3 },
          { text: 'Occasionally aware, only when changes are obvious', points: 2 },
          { text: 'Not aware, I do not monitor these signals', points: 1 },
        ],
      },
      {
        id: 11,
        text: 'When your partner is performing happiness rather than feeling it, how quickly do you see through it:',
        answers: [
          { text: 'Immediately, performed happiness has a different quality I always recognise', points: 4 },
          { text: 'Usually within a short time', points: 3 },
          { text: 'Sometimes, when the performance slips', points: 2 },
          { text: 'Rarely, I find it hard to tell the difference', points: 1 },
        ],
      },
      {
        id: 12,
        text: 'How well do you read the nonverbal negotiation that happens between you and your partner without either of you speaking:',
        answers: [
          { text: 'Very well, we conduct whole conversations through glances and micro signals', points: 4 },
          { text: 'Fairly well, we have a good nonverbal shorthand', points: 3 },
          { text: 'Somewhat, we have a few signals but not many', points: 2 },
          { text: 'Not well, we rely almost entirely on words', points: 1 },
        ],
      },
      {
        id: 13,
        text: 'When your partner is carrying something emotionally heavy but has decided not to burden you with it, how often do you sense the weight even when they say nothing:',
        answers: [
          { text: 'Almost always, the weight shows even when they try to hide it', points: 4 },
          { text: 'Usually, though sometimes I miss it when they hide it well', points: 3 },
          { text: 'Sometimes, when it is particularly heavy', points: 2 },
          { text: 'Rarely, I tend to accept that everything is fine when they say so', points: 1 },
        ],
      },
      {
        id: 14,
        text: 'How attuned are you to the exact quality of silence between you and your partner:',
        answers: [
          { text: 'Highly attuned, comfortable silence feels completely different from tense silence', points: 4 },
          { text: 'Fairly attuned, I notice obvious differences', points: 3 },
          { text: 'Somewhat, only very charged silences register', points: 2 },
          { text: 'Not attuned, silence is just silence to me', points: 1 },
        ],
      },
      {
        id: 15,
        text: 'Overall how would you describe your mastery of reading your partner at the deepest nonverbal level:',
        answers: [
          { text: 'Exceptional, we communicate as much without words as with them', points: 4 },
          { text: 'Advanced, I catch most signals including subtle ones', points: 3 },
          { text: 'Developing, I am becoming more attuned over time', points: 2 },
          { text: 'Basic, I still rely primarily on verbal communication', points: 1 },
        ],
      },
    ],
  },
}

function getBackgroundColor(score, maxScore = 60) {
  const percentage = Math.max(0, Math.min(1, score / maxScore))
  const coldR = 26
  const coldG = 15
  const coldB = 31
  const warmR = 61
  const warmG = 32
  const warmB = 0

  const r = Math.round(coldR + (warmR - coldR) * percentage)
  const g = Math.round(coldG + (warmG - coldG) * percentage)
  const b = Math.round(coldB + (warmB - coldB) * percentage)

  return `rgb(${r}, ${g}, ${b})`
}

function getNeedleRotation(score, maxScore = 60) {
  const percentage = Math.max(0, Math.min(1, score / maxScore))
  return -90 + percentage * 180
}

function shuffleAnswers(answers) {
  return [...answers].sort(() => Math.random() - 0.5)
}

export default function RelationshipQuiz() {
  const [phase, setPhase] = useState('intro')
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [levelScores, setLevelScores] = useState({ 1: 0, 2: 0, 3: 0 })
  const [unlockedLevels, setUnlockedLevels] = useState({ 1: true, 2: false, 3: false })
  const [shareSuccess, setShareSuccess] = useState(false)
  const [compareSuccess, setCompareSuccess] = useState(false)
  const [gaugeNeedleAngle, setGaugeNeedleAngle] = useState(0)
  const [shuffledLevels, setShuffledLevels] = useState({})
  const navigate = useNavigate()

  const getShuffledQuestions = (level) => {
    if (!shuffledLevels[level]) {
      const originalQuestions = LEVELS[level].questions
      const newShuffled = originalQuestions.map(q => ({
        ...q,
        answers: shuffleAnswers(q.answers)
      }))
      setShuffledLevels({...shuffledLevels, [level]: newShuffled})
      return newShuffled
    }
    return shuffledLevels[level]
  }

  function handleLogoClick() {
    navigate('/')
  }

  function handleStartLevel(level) {
    setCurrentLevel(level)
    setCurrentQuestion(0)
    setPhase('questions')
  }

  function handleAnswer(points) {
    const newScore = levelScores[currentLevel] + points
    const newLevelScores = { ...levelScores, [currentLevel]: newScore }

    const needleAngle = -90 + ((points - 1) / 3) * 180

    setGaugeNeedleAngle(needleAngle)

    if (currentQuestion < 14) {
      setLevelScores(newLevelScores)
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setGaugeNeedleAngle(0)
      }, 800)
    } else {
      setLevelScores(newLevelScores)
      setTimeout(() => {
        setPhase('levelResult')
      }, 800)
    }
  }

  function handleLevelPassed() {
    if (currentLevel < 3) {
      const nextLevel = currentLevel + 1
      setUnlockedLevels({ ...unlockedLevels, [nextLevel]: true })
      setPhase('intro')
    } else {
      setPhase('finalResults')
    }
  }

  function handleLevelRetry() {
    setCurrentQuestion(0)
    setLevelScores({ ...levelScores, [currentLevel]: 0 })
    setPhase('questions')
  }

  function handleRestart() {
    setPhase('intro')
    setCurrentLevel(1)
    setCurrentQuestion(0)
    setLevelScores({ 1: 0, 2: 0, 3: 0 })
    setUnlockedLevels({ 1: true, 2: false, 3: false })
    setShareSuccess(false)
    setCompareSuccess(false)
  }

  const totalScore = levelScores[1] + levelScores[2] + levelScores[3]
  const backgroundColor = getBackgroundColor(totalScore, 180)

  // ── Intro screen ──────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="rq-container" style={{ backgroundColor }}>
        <main className="rq-page">
          <div className="rq-intro">
            <div className="rq-meter-container">
              <svg className="rq-meter" viewBox="0 0 200 120">
                <defs>
                  <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(201, 168, 76, 0.2)" />
                    <stop offset="100%" stopColor="rgba(201, 168, 76, 0.4)" />
                  </linearGradient>
                </defs>
                <path d="M 30 100 A 70 70 0 0 1 170 100" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="3" fill="none" />
                <circle cx="100" cy="100" r="6" fill="#c9a84c" />
                <g className="rq-needle" style={{ transform: `rotate(${-90}deg)`, transformOrigin: '100px 100px' }}>
                  <line x1="100" y1="100" x2="100" y2="35" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="100,30 97,38 103,38" fill="#c9a84c" />
                </g>
                <text x="100" y="110" textAnchor="middle" fontSize="12" fill="#b89fd4">0/180</text>
              </svg>
            </div>

            <h1 className="rq-intro-title">Relationship Mastery Test</h1>
            <p className="rq-intro-subtitle">Three levels. Fifteen questions each. How deeply do you really know each other</p>

            <div className="rq-level-badges">
              <div className={`rq-badge rq-badge--1 ${unlockedLevels[1] ? 'rq-badge--unlocked' : ''}`}>
                <div className="rq-badge-number">1</div>
                <div className="rq-badge-name">Good Foundation</div>
              </div>
              <div className={`rq-badge rq-badge--2 ${unlockedLevels[2] ? 'rq-badge--unlocked' : ''}`}>
                <div className="rq-badge-number">2</div>
                <div className="rq-badge-name">Growing Together</div>
              </div>
              <div className={`rq-badge rq-badge--3 ${unlockedLevels[3] ? 'rq-badge--unlocked' : ''}`}>
                <div className="rq-badge-number">3</div>
                <div className="rq-badge-name">Soul Mates</div>
              </div>
            </div>

            <button className="rq-start-btn" onClick={() => handleStartLevel(1)}>
              Start Level 1
            </button>

            {unlockedLevels[2] && !unlockedLevels[3] && (
              <button className="rq-start-btn rq-start-btn--level2" onClick={() => handleStartLevel(2)}>
                Start Level 2
              </button>
            )}

            {unlockedLevels[3] && (
              <button className="rq-start-btn rq-start-btn--level3" onClick={() => handleStartLevel(3)}>
                Start Level 3
              </button>
            )}
          </div>
      </main>
    </div>
    )
  }

  // ── Level Result screen ───────────────────────────────────────────────────
  if (phase === 'levelResult') {
    const score = levelScores[currentLevel]
    const passed = score >= 52
    const maxNeedle = getNeedleRotation(score, 60)

    return (
      <div className="rq-container" style={{ backgroundColor }}>
        <main className="rq-page">
          <div className="rq-level-result">
            <svg className="rq-meter rq-meter--large" viewBox="0 0 200 120">
              <defs>
                <linearGradient id="meterGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(201, 168, 76, 0.2)" />
                  <stop offset="100%" stopColor="rgba(201, 168, 76, 0.4)" />
                </linearGradient>
              </defs>
              <path d="M 30 100 A 70 70 0 0 1 170 100" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="3" fill="none" />
              <circle cx="100" cy="100" r="6" fill="#c9a84c" />
              <g className="rq-needle rq-needle--animate" style={{ transform: `rotate(${maxNeedle}deg)`, transformOrigin: '100px 100px', transition: 'transform 2s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <line x1="100" y1="100" x2="100" y2="35" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
                <polygon points="100,30 97,38 103,38" fill="#c9a84c" />
              </g>
              <text x="100" y="110" textAnchor="middle" fontSize="12" fill="#b89fd4">{score}/60</text>
            </svg>

            <h2 className={`rq-level-status ${passed ? 'rq-level-status--passed' : 'rq-level-status--failed'}`}>
              {passed ? 'Level Passed' : 'Not Passed Yet'}
            </h2>

            {passed ? (
              <>
                <p className="rq-level-message">Congratulations. You have unlocked the next level.</p>
                <button className="rq-continue-btn" onClick={handleLevelPassed}>
                  {currentLevel === 3 ? 'View Final Results' : `Continue to Level ${currentLevel + 1}`}
                </button>
              </>
            ) : (
              <>
                <p className="rq-level-message">Score 38 or higher to pass. You are building these skills.</p>
                <button className="rq-continue-btn" onClick={handleLevelRetry}>
                  Retry Level {currentLevel}
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    )
  }

  // ── Final Results screen ──────────────────────────────────────────────────
  if (phase === 'finalResults') {
    const score1 = levelScores[1]
    const score2 = levelScores[2]
    const score3 = levelScores[3]
    const allThreePassed = score1 >= 52 && score2 >= 52 && score3 >= 52
    const level3Passed = score3 >= 52
    const level2Passed = score2 >= 52
    const level1Passed = score1 >= 52

    let ratingTitle = ''
    let ratingDesc = ''

    if (level3Passed) {
      ratingTitle = 'Mastery'
      ratingDesc = 'You have developed an exceptional ability to read and respond to each other. The subtlest signals do not escape you and you communicate with extraordinary depth and nuance.'
    } else if (level2Passed) {
      ratingTitle = 'Depth'
      ratingDesc = 'Your connection goes well beyond the surface. You read each other emotionally and you are building genuine attunement. This is a strong and authentic bond.'
    } else if (level1Passed) {
      ratingTitle = 'Foundation'
      ratingDesc = 'You have a solid base to build on. The physical and emotional foundation between you is present and can grow with intention and awareness.'
    } else {
      ratingTitle = 'Growing'
      ratingDesc = 'Every great relationship starts somewhere. You are at the beginning of this journey. Keep building and prioritising connection.'
    }

    async function handleShare() {
      const shareText = `I scored ${totalScore}/180 on the Relationship Mastery Test: ${ratingTitle}. How deeply do you know your partner. Find out at bodylanguageiq.com/relationship-quiz`
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

    const maxNeedle = getNeedleRotation(totalScore, 180)

    return (
      <div className="rq-container" style={{ backgroundColor }}>
        <main className="rq-page">
          <div className="rq-results">
            <svg className="rq-meter rq-meter--large" viewBox="0 0 200 120">
              <defs>
                <linearGradient id="meterGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(201, 168, 76, 0.2)" />
                  <stop offset="100%" stopColor="rgba(201, 168, 76, 0.4)" />
                </linearGradient>
              </defs>
              <path d="M 30 100 A 70 70 0 0 1 170 100" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="3" fill="none" />
              <circle cx="100" cy="100" r="6" fill="#c9a84c" />
              <g className="rq-needle" style={{ transform: `rotate(${maxNeedle}deg)`, transformOrigin: '100px 100px' }}>
                <line x1="100" y1="100" x2="100" y2="35" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
                <polygon points="100,30 97,38 103,38" fill="#c9a84c" />
              </g>
              <text x="100" y="110" textAnchor="middle" fontSize="12" fill="#b89fd4">{totalScore}/180</text>
            </svg>

            {allThreePassed && (
              <h1 className="rq-congratulations">Congratulations You Are Soul Mates</h1>
            )}

            {!allThreePassed && (
              <>
                <h1 className="rq-results-title">{ratingTitle}</h1>
                <p className="rq-results-desc">{ratingDesc}</p>
              </>
            )}

            <div className="rq-level-breakdown">
              <div className="rq-level-score">
                <span className="rq-level-label">Level 1</span>
                <span className={`rq-level-value ${score1 >= 38 ? 'rq-passed' : ''}`}>{score1}/60</span>
              </div>
              <div className="rq-level-score">
                <span className="rq-level-label">Level 2</span>
                <span className={`rq-level-value ${score2 >= 38 ? 'rq-passed' : ''}`}>{score2 >= 38 ? `${score2}/60` : 'Locked'}</span>
              </div>
              <div className="rq-level-score">
                <span className="rq-level-label">Level 3</span>
                <span className={`rq-level-value ${score3 >= 38 ? 'rq-passed' : ''}`}>{score3 >= 38 ? `${score3}/60` : 'Locked'}</span>
              </div>
            </div>

            <div className="rq-results-actions">
              <button className="rq-results-btn rq-results-btn--primary" onClick={handleShare}>
                {shareSuccess ? '✓ Copied to Clipboard' : 'Share Your Result'}
              </button>
              <button className="rq-results-btn rq-results-btn--secondary" onClick={handleCompare}>
                {compareSuccess ? '✓ Link Copied' : 'Compare With Your Partner'}
              </button>
              <button className="rq-results-btn rq-results-btn--secondary" onClick={handleRestart}>
                Start Over
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // ── Questions screen ──────────────────────────────────────────────────────
  const questions = getShuffledQuestions(currentLevel)
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="rq-container" style={{ backgroundColor }}>
      <main className="rq-page">
        <div className="rq-quiz">
          <div className="rq-gauge-container">
            <svg className="rq-gauge" viewBox="0 0 200 120">
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
              </defs>
              <path d="M 30 100 A 70 70 0 0 0 100 30" stroke="url(#redGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M 100 30 A 70 70 0 0 0 170 100" stroke="url(#greenGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <circle cx="100" cy="100" r="5" fill="var(--card)" stroke="var(--gold)" strokeWidth="2" />
              <g className="rq-gauge-needle" style={{ transform: `rotate(${gaugeNeedleAngle}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <line x1="100" y1="100" x2="100" y2="30" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                <polygon points="100,22 97,32 103,32" fill="var(--gold)" />
              </g>
            </svg>
          </div>

          <div className="rq-level-info">
            <span className="rq-level-title">Level {currentLevel}: {LEVELS[currentLevel].name}</span>
            <span className="rq-question-count">Question {currentQuestion + 1} of 15</span>
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
    </div>
  )
}
