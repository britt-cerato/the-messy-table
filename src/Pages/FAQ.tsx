import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// ── FAQ data ──────────────────────────────────────────────────────────────────
// Defined before the component so the FAQPage schema can reference it directly.
const FAQS = [
  {
    icon: '🎓',
    question: 'What age are these works designed for?',
    answer: 'Most of Kerri\'s works are designed for Pre-K through Grade 2 (ages 3–8). Each product listing includes a recommended age range so you can find the right fit for your classroom or home.',
  },
  {
    icon: '✂️',
    question: 'How are the materials made?',
    answer: 'Everything is handmade by Kerri, a Montessori-trained educator based in Southern New Hampshire. Cards are printed on quality card stock, hand-cut, and assembled with care. Felt and sewing works are made by hand using quality materials.',
  },
  {
    icon: '📦',
    question: 'Do you offer shipping?',
    answer: 'Yes! Kerri ships all physical works. Shipping costs will be included in your order confirmation email. Printable PDF products are sent directly to your email — no shipping required.',
  },
  {
    icon: '🖨️',
    question: 'What is the difference between a physical product and a printable PDF?',
    answer: 'Physical products are fully made and ready to use — just open and place on your shelf. Printable PDFs are digital files you download and print yourself at home or at a print shop. Both options are listed clearly on each product page.',
  },
  {
    icon: '✨',
    question: 'Can I request a custom order?',
    answer: 'Kerri loves custom requests! Whether you need a specific theme, a student\'s name on a label, or a set tailored to your classroom, reach out through the Contact page and she\'ll do her best to help.',
  },
  {
    icon: '🍎',
    question: 'Do you offer classroom bundle discounts?',
    answer: 'If you\'re purchasing multiple items for a classroom or school, get in touch through the Contact page and Kerri will work something out with you.',
  },
  {
    icon: '🏡',
    question: 'Can I use these works at home?',
    answer: 'Absolutely! Many of Kerri\'s customers are homeschool families. The works are just as effective at the kitchen table as they are in a Montessori classroom.',
  },
  {
    icon: '💛',
    question: 'What is your return policy?',
    answer: 'Because each item is handmade to order, Kerri does not accept returns on physical products unless they arrive damaged. Printable PDFs are non-refundable once downloaded. If you have an issue with your order, please reach out through the Contact page and Kerri will make it right.',
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
        <title>FAQ — Handmade Montessori Materials &amp; Printable Downloads | The Messy Table</title>
        <meta name="description" content="Answers to common questions about The Messy Table's handmade Montessori materials — shipping, age ranges, custom orders, printable PDFs and more." />
        <meta property="og:title" content="FAQ — Handmade Montessori Materials & Printable Downloads | The Messy Table" />
        <meta property="og:description" content="Answers to common questions about The Messy Table's handmade Montessori materials — shipping, age ranges, custom orders, printable PDFs and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/faq" />
        <meta property="og:site_name" content="The Messy Table" />
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <section className="page-hero">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before you shop.</p>
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
          <p>Still have a question? <Link to="/contact">Get in touch with Kerri</Link> — she's happy to help.</p>
        </div>
      </section>
    </div>
  )
}

export default FAQ
