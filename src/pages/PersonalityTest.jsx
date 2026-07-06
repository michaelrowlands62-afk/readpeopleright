import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PersonalityTest.css'

const QUESTIONS = [
  {
    id: 1,
    text: 'When you walk into a room full of strangers you typically:',
    answers: [
      { text: 'Scan the room confidently and approach someone', type: 'Authority' },
      { text: 'Hang back and wait to see what happens', type: 'Protector' },
      { text: 'Find a friendly face and move toward them', type: 'Connector' },
      { text: 'Find something to do with your hands while you settle in', type: 'Observer' },
    ],
  },
  {
    id: 2,
    text: 'When listening to someone speak your natural response is:',
    answers: [
      { text: 'Maintain steady eye contact and nod occasionally', type: 'Connector' },
      { text: 'Watch their body language more than their words', type: 'Observer' },
      { text: 'Use animated facial expressions to show you are engaged', type: 'Performer' },
      { text: 'Keep your expression neutral and controlled', type: 'Diplomat' },
    ],
  },
  {
    id: 3,
    text: 'When you are nervous your body language tends to:',
    answers: [
      { text: 'Become very still and controlled', type: 'Diplomat' },
      { text: 'Close up — crossed arms, less eye contact', type: 'Protector' },
      { text: 'Become more animated and louder than usual', type: 'Performer' },
      { text: 'Stay steady — you rarely show nerves physically', type: 'Authority' },
    ],
  },
  {
    id: 4,
    text: 'When meeting someone new you tend to:',
    answers: [
      { text: 'Make strong eye contact and offer a firm handshake', type: 'Authority' },
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
      { text: 'Listen carefully and speak when you have something valuable to add', type: 'Observer' },
      { text: 'Make sure everyone feels included and heard', type: 'Connector' },
      { text: 'Read the room before deciding how much to contribute', type: 'Diplomat' },
    ],
  },
  {
    id: 6,
    text: 'What do you naturally do with your hands when talking:',
    answers: [
      { text: 'Gesture freely and expressively', type: 'Performer' },
      { text: 'Keep them relaxed and open at your sides', type: 'Connector' },
      { text: 'Clasp them or keep them controlled', type: 'Protector' },
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
      { text: 'Stays open — you believe in honest calm discussion', type: 'Connector' },
      { text: 'Becomes more upright and direct', type: 'Authority' },
      { text: 'Closes slightly — you find conflict uncomfortable', type: 'Protector' },
      { text: 'Remains carefully neutral — you rarely reveal your true reaction', type: 'Diplomat' },
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
    text: 'When you are in your element and feeling confident your body language:',
    answers: [
      { text: 'Opens up — wider stance, more gestures, more eye contact', type: 'Performer' },
      { text: 'Becomes very still and commanding', type: 'Authority' },
      { text: 'Stays consistently warm and engaged', type: 'Connector' },
      { text: 'Relaxes visibly — you naturally mirror others more', type: 'Diplomat' },
    ],
  },
]

const PERSONALITY_TYPES = {
  Connector: {
    name: 'Connector',
    tagline: 'The warm heart that draws people in',
    description: 'You radiate warmth and people feel instantly at ease around you. Your body language is naturally open, engaged and inviting. You make eye contact with genuine warmth, face people directly and your smile reaches your eyes.',
    strength: 'People trust you quickly and feel heard in your presence.',
    blindSpot: 'You can sometimes come across as too intense or overly familiar with more reserved personalities.',
    tips: [
      'Be mindful of personal space with people who need more distance.',
      'Practice reading when someone needs space versus connection.',
      'Your warmth is your superpower — use it intentionally in high stakes situations.',
    ],
  },
  Observer: {
    name: 'Observer',
    tagline: 'The silent reader who misses nothing',
    description: 'You are a quiet and powerful reader of people. While others talk you watch, and you rarely miss a thing. Your body language is controlled and deliberate — you take up little space and reveal little, which makes you excellent at gathering information.',
    strength: 'You see what others miss and your insights are usually accurate.',
    blindSpot: 'People can misread your stillness as coldness or disinterest.',
    tips: [
      'Add small engagement signals like nodding or leaning in slightly to show you are present.',
      'Make slightly more eye contact than feels natural to you.',
      'Share your observations more — people will value them enormously.',
    ],
  },
  Performer: {
    name: 'Performer',
    tagline: 'The natural presence that fills the room',
    description: 'You have natural stage presence and your body language fills a room. Expressive, animated and energetic, you draw people in and make conversations memorable.',
    strength: 'You are engaging, entertaining and make a strong first impression.',
    blindSpot: 'Your expressiveness can sometimes overwhelm quieter personalities or cause you to miss subtle signals from others.',
    tips: [
      'Practice moments of stillness — pausing creates impact.',
      'Watch for signs that others need more space to contribute.',
      'Channel your energy deliberately in formal or high stakes situations.',
    ],
  },
  Diplomat: {
    name: 'Diplomat',
    tagline: 'The adaptive chameleon who reads every room',
    description: 'You are a natural chameleon who reads the room and adapts instinctively. Your body language mirrors others, reveals little and keeps people comfortable.',
    strength: 'You move fluidly between different social situations and rarely cause offence.',
    blindSpot: 'Your adaptability can make you seem difficult to read or even untrustworthy to people who prefer directness.',
    tips: [
      'Let your genuine reactions show more — vulnerability builds trust.',
      'In close relationships, practise being more emotionally readable.',
      'Use your mirroring skill deliberately in negotiations and difficult conversations.',
    ],
  },
  Protector: {
    name: 'Protector',
    tagline: 'The careful guardian of trust',
    description: 'Your body language tends toward the guarded and private. You take time to open up and your default is to observe before engaging. This is often misread as unfriendliness when in reality you are simply selective about who receives your trust.',
    strength: 'When you do open up, people feel genuinely chosen and valued.',
    blindSpot: 'Your closed body language can cost you opportunities before you get a chance to show your real self.',
    tips: [
      'Practice one open body language signal in new situations — uncrossed arms or a genuine smile on arrival.',
      'Make eye contact slightly earlier than feels comfortable.',
      'Remember that first impressions are formed in seconds — give yours a head start.',
    ],
  },
  Authority: {
    name: 'Authority',
    tagline: 'The commanding presence people follow',
    description: 'You carry natural command presence. Your posture is upright, your eye contact steady and your movements deliberate. People take you seriously without you having to demand it.',
    strength: 'You project confidence and competence even under pressure.',
    blindSpot: 'Your natural presence can sometimes feel intimidating, making it harder for others to approach you or disagree with you openly.',
    tips: [
      'Soften your entry into new situations with a genuine warm smile.',
      'Consciously create space for others to speak — your silence can feel like judgement.',
      'Show vulnerability occasionally — it makes your authority feel human rather than distant.',
    ],
  },
}

export default function PersonalityTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [shareSuccess, setShareSuccess] = useState(false)
  const navigate = useNavigate()

  function handleAnswer(answerIndex) {
    const question = QUESTIONS[currentQuestion]
    const selectedAnswer = question.answers[answerIndex]

    const newAnswers = {
      ...answers,
      [question.id]: selectedAnswer.type,
    }
    setAnswers(newAnswers)

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Calculate result
      const typeCounts = {}
      Object.values(newAnswers).forEach(type => {
        typeCounts[type] = (typeCounts[type] || 0) + 1
      })

      const winner = Object.entries(typeCounts).reduce((a, b) =>
        b[1] > a[1] ? b : a
      )[0]

      setTimeout(() => {
        setResult(winner)
      }, 300)
    }
  }

  function handleRestart() {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setShareSuccess(false)
  }

  async function handleShare() {
    const shareText = `I just took the Body Language Personality Test and I am a ${result} — find out yours at bodylanguageiq.com`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (result) {
    const personality = PERSONALITY_TYPES[result]
    return (
      <main className="personality-test">
        <div className="pt-results">
          <h1 className="pt-results-title">Your Body Language Type</h1>
          <h2 className="pt-results-type">{personality.name}</h2>
          <p className="pt-results-tagline">{personality.tagline}</p>

          <div className="pt-results-section">
            <p className="pt-results-desc">{personality.description}</p>
          </div>

          <div className="pt-results-section">
            <h3 className="pt-results-heading">Your Strength</h3>
            <p className="pt-results-text">{personality.strength}</p>
          </div>

          <div className="pt-results-section">
            <h3 className="pt-results-heading">Your Blind Spot</h3>
            <p className="pt-results-text">{personality.blindSpot}</p>
          </div>

          <div className="pt-results-section">
            <h3 className="pt-results-heading">Three Tips for You</h3>
            <ul className="pt-results-tips">
              {personality.tips.map((tip, i) => (
                <li key={i} className="pt-results-tip">{tip}</li>
              ))}
            </ul>
          </div>

          <div className="pt-results-actions">
            <button className="pt-results-btn pt-results-btn--primary" onClick={handleShare}>
              {shareSuccess ? '✓ Copied to Clipboard' : 'Share Your Result'}
            </button>
            <button className="pt-results-btn pt-results-btn--secondary" onClick={handleRestart}>
              Take The Test Again
            </button>
            <button
              className="pt-results-btn pt-results-btn--secondary"
              onClick={() => navigate('/episodes')}
            >
              Play The Quiz
            </button>
          </div>
        </div>
      </main>
    )
  }

  const question = QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <main className="personality-test">
      <div className="pt-container">
        <div className="pt-header">
          <h1 className="pt-title">Body Language Personality Test</h1>
          <p className="pt-subtitle">Discover your natural body language style</p>
        </div>

        <div className="pt-progress-wrap">
          <div className="pt-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="pt-question-number">
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </div>

        <div className="pt-question">
          <h2 className="pt-question-text">{question.text}</h2>
        </div>

        <div className="pt-answers">
          {question.answers.map((answer, index) => {
            const letter = String.fromCharCode(65 + index)
            return (
              <button
                key={index}
                className="pt-answer"
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
