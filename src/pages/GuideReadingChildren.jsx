import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GuideArticle.css'

const RELATED_GUIDES = [
  {
    title: 'Nervous Body Language',
    to: '/guides/nervous-body-language',
    accent: 'purple',
    description: 'Learn to recognise the signs of anxiety and nervousness in yourself and others. Understand what triggers these signals and how to manage them in high pressure situations.',
  },
  {
    title: 'How to Read Someone\'s Eyes',
    to: '/guides/reading-eyes',
    accent: 'gold',
    description: 'The eyes reveal more than any other feature. Learn to read pupil dilation, eye contact patterns, gaze direction and the micro signals that flash across the eyes before conscious control takes over.',
  },
  {
    title: 'Body Language Myths Debunked',
    to: '/guides/myths',
    accent: 'gold',
    description: 'Everything you think you know about body language — fact checked. The most common misconceptions explained.',
  },
]

export default function GuideReadingChildren() {
  useEffect(() => {
    document.title = 'Reading Children\'s Body Language: What Your Child Is Really Telling You | BodyLanguageIQ'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Children cannot always express what they feel in words. Learn to read the nonverbal signals that reveal how your child is really feeling, from anxiety and fear to joy and genuine confidence.')
    }
  }, [])

  return (
    <main className="guide-article">
      <Link to="/guides" className="ga-back-link">← All Guides</Link>

      <header className="ga-header">
        <h1 className="ga-title">Reading Children's Body Language: What Your Child Is Really Telling You</h1>
        <p className="ga-intro">
          Children are extraordinarily expressive nonverbally precisely because they have not yet learned to mask or manage their emotional signals the way adults do. A young child's body language is raw, immediate and often far more honest than their words. As children grow older they begin to develop the social skills to manage their emotional display — but the signals are still there for a parent who knows what to look for. Learning to read your child's body language is one of the most powerful tools available for understanding what they are experiencing when words either fail them or are being deliberately withheld.
        </p>
      </header>

      <section className="ga-section">
        <h2 className="ga-h2">Why Children's Body Language Is Different</h2>
        <p className="ga-text">
          Adult body language reading requires accounting for years of learned social management — the deliberate control of signals that might reveal genuine emotion. Children, particularly young children, have not yet developed these management skills. Their emotional states express themselves immediately and physically with very little filtering. This makes their body language more reliable in many ways but also requires a different interpretive framework. What looks like defensive or closed body language in an adult may simply be a child who is cold, tired or physically uncomfortable. Context and baseline behaviour are even more important when reading children than when reading adults.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signs of Anxiety and Fear</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Physical Withdrawal</h3>
          <p className="ga-text">
            A child who is anxious or fearful will often make themselves physically smaller — hunching their shoulders, pulling their arms close to their body, dropping their head and avoiding eye contact. In social situations an anxious child will typically stay close to their trusted caregiver, position themselves slightly behind rather than in front, and resist physical separation. These withdrawal signals are among the most reliable indicators of genuine anxiety rather than simple shyness.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Self Soothing Behaviours</h3>
          <p className="ga-text">
            Children self soothe physically in response to anxiety in ways that are often more visible than those of adults. Thumb sucking in older children who have outgrown the habit, rocking, hair twisting, nail biting, picking at skin and repetitive touching of a comfort object are all physical anxiety responses. The return of self soothing behaviours that a child had previously grown out of is a significant signal that something is causing them distress.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Stomach and Physical Complaints</h3>
          <p className="ga-text">
            Anxiety in children very commonly manifests as physical complaints — particularly stomach aches and headaches — with no identifiable medical cause. The gut brain connection means that genuine psychological distress produces genuine physical symptoms. A child who repeatedly complains of stomach aches before school, social events or other specific situations is showing you a real physical response to real anxiety even if no physical cause can be found.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signs of Happiness and Genuine Confidence</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Open Expansive Body Language</h3>
          <p className="ga-text">
            A genuinely happy and confident child takes up space. They move freely, gesture expressively, make easy eye contact and carry themselves with a naturalness and ease that is distinct from performed happiness. The whole body participates in positive emotion for children in a way that is harder to fake than in adults — jumping, spinning, full body engagement in play and a physical lightness in movement are all reliable signals of genuine positive emotional state.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Genuine Versus Performed Smiling</h3>
          <p className="ga-text">
            Even young children learn to perform smiles for social purposes — for photographs, for adults who expect cheerfulness. The distinction between a genuine and performed smile is the same in children as in adults — genuine smiles involve the eye muscles producing natural crinkles, appear spontaneously and fade gradually. Performed smiles are confined to the mouth, appear on cue and disappear abruptly. A child who smiles for photographs but whose eyes remain flat is showing you something worth paying attention to.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signs of Distress and Unhappiness</h2>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Changes From Baseline</h3>
          <p className="ga-text">
            The most important principle in reading children's body language is knowing their individual baseline. Every child has a natural physical temperament — some are naturally more still, some more energetic, some more physically affectionate, some more reserved. What matters is not whether a child displays a particular signal but whether their behaviour has changed from their established pattern. A naturally active child who becomes physically subdued, a naturally affectionate child who begins to pull away from touch, a child who was developing social confidence and begins to withdraw — these changes are the most reliable signals that something has changed in their emotional world.
          </p>
        </div>

        <div className="ga-h3-block">
          <h3 className="ga-h3">Regression</h3>
          <p className="ga-text">
            Children under stress often display regression — a return to physically younger behaviours. Bedwetting in a child who had been dry, baby talk in a child who had moved beyond it, separation anxiety in a child who had become independent, a return to needing a comfort object that had been given up — these physical and behavioural regressions are reliable signals of significant stress even when the child cannot articulate what is wrong.
          </p>
        </div>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Signs of Bullying and Social Difficulty</h2>
        <p className="ga-text">
          Children who are experiencing bullying or social difficulty often show it physically before they will speak about it. Signs to watch for include reluctance to go to school or social activities that they previously enjoyed, changes in posture particularly a new tendency to make themselves small in public, altered eye contact patterns becoming more avoidant, changes in how they carry their school bag or walk into buildings, and physical tension that appears specifically in social contexts and resolves at home. These signals often appear before any verbal disclosure and may be the earliest opportunity to open a conversation.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">How to Respond to What You Read</h2>
        <p className="ga-text">
          Reading your child's body language is only the first step. How you respond to what you observe is equally important. Creating the conditions for open conversation — choosing relaxed side by side activities rather than face to face questioning, following the child's lead rather than pressing directly, acknowledging feelings without immediately trying to fix them — makes it more likely that a child who is showing distress nonverbally will eventually be able to put it into words. The goal of reading body language is not to confront children with what you have observed but to be present and available in ways that make disclosure feel safe.
        </p>
      </section>

      <section className="ga-section">
        <h2 className="ga-h2">Test Your Body Language Skills</h2>
        <div className="ga-cta">
          <p className="ga-cta-text">
            Understanding body language in all its forms makes you a more attuned reader of people. Test your skills with our interactive body language quiz.
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
