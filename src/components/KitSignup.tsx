import { useEffect, useRef } from 'react'

// Kerri's "Monthly Mess" signup form from Kit (kit.com, formerly ConvertKit).
// Kit's embed script draws the form right where the script tag sits, so we
// add the tag inside this component's box after the page loads.
const KIT_FORM_UID = '35f13fda21'
const KIT_FORM_SRC = `https://the-messy-table.kit.com/${KIT_FORM_UID}/index.js`

function KitSignup() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    // Skip during pre-rendering (Puppeteer sets navigator.webdriver) so the
    // saved HTML doesn't contain a copy of Kit's form, and don't add the
    // script twice if React runs this effect again.
    if (!box || navigator.webdriver || box.querySelector('script')) return
    const script = document.createElement('script')
    script.async = true
    script.dataset.uid = KIT_FORM_UID
    script.src = KIT_FORM_SRC
    box.appendChild(script)
  }, [])

  return <div ref={boxRef} className="kit-signup" />
}

export default KitSignup
