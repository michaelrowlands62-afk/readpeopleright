import { useState, useMemo } from 'react'
import './Dictionary.css'

const ENTRIES = [
  {
    name: "Adam's Apple Jump",
    description: 'A visible swallow or throat movement, often a sign of nervousness or suppressed emotion.',
    category: 'Stress Signals',
  },
  {
    name: 'Adaptor Gestures',
    description: 'Self-comforting behaviours like playing with jewellery, hair or clothing, typically signalling nervousness or a need to self-soothe.',
    category: 'Stress Signals',
  },
  {
    name: 'Arms Crossed',
    description: 'Often signals defensiveness or discomfort, though context matters as it can simply mean someone is cold or comfortable.',
    category: 'Defensive Signals',
  },
  {
    name: 'Asymmetrical Expression',
    description: 'When one side of the face shows more emotion than the other, often a sign that an expression is forced or insincere rather than spontaneous.',
    category: 'Deception Signals',
  },
  {
    name: 'Barrier Crossing',
    description: 'Reaching across the body to touch the opposite arm or shoulder, a subtle self-protective gesture.',
    category: 'Defensive Signals',
  },
  {
    name: 'Blinking Rate Increase',
    description: 'A rapid increase in blink rate can indicate stress, anxiety or cognitive overload.',
    category: 'Stress Signals',
  },
  {
    name: 'Body Orientation',
    description: "The direction someone's torso faces reveals genuine interest or attention, even when their face is turned elsewhere.",
    category: 'Engagement Signals',
  },
  {
    name: 'Brow Furrow',
    description: 'Drawing the eyebrows together signals confusion, concentration or mild displeasure.',
    category: 'Emotion Signals',
  },
  {
    name: 'Catapult Gesture',
    description: 'Pointing with extended fingers while speaking, often used to emphasise authority or assert a point forcefully.',
    category: 'Confidence Signals',
  },
  {
    name: 'Cheek Puffing',
    description: 'Briefly puffing out the cheeks before exhaling often signals relief, frustration or processing difficult information.',
    category: 'Emotion Signals',
  },
  {
    name: 'Chest Expansion',
    description: 'Puffing out the chest signals confidence, pride or an attempt to appear more dominant.',
    category: 'Confidence Signals',
  },
  {
    name: 'Chin Raise',
    description: 'Lifting the chin slightly signals confidence or even defiance, often seen before someone asserts themselves.',
    category: 'Confidence Signals',
  },
  {
    name: 'Crossed Ankles',
    description: 'Often a subtler version of crossed arms, indicating restraint or mild discomfort, especially common in formal settings.',
    category: 'Defensive Signals',
  },
  {
    name: 'Defensive Crossed Legs',
    description: 'Crossing the legs tightly while seated, often paired with crossed arms, reinforcing a closed, guarded posture.',
    category: 'Defensive Signals',
  },
  {
    name: 'Direct Eye Contact',
    description: 'Sustained, comfortable eye contact typically signals confidence, honesty and genuine engagement, though cultural norms vary widely.',
    category: 'Trust Signals',
  },
  {
    name: 'Duchenne Smile',
    description: 'A genuine smile that engages the muscles around the eyes, creating crinkles, distinguishing it from a polite or forced smile.',
    category: 'Emotion Signals',
  },
  {
    name: 'Earlobe Tugging',
    description: 'Pulling or touching the earlobe is a self-soothing gesture often signalling indecision or mild anxiety.',
    category: 'Stress Signals',
  },
  {
    name: 'Eye Block',
    description: 'Briefly closing the eyes for longer than a normal blink, often an unconscious attempt to block out something uncomfortable.',
    category: 'Stress Signals',
  },
  {
    name: 'Eye Contact Avoidance',
    description: 'Looking away during conversation can suggest discomfort, deception or simply social anxiety depending on context.',
    category: 'Deception Signals',
  },
  {
    name: 'Eyebrow Flash',
    description: 'A quick raise of both eyebrows, typically a fast, unconscious signal of recognition or interest when greeting someone.',
    category: 'Attraction Signals',
  },
  {
    name: 'Eyebrow Raise',
    description: 'Raising both eyebrows can signal surprise, interest or an attempt to appear more open and approachable.',
    category: 'Engagement Signals',
  },
  {
    name: 'Facial Symmetry Check',
    description: 'Comparing both sides of the face during an expression to assess authenticity, a technique used in deception detection.',
    category: 'Deception Signals',
  },
  {
    name: 'Finger Tapping',
    description: 'Rhythmic tapping of fingers usually signals impatience or restlessness.',
    category: 'Stress Signals',
  },
  {
    name: 'Foot Pointing',
    description: "The direction someone's feet point often reveals where their attention or interest truly lies, even when their upper body faces elsewhere.",
    category: 'Attraction Signals',
  },
  {
    name: 'Forward Lean',
    description: 'Leaning the upper body toward someone during conversation signals genuine interest and engagement.',
    category: 'Engagement Signals',
  },
  {
    name: 'Gaze Aversion',
    description: 'Deliberately looking away from someone, distinct from natural eye movement, often signalling discomfort or a desire to disengage.',
    category: 'Stress Signals',
  },
  {
    name: 'Genuine Surprise',
    description: 'A true surprise expression appears and fades within a second, while a faked one tends to linger noticeably longer.',
    category: 'Deception Signals',
  },
  {
    name: 'Genuine vs Forced Smile',
    description: 'A key distinction in reading sincerity, where forced smiles fail to reach the eyes and often appear asymmetrical.',
    category: 'Emotion Signals',
  },
  {
    name: 'Hair Touching',
    description: 'Repeatedly touching or twirling hair can signal nervousness, but in social contexts may also signal flirtation or attraction.',
    category: 'Attraction Signals',
  },
  {
    name: 'Hand on Heart',
    description: 'Placing a hand over the chest signals sincerity, emotional connection or reassurance.',
    category: 'Trust Signals',
  },
  {
    name: 'Hand Wringing',
    description: 'Repeatedly rubbing or clasping the hands together is a self-soothing gesture indicating nervousness or anxiety.',
    category: 'Stress Signals',
  },
  {
    name: 'Hands in Pockets',
    description: 'Can signal a lack of confidence or an attempt to hide nervous hand movements.',
    category: 'Stress Signals',
  },
  {
    name: 'Head Tilt',
    description: 'Tilting the head to one side signals curiosity, interest or active listening.',
    category: 'Engagement Signals',
  },
  {
    name: 'Illustrator Gestures',
    description: 'Hand movements that naturally accompany and emphasise speech, indicating genuine engagement and enthusiasm.',
    category: 'Engagement Signals',
  },
  {
    name: 'Interlaced Fingers',
    description: 'Clasping the hands together with interlaced fingers, especially when raised, often signals frustration or restrained tension.',
    category: 'Stress Signals',
  },
  {
    name: 'Jaw Clenching',
    description: 'Tightening the jaw muscles signals suppressed anger, frustration or tension.',
    category: 'Stress Signals',
  },
  {
    name: 'Jutting Chin',
    description: 'Pushing the chin forward and slightly up signals defiance or assertiveness, often seen before confrontation.',
    category: 'Confidence Signals',
  },
  {
    name: 'Kinesic Slip',
    description: 'A brief involuntary body movement that contradicts what someone is saying, often revealing their true feelings.',
    category: 'Deception Signals',
  },
  {
    name: 'Knee Bouncing',
    description: 'Repetitive bouncing of the knee while seated typically signals nervous energy or impatience.',
    category: 'Stress Signals',
  },
  {
    name: 'Lean Away',
    description: 'Pulling the body backward during conversation often signals discomfort, disagreement or a desire for distance.',
    category: 'Defensive Signals',
  },
  {
    name: 'Leaning In',
    description: 'Moving the body closer during conversation signals interest, engagement or attraction.',
    category: 'Engagement Signals',
  },
  {
    name: 'Lip Compression',
    description: 'Pressing the lips tightly together can indicate suppressed emotion, disagreement or discomfort with what is being said.',
    category: 'Stress Signals',
  },
  {
    name: 'Locked Ankles',
    description: 'Tightly locking the ankles together while seated is a classic restraint gesture associated with withholding emotion.',
    category: 'Defensive Signals',
  },
  {
    name: 'Microexpression',
    description: "A brief, involuntary facial expression lasting a fraction of a second that reveals a person's true emotion before they consciously mask it.",
    category: 'Deception Signals',
  },
  {
    name: 'Mirroring',
    description: "Unconsciously copying another person's posture or gestures, a strong sign of rapport and connection.",
    category: 'Attraction Signals',
  },
  {
    name: 'Mutual Gaze',
    description: 'Sustained eye contact shared between two people simultaneously, a strong indicator of mutual attraction or rapport.',
    category: 'Attraction Signals',
  },
  {
    name: 'Nodding Frequency',
    description: 'Excessive or rapid nodding can signal eagerness to please or impatience, while measured nodding signals genuine agreement.',
    category: 'Engagement Signals',
  },
  {
    name: 'Nose Touch',
    description: 'Touching or rubbing the nose during conversation is sometimes associated with deception, though it can also simply be an itch.',
    category: 'Deception Signals',
  },
  {
    name: 'Object Barrier',
    description: 'Placing an object like a bag, cup or laptop between yourself and another person, often signalling a desire for distance or protection.',
    category: 'Defensive Signals',
  },
  {
    name: 'Open Palms',
    description: 'Showing the palms while speaking signals honesty and openness, a gesture used deliberately by skilled communicators.',
    category: 'Trust Signals',
  },
  {
    name: 'Open Stance',
    description: 'Standing with feet shoulder width apart and body facing the other person directly signals confidence and receptiveness.',
    category: 'Trust Signals',
  },
  {
    name: 'Power Pose',
    description: 'Standing with an expanded, wide stance signals confidence and dominance.',
    category: 'Confidence Signals',
  },
  {
    name: 'Pupil Dilation',
    description: 'Involuntary widening of the pupils can indicate interest, attraction or arousal, and is very difficult to consciously control.',
    category: 'Attraction Signals',
  },
  {
    name: 'Self-Touching',
    description: 'Touching the face, neck or hair during conversation often indicates discomfort or anxiety.',
    category: 'Stress Signals',
  },
  {
    name: 'Shoulder Shrug',
    description: 'A partial or full shrug typically signals uncertainty, indifference or a lack of confidence in what is being said.',
    category: 'Emotion Signals',
  },
  {
    name: 'Steady Posture',
    description: 'Maintaining a stable, unmoving posture throughout a conversation can indicate genuine calm and confidence, or in some cases controlled deception.',
    category: 'Trust Signals',
  },
  {
    name: 'Steepling',
    description: 'Pressing fingertips together to form a steeple shape signals confidence and authority.',
    category: 'Confidence Signals',
  },
  {
    name: 'Throat Touch',
    description: 'A protective gesture touching the base of the neck, often indicating vulnerability or insecurity in the moment.',
    category: 'Stress Signals',
  },
  {
    name: 'Vocal Pitch Rise',
    description: 'Though not strictly visual, a rise in vocal pitch often accompanies nervous body language and is a useful additional cue.',
    category: 'Stress Signals',
  },
  {
    name: 'Weight Shifting',
    description: 'Repeatedly shifting weight from foot to foot often signals impatience, nervousness or a desire to leave the situation.',
    category: 'Stress Signals',
  },
]

