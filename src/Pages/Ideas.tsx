import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { IDEAS } from '../data/ideas'

function Ideas() {
  return (
    <div>
      <Helmet>
        <title>Montessori Craft Ideas &amp; Classroom Activities — The Messy Table</title>
        <meta name="description" content="Free Montessori-inspired craft ideas and classroom activity guides for teachers and homeschool families. Easy, hands-on, and kiddo-approved." />
        <meta property="og:title" content="Montessori Craft Ideas & Classroom Activities — The Messy Table" />
        <meta property="og:description" content="Free Montessori-inspired craft ideas and classroom activity guides for teachers and homeschool families. Easy, hands-on, and kiddo-approved." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.com/ideas" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montessori Craft Ideas & Classroom Activities — The Messy Table" />
        <meta name="twitter:description" content="Free Montessori-inspired craft ideas and classroom activity guides for teachers and homeschool families." />
      </Helmet>

      <section className="page-hero">
        <h2>Ideas &amp; Activity Guides</h2>
        <p>Classroom-tested ideas from Kerri's Montessori classroom to yours.</p>
      </section>

      <section className="ideas-grid-section">
        <div className="ideas-grid">
          {IDEAS.map((idea) => (
            <Link
              to={`/ideas/${idea.slug}`}
              key={idea.slug}
              className="idea-card idea-card-link"
            >
              <div className="idea-image" aria-hidden="true" />
              <div className="idea-card-body">
                <span className="idea-card-category">{idea.category}</span>
                <h3>{idea.title}</h3>
                <p>{idea.excerpt}</p>
                <span className="idea-card-read-more">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Ideas
