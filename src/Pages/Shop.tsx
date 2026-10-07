import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { PRODUCTS, CATEGORIES, type Product } from '../data/products'
import QuickViewModal from '../components/QuickViewModal'

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

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) {
  return (
    <div className="product-card-wrap">
      <Link to={`/shop/${product.id}`} className="product-card">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        </div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
      <button
        className="quick-view-btn"
        onClick={() => onQuickView(product)}
        aria-label={`Quick view ${product.name}`}
      >
        Quick View
      </button>
    </div>
  )
}

function Shop() {
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  if (theme) {
    const label = THEME_LABELS[theme] ?? theme
    const items = PRODUCTS.filter((p) => p.themes?.includes(theme as any))
    return (
      <div>
        <Helmet>
          <title>{label} Montessori Works — The Messy Table</title>
          <meta name="description" content={`Handmade Montessori works for ${label.toLowerCase()} — made by Kerri, a Montessori educator in Southern NH. Perfect for Pre-K to Grade 2 classrooms and homeschool families.`} />
          <link rel="canonical" href={`${SITE_URL}/shop?theme=${theme}`} />
          <meta property="og:title" content={`${label} Montessori Works — The Messy Table`} />
          <meta property="og:description" content={`Handmade Montessori works for ${label.toLowerCase()} from Kerri's classroom.`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${SITE_URL}/shop?theme=${theme}`} />
          <meta property="og:site_name" content="The Messy Table" />
        </Helmet>
        <section className="page-hero">
          <h2>{label}</h2>
          <p>Handmade works for {label.toLowerCase()} from Kerri's classroom.</p>
        </section>
        <section className="products">
          <div className="products-grid">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link to="/shop" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>← Back to all products</Link>
          </p>
        </section>
        {quickViewProduct && (
          <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        )}
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <title>Shop Montessori Materials | The Messy Table</title>
        <meta name="description" content="Browse handmade Montessori classroom works for Pre-K through Grade 2 — nomenclature cards, math works, write the room, and seasonal activities." />
        <link rel="canonical" href={`${SITE_URL}/shop`} />
        <meta property="og:title" content="Shop Montessori Materials | The Messy Table" />
        <meta property="og:description" content="Browse handmade Montessori classroom works for Pre-K through Grade 2 — nomenclature cards, math works, write the room, and seasonal activities." />
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
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </div>
          </section>
        )
      })}
      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  )
}

export default Shop
