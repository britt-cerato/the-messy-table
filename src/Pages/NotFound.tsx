import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="product-not-found">
      <Helmet>
        <title>Page Not Found | The Messy Table</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>We couldn't find that page</h1>
      <p>It may have moved. Try the shop or the work ideas instead.</p>
      <Link to="/shop" className="back-link">Go to the shop →</Link>
      <Link to="/ideas" className="back-link">See work ideas →</Link>
    </div>
  )
}

export default NotFound
