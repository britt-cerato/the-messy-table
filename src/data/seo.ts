import defaultShareImage from '../assets/products/messy-table-collage-lavender.jpg'

export const SITE_URL = 'https://themessytable.org'

/** Share picture for pages that don't have their own (Pinterest, Facebook, etc.). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}${defaultShareImage}`

/** "<name> | The Messy Table", or just the name if that would pass 60 characters. */
export function pageTitle(name: string): string {
  const full = `${name} | The Messy Table`
  return full.length <= 60 ? full : name
}

/** Trim a description to ~155 characters at a word break so Google shows it in full. */
export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, '')}…`
}
