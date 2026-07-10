import { useEffect, useRef, useState } from 'react'
import type { Product } from '../data/products'

// PayPal "Client ID" — this is a public identifier, not a secret. PayPal's own
// checkout script is designed to have this embedded directly in front-end
// code (every visitor's browser can already see it in the page source once
// the button loads), so it's safe to keep here rather than in an env file.
const PAYPAL_CLIENT_ID =
  'AYH8H87m5WuXVY2eaaiTCMgJqRe5VlqcOlR7WZaBXRIq-SGmNXzEhLz_q-2PmBuwf4bo_rsTOyi4SOCg'

// The PayPal SDK script is loaded once and shared across every Buy Now
// button on the site (visitors can navigate between product pages without a
// full page reload, so we don't want to inject the script more than once).
let paypalScriptPromise: Promise<void> | null = null

function loadPayPalScript(): Promise<void> {
  const existing = (window as unknown as { paypal?: unknown }).paypal
  if (existing) return Promise.resolve()
  if (paypalScriptPromise) return paypalScriptPromise

  paypalScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      paypalScriptPromise = null
      reject(new Error('Failed to load PayPal SDK'))
    }
    document.body.appendChild(script)
  })

  return paypalScriptPromise
}

// Minimal shape of the bits of the PayPal SDK this component actually uses —
// there's no official types package installed, so we describe just enough of
// the shape to avoid `any` while staying accurate to the real SDK.
interface PayPalOrderActions {
  order: {
    create: (options: Record<string, unknown>) => Promise<string>
    capture: () => Promise<unknown>
  }
}

interface PayPalButtonsInstance {
  render: (container: HTMLElement) => Promise<void>
}

interface PayPalNamespace {
  Buttons: (options: {
    style?: Record<string, unknown>
    createOrder: (data: unknown, actions: PayPalOrderActions) => Promise<string>
    onApprove: (data: unknown, actions: PayPalOrderActions) => Promise<void>
    onError?: (err: unknown) => void
  }) => PayPalButtonsInstance
}

interface BuyNowButtonProps {
  product: Product
}

function BuyNowButton({ product }: BuyNowButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'success'>('loading')

  const priceValue = product.price.replace(/[^0-9.]/g, '')
  const isDigital = product.categories.includes('printable')

  const fallbackMailto = `mailto:themessytablenh@gmail.com?subject=Order Request: ${encodeURIComponent(product.name)}&body=Hi Kerri!%0D%0A%0D%0AI'd love to order the ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)}).%0D%0A%0D%0APlease let me know how to complete my purchase!%0D%0A%0D%0AThanks!`

  useEffect(() => {
    let cancelled = false

    loadPayPalScript()
      .then(() => {
        if (cancelled || !containerRef.current) return
        const paypal = (window as unknown as { paypal?: PayPalNamespace }).paypal
        if (!paypal || !paypal.Buttons) {
          setStatus('error')
          return
        }

        paypal
          .Buttons({
            style: {
              layout: 'vertical',
              color: 'gold',
              shape: 'pill',
              label: 'paypal',
              height: 45,
            },
            createOrder: (_data: unknown, actions: PayPalOrderActions) =>
              actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    reference_id: product.id,
                    description: product.name,
                    amount: {
                      currency_code: 'USD',
                      value: priceValue,
                    },
                  },
                ],
                application_context: isDigital ? { shipping_preference: 'NO_SHIPPING' } : undefined,
              }),
            onApprove: async (_data: unknown, actions: PayPalOrderActions) => {
              await actions.order.capture()
              if (!cancelled) setStatus('success')
            },
            onError: () => {
              if (!cancelled) setStatus('error')
            },
          })
          .render(containerRef.current)
          .then(() => {
            if (!cancelled) setStatus('ready')
          })
          .catch(() => {
            if (!cancelled) setStatus('error')
          })
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id])

  if (status === 'success') {
    return (
      <div className="buy-now-success">
        <p>
          🎉 Thank you — your order went through! A receipt is on its way to your email, and Kerri's
          been notified so she can get it {isDigital ? 'sent your way' : 'ready and shipped'}.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <>
        <a href={fallbackMailto} className="buy-button">
          Order Now
        </a>
        <p className="product-page-note">
          Checkout didn't load just now — click above to email Kerri directly and arrange payment
          instead.
        </p>
      </>
    )
  }

  return (
    <div className="buy-now-wrapper">
      <div ref={containerRef} className="paypal-button-container" />
      {status === 'loading' && <p className="buy-now-loading">Loading checkout…</p>}
      <p className="product-page-note">
        <a href={fallbackMailto} className="buy-now-fallback-link">
          Trouble checking out? Email Kerri directly
        </a>
      </p>
    </div>
  )
}

export default BuyNowButton
