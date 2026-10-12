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
import imgAnimalNomenclatureFrog from '../assets/products/animal-nomenclature-frog.jpeg'
import imgEnglishBridleNomenclature from '../assets/products/english-bridle-nomenclature.jpeg'
import imgAnimalNomenclatureLadybug from '../assets/products/animal-nomenclature-ladybug.jpeg'
import imgAnimalNomenclatureHorse from '../assets/products/animal-nomenclature-horse.jpeg'
import imgPenguinNomenclature from '../assets/products/penguin-nomenclature.jpeg'
import imgAnimalParentBabyMatching from '../assets/products/animal-parent-baby-matching.jpg'
import imgAnimalParentBabyMatching2 from '../assets/products/animal-parent-baby-matching-2.jpg'
import imgAnimalParentBabyMatching3 from '../assets/products/animal-parent-baby-matching-3.jpg'
import imgColorMatching from '../assets/products/color-matching.jpg'
import imgColorMatching2 from '../assets/products/color-matching-2.jpg'
import imgColorMatching3 from '../assets/products/color-matching-3.jpg'
import imgDinosaurThreePartMatching from '../assets/products/dinosaur-three-part-matching.jpg'
import imgDinosaurThreePartMatching2 from '../assets/products/dinosaur-three-part-matching-2.jpg'
import imgDinosaurThreePartMatching3 from '../assets/products/dinosaur-three-part-matching-3.jpg'
import imgAnimalTracksBooklet from '../assets/products/animal-tracks-booklet.jpeg'
import imgAnimalTracksMatching from '../assets/products/animal-tracks-matching.jpeg'
import imgVanGoghMatching from '../assets/products/van-gogh-matching.jpeg'
import imgCubbyLabels2 from '../assets/products/cubby-labels-2.jpeg'
import imgNameTags from '../assets/products/name-tags-2.jpeg'
import imgNameTags2 from '../assets/products/name-tags.jpeg'
import imgChristmasPuzzleMatching from '../assets/products/christmas-puzzle-matching.jpg'
import imgWinterRhymingCards from '../assets/products/winter-rhyming-cards.jpg'
import imgWinterRhymingCards2 from '../assets/products/winter-rhyming-cards-2.jpg'
import imgWinterRhymingCards3 from '../assets/products/winter-rhyming-cards-3.jpg'
import imgFlowerSortingPrintable from '../assets/products/flower-sorting-mat.jpg'
import imgSpringWorksheets from '../assets/products/spring-worksheets.jpeg'
import imgBalesOfVowelsPreview from '../assets/products/kerri-bales-of-vowels-preview.jpg'
import imgBalesOfVowelsCardsPreview from '../assets/products/kerri-bales-of-vowels-cards-preview.jpg'
import imgShortOrLongVowelsPreview from '../assets/products/short-or-long-vowels-preview.jpg'
import imgCloverSkipCountingPreview from '../assets/products/clover-skip-counting-preview.jpg'
import imgBirdhouseBlendsPreview from '../assets/products/birdhouse-blends-preview.jpg'
import imgSightWordPractice from '../assets/products/sight-word-practice.jpg'
import imgSightWordPracticeLevelsPreview from '../assets/products/sight-word-practice-levels-preview.jpg'
import imgPlantingDiagraphs from '../assets/products/planting-diagraphs.jpg'
import imgPlantingDiagraphsCards from '../assets/products/planting-diagraphs-cards.jpg'
import imgGrowingSounds from '../assets/products/growing-sounds.jpg'
import imgWordGarden from '../assets/products/word-garden.png'
import imgWinterCountingPuzzle from '../assets/products/winter-counting-puzzle.jpg'
import imgFallWriteTheRoom from '../assets/products/fall-write-the-room-cards.jpg'
import imgFallWriteTheRoomSheet from '../assets/products/fall-write-the-room-worksheet.jpg'

export type Category = 'nomenclature' | 'language' | 'math' | 'seasonal' | 'classroom-setup' | 'printable'
export type Theme = 'valentines' | 'st-patricks' | 'fall' | 'spring' | 'winter' | 'summer'
export type Season = 'fall' | 'winter' | 'spring' | 'summer'

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
  /** Worksheets inside a pack, listed on the shop card */
  includes?: string[]
}

