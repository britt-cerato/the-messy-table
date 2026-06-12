import { Helmet } from 'react-helmet-async'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Messy Table',
  url: 'https://themessytable.com',
  telephone: '+16035486169',
  description: 'Handmade Montessori-inspired classroom materials for teachers and homeschool families. Custom orders welcome.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  areaServed: ['NH', 'US'],
  sameAs: ['https://www.etsy.com/shop/TheMessyTable'],
}

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact The Messy Table — Custom Orders &amp; Questions</title>
        <meta name="description" content="Reach Kerri at The Messy Table for custom orders, wholesale inquiries, or questions about handmade Montessori classroom materials. Based in Southern New Hampshire." />
        <meta property="og:title" content="Contact The Messy Table — Custom Orders & Questions" />
        <meta property="og:description" content="Reach Kerri at The Messy Table for custom orders, wholesale inquiries, or questions about handmade Montessori classroom materials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.com/contact" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact The Messy Table — Custom Orders & Questions" />
        <meta name="twitter:description" content="Reach Kerri for custom orders or questions about handmade Montessori classroom materials." />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
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
