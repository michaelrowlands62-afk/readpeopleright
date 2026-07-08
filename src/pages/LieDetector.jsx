import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LieDetector.css'

const SCENARIOS = [
  {
    id: 1,
    type: 'Workplace',
    text: 'During a performance review your manager tells you "I think you are doing a really great job and we value you enormously here." As she speaks her smile appears a half second after her words rather than simultaneously, she briefly touches her collarbone and her eyes move upward and to the right before returning to eye contact.',
    answer: 'LIE',
    explanation: 'A genuine emotional expression appears simultaneously with the words that express it. A smile that arrives after the statement has already been delivered suggests it was constructed rather than felt. The collarbone touch signals self soothing anxiety and the upward eye movement suggests visual construction rather than genuine recall.',
  },
  {
    id: 2,
    type: 'Relationship',
    text: 'You ask your partner if they are annoyed about something. They reply "No I am absolutely fine, everything is great." Their arms are loosely at their sides, they maintain comfortable eye contact, their expression is relaxed and their voice is even and unhurried.',
    answer: 'TRUTH',
    explanation: 'This is a genuinely truthful response. Open arms, comfortable eye contact and an unhurried voice are all consistent with genuine calm. There are no self soothing gestures, no timing mismatches between words and expression, and no avoidance signals. Sometimes fine really does mean fine.',
  },
  {
    id: 3,
    type: 'Social',
    text: 'A friend tells you they loved your presentation and found it really inspiring. As they say this they nod their head in agreement, their eyes are fully crinkled with a warm genuine smile, they lean slightly toward you and their voice rises naturally with enthusiasm.',
    answer: 'TRUTH',
    explanation: 'Multiple genuine engagement signals appearing together make this a reliable truthful response. The Duchenne smile involving the eye muscles cannot be easily faked. Natural vocal enthusiasm, forward lean and nodding all reinforce each other. This is what genuine positive feeling looks like in the body.',
  },
  {
    id: 4,
    type: 'Workplace',
    text: 'A colleague tells you they did not send the email you are looking for and they have no idea what happened to it. As they speak they briefly touch their nose, clear their throat before answering and their blink rate visibly increases compared to the rest of the conversation.',
    answer: 'LIE',
    explanation: 'Three stress signals appearing together in response to a specific question is a significant cluster. Nose touching is associated with physiological changes caused by stress and deception. Throat clearing suggests tension and the sudden increase in blink rate indicates cognitive and emotional overload. The cluster appearing specifically in response to this question rather than throughout the conversation is the key indicator.',
  },
  {
    id: 5,
    type: 'Relationship',
    text: 'Your partner says they are not bothered about missing the event you forgot to tell them about. Their jaw is visibly tight, their lips are pressed together in a thin line, their arms are crossed firmly and they give a single short nod before looking away.',
    answer: 'LIE',
    explanation: 'This is a classic suppression cluster. The words say one thing while four separate body language signals simultaneously contradict them. A tight jaw signals suppressed emotion, pressed lips indicate withheld words, crossed arms create a self protective barrier and the gaze aversion after the statement avoids further scrutiny. When this many signals appear together the body is telling a very different story from the words.',
  },
  {
    id: 6,
    type: 'Social',
    text: 'Someone you have just met at a party claims to be a doctor. They maintain steady eye contact throughout, speak at an unhurried measured pace, hold an open relaxed posture and do not hesitate before answering your follow up questions.',
    answer: 'TRUTH',
    explanation: 'Consistent steady signals throughout a conversation rather than only appearing in response to specific questions suggest a genuine baseline rather than managed deception. The unhurried pace and lack of hesitation on follow up questions are particularly significant — liars often struggle with unexpected detail questions but this person answers smoothly and consistently.',
  },
  {
    id: 7,
    type: 'Workplace',
    text: 'Your colleague says they finished their section of the project on time. As they say this they lean back slightly away from you, their feet angle toward the door, they give a small partial shrug and their voice drops slightly in volume on the word time.',
    answer: 'LIE',
    explanation: 'Leaning away and foot orientation toward an exit are withdrawal signals indicating a desire to distance from the statement being made. The partial shrug is a classic uncertainty signal — the body is expressing doubt even as the words claim certainty. The vocal drop specifically on the key word of the sentence is a subtle but significant tell.',
  },
  {
    id: 8,
    type: 'Relationship',
    text: 'Your partner tells you they have been feeling a bit low lately but they are okay. Their shoulders are slightly dropped, their voice is quieter than usual, they make eye contact but it is soft and slightly tired, and they give a small genuine sad smile as they finish speaking.',
    answer: 'TRUTH',
    explanation: 'This is a genuinely truthful and emotionally congruent response. The dropped shoulders, quieter voice and tired eye contact are all consistent with the stated feeling of being low. The sad smile is a real mixed emotional expression — someone acknowledging a difficult feeling while also trying to reassure you. Everything is consistent with the words spoken.',
  },
  {
    id: 9,
    type: 'Social',
    text: 'Someone tells you they are completely relaxed about public speaking and actually enjoy it. As they say this they repeatedly tap their fingers on the table, their breathing is visibly shallow and rapid, and they touch their hair twice before finishing the sentence.',
    answer: 'LIE',
    explanation: 'Three simultaneous self soothing and stress signals while claiming to feel relaxed is a clear contradiction between words and body. Finger tapping releases nervous energy, shallow rapid breathing is a direct physiological stress response, and hair touching is a self comfort gesture. The body is revealing the anxiety that the words are attempting to conceal.',
  },
  {
    id: 10,
    type: 'Workplace',
    text: 'Your boss tells you the company is in excellent financial health and there is nothing to worry about. They maintain strong direct eye contact throughout, speak clearly and confidently, use open hand gestures and their expression remains consistently calm and assured.',
    answer: 'LIE',
    explanation: 'This is the hardest scenario because the body language appears confident and open. However deliberately maintained eye contact that never breaks is itself a signal worth noting — genuine comfort produces natural eye contact with occasional breaks, not sustained unblinking focus. Overly consistent body language that never varies can indicate a carefully managed performance rather than genuine ease. Sometimes the most dangerous liars are those who have learned to control their signals.',
  },
]

