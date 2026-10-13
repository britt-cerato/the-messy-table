import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const FEATURED_IDS = ['spring-flower-matching', 'bead-stair', 'build-a-snowman']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

function ForHomeschool() {
  return (
    <div>
      <Helmet>
        <title>Montessori Materials for Homeschool | The Messy Table</title>
        <meta name="description" content="Montessori works for your kitchen table. Handmade works and printables for homeschool families: hands-on math, language, and seasonal activities." />
        <link rel="canonical" href="https://themessytable.org/for-homeschool" />
        <meta property="og:title" content="Montessori Materials for Homeschool | The Messy Table" />
        <meta property="og:description" content="Montessori works for your kitchen table. Handmade works and printables for homeschool families: hands-on math, language, and seasonal activities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/for-homeschool" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montessori Materials for Homeschool Families | The Messy Table" />
        <meta name="twitter:description" content="Handmade Montessori works and printable PDFs for homeschool families. Hands-on math, language, and seasonal works for ages 3–8." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero audience-hero audience-hero--homeschool">
        <div className="audience-hero-content">
          <p className="audience-hero-eyebrow">For Homeschool Families</p>
          <h1>You don't need a classroom for Montessori. A table works fine.</h1>
          <p>I'm Kerri, a Montessori educator. I think kids learn best with real materials at a real table, next to someone who loves them. I make things that work at home, with one child or four.</p>
        </div>
      </section>

      {/* Section 1: I see you */}
      <section className="audience-section audience-section--cream">
        <div className="audience-section-inner">
          <h3>Teaching at home is good work. Some days it's also hard.</h3>
          <p>You want your child to learn by doing. Some days you're also making lunch, answering the phone, and wondering if what you're doing is "enough."</p>
          <p>It is. I'd like to make it a little easier. My materials set up in a few minutes on a kitchen table, a coffee table, or wherever your kids work. You don't need special shelves or any training.</p>
        </div>
      </section>

      {/* Section 2: What works at home */}
      <section className="audience-section audience-section--white">
        <div className="audience-section-inner">
          <h3>What works well at home</h3>
          <p>Home is different from a classroom. You can follow your child's interests, slow down when something catches on, and try an activity again tomorrow if today isn't working. Here's what I make for that.</p>
          <div className="audience-features-grid">
            <div className="audience-feature">
              <h4>Printable PDFs</h4>
              <p>Worksheets, write the room activities, and seasonal packs. I email you the PDF and you print it at home. Print it again next year for a younger sibling.</p>
            </div>
            <div className="audience-feature">
              <h4>Hands-On Works</h4>
              <p>Matching, sorting, and building activities. They can give you 20 minutes of focused, independent work time.</p>
            </div>
            <div className="audience-feature">
              <h4>Seasonal Themes</h4>
              <p>Swap in something new for fall, winter, spring, and the holidays in between. Kids tend to ask for them again.</p>
            </div>
            <div className="audience-feature">
              <h4>Easy Setup</h4>
              <p>Take it out, set it on the table, and let your child work with it. That's how it's done in a Montessori classroom, and it works at home too.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="products audience-featured-section">
        <h2 className="section-title">Kitchen table favorites</h2>
        <p className="section-description">Homeschool families order these a lot. Click a card to see the details.</p>
        <div className="products-grid">
          {featured.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="audience-cta">
        <div className="audience-cta-inner">
          <h3>Find something for your table</h3>
          <p>The shop has printables, hands-on works, and seasonal activities.</p>
          <Link to="/shop" className="hero-button">Browse the Shop</Link>
        </div>
      </section>
    </div>
  )
}

export default ForHomeschool
