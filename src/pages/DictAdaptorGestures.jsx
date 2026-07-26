import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './DictionaryEntry.css'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are adaptor gestures in body language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adaptor gestures are small self soothing behaviours such as playing with jewellery, hair or clothing that the body uses to release nervous energy, usually without the person realising they are doing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do adaptor gestures always mean someone is nervous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not necessarily. Adaptor gestures only become meaningful when they change from a person's normal baseline, such as increasing sharply in response to a specific topic or question rather than appearing consistently throughout an interaction.",
      },
    },
  ],
}

export default function DictAdaptorGestures() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="de-page">
      <Link to="/dictionary" className="de-back-link">← Back to Dictionary</Link>

      <header className="de-header">
        <span className="de-category">Stress Signals</span>
        <h1 className="de-title">Adaptor Gestures</h1>
        <p className="de-lead">
          Adaptor gestures are small, repetitive, self directed behaviours that the body performs
          to manage internal tension. The term comes from the idea that these movements originally
          served a practical purpose, such as adjusting clothing or grooming, and were later adapted
          by the nervous system into a way of releasing anxious energy when no practical need
          exists. Common examples include twisting a ring, playing with a necklace, smoothing hair
          repeatedly, fiddling with a pen or picking at clothing. These gestures happen largely
          outside conscious awareness, which is exactly what makes them useful to read. A person who
          is not consciously aware they are doing something is far less able to control or suppress
          it. Adaptor gestures are not proof of any specific emotion on their own. Their real value
          comes from noticing when they begin, intensify or disappear in relation to a specific
          topic, question or person, since that timing is what turns an ordinary habit into a
          meaningful signal.
        </p>
      </header>

      <section className="de-section">
        <h2 className="de-h2">What To Look For</h2>
        <ul className="de-list">
          <li>Repeated touching or adjusting of jewellery, hair, clothing or small objects during conversation</li>
          <li>Gestures that appear suddenly or increase in frequency when a specific subject comes up</li>
          <li>Movements that continue even when the person is not actively speaking or listening</li>
          <li>A noticeable drop in these behaviours once the stressful topic has passed</li>
        </ul>
      </section>

      <section className="de-section">
        <h2 className="de-h2">What It Means In Context</h2>
        <p className="de-text">
          Adaptor gestures mean different things depending on when and how often they appear.
          Someone who fidgets with a pen throughout an entire meeting regardless of subject matter
          has simply established that as part of their baseline behaviour, and the gesture tells you
          little on its own. The same gesture becomes meaningful when it appears specifically and
          consistently at one point in a conversation, such as whenever a particular question is
          asked or a particular person enters the room. In a job interview, a sudden increase in
          adaptor gestures when discussing a gap in employment may suggest discomfort with that
          topic specifically. In a first date, understated adaptor gestures paired with genuine
          smiling and eye contact often reflect nervous excitement rather than a desire to
          disengage. Context, baseline and timing are what separate a meaningless habit from a
          genuine signal worth paying attention to.
        </p>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Related Signals</h2>
        <div className="de-related-grid">
          <Link to="/dictionary/blinking-rate-increase" className="de-related-chip">Blinking Rate Increase</Link>
          <Link to="/dictionary/blank-stare" className="de-related-chip">Blank Stare</Link>
          <Link to="/dictionary/avoidance-shuffle" className="de-related-chip">Avoidance Shuffle</Link>
        </div>
      </section>

      <section className="de-section">
        <h2 className="de-h2">Learn More</h2>
        <div className="de-cta">
          <p className="de-cta-text">
            Adaptor gestures are one of the clearest windows into nervous energy. Our guide to
            nervous body language covers the full range of signals and how to manage them.
          </p>
          <Link to="/guides/nervous-body-language" className="de-cta-btn">
            Read the Nervous Body Language Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
