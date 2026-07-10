// Phones save photos in "sensor orientation" (often sideways) plus a hidden
// EXIF tag telling viewers how much to rotate for correct display. The build's
// image compressor (vite-plugin-image-optimizer) strips that tag to save
// space, which left several photos displaying sideways on the live site.
//
// This script physically rotates the actual pixels to match the intended
// orientation, then removes the now-redundant tag — so the photo displays
// correctly no matter what happens to it downstream (compression, format
// conversion, etc.). It runs automatically before every build (see
// package.json), so this bug class can't silently come back with future
// photos.
import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { extname, join } from 'path'

const DIRS = ['src/assets', 'src/assets/products']
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

let fixedCount = 0
let checkedCount = 0

for (const dir of DIRS) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!EXTENSIONS.has(extname(entry.name).toLowerCase())) continue

    const filePath = join(dir, entry.name)
    checkedCount++

    const image = sharp(filePath)
    const metadata = await image.metadata()

    if (metadata.orientation && metadata.orientation !== 1) {
      const buffer = await image.rotate().toBuffer()
      await sharp(buffer).toFile(filePath + '.tmp')
      const { rename } = await import('fs/promises')
      await rename(filePath + '.tmp', filePath)
      console.log(`[fix-orientation] rotated ${filePath} (was orientation ${metadata.orientation})`)
      fixedCount++
    }
  }
}

console.log(`[fix-orientation] checked ${checkedCount} images, fixed ${fixedCount}`)
