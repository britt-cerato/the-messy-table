import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { MONTHLY_MESS, getMessIssue } from '../data/monthlyMess'
import { getIdea, type Idea } from '../data/ideas'
import { PRODUCTS } from '../data/products'

const LIST_URL = 'https://themessytable.org/monthly-mess'
const LIST_TITLE = 'The Monthly Mess: Kerri\'s Monthly Update | The Messy Table'
const LIST_DESCRIPTION = 'A monthly update from Kerri: what is on her classroom shelf, seasonal work ideas, and what is new in the shop.'

export function MonthlyMessList() {
  return (
    <div>
      <Helmet>
        <title>{LIST_TITLE}</title>
        <meta name="description" content={LIST_DESCRIPTION} />
        <link rel="canonical" href={LIST_URL} />
        <meta property="og:title" content={LIST_TITLE} />
        <meta property="og:description" content={LIST_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={LIST_URL} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={LIST_TITLE} />
        <meta name="twitter:description" content={LIST_DESCRIPTION} />
      </Helmet>
      <section className="page-hero">
        <h1>The Monthly Mess</h1>
        <p>What's on Kerri's shelf each month, plus what's new in the shop.</p>
      </section>

      <section className="products">
        <div className="ideas-list">
          {MONTHLY_MESS.map((issue) => (
            <Link to={`/monthly-mess/${issue.slug}`} key={issue.slug} className="idea-list-card">
              <div className="idea-list-text">
                <span className="idea-list-category">{issue.month}</span>
                <h2 className="idea-list-title">{issue.title}</h2>
                <p className="idea-list-excerpt">{issue.excerpt}</p>
                <span className="idea-list-read-more">Read this month →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export function MonthlyMessIssue() {
  const { slug } = useParams<{ slug: string }>()
  const issue = slug ? getMessIssue(slug) : undefined

  if (!issue) {
    return (
      <div className="product-not-found">
        <Helmet>
          <title>Not Found | The Messy Table</title>
        </Helmet>
        <h2>We couldn't find that month</h2>
        <Link to="/monthly-mess" className="back-link">← Back to The Monthly Mess</Link>
      </div>
    )
  }

  const pageUrl = `${LIST_URL}/${issue.slug}`
  const pageTitle = `${issue.title} | The Messy Table`
  const ideas = issue.ideaSlugs.map(getIdea).filter(Boolean) as Idea[]
  const products = issue.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as typeof PRODUCTS
  const heroImage = ideas.find((i) => i.image)?.image

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: issue.title,
    description: issue.excerpt,
    datePublished: issue.date,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    author: { '@type': 'Person', name: 'Kerri', url: 'https://themessytable.org/about' },
    publisher: { '@type': 'Organization', name: 'The Messy Table', url: 'https://themessytable.org' },
    ...(heroImage ? { image: `https://themessytable.org${heroImage}` } : {}),
  }

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={issue.excerpt} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={issue.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="The Messy Table" />
        {heroImage && <meta property="og:image" content={`https://themessytable.org${heroImage}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={issue.excerpt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="idea-post-breadcrumb">
        <Link to="/monthly-mess">The Monthly Mess</Link>
        <span> / </span>
        <span>{issue.month}</span>
      </div>

      <article className="idea-post">
        <header className="idea-post-header">
          <span className="idea-post-category">{issue.month}</span>
          <h1 className="idea-post-title">{issue.title}</h1>
          <p className="idea-post-byline">By Kerri</p>
        </header>

        <p className="idea-post-intro">{issue.intro}</p>

        {issue.sections.map((section) => (
          <section key={section.heading} className="idea-post-section">
            <h2 className="idea-post-section-heading">{section.heading}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}
      </article>

      {ideas.length > 0 && (
        <section className="products">
          <h2 className="section-title">This Month's Work Ideas</h2>
          <div className="ideas-list">
            {ideas.map((idea) => (
              <Link to={`/ideas/${idea.slug}`} key={idea.slug} className="idea-list-card">
                {idea.image && (
                  <img src={idea.image} alt={idea.title} className="idea-list-image" loading="lazy" />
                )}
                <div className="idea-list-text">
                  <span className="idea-list-category">{idea.category}</span>
                  <h3 className="idea-list-title">{idea.title}</h3>
                  <p className="idea-list-excerpt">{idea.excerpt}</p>
                  <span className="idea-list-read-more">Read the guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {products.length > 0 && (
        <section className="idea-post-products">
          <h2 className="section-title">From the Shop</h2>
          <div className="products-grid">
            {products.map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={`${product.name}, Montessori ${product.categories[0]} work`}
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
        <Link to="/monthly-mess" className="back-link">← All months</Link>
      </div>
    </div>
  )
}
