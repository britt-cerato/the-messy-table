import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { IDEAS } from '../data/ideas'
import kerriPhoto from '../assets/kerri-about.jpg'
import heroCollage from '../assets/products/messy-table-collage-lavender.jpg'
import doodleGlitter from '../assets/doodles/doodle-glitter.svg'
import doodleSparkle from '../assets/doodles/doodle-sparkle.svg'
import doodleScissors from '../assets/doodles/doodle-scissors.svg'
import doodlePaperclip from '../assets/doodles/doodle-paperclip.svg'
import doodleFlower from '../assets/doodles/doodle-flower.svg'
import doodleCrayon from '../assets/doodles/doodle-crayon.svg'
import doodleGlueStick from '../assets/doodles/doodle-glue-stick.svg'
import heroPhoto1 from '../assets/products/halloween-counting-brew.jpg'
import heroPhoto2 from '../assets/products/rainbow-letter-matching.jpg'
import heroPhoto3 from '../assets/products/valentines-mason-jar-addition.jpg'

const FEATURED_IDS = ['write-the-room-spring', 'halloween-counting', 'valentines-mason-jar-addition']
const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!)

const PREVIEW_IDEAS = IDEAS.filter((i) => i.image).slice(0, 6)

const SITE_URL = 'https://themessytable.org'

const HOME_FAQS = [
  {
    q: 'Are these physical items or digital downloads?',
    a: 'Both! Some products are printable PDFs (instant download), and others are physical works that Kerri hand-assembles and ships to you. Each listing clearly says which type it is.',
  },
  {
    q: 'What ages are these materials for?',
    a: 'Most works are designed for Pre-K through Grade 1 (ages 3–7). Some activities suit older children too. Each product listing includes the recommended age range.',
  },
  {
    q: 'How do I get my digital download after purchase?',
    a: "After you place your order, Kerri will email the PDF directly to you. Just check your inbox — it'll be ready to print right away!",
  },
  {
    q: 'Can I print a PDF more than once?',
    a: "Yes! Once you purchase a printable, it's yours to print as many times as you need for your own home or classroom use.",
  },
  {
    q: 'How long does shipping take on physical items?',
    a: "Physical works are made to order and typically ship within 3–5 business days. You'll receive tracking information as soon as your order is on its way.",
  },
  {
    q: 'Can I use these with a whole class?',
    a: "Absolutely — classroom use is very welcome! Just please don't share, redistribute, or resell the digital files. Each teacher should have their own copy.",
  },
]

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Messy Table',
  url: SITE_URL,
  description:
    'Handmade Montessori-inspired classroom works and craft materials for teachers and homeschool families, made by Kerri, a Montessori educator with 5 years of experience in Southern New Hampshire.',
  founder: { '@type': 'Person', name: 'Kerri', jobTitle: 'Montessori Educator' },
  address: { '@type': 'PostalAddress', addressRegion: 'NH', addressCountry: 'US' },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Messy Table',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/shop?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

