import PinterestIcon from './PinterestIcon'
import { PINTEREST_URL } from '../data/social'

const SITE_URL = 'https://themessytable.org'

/** Red "Follow on Pinterest" pill that opens Kerri's profile. */
export function FollowPinterestButton({ label = 'Follow on Pinterest' }: { label?: string }) {
  return (
    <a href={PINTEREST_URL} className="pinterest-button" target="_blank" rel="noopener noreferrer">
      <PinterestIcon /> {label}
    </a>
  )
}

/** Banner inviting readers to follow along on Pinterest. */
export function PinterestFollowBanner({ text }: { text?: string }) {
  return (
    <aside className="pinterest-banner">
      <p className="pinterest-banner-title">Follow along on Pinterest</p>
      <p className="pinterest-banner-text">
        {text ?? 'Kerri pins new works, seasonal activities and classroom ideas there first.'}
      </p>
      <FollowPinterestButton />
    </aside>
  )
}

/**
 * "Save" button that opens Pinterest's pin builder with this page's link,
 * picture and description filled in. `image` is a site path (e.g. an
 * imported asset) and `path` is the page's path, like /shop/bead-stair.
 */
export function SaveToPinterestButton({ path, image, description }: { path: string; image: string; description: string }) {
  const params = new URLSearchParams({
    url: `${SITE_URL}${path}`,
    media: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    description,
  })
  return (
    <a
      href={`https://www.pinterest.com/pin/create/button/?${params.toString()}`}
      className="pinterest-save-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PinterestIcon size={16} /> Save to Pinterest
    </a>
  )
}
