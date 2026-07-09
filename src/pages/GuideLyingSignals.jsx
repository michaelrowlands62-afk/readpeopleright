import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'How to Spot a Liar',
    to: '/guides/spot-a-liar',
    accent: 'red',
    description: 'The body language signals that reveal deception. Learn the clusters experts look for and why single signals are never enough.',
  },
  {
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language — fact checked. The most common misconceptions explained.',
  },
  {
    title: 'How to Read Someone\'s Eyes',
    to: '/guides/reading-eyes',
    accent: 'gold',
    description: 'The eyes reveal more than any other feature. Learn to read pupil dilation, eye contact patterns, gaze direction and the micro signals that flash across the eyes before conscious control takes over.',
  },
]

export default function GuideLyingSignals() {
  useEffect(() => {
    document.title = 'Body Language Signs Someone Is Lying to You: A Personal Guide | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A personal guide to spotting deception in everyday situations. The signals that reveal dishonesty in partners, colleagues and friends and why context always matters.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language Signs Someone Is Lying to You: A Personal Guide</h1>
        <p className="ga-intro">
          Spotting deception in people you know is a different skill from detecting lies in strangers. With someone familiar you have the single most valuable tool in deception detection — a baseline. You know how they normally look, move, speak and behave. You know their habits, their tells and their natural rhythms. This guide focuses on reading deception signals in personal contexts — partners, friends, colleagues and family members — where familiarity is your greatest asset.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Why Familiarity Helps</h2>
        <p className="ga-text">
          Professional lie detectors working with strangers must establish a baseline from scratch during the interaction itself, which takes time and skill. When you know someone well you carry years of baseline knowledge. You know whether they normally make direct eye contact or prefer to look away when thinking. You know whether they fidget habitually or are generally still. You know their natural speech pace, their vocal pitch and their resting expression. This means that changes from their normal behaviour are immediately legible to you in a way they would not be to a stranger — and changes from baseline are the most reliable deception signal available.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Changes in Eye Contact</h2>
        <p className="ga-text">
          The popular belief that liars avoid eye contact is unreliable with strangers but more meaningful with people you know well. If someone who normally makes comfortable relaxed eye contact with you suddenly avoids it when discussing a specific topic that is a meaningful change. Equally if someone who normally has easy relaxed eye contact suddenly maintains unusually intense or unblinking eye contact on a specific claim — overcompensating because they know the myth — that is also worth noting. What you are looking for is a change from their normal pattern not the presence of any particular type of eye contact.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Changes in Speech</h2>
        <p className="ga-text">
          People who know each other well develop a natural conversational rhythm — a typical pace, typical vocabulary, typical patterns of hesitation and elaboration. Deception often disrupts this rhythm in detectable ways. A person who normally speaks freely and spontaneously becoming unusually careful and measured on a specific topic is showing you something. Someone who normally gives brief direct answers suddenly over-elaborating and providing unsolicited detail on a particular claim is displaying one of the most consistent verbal deception signals. Someone whose voice rises in pitch or whose speech rate increases specifically when discussing a certain subject may be managing internal stress about that subject.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Changes in Gesture</h2>
        <p className="ga-text">
          Habitual gestures — the way someone naturally uses their hands when speaking, their typical head movements, their usual facial expressiveness — are so ingrained that changes from them are immediately noticeable to someone who knows the person well. A naturally expressive person who becomes physically still and contained on a specific topic is suppressing something. A person who normally gestures freely whose hands become hidden or controlled during a particular conversation is showing you a change worth noting. The sudden appearance of self soothing gestures — face touching, neck rubbing, hair playing — in someone who does not normally display these is particularly significant.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Timing of Expressions</h2>
        <p className="ga-text">
          With someone you know well you become attuned to the natural timing of their emotional expressions. Genuine emotional responses arrive simultaneously with the words or events that produce them. A smile that arrives fractionally after a statement rather than with it, a look of surprise that appears slightly too late to be spontaneous, an expression of hurt or offence that seems to switch on rather than emerge — these timing mismatches are easier to spot in someone whose natural expression timing you know from long familiarity.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Clusters and Context</h2>
        <p className="ga-text">
          The same principle that applies to reading strangers applies even more strongly to reading people you know — never draw conclusions from a single signal. Your partner touching their face once means nothing. Your partner touching their face, avoiding eye contact, over-elaborating and speaking faster than usual specifically when you ask about a particular evening out is a cluster of signals appearing together in a specific context that is more meaningful. The combination of multiple signals, all appearing together in response to a specific topic rather than throughout a general conversation, is the most reliable pattern to look for.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">The Danger of Suspicion Bias</h2>
        <p className="ga-text">
          One of the most important cautions in reading deception signals in people you know is the danger of suspicion bias — the tendency to interpret ambiguous signals as confirming existing suspicions. If you already suspect someone of deception you will unconsciously seek out and weight signals that confirm your suspicion while dismissing or ignoring signals that contradict it. This is why it is essential to apply the same rigorous standard to truthful signals as to deceptive ones. If the person also displays signals consistent with genuine ease and honesty alongside the ones that concern you, those signals deserve equal weight.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">When to Trust Your Gut</h2>
        <p className="ga-text">
          Intuition about people we know well is not magic — it is the product of years of pattern recognition operating below the level of conscious awareness. When something feels wrong about a person's behaviour without you being able to articulate exactly why, your unconscious mind has often already processed a cluster of micro signals that your conscious attention has not yet caught up with. This intuition is worth taking seriously as a prompt to pay more careful attention but not as a conclusion in itself. Use it to look more carefully rather than to decide you already know the answer.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">What to Do With What You Read</h2>
        <p className="ga-text">
          Reading deception signals in someone you know is only the beginning of a conversation not the end of one. Body language reading — even at its most accurate — is probabilistic rather than certain. The appropriate response to noticing deception signals in someone close to you is to create the conditions for an honest conversation rather than to confront them with a verdict. Approaching from curiosity rather than accusation makes genuine disclosure more likely. The goal is understanding rather than winning.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Deception Detection Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Put your lie detection skills to the test with real body language scenarios in our interactive quiz.
          </p>
          <Link to={`/episodes?category=${encodeURIComponent('Spot a Liar')}`} className="ga-cta-btn">
            Test Your Lie Detection Skills
          </Link>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Learn More</h2>
        <div className="ga-related-grid">
          {RELATED_GUIDES.map((guide) => (
            <Link key={guide.to} to={guide.to} className={`ga-related-card ga-related-card--${guide.accent}`}>
              <div className="ga-related-accent" />
              <div className="ga-related-body">
                <h3 className="ga-related-title">{guide.title}</h3>
                <p className="ga-related-desc">{guide.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
