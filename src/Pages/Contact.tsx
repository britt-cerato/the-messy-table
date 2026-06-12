import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <div>
      <section className="page-hero">
        <h2>Get in Touch</h2>
        <p>Questions, custom orders, or just want to say hi? Kerri would love to hear from you!</p>
      </section>
      <section className="contact-content">
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <a href="tel:+16035486169" className="contact-link">(603) 548-6169</a>
          </div>
          <p className="contact-note">Kerri typically responds within 1–2 business days.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
