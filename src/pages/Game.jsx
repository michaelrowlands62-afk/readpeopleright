import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { EPISODES } from '../data/episodes'
import './Game.css'

const TIMER_SECONDS       = 20
const POINTS_PER_QUESTION = 10
const RADIUS              = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const DIFFICULTY_CONFIG = {
  beginner:     { label: 'Beginner',     hint: 'Clear, obvious signals',          cls: 'diff-btn--beginner'     },
  intermediate: { label: 'Intermediate', hint: 'Standard body language reading',  cls: 'diff-btn--intermediate' },
  advanced:     { label: 'Advanced',     hint: 'Subtle cues and fine detail',      cls: 'diff-btn--advanced'     },
  expert:       { label: 'Expert',       hint: 'Nuanced, easily confused signals', cls: 'diff-btn--expert'       },
}

export default function Game() {
  const [searchParams] = useSearchParams()
  const episodeId = parseInt(searchParams.get('episode'), 10) || 1
  const episode   = EPISODES.find((e) => e.id === episodeId) ?? EPISODES[0]
  const hasDifficultyMode = !!episode.questionsByDifficulty
  const [difficulty,    setDifficulty]  = useState(null)
  const QUESTIONS = hasDifficultyMode
    ? (difficulty ? episode.questionsByDifficulty[difficulty] : episode.questionsByDifficulty.intermediate)
    : episode.questions
  const [phase,        setPhase]        = useState('start')   // 'start' | 'difficulty' | 'playing' | 'results'
  const [qIndex,       setQIndex]       = useState(0)
  const [selected,     setSelected]     = useState(null)
  const [answered,     setAnswered]     = useState(false)
  const [timeLeft,     setTimeLeft]     = useState(TIMER_SECONDS)
  const [score,        setScore]        = useState(0)
  const [streak,       setStreak]       = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [lastEarned,   setLastEarned]   = useState(0)
  const [ytMode,       setYtMode]       = useState(false)

  const timerRef    = useRef(null)
  const startRef    = useRef(null)
  const answeredRef = useRef(false)
  const timeLeftRef = useRef(TIMER_SECONDS)

  // Refs for animating stat counters
  const scoreElRef  = useRef(null)
  const streakElRef = useRef(null)

  // Pulse score when it changes
  useEffect(() => {
    if (!scoreElRef.current || score === 0) return
    const el = scoreElRef.current
    el.classList.remove('stat-pulse')
    void el.offsetWidth // reflow to restart animation
    el.classList.add('stat-pulse')
  }, [score])

  // Pulse streak when it changes
  useEffect(() => {
    if (!streakElRef.current || streak === 0) return
    const el = streakElRef.current
    el.classList.remove('stat-pulse')
    void el.offsetWidth
    el.classList.add('stat-pulse')
  }, [streak])

  // Start / restart timer on each new question
  useEffect(() => {
    if (phase !== 'playing') return

    answeredRef.current = false
    timeLeftRef.current = TIMER_SECONDS
    setSelected(null)
    setAnswered(false)
    setLastEarned(0)
    setTimeLeft(TIMER_SECONDS)

    startRef.current = performance.now()

    function tick(now) {
      const remaining = Math.max(0, TIMER_SECONDS - (now - startRef.current) / 1000)
      setTimeLeft(remaining)
      timeLeftRef.current = remaining

      if (remaining > 0) {
        timerRef.current = requestAnimationFrame(tick)
      } else if (!answeredRef.current) {
        answeredRef.current = true
        setAnswered(true)
        setStreak(0)
      }
    }

    timerRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(timerRef.current)
  }, [qIndex, phase])

  function handleAnswer(idx) {
    if (answeredRef.current) return
    answeredRef.current = true
    cancelAnimationFrame(timerRef.current)

    const snapped = timeLeftRef.current
    const q = QUESTIONS[qIndex]

    setSelected(idx)
    setAnswered(true)
    setTimeLeft(snapped)

    if (idx === q.correct) {
      const earned = POINTS_PER_QUESTION
      setScore(s => s + earned)
      setLastEarned(earned)
      setStreak(s => s + 1)
      setCorrectCount(c => c + 1)
    } else {
      setLastEarned(0)
      setStreak(0)
    }
  }

  function handleNext() {
    cancelAnimationFrame(timerRef.current)
    if (qIndex + 1 >= QUESTIONS.length) {
      setPhase('results')
    } else {
      setQIndex(i => i + 1)
    }
  }

  function handleRestart() {
    setQIndex(0)
    setScore(0)
    setStreak(0)
    setCorrectCount(0)
    setLastEarned(0)
    if (hasDifficultyMode) {
      setDifficulty(null)
      setPhase('difficulty')
    } else {
      setPhase('playing')
    }
  }

  function toggleYt(on) {
    setYtMode(on)
    if (on) document.documentElement.requestFullscreen?.().catch(() => {})
    else     document.exitFullscreen?.().catch(() => {})
  }

  // ── Start screen ─────────────────────────────────────────────────────────
  if (phase === 'start') {
    const maxPts = QUESTIONS.length * POINTS_PER_QUESTION
    return (
      <div className="game">
        <header className="game-bar">
          <span className="game-episode">{episode.title}</span>
          <span className="game-badge">{episode.category}</span>
          <div className="game-bar-right" />
        </header>
        <div className="start-screen">
          <p className="start-label">{episode.category}</p>
          <h1 className="start-title">{episode.title}</h1>
          <p className="start-desc">
            Test your people-reading skills across {QUESTIONS.length} questions.
            Answer fast — your score depends on how much time you have left.
          </p>
          <div className="start-specs">
            <span>{QUESTIONS.length} Questions</span>
            <span className="start-dot" aria-hidden="true">·</span>
            <span>20 Seconds Each</span>
            <span className="start-dot" aria-hidden="true">·</span>
            <span>Up to {maxPts.toLocaleString()} pts</span>
          </div>
          <button className="start-btn" onClick={() => setPhase(hasDifficultyMode ? 'difficulty' : 'playing')}>
            Start Game
          </button>
        </div>
      </div>
    )
  }

  // ── Difficulty selection ──────────────────────────────────────────────────
  if (phase === 'difficulty') {
    return (
      <div className="game">
        <header className="game-bar">
          <span className="game-episode">{episode.title}</span>
          <span className="game-badge">{episode.category}</span>
          <div className="game-bar-right" />
        </header>
        <div className="diff-screen">
          <p className="diff-label">Choose Your Level</p>
          <h1 className="diff-title">{episode.title}</h1>
          <p className="diff-subtitle">Select a difficulty to begin</p>
          <div className="diff-grid">
            {Object.entries(DIFFICULTY_CONFIG).map(([key, cfg]) => (
              <button
                key={key}
                className={`diff-btn ${cfg.cls}`}
                onClick={() => { setDifficulty(key); setPhase('playing') }}
              >
                <span className="diff-btn-label">{cfg.label}</span>
                <span className="diff-btn-hint">{cfg.hint}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (phase === 'results') {
    const maxScore = QUESTIONS.length * POINTS_PER_QUESTION
    const pct      = Math.round((score / maxScore) * 100)
    const grade    = pct >= 90 ? 'Expert Reader'
                   : pct >= 70 ? 'Skilled Observer'
                   : pct >= 50 ? 'Learning the Cues'
                   :             'Novice — Keep Practising'

    return (
      <div className="game">
        <header className="game-bar">
          <span className="game-episode">{episode.title}</span>
          <span className="game-badge">{episode.category}</span>
          <div className="game-bar-right">
            <div className="game-stats">
              <div className="game-stat">
                <span className="game-stat-label">Final Score</span>
                <span className="game-stat-value">{score}</span>
              </div>
              <div className="game-stat">
                <span className="game-stat-label">Correct</span>
                <span className="game-stat-value">{correctCount}/{QUESTIONS.length}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="results">
          <div className="results-icon" aria-hidden="true">🎯</div>
          <h1 className="results-title">Episode Complete</h1>
          <p className="results-grade">{grade}</p>

          <div className="results-score-wrap">
            <span className="results-score-value">{score}</span>
            <span className="results-score-label">/ {maxScore} pts</span>
          </div>

          <div className="results-row">
            <div className="results-stat">
              <span className="results-stat-value">{correctCount}/{QUESTIONS.length}</span>
              <span className="results-stat-label">Correct</span>
            </div>
            <div className="results-divider" />
            <div className="results-stat">
              <span className="results-stat-value">{pct}%</span>
              <span className="results-stat-label">Efficiency</span>
            </div>
            <div className="results-divider" />
            <div className="results-stat">
              <span className="results-stat-value">{maxScore - score}</span>
              <span className="results-stat-label">Pts left</span>
            </div>
          </div>

          <button className="results-btn" onClick={handleRestart}>
            Play Again
          </button>
        </div>
      </div>
    )
  }

  // ── Playing ───────────────────────────────────────────────────────────────
  const q           = QUESTIONS[qIndex]
  const dashOffset  = CIRCUMFERENCE * (1 - timeLeft / TIMER_SECONDS)
  const clockColor  = timeLeft < 5 ? '#e05555' : '#c9a84c'
  const displayTime = Math.min(TIMER_SECONDS, Math.ceil(timeLeft))
  const isCorrect   = selected === q.correct
  const timedOut  = answered && selected === null
  const isLast    = qIndex === QUESTIONS.length - 1

  return (
    <div className={`game${ytMode ? ' game--yt' : ''}`}>

      {/* TOP BAR */}
      {!ytMode && (
        <header className="game-bar">
          <span className="game-episode">{episode.title}</span>
          <span className="game-badge">{episode.category}</span>
          <div className="game-bar-right">
            <div className="game-stats">
              <div className="game-stat">
                <span className="game-stat-label">Score</span>
                <span ref={scoreElRef} className="game-stat-value">{score}</span>
              </div>
              <div className="game-stat">
                <span className="game-stat-label">Streak</span>
                <span ref={streakElRef} className="game-stat-value">
                  {streak > 0 ? `${streak} 🔥` : '–'}
                </span>
              </div>
            </div>
            <label className="game-yt-toggle" title="YouTube overlay mode">
              <span className="game-yt-label">YT Mode</span>
              <span className="switch">
                <input
                  type="checkbox"
                  className="switch-input"
                  checked={ytMode}
                  onChange={e => toggleYt(e.target.checked)}
                />
                <span className="switch-track"><span className="switch-knob" /></span>
              </span>
            </label>
          </div>
        </header>
      )}

      {/* QUESTION */}
      <div className="game-question">
        <p className="game-q-num">Question {qIndex + 1} of {QUESTIONS.length}</p>
        <h1 className="game-prompt">{q.prompt}</h1>
      </div>

      {/* MID: CLOCK LEFT + FIGURE RIGHT */}
      <div className="game-mid">
        <div className="game-clock-wrap">
          <svg className="game-clock-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={RADIUS} className="game-clock-track" />
            <circle
              cx="50" cy="50" r={RADIUS}
              className="game-clock-fill"
              style={{
                strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
                strokeDashoffset: dashOffset,
                stroke: clockColor,
              }}
              transform="rotate(-90 50 50)"
            />
            <text
              x="50" y="50"
              className="game-clock-num"
              style={{ fill: clockColor }}
            >
              {displayTime}
            </text>
          </svg>
        </div>
        <div className="game-figure">
          <SilhouetteSVG />
        </div>
      </div>

      {/* ANSWERS */}
      {!ytMode && (
        <div className="game-answers">
          {q.answers.map((ans, i) => {
            let cls = 'game-answer'
            if (answered) {
              if (i === q.correct)  cls += ' game-answer--correct'
              else if (i === selected) cls += ' game-answer--wrong'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleAnswer(i)}
                disabled={answered}
              >
                {ans}
              </button>
            )
          })}
        </div>
      )}

      {/* FACT PANEL + NEXT */}
      {!ytMode && answered && (
        <>
          <div className={`game-fact${isCorrect ? ' game-fact--correct' : timedOut ? '' : ' game-fact--wrong'}`}>
            <div className="game-fact-icon">
              {timedOut ? '⏱' : isCorrect ? '✓' : '✗'}
            </div>
            <div className="game-fact-content">
              <p className="game-fact-title">
                {timedOut
                  ? `Time's up · It was "${q.answers[q.correct]}"`
                  : isCorrect
                  ? `+${lastEarned} pts`
                  : `It was "${q.answers[q.correct]}"`}
              </p>
              <p className="game-fact-body">{q.fact}</p>
            </div>
          </div>

          <div className="game-next-wrap">
            <button className="game-next-btn" onClick={handleNext}>
              {isLast ? 'See Results' : 'Next Question'} →
            </button>
          </div>
        </>
      )}

      {/* YT EXIT */}
      {ytMode && (
        <button
          className="game-yt-exit"
          onClick={() => toggleYt(false)}
          aria-label="Exit YT Mode"
        >
          ✕
        </button>
      )}
    </div>
  )
}

function SilhouetteSVG() {
  return (
    <svg
      className="silhouette"
      viewBox="0 0 200 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Person silhouette"
      role="img"
    >
      <ellipse cx="100" cy="48" rx="36" ry="42" />
      <rect x="87" y="85" width="26" height="18" rx="6" />
      <path d="M44 103 C39 168 38 218 40 272 L160 272 C162 218 161 168 156 103 C140 96 60 96 44 103Z" />
      <path d="M48 112 L14 208 L30 214 L62 124 Z" />
      <ellipse cx="22" cy="225" rx="10" ry="14" transform="rotate(-10 22 225)" />
      <path d="M152 112 L186 208 L170 214 L138 124 Z" />
      <ellipse cx="178" cy="225" rx="10" ry="14" transform="rotate(10 178 225)" />
      <path d="M70 270 L54 398 L80 400 L94 272 Z" />
      <ellipse cx="64" cy="406" rx="18" ry="8" />
      <path d="M130 270 L146 398 L120 402 L106 272 Z" />
      <ellipse cx="136" cy="406" rx="18" ry="8" />
    </svg>
  )
}
