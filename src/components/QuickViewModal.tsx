import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

interface Props {
  product: Product
  onClose: () => void
}

export default function QuickViewModal({ product, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose} aria-label="Close quick view">✕</button>
        <div className="quick-view-content">
          <img src={product.image} alt={product.name} className="quick-view-image" />
          <div className="quick-view-info">
            <h2 className="quick-view-name">{product.name}</h2>
            <p className="quick-view-price">{product.price}</p>
            <p className="quick-view-description">{product.description}</p>
            <ul className="quick-view-details-list">
              {product.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <Link
              to={`/shop/${product.id}`}
              className="quick-view-full-link"
              onClick={onClose}
            >
              View Full Product →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
