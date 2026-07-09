import img7075 from '../assets/products/IMG_7075.jpeg'
import img7076 from '../assets/products/IMG_7076.jpeg'
import img7077 from '../assets/products/IMG_7077.jpeg'
import img7078 from '../assets/products/IMG_7078.jpeg'
import img7079 from '../assets/products/IMG_7079.jpeg'
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
import img7129 from '../assets/products/IMG_7129.jpeg'
import img7130 from '../assets/products/IMG_7130.jpeg'
import img7132 from '../assets/products/IMG_7132.jpeg'
import img7134 from '../assets/products/IMG_7134.jpeg'
import img7134new from '../assets/products/IMG_7134-new.jpeg'
import img7111 from '../assets/products/IMG_7111.jpeg'
import img7139 from '../assets/products/IMG_7139.jpeg'
import img7164 from '../assets/products/IMG_7164.jpeg'
import imgDressUpSnowman from '../assets/products/dress-up-snowman.jpeg'
import imgDressUpSnowman2 from '../assets/products/dress-up-snowman-2.jpeg'
import imgBuildASnowman from '../assets/products/build-a-snowman.jpeg'
import imgBuildASnowman2 from '../assets/products/build-a-snowman-2.jpeg'
import imgValentinesMasonJar from '../assets/products/valentines-mason-jar-addition.jpg'
import imgRainbowLetterMatching from '../assets/products/rainbow-letter-matching.jpg'
import imgIdentifyingNumberToObject from '../assets/products/identifying-number-to-object.jpg'
import imgHumanDevelopmentCards from '../assets/products/human-development-cards.jpeg'
import imgWriteTheRoomSpring from '../assets/products/write-the-room.jpeg'
import imgWriteTheRoomRead from '../assets/products/write-the-room-read.jpeg'
import imgEarthDayWriteTheRoom from '../assets/products/earth-day-write-the-room.jpeg'
import imgCubbyLabels from '../assets/products/cubby-labels.jpeg'
import imgAnimalTracksBooklet from '../assets/products/animal-tracks-booklet.jpeg'
import imgAnimalTracksMatching from '../assets/products/animal-tracks-matching.jpeg'
import imgVanGoghMatching from '../assets/products/van-gogh-matching.jpeg'
import imgCubbyLabels2 from '../assets/products/cubby-labels-2.jpeg'
import imgNameTags from '../assets/products/name-tags-2.jpeg'
import imgNameTags2 from '../assets/products/name-tags.jpeg'

export type Category = 'nomenclature' | 'language' | 'math' | 'seasonal' | 'classroom-setup' | 'printable'
export type Theme = 'valentines' | 'st-patricks' | 'fall' | 'spring' | 'winter'

export interface Product {
  id: string
  name: string
  price: string
  categories: Category[]
  themes?: Theme[]
  image: string
  gallery: string[]
  description: string
  details: string[]
  etsy: string
}

