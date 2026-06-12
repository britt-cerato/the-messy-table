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
        <h2>Product not found</h2>
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    )
  }

  const allImages = [product.image, ...product.gallery]

  return (
    <div>
      <div className="product-page-breadcrumb">
        <Link to="/shop">Shop</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-page">
        <div className="product-page-images">
          <img
            src={allImages[activeImage]}
            alt={product.name}
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
            href={product.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            Buy on Etsy
          </a>

          <p className="product-page-note">
            You'll be taken to our Etsy shop to complete your purchase safely.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
