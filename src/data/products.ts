import img7075 from '../assets/products/IMG_7075.jpeg'
import img7076 from '../assets/products/IMG_7076.jpeg'
import img7077 from '../assets/products/IMG_7077.jpeg'
import img7078 from '../assets/products/IMG_7078.jpeg'
import img7079 from '../assets/products/IMG_7079.jpeg'
import img7082 from '../assets/products/IMG_7082.jpeg'
import img7084 from '../assets/products/IMG_7084.jpeg'
import img7086 from '../assets/products/IMG_7086.jpeg'
import img7087 from '../assets/products/IMG_7087.jpeg'
import img7088 from '../assets/products/IMG_7088.jpeg'
import img7090 from '../assets/products/IMG_7090.jpeg'
import img7092 from '../assets/products/IMG_7092.jpeg'
import img7094 from '../assets/products/IMG_7094.jpeg'
import img7105 from '../assets/products/IMG_7105.jpeg'
import img7108 from '../assets/products/IMG_7108.jpeg'
import img7113 from '../assets/products/IMG_7113.jpeg'
import img7113_1 from '../assets/products/IMG_7113-1.jpeg'
import img7114 from '../assets/products/IMG_7114.jpeg'
import img7119 from '../assets/products/IMG_7119.jpeg'
import img7121 from '../assets/products/IMG_7121.jpeg'
import img7123 from '../assets/products/IMG_7123.jpeg'
import img7126 from '../assets/products/IMG_7126.jpeg'
import img7128 from '../assets/products/IMG_7128.jpeg'
import img7129 from '../assets/products/IMG_7129.jpeg'
import img7130 from '../assets/products/IMG_7130.jpeg'
import img7132 from '../assets/products/IMG_7132.jpeg'
import img7134 from '../assets/products/IMG_7134.jpeg'
import img7111 from '../assets/products/IMG_7111.jpeg'
import img7139 from '../assets/products/IMG_7139.jpeg'
import imgValentinesMasonJar from '../assets/products/valentines-mason-jar-addition.jpg'

export type Category = 'nomenclature' | 'language' | 'math' | 'seasonal'

export interface Product {
  id: string
  name: string
  price: string
  categories: Category[]
  image: string
  gallery: string[]
  description: string
  details: string[]
  etsy: string
}

const ETSY = 'https://www.etsy.com/shop/TheMessyTable'