export default function Dictionary() {
  const [search, setSearch]     = useState('')
  const [expanded, setExpanded] = useState(new Set())

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return ENTRIES
    return ENTRIES.filter(e => e.name.toLowerCase().includes(q))
  }, [search])

  function toggle(name) {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <main className="dictionary">

      <section className="dict-hero">
        <h1 className="dict-hero-title">Body Language Dictionary</h1>
        <p className="dict-hero-subtitle">Your complete guide to reading nonverbal signals.</p>
      </section>

      <div className="dict-search-wrap">
        <svg className="dict-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M11.5 11.5L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <input
          className="dict-search"
          type="search"
          placeholder="Search signals…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search dictionary entries"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="dict-empty">No entries match &ldquo;{search}&rdquo;.</p>
      ) : (
        <div className="dict-list">
          {filtered.map(entry => {
            const isOpen = expanded.has(entry.name)
            return (
              <div key={entry.name} className={`dict-card${isOpen ? ' dict-card--open' : ''}`}>
                <button
                  className="dict-card-header"
                  onClick={() => toggle(entry.name)}
                  aria-expanded={isOpen}
                >
                  <span className="dict-card-name">{entry.name}</span>
                  <svg
                    className="dict-card-chevron"
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="dict-card-body-wrap">
                  <div className="dict-card-body">
                    <p className="dict-card-desc">{entry.description}</p>
                    <span className="dict-card-tag">{entry.category}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

    </main>
  )
}
