import { Link } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '../data/products'

function Shop() {
  return (
    <div>
      <section className="page-hero">
        <h2>Shop</h2>
        <p>Classroom materials, craft kits and hands-on works made with love.</p>
      </section>

      {CATEGORIES.map((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat.id)
        return (
          <section key={cat.id} className="products">
            <h2 className="section-title">{cat.label} Works</h2>
            <div className="products-grid">
              {items.map((product) => (
                <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Shop