const ETSY = 'https://www.etsy.com/shop/TMTBYKerri'

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
    image: imgHumanDevelopmentCards,
    gallery: [img7078, img7079],
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
    themes: ['valentines'],
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
    themes: ['spring'],
    image: img7113_1,
    gallery: [img7113, img7114, img7111],
    description: 'Match card to object with beautiful spring flowers — daffodil, sunflower, tulip, rose, orchid, lotus, hibiscus and more. Pairs perfectly with real flower objects.',
    details: ['8 flower matching cards', 'Includes picture & label cards', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'word-family-flower-pots',
    name: 'Flower Pot Ending Sounds',
    price: '$12.00',
    categories: ['language'],
    themes: ['spring'],
    image: img7108,
    gallery: [],
    description: 'Organize the corresponding ending sound picture to the correct flower pot.',
    details: ['5 word family pots', 'Picture sorting cards included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'write-the-room-summer',
    name: 'Write the Room — Summer',
    price: '$12.00',
    categories: ['language', 'printable'],
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
    categories: ['language', 'printable'],
    themes: ['spring'],
    image: img7134new,
    gallery: [img7132, img7134],
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
    image: img7164,
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
    themes: ['valentines'],
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
    themes: ['fall'],
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
    themes: ['fall'],
    image: img7084,
    gallery: [],
    description: 'Sort spooky Halloween objects onto numbered pumpkin cards 1–10. Spiders, bats, skulls, ghosts and more make counting irresistibly fun in October.',
    details: ['Pumpkin number cards 1–10', 'Objects not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'halloween-patterns',
    name: 'Halloween Pattern Work',
    price: '$12.00',
    categories: ['seasonal'],
    themes: ['fall'],
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
    themes: ['fall'],
    image: img7087,
    gallery: [img7086],
    description: 'A practical life buttoning work with a Thanksgiving twist — a hand-sewn felt turkey with colourful feathers to button on and off. Builds fine motor skills while celebrating the season.',
    details: ['Hand-sewn felt turkey', 'Colourful removable feathers', 'Develops fine motor skills', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'identifying-number-to-object',
    name: 'Identifying Number to Object',
    price: '$12.00',
    categories: ['math', 'seasonal', 'printable'],
    themes: ['st-patricks'],
    image: imgIdentifyingNumberToObject,
    gallery: [],
    description: "Match the number to the corresponding number of objects in this St. Patrick's Day themed work.",
    details: ['Numbers practice included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'rainbow-letter-matching',
    name: 'Rainbow Letter Matching',
    price: '$12.00',
    categories: ['language', 'seasonal'],
    themes: ['st-patricks'],
    image: imgRainbowLetterMatching,
    gallery: [],
    description: "A rainbow-themed letter matching work where children clip clothespins labelled with letters around the arc of a colourful rainbow. Perfect for St. Patrick's Day or any time you want to make alphabet practice irresistible.",
    details: ['All 26 letters included', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'st-patricks-day-worksheets',
    name: "St. Patrick's Day Worksheets",
    price: '$10.00',
    categories: ['seasonal', 'printable'],
    themes: ['st-patricks'],
    image: img7094,
    gallery: [],
    description: "A St. Patrick's Day maths worksheet pack — Shamrock Math, Rainbow Addition, St. Patrick's Day Graphing, Clover Skip Counting and more.",
    details: ['5 worksheets included', 'Covers addition, graphing & skip counting', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'dress-up-snowman',
    name: 'Dress Up a Snowman',
    price: '$18.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgDressUpSnowman,
    gallery: [imgDressUpSnowman2],
    description: 'Mix and match hats, scarves, and buttons to dress up a snowman! Children use the reference card to recreate the outfit or create their own. A fun and imaginative winter work for Pre-K and Kindergarten.',
    details: ['Snowman mat included', 'Multiple outfit cards', 'Hats, scarves & button pieces', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'build-a-snowman',
    name: 'Build a Snowman Alphabet Work',
    price: '$20.00',
    categories: ['language', 'seasonal'],
    themes: ['winter'],
    image: imgBuildASnowman,
    gallery: [imgBuildASnowman2],
    description: 'Match picture cards to the correct beginning letter on the snowman board. Children sort all 26 letters using picture oval cards — a hands-on alphabet work with a cosy winter twist.',
    details: ['All 26 letters included', 'Picture sorting oval cards', 'Snowman sorting board', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  {
    id: 'the-mitten',
    name: 'The Mitten Winter Work',
    price: '$18.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: img7139,
    gallery: [],
    description: "A sequencing and retelling work based on Jan Brett's \"The Mitten.\" Includes hand-cut animal characters and a felt mitten for hands-on storytelling.",
    details: ['Hand-cut animal characters', 'Felt mitten included', 'Based on Jan Brett\'s "The Mitten"', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'write-the-room-spring',
    name: 'Write the Room — Spring',
    price: '$12.00',
    categories: ['language', 'printable'],
    themes: ['spring'],
    image: imgWriteTheRoomSpring,
    gallery: [],
    description: 'A spring-themed write the room activity! Place picture cards around the classroom, then children walk around, find each card, and write the word on their recording sheet. A fun way to get kiddos moving and practising spelling at the same time.',
    details: ['14 spring picture cards', 'Recording sheet included', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'i-love-to-read-write-the-room',
    name: 'I Love to Read! Write the Room',
    price: '$12.00',
    categories: ['language', 'printable'],
    image: imgWriteTheRoomRead,
    gallery: [],
    description: 'Children find each picture card around the room, read the word, and draw a matching picture in the box on their recording sheet. A lovely activity for building reading confidence and visual comprehension.',
    details: ['12 picture cards', 'Recording sheet included', 'Printable PDF — instant download', 'Suits Pre-K to Kindergarten'],
    etsy: ETSY,
  },
  // ── Classroom Setup ───────────────────────────────────────────
  {
    id: 'cubby-labels',
    name: 'Custom Cubby Labels',
    price: '$15.00',
    categories: ['classroom-setup'],
    image: imgCubbyLabels,
    gallery: [imgCubbyLabels2],
    description: 'Personalised cubby labels made to order with each child\'s name and a cute illustrated plant. A beautiful way to make every student feel at home in your classroom.',
    details: ['Custom names per label', 'Choice of plant illustration', 'Printed & hand-cut', 'Contact Kerri to place a custom order'],
    etsy: ETSY,
  },
  {
    id: 'name-tags',
    name: 'Custom Desk Name Tags',
    price: '$18.00',
    categories: ['classroom-setup'],
    image: imgNameTags,
    gallery: [imgNameTags2],
    description: 'Personalised desk name tags made to order — featuring each child\'s name, a watercolour illustration, the full alphabet, and a number line. A functional and beautiful addition to any classroom.',
    details: ['Custom names per tag', 'Alphabet & number line included', 'Watercolour illustration', 'Contact Kerri to place a custom order'],
    etsy: ETSY,
  },

  {
    id: 'earth-day-write-the-room',
    name: 'Earth Day Write the Room',
    price: '$12.00',
    categories: ['language', 'seasonal', 'printable'],
    image: imgEarthDayWriteTheRoom,
    gallery: [],
    description: 'An Earth Day write the room activity! Children walk around the room finding picture cards, then write the matching word on their recording sheet. A great way to build vocabulary while celebrating our planet.',
    details: ['Earth Day themed picture cards', 'Recording sheet included', 'Printable PDF — instant download', 'Suits Kindergarten to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'animal-tracks-booklet',
    name: 'Animal Tracks Booklet',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalTracksBooklet,
    gallery: [],
    description: 'A printed and bound "Footprints of Forest Animals" booklet — a beautiful non-fiction reader that introduces children to the tracks left by woodland creatures. Great for science shelves and nature study.',
    details: ['Printed & ring-bound', 'Forest animals included', 'Suits Pre-K to Grade 1', 'Great paired with the Animal Tracks Matching Work'],
    etsy: ETSY,
  },
  {
    id: 'animal-tracks-matching',
    name: 'Animal Tracks Matching Work',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalTracksMatching,
    gallery: [],
    description: 'Children match each animal photo card to its corresponding track card — a hands-on science work that builds observation skills and nature vocabulary. Includes forest animals like moose, deer, raccoon, and more.',
    details: ['Animal photo + track card pairs', 'Self-correcting design', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
  {
    id: 'van-gogh-matching',
    name: 'Van Gogh Matching Work',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgVanGoghMatching,
    gallery: [],
    description: 'A beautiful art matching work featuring the paintings of Vincent Van Gogh. Children match identical scallop-edged cards — a quiet, focused activity that builds visual discrimination and introduces great works of art.',
    details: ['Scallop-edged art cards', 'Features Van Gogh paintings', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
    etsy: ETSY,
  },
]

export const CATEGORIES: { id: Category; label: string; sectionTitle: string; description: string }[] = [
  { id: 'nomenclature', label: 'Nomenclature', sectionTitle: 'Nomenclature', description: 'Picture cards, label cards, and control cards — children match the word to the image and check their own work. Great for science, art, and vocabulary.' },
  { id: 'language', label: 'Language', sectionTitle: 'Language Works', description: 'Hands-on phonics, word building, and reading activities for Pre-K through Grade 1.' },
  { id: 'math', label: 'Math', sectionTitle: 'Math Works', description: 'Concrete math activities that build number sense, counting, and early arithmetic skills.' },
  { id: 'seasonal', label: 'Seasonal', sectionTitle: 'Seasonal Works', description: 'Holiday and seasonal activities that keep the shelf fresh and kiddos excited all year long.' },
  { id: 'classroom-setup', label: 'Classroom Setup', sectionTitle: 'Classroom Setup', description: 'Cubby labels, name tags, and classroom organization materials to help your space feel warm, welcoming, and ready for learning.' },
  { id: 'printable', label: 'Printable Downloads', sectionTitle: 'Printable Downloads', description: 'Instant PDF downloads you print at home or at a print shop — ready to use right away. No waiting for shipping!' },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
