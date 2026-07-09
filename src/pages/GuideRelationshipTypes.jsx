import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Attraction Signals Explained',
    to: '/guides/attraction-signals',
    accent: 'pink',
    description: 'How to tell if someone is genuinely interested. The 12 most reliable attraction signals and what they really mean.',
  },
  {
    title: 'Reading Body Language in Arguments',
    to: '/guides/arguments',
    accent: 'red',
    description: 'Arguments have their own body language grammar. Learn to read escalation signals, genuine distress versus performance and the nonverbal cues that reveal what your partner really means during conflict.',
  },
  {
    title: 'How to Read Someone\'s Eyes',
    to: '/guides/reading-eyes',
    accent: 'gold',
    description: 'The eyes reveal more than any other feature. Learn to read pupil dilation, eye contact patterns, gaze direction and the micro signals that flash across the eyes before conscious control takes over.',
  },
]

export default function GuideRelationshipTypes() {
  useEffect(() => {
    document.title = 'Body Language in Different Relationships: Friends, Family, Colleagues and Partners | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Friends, family, colleagues and romantic partners all have different nonverbal languages. Learn to read the unique body language patterns of each type of relationship.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Body Language in Different Relationships: How Nonverbal Communication Changes With Context</h1>
        <p className="ga-intro">
          We do not communicate the same way with everyone in our lives. The body language we use with a close friend is different from the body language we use with a parent, a colleague, a romantic partner or a stranger. These differences are not performances — they are genuine expressions of the different emotional registers, power dynamics, levels of intimacy and social rules that govern each type of relationship. Understanding how body language shifts across relationship types makes you a more accurate reader of what you observe and a more effective communicator in each context.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Close Friends</h2>
        <p className="ga-text">
          Friendship body language is characterised by ease, informality and a relaxation of the social rules that govern more formal relationships. Close friends take up space in each other's physical presence without anxiety — they sit close, touch freely and without formality, interrupt and finish each other's sentences and allow silences that would feel uncomfortable with strangers or colleagues. Laughter is fuller and less managed. Emotional expression is less filtered. The body language of genuine friendship has a quality of physical ease that is distinct from any other relationship type — the muscles are not working to manage impression in the way they do in more formal contexts. The presence of this ease is one of the most reliable indicators of genuine closeness as opposed to performed friendliness.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Family</h2>
        <p className="ga-text">
          Family relationships produce some of the most complex and revealing body language patterns precisely because they carry the longest history and the deepest emotional weight. With parents the body language of childhood — deference, a slight reduction in physical stature, a quality of seeking approval even in adults who are ostensibly equal — often persists into adulthood below conscious awareness. With siblings the body language tends to revert to the patterns established in childhood regardless of adult status or achievement. Family gatherings are particularly rich environments for body language reading because the combination of genuine intimacy and accumulated history produces emotional expressions that are simultaneously more raw and more layered than those in any other context.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Colleagues</h2>
        <p className="ga-text">
          Workplace relationships produce a distinctive body language register that sits between formal and personal. The physical management that characterises professional interaction — controlled emotional expression, maintained personal space, careful touch protocols, managed facial expression — relaxes in proportion to the genuine closeness of the relationship. Colleagues who are genuinely friendly will show some of the ease of friendship in their body language while maintaining more awareness of context than they would with a close personal friend. The most revealing workplace body language often appears in the moments before and after formal interactions — in corridors, at the coffee machine, in the seconds before a meeting officially begins — when the management of professional impression temporarily relaxes.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Romantic Partners</h2>
        <p className="ga-text">
          Long term romantic relationships produce the most intimate and complex body language environment of any relationship type. Partners develop a private nonverbal language over time — shared glances that communicate complete sentences, touch patterns that carry specific emotional meaning, a sensitivity to micro signals in each other that would be invisible to outside observers. This intimacy cuts both ways. The depth of knowledge that makes partners exceptionally attuned to each other's genuine emotional states also means that performed emotions are harder to maintain. A partner who says they are fine while displaying the cluster of signals their partner knows to mean not fine is in a much more transparent position than the same person would be with a stranger or colleague.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Authority Figures</h2>
        <p className="ga-text">
          Interactions with authority figures — managers, parents, officials, experts — produce characteristic body language shifts that reflect the power differential being navigated. Most people display subtle submission signals in the presence of genuine authority even when they are unaware of doing so — a slight reduction in the expansiveness of their physical presence, more careful management of facial expression, more frequent monitoring of the authority figure's response before continuing to speak, a slight elevation of vocal pitch under the tension of wanting to make a good impression. Reading these signals in yourself and others helps reveal the genuine status dynamics operating beneath the surface of any interaction.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Body Language With Strangers</h2>
        <p className="ga-text">
          Interactions with strangers produce the most consciously managed body language of any relationship type. Without the shared history that allows interpretation of ambiguous signals people in initial encounters rely heavily on the clearest and most universal signals — open posture, comfortable eye contact, genuine smiling and appropriate distance — to communicate benign intent and social competence. The body language of strangers is simultaneously the most legible because the signals used are the most universal and the least informative because the absence of baseline knowledge makes individual signals harder to interpret accurately.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">How Relationships Change Body Language Over Time</h2>
        <p className="ga-text">
          One of the most revealing things to observe is how body language between two people changes as their relationship develops. The early stages of any relationship — friendship, romance, professional collaboration — are characterised by more careful physical management, more conscious impression management and greater physical distance than the same relationship will produce a year later. As trust develops physical ease increases, the distance reduces, touch becomes more natural and emotional expression becomes less filtered. Watching the direction of this change in body language over time is often more informative than any single observation — relationships that are developing well show a progressive physical relaxation while those that are deteriorating show a progressive physical withdrawal.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding how body language changes across relationship contexts makes you a more accurate and sensitive reader of people. Test your skills with our interactive quiz.
          </p>
          <Link to="/episodes" className="ga-cta-btn">
            Test Your Body Language Skills
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
