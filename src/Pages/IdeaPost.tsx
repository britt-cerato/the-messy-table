import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { getIdea } from '../data/ideas'
import { PRODUCTS } from '../data/products'

function IdeaPost() {
  const { slug } = useParams<{ slug: string }>()
  const idea = slug ? getIdea(slug) : null

  if (!idea) {
    return (
      <div className="product-not-found">
        <Helmet>
          <title>Article Not Found — The Messy Table</title>
        </Helmet>
        <h2>Article not found</h2>
        <Link to="/ideas" className="back-link">← Back to Ideas</Link>
      </div>
    )
  }

  const pageUrl = `https://themessytable.org/ideas/${idea.slug}`
  const pageTitle = `${idea.title} | The Messy Table`

  const relatedProducts = idea.relatedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as typeof PRODUCTS

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: idea.title,
    description: idea.excerpt,
    articleSection: idea.category,
    keywords: `Montessori, ${idea.category.toLowerCase()}, handmade Montessori materials, classroom activities, homeschool`,
    author: {
      '@type': 'Person',
      name: 'Kerri',
      description: 'Montessori-trained educator with 5 years of classroom experience in Southern New Hampshire',
      url: 'https://themessytable.org/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Messy Table',
      url: 'https://themessytable.org',
    },
    datePublished: idea.date,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  }

  const faqSchema = idea.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: idea.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={idea.excerpt} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={idea.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={idea.excerpt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <div className="idea-post-breadcrumb">
        <Link to="/ideas">Ideas</Link>
        <span> / </span>
        <span>{idea.category}</span>
      </div>

      <article className="idea-post">
        <header className="idea-post-header">
          <span className="idea-post-category">{idea.category}</span>
          <h1 className="idea-post-title">{idea.title}</h1>
          <p className="idea-post-byline">
            By Kerri, Montessori Educator with 5 years of experience in Southern New Hampshire
          </p>
        </header>

        {idea.image && (
          <img src={idea.image} alt={idea.title} className="idea-post-hero-image" />
        )}

        <p className="idea-post-intro">{idea.intro}</p>

        {idea.sections.map((section) => (
          <section key={section.heading} className="idea-post-section">
            <h2 className="idea-post-section-heading">{section.heading}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}

        {idea.faqs.length > 0 && (
          <section className="idea-post-faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {idea.faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {relatedProducts.length > 0 && (
        <section className="idea-post-products">
          <h2 className="section-title">Materials for This Activity</h2>
          <div className="products-grid">
            {relatedProducts.map((product) => (
              <Link
                to={`/shop/${product.id}`}
                key={product.id}
                className="product-card"
              >
                <img
                  src={product.image}
                  alt={`${product.name} — Montessori ${product.categories[0]} work`}
                  className="product-image"
                  loading="lazy"
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="idea-post-footer">
        <Link to="/ideas" className="back-link">← Back to all ideas</Link>
      </div>
    </div>
  )
}

export default IdeaPost
