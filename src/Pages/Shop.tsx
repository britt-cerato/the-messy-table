import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import {
  PRODUCTS,
  CATEGORIES,
  SEASONS,
  HOLIDAY_LABELS,
  getSeason,
  getSeasonProducts,
  type Product,
  type Theme,
} from '../data/products'
import QuickViewModal from '../components/QuickViewModal'

const THEME_LABELS: Record<string, string> = {
  valentines: "Valentine's Day",
  'st-patricks': "St. Patrick's Day",
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

function ProductCard({ product, onQuickView, tag }: { product: Product; onQuickView: (p: Product) => void; tag?: string }) {
  return (
    <div className="product-card-wrap">
      <Link to={`/shop/${product.id}`} className="product-card">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        </div>
        {tag && <span className="product-tag">{tag}</span>}
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

// Seasons that have at least one work, starting with the one we're in now
// so the most useful season is always first.
function seasonsFromNow() {
  const month = new Date().getMonth()
  const start = Math.max(0, SEASONS.findIndex((s) => s.months.includes(month)))
  return [...SEASONS.slice(start), ...SEASONS.slice(0, start)]
    .map((season) => ({ season, count: getSeasonProducts(season.id).length }))
    .filter(({ count }) => count > 0)
}

function SeasonTiles() {
  const tiles = seasonsFromNow()
  return (
    <nav className="season-tiles" aria-label="Shop by season">
      {tiles.map(({ season, count }, i) => (
        <Link key={season.id} to={`/shop/season/${season.id}`} className="season-tile">
          <span className="season-tile-emoji" aria-hidden="true">{season.emoji}</span>
          <span className="season-tile-label">{season.label}</span>
          <span className="season-tile-count">{count} {count === 1 ? 'work' : 'works'}</span>
          {i === 0 && <span className="season-tile-now">In season now</span>}
        </Link>
      ))}
    </nav>
  )
}

export function SeasonShop() {
  const { season: seasonId } = useParams()
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const season = getSeason(seasonId)
  if (!season) return <Navigate to="/shop" replace />

  const items = getSeasonProducts(season.id)
  const pageUrl = `${SITE_URL}/shop/season/${season.id}`
  const title = `${season.label} Montessori Works | The Messy Table`
  const description = `Handmade Montessori ${season.label.toLowerCase()} works for Pre-K to Grade 2 — ${season.description.charAt(0).toLowerCase()}${season.description.slice(1)}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${season.label} Montessori Works — The Messy Table`,
    url: pageUrl,
    numberOfItems: items.length,
    itemListElement: items.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/shop/${product.id}`,
      name: product.name,
    })),
  }

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:image" content={`${SITE_URL}${items[0]?.image ?? ''}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section className="page-hero">
        <h2>{season.emoji} {season.label}</h2>
        <p>{season.description}</p>
      </section>
      <section className="products">
        <SeasonTiles />
        <div className="products-grid">
          {items.map((product) => {
            const holiday = product.themes?.map((t) => HOLIDAY_LABELS[t]).find(Boolean)
            return (
              <ProductCard key={product.id} product={product} tag={holiday} onQuickView={setQuickViewProduct} />
            )
          })}
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

function Shop() {
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  if (theme && getSeason(theme)) {
    return <Navigate to={`/shop/season/${theme}`} replace />
  }

  if (theme) {
    const label = THEME_LABELS[theme] ?? theme
    const items = PRODUCTS.filter((p) => p.themes?.includes(theme as Theme))
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
            {cat.id === 'seasonal' && <SeasonTiles />}
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
