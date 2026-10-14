import imgGuideNomenclature from '../assets/products/IMG_7075.jpeg'
import imgGuideCVC from '../assets/products/IMG_7108.jpeg'
import imgGuideMath from '../assets/products/IMG_7164.jpeg'
import imgGuideLanguageShelf from '../assets/products/IMG_7113-1.jpeg'
import imgGuideFall from '../assets/products/IMG_7084.jpeg'
import imgGuideArt from '../assets/products/IMG_7076.jpeg'
import imgGuidePracticalLife from '../assets/products/IMG_7087.jpeg'
import imgBirdFeeder from '../assets/products/diy-bird-feeder.png'
import imgSeedBombs from '../assets/products/garden-seed-bombs.png'
import imgFlowerCrowns from '../assets/products/flower-crowns.png'
import imgIceCream from '../assets/products/should-i-share-ice-cream.png'
import imgNappingHouse from '../assets/products/the-napping-house.png'
import imgSpilledMilk from '../assets/products/it-looks-like-spilled-milk.png'
import imgFeltPenguinDressUp from '../assets/products/felt-penguin-dress-up.jpg'
import imgSnowmanLetterTracing from '../assets/products/snowman-letter-tracing.jpg'
import imgFallPatterning from '../assets/products/fall-patterning.jpg'
import imgFallNumberPuzzle from '../assets/products/fall-number-puzzle.jpg'
import imgFallClipCards from '../assets/products/fall-clip-cards.jpg'
import imgAppleLifeCycle from '../assets/products/apple-life-cycle.jpg'
import imgHalloweenCountingBrew from '../assets/products/halloween-counting-brew.jpg'
import imgDisguiseATurkey from '../assets/products/disguise-a-turkey.jpg'
import imgPolarExpressSequencing from '../assets/products/polar-express-sequencing.jpg'
import imgThankfulHands from '../assets/products/thankful-hands.jpg'
import imgPlacematWeaving from '../assets/products/placemat-weaving.jpg'

export interface IdeaSection {
  heading: string
  paragraphs: string[]
}

export interface IdeaFAQ {
  question: string
  answer: string
}

export interface Idea {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  relatedProductIds: string[]
  intro: string
  sections: IdeaSection[]
  faqs: IdeaFAQ[]
}

