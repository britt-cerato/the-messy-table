import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '../data/products'

const THEME_LABELS: Record<string, string> = {
  valentines: "Valentine's Day",
  'st-patricks': "St. Patrick's Day",
  fall: 'Fall & Halloween',
  spring: 'Spring',
  winter: 'Winter',
}

function Shop() {
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')

  if (theme) {
    const label = THEME_LABELS[theme] ?? theme
    const items = PRODUCTS.filter((p) => p.themes?.includes(theme as any))
    return (
      <div>
        <Helmet>
          <title>{label} Works — The Messy Table</title>
        </Helmet>
        <section className="page-hero">
          <h2>{label}</h2>
          <p>Handmade works for {label.toLowerCase()} from Kerri's classroom.</p>
        </section>
        <section className="products">
          <div className="products-grid">
            {items.map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link to="/shop" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>← Back to all products</Link>
          </p>
        </section>
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <title>Shop Montessori Classroom Materials — The Messy Table</title>
        <meta name="description" content="Browse 25 handmade Montessori classroom works: nomenclature cards, CVC word building, bead stairs, clip cards, and seasonal activities for Pre-K through Grade 2." />
        <meta property="og:title" content="Shop Montessori Classroom Materials — The Messy Table" />
        <meta property="og:description" content="Browse 25 handmade Montessori classroom works: nomenclature cards, CVC word building, bead stairs, clip cards, and seasonal activities for Pre-K through Grade 2." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.com/shop" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop Montessori Classroom Materials — The Messy Table" />
        <meta name="twitter:description" content="Browse 25 handmade Montessori classroom works for Pre-K through Grade 2." />
      </Helmet>
      <section className="page-hero">
        <h2>Shop</h2>
        <p>Classroom materials, craft kits and hands-on works made with love.</p>
      </section>

      {CATEGORIES.map((cat) => {
        const items = PRODUCTS.filter((p) => p.categories.includes(cat.id))
        if (items.length === 0) return null
        return (
          <section key={cat.id} className="products">
            <h2 className="section-title">{cat.sectionTitle}</h2>
            <p className="section-description">{cat.description}</p>
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
