import './Courses.css'

const COURSES = [
  {
    id: 1,
    title: 'The Complete Body Language Bible',
    price: '£24.99',
    description:
      'A comprehensive reference guide covering every major body language signal with real images and detailed explanations.',
  },
  {
    id: 2,
    title: 'Read The Room At Work',
    price: '£17.99',
    description:
      'Master workplace body language — read your boss, colleagues, and ace every interview and negotiation.',
  },
  {
    id: 3,
    title: 'The Dating Signals Guide',
    price: '£14.99',
    description:
      "Learn to spot genuine attraction, red flags, and the subtle signals people give when they're interested.",
  },
  {
    id: 4,
    title: 'Spot The Lie',
    price: '£17.99',
    description:
      "A deep dive into deception detection — the body language signals that reveal when someone isn't being honest.",
  },
  {
    id: 5,
    title: "The Parent's Guide to Reading Children",
    price: '£14.99',
    description:
      "Understand what your child's body language is really telling you, even when words fail them.",
  },
  {
    id: 6,
    title: 'The Job Interview Playbook',
    price: '£17.99',
    description:
      'Read your interviewer and present yourself with confidence — body language from both sides of the table.',
  },
]

function CourseCover() {
  return (
    <div className="course-cover" aria-hidden="true">
      <svg width="60" height="60" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="11" rx="10" ry="6.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.75" />
        <circle cx="11" cy="11" r="3" fill="rgba(255,255,255,0.35)" />
        <circle cx="12" cy="10" r="1" fill="rgba(26,15,31,0.5)" />
      </svg>
    </div>
  )
}

export default function Courses() {
  return (
    <main className="courses">
      <section className="courses-hero">
        <h1 className="courses-hero-title">Take Your Skills Further</h1>
        <p className="courses-hero-subtitle">
          In-depth guides to help you master body language in every area of life.
        </p>
      </section>

      <div className="courses-grid">
        {COURSES.map((course) => (
          <div key={course.id} className="course-card">
            <CourseCover />
            <div className="course-body">
              <span className="course-badge">Coming Soon</span>
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <div className="course-footer">
                <span className="course-price">{course.price}</span>
                <button className="course-btn" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
