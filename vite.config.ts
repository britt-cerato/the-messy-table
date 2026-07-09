import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // JPEG/JPG: quality 85 (visually lossless, but not pixel-identical) — chosen
    // deliberately after testing showed quality:100 re-encodes were LARGER than
    // the original camera photos, so they got zero savings. 85 is the standard
    // web-photo quality: imperceptible difference, ~60-80% smaller files.
    // PNG: quality 100 (true lossless) — PNG's algorithm shrinks files without
    // this tradeoff, so no quality was given up to get the savings.
    ViteImageOptimizer({
      jpeg: { quality: 85 },
      jpg: { quality: 85 },
      png: { quality: 100 },
    }),
  ],
})
