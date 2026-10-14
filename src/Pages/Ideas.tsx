import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { IDEAS } from '../data/ideas'
import valentinesImg from '../assets/products/valentines-mason-jar-addition.jpg'
import stPatricksImg from '../assets/products/rainbow-letter-matching.jpg'
import fallImg from '../assets/products/IMG_7084.jpeg'
import springImg from '../assets/products/IMG_7113-1.jpeg'
import winterImg from '../assets/products/IMG_7139.jpeg'
import craftsImg from '../assets/products/IMG_7087.jpeg'
import { DEFAULT_OG_IMAGE } from '../data/seo'


const THEMES = [
  {
    title: 'Fall & Halloween',
    description: 'Counting, patterning, and fine motor works for your October shelf.',
    image: fallImg,
    shopLink: '/shop/season/fall',
  },
  {
    title: "Valentine's Day",
    description: 'Phonics and word building works for February.',
    image: valentinesImg,
    shopLink: '/shop?theme=valentines',
  },
  {
    title: 'Spring',
    description: 'Flower matching, language works, and crafts for spring.',
    image: springImg,
    shopLink: '/shop/season/spring',
  },
  {
    title: 'Winter',
    description: 'Sequencing, storytelling, and hands-on works for the winter months.',
    image: winterImg,
    shopLink: '/shop/season/winter',
  },
  {
    title: "St. Patrick's Day",
    description: 'Math works and seasonal worksheets for March.',
    image: stPatricksImg,
    shopLink: '/shop?theme=st-patricks',
  },
  {
    title: 'Easy Crafts',
    description: 'Simple crafts that are OK to get messy. No special supplies needed.',
    image: craftsImg,
    shopLink: '/shop',
  },
]

function Ideas() {
  return (
    <div>
      <Helmet>
        <title>Work Ideas &amp; Montessori Activity Guides | The Messy Table</title>
        <meta name="description" content="Free Montessori activity guides and seasonal work ideas from Kerri's classroom: nomenclature, CVC words, math, and art." />
        <link rel="canonical" href="https://themessytable.org/ideas" />
        <meta property="og:title" content="Work Ideas & Montessori Activity Guides | The Messy Table" />
        <meta property="og:description" content="Free Montessori activity guides and seasonal work ideas from Kerri's classroom: nomenclature, CVC words, math, and art." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/ideas" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work Ideas & Montessori Activity Guides | The Messy Table" />
        <meta name="twitter:description" content="Free Montessori activity guides and seasonal work ideas from Kerri's classroom." />
      </Helmet>
      <section className="page-hero">
        <h1>Work Ideas</h1>
        <p>Seasonal themes and work ideas from Kerri's classroom.</p>
      </section>

      <section className="products">
        <h2 className="section-title">Browse by Theme</h2>
        <div className="products-grid">
          {THEMES.map((theme) => (
            <Link to={theme.shopLink} key={theme.title} className="idea-theme-card">
              {theme.image
                ? <img src={theme.image} alt={theme.title} className="idea-theme-image" loading="lazy" />
                : <div className="idea-theme-image" />
              }
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="products">
        <h2 className="section-title">Guides & Activities</h2>
        <p className="section-description">Step-by-step activity guides, crafts, and classroom ideas.</p>
        <div className="ideas-list">
          {IDEAS.map((idea) => (
            <Link to={`/ideas/${idea.slug}`} key={idea.slug} className="idea-list-card">
              {idea.image && (
                <img src={idea.image} alt={idea.title} className="idea-list-image" loading="lazy" />
              )}
              <div className="idea-list-text">
                <span className="idea-list-category">{idea.category}</span>
                <h3 className="idea-list-title">{idea.title}</h3>
                <p className="idea-list-excerpt">{idea.excerpt}</p>
                <span className="idea-list-read-more">Read the guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Ideas
