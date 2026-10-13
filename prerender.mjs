/**
 * prerender.mjs
 *
 * After `vite build` produces the dist/ folder, this script:
 *   1. Starts a vite preview server pointing at dist/
 *   2. Visits every route in the app using Puppeteer
 *   3. Saves the fully-rendered HTML into dist/<route>.html
 *
 * Run automatically via: npm run build  (see package.json)
 */

import puppeteer from 'puppeteer'
import { preview } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = 4173

// ── Routes ────────────────────────────────────────────────────────────────────
// Static routes
const STATIC_ROUTES = [
  '/',
  '/shop',
  '/about',
  '/contact',
  '/faq',
  '/ideas',
  '/for-teachers',
  '/for-homeschool',
  '/monthly-mess',
  // Season pages — keep in sync with SEASONS in src/data/products.ts
  '/shop/season/fall',
  '/shop/season/winter',
  '/shop/season/spring',
  '/shop/season/summer',
]

// Dynamic routes — derive from data files
// Products
const productsModule = await import('./src/data/products.ts').catch(() => null)
let productRoutes = []
if (productsModule) {
  productRoutes = productsModule.PRODUCTS.map((p) => `/shop/${p.id}`)
} else {
  // Fallback: read product IDs from products.ts via simple text scrape
  const productsText = fs.readFileSync(path.join(__dirname, 'src/data/products.ts'), 'utf8')
  const idMatches = [...productsText.matchAll(/^\s+id:\s+'([^']+)'/gm)]
  productRoutes = idMatches.map((m) => `/shop/${m[1]}`)
}

// Ideas
const ideasModule = await import('./src/data/ideas.ts').catch(() => null)
let ideaRoutes = []
if (ideasModule) {
  ideaRoutes = ideasModule.IDEAS.map((i) => `/ideas/${i.slug}`)
} else {
  const ideasText = fs.readFileSync(path.join(__dirname, 'src/data/ideas.ts'), 'utf8')
  const slugMatches = [...ideasText.matchAll(/^\s+slug:\s+'([^']+)'/gm)]
  ideaRoutes = slugMatches.map((m) => `/ideas/${m[1]}`)
}

// Monthly Mess issues
const messText = fs.readFileSync(path.join(__dirname, 'src/data/monthlyMess.ts'), 'utf8')
const messRoutes = [...messText.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((m) => `/monthly-mess/${m[1]}`)

// '/' goes last: it overwrites dist/index.html, and vite preview serves that
// file as the starting HTML for every other route. If Home were rendered
// first, every page would inherit Home's title, description and canonical.
const ALL_ROUTES = [...STATIC_ROUTES.filter((r) => r !== '/'), ...productRoutes, ...ideaRoutes, ...messRoutes, '/404', '/']

console.log(`\n[prerender] Will pre-render ${ALL_ROUTES.length} routes`)
console.log('[prerender] Routes:', ALL_ROUTES.join(', '), '\n')

// ── Start preview server ───────────────────────────────────────────────────────
console.log('[prerender] Starting vite preview server…')
const server = await preview({
  preview: {
    port: PORT,
    strictPort: true,
  },
})

// ── Launch Puppeteer ───────────────────────────────────────────────────────────
console.log('[prerender] Launching Puppeteer…')
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

let failed = 0

for (const route of ALL_ROUTES) {
  const url = `http://localhost:${PORT}${route}`
  // Write /shop as dist/shop.html (not dist/shop/index.html). Cloudflare Pages
  // serves foo.html at /foo, but serves foo/index.html at /foo/ and redirects
  // /foo there, which made Google see every sitemap/canonical URL as a
  // redirect. '/404' renders the catch-all NotFound page; Cloudflare Pages
  // serves dist/404.html with a real 404 status for any unknown URL.
  const outFile =
    route === '/' ? path.join(DIST, 'index.html')
    : route === '/404' ? path.join(DIST, '404.html')
    : path.join(DIST, `${route.slice(1)}.html`)
  const outDir = path.dirname(outFile)

  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

    // Wait for React to render (the render-event is dispatched from main.tsx)
    await page.waitForFunction(
      () => document.querySelector('[data-rendered]') !== null || document.title !== '',
      { timeout: 10000 }
    ).catch(() => {
      // Fallback: just wait a moment for rendering
    })

    // Small extra wait to ensure Helmet has updated the <head>
    await new Promise((r) => setTimeout(r, 500))

    const html = await page.content()
    await page.close()

    // Guard against duplicate head tags (one per page, or Google ignores them)
    const head = html.slice(0, html.indexOf('</head>'))
    const counts = {
      title: (head.match(/<title[ >]/g) || []).length,
      description: (head.match(/<meta name="description"/g) || []).length,
      canonical: (head.match(/<link rel="canonical"/g) || []).length,
    }
    const dupes = Object.entries(counts).filter(([, n]) => n > 1)
    if (dupes.length) throw new Error(`duplicate head tags: ${dupes.map(([k, n]) => `${n} ${k}`).join(', ')}`)

    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(outFile, html, 'utf8')
    console.log(`[prerender] ✓  ${route}  →  ${outFile.replace(DIST, 'dist')}`)
  } catch (err) {
    console.error(`[prerender] ✗  ${route}  →  ${err.message}`)
    failed++
  }
}

await browser.close()
await server.httpServer.close()

if (failed > 0) {
  console.error(`\n[prerender] Done with ${failed} failed route(s). Check errors above.\n`)
  process.exit(1)
} else {
  console.log(`\n[prerender] All ${ALL_ROUTES.length} routes pre-rendered successfully.\n`)
}