const ICON_MAP = {
  'Workplace': '💼',
  'Relationship': '❤️',
  'Social': '💬',
}

export default function LieDetector() {
  const [state, setState] = useState('intro')
  const [currentScenario, setCurrentScenario] = useState(0)
  const [answers, setAnswers] = useState({})
  const [revealingAnswer, setRevealingAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [flashVisible, setFlashVisible] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const navigate = useNavigate()

  function handleStartTest() {
    setState('scenario')
  }

  function handleAnswer(selectedAnswer) {
    if (revealingAnswer) return

    const scenario = SCENARIOS[currentScenario]
    const correct = selectedAnswer === scenario.answer

    setUserAnswer(selectedAnswer)
    setIsCorrect(correct)
    setFlashVisible(true)

    setTimeout(() => {
      setFlashVisible(false)
      setRevealingAnswer(true)

      setTimeout(() => {
        setAnswers({
          ...answers,
          [currentScenario]: selectedAnswer === scenario.answer ? 1 : 0,
        })
      }, 500)
    }, 400)
  }

  function handleContinue() {
    if (currentScenario < SCENARIOS.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setRevealingAnswer(null)
      setUserAnswer(null)
      setIsCorrect(false)
      setState('scenario')
    } else {
      setState('results')
    }
  }

  function handleRetry() {
    setCurrentScenario(0)
    setAnswers({})
    setRevealingAnswer(null)
    setUserAnswer(null)
    setIsCorrect(false)
    setState('intro')
  }

  async function handleShare() {
    const score = Object.values(answers).reduce((a, b) => a + b, 0)
    const shareText = `I scored ${score} out of 10 on the BodyLanguageIQ Lie Detector Test. Can you beat me? bodylanguageiq.com/lie-detector`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (state === 'intro') {
    return (
      <main className="lie-detector">
        <div className="ld-intro">
          <div className="ld-ecg-container">
            <svg className="ld-ecg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <polyline
                points="0,50 50,50 75,30 100,70 125,50 150,50 200,50 225,30 250,70 275,50 300,50 350,50 375,30 400,70 425,50 450,50 500,50 525,30 550,70 575,50 600,50 650,50 675,30 700,70 725,50 750,50 800,50 825,30 850,70 875,50 900,50 950,50 975,30 1000,70"
                strokeWidth="3"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <h1 className="ld-intro-title">Lie Detector Test</h1>
          <p className="ld-intro-subtitle">
            Think you can spot a liar? Most people can't. 10 scenarios. Truth or Lie. Prove us wrong.
          </p>

          <button className="ld-start-btn" onClick={handleStartTest}>
            Start Test
          </button>

          <p className="ld-intro-note">Based on real body language psychology.</p>
        </div>
      </main>
    )
  }

  if (state === 'scenario') {
    const scenario = SCENARIOS[currentScenario]
    const progress = ((currentScenario + 1) / SCENARIOS.length) * 100

    return (
      <main className="lie-detector">
        <div className="ld-scenario-wrapper">
          <div className={`ld-flash ${flashVisible ? (isCorrect ? 'ld-flash--correct' : 'ld-flash--wrong') : ''}`} />

          <div className="ld-scenario-header">
            <div className="ld-scenario-meta">
              <span className="ld-scenario-icon">{ICON_MAP[scenario.type]}</span>
              <span className="ld-scenario-type">{scenario.type}</span>
            </div>
            <div className="ld-scenario-progress">
              <span className="ld-scenario-number">Scenario {currentScenario + 1}/10</span>
              <div className="ld-suspicion-meter">
                <div
                  className="ld-suspicion-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="ld-scenario-card">
            {!revealingAnswer && (
              <p className="ld-scenario-text">{scenario.text}</p>
            )}

            {!revealingAnswer && (
              <>
                <div className="ld-needle-container">
                  <svg className="ld-needle" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M 20 80 Q 100 20 180 80" stroke="var(--gold)" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="80" r="6" fill="var(--gold)" />
                    <g className="ld-needle-indicator">
                      <line x1="100" y1="80" x2="100" y2="40" stroke="var(--gold)" strokeWidth="2" />
                      <polygon points="100,30 95,40 105,40" fill="var(--gold)" />
                    </g>
                  </svg>
                </div>

                <div className="ld-buttons">
                  <button
                    className="ld-btn ld-btn--truth"
                    onClick={() => handleAnswer('TRUTH')}
                  >
                    TRUTH
                  </button>
                  <button
                    className="ld-btn ld-btn--lie"
                    onClick={() => handleAnswer('LIE')}
                  >
                    LIE
                  </button>
                </div>
              </>
            )}

            {revealingAnswer && (
              <div className="ld-reveal">
                <h2 className={`ld-reveal-status ${isCorrect ? 'ld-reveal-status--correct' : 'ld-reveal-status--wrong'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Wrong'}
                </h2>

                <div className="ld-reveal-answer">
                  <p className="ld-reveal-label">The answer was:</p>
                  <p className={`ld-reveal-value ${scenario.answer === 'TRUTH' ? 'ld-reveal-value--truth' : 'ld-reveal-value--lie'}`}>
                    {scenario.answer}
                  </p>
                </div>

                <div className="ld-reveal-explanation">
                  <p className="ld-explanation-text">{scenario.explanation}</p>
                </div>

                <button className="ld-continue-btn" onClick={handleContinue}>
                  {currentScenario === SCENARIOS.length - 1 ? 'See Results' : 'Next Scenario'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    )
  }

  if (state === 'results') {
    const score = Object.values(answers).reduce((a, b) => a + b, 0)

    let rating = ''
    let ratingText = ''

    if (score >= 9) {
      rating = 'Human Lie Detector'
      ratingText = 'You have an exceptional ability to read deception signals. Less than 5 percent of people score this high.'
    } else if (score >= 7) {
      rating = 'Sharp Observer'
      ratingText = 'You read people well and catch signals others miss.'
    } else if (score >= 5) {
      rating = 'Average Reader'
      ratingText = 'You spot the obvious lies but the subtle ones slip through.'
    } else if (score >= 3) {
      rating = 'Easily Fooled'
      ratingText = 'Most liars would get away with it around you for now.'
    } else {
      rating = 'The Lie Detector Fooled You'
      ratingText = 'Even the obvious ones slipped past. Time to study up.'
    }

    return (
      <main className="lie-detector">
        <div className="ld-results">
          <div className="ld-polygraph-container">
            <svg className="ld-polygraph" viewBox="0 0 1000 150" preserveAspectRatio="none">
              <polyline
                points="0,75 50,75 75,55 100,95 125,75 150,75 200,75 225,55 250,95 275,75 300,75 350,75 375,55 400,95 425,75 450,75 500,75 525,55 550,95 575,75 600,75 650,75 675,55 700,95 725,75 750,75 800,75 825,55 850,95 875,75 900,75 950,75 975,55 1000,95"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <h1 className="ld-results-title">Your Score</h1>
          <div className="ld-score-display">
            <span className="ld-score-value">{score}</span>
            <span className="ld-score-max">out of 10</span>
          </div>

          <h2 className="ld-rating">{rating}</h2>
          <p className="ld-rating-text">{ratingText}</p>

          <div className="ld-results-actions">
            <button className="ld-results-btn ld-results-btn--primary" onClick={handleShare}>
              {shareSuccess ? '✓ Copied to Clipboard' : 'Share Result'}
            </button>
            <button className="ld-results-btn ld-results-btn--secondary" onClick={handleRetry}>
              Try Again
            </button>
            <button
              className="ld-results-btn ld-results-btn--secondary"
              onClick={() => navigate('/episodes')}
            >
              Play More Games
            </button>
          </div>
        </div>
      </main>
    )
  }
}