export const PRODUCTS: Product[] = [
  // ── Nomenclature ──────────────────────────────────────────────
  {
    id: 'animal-nomenclature',
    name: 'Animal Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalNomenclatureFrog,
    gallery: [imgAnimalNomenclatureLadybug, imgAnimalNomenclatureHorse],
    description: "Three-part cards for learning the parts of a frog and a ladybug. Comes with picture cards, label cards and control cards.",
    details: ['Two sets: Frog & Ladybug', 'Three-part cards per set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2'],
  },
  {
    id: 'penguin-nomenclature',
    name: 'Penguin Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgPenguinNomenclature,
    gallery: [img7121, img7119],
    description: "Three-part cards for learning the parts of a penguin, like the head, bill, tail and webbed feet. Great for a winter or animal unit.",
    details: ['Three-part card set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2', 'Great for science shelves'],
  },
  {
    id: 'horse-bridle-nomenclature',
    name: 'English Bridle Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgEnglishBridleNomenclature,
    gallery: [img7126],
    description: "Three-part cards for learning the parts of an English bridle: noseband, browband, cheekpieces, throatlatch and more. For your horse lovers.",
    details: ['Three-part card set', 'Printed & hand-assembled', 'Suits Grade 1 and up', 'Great for equestrian or animal units'],
  },
  {
    id: 'horse-nomenclature',
    name: 'Horse Nomenclature Cards',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalNomenclatureHorse,
    gallery: [],
    description: "Three-part cards for learning the parts of a horse. Comes with picture cards, label cards and control cards.",
    details: ['Three-part card set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2', 'Great for science and animal units'],
  },
  {
    id: 'van-gogh-cards',
    name: 'Van Gogh Three Part Cards',
    price: '$18.00',
    categories: ['nomenclature'],
    image: img7075,
    gallery: [img7076, img7077],
    description: "Three-part cards with Van Gogh paintings, including Starry Night, Irises and Almond Blossom. An easy way to bring some art into the classroom.",
    details: ['Three-part card set', '12 paintings included', 'Printed & hand-assembled', 'Suits Pre-K to Grade 3'],
  },
  {
    id: 'human-development-cards',
    name: 'Human Development Three Part Cards',
    price: '$10.00',
    categories: ['nomenclature'],
    image: imgHumanDevelopmentCards,
    gallery: [img7078, img7079],
    description: "Three-part cards that follow a baby's development from fertilization to 40 weeks. Good for science and life cycle units.",
    details: ['Three-part card set', 'Covers zygote through 40-week fetus', 'Printed & hand-assembled', 'Suits Grade 1 and up'],
  },

  {
    id: 'animal-parent-baby-matching',
    name: 'Animal Parent & Baby Matching Cards',
    price: '$5.00',
    categories: ['nomenclature'],
    image: imgAnimalParentBabyMatching,
    gallery: [imgAnimalParentBabyMatching2, imgAnimalParentBabyMatching3],
    description: "Three-part cards that match animal parents with their babies. Farm animals like Horse & Foal and Pig & Piglet, and zoo animals like Lion & Whelp and Elephant & Calves. Kids learn the name of each animal and its baby.",
    details: ['16 animal pairs', 'Farm & zoo animals', 'Printed & hand-assembled', 'Suits Pre-K to Grade 2'],
  },
  {
    id: 'color-matching',
    name: 'Color Matching Cards',
    price: '$5.00',
    categories: ['nomenclature'],
    image: imgColorMatching,
    gallery: [imgColorMatching2, imgColorMatching3],
    description: "Match each color card to a real object in that color: red apple, orange, yellow banana, green kiwi, blue blueberries and purple grapes. A good first matching work.",
    details: ['6 colors included', 'Real photo objects', 'Printed & hand-assembled', 'Suits Toddler to Pre-K'],
  },
  {
    id: 'dinosaur-three-part-matching',
    name: 'Dinosaur Three Part Matching Cards',
    price: '$10.00',
    categories: ['nomenclature'],
    image: imgDinosaurThreePartMatching,
    gallery: [imgDinosaurThreePartMatching2, imgDinosaurThreePartMatching3],
    description: "Three-part cards with 15 dinosaurs, including T-Rex, Triceratops, Velociraptor, Stegosaurus and Spinosaurus. For your dinosaur lovers.",
    details: ['15 dinosaurs included', 'Three-part card set', 'Printed & hand-assembled', 'Suits Pre-K to Grade 3'],
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
    description: "Valentine's heart CVC cards. Kids build and read short vowel words.",
    details: ['30+ CVC word cards', 'Short vowel families', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'spring-flower-matching',
    name: 'Spring Flower Matching Work',
    price: '$15.00',
    categories: ['language'],
    themes: ['spring'],
    image: img7113_1,
    gallery: [img7113, img7114, img7111],
    description: "Match cards to objects with spring flowers: daffodil, sunflower, tulip, rose, orchid, lotus, hibiscus and more. Works well with real flowers too.",
    details: ['8 flower matching cards', 'Includes picture & label cards', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
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
  },
  {
    id: 'bales-of-vowels',
    name: 'Bales of Vowels',
    price: '$12.00',
    categories: ['language'],
    themes: ['spring'],
    image: imgBalesOfVowelsCardsPreview,
    gallery: [imgBalesOfVowelsPreview],
    description: 'Pick a hay bale card, say the word and color in the missing vowel, a or i. Then write the word on the recording sheet. Words: cake, kite, vase, safe, dime, wave, fire, game, pile, vine, tape and bike.',
    details: ['12 numbered hay bale picture cards', 'Recording sheet included', 'Long a & long i (silent e) words', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'write-the-room-summer',
    name: 'Write the Room — Summer',
    price: '$5.00',
    categories: ['language'],
    themes: ['summer'],
    image: img7092,
    gallery: [],
    description: "Put the picture cards up around the room. Kids find each one and write the word on their recording sheet. A summer favorite that gets them up and moving.",
    details: ['14 picture cards', 'Recording sheet included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  // ── Math ──────────────────────────────────────────────────────
  {
    id: 'tally-marks-clip-cards',
    name: 'Tally Mark Clip Cards',
    price: '$12.00',
    categories: ['math'],
    image: img7130,
    gallery: [],
    description: "Count the tally marks on each bird card and clip the right number.",
    details: ['15 clip cards', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 2'],
  },
  {
    id: 'bead-stair',
    name: 'Bead Stair',
    price: '$15.00',
    categories: ['math'],
    image: img7164,
    gallery: [],
    description: "A Montessori bead stair for numbers 1–10. Each number has its own color, so kids can see how much each number is.",
    details: ['Numbers 1–10', 'Color-coded by number', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
  },
  {
    id: 'ten-frames-clip-cards',
    name: 'Ten Frames Clip Cards',
    price: '$12.00',
    categories: ['math'],
    image: img7129,
    gallery: [],
    description: "Count the dots on the ten frame and clip the right number. Rainbow cards for numbers 11–20.",
    details: ['Numbers 11–20', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'valentines-mason-jar-addition',
    name: "Valentine's Day Mason Jar Addition",
    price: '$12.00',
    categories: ['math'],
    themes: ['valentines'],
    image: imgValentinesMasonJar,
    gallery: [],
    description: "Valentine's mason jar addition cards. Kids solve the problem and write the answer in the box.",
    details: ['Addition facts included', 'Answer box on each card', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'fall-math-clip-cards',
    name: 'Fall Math Clip Cards',
    price: '$12.00',
    categories: ['math'],
    themes: ['fall'],
    image: img7088,
    gallery: [],
    description: "Count the fall objects and clip the right number. Clip cards with pumpkins, apples, leaves and more.",
    details: ['Numbers 1–5', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
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
    description: "Sort Halloween objects onto pumpkin cards numbered 1–10. Spiders, bats, skulls, ghosts and more.",
    details: ['Pumpkin number cards 1–10', 'Small counting objects needed (e.g. pom poms, buttons, gems)', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'halloween-patterns',
    name: 'Halloween Pattern Work',
    price: '$12.00',
    categories: ['seasonal'],
    themes: ['fall'],
    image: img7090,
    gallery: [],
    description: "Finish the pattern with Halloween objects like ghosts, skulls, spiders and pumpkins.",
    details: ['Pattern strips included', 'Objects not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'thanksgiving-buttoning',
    name: 'Thanksgiving Turkey Buttoning Work',
    price: '$20.00',
    categories: ['seasonal'],
    themes: ['fall'],
    image: img7087,
    gallery: [img7086],
    description: "A hand-sewn felt turkey with colorful feathers that button on and off. Good practice for little fingers.",
    details: ['Hand-sewn felt turkey', 'Colorful removable feathers', 'Fine motor practice', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'fall-write-the-room',
    name: 'Fall Write the Room',
    price: '$10.00',
    categories: ['seasonal'],
    themes: ['fall'],
    image: imgFallWriteTheRoom,
    gallery: [imgFallWriteTheRoomSheet],
    description: "Put the fall picture cards up around the room. Kids walk around, find each one and write the word on their recording sheet. 12 fall words, like turkey, scarecrow, pumpkin, acorn and cornucopia.",
    details: ['12 picture cards', 'Recording sheet included', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
  },
  {
    id: 'identifying-number-to-object',
    name: 'Identifying Number to Object',
    price: '$5.00',
    categories: ['math'],
    themes: ['st-patricks'],
    image: imgIdentifyingNumberToObject,
    gallery: [],
    description: "Match the number to the corresponding number of objects in this St. Patrick's Day themed work.",
    details: ['Numbers practice included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'rainbow-letter-matching',
    name: 'Rainbow Letter Matching',
    price: '$12.00',
    categories: ['seasonal'],
    themes: ['st-patricks'],
    image: imgRainbowLetterMatching,
    gallery: [],
    description: "Clip the letter clothespins onto the matching letters around the rainbow. Good for St. Patrick's Day or any time of year.",
    details: ['All 26 letters included', 'Clothespins not included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'st-patricks-day-worksheets',
    name: "St. Patrick's Day Worksheets",
    price: '$5.00',
    categories: ['printable'],
    themes: ['st-patricks'],
    image: img7094,
    gallery: [imgCloverSkipCountingPreview],
    description: "St. Patrick's Day math worksheets, including Shamrock Math, Rainbow Addition and Clover Skip Counting by 10s.",
    details: ['5 worksheets included', 'Covers addition, graphing & skip counting', 'Printable PDF, instant download', 'Suits Kindergarten to Grade 1'],
    includes: ['Clover Skip Counting by 10s', 'Rainbow Addition', 'Shamrock Math', 'Color 5+2 & Color 3+6'],
  },
  {
    id: 'dress-up-snowman',
    name: 'Dress Up a Snowman',
    price: '$18.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgDressUpSnowman,
    gallery: [imgDressUpSnowman2],
    description: "Dress up a snowman with hats, scarves and buttons. Kids copy the outfit on a reference card or make up their own.",
    details: ['Snowman mat included', 'Multiple outfit cards', 'Hats, scarves & button pieces', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'build-a-snowman',
    name: 'Build a Snowman Alphabet Work',
    price: '$15.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgBuildASnowman,
    gallery: [imgBuildASnowman2],
    description: "Match picture cards to their beginning letter on the snowman board. Kids sort pictures for all 26 letters.",
    details: ['All 26 letters included', 'Picture sorting oval cards', 'Snowman sorting board', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'the-mitten',
    name: 'The Mitten Winter Work',
    price: '$18.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: img7139,
    gallery: [],
    description: "Sequence and retell Jan Brett's \"The Mitten\" with hand-cut animals and a felt mitten.",
    details: ['Hand-cut animal characters', 'Felt mitten included', 'Based on Jan Brett\'s "The Mitten"', 'Suits Pre-K to Grade 1'],
  },
  {
    id: 'write-the-room-spring',
    name: 'Write the Room — Spring',
    price: '$5.00',
    categories: ['language'],
    themes: ['spring'],
    image: imgWriteTheRoomSpring,
    gallery: [],
    description: "Put the spring picture cards up around the room. Kids find each card and write the word on their recording sheet.",
    details: ['14 spring picture cards', 'Recording sheet included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'i-love-to-read-write-the-room',
    name: 'I Love to Read! Write the Room',
    price: '$5.00',
    categories: ['language'],
    image: imgWriteTheRoomRead,
    gallery: [],
    description: "Kids find each picture card around the room, read the word and draw a picture of it in the box on their recording sheet.",
    details: ['12 picture cards', 'Recording sheet included', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'winter-rhyming-cards',
    name: 'Winter Rhyming Cards',
    price: '$15.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgWinterRhymingCards,
    gallery: [imgWinterRhymingCards2, imgWinterRhymingCards3],
    description: "Mitten rhyming cards. Kids match the words that rhyme. 13 rhyming pairs from CVC word families.",
    details: ['13 rhyming pairs included', 'CVC word families (-at, -ag, -ap, -op, -en, -ed, -ig, -ug, -un, -ub, -eg, -od)', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'christmas-puzzle-matching',
    name: 'Christmas Puzzle Matching',
    price: '$5.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgChristmasPuzzleMatching,
    gallery: [],
    description: "Christmas puzzle cards. Kids put the two halves of each card together: Santa, reindeer, snowman, sleigh, Christmas tree, gingerbread man and more.",
    details: ['12 matching pairs included', 'Chevron puzzle-edge cards for self-checking', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'winter-counting-puzzle',
    name: 'Winter Counting Number Puzzle',
    price: '$5.00',
    categories: ['seasonal'],
    themes: ['winter'],
    image: imgWinterCountingPuzzle,
    gallery: [],
    description: "Cut the strips and put them in counting order. Three winter puzzle pages: snowflakes (0–6), winter clothes (7–11) and a polar bear with snowballs (12–16).",
    details: ['3 puzzle pages included', 'Counts 0 through 16', 'Cut-and-sort activity', 'Printed & hand-assembled', 'Suits Pre-K to Kindergarten'],
  },
  // ── Classroom Setup ───────────────────────────────────────────
  {
    id: 'cubby-labels',
    name: 'Custom Cubby Labels',
    price: '$15.00',
    categories: ['classroom-setup'],
    image: imgCubbyLabels,
    gallery: [imgCubbyLabels2],
    description: "Cubby labels made to order with each child's name and a plant picture.",
    details: ['Custom names per label', 'Choice of plant illustration', 'Printed & hand-cut', 'Contact Kerri to place a custom order'],
  },
  {
    id: 'name-tags',
    name: 'Custom Desk Name Tags',
    price: '$18.00',
    categories: ['classroom-setup'],
    image: imgNameTags,
    gallery: [imgNameTags2],
    description: "Desk name tags made to order with each child's name, a watercolor picture, the alphabet and a number line.",
    details: ['Custom names per tag', 'Alphabet & number line included', 'Watercolor illustration', 'Contact Kerri to place a custom order'],
  },

  {
    id: 'earth-day-write-the-room',
    name: 'Earth Day Write the Room',
    price: '$5.00',
    categories: ['seasonal'],
    themes: ['spring'],
    image: imgEarthDayWriteTheRoom,
    gallery: [],
    description: "An Earth Day write the room. Kids walk around the room to find the picture cards and write each word on their recording sheet.",
    details: ['Earth Day themed picture cards', 'Recording sheet included', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'animal-tracks-booklet',
    name: 'Animal Tracks Booklet',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalTracksBooklet,
    gallery: [],
    description: "A printed, bound \"Footprints of Forest Animals\" booklet. A nonfiction reader about the tracks forest animals leave behind.",
    details: ['Printed & ring-bound', 'Forest animals included', 'Suits Pre-K to Grade 1', 'Great paired with the Animal Tracks Matching Work'],
  },
  {
    id: 'animal-tracks-matching',
    name: 'Animal Tracks Matching Work',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgAnimalTracksMatching,
    gallery: [],
    description: "Match each animal photo card to its track card. Forest animals like moose, deer, raccoon and more.",
    details: ['Animal photo + track card pairs', 'Self-correcting design', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
  },
  {
    id: 'van-gogh-matching',
    name: 'Van Gogh Matching Work',
    price: '$15.00',
    categories: ['nomenclature'],
    image: imgVanGoghMatching,
    gallery: [],
    description: "Match the Van Gogh painting cards. Each scallop-edged card has a twin to find.",
    details: ['Scallop-edged art cards', 'Features Van Gogh paintings', 'Printed & hand-assembled', 'Suits Pre-K to Grade 1'],
  },
  {
    id: 'flower-sorting-printable',
    name: 'Flower Sorting (Printable)',
    price: '$5.00',
    categories: ['printable'],
    image: imgFlowerSortingPrintable,
    gallery: [],
    description: "Sort flower pictures into stems, petals and leaves. Comes with a sorting mat and cut-out picture cards.",
    details: ['Sorting mat with 3 categories (stems, petals, leaves)', 'Cut-out sorting cards included', 'Printable PDF, instant download', 'Suits Pre-K to Kindergarten'],
  },
  {
    id: 'spring-worksheets',
    name: 'Spring Worksheets',
    price: '$5.00',
    categories: ['printable'],
    themes: ['spring'],
    image: imgShortOrLongVowelsPreview,
    gallery: [imgBirdhouseBlendsPreview, imgSpringWorksheets],
    description: 'Spring worksheets for blends, short and long vowels, and writing. Print them at home.',
    details: ['3 worksheets included', 'Blends, short & long vowels and writing', 'Printable PDF, instant download', 'Suits Kindergarten to Grade 1'],
    includes: ['Birdhouse Blends', 'Short or Long Vowels', 'Writing Prompts'],
  },
  {
    id: 'sight-word-practice',
    name: 'Sight Word Practice (Levels 1–6)',
    price: '$5.00',
    categories: ['printable'],
    image: imgSightWordPractice,
    gallery: [imgSightWordPracticeLevelsPreview],
    description: 'Read the word, write the word, then build the word with letter tiles. There are 6 levels with 10 words on each page, so kids can move up as they learn.',
    details: ['6 levels, 60 sight words', 'Level 1: a, and, I, it, in, is, me, my, the, to', 'Three columns: Read the Words · Write the Words · Build the Words', 'Build with letter tiles, magnetic letters or stamps (letters not included)', 'Laminate it or put it in a sheet protector to use with a dry erase marker', 'Printable PDF, instant download', 'Suits Pre-K to Grade 1'],
    includes: ['Level 1: My First Words', 'Level 2: Building Words', 'Level 3: Growing Readers', 'Level 4: New Adventures', 'Level 5: Superstar', 'Level 6: Rockstars'],
  },
  {
    id: 'planting-diagraphs',
    name: 'Planting Diagraphs Set',
    price: '$10.00',
    categories: ['language'],
    image: imgPlantingDiagraphs,
    gallery: [imgPlantingDiagraphsCards],
    description: "A worksheet and a set of flower pot picture cards for ending sounds. Kids say each word and color or sort the ending sound: ch, sh or th.",
    details: ['Worksheet + picture card set included', '12 pictures covering ch, sh, and th endings', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
  {
    id: 'word-garden',
    name: 'Word Garden',
    price: '$5.00',
    categories: ['language'],
    image: imgWordGarden,
    gallery: [imgGrowingSounds],
    description: "Say each word slowly and write the sounds in the boxes. Comes with the Word Garden worksheet (20 numbered sound boxes) and flower pot picture cards for sorting beginning and ending sounds.",
    details: ['Word Garden worksheet included', 'Flower pot picture sorting cards (B/E sounds)', 'Printed & hand-assembled', 'Suits Kindergarten to Grade 1'],
  },
]

export const CATEGORIES: { id: Category; label: string; sectionTitle: string; description: string }[] = [
  { id: 'nomenclature', label: 'Nomenclature', sectionTitle: 'Nomenclature', description: 'Picture cards, label cards and control cards. Kids match the word to the picture and check their own work.' },
  { id: 'language', label: 'Language', sectionTitle: 'Language Works', description: 'Phonics, word building and reading works for Pre-K through Grade 1.' },
  { id: 'math', label: 'Math', sectionTitle: 'Math Works', description: 'Hands-on math for counting, numbers and early adding.' },
  { id: 'seasonal', label: 'Seasonal', sectionTitle: 'Seasonal Works', description: 'Holiday and seasonal works to change out on your shelves all year.' },
  { id: 'classroom-setup', label: 'Classroom Setup', sectionTitle: 'Classroom Setup', description: 'Cubby labels, name tags and other things to get your classroom set up.' },
  { id: 'printable', label: 'Printable Downloads', sectionTitle: 'Printable Downloads', description: 'PDFs you print at home or at a print shop. Nothing to wait for in the mail.' },
]

// Shop season pages. Seasons are listed in calendar order starting with fall;
// months are 0-based (January = 0) and decide which season is "in season now".
export const SEASONS: { id: Season; label: string; emoji: string; months: number[]; description: string }[] = [
  { id: 'fall', label: 'Fall', emoji: '🍂', months: [8, 9, 10], description: 'Halloween, Thanksgiving and fall works for September through November.' },
  { id: 'winter', label: 'Winter', emoji: '❄️', months: [11, 0, 1], description: "Snowmen, mittens, Christmas and Valentine's Day works for December through February." },
  { id: 'spring', label: 'Spring', emoji: '🌷', months: [2, 3, 4], description: "Flowers, Earth Day and St. Patrick's Day works for March through May." },
  { id: 'summer', label: 'Summer', emoji: '☀️', months: [5, 6, 7], description: 'Summer works for June through August.' },
]

// Holidays fold into the season they fall in, so each season page shows
// every work for that time of year.
const THEME_SEASON: Record<Theme, Season> = {
  fall: 'fall',
  winter: 'winter',
  valentines: 'winter',
  spring: 'spring',
  'st-patricks': 'spring',
  summer: 'summer',
}

export const HOLIDAY_LABELS: Partial<Record<Theme, string>> = {
  valentines: "Valentine's Day",
  'st-patricks': "St. Patrick's Day",
}

export function getSeason(id: string | undefined) {
  return SEASONS.find((s) => s.id === id)
}

export function getSeasonProducts(season: Season): Product[] {
  return PRODUCTS.filter((p) => p.themes?.some((t) => THEME_SEASON[t] === season))
}

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
