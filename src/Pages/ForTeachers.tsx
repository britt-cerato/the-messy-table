import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { DEFAULT_OG_IMAGE } from '../data/seo'

const FEATURED_IDS = ['animal-nomenclature', 'halloween-counting', 'thanksgiving-buttoning']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

function ForTeachers() {
  return (
    <div>
      <Helmet>
        <title>Montessori Materials for Teachers | The Messy Table</title>
        <meta name="description" content="Handmade Montessori works for Pre-K to Grade 2 classrooms, ready for your shelf: nomenclature cards, seasonal activities, and fine motor works." />
        <link rel="canonical" href="https://themessytable.org/for-teachers" />
        <meta property="og:title" content="Montessori Materials for Teachers | The Messy Table" />
        <meta property="og:description" content="Handmade Montessori works for Pre-K to Grade 2 classrooms, ready for your shelf: nomenclature cards, seasonal activities, and fine motor works." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/for-teachers" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montessori Classroom Materials for Teachers | The Messy Table" />
        <meta name="twitter:description" content="Handmade Montessori works for Pre-K to Grade 2 classrooms, ready for your shelf: nomenclature cards, seasonal activities, and write the room printables." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero audience-hero audience-hero--teachers">
        <div className="audience-hero-content">
          <p className="audience-hero-eyebrow">For Classroom Teachers</p>
          <h1>You don't have time to make everything from scratch. I can help with that.</h1>
          <p>I'm Kerri, a Montessori-trained educator. I've spent years rotating shelves, hunting for materials, and keeping 20+ kids busy at once. I make the works so you don't have to.</p>
        </div>
      </section>

      {/* Section 1: The real talk */}
      <section className="audience-section audience-section--cream">
        <div className="audience-section-inner">
          <h3>I know what your week looks like.</h3>
          <p>You're switching out the shelf before the bell, answering questions about the snack calendar, writing observation notes, and prepping next week's theme. There's no time left to cut, laminate, and put together a new set of nomenclature cards.</p>
          <p>That was me too. So I started making the materials I wished I could buy. They're ready for the shelf the day they arrive. You don't have to laminate or put anything together. Open the envelope and set it out.</p>
        </div>
      </section>

      {/* Section 2: What I make for you */}
      <section className="audience-section audience-section--white">
        <div className="audience-section-inner">
          <h3>What you'll find in the shop</h3>
          <p>I make everything with a real classroom shelf in mind. The pieces are sturdy and sized for small hands. The activities are meant to hold a child's attention for a whole work cycle.</p>
          <div className="audience-features-grid">
            <div className="audience-feature">
              <h4>Nomenclature Cards</h4>
              <p>Three-part cards for science, art, and vocabulary. Printed on cardstock, cut by hand, and ready to match. Animals, fine art, seasonal topics, and more.</p>
            </div>
            <div className="audience-feature">
              <h4>Seasonal Works</h4>
              <p>Works to rotate in all year, from Halloween counting to spring flower matching. Pick the ones that fit your current theme.</p>
            </div>
            <div className="audience-feature">
              <h4>Fine Motor Works</h4>
              <p>Practical life activities like the Thanksgiving Turkey Buttoning Work. Kids ask to do this one again and again.</p>
            </div>
            <div className="audience-feature">
              <h4>Ready to Use</h4>
              <p>Physical works arrive put together. Printable PDFs just need your classroom printer. Either way, it's on the shelf in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="products audience-featured-section">
        <h2 className="section-title">A few classroom favorites</h2>
        <p className="section-description">These are the works kids pick most often. Click a card to see more.</p>
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
          <h3>Save yourself some shelf prep</h3>
          <p>Look through the shop for works that fit your classroom and this month's theme.</p>
          <Link to="/shop" className="hero-button">Browse the Shop</Link>
        </div>
      </section>
    </div>
  )
}

export default ForTeachers
