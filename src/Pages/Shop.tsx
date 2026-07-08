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

const SITE_URL = 'https://themessytable.org'

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Handmade Montessori Materials — The Messy Table',
  url: `${SITE_URL}/shop`,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE_URL}/shop/${product.id}`,
    name: product.name,
  })),
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
          <title>{label} Montessori Works — The Messy Table</title>
          <meta name="description" content={`Handmade Montessori works for ${label.toLowerCase()} — made by Kerri, a Montessori educator in Southern NH. Perfect for Pre-K to Grade 2 classrooms and homeschool families.`} />
        </Helmet>
        <section className="page-hero">
          <h2>{label}</h2>
          <p>Handmade works for {label.toLowerCase()} from Kerri's classroom.</p>
        </section>
        <section className="products">
          <div className="products-grid">
            {items.map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
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
        <title>Shop Handmade Montessori Materials — Nomenclature Cards, Math Works &amp; More</title>
        <meta name="description" content="Browse handmade Montessori classroom works and printable activities for Pre-K through Grade 2. Nomenclature cards, write the room printables, math manipulatives, and seasonal activities — made with love by a Montessori teacher." />
        <meta property="og:title" content="Shop Handmade Montessori Materials — Nomenclature Cards, Math Works & More" />
        <meta property="og:description" content="Browse handmade Montessori classroom works and printable activities for Pre-K through Grade 2. Nomenclature cards, write the room printables, math manipulatives, and seasonal activities — made with love by a Montessori teacher." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/shop`} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop Handmade Montessori Materials — The Messy Table" />
        <meta name="twitter:description" content="Browse handmade Montessori classroom works and printable activities for Pre-K through Grade 2. Nomenclature cards, math works, write the room, and seasonal activities." />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
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
                  <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
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
