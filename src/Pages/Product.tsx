import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'

function Product() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProduct(id) : null
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="product-not-found">
        <Helmet>
          <title>Product Not Found — The Messy Table</title>
        </Helmet>
        <h2>Product not found</h2>
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    )
  }

  const allImages = [product.image, ...product.gallery]
  const pageUrl = `https://themessytable.com/shop/${product.id}`
  const pageTitle = `${product.name} — The Messy Table`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'The Messy Table' },
    offers: {
      '@type': 'Offer',
      price: product.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.etsy,
      seller: { '@type': 'Organization', name: 'The Messy Table' },
    },
    audience: {
      '@type': 'EducationalAudience',
      audienceType: 'Montessori classroom, homeschool families, Pre-K to Grade 2',
    },
  }

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${product.description} ${product.details.join('. ')}.`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={product.description} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>
      <div className="product-page-breadcrumb">
        <Link to="/shop">Shop</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-page">
        <div className="product-page-images">
          <img
            src={allImages[activeImage]}
            alt={`${product.name} — Montessori ${product.categories[0]} work`}
            className="product-page-image"
          />
          {allImages.length > 1 && (
            <div className="product-page-thumbnails">
              {allImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} photo ${i + 1}`}
                  className={`product-thumbnail ${i === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-page-info">
          <h2>{product.name}</h2>
          <p className="product-page-price">{product.price}</p>
          <p className="product-page-description">{product.description}</p>

          <ul className="product-page-details">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <a
            href={`mailto:themessytablenh@gmail.com?subject=Order Request: ${encodeURIComponent(product.name)}&body=Hi Kerri!%0D%0A%0D%0AI'd love to order the ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)}).%0D%0A%0D%0APlease let me know how to complete my purchase!%0D%0A%0D%0AThanks!`}
            className="buy-button"
          >
            Order Now
          </a>

          <p className="product-page-note">
            Clicking "Order Now" will open an email to Kerri with your order details. She'll get back to you quickly to arrange payment and shipping! 💛
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
