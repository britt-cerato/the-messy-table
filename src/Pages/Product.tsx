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
  const pageUrl = `https://themessytable.org/shop/${product.id}`
  const ageDetail = product.details.find((d) => d.toLowerCase().includes('suits') || d.toLowerCase().includes('ages'))
  const pageTitle = `${product.name} — Handmade Montessori ${product.categories[0].charAt(0).toUpperCase() + product.categories[0].slice(1).replace(/-/g, ' ')} Work | The Messy Table`
  const pageDescription = `${product.description}${ageDetail ? ` ${ageDetail}.` : ''} Handmade Montessori-inspired material by Kerri, a Montessori educator in Southern NH.`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'The Messy Table' },
    additionalProperty: product.details.map((d) => ({
      '@type': 'PropertyValue',
      value: d,
    })),
    offers: {
      '@type': 'Offer',
      price: product.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.etsy,
      seller: {
        '@type': 'Organization',
        name: 'The Messy Table',
        url: 'https://themessytable.org',
      },
    },
    audience: {
      '@type': 'EducationalAudience',
      audienceType: 'Montessori classroom, homeschool families, Pre-K to Grade 2',
      educationalRole: 'student',
    },
    manufacturer: {
      '@type': 'Person',
      name: 'Kerri',
      jobTitle: 'Montessori Educator',
    },
  }

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
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
            loading="eager"
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
                  loading="lazy"
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
            {product.categories.includes('printable')
              ? 'Clicking "Order Now" will open an email to Kerri. Once payment is arranged, she\'ll email you the PDF straight away — ready to print at home! 🖨️'
              : 'Clicking "Order Now" will open an email to Kerri with your order details. She\'ll get back to you quickly to arrange payment and shipping! 💛'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
