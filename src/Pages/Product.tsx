import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'
import BuyNowButton from '../components/BuyNowButton'
import { SaveToPinterestButton } from '../components/Pinterest'

function Product() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProduct(id) : null
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="product-not-found">
        <Helmet>
          <title>Product Not Found — The Messy Table</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Product not found</h1>
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    )
  }

  const allImages = [product.image, ...product.gallery]
  const pageUrl = `https://themessytable.org/shop/${product.id}`
  const ageDetail = product.details.find((d) => d.toLowerCase().includes('suits') || d.toLowerCase().includes('ages'))
  // Keep titles ≤60 and descriptions ≤160 characters so Google shows them in full
  const longTitle = `${product.name} | Handmade Montessori | The Messy Table`
  const pageTitle = longTitle.length <= 60 ? longTitle : `${product.name} | The Messy Table`
  const baseDescription = `${product.description}${ageDetail ? ` ${ageDetail}.` : ''}`
  const withMaker = `${baseDescription} Handmade by Kerri in New Hampshire.`
  const pageDescription = withMaker.length <= 160
    ? withMaker
    : baseDescription.length <= 160
      ? baseDescription
      : `${baseDescription.slice(0, 157).replace(/\s+\S*$/, '')}…`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: allImages.map((img) => `https://themessytable.org${img}`),
    url: pageUrl,
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
      url: pageUrl,
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
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:image" content={`https://themessytable.org${allImages[0]}`} />
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
            alt={`${product.name}, Montessori ${product.categories[0]} work`}
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
          <h1>{product.name}</h1>
          <p className="product-page-price">{product.price}</p>
          <p className="product-page-description">{product.description}</p>

          <ul className="product-page-details">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          {product.categories.includes('classroom-setup') ? (
            <>
              <a
                href={`mailto:themessytablenh@gmail.com?subject=Order Request: ${encodeURIComponent(product.name)}&body=Hi Kerri!%0D%0A%0D%0AI'd love to order the ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)}).%0D%0A%0D%0APlease let me know how to complete my purchase!%0D%0A%0D%0AThanks!`}
                className="buy-button"
              >
                Order Now
              </a>
              <p className="product-page-note">
                This item is made to order. Clicking "Order Now" opens an email to Kerri. She'll ask
                for your personalization details (name, illustration choice) and then set up
                payment. 💛
              </p>
            </>
          ) : (
            <>
              <BuyNowButton product={product} />
              <p className="product-page-note">
                {product.categories.includes('printable')
                  ? 'Pay securely with PayPal. Kerri will email you the PDF so you can print it at home. 🖨️'
                  : "Pay securely with PayPal and enter your shipping address at checkout. Kerri will get your order ready to ship. 💛"}
              </p>
            </>
          )}

          <SaveToPinterestButton
            path={`/shop/${product.id}`}
            image={product.image}
            description={`${product.name}: ${product.description}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Product
