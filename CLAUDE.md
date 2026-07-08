# The Messy Table — Claude Instructions

## Communication style

The user is still learning. Always explain what you're doing as you work — describe the action you're about to take, why you're taking it, and what effect it will have. Keep explanations clear and jargon-free.

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
