import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// ── FAQ data ──────────────────────────────────────────────────────────────────
// Defined before the component so the FAQPage schema can reference it directly.
const FAQS = [
  {
    icon: '🎓',
    question: 'What age are these works designed for?',
    answer: 'Most of Kerri\'s works are for Pre-K through Grade 2 (ages 3–8). Each listing has an age range so you can check before you buy.',
  },
  {
    icon: '✂️',
    question: 'How are the materials made?',
    answer: 'Kerri makes everything herself in Southern New Hampshire. She is a Montessori-trained educator. Cards are printed on heavy card stock and cut by hand. Felt and sewing works are sewn by hand.',
  },
  {
    icon: '📦',
    question: 'Do you offer shipping?',
    answer: 'Yes. Kerri ships all physical works. Shipping costs are in your order confirmation email. Printable PDFs are emailed to you, so there\'s no shipping.',
  },
  {
    icon: '🖨️',
    question: 'What is the difference between a physical product and a printable PDF?',
    answer: 'Physical products come put together and ready to use. Open the package and put it on your shelf. Printable PDFs are files you print yourself at home or at a print shop. Each product page says which kind it is.',
  },
  {
    icon: '✨',
    question: 'Can I request a custom order?',
    answer: 'Yes. If you need a certain theme, a student\'s name on a label, or a set made for your classroom, send Kerri a note through the Contact page. She\'ll do her best.',
  },
  {
    icon: '🍎',
    question: 'Do you offer classroom bundle discounts?',
    answer: 'If you\'re buying several items for a classroom or school, contact Kerri through the Contact page and she\'ll work something out with you.',
  },
  {
    icon: '🏡',
    question: 'Can I use these works at home?',
    answer: 'Yes. Many of Kerri\'s customers are homeschool families. The works do fine at a kitchen table, not just in a Montessori classroom.',
  },
  {
    icon: '💛',
    question: 'What is your return policy?',
    answer: 'Each item is handmade to order, so Kerri doesn\'t take returns on physical products unless they arrive damaged. Printable PDFs can\'t be refunded once downloaded. If something is wrong with your order, contact Kerri through the Contact page and she\'ll fix it.',
  },
]

const faqPageSchema = {
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
}

function FAQ() {
  return (
    <div>
      <Helmet>
        <title>Frequently Asked Questions | The Messy Table</title>
        <meta name="description" content="Common questions about The Messy Table's handmade Montessori materials: shipping, age ranges, custom orders, printable PDFs, and returns." />
        <link rel="canonical" href="https://themessytable.org/faq" />
        <meta property="og:title" content="Frequently Asked Questions | The Messy Table" />
        <meta property="og:description" content="Common questions about The Messy Table's handmade Montessori materials: shipping, age ranges, custom orders, printable PDFs, and returns." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/faq" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | The Messy Table" />
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <section className="page-hero">
        <h2>Frequently Asked Questions</h2>
        <p>Shipping, ages, custom orders, and returns.</p>
      </section>

      <section className="products">
        <div className="faq-card-grid">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-card faq-card--${i % 3 === 0 ? 'pink' : i % 3 === 1 ? 'green' : 'lavender'}`}>
              <span className="faq-card-icon">{faq.icon}</span>
              <h3 className="faq-card-question">{faq.question}</h3>
              <p className="faq-card-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p>For anything else, <Link to="/contact">send Kerri a message</Link>.</p>
        </div>
      </section>
    </div>
  )
}

export default FAQ
