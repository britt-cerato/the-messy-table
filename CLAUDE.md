# The Messy Table — Claude Instructions

## Communication style

The user is still learning. Always explain what you're doing as you work — describe the action you're about to take, why you're taking it, and what effect it will have. Keep explanations clear and jargon-free.

## Available skills (installed globally at ~/.claude/skills/)

These come from the moss + method build methodology (github.com/timcerato/moss-method) and apply to any site work here. Reach for them instead of re-deriving the same checks from scratch:

- **seo-audit** — systematic SEO check: titles/descriptions, canonical links, schema.org coverage, sitemap completeness, alt text, internal linking. Run this before any "improve SEO" request.
- **deploy-cloudflare** — pre-flight checks and troubleshooting for Cloudflare Pages deploys (wrangler config, redirects, sitemap domain correctness, post-deploy verification).
- **scaffold-local-site** — project scaffolding patterns if a new page type or section needs to be built from scratch.
- **write-service-pages** / **write-location-pages** — copywriting patterns for SEO-optimized page content (not directly applicable to this product catalog, but useful if service/location-style pages are ever added).
- **confidence-check** — run before any non-trivial implementation to verify readiness.
- **troubleshoot** — systematic root-cause debugging, don't retry blind.
- **pm**, **brainstorm**, **deep-research**, **token-efficiency** — general-purpose workflow skills.

## SEO standards for this site

- Every page's `<Helmet>` block needs: `<title>` (≤60 chars), `<meta name="description">` (≤160 chars), `<link rel="canonical">`, and Open Graph tags (title/description/type/url/site_name/image).
- Add `schema.org` JSON-LD structured data where it fits the content type: `Product` on product pages, `FAQPage` wherever there's a visible FAQ list, `BlogPosting` on article-style pages, `Organization`/`Person`/`LocalBusiness` on Home/About/Contact.
- `public/sitemap.xml` is **generated**, not hand-maintained — `generate-sitemap.mjs` derives it from `src/data/products.ts` and `src/data/ideas.ts` at build time (wired into `npm run build`). Don't hand-edit `public/sitemap.xml` directly; edit the generator or the data files instead.
- All image `alt` text must be meaningful (product name, or descriptive text) — never empty or filename-derived.
- No `<div>` where a semantic element applies; one clear heading hierarchy per page.

## Performance / image standards

- Images are compressed via `vite-plugin-image-optimizer` (in `vite.config.ts`) at build time. **PNG: quality 100 (true lossless)** — PNG's algorithm shrinks files (tested: up to 77% smaller) without any quality tradeoff. **JPEG/JPG: quality 85 (visually lossless)** — testing showed quality 100 JPEG re-encodes came out *larger* than the original camera photos (phones already compress fairly aggressively), so those files got zero savings at true lossless. Quality 85 is the standard web-photo setting: no visible difference even zoomed in, but ~60-80% smaller. This was a deliberate tradeoff confirmed with the user on 2026-07-09 — don't lower these values further without asking first.
- Use `loading="lazy"` on below-the-fold images (already the pattern in product grids); the primary above-the-fold image on a page can use `loading="eager"`.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, Lighthouse mobile score 90+.

## Deployment

### Live site
- URL: https://themessytable.org
- Hosting: Cloudflare Pages
- GitHub repo: https://github.com/britt-cerato/the-messy-table

### How deployment works
Cloudflare Pages is connected to the GitHub repo and **auto-deploys on every push to `main`**.
- Build command: `npm run build` (runs TypeScript compile + Vite build + Puppeteer pre-render)
- Output directory: `dist`
- Node version: 20
- Pre-rendering: `prerender.mjs` visits all 53 routes with Puppeteer and saves full HTML — this fixes the CSR/SEO empty-page problem

### To deploy changes
1. Make changes locally
2. `git add <files> && git commit -m "message"`
3. `git push origin main`
4. Cloudflare Pages picks it up automatically — live in ~2 minutes

### Manual deploy (backup, if auto-deploy is down)
```bash
npm run build
npx wrangler pages deploy dist --project-name the-messy-table
```
Wrangler is installed as a dev dependency (`npm run wrangler` or `npx wrangler`).
First time: run `npx wrangler login` to authenticate.

### Cloudflare MCP server
The `@cloudflare/mcp-server-cloudflare` MCP does NOT support Pages deployments — it's for Workers/KV/R2/D1.
Use Wrangler CLI or the GitHub auto-deploy for all Pages work.

### Branches
- `main` — production branch, auto-deploys to themessytable.org
- `seo-optimization` — SEO overhaul branch (merged to main 2026-07-07)
