import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const FEATURED_IDS = ['animal-nomenclature', 'halloween-counting', 'thanksgiving-buttoning']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

function ForTeachers() {
  return (
    <div>
      <Helmet>
        <title>For Teachers — The Messy Table</title>
        <meta name="description" content="Handmade Montessori works for Pre-K to Grade 2 classroom teachers. Shelf-ready materials, nomenclature cards, fine motor works, and seasonal collections — made by a Montessori educator who gets it." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero audience-hero audience-hero--teachers">
        <div className="audience-hero-content">
          <p className="audience-hero-eyebrow">For Classroom Teachers</p>
          <h2>You don't have time to make everything from scratch. That's where I come in.</h2>
          <p>I'm Kerri — a Montessori-trained educator who has spent years rotating shelves, sourcing materials, and trying to keep 20+ kiddos engaged all at once. I make the works so you don't have to.</p>
        </div>
      </section>

      {/* Section 1: The real talk */}
      <section className="audience-section audience-section--cream">
        <div className="audience-section-inner">
          <h3>I know what your week looks like.</h3>
          <p>You're rotating the shelf before the bell rings, fielding questions about the snack calendar, writing observation notes, and somehow still finding time to prep for next week's theme. There are exactly zero spare hours to cut, laminate, and assemble a new set of nomenclature cards.</p>
          <p>I get it — because that was me. So I started making the materials I wished I could just buy. Hands-on works that are ready to put on the shelf the day they arrive. No laminating. No assembly. Just open the envelope and go.</p>
        </div>
      </section>

      {/* Section 2: What I make for you */}
      <section className="audience-section audience-section--white">
        <div className="audience-section-inner">
          <h3>What you'll find in the shop</h3>
          <p>Everything in The Messy Table is designed with a real classroom shelf in mind. That means durable construction, child-friendly sizing, and activities that genuinely hold a child's attention — not just for five minutes, but for the whole work cycle.</p>
          <div className="audience-features-grid">
            <div className="audience-feature">
              <h4>Nomenclature Cards</h4>
              <p>Three-part cards for science, art, and vocabulary — printed on cardstock, cut by hand, and ready to match. Animals, fine art, seasonal topics, and more.</p>
            </div>
            <div className="audience-feature">
              <h4>Seasonal Works</h4>
              <p>Keep the shelf fresh all year. From Halloween counting to spring flower matching, there's always something new to rotate in that fits your current theme.</p>
            </div>
            <div className="audience-feature">
              <h4>Fine Motor Works</h4>
              <p>Hands-on practical life activities like the Thanksgiving Turkey Buttoning Work — the kind of thing kiddos beg to do again and again.</p>
            </div>
            <div className="audience-feature">
              <h4>Ready to Use</h4>
              <p>Physical works arrive fully assembled. Printable PDFs are clearly designed so your classroom printer does the work. Either way, you're shelf-ready in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="products audience-featured-section">
        <h2 className="section-title">A few favourites for the classroom shelf</h2>
        <p className="section-description">These are some of the works that get reached for again and again. Click any card to learn more.</p>
        <div className="products-grid">
          {featured.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="audience-cta">
        <div className="audience-cta-inner">
          <h3>Ready to simplify your shelf prep?</h3>
          <p>Browse the full shop and find works that fit your classroom, your theme, and your week.</p>
          <Link to="/shop" className="hero-button">Browse the Shop</Link>
        </div>
      </section>
    </div>
  )
}

export default ForTeachers
