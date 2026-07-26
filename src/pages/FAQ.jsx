import { useState, useEffect } from 'react'
import './FAQ.css'

const FAQS = [
  {
    question: 'What is body language?',
    answer: "Body language is the nonverbal dimension of human communication: the posture, gestures, facial expressions, eye contact patterns and physical movements that accompany and often contradict what we say in words. Research suggests that a significant portion of the emotional meaning we communicate is delivered through these nonverbal channels rather than through words alone. Body language operates largely below conscious awareness, meaning most people display their genuine emotions and intentions physically without realising they are doing so.",
  },
  {
    question: 'Can you learn to read body language?',
    answer: 'Yes, body language reading is a learnable skill that improves significantly with knowledge and practice. While some people have a natural intuitive sensitivity to nonverbal signals, the underlying principles of body language are well documented in psychology research and can be systematically studied. The key is learning to read clusters of signals in context rather than interpreting individual gestures in isolation, and understanding how to establish a baseline for each person you are reading.',
  },
  {
    question: 'Do liars always avoid eye contact?',
    answer: "No, this is one of the most persistent and least reliable body language myths. Research consistently shows no strong relationship between gaze aversion and deception. Many practised liars deliberately increase eye contact because they know this myth and compensate for it. Reliable deception detection looks for clusters of signals, changes from baseline behaviour and contradictions between what someone says and what their body communicates, not any single signal like eye contact.",
  },
  {
    question: 'What does crossed arms really mean?',
    answer: "Crossed arms do not always signal defensiveness. People cross their arms because they are cold, because it is a comfortable resting position, because the chair they are sitting in has no armrests, or simply out of habit. Crossed arms become significant as a defensive or closed signal only when they appear as part of a cluster of other signals, such as turned body, reduced eye contact and tight expression, and when they represent a change from the person's normal baseline behaviour.",
  },
  {
    question: 'How do you spot a fake smile?',
    answer: 'A genuine smile, called a Duchenne smile, involves the muscles around the eyes producing natural crinkles at the outer corners. These eye muscles are very difficult to engage voluntarily. A performed smile typically involves only the mouth, leaves the eyes flat and unchanged, maintains a consistent intensity without natural variation and disappears abruptly rather than fading gradually. The most reliable test is whether the smile reaches the eyes and whether it varies naturally throughout a conversation.',
  },
  {
    question: 'What are micro expressions?',
    answer: 'Micro expressions are involuntary facial expressions lasting between one twenty-fifth and one fifth of a second. They occur before a person has time to consciously manage or mask their true emotional response. Because they are automatic and extremely brief they are very difficult to fake or suppress. Common micro expressions include brief flashes of contempt, fear, disgust or sadness that appear before a neutral or managed expression reasserts itself. They are one of the most scientifically validated indicators of concealed emotion.',
  },
  {
    question: 'How long does it take to form a first impression?',
    answer: 'Research suggests first impressions form within the first few seconds of meeting someone, with some studies suggesting as little as one tenth of a second for basic judgements of trustworthiness. These impressions are formed almost entirely from nonverbal information, appearance, posture, movement quality and facial expression, before any conversation has taken place. While first impressions can be updated with new information they are remarkably resistant to change, which is why the first few seconds of any interaction carry disproportionate weight.',
  },
  {
    question: 'Is body language the same in every culture?',
    answer: 'No, body language varies significantly between cultures. While some basic emotional expressions appear to have universal components, most gestures, acceptable distances between people, eye contact norms and touch protocols differ enormously across cultures. The thumbs up gesture is positive in Western cultures but offensive in parts of the Middle East. Sustained eye contact signals confidence in many Western contexts but disrespect in many Asian cultures. Applying body language rules from one cultural context to people from a different background can lead to serious misreadings.',
  },
  {
    question: 'What is the most reliable body language signal?',
    answer: 'No single signal is reliably meaningful in isolation. This is one of the most important principles in body language reading. The most reliable approach is to look for clusters of signals appearing together, changes from a person\'s established baseline behaviour, and contradictions between what someone says and what their body communicates. If forced to name one signal that carries particular weight, micro expressions are among the most reliable because they are involuntary and extremely difficult to fake or suppress.',
  },
  {
    question: 'How accurate is body language reading?',
    answer: 'Body language reading is probabilistic rather than certain. It gives you useful information that increases the accuracy of your judgements rather than providing definitive proof of anything. Even trained professionals including FBI agents and experienced psychologists perform only modestly better than chance when trying to detect deception without prior knowledge of the person. The skill is most valuable when combined with baseline knowledge of the specific person, contextual awareness and a willingness to hold conclusions loosely and update them as new information emerges.',
  },
  {
    question: 'What is the difference between open and closed body language?',
    answer: 'Open body language refers to postures and gestures that make the body accessible and visible: uncrossed arms, forward lean, direct eye contact, relaxed shoulders and an orientation toward the other person. Closed body language involves signals that create physical or psychological barriers, crossed arms, turned body, reduced eye contact and contracted posture. Open body language generally signals comfort, confidence and engagement. Closed body language signals discomfort, defensiveness or withdrawal, though context and baseline always matter.',
  },
  {
    question: 'Can body language be faked?',
    answer: 'Some aspects of body language can be consciously managed and performed, but genuinely faking it comprehensively is very difficult. Practised communicators can maintain open posture, steady eye contact and a warm expression, but micro expressions, pupil dilation, breathing changes and subtle postural shifts are controlled by the autonomic nervous system and are extremely difficult to consciously suppress. This is why experienced body language readers focus on the signals that are hardest to fake rather than the obvious surface signals that can be performed.',
  },
  {
    question: 'What does it mean when someone mirrors your body language?',
    answer: 'Mirroring, unconsciously adopting similar postures, gestures or movement timing to someone else, is one of the most reliable signals of genuine rapport and positive connection. It happens automatically when someone is genuinely engaged with and interested in another person. Research shows mirroring increases feelings of connection and trust between people. In romantic contexts mirroring is a reliable attraction signal. In professional contexts it indicates genuine engagement rather than polite tolerance.',
  },
  {
    question: 'How do you read body language accurately?',
    answer: 'Accurate body language reading requires four things. First, establish a baseline: know what normal looks like for that specific person before trying to read anything significant. Second, look for clusters: never draw conclusions from a single signal, look for multiple signals pointing in the same direction. Third, consider context, the same signal means different things in different situations and cultural backgrounds. Fourth, stay humble, body language reading is probabilistic, not certain, and the best readers hold their conclusions loosely and update them as new information arrives.',
  },
  {
    question: 'What is the baseline principle in body language reading?',
    answer: "The baseline principle is the most important concept in professional body language reading. Before you can identify significant signals in someone's behaviour you need to know what their normal behaviour looks like when they are relaxed and unstressed. Changes from that baseline are meaningful, not the presence of any particular signal in isolation. A person who naturally fidgets throughout a conversation is not showing you stress through that behaviour. The same person suddenly going very still when a specific topic arises might be showing you something significant precisely because it is a departure from their normal pattern.",
  },
]

export default function FAQ() {
  const [expanded, setExpanded] = useState(new Set())

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  function toggle(question) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(question)) next.delete(question)
      else next.add(question)
      return next
    })
  }

  return (
    <main className="faq">
      <section className="faq-hero">
        <h1 className="faq-hero-title">Body Language FAQ</h1>
        <p className="faq-hero-subtitle">
          Answers to the most common questions about reading people and nonverbal communication.
        </p>
      </section>

      <div className="faq-list">
        {FAQS.map((faq) => {
          const isOpen = expanded.has(faq.question)
          return (
            <div key={faq.question} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
              <button
                className="faq-item-header"
                onClick={() => toggle(faq.question)}
                aria-expanded={isOpen}
              >
                <span className="faq-question">{faq.question}</span>
                <svg
                  className="faq-chevron"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-body">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