export const IDEAS: Idea[] = [
  {
    slug: 'what-are-nomenclature-cards',
    title: 'What Are Montessori Nomenclature Cards and How Do You Use Them?',
    excerpt: 'Nomenclature cards are one of the most useful materials in a Montessori classroom. Here\'s what they are, how they work, and how to use them at home or at school.',
    date: '2025-01-15',
    category: 'Nomenclature',
    image: imgGuideNomenclature,
    relatedProductIds: ['animal-nomenclature', 'penguin-nomenclature', 'horse-bridle-nomenclature', 'van-gogh-cards', 'human-development-cards'],
    intro: 'If you\'ve been in a Montessori classroom, you\'ve probably seen small cards laid out on a work mat: a picture card, a label card, and a "control" card that has both. These are nomenclature cards. They\'re one of the most useful and flexible materials in Montessori language work.',
    sections: [
      {
        heading: 'What Three-Part Cards Are',
        paragraphs: [
          'Montessori nomenclature cards are also called three-part cards because each item is split into three pieces: a picture card (image only), a label card (word only), and a control card (image and word together).',
          'The child matches each label card to the right picture card. When they\'re done, they use the control cards to check their own work. No adult needed. Checking their own answers is a big part of the Montessori approach, and it builds confidence.',
          'You can make a set for almost any subject: science, geography, art history, vocabulary, anatomy. If you can picture it and label it, it can be a set of three-part cards.',
        ],
      },
      {
        heading: 'What Age They\'re For',
        paragraphs: [
          'Nomenclature cards work across a wide age range. Simple sets with clear, familiar pictures (animals, household objects, fruit) work well for children as young as 2.5 to 3, when they\'re in the sensitive period for language.',
          'More detailed sets, like anatomy, fine art or historical figures, are a good fit for ages 4–7. The same set can be used at different levels. A younger child matches pictures. An older child reads the labels on their own and writes them from memory.',
        ],
      },
      {
        heading: 'How to Present Them at School or at Home',
        paragraphs: [
          'Start by looking at the control cards together and naming each picture. Then mix up the picture cards and label cards in two separate piles on a mat. Have the child match each label to its picture, then check with the control cards.',
          'For pre-readers, matching the pictures alone builds vocabulary and observation skills. For early readers, matching the labels is practice with sight words and sounding out, with a real purpose behind it.',
          'Store each set in a small basket or envelope so the child can take it out and work on their own. Rotate sets on the shelf every few weeks.',
        ],
      },
      {
        heading: 'More Than Animals: Other Ways to Use Nomenclature Cards',
        paragraphs: [
          'Animal anatomy is the usual place to start, but nomenclature cards work for lots of other subjects. Art history cards (like our Van Gogh set) introduce children to famous paintings through matching and talking about what they see. Human development cards are a calm, factual way to start conversations about biology and growing up.',
          'Nomenclature cards are especially handy for homeschool families because you don\'t need special training to use them. Set them out on the kitchen table, show the three steps once, and step back. The child takes it from there.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I laminate Montessori nomenclature cards?',
        answer: 'Laminating makes them last a lot longer, especially with young children. If you use them often, it\'s worth doing. Our cards are printed on cardstock and put together by hand, and we recommend laminating if they\'ll be used every day.',
      },
      {
        question: 'Can children who can\'t read yet use nomenclature cards?',
        answer: 'Yes. Pre-readers use the picture cards for matching and building vocabulary. The label cards come in once a child starts recognizing written words, so the same set keeps working as the child grows.',
      },
      {
        question: 'How many cards should a set have?',
        answer: 'Most Montessori three-part card sets have 6 to 14 pairs. Too few and there isn\'t much new vocabulary. Too many and it\'s overwhelming for a young child. Our sets are sized to land in that range.',
      },
      {
        question: 'Where do nomenclature cards go on a Montessori shelf?',
        answer: 'Animal and science sets usually go on the science or culture shelf. Language-themed sets can go on the language shelf. Art cards can have their own basket near any art prints or postcards you have up.',
      },
    ],
  },

  {
    slug: 'cvc-word-activities-kindergarten',
    title: 'CVC Word Activities Your Kindergartner Will Actually Want to Do',
    excerpt: 'CVC words are short three-letter words like "cat", "hop" and "sun". They\'re the first words most children sound out on their own. Here are some hands-on ways to practice them.',
    date: '2025-02-01',
    category: 'Language',
    image: imgGuideCVC,
    relatedProductIds: ['valentines-word-building', 'word-family-flower-pots', 'spring-worksheets'],
    intro: 'CVC stands for consonant-vowel-consonant. These short words (cat, hop, pin, sun) are the first ones most children can sound out by themselves. When a child reads their first word and looks up at you surprised and proud, it\'s usually a CVC word. The activities below give kindergarten kids lots of hands-on practice.',
    sections: [
      {
        heading: 'Why Word Families Work',
        paragraphs: [
          'Instead of drilling single words, word families teach children to spot a pattern and use it to read new words. Once a child knows the "-at" family, they can read cat, bat, hat, mat, rat and sat. That\'s six words from one pattern.',
          'Word family work also builds phonemic awareness, which is being able to hear and play with the individual sounds in words. It\'s one of the strongest predictors of early reading success.',
        ],
      },
      {
        heading: '5 Hands-On CVC Word Activities',
        paragraphs: [
          '1. Word family sorting. Write three or four word endings (_at, _og, _in) on separate flower pots, bowls or cards. Print or write word cards and have the child sort them into the right family. Our Word Family Flower Pots set this up so it\'s self-correcting.',
          '2. Word building with moveable letters. Lay out a short vowel and swap the consonants on either side. Ask, "Can you change \'cat\' to \'bat\'?" Kids stick with this longer than a worksheet, and it shows them that words are made of parts they can move around.',
          '3. Write the room. Hang CVC word cards or pictures around the room. Give children a clipboard and a recording sheet. They walk around, find the words and write them down. Moving around helps it stick.',
          '4. Valentine\'s word building. Our Valentine\'s Day Word Building cards use a heart theme for short-vowel CVC practice in February, or any time you want to switch up the routine.',
          '5. Playdough words. Roll playdough into letter shapes to spell CVC words. Forming the letters by hand gives kids another way to connect letters and sounds.',
        ],
      },
      {
        heading: 'When to Start CVC Work',
        paragraphs: [
          'Children are ready for CVC words when they can reliably give the sounds of all 26 letters (the sounds, not just the names). In Montessori, this usually comes after the sandpaper letters and before or alongside the moveable alphabet.',
          'In a regular kindergarten classroom, CVC work usually starts in the first few months of the school year. If a child is ready earlier, there\'s no reason to wait. These activities work well for interested 4-year-olds too.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What order should I teach CVC word families in?',
        answer: 'Most reading programs start with short "a" words (cat, hat, map) because the short "a" sound is clear and easy to hear. Short "i" and short "o" usually come next. Short "e" and short "u" are harder for children to tell apart, so they come later.',
      },
      {
        question: 'My child memorizes words instead of sounding them out. Is that a problem?',
        answer: 'Memorizing some sight words is normal, and it helps with very common words. For CVC work, though, the goal is decoding: using letter sounds to read a word they haven\'t seen before. If a child is guessing from context, cover everything but the first letter and ask what sound it makes.',
      },
      {
        question: 'How long should a CVC practice session be?',
        answer: 'For most kindergartners, 10–15 minutes of focused phonics work is plenty. These activities feel like games, so kids often want to keep going. It\'s still fine to keep it short and stop while they\'re enjoying it.',
      },
    ],
  },

  {
    slug: 'montessori-math-at-home',
    title: 'Montessori Math Materials You Can Use at Home (No Expensive Beads Required)',
    excerpt: 'Montessori math moves from concrete to abstract. You don\'t need a full classroom set to do this at home. Here\'s what matters and how to start.',
    date: '2025-02-15',
    category: 'Math',
    image: imgGuideMath,
    relatedProductIds: ['bead-stair', 'ten-frames-clip-cards', 'tally-marks-clip-cards', 'fall-math-clip-cards'],
    intro: 'Montessori math has a reputation for needing a lot of expensive materials: golden bead chains, stamp games, colored bead bars. Those are great in a fully equipped classroom, but you can do the core ideas at home with much simpler tools. The rule is always the same. Children need to hold a quantity in their hands before they can understand it on paper.',
    sections: [
      {
        heading: 'Concrete to Abstract: The Basic Principle',
        paragraphs: [
          'Regular math instruction often moves to symbols too fast. A child is shown 3 + 4 = 7 on paper before they really know what "three" and "four" mean as amounts.',
          'Montessori math holds off on the written part. First the child works with real objects (beads, counters, tiles) and builds the amount with their hands. Written numbers and equations come in only after that is solid.',
          'Kids taught this way understand the math instead of just following steps. Every activity below follows this order.',
        ],
      },
      {
        heading: 'The Bead Stair: Quantities 1–10',
        paragraphs: [
          'The bead stair is a color-coded set of bead bars: one red bead for 1, two green beads for 2, three pink beads for 3, and so on up to ten. Each number has its own color, so children start linking a color to an amount before they can read the numeral.',
          'Lay the bars out in stair-step order and count the beads on each bar together. Ask questions like "Which bar has more?" or "What comes after the blue bar?" Over time, children learn the colors as a shortcut for amounts, which helps a lot with mental math later.',
          'Our printed bead stair cards use the same color-coding in a flat format that\'s easy to store. They work well at home if you don\'t have the physical beads.',
        ],
      },
      {
        heading: 'Ten Frames: Number Sense Past 10',
        paragraphs: [
          'A ten frame is a simple 2×5 grid. Children fill it with counters and start to see how numbers relate to ten, the most important anchor number in our base-ten system.',
          'With a ten frame, kids can see that 11 is one more than 10 and 18 is two less than 20. Numerals alone don\'t show that. Our Ten Frames Clip Cards cover 11–20 and are self-correcting: children count the dots, clip the right number, then flip the card to check.',
        ],
      },
      {
        heading: 'Using Tally Marks and Clip Cards',
        paragraphs: [
          'Tally marks connect counting to numerals. Kids see them in games, keeping score and classroom routines. Grouping by fives also gets them ready for skip counting and multiplication later.',
          'Clip cards are one of the most useful formats in early math. A child counts the objects (or tally marks), finds the right numeral and clips a clothespin on it. Clipping is good fine motor practice, and since the cards are self-correcting, kids can do them on their own.',
          'Seasonal themes like fall leaves or Halloween pumpkins let you practice the same skill all year without it getting stale.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age should children start Montessori math?',
        answer: 'Many children are interested in counting and amounts by 2.5–3. Simple work like placing objects on numbered cards or counting bead bars is fine at that age. Ten frames and tally marks usually come in around 4–5, when children are ready for quantities up to 20.',
      },
      {
        question: 'Do I need a full Montessori math set?',
        answer: 'No. The golden bead material and long bead chains are nice, but you don\'t need them at home. What matters most is working with real quantities before written numerals. Printed bead stairs, ten frames and clip cards give you that same order for a lot less money.',
      },
      {
        question: 'How is Montessori math different from regular kindergarten math?',
        answer: 'Mostly pacing and hands-on materials. Montessori math sticks with physical materials much longer than traditional programs, and children work on their own instead of the whole class learning the same thing at once. Kids also see very large numbers early (the thousand cube), which gives them a sense of scale that traditional programs often save for later.',
      },
      {
        question: 'My child can already count. Will these materials still help?',
        answer: 'Counting and understanding quantity are different skills. A child who can count to 20 from memory may not have a real sense of how much "17" is. Ten frames and the bead stair build that understanding, and it\'s the base for adding, subtracting, multiplying and dividing.',
      },
    ],
  },

  {
    slug: 'setting-up-a-language-shelf',
    title: 'How to Set Up a Montessori Language Shelf at Home',
    excerpt: 'A language shelf doesn\'t have to be fancy to work. Here\'s a simple way to set up Montessori language work at home, from phonics to word building.',
    date: '2025-03-01',
    category: 'Language',
    image: imgGuideLanguageShelf,
    relatedProductIds: ['spring-flower-matching', 'valentines-word-building', 'word-family-flower-pots', 'write-the-room-summer'],
    intro: 'Homeschool families new to Montessori often ask, "What goes on the language shelf, and in what order?" The short answer: the shelf follows the same order every child goes through when learning to read. Sounds first, then letters, then building words, then reading. The materials just make each step hands-on.',
    sections: [
      {
        heading: 'The Order: What Comes First',
        paragraphs: [
          'Language shelf work follows a clear sequence. Skipping ahead rarely helps and can set a child back. A child without solid phonemic awareness will struggle with word building no matter how many materials you put out.',
          'The order is: (1) talking and vocabulary, (2) phonemic awareness (hearing sounds), (3) letter-sound knowledge, (4) building words with moveable letters or cards, (5) reading simple words and sentences.',
          'Your shelf should have something for each stage your child is working on. It doesn\'t need everything at once.',
        ],
      },
      {
        heading: 'Vocabulary and Matching Works',
        paragraphs: [
          'Before reading, children need lots of vocabulary. Matching works, like pairing a picture card with an object or a picture card with a label, build vocabulary and the habit of looking carefully.',
          'Flower matching works well at this stage. A child matches a daffodil card to a daffodil label, a tulip card to a tulip label. It\'s self-correcting, and you can add to it by having the child find each flower in a book or outside.',
        ],
      },
      {
        heading: 'Word Building on the Language Shelf',
        paragraphs: [
          'Once a child knows the letter sounds, word building lets them practice sounding out words without a timed test or a parent hovering.',
          'Word family materials work especially well here. A child sorts picture cards into word family pots (_at, _un, _in) and hears the pattern in the words. That\'s phonemic awareness and phonics working together.',
          'Rotate word building materials with the seasons: Valentine\'s Day word cards in February, summer write-the-room cards in June. The theme changes but the skill practice keeps going.',
        ],
      },
      {
        heading: 'How Much Goes on the Shelf',
        paragraphs: [
          'Less is usually better. Three or four language works at a time is plenty for most children. With too many choices, kids pick things up and put them back without really working.',
          'Rotate materials every week or two, or when a child has mastered a work or lost interest. Keep a small box nearby with the next few works ready to swap in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a Montessori language shelf have to be an actual shelf?',
        answer: 'No. A low bookshelf, part of a coffee table, or even a basket on the floor works fine. What matters is that the materials are at the child\'s level, organized, and easy for them to get out on their own.',
      },
      {
        question: 'When should I add reading books to shelf work?',
        answer: 'Add simple phonics readers once a child can reliably sound out CVC words. Keep them on or near the language shelf. You don\'t need to wait until shelf work is "done." Books and shelf work help each other.',
      },
      {
        question: 'What if my child only wants one work and ignores the rest?',
        answer: 'That\'s usually fine. Working deeply on one material is worth more than trying a bit of everything. If a child picks the same work every day for two weeks, it\'s meeting a real need. Only swap it out once they\'ve clearly mastered it.',
      },
    ],
  },

  {
    slug: 'fall-montessori-activities',
    title: 'Fall Classroom Activities for Preschool and Kindergarten',
    excerpt: 'Fall is a great season for hands-on classroom work. Counting, patterning, fine motor practice and seasonal science all work well with fall themes.',
    date: '2025-09-01',
    category: 'Seasonal',
    image: imgGuideFall,
    relatedProductIds: ['halloween-counting', 'halloween-patterns', 'fall-math-clip-cards', 'thanksgiving-buttoning'],
    intro: 'Young children get excited in the fall. It might be the colors, the new school year, or all the holidays coming up. Fall-themed materials hold their attention in a way plain number cards and letter tiles usually don\'t. Here are some Montessori-style activities for Pre-K and Kindergarten classrooms from September through November.',
    sections: [
      {
        heading: 'Fall Counting and Number Sense',
        paragraphs: [
          'Fall has lots of good counting objects: acorns, mini pumpkins, dried corn kernels, plastic spiders. Set numbered cards (1–10) on a tray and have children put the matching number of objects on each card.',
          'Halloween Counting 1–10 builds on this with Halloween objects sorted onto numbered pumpkin cards. Spiders, bats, skulls and ghosts make counting feel like a special October work instead of regular number practice.',
        ],
      },
      {
        heading: 'Fall Patterning',
        paragraphs: [
          'Patterning is a basic math skill that often gets less shelf time than counting and number recognition. It\'s also the groundwork for algebraic thinking, and fall themes get kids interested in it.',
          'Set out Halloween pattern strips: ABAB patterns with ghosts and pumpkins, or ABCABC patterns with spiders, skulls and bats. Children continue the pattern with small objects or picture cards. Our Halloween Pattern Work is made for this, with pattern strips and matching object cards.',
        ],
      },
      {
        heading: 'Fine Motor: Practical Life with a Fall Theme',
        paragraphs: [
          'The weeks before Thanksgiving are a good time to introduce or bring back buttoning work. Buttoning is a classic Montessori practical life activity. It builds the pincer grip, hand-eye coordination, and the patience kids need to dress themselves.',
          'Our Thanksgiving Turkey Buttoning Work is a hand-sewn felt turkey with colorful feathers that button on and off. Children button and unbutton the feathers over and over, often for longer than you\'d expect. It\'s also a hands-on, screen-free activity for the weeks leading up to Thanksgiving.',
        ],
      },
      {
        heading: 'Fall Math Clip Cards',
        paragraphs: [
          'Clip cards can be used again and again, and kids like the clipping. Fall Math Clip Cards use pumpkins, apples and leaves for counting and number recognition practice from 1–5.',
          'Keep a small basket of clothespins next to the clip cards so kids can get started without an adult setting up. This is the kind of independent work that keeps a small group classroom running smoothly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When should fall materials go on the shelf?',
        answer: 'Put out general fall work (leaves, apples, harvest) in early September. Switch to Halloween materials in mid-to-late October. Thanksgiving materials work all through November. If you rotate too early, the excitement wears off before the holiday. Too late, and kids are already over it.',
      },
      {
        question: 'How do I store seasonal materials from year to year?',
        answer: 'Label a clear bin or ziplock bag for each season and keep them somewhere easy to reach. When you take materials off the shelf, check them over: replace worn cards, re-laminate if needed, and make sure all the pieces are there. Kids use materials that are tidy and complete. They ignore ones with missing pieces.',
      },
      {
        question: 'Do fall activities work in mixed-age classrooms?',
        answer: 'Yes. Seasonal themes work well with mixed ages because one theme can cover several levels. Younger children count Halloween objects 1–5. Older children continue patterns or skip count with the same objects.',
      },
    ],
  },

  {
    slug: 'montessori-art-appreciation-children',
    title: 'How to Introduce Fine Art to Young Children with Montessori Cards',
    excerpt: 'Young children are natural art lovers. They just need a chance to look closely. Montessori art cards make fine art easy for kids to learn and remember.',
    date: '2025-03-15',
    category: 'Nomenclature',
    image: imgGuideArt,
    relatedProductIds: ['van-gogh-cards'],
    intro: 'Most adults think learning about art takes formal lessons, museum trips, and sitting still while a docent talks. Young children prove that wrong all the time. Give a three-year-old a good print of a Van Gogh painting and a few minutes, and they\'ll tell you more about what they notice than most adults would.',
    sections: [
      {
        heading: 'Why Montessori Art Cards Work',
        paragraphs: [
          'Montessori three-part cards for fine art are simple. One card has a full-color print of a painting, a separate card has the title, and a control card shows both. Children match the title to the painting and learn the names through repetition. It feels like a game.',
          'Matching slows children down. To find the card that says "Starry Night," they have to look carefully at each picture. That careful looking is art appreciation, even though it doesn\'t feel like a lesson.',
        ],
      },
      {
        heading: 'Why Start with Van Gogh',
        paragraphs: [
          'Van Gogh\'s work is a great fit for young children. His brushstrokes are bold and easy to see. Kids can spot the swirls in the sky of Starry Night and the thick paint on the sunflowers. His colors are strong, and his subjects (stars, flowers, landscapes) are things kids already know.',
          'The twelve paintings in our Van Gogh Three Part Cards set include his best-known works: Starry Night, Irises, Almond Blossom, Sunflowers and more. Each one looks different enough that children can usually pick it out after a few sessions.',
        ],
      },
      {
        heading: 'How to Present Montessori Art Cards',
        paragraphs: [
          'Start with three or four paintings. Lay the control cards on a mat, look at them together and name each one. "This is Starry Night. What do you notice?" Let the child do most of the noticing.',
          'Then introduce the matching. Put the picture cards and title cards in two separate piles, mix them up, and have the child match them. Control cards go face-down for checking.',
          'Later, add to the work. Look up the real painting in a book or online. Find out when it was painted. Ask the child which one is their favorite and why. Kids often say things about art you wouldn\'t expect.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age are art appreciation cards for?',
        answer: 'Children as young as 2.5 like looking at and matching art cards, but they usually won\'t remember the painting names reliably until around 4. The matching work is useful at any age, and the art history knowledge builds slowly.',
      },
      {
        question: 'Should I explain what the paintings mean?',
        answer: 'Follow the child\'s lead. If they ask questions, give simple, honest answers. "Van Gogh painted this when he was very sad, and painting helped him feel better" is fine for a five-year-old. You don\'t need to give long lectures about the artist\'s life.',
      },
      {
        question: 'Which artists are good after Van Gogh?',
        answer: 'Monet (Water Lilies, the garden series) and Klimt (The Kiss, Tree of Life) are popular next steps because of their strong color and pattern. For something more playful, Matisse\'s cut-outs and Kandinsky\'s abstract work are longtime favorites with young children.',
      },
    ],
  },

  {
    slug: 'practical-life-fine-motor-activities',
    title: 'Practical Life Fine Motor Activities for Pre-K',
    excerpt: 'Fine motor skills are the base for writing, self-care and focused work. These simple Montessori practical life activities build those skills, and kids just think they\'re doing a fun job.',
    date: '2025-04-01',
    category: 'Practical Life',
    image: imgGuidePracticalLife,
    relatedProductIds: ['thanksgiving-buttoning'],
    intro: 'In Montessori, practical life activities aren\'t filler. Pouring, spooning, folding and buttoning are the first works a child does on the shelf, and there\'s a reason. They build the focus, coordination and hand strength that everything else depends on. A child who can button a coat on their own has hands that are getting ready to hold a pencil.',
    sections: [
      {
        heading: 'Why Fine Motor Work Matters',
        paragraphs: [
          'The small muscles in the hand get stronger through use. Gross motor skills like running and jumping mostly come with age. Fine motor skills don\'t. They need practice with tasks that get harder over time.',
          'Children with strong fine motor skills usually come to writing with confidence instead of frustration. They can also manage their own clothes, open their own lunch containers, and do the small independent things that mean a lot to a young child.',
        ],
      },
      {
        heading: 'Buttoning: The First Dressing Frame',
        paragraphs: [
          'Buttoning is one of the most important dressing skills for young children, and kids are proud when they get it. The Montessori dressing frame isolates the skill: no coat, no distractions, just buttons and buttonholes.',
          'Our Thanksgiving Turkey Buttoning Work puts this classic practical life activity in a seasonal format: a hand-sewn felt turkey with colorful feathers that button on and off. Children work on their own, buttoning and unbuttoning the feathers and building the pincer grip and two-handed coordination the task needs.',
          'Felt is forgiving. Buttons slide through felt holes more easily than through thick coat fabric, so children who are just starting to button can do it.',
        ],
      },
      {
        heading: 'More Fine Motor Activities to Try',
        paragraphs: [
          'Transferring with tongs or tweezers: set out two small bowls and some pom-poms, dried beans or other small objects. Children move the items from one bowl to the other with tongs. This builds the same pincer grip used in writing.',
          'Lacing cards: thread a shoelace through holes in a stiff card. Children lace and unlace on their own, which builds hand-eye coordination and the over-under motion used in tying shoes.',
          'Playdough: rolling, pinching and squeezing playdough strengthens hand muscles, and most kids are happy to do it. Keep a small covered container on the shelf with a mat and a few simple tools.',
          'Threading beads: large wooden beads on a thick cord. Children thread the beads, take them off and start again. Use smaller beads and thinner cord as their coordination improves.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age can children button on their own?',
        answer: 'Most children can button between ages 4 and 6. With regular practice on dressing frames and materials like the turkey buttoning work, many can do it by 4. Every child is different. If a child gets frustrated, step back instead of pushing.',
      },
      {
        question: 'How long should fine motor work last?',
        answer: 'Let the child decide. Some kids will button and unbutton for 20 minutes. Others will do it twice and move on. Both are fine. What matters is that the work is always available and the child chooses it when they\'re ready.',
      },
      {
        question: 'My child avoids fine motor work. How can I get them interested?',
        answer: 'Seasonal or new materials often pull in kids who usually skip this work. A Halloween tong transfer or a Thanksgiving buttoning turkey feels different from a plain dressing frame. Also make sure the materials aren\'t too hard. Starting a little below a child\'s level builds confidence.',
      },
    ],
  },

  // ── Crafts ───────────────────────────────────────────────────
  {
    slug: 'diy-bird-feeder-craft',
    title: 'DIY Bird Feeder Craft for Kids (Ages 3–6)',
    excerpt: 'Mix birdseed and gelatin, press it into cookie cutters, and hang it outside for the birds. A hands-on nature craft with measuring, mixing and a little waiting.',
    date: '2025-04-15',
    category: 'Crafts',
    image: imgBirdFeeder,
    relatedProductIds: [],
    intro: 'This bird feeder craft has measuring, mixing and waiting, and then the fun part: watching real birds eat something the children made. It goes well with a spring or birds unit and gives kids a real connection to the nature outside the classroom window.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Ingredients: 2–3 cups of wild bird seed, 1 cup of water (divided), and 4–5 packets of clear gelatin (0.25 oz each).',
          'Supplies: ribbon, cookie cutters, parchment paper, cooking spray, straws, mixing bowls, a liquid measuring cup, a whisk, and a silicone spatula.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Line a cookie sheet with parchment paper. Set the cookie cutters on the sheet and spray the inside of each one with cooking spray.',
          'Measure 2–3 cups of bird seed into a large bowl and set it aside. Pour half the water into a medium bowl and sprinkle in the gelatin. Whisk it together. Microwave the rest of the water until it boils, then whisk it into the gelatin mixture until it\'s fully dissolved.',
          'Pour the gelatin mixture over the bird seed and stir until all the liquid is soaked up. Refrigerate for about 5 minutes to cool.',
          'Cut straws into 3-inch pieces. Spoon the cooled mixture into each cookie cutter and press it down firmly. Push a straw piece in about ½ inch from the top, all the way down to the cookie sheet. This makes the hole for the ribbon.',
          'Refrigerate overnight (at least 8 hours). Gently take off the cookie cutters, push the straws through to clear the holes, thread ribbon through and tie a knot. Let them air dry inside for 24 hours before hanging them outside.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Set up a spooning station where children take turns filling the cookie cutters. It\'s good fine motor practice. The overnight wait is a natural chance to talk about patience and why some things take time.',
          'Once the feeders are up, start a simple bird journal where children draw or write about the birds they see. This brings science and literacy into the activity.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long do the feeders last outside?',
        answer: 'About 1–2 weeks, depending on the weather and how many birds come. They last longest in dry weather.',
      },
      {
        question: 'What if a feeder falls apart?',
        answer: 'Usually the gelatin wasn\'t fully dissolved or the mixture needed more time in the fridge. Make sure the water is really boiling before you add it, and always refrigerate overnight, not just a few hours.',
      },
      {
        question: 'What age is this craft good for?',
        answer: 'Ages 3–6 with some adult help. Three-year-olds can pour and stir with help. Older children can do most of the steps on their own.',
      },
    ],
  },

  {
    slug: 'garden-seed-bombs',
    title: 'Garden Seed Bombs: A Spring Craft for Little Hands',
    excerpt: 'Blend construction paper with water, roll it into balls, and coat them in wildflower seeds. Plant them outside and in a few weeks you get real flowers. Messy, but easy to manage.',
    date: '2025-04-20',
    category: 'Crafts',
    image: imgSeedBombs,
    relatedProductIds: [],
    intro: 'Seed bombs are a craft that actually does something once it\'s done. Kids blend paper and water into pulp, roll it into balls, coat the balls in wildflower seeds, and plant them. A few weeks later, flowers come up. You get science, practical life and art out of one soggy paper ball.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Colored construction paper, wildflower seeds, a cup of water, and a blender or food processor.',
          'Optional: a paper plate to hold the seeds for rolling.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Tear the construction paper into small pieces and put them in the blender or food processor.',
          'Add a cup of water. Blend for a few minutes until it turns into a smooth pulp. Add a little more water if it gets stuck.',
          'Spread wildflower seeds out on a paper plate.',
          'Scoop up some pulp and roll it into a ball between your hands.',
          'Roll the ball in the seeds so they stick to the outside.',
          'Keep going until the pulp is used up.',
          'Plant the seed bombs in a garden outside and water them. Flowers should come up in a few weeks.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'This works well in a small group. One child runs the blender with an adult while the others take turns rolling balls and coating them in seeds. Young children really like the feel of the wet pulp.',
          'Use a few different colors of construction paper. The color shows up in the dried seed bomb, so each child can tell which ones they made.',
          'If you have a garden bed or planter box near your classroom, plant them together and check on them over the next few weeks. That turns the craft into an ongoing science observation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which wildflower seeds should I use?',
        answer: 'Any wildflower seed mix from a garden center will work. Pick a mix that suits your region and climate.',
      },
      {
        question: 'Do the seed bombs have to dry before you plant them?',
        answer: 'No. You can plant them while they\'re still damp or let them dry for a day or two first. Both work, and planting them damp can help the seeds get started.',
      },
      {
        question: 'Is it safe for kids to use the blender?',
        answer: 'An adult should run the blender. Kids can tear the paper and drop it in, then step back while it runs. The rolling and seed coating are all theirs.',
      },
    ],
  },

  {
    slug: 'flower-crowns',
    title: 'Paper Flower Crowns: A Simple Spring Craft',
    excerpt: 'Cut, fold and glue construction paper flowers onto a paper headband. Kids make their crown and wear it home the same day.',
    date: '2025-05-01',
    category: 'Crafts',
    image: imgFlowerCrowns,
    relatedProductIds: ['spring-flower-matching'],
    intro: 'Construction paper flower crowns are a spring classroom staple. Kids measure, cut, fold and put the pieces together, so they get a lot of fine motor practice out of one project. They also get to wear the crown home that day, which they love.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Construction paper in different colors, scissors, a glue stick, a pencil, a stapler, and scotch tape.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Cut two long strips of green construction paper for the headband. Tape them together end to end so you can adjust the length later. Set them aside.',
          'Cut squares of construction paper in lots of colors, about 2–3 inches each. Fold each square into quarters. Draw a simple petal shape on the folded square, and don\'t cut along the folded edges (that keeps the petals connected). Cut out the petals and unfold. You\'ll have a four-petal flower.',
          'Cut small yellow circles for the flower centers and small green leaf shapes.',
          'Glue the petals, yellow centers and leaves together to make each flower.',
          'Glue the finished flowers along the green headband.',
          'Wrap the headband around the child\'s head to measure, then staple the ends together so it fits.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'For younger children (3–4 year olds), pre-cut the squares and strips ahead of time. Older children (5–6) can do the measuring and cutting themselves.',
          'Go on a nature walk to look at real flowers first. Kids who have looked closely at real petals come up with more interesting flower shapes. It also goes well with the Spring Flower Matching work on the language shelf.',
          'Hang the finished crowns on a bulletin board for a few days before they go home. Kids like seeing their work up on the wall.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this craft for?',
        answer: 'Ages 3–6. Younger kids do better with pre-cut pieces and some help folding. Older kids can do most of the steps on their own after you show them once.',
      },
      {
        question: 'How do I get the crown to fit different head sizes?',
        answer: 'Tape the two strips together loosely to start. Wrap it around the child\'s head and staple once you know the size. For bigger heads, add a third strip.',
      },
      {
        question: 'Can we make the flowers out of something else?',
        answer: 'Yes. Tissue paper, foam sheets and coffee filters all work. Coffee filters dyed with liquid watercolors look really nice.',
      },
    ],
  },

  // ── Book Activities ───────────────────────────────────────────
  {
    slug: 'should-i-share-my-ice-cream',
    title: 'Should I Share My Ice Cream? A Circle Time Activity',
    excerpt: 'After reading Mo Willems\' book about Gerald\'s big decision, pass a paper ice cream cone around the circle and practice the words for sharing. A simple social-emotional activity for circle time.',
    date: '2025-05-10',
    category: 'Book Activities',
    image: imgIceCream,
    relatedProductIds: [],
    intro: '"Should I Share My Ice Cream?" by Mo Willems is a great circle time read-aloud. It\'s short and funny, and it gets kids talking about sharing and kindness. This follow-up activity gives every child a turn to actually share something and say the words that go with it.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          '"Should I Share My Ice Cream?" by Mo Willems, a piece of construction paper, and a ball of yarn or a large pom-pom.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Read the book together at circle time.',
          'After reading, roll a piece of construction paper into a cone. That\'s your ice cream cone. Put a ball of yarn or a large pom-pom on top for the scoop.',
          'Hold the cone and start it off: "I\'m going to share my ice cream with [child\'s name]." Then pass the cone to that child.',
          'That child passes it to the next child and says the same sentence with that child\'s name.',
          'Keep going around the circle until everyone has had a turn.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'Passing the cone ties the words about sharing to something kids physically do. Young children remember an idea better when they say it and do it at the same time, more than when you only talk about it.',
          'The repeated sentence also helps quieter kids. Everyone says the same thing, so nobody has to come up with their own words. Shy children are usually much more comfortable joining in when they have a script.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if a child doesn\'t want to pass the cone?',
        answer: 'That\'s fine. Let them pass it without saying the sentence, or hold it for a minute before passing. Don\'t force participation in social-emotional activities.',
      },
      {
        question: 'Can we do this without the book?',
        answer: 'Yes, though the book sets it up well. If you don\'t have a copy, start by talking about a time someone shared something with them, then go into the activity.',
      },
      {
        question: 'How many kids can do this at once?',
        answer: 'Any circle size works, from 5 to 25 children. A bigger group just means more practice with the sharing sentence.',
      },
    ],
  },

  {
    slug: 'the-napping-house',
    title: 'The Napping House: A 3D Storytelling Craft',
    excerpt: 'After reading The Napping House, kids color, cut and put together a 3D paper house with the sleeping characters stacked inside. It works on retelling and fine motor skills at the same time.',
    date: '2025-05-15',
    category: 'Book Activities',
    image: imgNappingHouse,
    relatedProductIds: ['the-mitten'],
    intro: '"The Napping House" by Audrey Wood is a cumulative story. Each new character piles onto the bed on top of the last one until the flea wakes everybody up. In this craft, kids build their own 3D paper house with the characters stacked inside, then use it to retell the story.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          '"The Napping House" by Audrey Wood, a printable napping house template with characters, scissors, glue, and crayons or colored pencils.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Color the house and all the characters the way they look in the book.',
          'Cut out the house and each character separately.',
          'Flip the house over. Glue the bed onto the back (the inside) of the house.',
          'Fold along the black lines (the two door flaps and the roof) so the house stands up and opens.',
          'Open the house back up. Glue the characters onto the bed one at a time, in the order they show up in the book: grandmother, child, dog, cat, mouse, flea.',
          'Have kids write their name on their house.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Read the book first. Each time a new character climbs into bed, stop and ask the kids what they think will happen next. This helps with comprehension and gets the stacking order in their heads before they build it.',
          'Set this up at a table during choice time instead of doing it as a whole group. Kids come over when they\'re ready, and you can work with a few at a time. The steps go in order, so keep a photo of a finished house on the table to help kids work on their own.',
          'When the houses are done, have kids open them up and retell the story to a partner or a small group. Retelling is one of the best ways to build comprehension.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I find the printable template?',
        answer: 'Search for "Napping House printable template" and you\'ll find several free ones. Look for one with the house outline, fold lines, and separate character cutouts.',
      },
      {
        question: 'What age is this activity for?',
        answer: 'Ages 4–6. Younger children (3–4) may need help folding and gluing. Kids 5 and up can usually do it with very little help after you show them how.',
      },
      {
        question: 'Is there an easier version for younger kids?',
        answer: 'Yes. Skip the house. Have kids color and cut out the characters, then put them in order from memory. That still works on retelling and comprehension.',
      },
    ],
  },

  {
    slug: 'it-looks-like-spilled-milk',
    title: 'It Looks Like Spilled Milk: A Paint-Folding Art Activity',
    excerpt: 'After reading It Looks Like Spilled Milk, kids squeeze white paint onto blue paper, fold it in half, and open it up to see what shape they made. Then they decide what it looks like.',
    date: '2025-05-20',
    category: 'Book Activities',
    image: imgSpilledMilk,
    relatedProductIds: [],
    intro: '"It Looks Like Spilled Milk" by Charles G. Shaw shows kids that a shape in the sky (or anywhere) can look like lots of different things depending on how you see it. In this paint-folding activity, kids make their own shape and then tell you what it looks like to them.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'White paint in squeeze bottles, blue construction paper, and a white colored pencil or black marker for kids to write their names.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Read "It Looks Like Spilled Milk" at circle time. Stop on each page and ask kids what they think the white shape could be.',
          'Cut the blue construction paper in half. Fold each half in half to make a crease down the center, then unfold it.',
          'Have each child squeeze 3–5 drops of white paint onto one side of the paper.',
          'Fold the paper along the crease and gently smooth it with one hand.',
          'Open the paper back up. Each child now has their own white shape on a blue background.',
          'Ask the child, "What does your picture look like to you?" Write their answer on the back.',
          'Have the child write their name on the front with the white pencil or black marker.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Squeeze bottles are much easier than cups of paint. Kids can control how much paint comes out, and there\'s less mess. Use a fairly thin white paint so it spreads when the paper is folded.',
          'Put the finished pictures up on a "sky" bulletin board with a blue background so they look like clouds. Add a label with each child\'s name and what they said their shape looks like. Parents love reading these.',
          'This fits well in a weather, seasons, or imagination unit. You can also read a few short poems about clouds while kids are working.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What kind of paint should I use?',
        answer: 'Tempera paint. It\'s washable and about the right thickness. If it\'s too thick to spread when folded, thin it with a little water. Acrylic dries too fast for this.',
      },
      {
        question: 'Can we use other colors?',
        answer: 'Yes. Try light blue paint on white paper, yellow on black paper for a night sky, or let kids pick their own colors. The book uses white on blue, but any two colors with strong contrast will work.',
      },
      {
        question: 'What if a child says "I don\'t know" when I ask what their picture looks like?',
        answer: 'Give a gentle prompt: "Does it look like an animal? A food? Something outside?" If they still aren\'t sure, that\'s okay. Write "I\'m still deciding" or whatever they say about the colors. Looking closely is the point, not coming up with a certain answer.',
      },
    ],
  },
  // ── Fall & Halloween Activities ───────────────────────────────
  {
    slug: 'fall-patterning-activity',
    title: 'Fall Patterning with Real Objects',
    excerpt: 'Kids finish printed pattern strips using real fall objects like acorns, sunflowers and pumpkins. A hands-on patterning activity for your fall math shelf.',
    date: '2025-09-15',
    category: 'Seasonal',
    image: imgFallPatterning,
    relatedProductIds: ['halloween-patterns'],
    intro: 'Patterning is an early math skill that matters more than it looks. Kids who can read and continue ABAB and ABCABC patterns are already building the base for algebraic thinking later on. Fall is a good time to work on it because real seasonal objects make kids want to pick up the work.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Printed pattern strips with fall pictures. Pumpkins, sunflowers and acorns go well together.',
          'Real or realistic fall objects that match the pictures: small decorative acorns, a sunflower head, a mini pumpkin, or any fall nature items you can collect.',
          'A work mat or tray to keep everything organized.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Lay the pattern strips out on the mat. Each strip shows a repeating pattern that ends in a blank space. The child figures out what comes next and puts the matching real object in that space.',
          'Start with simple ABAB patterns (pumpkin, sunflower, pumpkin, sunflower, blank) before moving on to ABCABC or AABB.',
          'Once a child can extend the pattern, have them cover the strip and build the whole pattern from memory with just the real objects. Now they\'re making patterns, not only recognizing them.',
        ],
      },
      {
        heading: 'Why Use Real Objects',
        paragraphs: [
          'Holding real objects (the weight of an acorn, the bumpy feel of a dried sunflower) gives kids something concrete to connect the idea of a pattern to.',
          'Real objects also get kids to choose the work. A printed card next to a pile of real acorns pulls them over before they even think of it as math.',
          'Nature items are free and change with the season, so you can swap them out to keep the same work interesting. Use pinecones in October and dried corn in November. The patterning skill stays the same.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if I can\'t get real objects?',
        answer: 'Picture cards or small seasonal erasers work too. The important part is that the piece the child adds is something separate they can pick up and move, not just pointing at the strip.',
      },
      {
        question: 'How do I know when a child is ready for harder patterns?',
        answer: 'When they can extend an ABAB pattern quickly and without hesitating, add a third item (ABCABC). When that\'s solid, try AABB or AABC. Follow the child. If they\'re frustrated, go back a step. If they\'re bored, move up.',
      },
      {
        question: 'Can a whole group do this?',
        answer: 'Yes. Set out several strips at a table and let kids work side by side. Patterns are self-checking (it either continues correctly or it doesn\'t), so kids can work independently in a group.',
      },
    ],
  },

  {
    slug: 'fall-number-sequencing-puzzle',
    title: 'Fall Number Sequencing Puzzle',
    excerpt: 'Kids put numbered picture strips in order from 1 to 10 to build a fall scene. The picture checks their work, and it builds number order and counting skills.',
    date: '2025-09-20',
    category: 'Seasonal',
    image: imgFallNumberPuzzle,
    relatedProductIds: ['fall-math-clip-cards'],
    intro: 'Number sequencing puzzles look like a simple put-it-in-order job, but there\'s a lot of thinking going on. A child who can put 1 to 10 in order every time understands that numbers always go in the same order, that each one is one more than the one before, and that the sequence has a start and an end. This fall version is a pumpkin patch scene.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Numbered picture strips, 1 through 10. Each strip shows part of a fall scene (a child in a pumpkin patch).',
          'A flat work surface where the strips can be laid out in a row.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Mix up the strips and put them in a pile or spread them out on the mat.',
          'The child puts the strips in order from 1 to 10, left to right, until the whole picture comes together. The picture is the self-check. If it looks right, the order is right.',
          'For more of a challenge, flip the strips face down when they\'re done and have the child try to remember the order.',
        ],
      },
      {
        heading: 'Taking It Further',
        paragraphs: [
          'When 1–10 is easy, have the child put the strips in order backward (10–1). It sounds simple, but counting backward takes a different kind of thinking and comes later for most kids.',
          'You can also use the strips just for number recognition. Hold one up and ask the child to name the number without looking at the strips next to it for clues.',
          'Pair this with a ten-frame or bead stair so kids connect the number on the strip to an actual amount.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this for?',
        answer: 'Most children are ready to sequence 1–10 somewhere between 3.5 and 5. Younger kids can start with fewer strips (1–5). Older kids can use strips that go up to 20.',
      },
      {
        question: 'How is this different from counting?',
        answer: 'Counting is saying the numbers in order from memory. Sequencing means looking at written numerals and putting them in order. It connects the numbers kids say out loud to how they look on paper.',
      },
      {
        question: 'Can I make one at home?',
        answer: 'Yes. Take any wide picture and cut it into 10 equal strips, then write 1–10 along the bottom. The picture can be anything: a family photo, a favorite book cover, or something your child drew.',
      },
    ],
  },

  {
    slug: 'fall-count-and-clip',
    title: 'Fall Count and Clip Cards',
    excerpt: 'Kids count the fall objects on each card and clip a clothespin to the matching number. The cards are self-correcting, and clipping builds fine motor strength.',
    date: '2025-10-01',
    category: 'Seasonal',
    image: imgFallClipCards,
    relatedProductIds: ['fall-math-clip-cards'],
    intro: 'Clip cards are one of the easiest math works to use in a classroom. They\'re self-correcting and reusable, and squeezing the clothespin builds the same pincer grip kids need for writing. With fall pictures like pumpkins, apples, scarecrows and hay bales, this counting work can stay on the shelf from September through November.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A set of fall count and clip cards. Each card shows a different number of fall objects with three number choices along the bottom.',
          'A small basket of wooden clothespins: one per child, or a few extra if several kids are working at once.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'The child picks a card, counts the objects, and clips a clothespin on the matching number.',
          'Go through the cards one at a time. Some kids like to do them all and then check, and some check as they go. Either way is fine.',
          'To make them self-checking, put a small dot on the back of each card behind the correct answer. The child flips the card over to see if the clip is in the right spot.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Keep the clothespins in a small basket next to the cards so kids can set up and clean up on their own.',
          'If a child is still working on counting accurately, have them touch each object as they count (one touch for each number) instead of just looking over the picture.',
          'These cards work as a transition activity, a morning work choice, or a small-group math rotation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What number range should I use?',
        answer: 'Cards for 1–5 work for most Pre-K kids. Kindergartners can usually handle 1–10. With a mixed-age group, put out both sets and let kids choose.',
      },
      {
        question: 'What if a child keeps getting the wrong answer?',
        answer: 'Watch how they count. The most common mistake at this age is counting something twice or skipping one. Practice one-to-one correspondence (one touch, one number) before going back to the clip cards.',
      },
      {
        question: 'Can I use these with a small group?',
        answer: 'Yes. Give everyone in the group the same card at the same time, then talk about it: "How many did you count? Did anyone get a different number?" The talking is often just as useful as the counting.',
      },
    ],
  },

  {
    slug: 'apple-life-cycle-activity',
    title: 'Apple Life Cycle: A Fall Science Activity',
    excerpt: 'Children put the stages of an apple\'s life in order, from seed to fruit, using a diagram, a cut-and-glue sequencing worksheet, and a fold-out accordion book they make themselves.',
    date: '2025-10-05',
    category: 'Seasonal',
    image: imgAppleLifeCycle,
    relatedProductIds: [],
    intro: 'The apple life cycle is a good fall science topic because kids already know how it ends: with an apple. Start with the apple, go back to the seed, then work forward through each stage. Putting stages in order like this is early science thinking, and it comes up again later in biology and environmental science.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'An apple life cycle diagram (seed, seedling, tree, bud, flower, fruit). Laminate it so you can use it again.',
          'A sequencing worksheet where children cut out the life cycle stages and put them in order.',
          'Optional: an accordion fold-out book template. Children color each stage and fold the pages into a small book to take home.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Look at the diagram together and name each stage: seed, seedling, sapling, tree, flower, fruit. Ask if they\'ve ever seen an apple tree, an apple blossom, or an apple seed.',
          'Hand out the sequencing worksheet. Children cut apart the six stages and glue them in order, checking the diagram as they go.',
          'For the accordion book, children color each stage, fold the pages back and forth, and staple apple-shaped covers on the front and back. When they open it up, the whole life cycle is laid out.',
        ],
      },
      {
        heading: 'Connect It to a Real Apple',
        paragraphs: [
          'Cut an apple open at snack time and look at the seeds together. Ask what would happen if you planted one. The activity means more when it starts with something they can hold.',
          'If you can visit an apple orchard, or even look at photos of apple trees in bloom, do it. The flower stage is usually the hardest one for kids to connect to the fruit, and seeing the blossoms helps.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many stages should I use with younger children?',
        answer: 'Three stages (seed, tree, apple) is enough for children under 4. Use the six-stage version with children 4 and up who can handle a longer sequence.',
      },
      {
        question: 'Does this activity connect to early learning standards?',
        answer: 'Yes. Life cycle sequencing is part of most early childhood science standards. It covers growth, change over time, and how plants and their seeds are connected.',
      },
      {
        question: 'Can I do this without a printed diagram?',
        answer: 'Yes. Draw six circles in a ring, label each stage, and draw arrows between them. Children can sequence picture cards around the outside.',
      },
    ],
  },

  {
    slug: 'halloween-counting-brew',
    title: 'Halloween Counting Brew',
    excerpt: 'Children count spiders, eyeballs, and worms into a cauldron to match numbered brew cards. A Halloween counting activity for one-to-one correspondence and number recognition.',
    date: '2025-10-15',
    category: 'Seasonal',
    image: imgHalloweenCountingBrew,
    relatedProductIds: ['halloween-counting'],
    intro: '"Add three spiders to the brew." Kids love anything with a real cauldron and creepy little objects. This counting brew work practices the same skills as any counting activity (one-to-one correspondence and number recognition) with a Halloween theme that keeps them coming back to it all October.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A small black cauldron or bucket. The Halloween buckets from the dollar store work well.',
          'A set of numbered "Counting Brew" cards. Each card shows a number and which ingredient to add.',
          'Halloween counting objects: plastic spiders, googly eyeballs, rubber worms, and any other small Halloween pieces you have.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Spread the brew cards out on the mat. The child picks a card and reads it (or you read it to them), for example "5 spiders."',
          'The child counts out that many spiders and drops them into the cauldron one at a time, counting out loud.',
          'Keep going with the rest of the cards, adding the right number of each ingredient. At the end, they can look in the cauldron and count everything that went in.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'Dropping objects into a container holds their attention better than lining them up on a flat mat. They get a little clunk every time. The objects help too. Kids who walk right past the other counting works will stop at the cauldron.',
          'It also works on numerals and number words at the same time. Children who can\'t read the numeral yet can count the pictures on the card. Children who can read it practice matching it to the amount they count out.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where do I find the small Halloween objects?',
        answer: 'Dollar stores, party supply stores, and Amazon all sell cheap bags of plastic spiders, eyeballs, and worms. Check the Halloween aisle starting in September. One small bag of each is plenty for this work.',
      },
      {
        question: 'What number range should the cards cover?',
        answer: 'Cards for 1–10 work for most Pre-K and Kindergarten children. Adjust the top number for your group. Some kids will be ready for numbers up to 20 by late October.',
      },
      {
        question: 'Can I leave this on the shelf all of October?',
        answer: 'Yes, it works well as an October shelf work. If interest drops, swap the objects (different spiders, colored eyeballs instead of plain) so it feels new without changing the activity.',
      },
    ],
  },

  // ── Winter Activities ─────────────────────────────────────────
  {
    slug: 'felt-penguin-dress-up',
    title: 'Felt Penguin Dress Up: A Winter Creative Play Activity',
    excerpt: 'Children dress a felt penguin with colorful scarves, hats, and ear muffs. A simple open-ended activity for ages 3–6 that works on color recognition and pretend play.',
    date: '2025-11-01',
    category: 'Seasonal',
    image: imgFeltPenguinDressUp,
    relatedProductIds: ['the-mitten'],
    intro: 'This one looks simple, but kids stay with it a long time. Each child gets a felt penguin and a pile of felt scarves, hats, and ear muffs, and they dress it however they want. There\'s no pattern to follow and no right answer. That\'s on purpose.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Felt in black, white, orange, blue, purple, yellow, pink, and green.',
          'Googly eyes, liquid glue, and pom-poms in different colors.',
        ],
      },
      {
        heading: 'How to Prepare the Activity',
        paragraphs: [
          'Make the felt penguins before you present the activity. Cut a simple penguin body from black felt with a white tummy and an orange beak and feet. Glue on the googly eyes with liquid glue and let them dry completely.',
          'Cut a bunch of scarves, hats, and ear muffs from the different colors of felt. Sort them into three piles (scarves, hats, ear muffs) so children can find what they want.',
          'Set the penguins and the sorted accessories out on a tray or mat.',
        ],
      },
      {
        heading: 'How the Children Use It',
        paragraphs: [
          'Children pick a penguin and choose accessories from the three piles. Some will match colors carefully. Others will use as many colors as they can. Either way is fine.',
          'The felt pieces come on and off easily, so kids often dress their penguin over and over. That repetition brings out a lot of talking: naming colors, describing what the penguin is wearing, comparing with a friend.',
          'Add pom-poms as an extra option for decorating the hats or scarves.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'Open-ended activities, where there\'s no one right outcome, are some of the most useful works on an early childhood shelf. Kids practice making their own choices without waiting for a grown-up to tell them it\'s right.',
          'Felt is forgiving. The pieces stay put well enough without being permanent. Younger children who can\'t manage buttons and snaps yet can still handle felt accessories on their own and feel successful.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I cut the felt pieces so they come out the same?',
        answer: 'Make a paper template. Draw your scarf, hat, and ear muff shapes on paper, cut them out, and trace them onto the felt. You can cut through a few layers of felt at once to save time.',
      },
      {
        question: 'How many penguins should I make?',
        answer: 'One per child if it\'s an individual work, or two or three for a shared tray at a table. Make a few extras so the activity is still ready if a penguin goes missing or wears out.',
      },
      {
        question: 'Can children add their own decorations?',
        answer: 'Yes. Put out extra pom-poms, small felt shapes, or sequins for kids who want to keep going. Keep very small pieces away from children under three.',
      },
    ],
  },

  {
    slug: 'snowman-letter-tracing',
    title: 'Snowman Letter Tracing: A Sensory Writing Activity',
    excerpt: 'Children pick a letter card and trace the letter in shaving cream on a tray. A hands-on winter activity for practicing letter formation.',
    date: '2025-11-15',
    category: 'Seasonal',
    image: imgSnowmanLetterTracing,
    relatedProductIds: ['winter-rhyming-cards'],
    intro: 'Shaving cream tracing sounds messy, but it\'s easy to manage, and kids love it. Tracing through the cream gives them a feel for the letter shape that pencil and paper doesn\'t. Add a snowman theme and a set of letter cards and you have a winter language work they\'ll keep choosing.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Letter cards (uppercase, lowercase, or both, depending on where your children are).',
          'A small tray. A baking tray or a sensory tray with low sides works well.',
          'A card holder stand to hold the letter card upright so children can see it while they trace.',
          'One can of shaving cream.',
        ],
      },
      {
        heading: 'How to Set Up',
        paragraphs: [
          'Spray a thin, even layer of shaving cream on the bottom of the tray. You only need enough to cover it.',
          'Put the card holder stand at the back of the tray with a letter card in it. The child looks at the card and traces the same letter in the shaving cream.',
          'Keep extra letter cards close by so children can switch them out on their own.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'The child picks a letter card and puts it in the card holder stand where they can see it.',
          'Using one finger, the child traces the letter in the shaving cream, copying the card.',
          'When they\'re done, they smooth the shaving cream with their palm to erase it, and it\'s ready to use again. Add a little more shaving cream if it gets thin.',
          'Children keep going with different letter cards and decide for themselves which letters to practice and for how long.',
        ],
      },
      {
        heading: 'Why Sensory Writing Works',
        paragraphs: [
          'Forming a letter with a finger in something like shaving cream gives kids more to feel than writing with a pencil. The cool, smooth cream helps the motor memory of the letter shape stick.',
          'Everything smooths away, so there\'s no pressure about mistakes. Kids who get nervous about messing up on paper can try a letter as many times as they want.',
          'It\'s a good fit for children working on letter formation who aren\'t ready for a lot of pencil work yet, and for any child who needs a new way to practice letters.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is shaving cream safe for young children?',
        answer: 'Regular foam shaving cream is generally fine on skin for a supervised activity, and it\'s used a lot in early childhood classrooms. Skip it if a child has very sensitive skin. Supervise closely, like with any sensory material, and remind kids it\'s not for tasting.',
      },
      {
        question: 'What kind of letter cards work best?',
        answer: 'Cards with arrows showing how to form the letter work best. They show children where to start and which way to go. You can also adapt Montessori sandpaper letter cards for this.',
      },
      {
        question: 'How do I clean up?',
        answer: 'Shaving cream wipes up with a damp cloth. Trays, tables, and hands clean up fast. Rinse the tray in warm water when you\'re done and it\'s ready for next time.',
      },
    ],
  },

  {
    slug: 'disguise-a-turkey',
    title: 'Disguise A Turkey: A Thanksgiving Take-Home Project',
    excerpt: 'After reading Turkey Trouble at circle time, children take home a turkey outline with one job: disguise the turkey so it doesn\'t get eaten for Thanksgiving.',
    date: '2026-10-07',
    category: 'Book Activities',
    image: imgDisguiseATurkey,
    relatedProductIds: [],
    intro: 'This Thanksgiving project starts with a circle time read-aloud of Turkey Trouble by Wendi Silvano. It\'s about a turkey who tries one disguise after another so he won\'t end up as Thanksgiving dinner. After the story, each child takes home a turkey outline to disguise. The ones that come back are always funny.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A copy of Turkey Trouble by Wendi Silvano, a turkey outline printed on white paper (any simple turkey shape works), a manila folder for each child, and an instruction sheet that explains the project to families.',
        ],
      },
      {
        heading: 'How to Set Up the Activity',
        paragraphs: [
          'Read Turkey Trouble together at circle time. Afterward, talk about the story. Ask what disguises the turkey tried, whether they worked, and what the children would do if they were the turkey.',
          'Explain the take-home project: their job is to disguise their turkey so it doesn\'t get caught. They can use whatever they have at home, like drawings, collage, fabric scraps, googly eyes, stickers, or paint.',
          'Send each child home with the turkey outline and the instruction sheet in a manila folder. Have them write their name on both the turkey and the folder so nothing gets mixed up.',
          'Tell them to keep the folder closed. It\'s a secret until they bring it back.',
        ],
      },
      {
        heading: 'When They Return',
        paragraphs: [
          'When the turkeys come back, set aside time for a reveal. Each child opens their folder and shows the class their disguised turkey. It\'s good language practice: ask them to tell what their turkey is pretending to be and why the disguise would work.',
          'You\'ll get turkeys dressed as superheroes, pizza slices, flowers, dinosaurs, and everything in between. Put the finished turkeys on a bulletin board and leave them up through November.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this project for?',
        answer: 'It works for Pre-K through Grade 1. Younger children may need more help at home, but since it\'s open-ended, every child can do it at their own level.',
      },
      {
        question: 'What if a family doesn\'t have many materials at home?',
        answer: 'Send home a small baggie of basic supplies (a few crayons, some stickers, a strip of colored paper) so every child has something to work with.',
      },
      {
        question: 'Can we do this in the classroom instead?',
        answer: 'Yes. Set up a supply table with collage materials, markers, and craft scraps and let children make their turkeys at school. The take-home version gets families involved, but the classroom version works fine too.',
      },
    ],
  },

  {
    slug: 'polar-express-sequencing',
    title: 'Polar Express Sequencing Activity',
    excerpt: 'After reading The Polar Express, children put six key events from the story in order. A December literacy and comprehension activity.',
    date: '2026-10-07',
    category: 'Book Activities',
    image: imgPolarExpressSequencing,
    relatedProductIds: [],
    intro: 'The Polar Express by Chris Van Allsburg is a December classic. In this follow-up activity, children go back over the story and practice retelling it (an important comprehension skill) by numbering six picture squares in the order they happened in the book.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A copy of The Polar Express by Chris Van Allsburg, one sequencing worksheet per child (with six illustrated story events), crayons or colored pencils, and a pencil for numbering.',
        ],
      },
      {
        heading: 'How to Run the Activity',
        paragraphs: [
          'Read The Polar Express aloud at circle time. Go slow and stop to look at the illustrations together. Van Allsburg\'s artwork is worth the time.',
          'After reading, bring children to a table, or leave the activity out in an open work area so they can come to it on their own.',
          'Go over the sequencing worksheet as a group. Read each of the six squares out loud and talk about which part of the story it shows. Depending on age and reading level, some children will need help reading the descriptions.',
          'Children write their name at the top, then number the squares 1 to 6 in the small boxes, in the order the events happened in the book.',
          'When everyone is done, come back together and go over the order as a group. Children can explain why they put things where they did.',
        ],
      },
      {
        heading: 'Extension Ideas',
        paragraphs: [
          'Serve hot cocoa while they work. It goes with the hot chocolate scene in the book and makes the activity feel like an event.',
          'After sequencing, have children draw their favorite scene from the book on the back of the worksheet or in their journals.',
          'Older children can write a sentence about each event in the order they numbered them, which turns the sequencing into a short retelling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this activity for?',
        answer: 'Kindergarten through Grade 2. Pre-K children can join in with more adult help reading the squares. Talking through the order out loud is still worth doing even if they don\'t write the numbers on their own.',
      },
      {
        question: 'What if children disagree on the order?',
        answer: 'Use it. Have them go back to the book and find the pages that show each event. Using the text to back up an answer is the comprehension skill this activity is working on.',
      },
      {
        question: 'Can I use this with a different book?',
        answer: 'Yes. The format works with any story that has a clear beginning, middle, and end. Make your own six-square worksheet with events from the book your class is reading.',
      },
    ],
  },

  {
    slug: 'thankful-hands',
    title: 'Thankful Hands: A Thanksgiving Handprint Art Project',
    excerpt: 'Children glue colorful paper squares around a paper plate, then press a painted handprint in the center. A Thanksgiving display that doubles as a writing prompt about what they\'re thankful for.',
    date: '2026-10-07',
    category: 'Seasonal',
    image: imgThankfulHands,
    relatedProductIds: [],
    intro: 'Thankful Hands is a classic Thanksgiving project for early childhood. Kids practice fine motor skills, pick and mix colors, and answer a simple prompt: what are you thankful for. Each child makes their own paper plate, and when they\'re done the whole set goes up on the hallway or classroom wall.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Paper plates, one per child.',
          'Construction paper in different colors, cut into small squares for the border.',
          'Scissors and a glue stick.',
          'Paint in different colors and paintbrushes.',
          'Large letters spelling THANKFUL HANDS for the display sign (or print and cut your own).',
        ],
      },
      {
        heading: 'How to Prepare',
        paragraphs: [
          'Write each child\'s name on the back of a paper plate before you start. It keeps the plates straight while they dry and makes labeling the display easy.',
          'Pre-cut a pile of small construction paper squares in lots of colors and put them in a shared tray or bowl so children can pick what they want.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Give each child their plate and have them glue colored squares around the edge to make a mosaic border. They can use any colors they like.',
          'When the border is done, each child picks a paint color for their handprint. Use a paintbrush to coat one hand evenly.',
          'Press the painted hand firmly in the center of the plate and lift it straight up. Put the plate on a drying rack.',
          'When the paint is dry, add a writing prompt line ("I am thankful for ___") for children who are ready to write. Other children can tell you their answer and you write it down.',
          'Arrange the plates around the THANKFUL HANDS letters on a bulletin board or hallway wall.',
        ],
      },
      {
        heading: 'Why Children Love This Activity',
        paragraphs: [
          'Kids choose their own border colors, and the handprint makes each plate their own. They like finding their plate up on the wall next to their classmates\'.',
          'The gratitude prompt is simple, but it gets children thinking about what they appreciate. Many families say their kids bring the conversation home.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How far ahead can I prep this?',
        answer: 'You can cut the construction paper squares and label the plates a day or two ahead. Do the painting the same day. Dried paint on the brush makes the handprint less crisp.',
      },
      {
        question: 'What if a child\'s handprint smears?',
        answer: 'Let it dry completely, then do a second print on top. Two overlapping prints can look good. Remind children to press the whole palm down and lift straight up instead of sliding.',
      },
      {
        question: 'How long does it take per child?',
        answer: 'The border takes about 5–10 minutes per child and can run as a center while you call children over one at a time for the handprint, which takes under two minutes each. The whole class can finish in one session.',
      },
    ],
  },

  {
    slug: 'placemat-weaving',
    title: 'Placemat Weaving: A Fall Paper Weaving Activity',
    excerpt: 'Children cut slits in a folded sheet of paper and weave colored strips through in an over-under pattern. A fine motor project that makes a fall placemat to take home.',
    date: '2026-10-07',
    category: 'Seasonal',
    image: imgPlacematWeaving,
    relatedProductIds: [],
    intro: 'Paper weaving looks hard, but ages 3–6 can do it with some prep and a clear demonstration. Using fall colors (orange, brown, yellow, and green), children make a woven placemat they can actually use at the table at home.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'One sheet of construction paper per child for the base mat. Let children choose the color.',
          'Pre-cut construction paper strips in fall colors: orange, brown, yellow, and green. Cut enough for each child to choose six strips.',
          'Scissors (for you to demonstrate the cuts, and for children who are ready to cut their own).',
          'A glue stick to hold down the ends of the strips when the weaving is done.',
        ],
      },
      {
        heading: 'How to Prepare',
        paragraphs: [
          'Cut the weaving strips ahead of time. Make them about an inch wide and long enough to reach all the way across the placemat paper.',
          'Tip: make sure the strips aren\'t the same color as the child\'s base paper. If a child picks an orange base, steer them away from orange strips so the weave actually shows.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Have each child fold their base paper in half the long way (hot-dog fold).',
          'Starting at the folded edge, make five evenly spaced cuts across the paper, stopping about an inch from the open edge. These are the slots the strips go through.',
          'Open the paper flat. Show children how to weave a strip over the first slot, under the second, over the third, and keep alternating all the way across.',
          'After the first strip is in, have the child turn the mat around (180°) and start the next strip from the other side, going under first this time. Switching the starting side is what makes the checkerboard pattern.',
          'Keep going until all six strips are woven in.',
          'Dab glue stick on both ends of every strip and press the ends flat on the base paper so nothing slides out.',
        ],
      },
      {
        heading: 'Why Weaving Works for This Age',
        paragraphs: [
          'Over-under weaving means children have to follow a pattern and remember a rule, which is good early patterning and logic practice. Threading the paper strips also builds hand coordination and two-handed (bilateral) skills that help with writing readiness.',
          'If the full over-under pattern is hard for a child, start with a simpler in-out pattern or guide their hand through the first row. Most children catch on fast once they see how the strip goes through.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How wide should the cuts and strips be?',
        answer: 'About one inch works for ages 3–6. It\'s wide enough to thread easily and narrow enough to fit several strips across the mat. For younger children, go wider (1.5 inches) so it\'s easier to handle.',
      },
      {
        question: 'What if the strips fall out before I glue them?',
        answer: 'Keep the finished weave flat on the table and glue the ends before the child picks it up. It helps to have a teacher or helper hold the strips while the child does the glue.',
      },
      {
        question: 'Can we use colors other than fall colors?',
        answer: 'Yes. Weaving works with any colors. Fall colors fit October and November, but you could use winter colors in December or rainbow colors any time of year.',
      },
    ],
  },
]

export function getIdea(slug: string): Idea | undefined {
  return IDEAS.find((i) => i.slug === slug)
}
