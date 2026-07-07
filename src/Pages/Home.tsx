import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import heroImg from '../assets/products/IMG_7113-1.jpeg'

const FEATURED_IDS = ['write-the-room-spring', 'halloween-counting', 'valentines-mason-jar-addition']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

const SITE_URL = 'https://themessytable.com'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Messy Table',
  url: SITE_URL,
  description: 'Handmade Montessori-inspired classroom works and craft materials for teachers and homeschool families, made by Kerri, a Montessori educator with 5 years of experience in Southern New Hampshire.',
  founder: {
    '@type': 'Person',
    name: 'Kerri',
    jobTitle: 'Montessori Educator',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  sameAs: ['https://www.etsy.com/shop/TMTBYKerri'],
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>The Messy Table — Handmade Montessori Materials</title>
        <meta name="description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator with 5 years of experience in Southern NH. Shop nomenclature cards, language works, math activities, and seasonal crafts." />
        <meta property="og:title" content="The Messy Table — Handmade Montessori Materials" />
        <meta property="og:description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator with 5 years of experience in Southern NH. Shop nomenclature cards, language works, math activities, and seasonal crafts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Messy Table — Handmade Montessori Materials" />
        <meta name="twitter:description" content="Handmade Montessori-inspired classroom works by Kerri, a Montessori educator in Southern NH." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to The Messy Table</h2>
          <p>Classroom works, craft ideas, and a little glitter for the kiddos you love.</p>
          <Link to="/shop" className="hero-button">Shop Now</Link>
        </div>
        <div className="hero-image-wrap">
          <img src={heroImg} alt="Kerri's handmade Montessori works" className="hero-image" />
        </div>
      </section>
      <section className="home-audience-section">
        <h2 className="section-title">Who is this for?</h2>
        <p className="section-description">Whether you're managing a classroom of 22 or learning alongside one curious kid at home, there's something here for you.</p>
        <div className="home-audience-grid">
          <Link to="/for-teachers" className="home-audience-card home-audience-card--teachers">
            <span className="home-audience-icon">🍎</span>
            <h3>I'm a Teacher</h3>
            <p>Shelf-ready works, nomenclature cards, seasonal collections, and fine motor activities — made for the Pre-K to Grade 2 classroom.</p>
            <span className="home-audience-cta">See what's for teachers →</span>
          </Link>
          <Link to="/for-homeschool" className="home-audience-card home-audience-card--homeschool">
            <span className="home-audience-icon">🏡</span>
            <h3>I Homeschool</h3>
            <p>Printable PDFs, hands-on works, and seasonal activities that come alive on your kitchen table — no classroom setup required.</p>
            <span className="home-audience-cta">See what's for homeschoolers →</span>
          </Link>
        </div>
      </section>

      <section className="products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featured.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-what-section">
        <h2 className="section-title">What's in the Shop?</h2>
        <p className="section-description">Kerri makes two kinds of things — hands-on physical works she builds herself, and printable PDFs you can download and use right away.</p>
        <div className="home-what-grid">
          <div className="home-what-card">
            <span className="home-what-icon">✂️</span>
            <h3>Physical Works</h3>
            <p>Kerri prints, cuts, and assembles these by hand. They arrive ready to put on the shelf — nomenclature cards, clip card sets, fine motor works, and more.</p>
          </div>
          <div className="home-what-card">
            <span className="home-what-icon">🖨️</span>
            <h3>Printable Downloads</h3>
            <p>Instant PDF downloads you print at home. Worksheets, write the room activities, and seasonal packs — yours to print as many times as you need.</p>
          </div>
        </div>
      </section>

      <section className="ideas">
        <div className="ideas-content">
          <h2>Work Ideas</h2>
          <p>Seasonal themes, holiday works, and inspiration for your classroom or home — straight from Kerri's shelf.</p>
          <Link to="/ideas" className="ideas-button">Explore Work Ideas</Link>
        </div>
      </section>

      <section className="home-faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="home-faq-item">
            <h3>Are these physical items or digital downloads?</h3>
            <p>Both! Some products are printable PDFs (instant download), and others are physical works that Kerri hand-assembles and ships to you. Each listing clearly says which type it is.</p>
          </div>
          <div className="home-faq-item">
            <h3>What ages are these materials for?</h3>
            <p>Most works are designed for Pre-K through Grade 1 (ages 3–7). Some activities suit older children too. Each product listing includes the recommended age range.</p>
          </div>
          <div className="home-faq-item">
            <h3>How do I get my digital download after purchase?</h3>
            <p>After you complete your purchase on Etsy, you'll receive an email with a download link. You can also find your files in your Etsy account under "Purchases and Reviews."</p>
          </div>
          <div className="home-faq-item">
            <h3>Can I print a PDF more than once?</h3>
            <p>Yes! Once you purchase a printable, it's yours to print as many times as you need for your own home or classroom use.</p>
          </div>
          <div className="home-faq-item">
            <h3>How long does shipping take on physical items?</h3>
            <p>Physical works are made to order and typically ship within 3–5 business days. You'll receive tracking information as soon as your order is on its way.</p>
          </div>
          <div className="home-faq-item">
            <h3>Can I use these with a whole class?</h3>
            <p>Absolutely — classroom use is very welcome! Just please don't share, redistribute, or resell the digital files. Each teacher should have their own copy.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
