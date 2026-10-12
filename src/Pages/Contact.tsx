import { Helmet } from 'react-helmet-async'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Messy Table',
  url: 'https://themessytable.org',
  email: 'themessytablenh@gmail.com',
  description: 'Handmade Montessori-inspired classroom materials for teachers and homeschool families. Custom orders welcome.',
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: '56',
    addressLocality: 'Milford',
    addressRegion: 'NH',
    postalCode: '03055-0056',
    addressCountry: 'US',
  },
  areaServed: ['NH', 'US'],
  sameAs: [],
}

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Kerri | The Messy Table</title>
        <meta name="description" content="Email or write to Kerri at The Messy Table about custom orders, product questions, or anything else." />
        <link rel="canonical" href="https://themessytable.org/contact" />
        <meta property="og:title" content="Contact Kerri | The Messy Table" />
        <meta property="og:description" content="Email or write to Kerri at The Messy Table about custom orders or questions about her handmade Montessori materials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/contact" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Kerri | The Messy Table" />
        <meta name="twitter:description" content="Get in touch with Kerri at The Messy Table for custom orders or questions about handmade Montessori materials." />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <section className="page-hero">
        <h1>Get in Touch</h1>
        <p>Send Kerri an email about questions, custom orders, or anything else.</p>
      </section>
      <section className="contact-content">
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:themessytablenh@gmail.com" className="contact-link">themessytablenh@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Mail</span>
            <span className="contact-link">P.O. Box 56, Milford, NH 03055-0056</span>
          </div>
          <p className="contact-note">Kerri usually writes back within 1–2 business days.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
