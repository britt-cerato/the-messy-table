import { Helmet } from 'react-helmet-async'

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
        <h2>Ideas</h2>
        <p>Easy craft ideas and classroom activities your kiddos will love.</p>
      </section>
      <section className="ideas-grid-section">
        <div className="ideas-grid">
          <div className="idea-card">
            <div className="idea-image"></div>
            <h3>Paper Bag Puppets</h3>
            <p>A super easy craft that keeps kiddos busy and creative for hours!</p>
          </div>
          <div className="idea-card">
            <div className="idea-image"></div>
            <h3>Rainbow Sensory Bins</h3>
            <p>Perfect for early learners — colorful, tactile and so much fun.</p>
          </div>
          <div className="idea-card">
            <div className="idea-image"></div>
            <h3>Nature Collages</h3>
            <p>Take learning outside and bring it back in with beautiful nature art.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ideas