export const PRODUCTS: Product[] = [
  // ── Nomenclature ──────────────────────────────────────────────
  {
    id: 'animal-nomenclature',
    name: 'Animal Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: img7105,
    gallery: [],
    description: 'Three-part nomenclature card sets for learning the parts of a frog, ladybug, and horse. Includes picture cards, label cards, and control cards — perfect for independent Montessori work.',
    details: ['Three sets: Frog, Ladybug & Horse', 'Three-part cards per set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2'],
    etsy: ETSY,
  },
  {
    id: 'penguin-nomenclature',
    name: 'Penguin Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: img7121,
    gallery: [img7119],
    description: 'Three-part nomenclature cards for learning the parts of a penguin — head, bill, tail, webbed feet and more. A favourite for winter and animal units.',
    details: ['Three-part card set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2', 'Great for science shelves'],
    etsy: ETSY,
  },
  {
    id: 'horse-bridle-nomenclature',
    name: 'English Bridle Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: img7126,
    gallery: [],
    description: 'Three-part nomenclature cards for learning the parts of an English bridle — noseband, browband, cheekpieces, throatlatch and more. Perfect for horse lovers.',
    details: ['Three-part card set', 'Printed & hand-assembled', 'Suits Grade 1 and up', 'Great for equestrian or animal units'],
    etsy: ETSY,
  },
  {
    id: 'van-gogh-cards',
    name: 'Van Gogh Three Part Cards',
    price: '$18.00',
    categories: ['nomenclature'],
    image: img7075,
    gallery: [img7076, img7077],
    description: 'Three-part matching cards featuring Van Gogh masterpieces — Starry Night, Irises, Almond Blossom and more. A beautiful way to introduce children to fine art.',
    details: ['Three-part card set', '12 paintings included', 'Printed & hand-assembled', 'Suits Pre-K to Grade 3'],
    etsy: ETSY,
  },
  {
    id: 'human-development-cards',
    name: 'Human Development Three Part Cards',
    price: '$18.00',
    categories: ['nomenclature'],
    image: img7078,
    gallery: [img7079],
    description: 'Three-part nomenclature cards tracing human development from fertilisation to 40 weeks. A thoughtful, accurate resource for science and life cycles.',
    details: ['Three-part card set', 'Covers zygote through 40-week fetus', 'Printed & hand-assembled', 'Suits Grade 1 and up'],
    etsy: ETSY,
  },

  // ── Language ──────────────────────────────────────────────────
  {
    id: 'valentines-word-building',
    name: "Valentine's Day Word Building",
    price: '$12.00',
    categories: ['language'],
    image: img7123,
    gallery: [],
    description: "CVC word building cards with a Valentine's heart theme. Children build and read short vowel words — a sweet way to practise phonics in February.",
    details: ['30+ CVC word cards', 'Short vowel families', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'spring-flower-matching',
    name: 'Spring Flower Matching Work',
    price: '$15.00',
    categories: ['language'],
    image: img7113_1,
    gallery: [img7113, img7114, img7111],
    description: 'Match card to object with beautiful spring flowers — daffodil, sunflower, tulip, rose, orchid, lotus, hibiscus and more. Pairs perfectly with real flower objects.',
    details: ['8 flower matching cards', 'Includes picture & label cards', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'word-family-flower-pots',
    name: 'Word Family Flower Pots',
    price: '$12.00',
    categories: ['language'],
    image: img7108,
    gallery: [],
    description: 'Sort picture cards into the correct word family flower pot — _at, _un, _in, _og, _en and more. A hands-on phonics work kiddos love.',
    details: ['5 word family pots', 'Picture sorting cards included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'write-the-room-summer',
    name: 'Write the Room — Summer',
    price: '$12.00',
    categories: ['language'],
    image: img7092,
    gallery: [],
    description: 'Place picture cards around the room and have children find and write each word on their recording sheet. A summer-themed favourite that gets kiddos moving!',
    details: ['14 picture cards', 'Recording sheet included', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'spring-worksheets',
    name: 'Spring Worksheets',
    price: '$12.00',
    categories: ['language'],
    image: img7132,
    gallery: [img7134],
    description: 'A spring-themed worksheet pack covering vowels, blends, digraphs and flower sorting. Includes Growing Sounds, Bales of Vowels, Planting Digraphs, Ladybug Vowels and Birdhouse Blends.',
    details: ['5 worksheets included', 'Covers vowels, blends & digraphs', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },

  // ── Math ──────────────────────────────────────────────────────
  {
    id: 'tally-marks-clip-cards',
    name: 'Tally Mark Clip Cards',
    price: '$12.00',
    categories: ['math'],
    image: img7130,
    gallery: [],
    description: 'Count the tally marks on each bird card and clip the correct number. A fun, hands-on way to practise tally marks and counting.',
    details: ['15 clip cards', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 2'],
    etsy: ETSY,
  },
  {
    id: 'bead-stair',
    name: 'Bead Stair',
    price: '$15.00',
    categories: ['math'],
    image: img7128,
    gallery: [],
    description: 'A Montessori-inspired colour-coded bead stair for learning numbers 1–10. Each number has its own colour, helping children visualise quantity and build number sense.',
    details: ['Numbers 1–10', 'Colour-coded by number', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'ten-frames-clip-cards',
    name: 'Ten Frames Clip Cards',
    price: '$12.00',
    categories: ['math'],
    image: img7129,
    gallery: [],
    description: 'Count the dots on the ten frame and clip the correct number. Rainbow-themed cards covering numbers 11–20 — perfect for building number sense beyond 10.',
    details: ['Numbers 11–20', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'valentines-mason-jar-addition',
    name: "Valentine's Day Mason Jar Addition",
    price: '$12.00',
    categories: ['math', 'seasonal'],
    image: imgValentinesMasonJar,
    gallery: [],
    description: "Addition equation cards with an adorable Valentine's mason jar theme. Children solve the equation and write the sum in the answer box — a sweet way to practise addition facts in February.",
    details: ['Addition facts included', 'Answer box on each card', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'fall-math-clip-cards',
    name: 'Fall Math Clip Cards',
    price: '$12.00',
    categories: ['math'],
    image: img7088,
    gallery: [],
    description: 'Count the fall objects and clip the correct number. Autumn-themed clip cards with pumpkins, apples, leaves and more — a cosy seasonal math work.',
    details: ['Numbers 1–5', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },

  // ── Seasonal ──────────────────────────────────────────────────
  {
    id: 'halloween-counting',
    name: 'Halloween Counting 1–10',
    price: '$15.00',
    categories: ['seasonal'],
    image: img7082,
    gallery: [img7084],
    description: 'Sort spooky Halloween objects onto numbered pumpkin cards 1–10. Spiders, bats, skulls, ghosts and more make counting irresistibly fun in October.',
    details: ['Pumpkin number cards 1–10', 'Objects not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'halloween-patterns',
    name: 'Halloween Pattern Work',
    price: '$12.00',
    categories: ['seasonal'],
    image: img7090,
    gallery: [],
    description: 'Complete the pattern using spooky Halloween objects — ghosts, skulls, spiders and pumpkins. A hands-on patterning work that kiddos beg to do in October.',
    details: ['Pattern strips included', 'Objects not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'thanksgiving-buttoning',
    name: 'Thanksgiving Turkey Buttoning Work',
    price: '$20.00',
    categories: ['seasonal'],
    image: img7087,
    gallery: [img7086],
    description: 'A practical life buttoning work with a Thanksgiving twist — a hand-sewn felt turkey with colourful feathers to button on and off. Builds fine motor skills while celebrating the season.',
    details: ['Hand-sewn felt turkey', 'Colourful removable feathers', 'Develops fine motor skills', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'st-patricks-day-worksheets',
    name: "St. Patrick's Day Worksheets",
    price: '$10.00',
    categories: ['seasonal'],
    image: img7094,
    gallery: [],
    description: "A St. Patrick's Day maths worksheet pack — Shamrock Math, Rainbow Addition, St. Patrick's Day Graphing, Clover Skip Counting and more.",
    details: ['5 worksheets included', 'Covers addition, graphing & skip counting', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'the-mitten',
    name: 'The Mitten Winter Work',
    price: '$18.00',
    categories: ['seasonal'],
    image: img7139,
    gallery: [],
    description: "A sequencing and retelling work based on Jan Brett's \"The Mitten.\" Includes hand-cut animal characters and a felt mitten for hands-on storytelling.",
    details: ['Hand-cut animal characters', 'Felt mitten included', 'Based on Jan Brett\'s "The Mitten"', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
]

export const CATEGORIES: { id: Category; label: string; sectionTitle: string; description: string }[] = [
  { id: 'nomenclature', label: 'Nomenclature', sectionTitle: 'Nomenclature', description: 'Picture cards, label cards, and control cards — children match the word to the image and check their own work. Great for science, art, and vocabulary.' },
  { id: 'language', label: 'Language', sectionTitle: 'Language Works', description: 'Hands-on phonics, word building, and reading activities for Pre-K through Grade 1.' },
  { id: 'math', label: 'Math', sectionTitle: 'Math Works', description: 'Concrete math activities that build number sense, counting, and early arithmetic skills.' },
  { id: 'seasonal', label: 'Seasonal', sectionTitle: 'Seasonal Works', description: 'Holiday and seasonal activities that keep the shelf fresh and kiddos excited all year long.' },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
