/**
 * generate-sitemap.mjs
 *
 * Regenerates public/sitemap.xml from the same data sources prerender.mjs
 * uses for its route list (src/data/products.ts, src/data/ideas.ts), so the
 * sitemap can't drift out of sync with the actual routes again.
 *
 * Run automatically via: npm run build  (see package.json)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://themessytable.org'
const OUT_FILE = path.join(__dirname, 'public/sitemap.xml')

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/shop', changefreq: 'weekly', priority: '0.9' },
  { path: '/ideas', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/faq', changefreq: 'monthly', priority: '0.5' },
  { path: '/for-teachers', changefreq: 'monthly', priority: '0.7' },
  { path: '/for-homeschool', changefreq: 'monthly', priority: '0.7' },
]

// Products import image files, which plain Node can't load — read the source
// as text and scrape `id:` fields the same way prerender.mjs does.
const productsText = fs.readFileSync(path.join(__dirname, 'src/data/products.ts'), 'utf8')
const productsArrayText = productsText.split('export const PRODUCTS')[1].split('export const CATEGORIES')[0]
const productRoutes = [...productsArrayText.matchAll(/^\s+id:\s+'([^']+)'/gm)].map((m) => ({
  path: `/shop/${m[1]}`,
  changefreq: 'monthly',
  priority: '0.8',
}))

const ideasText = fs.readFileSync(path.join(__dirname, 'src/data/ideas.ts'), 'utf8')
const ideaRoutes = [...ideasText.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((m) => ({
  path: `/ideas/${m[1]}`,
  changefreq: 'monthly',
  priority: '0.8',
}))

const ALL_ROUTES = [...STATIC_ROUTES, ...productRoutes, ...ideaRoutes]

const urlEntries = ALL_ROUTES.map(
  ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

fs.writeFileSync(OUT_FILE, xml, 'utf8')
console.log(`[generate-sitemap] Wrote ${ALL_ROUTES.length} URLs to public/sitemap.xml`)