function WavyDivider() {
  return (
    <div className="section-divider-wavy" aria-hidden="true">
      <svg viewBox="0 0 1440 32" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" height="32">
        <path
          d="M0,16 C180,4 360,28 540,16 C720,4 900,28 1080,16 C1260,4 1440,28 1440,16"
          fill="none"
          stroke="#c3b1e1"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}

function TornDivider({ fromColor = '#faf6ef', toColor = '#f2ece0' }: { fromColor?: string; toColor?: string }) {
  return (
    <div className="torn-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" height="56">
        <rect width="1440" height="56" fill={fromColor} />
        <path
          d="M0,56 L0,28 C36,22 72,34 108,26 C144,18 180,32 216,24 C252,16 288,30 324,22 C360,14 396,28 432,20 C468,12 504,26 540,18 C576,10 612,24 648,16 C684,8 720,22 756,14 C792,6 828,20 864,12 C900,4 936,18 972,10 C1008,2 1044,16 1080,8 C1116,0 1152,14 1188,20 C1224,26 1260,12 1296,18 C1332,24 1368,10 1404,16 C1420,18 1432,14 1440,16 L1440,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
  )
}

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      <Helmet>
        <title>Handmade Montessori Materials | The Messy Table</title>
        <meta name="description" content="Handmade Montessori classroom works by Kerri — nomenclature cards, math works, write the room, and seasonal activities for Pre-K to Grade 2." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Handmade Montessori Materials | The Messy Table" />
        <meta property="og:description" content="Handmade Montessori classroom works by Kerri — nomenclature cards, math works, write the room, and seasonal activities for Pre-K to Grade 2." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:image" content={`${SITE_URL}${heroCollage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Handmade Montessori Materials | The Messy Table" />
        <meta name="twitter:description" content="Handmade Montessori classroom works by Kerri — nomenclature cards, math works, write the room, and seasonal activities for Pre-K to Grade 2." />
        <meta name="google-site-verification" content="hFgkrmtEqX8PHDfHHf0isj5rk6s9dtROYtYfnHKMYbQ" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      {/* ── Hero: Scattered Polaroids ── */}
      <section className="hero">
        <div className="hero-polaroids" aria-hidden="true">
          <div className="polaroid polaroid--1 polaroid--blush">
            <img src={heroPhoto1} alt="" className="polaroid-img" loading="eager" />
          </div>
          <div className="polaroid polaroid--2 polaroid--mint">
            <img src={heroPhoto2} alt="" className="polaroid-img" loading="eager" />
          </div>
          <div className="polaroid polaroid--3 polaroid--lavender">
            <img src={heroPhoto3} alt="" className="polaroid-img" loading="eager" />
          </div>
        </div>
        {/* doodles scattered across the hero */}
        <img src={doodleScissors}   alt="" aria-hidden="true" className="hero-glitter" style={{ top: '18%',  left: '8%',   width: '48px', opacity: 0.5,  transform: 'rotate(25deg)' }} />
        <img src={doodlePaperclip}  alt="" aria-hidden="true" className="hero-glitter" style={{ top: '62%',  left: '9%',   width: '34px', opacity: 0.45, transform: 'rotate(-10deg)' }} />
        <img src={doodleFlower}     alt="" aria-hidden="true" className="hero-glitter" style={{ top: '14%',  right: '9%',  width: '40px', opacity: 0.5 }} />
        <img src={doodleGlitter}    alt="" aria-hidden="true" className="hero-glitter" style={{ top: '68%',  right: '8%',  width: '44px', opacity: 0.5 }} />
        <img src={doodleSparkle}    alt="" aria-hidden="true" className="hero-glitter" style={{ top: '30%',  left: '22%',  width: '32px', opacity: 0.6 }} />
        <img src={doodleSparkle}    alt="" aria-hidden="true" className="hero-glitter" style={{ top: '20%',  right: '22%', width: '28px', opacity: 0.55, transform: 'rotate(45deg)' }} />
        <img src={doodleCrayon}     alt="" aria-hidden="true" className="hero-glitter" style={{ bottom:'12%', left: '15%', width: '36px', opacity: 0.4,  transform: 'rotate(-20deg)' }} />
        <img src={doodleGlueStick}  alt="" aria-hidden="true" className="hero-glitter" style={{ bottom:'10%', right:'14%', width: '36px', opacity: 0.42, transform: 'rotate(15deg)' }} />
        <div className="hero-card">
          <h2>Welcome to The Messy Table</h2>
          <p>Classroom works, craft ideas, and a little glitter for the kiddos you love.</p>
          <Link to="/shop" className="hero-button">Shop Now</Link>
        </div>
      </section>

      <TornDivider fromColor="#faf6ef" toColor="#f2ece0" />

      {/* ── Who Is This For (Index Cards) ── */}
      <section className="home-audience-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={doodleScissors} alt="" aria-hidden="true" className="hero-glitter" style={{ top: '12px', right: '5%', width: '52px', opacity: 0.45, transform: 'rotate(20deg)' }} />
        <img src={doodlePaperclip} alt="" aria-hidden="true" className="hero-glitter" style={{ bottom: '16px', left: '4%', width: '36px', opacity: 0.4, transform: 'rotate(-15deg)' }} />
        <h2 className="section-title">Who is this for?</h2>
        <p className="section-description">
          Whether you're managing a classroom of 22 or learning alongside one curious kid at home, there's something here for you.
        </p>
        <div className="home-audience-grid">
          <Link to="/for-teachers" className="home-audience-card home-audience-card--teachers">
            <span className="audience-label audience-label--teachers">for teachers</span>
            <p className="audience-headline">Classroom-ready projects &amp; seasonal craft ideas.</p>
            <ul className="audience-bullets">
              <li>Easy prep, bulk materials available</li>
              <li>Printable guides &amp; lesson plans</li>
              <li>Made for Pre-K to Grade 2</li>
            </ul>
            <div className="audience-icons">🍎 ✏️</div>
          </Link>
          <Link to="/for-homeschool" className="home-audience-card home-audience-card--homeschool">
            <span className="audience-label audience-label--homeschool">for homeschool parents</span>
            <p className="audience-headline">Open-ended activities for curious kids.</p>
            <ul className="audience-bullets">
              <li>Montessori-inspired, screen-free play</li>
              <li>Gentle learning &amp; creative exploration</li>
              <li>No classroom setup required</li>
            </ul>
            <div className="audience-icons">🏡 🌿</div>
          </Link>
        </div>
      </section>

      <WavyDivider />

      {/* ── Featured Products (Kraft Gift Tags) ── */}
      <section className="products" style={{ position: 'relative' }}>
        <img src={doodleCrayon} alt="" aria-hidden="true" className="hero-glitter" style={{ top: '24px', left: '3%', width: '44px', opacity: 0.4, transform: 'rotate(-30deg)' }} />
        <img src={doodleFlower} alt="" aria-hidden="true" className="hero-glitter" style={{ top: '20px', right: '3%', width: '40px', opacity: 0.45 }} />
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featured.map((product) => (
            <div key={product.id} className="product-card-wrap">
              <Link to={`/shop/${product.id}`} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <span className={`product-badge ${product.categories.includes('printable') ? 'product-badge--printable' : 'product-badge--physical'}`}>
                  {product.categories.includes('printable') ? 'Printable' : 'Ships to you'}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <WavyDivider />

      {/* ── What's in the Shop (Cut-Here) ── */}
      <section className="home-what-section" style={{ position: 'relative' }}>
        <img src={doodleGlitter} alt="" aria-hidden="true" className="hero-glitter" style={{ top: '18px', right: '5%', width: '40px', opacity: 0.42 }} />
        <img src={doodlePaperclip} alt="" aria-hidden="true" className="hero-glitter" style={{ bottom: '20px', left: '4%', width: '34px', opacity: 0.38, transform: 'rotate(-12deg)' }} />
        <h2 className="section-title">✂ What's in the Shop?</h2>
        <p className="section-description">
          Kerri makes two kinds of things — hands-on physical works she builds herself, and printable PDFs you can download and use right away.
        </p>
        <div className="home-what-split">
          <div className="home-what-col">
            <h3>✂️ Physical Works</h3>
            <ul className="home-what-bullets">
              <li>Handmade nomenclature card sets</li>
              <li>Clip cards &amp; matching activities</li>
              <li>Felt &amp; fine motor works</li>
              <li>Seasonal classroom kits</li>
            </ul>
          </div>
          <div className="home-what-vertical-cut" aria-hidden="true">
            <div className="cut-vertical-line" />
            <span className="cut-vertical-scissors">✂</span>
            <div className="cut-vertical-label">cut here</div>
            <div className="cut-vertical-line" />
          </div>
          <div className="home-what-col">
            <h3>🖨️ Printable Downloads</h3>
            <ul className="home-what-bullets">
              <li>Instant PDF downloads</li>
              <li>Write the room activities</li>
              <li>Tracing &amp; cutting worksheets</li>
              <li>Seasonal activity packs</li>
            </ul>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* ── Work Ideas (Masonry Pinterest Preview) ── */}
      <section className="ideas" style={{ position: 'relative' }}>
        <img src={doodleFlower}    alt="" aria-hidden="true" className="hero-glitter" style={{ top: '24px', right: '4%', width: '42px', opacity: 0.44 }} />
        <img src={doodleSparkle}  alt="" aria-hidden="true" className="hero-glitter" style={{ bottom: '24px', left: '3%', width: '30px', opacity: 0.48 }} />
        <div className="ideas-content">
          <h2>Work Ideas</h2>
          <p>Seasonal themes, holiday works, and inspiration for your classroom or home — straight from Kerri's shelf.</p>
          {PREVIEW_IDEAS.length > 0 && (
            <div className="ideas-masonry">
              {PREVIEW_IDEAS.map((idea) => (
                <Link key={idea.slug} to={`/ideas/${idea.slug}`} className="idea-masonry-card">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="idea-masonry-img"
                    loading="lazy"
                  />
                  <div className="idea-masonry-body">
                    <div className="idea-masonry-category">{idea.category}</div>
                    <div className="idea-masonry-title">{idea.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <Link to="/ideas" className="ideas-button">Explore All Work Ideas</Link>
        </div>
      </section>

      <WavyDivider />

      {/* ── Meet Kerri ── */}
      <section className="meet-kerri-section" style={{ position: 'relative' }}>
        <img src={doodleCrayon}   alt="" aria-hidden="true" className="hero-glitter" style={{ top: '20px', left: '3%', width: '38px', opacity: 0.38, transform: 'rotate(-25deg)' }} />
        <img src={doodleGlueStick} alt="" aria-hidden="true" className="hero-glitter" style={{ bottom: '20px', right: '4%', width: '36px', opacity: 0.4, transform: 'rotate(20deg)' }} />
        <div className="meet-kerri">
          <div className="meet-kerri-polaroid">
            <img src={kerriPhoto} alt="Kerri, founder of The Messy Table" className="meet-kerri-photo" loading="lazy" />
          </div>
          <div className="meet-kerri-content">
            <h2>Meet Kerri</h2>
            <p className="meet-kerri-bio">
              Kerri is a Montessori-trained educator based in Southern New Hampshire who started The Messy Table
              because she kept making things she couldn't find anywhere else. Every card is cut by hand, every felt
              work is sewn with care, and every printable is tested with real kids first. If it lives on her shelf,
              it makes it here.
            </p>
            <div className="meet-kerri-values">
              <div className="meet-kerri-value">
                <span className="meet-kerri-value-icon">🏔</span>
                Handmade in New Hampshire
              </div>
              <div className="meet-kerri-value">
                <span className="meet-kerri-value-icon">⬇️</span>
                Instant PDF downloads
              </div>
              <div className="meet-kerri-value">
                <span className="meet-kerri-value-icon">🖐</span>
                Designed for little hands
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* ── FAQ Accordion (Notebook Paper) ── */}
      <section className="home-faq-section" style={{ position: 'relative' }}>
        <img src={doodleScissors}  alt="" aria-hidden="true" className="hero-glitter" style={{ top: '24px', right: '5%', width: '44px', opacity: 0.38, transform: 'rotate(15deg)' }} />
        <img src={doodleFlower}    alt="" aria-hidden="true" className="hero-glitter" style={{ bottom: '28px', left: '4%', width: '36px', opacity: 0.42 }} />
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {HOME_FAQS.map((faq, i) => (
            <div key={i} className="faq-accordion-item">
              <button
                className={`faq-accordion-q${openFaq === i ? ' open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className="faq-accordion-arrow">▾</span>
              </button>
              {openFaq === i && (
                <div className="faq-accordion-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
