import { Link } from 'react-router-dom'
import { IDEAS } from '../data/ideas'
import valentinesImg from '../assets/products/valentines-mason-jar-addition.jpg'
import stPatricksImg from '../assets/products/rainbow-letter-matching.jpg'
import fallImg from '../assets/products/IMG_7084.jpeg'
import springImg from '../assets/products/IMG_7113-1.jpeg'
import winterImg from '../assets/products/IMG_7139.jpeg'
import craftsImg from '../assets/products/IMG_7087.jpeg'
import guideNomenclature from '../assets/products/IMG_7075.jpeg'
import guideCVC from '../assets/products/IMG_7108.jpeg'
import guideMath from '../assets/products/IMG_7164.jpeg'
import guideLanguageShelf from '../assets/products/IMG_7113-1.jpeg'
import guideFall from '../assets/products/IMG_7084.jpeg'
import guideArt from '../assets/products/IMG_7076.jpeg'
import guidePracticalLife from '../assets/products/IMG_7087.jpeg'
import guideBirdFeeder from '../assets/products/diy-bird-feeder.png'
import guideSeedBombs from '../assets/products/garden-seed-bombs.png'
import guideFlowerCrowns from '../assets/products/flower-crowns.png'
import guideIceCream from '../assets/products/should-i-share-ice-cream.png'
import guideNappingHouse from '../assets/products/the-napping-house.png'
import guideSpilledMilk from '../assets/products/it-looks-like-spilled-milk.png'

const IDEA_IMAGES: Record<string, string> = {
  'what-are-nomenclature-cards': guideNomenclature,
  'cvc-word-activities-kindergarten': guideCVC,
  'montessori-math-at-home': guideMath,
  'setting-up-a-language-shelf': guideLanguageShelf,
  'fall-montessori-activities': guideFall,
  'montessori-art-appreciation-children': guideArt,
  'practical-life-fine-motor-activities': guidePracticalLife,
  'diy-bird-feeder-craft': guideBirdFeeder,
  'garden-seed-bombs': guideSeedBombs,
  'flower-crowns': guideFlowerCrowns,
  'should-i-share-my-ice-cream': guideIceCream,
  'the-napping-house': guideNappingHouse,
  'it-looks-like-spilled-milk': guideSpilledMilk,
}

const THEMES = [
  {
    title: 'Fall & Halloween',
    description: 'Spooky counting, patterning, and fine motor works perfect for October shelves.',
    image: fallImg,
    shopLink: '/shop?theme=fall',
  },
  {
    title: "Valentine's Day",
    description: 'Sweet phonics and word building works to celebrate February in the classroom.',
    image: valentinesImg,
    shopLink: '/shop?theme=valentines',
  },
  {
    title: 'Spring',
    description: 'Fresh flower matching, language works, and crafts to welcome the new season.',
    image: springImg,
    shopLink: '/shop?theme=spring',
  },
  {
    title: 'Winter',
    description: 'Cosy sequencing, storytelling, and hands-on works for the winter months.',
    image: winterImg,
    shopLink: '/shop?theme=winter',
  },
  {
    title: "St. Patrick's Day",
    description: 'Lucky maths and fun seasonal worksheets to bring a little green to your shelf.',
    image: stPatricksImg,
    shopLink: '/shop?theme=st-patricks',
  },
  {
    title: 'Easy Crafts',
    description: 'Simple, mess-friendly crafts kiddos love — no fancy supplies required.',
    image: craftsImg,
    shopLink: '/shop',
  },
]

function Ideas() {
  return (
    <div>
      <section className="page-hero">
        <h2>Work Ideas</h2>
        <p>Seasonal themes and work inspiration from Kerri's classroom.</p>
      </section>

      <section className="products">
        <h2 className="section-title">Browse by Theme</h2>
        <div className="products-grid">
          {THEMES.map((theme) => (
            <Link to={theme.shopLink} key={theme.title} className="idea-theme-card">
              {theme.image
                ? <img src={theme.image} alt={theme.title} className="idea-theme-image" />
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
        <p className="section-description">Step-by-step activity guides, crafts, and classroom ideas from Kerri.</p>
        <div className="ideas-list">
          {IDEAS.map((idea) => (
            <Link to={`/ideas/${idea.slug}`} key={idea.slug} className="idea-list-card">
              {IDEA_IMAGES[idea.slug] && (
                <img src={IDEA_IMAGES[idea.slug]} alt={idea.title} className="idea-list-image" />
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
