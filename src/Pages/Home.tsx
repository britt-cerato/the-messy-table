import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const FEATURED_IDS = ['animal-nomenclature', 'thanksgiving-buttoning', 'van-gogh-cards']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

function Home() {
  return (
    <div>
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
          <h2>Get Inspired</h2>
          <p>Browse our collection of easy craft ideas and classroom activities your kiddos will love.</p>
          <Link to="/ideas" className="ideas-button">Explore Ideas</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
