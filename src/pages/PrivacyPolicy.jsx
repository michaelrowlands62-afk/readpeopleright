import { Link } from 'react-router-dom'
import '../styles/PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <article className="privacy-policy-content">
        <h1 className="privacy-policy-title">Privacy Policy</h1>

        <section className="privacy-section">
          <p className="privacy-intro">
            This privacy policy explains how BodyLanguageIQ collects, uses and protects any information you provide when using this website. BodyLanguageIQ is operated by Natalie Rowlands and is based in the United Kingdom. We are committed to protecting your privacy and handling your data responsibly and transparently.
          </p>
        </section>

        <section className="privacy-section">
          <h2>What Information We Collect</h2>

          <h3>Contact Form Submissions</h3>
          <p>
            When you use the contact form on our Contact page we collect your name, email address and the content of your message. This information is used solely to respond to your enquiry and is not stored beyond what is necessary to handle your request.
          </p>

          <h3>Game Progress Data</h3>
          <p>
            Some of our interactive games store your progress locally on your device using browser local storage. This includes which difficulty levels you have unlocked in games such as the Lie Detector Test and the Poker Face Challenge. This data never leaves your device and we have no access to it. You can clear it at any time by clearing your browser data.
          </p>

          <h3>Information We Do Not Collect</h3>
          <p>
            BodyLanguageIQ does not require you to create an account. We do not collect your name, email address or any personal information simply for using our quizzes, games or guides. We do not track your behaviour across other websites. We do not sell or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>
            Information collected through our contact form is used only to respond to your enquiry. We do not use your contact details for marketing without your explicit consent. We do not profile our users or use personal data for automated decision making.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third Party Services</h2>
          <p>
            BodyLanguageIQ uses the following third party services to operate the site:
          </p>

          <h3>Netlify</h3>
          <p>
            Our website is hosted by Netlify. Netlify handles contact form submissions on our behalf and may process your form data on their servers. Netlify's privacy policy can be found at <a href="https://netlify.com/privacy" target="_blank" rel="noopener noreferrer">netlify.com/privacy</a>.
          </p>

          <h3>Supabase</h3>
          <p>
            We use Supabase to store quiz question content and images used in our interactive games. Supabase does not store personal data about site visitors. Supabase's privacy policy can be found at <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>.
          </p>

          <h3>OpenAI</h3>
          <p>
            We use OpenAI's API on our internal admin system to assist with content creation. This is not accessible to site visitors and does not process any visitor data. OpenAI's privacy policy can be found at <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">openai.com/privacy</a>.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Cookies</h2>
          <p>
            BodyLanguageIQ uses minimal cookies. We do not use tracking cookies or advertising cookies. Netlify may set technical cookies necessary for the functioning of the website and contact form. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights Under UK GDPR</h2>
          <p>
            As a UK based service we comply with the UK General Data Protection Regulation. You have the following rights regarding your personal data:
          </p>
          <ul className="privacy-list">
            <li>The right to access the personal data we hold about you.</li>
            <li>The right to correct inaccurate personal data.</li>
            <li>The right to request deletion of your personal data.</li>
            <li>The right to object to processing of your personal data.</li>
            <li>The right to data portability.</li>
          </ul>
          <p>
            To exercise any of these rights please contact us using the contact form on our Contact page.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Retention</h2>
          <p>
            Contact form submissions are retained only for as long as necessary to respond to your enquiry. We do not retain personal data beyond this period.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or how we handle your data please get in touch using <Link to="/contact" className="privacy-link">our Contact page</Link> at bodylanguageiq.com/contact.
          </p>
        </section>

        <div className="privacy-footer">
          <p>Last updated: July 2025</p>
        </div>
      </article>
    </div>
  )
}
