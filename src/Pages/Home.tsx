import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const FEATURED_IDS = ['animal-nomenclature', 'thanksgiving-buttoning', 'van-gogh-cards']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

const SITE_URL = 'https://themessytable.com'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Messy Table',
  url: SITE_URL,
  description: 'Handmade Montessori-inspired classroom works and craft materials for teachers and homeschool families, made by Kerri, a Montessori educator with 5 years of experience in Southern New Hampshire.',
  founder: {
    '@type': 'Person',
    name: 'Kerri',
    jobTitle: 'Montessori Educator',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  sameAs: ['https://www.etsy.com/shop/TheMessyTable'],
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>The Messy Table — Handmade Montessori Materials</title>
        <meta name="description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator with 5 years of experience in Southern NH. Shop nomenclature cards, language works, math activities, and seasonal crafts." />
        <meta property="og:title" content="The Messy Table — Handmade Montessori Materials" />
        <meta property="og:description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator with 5 years of experience in Southern NH. Shop nomenclature cards, language works, math activities, and seasonal crafts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Messy Table — Handmade Montessori Materials" />
        <meta name="twitter:description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator in Southern NH." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to The Messy Table</h2>
          <p>Classroom works, craft ideas, and a little glitter for the kiddos you love.</p>
          <Link to="/shop" className="hero-button">Shop Now</Link>
        </div>
      </section>
      <section className="products">
        <h2 className="section-title">Featured Products</h2>
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
      <section className="ideas">
        <div className="ideas-content">
          <h2>Work Ideas</h2>
          <p>Seasonal themes, holiday works, and inspiration for your classroom or home — straight from Kerri's shelf.</p>
          <Link to="/ideas" className="ideas-button">Explore Work Ideas</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
