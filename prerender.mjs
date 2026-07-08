/**
 * prerender.mjs
 *
 * After `vite build` produces the dist/ folder, this script:
 *   1. Starts a vite preview server pointing at dist/
 *   2. Visits every route in the app using Puppeteer
 *   3. Saves the fully-rendered HTML into dist/<route>/index.html
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

const ALL_ROUTES = [...STATIC_ROUTES, ...productRoutes, ...ideaRoutes]

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
  const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1))
  const outFile = path.join(outDir, 'index.html')

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
