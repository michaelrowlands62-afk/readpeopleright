import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new URLSearchParams(new FormData(form))
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    })
    setSubmitted(true)
  }

  return (
    <main className="contact">
      <div className="contact-container">

        {/* Hero */}
        <section className="contact-hero">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">We would love to hear from you.</p>
        </section>

        {/* Form card */}
        <section className="contact-section">
          <div className="contact-card">
            {submitted ? (
              <div className="contact-thankyou">
                <span className="contact-thankyou-icon" aria-hidden="true">✓</span>
                <h2 className="contact-thankyou-heading">Message received</h2>
                <p className="contact-thankyou-text">
                  Thank you for your message, we will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="contact-field">
                  <label className="contact-label" htmlFor="name">Name</label>
                  <input
                    className="contact-input"
                    id="name"
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="email">Email address</label>
                  <input
                    className="contact-input"
                    id="email"
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    className="contact-input contact-textarea"
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    rows={5}
                    required
                  />
                </div>

                <button className="contact-submit" type="submit">Submit</button>
              </form>
            )}
          </div>
        </section>

        {/* Direct email */}
        <section className="contact-alt">
          <p className="contact-alt-text">
            Alternatively, you can reach us directly at{' '}
            <a href="mailto:hello@bodylanguageiq.com" className="contact-alt-email">
              hello@bodylanguageiq.com
            </a>
          </p>
        </section>

      </div>
    </main>
  )
}
