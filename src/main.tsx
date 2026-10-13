import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Pre-rendered pages already contain this page's head tags. Helmet adds them
// again on load without removing the old ones, so clear them first.
document.head
  .querySelectorAll('title, meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], meta[name="robots"]')
  .forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Signal to the prerender script that React has finished mounting
document.dispatchEvent(new Event('render-event'))
