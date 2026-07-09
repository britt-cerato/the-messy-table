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
        <meta name="description" content="Bring Montessori to your kitchen table. Handmade works and printables for homeschool families — hands-on math, language, and seasonal activities." />
        <link rel="canonical" href="https://themessytable.org/for-homeschool" />
        <meta property="og:title" content="Montessori Materials for Homeschool | The Messy Table" />
        <meta property="og:description" content="Bring Montessori to your kitchen table. Handmade works and printables for homeschool families — hands-on math, language, and seasonal activities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/for-homeschool" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montessori Materials for Homeschool Families | The Messy Table" />
        <meta name="twitter:description" content="Bring Montessori to your kitchen table. Handmade works and printable PDFs for homeschool families — hands-on math, language activities, and seasonal works for ages 3–8." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero audience-hero audience-hero--homeschool">
        <div className="audience-hero-content">
          <p className="audience-hero-eyebrow">For Homeschool Families</p>
          <h2>Montessori learning doesn't require a classroom. It just requires a table.</h2>
          <p>I'm Kerri — a Montessori educator who believes the best learning happens at a real table, with real materials, alongside someone who loves you. Whether you have one child or four, I make things that fit your home.</p>
        </div>
      </section>

      {/* Section 1: I see you */}
      <section className="audience-section audience-section--cream">
        <div className="audience-section-inner">
          <h3>You're doing something wonderful — and sometimes really hard.</h3>
          <p>You chose this path because you want your child's learning to be joyful, hands-on, and meaningful. But some days you're also making lunch, answering a phone call, and wondering if what you're doing is "enough."</p>
          <p>It is. And I want to make it a little easier. The materials I make are designed to be set up in minutes on a kitchen table, coffee table, or wherever learning happens in your house. No special shelving required. No training needed. Just curious kids and good materials.</p>
        </div>
      </section>

      {/* Section 2: What works at home */}
      <section className="audience-section audience-section--white">
        <div className="audience-section-inner">
          <h3>What works beautifully at home</h3>
          <p>Homeschool learning is different from a classroom — in the best way. You can follow your child's interests, slow down when something sparks, and come back to an activity tomorrow if today isn't the day. Here's what I make that fits that rhythm.</p>
          <div className="audience-features-grid">
            <div className="audience-feature">
              <h4>Printable PDFs</h4>
              <p>Instant downloads you print at home — worksheets, write the room activities, seasonal packs. Print once, or print again next year when a younger sibling is ready.</p>
            </div>
            <div className="audience-feature">
              <h4>Hands-On Works</h4>
              <p>Physical activities that keep little hands busy: matching, sorting, building. The kind of thing that buys you 20 minutes of focused, independent work time.</p>
            </div>
            <div className="audience-feature">
              <h4>Seasonal Themes</h4>
              <p>Rotate in something new for fall, winter, spring, and the holidays in between. It keeps things fresh — and your child will ask for them again and again.</p>
            </div>
            <div className="audience-feature">
              <h4>No Setup Drama</h4>
              <p>Everything is designed to be simple. Pull it out, set it on the table, and let your child explore. That's the Montessori way — and it works beautifully at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="products audience-featured-section">
        <h2 className="section-title">Materials that shine on the kitchen table</h2>
        <p className="section-description">These are some of the favourites among homeschool families. Click any card to see the details.</p>
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
          <h3>Let's make your table a little more magical.</h3>
          <p>Browse the full shop for printables, hands-on works, and seasonal activities your child will love.</p>
          <Link to="/shop" className="hero-button">Browse the Shop</Link>
        </div>
      </section>
    </div>
  )
}

export default ForHomeschool
