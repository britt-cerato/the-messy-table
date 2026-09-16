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
    excerpt: 'Nomenclature cards are one of the most versatile materials in a Montessori classroom. Here\'s what they are, how they work, and how to use them at home or in your classroom.',
    date: '2025-01-15',
    category: 'Nomenclature',
    relatedProductIds: ['animal-nomenclature', 'penguin-nomenclature', 'horse-bridle-nomenclature', 'van-gogh-cards', 'human-development-cards'],
    intro: 'If you\'ve spent any time in a Montessori classroom, you\'ve probably seen sets of small cards spread out on a work mat — a picture card, a label card, and a combined "control" card. These are nomenclature cards, and they\'re one of the most useful and flexible materials in the Montessori language arts tradition.',
    sections: [
      {
        heading: 'What Are Three-Part Cards?',
        paragraphs: [
          'Montessori nomenclature cards are also called "three-part cards" because each concept is broken into exactly three pieces: a picture card (image only), a label card (word only), and a control card (image and word together).',
          'A child works with the picture and label cards independently, matching the correct word to each image. When finished, they use the control card to check their own work — no adult needed. This self-correcting quality is central to the Montessori approach: children build confidence by verifying their own answers.',
          'The materials can cover almost any subject. Science, geography, art history, vocabulary, anatomy — if it can be illustrated and labeled, it can become a set of three-part cards.',
        ],
      },
      {
        heading: 'What Age Are They For?',
        paragraphs: [
          'Nomenclature cards are appropriate for a wide age range. Simple sets with clear, familiar images (animals, household objects, fruits) work beautifully for children as young as 2.5 to 3 years old who are in the sensitive period for language.',
          'More complex sets — detailed anatomy, fine art, historical figures — are well suited to children in the 4–7 range. The same material can be revisited at different levels: a young child might match pictures, while an older child reads the labels independently and writes them from memory.',
        ],
      },
      {
        heading: 'How to Present Them in a Classroom or at Home',
        paragraphs: [
          'Start by introducing the control cards together, naming each image clearly. Then mix up the picture cards and label cards separately on a mat. Invite the child to match each label to its picture, then check using the control cards.',
          'For pre-readers, the picture-matching step alone builds vocabulary and observation skills. For emerging readers, the matching work reinforces sight words and phonetic decoding in a context that feels purposeful.',
          'Store each set in a small basket or envelope so the child can take it out and work independently. Rotate sets on the shelf every few weeks to keep the work fresh.',
        ],
      },
      {
        heading: 'Beyond Animals: Surprising Uses for Nomenclature Cards',
        paragraphs: [
          'Animal anatomy is the classic starting point, but nomenclature cards shine in unexpected subjects. Art history cards (like our Van Gogh set) introduce children to masterworks through matching and discussion. Human development cards open conversations about biology and growth in a calm, factual way.',
          'For homeschool families, nomenclature cards are especially useful because they require no special training to use. Set them out on the kitchen table, demonstrate the three-step sequence once, and step back. The material does the teaching.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do Montessori nomenclature cards need to be laminated?',
        answer: 'Laminating makes them much more durable, especially with young children. If you\'re using them frequently, it\'s worth the step. Our cards are printed on cardstock and hand-assembled, and we recommend laminating if you plan to use them daily.',
      },
      {
        question: 'Can I use nomenclature cards with children who can\'t read yet?',
        answer: 'Yes — that\'s one of their best features. Pre-readers use the picture cards for matching and vocabulary building. The label cards become relevant once a child begins recognising written words, so the same set grows with the child.',
      },
      {
        question: 'How many cards should be in a set?',
        answer: 'Most Montessori three-part card sets contain between 6 and 14 pairs. Too few and there\'s not enough vocabulary; too many and the work becomes overwhelming for a young child. Our sets are sized to hit that sweet spot.',
      },
      {
        question: 'Where do nomenclature cards go on the Montessori shelf?',
        answer: 'Animal and science-themed sets typically live on the science or cultural shelf. Language-themed nomenclature cards can go on the language shelf. Art cards are lovely in their own basket near any art prints or postcards you have displayed.',
      },
    ],
  },

  {
    slug: 'cvc-word-activities-kindergarten',
    title: 'CVC Word Activities Your Kindergartner Will Actually Want to Do',
    excerpt: 'CVC words — short three-letter words like "cat", "hop", and "sun" — are the first words most children decode on their own. These hands-on activity ideas make that milestone fun.',
    date: '2025-02-01',
    category: 'Language',
    relatedProductIds: ['valentines-word-building', 'word-family-flower-pots', 'spring-worksheets'],
    intro: 'CVC stands for consonant-vowel-consonant, and these short words (cat, hop, pin, sun) are the first ones most children decode independently. When a child sounds out their very first word and looks up with that particular expression of surprised pride, CVC words are almost always the reason. The activities below make the practice feel like play.',
    sections: [
      {
        heading: 'Why Word Families Work So Well',
        paragraphs: [
          'Rather than drilling individual words in isolation, word families teach children to recognise a pattern and generate new words from it. Once a child knows the "-at" family, they can read cat, bat, hat, mat, rat, and sat — six words for the price of one.',
          'Word family work also builds phonemic awareness, which is the ability to hear and manipulate individual sounds in words. This skill is one of the strongest predictors of early reading success.',
        ],
      },
      {
        heading: '5 Hands-On CVC Activities',
        paragraphs: [
          '1. Word family sorting. Write three or four word endings (_at, _og, _in) on separate flower pots, bowls, or cards. Print or write word cards and have the child sort them into the right family. Our Word Family Flower Pots make this work self-correcting and visually appealing.',
          '2. Word building with moveable letters. Lay out a short vowel sound and swap consonants on either side. "Can you change \'cat\' to \'bat\'?" is more engaging than a worksheet and builds the understanding that words are made of moveable parts.',
          '3. Write the room. Post CVC word cards or pictures around the room and give children a clipboard and recording sheet. They walk around, find the words, and write them down. The movement makes it memorable.',
          '4. Valentine\'s word building. Our Valentine\'s Day Word Building cards use a heart theme to make short-vowel CVC practice feel festive in February — or any time you need a reset from a routine.',
          '5. Playdough words. Roll playdough into letter shapes to spell CVC words. The motor planning involved in forming letters reinforces letter-sound connections through a different modality.',
        ],
      },
      {
        heading: 'When to Introduce CVC Work',
        paragraphs: [
          'Children are ready for CVC word work when they can reliably identify the sounds of all 26 letters (not just their names, but their sounds). In Montessori, this typically happens after the sandpaper letters and before or alongside the moveable alphabet.',
          'In a traditional kindergarten context, CVC work usually begins in the first few months of the school year. If a child is ready earlier, there\'s no reason to wait — the activities described above work beautifully for motivated 4-year-olds too.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What order should I introduce CVC word families?',
        answer: 'Most reading programs start with short "a" words (cat, hat, map) because the short "a" sound is very distinct and easy to hear. From there, short "i" and short "o" are common next steps. Short "e" and short "u" tend to be harder for children to distinguish and come later.',
      },
      {
        question: 'My child memorises words instead of sounding them out — is that a problem?',
        answer: 'Some sight-word memorisation is normal and even helpful for very common words. But for CVC work specifically, the goal is decoding — using letter-sound knowledge to read an unfamiliar word. If a child is guessing from context rather than decoding, try covering all but the first letter and asking what sound it makes.',
      },
      {
        question: 'How long should a CVC work session last?',
        answer: 'For most kindergartners, 10–15 minutes of focused phonics work is plenty. The activities above are designed to feel like games, so children often choose to continue longer than you might expect — but it\'s fine to keep sessions short and end while they\'re still enjoying it.',
      },
    ],
  },

  {
    slug: 'montessori-math-at-home',
    title: 'Montessori Math Materials You Can Use at Home (No Expensive Beads Required)',
    excerpt: 'Montessori math is built on a concrete-to-abstract progression. You don\'t need a full classroom set to bring this approach home — here\'s what actually matters and how to start.',
    date: '2025-02-15',
    category: 'Math',
    relatedProductIds: ['bead-stair', 'ten-frames-clip-cards', 'tally-marks-clip-cards', 'fall-math-clip-cards'],
    intro: 'Montessori math has a reputation for requiring elaborate (and expensive) materials — golden bead chains, stamp games, coloured bead bars. And while those materials are wonderful in a fully equipped classroom, the core ideas behind Montessori math can be brought home with much simpler tools. The principle is always the same: children need to hold quantity in their hands before they can understand it on paper.',
    sections: [
      {
        heading: 'The Concrete-to-Abstract Principle',
        paragraphs: [
          'Traditional math instruction often moves too quickly to symbols. A child is shown that 3 + 4 = 7 on paper before they have a felt sense of what "three" and "four" actually mean as quantities.',
          'Montessori math delays the jump to abstract notation. First, a child works with physical objects — beads, counters, tiles — and builds the quantity with their hands. Only after that physical foundation is solid do written numbers and equations enter the picture.',
          'This approach produces children who understand math rather than merely execute procedures. The activities below all follow this progression.',
        ],
      },
      {
        heading: 'The Bead Stair: Understanding Quantity 1–10',
        paragraphs: [
          'The bead stair is a colour-coded set of bead bars — one red bead for 1, two green beads for 2, three pink beads for 3, all the way to ten. Each number has its own colour, so children begin to associate a colour with a quantity even before they can read the numeral.',
          'Work with the bead stair by laying the bars out in stair-step order, counting the beads on each bar together. Ask questions: "Which bar has more?" "What comes after the blue bar?" Over time, children memorise the colours as a shorthand for quantities, which is a powerful bridge to mental math.',
          'Our printed bead stair cards bring the same colour-coding to a flat, storable format — perfect for home use without the physical beads.',
        ],
      },
      {
        heading: 'Ten Frames: Building Number Sense Beyond 10',
        paragraphs: [
          'A ten frame is a simple 2×5 grid. Children fill it with counters and develop a visual sense of how numbers relate to ten — the most important anchor number in our base-ten system.',
          'Ten frames make "11 is one more than 10" and "18 is two less than 20" visually obvious in a way that numerals alone never can. Our Ten Frames Clip Cards cover numbers 11–20 in a self-correcting format: children count the dots and clip the correct number, then check by flipping the card.',
        ],
      },
      {
        heading: 'Tally Marks and Clip Cards',
        paragraphs: [
          'Tally marks are a beautiful bridge between counting and numerals. Children encounter them in games, scorekeeping, and classroom routines, and the grouping-by-five structure prepares them for skip counting and multiplication later on.',
          'Clip cards are one of the most versatile formats in early childhood math. A child counts the objects (or tally marks), finds the correct numeral, and clips a clothespin to it. The physical action of clipping builds fine motor skills and the self-correcting format builds independence.',
          'Seasonal themes — fall leaves, Halloween pumpkins — keep the same core skill feeling fresh throughout the year.',
        ],
      },
    ],
    faqs: [
      {
        question: 'At what age should children start Montessori math work?',
        answer: 'Many children show interest in counting and quantity as early as age 2.5–3. Simple work like placing objects on numbered cards or counting bead bars is appropriate at this age. Ten frames and tally marks are usually introduced around 4–5, when children are ready to work with quantities up to 20.',
      },
      {
        question: 'Do I need to buy a full Montessori math set?',
        answer: 'No. The golden bead material and large bead chains are beautiful, but they\'re not necessary for a home environment. The most important thing is working with concrete quantities before abstract numerals. Printed bead stairs, ten frames, and clip cards give you that progression at a fraction of the cost.',
      },
      {
        question: 'How is Montessori math different from regular kindergarten math?',
        answer: 'The biggest difference is pacing and concreteness. Montessori math stays with physical materials much longer than traditional programs, and children work individually rather than all learning the same concept at the same time. There\'s also an early introduction to very large numbers (the thousand cube) which builds a sense of scale that traditional programs often delay.',
      },
      {
        question: 'My child already knows how to count — do these materials still help?',
        answer: 'Counting and understanding quantity are different skills. A child who can count to 20 by rote may not yet have a solid sense of what "17" means as a quantity. The ten frames and bead stair build that understanding, which is the foundation for all four operations.',
      },
    ],
  },

  {
    slug: 'setting-up-a-language-shelf',
    title: 'How to Set Up a Montessori Language Shelf at Home',
    excerpt: 'A language shelf doesn\'t need to be elaborate to be effective. Here\'s a simple framework for setting up Montessori language work at home, from phonics to word building.',
    date: '2025-03-01',
    category: 'Language',
    relatedProductIds: ['spring-flower-matching', 'valentines-word-building', 'word-family-flower-pots', 'write-the-room-summer'],
    intro: 'One of the most common questions from homeschool families new to Montessori is: "What goes on the language shelf, and in what order?" The short answer is that a language shelf follows the same progression every child moves through in learning to read — from sound awareness, to letter recognition, to word building, to reading. The materials on the shelf just make each step hands-on.',
    sections: [
      {
        heading: 'The Progression: What Comes First',
        paragraphs: [
          'Language shelf work follows a clear developmental sequence. Jumping ahead rarely helps and sometimes hinders — a child who doesn\'t have solid phonemic awareness will struggle with word building no matter how many materials you set out.',
          'The progression is: (1) oral language and vocabulary, (2) phonemic awareness (hearing sounds), (3) letter-sound knowledge, (4) word building with moveable letters or cards, (5) reading simple words and sentences.',
          'Your shelf should have something at each stage your child is working through, not necessarily everything at once.',
        ],
      },
      {
        heading: 'Vocabulary and Matching Work',
        paragraphs: [
          'Before formal reading, children need rich vocabulary. Matching works — pairing a picture card to an object, or matching a picture card to a label — build both vocabulary and the habit of careful observation.',
          'Flower matching works are lovely for this stage: a child matches a daffodil card to a daffodil label, a tulip card to a tulip label. The work is self-correcting and can be extended by asking the child to find examples of each flower in books or outside.',
        ],
      },
      {
        heading: 'Word Building',
        paragraphs: [
          'Once a child knows the sounds of the letters, word building work gives them a way to practise decoding without the pressure of a timed test or a parent watching over their shoulder.',
          'Word family materials are especially effective here. A child sorts picture cards into word family pots (_at, _un, _in) and hears the pattern in the words — that\'s phonemic awareness and phonics working together.',
          'Keep word building work fresh by rotating the materials seasonally. Valentine\'s Day word cards in February, summer write-the-room cards in June. The content changes but the skill practice continues.',
        ],
      },
      {
        heading: 'How Much to Put on the Shelf',
        paragraphs: [
          'Less is almost always more. Three or four language works at any one time is plenty for most children. Too many choices leads to overstimulation and work that gets picked up and put back without real engagement.',
          'Rotate materials every one to two weeks, or when you notice a child has mastered a work or lost interest in it. Keep a small storage box nearby with the next few works ready to swap in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a Montessori language shelf need to be a real shelf?',
        answer: 'Not at all. A low bookshelf, a section of a coffee table, or even a basket on the floor works fine. The important things are that the materials are at the child\'s level, clearly organised, and accessible independently.',
      },
      {
        question: 'When should I introduce reading books alongside shelf work?',
        answer: 'Simple phonics readers can be introduced once a child can reliably decode CVC words. Keep them on or near the language shelf. There\'s no need to wait until shelf work is "complete" — books and shelf work support each other.',
      },
      {
        question: 'What if my child only wants to do one work and ignores the rest?',
        answer: 'That\'s often fine. Deep engagement with one material is more valuable than sampling everything. If the same work is chosen every day for two weeks, that\'s a sign it\'s meeting a real developmental need. Only consider swapping it out when the child seems to have truly mastered it.',
      },
    ],
  },

  {
    slug: 'fall-montessori-activities',
    title: 'Fall Classroom Activities for Preschool and Kindergarten',
    excerpt: 'Autumn is one of the richest seasons for hands-on classroom work — counting, patterning, fine motor practice, and seasonal science all come alive with fall themes.',
    date: '2025-09-01',
    category: 'Seasonal',
    relatedProductIds: ['halloween-counting', 'halloween-patterns', 'fall-math-clip-cards', 'thanksgiving-buttoning'],
    intro: 'Something about autumn energises young children in the classroom. Maybe it\'s the colour, or the novelty of a new school year, or the string of holidays coming up. Whatever the reason, fall-themed materials have an engagement power that plain number cards and letter tiles rarely match. Here are some of the best activities for Pre-K and Kindergarten classrooms in the September–November window.',
    sections: [
      {
        heading: 'Counting and Number Sense',
        paragraphs: [
          'Fall offers irresistible counting objects: acorns, mini pumpkins, dried corn kernels, plastic spiders. Set numbered cards (1–10) on a tray and invite children to place the corresponding number of objects on each card.',
          'Halloween Counting 1–10 extends this work with spooky Halloween objects sorted onto numbered pumpkin cards. Spiders, bats, skulls, and ghosts make counting feel like a special October activity rather than routine number practice.',
        ],
      },
      {
        heading: 'Patterning',
        paragraphs: [
          'Patterning is a foundational math skill that often gets less shelf time than counting and number recognition, but it\'s the groundwork for algebraic thinking. Fall materials make it irresistible.',
          'Set out pattern strips with a Halloween theme — ABAB patterns with ghosts and pumpkins, or ABCABC patterns with spiders, skulls, and bats. Children extend the pattern using small objects or picture cards. Our Halloween Pattern Work is designed exactly for this, with pattern strips and matching object cards.',
        ],
      },
      {
        heading: 'Fine Motor: Practical Life with a Fall Twist',
        paragraphs: [
          'The Thanksgiving season is a perfect time to introduce or revisit buttoning work. Buttoning is a classic Montessori practical life activity — it builds the pincer grip, hand-eye coordination, and the patience that young children need for dressing independently.',
          'Our Thanksgiving Turkey Buttoning Work is a hand-sewn felt turkey with colourful feathers that button on and off. Children button and unbutton the feathers repeatedly, often for much longer than you\'d expect. It\'s also a gentle, tactile alternative to screen time in the weeks before Thanksgiving.',
        ],
      },
      {
        heading: 'Seasonal Math Clip Cards',
        paragraphs: [
          'Clip cards are endlessly reusable and children love the physical action of clipping. Fall Math Clip Cards use autumn images — pumpkins, apples, leaves — for counting and number recognition practice covering 1–5.',
          'Keep a small basket of clothespins near the clip cards so the work is ready to go without adult setup. This is exactly the kind of independent work that keeps a small group classroom running smoothly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When should I put fall materials on the shelf?',
        answer: 'Early September for general autumn work (leaves, apples, harvest themes), then transition to Halloween-specific materials in mid-to-late October. Thanksgiving materials work well throughout November. Rotating too early loses the seasonal anticipation; rotating too late and children are already over it.',
      },
      {
        question: 'How do I store seasonal materials between years?',
        answer: 'Label a clear bin or ziplock bag for each season and store them somewhere accessible. When you rotate materials off the shelf, give them a quick check: replace any worn cards, re-laminate if needed, make sure all pieces are present. Materials that are tidy and complete get used; materials that are missing pieces get ignored.',
      },
      {
        question: 'Can fall activities work for mixed-age classrooms?',
        answer: 'Yes — seasonal themes are one of the best things to use in mixed-age settings because the same theme can carry multiple levels of work. Younger children count Halloween objects 1–5; older children extend patterns or do skip counting with the same objects.',
      },
    ],
  },

  {
    slug: 'montessori-art-appreciation-children',
    title: 'How to Introduce Fine Art to Young Children with Montessori Cards',
    excerpt: 'Young children are natural art appreciators — they just need permission to look closely. Montessori art cards make fine art accessible, memorable, and fun.',
    date: '2025-03-15',
    category: 'Nomenclature',
    relatedProductIds: ['van-gogh-cards'],
    intro: 'Most adults think of art appreciation as something that requires formal instruction, museum visits, and the ability to sit still and listen to a docent. Young children prove this wrong every time. Given a beautiful reproduction and a few minutes, a three-year-old will tell you more about what they notice in a Van Gogh painting than most adults bother to say.',
    sections: [
      {
        heading: 'Why Montessori Art Cards Work',
        paragraphs: [
          'Montessori three-part cards applied to fine art are simple: a full-colour reproduction of a painting on one card, the title on a separate card, and a control card combining both. Children match the title to the painting, learning the names of works through repetition in a context that feels like a game.',
          'The matching work slows children down. To find the card that says "Starry Night," they have to look carefully at each reproduction. That deliberate looking is art appreciation — it just doesn\'t feel like a lesson.',
        ],
      },
      {
        heading: 'Why Van Gogh First?',
        paragraphs: [
          'Van Gogh\'s work is ideal for young children for several reasons. His brushstrokes are bold and visible — children can see the swirling movement in the sky of Starry Night, the thick impasto of the sunflowers. His colour is emotional and immediate. And his subjects (stars, flowers, landscapes) are familiar.',
          'The twelve paintings in our Van Gogh Three Part Cards set span the most recognisable works: Starry Night, Irises, Almond Blossom, Sunflowers, and more. Each work has enough visual distinctiveness that children can identify it reliably after just a few sessions.',
        ],
      },
      {
        heading: 'How to Present Art Cards',
        paragraphs: [
          'Begin with just three or four paintings. Lay the control cards out on a mat and look at them together, naming each one. "This is Starry Night. What do you notice?" Let the child lead the observation.',
          'Then introduce the matching work: separate picture cards and title cards in two piles, mix them up, and invite the child to match. Control cards go face-down for self-checking.',
          'Over time, extend the work: look up the actual painting in a book or online. Find out when it was made. Ask whether the child has a favourite and why. Art conversation with children is almost always surprising.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is appropriate for art appreciation cards?',
        answer: 'Children as young as 2.5 enjoy looking at and matching art cards, though they won\'t retain the painting names reliably until around 4. The matching work itself is valuable at any age — the art history knowledge accumulates gradually.',
      },
      {
        question: 'Should I explain the meaning behind paintings?',
        answer: 'Follow the child\'s lead. If they ask questions, answer them simply and honestly. "Van Gogh painted this when he was very sad, and painting helped him feel better" is entirely appropriate for a five-year-old. Lengthy biographical lectures are not necessary or helpful.',
      },
      {
        question: 'Which artists work well after Van Gogh?',
        answer: 'Monet (Water Lilies, the garden series) and Klimt (The Kiss, Tree of Life) are popular next steps because of their strong colour and pattern. For a more playful set, Matisse\'s cut-outs and Kandinsky\'s abstract work are perennial favourites with young children.',
      },
    ],
  },

  {
    slug: 'practical-life-fine-motor-activities',
    title: 'Practical Life Fine Motor Activities for Pre-K',
    excerpt: 'Fine motor development is foundational — it underpins writing, self-care, and focused work. These simple practical life activities build the skills children need without feeling like practice.',
    date: '2025-04-01',
    category: 'Practical Life',
    relatedProductIds: ['thanksgiving-buttoning'],
    intro: 'In Montessori, practical life activities aren\'t filler. Pouring, spooning, folding, and buttoning are the first works a child does on the shelf — and for good reason. They build the concentration, coordination, and hand strength that everything else depends on. A child who can button a coat with confidence is a child whose hands are ready to hold a pencil.',
    sections: [
      {
        heading: 'Why Fine Motor Work Matters',
        paragraphs: [
          'The small muscles of the hand develop through use. Unlike gross motor skills (running, jumping), fine motor skills don\'t develop automatically with age — they require practice with progressively challenging tasks.',
          'Children with strong fine motor skills tend to approach writing with confidence rather than frustration. They can also manage their own clothing, open their own lunch containers, and complete the small acts of independence that matter enormously to a young child\'s sense of competence.',
        ],
      },
      {
        heading: 'Buttoning: The Gateway Dressing Frame',
        paragraphs: [
          'Buttoning is one of the most important dressing skills for young children and one of the most satisfying to master. The Montessori dressing frame isolates the skill — no coat, no distraction, just the buttons and the holes.',
          'Our Thanksgiving Turkey Buttoning Work brings this classic practical life activity to a seasonal format: a hand-sewn felt turkey with colourful feathers that button on and off. Children work independently, buttoning and unbuttoning the feathers, developing the pincer grip and bilateral coordination the task requires.',
          'The felt material makes it forgiving — buttons slip through felt holes more easily than through thick coat fabric, which makes it accessible to children who are just beginning to work on this skill.',
        ],
      },
      {
        heading: 'Other Fine Motor Activities to Try',
        paragraphs: [
          'Transferring with tongs or tweezers: set out two small bowls and a collection of pom-poms, dried beans, or small objects. Children transfer items from one bowl to the other using tongs. This builds the same pincer grip as writing.',
          'Lacing cards: thread a shoelace through holes in a stiff card. Children lace and unlace independently, building hand-eye coordination and the over-under movement pattern used in tying shoes.',
          'Playdough: rolling, pinching, and squeezing playdough strengthens hand muscles in a way children rarely resist. Keep a small covered container on the shelf with a mat and a few simple tools.',
          'Threading beads: large wooden beads on a thick cord. Children thread the beads, then remove them and start again. Adjust bead size and cord thickness as coordination develops.',
        ],
      },
    ],
    faqs: [
      {
        question: 'At what age should children be able to button independently?',
        answer: 'Most children develop functional buttoning skills between ages 4 and 6. With regular practice through dressing frames and materials like the turkey buttoning work, many children are competent by 4. Every child develops at their own pace, and frustration is a signal to step back, not push forward.',
      },
      {
        question: 'How long should fine motor work sessions last?',
        answer: 'Let the child lead. Some children will button and unbutton for 20 minutes; others will do two repetitions and move on. Both are fine. The key is that the work is always available and always self-initiated — the child comes to it when they\'re ready.',
      },
      {
        question: 'My child avoids fine motor work. How do I encourage it?',
        answer: 'Seasonal and novelty materials often draw in reluctant workers — a Halloween-themed tong transfer or a Thanksgiving buttoning turkey feels different from a plain dressing frame. Also check that the materials aren\'t too challenging; starting slightly below a child\'s level builds confidence and engagement.',
      },
    ],
  },

  // ── Crafts ───────────────────────────────────────────────────
  {
    slug: 'diy-bird-feeder-craft',
    title: 'DIY Bird Feeder Craft for Kids (Ages 3–6)',
    excerpt: 'Mix birdseed and gelatin, press into cookie cutters, and hang outside for the birds. A hands-on nature craft that combines measuring, mixing, and a little patience.',
    date: '2025-04-15',
    category: 'Crafts',
    image: imgBirdFeeder,
    relatedProductIds: [],
    intro: 'This bird feeder craft checks every box — measuring, mixing, waiting, and then the very satisfying payoff of watching real birds come to eat something the children made. It pairs beautifully with a spring or birds unit and gives kids a tangible connection to the natural world outside the classroom window.',
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
          'Line a cookie sheet with parchment paper. Place cookie cutters on the sheet and spray the inside of each one with cooking spray.',
          'Measure 2–3 cups of bird seed into a large bowl and set aside. In a separate medium bowl, pour half the water and sprinkle in the gelatin. Whisk to combine. Microwave the remaining water until boiling, then whisk it into the gelatin mixture until fully dissolved.',
          'Pour the gelatin mixture into the bowl of bird seed and stir until all the liquid is absorbed. Refrigerate for about 5 minutes to cool.',
          'Cut straws into 3-inch sections. Spoon the cooled mixture into each cookie cutter and press firmly. Push a straw piece about ½ inch down from the top all the way through to the cookie sheet — this creates the ribbon hole.',
          'Refrigerate overnight (at least 8 hours). Gently remove the cookie cutters, press the straws through to clear the holes, thread ribbon through, and tie a knot. Air dry inside for 24 hours before hanging outside.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Set up a spooning station where children take turns filling the cutters — great for fine motor practice. The overnight wait builds anticipation and is a natural chance to talk about patience and why things take time.',
          'Once the feeders are hanging outside, start a simple observation journal where children draw or describe which birds they see. This extends the activity into science and literacy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long do the feeders last once hung outside?',
        answer: 'About 1–2 weeks depending on weather and how many birds visit. They hold up best in dry weather.',
      },
      {
        question: 'What if the feeder falls apart?',
        answer: 'This usually means the gelatin wasn\'t fully dissolved or the mixture needed more fridge time. Make sure the hot water is truly boiling before adding it, and always refrigerate overnight rather than just a few hours.',
      },
      {
        question: 'What age works best for this craft?',
        answer: 'Ages 3–6 with light adult guidance. Three-year-olds can pour and stir with help; older children can manage most steps on their own.',
      },
    ],
  },

  {
    slug: 'garden-seed-bombs',
    title: 'Garden Seed Bombs: A Spring Craft for Little Hands',
    excerpt: 'Blend coloured construction paper with water and wildflower seeds to make plantable seed bombs. A simple, mess-friendly craft that ends with real flowers growing in the garden.',
    date: '2025-04-20',
    category: 'Crafts',
    image: imgSeedBombs,
    relatedProductIds: [],
    intro: 'Seed bombs are one of those magical crafts where the finished product actually does something. Children blend paper and water into a pulp, roll it into balls with wildflower seeds pressed in, and then plant them — and a few weeks later, flowers grow. It\'s science, practical life, and art all rolled into one soggy, wonderful ball.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Coloured construction paper, wildflower seeds, a cup of water, and a blender or food processor.',
          'Optional: a paper plate for rolling the balls in seeds.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Tear the construction paper into small pieces and place them in the blender or food processor.',
          'Add a cup of water. Blend for a few minutes until you have a smooth pulp — add more water if needed to keep things moving.',
          'Spread wildflower seeds across a paper plate.',
          'Scoop up some of the paper pulp and roll it into a ball in your hands.',
          'Roll the ball in the wildflower seeds so they stick to the outside.',
          'Repeat until all the pulp is used up.',
          'Plant the seed bombs in a garden outside and water them in. In a few weeks, watch the flowers grow!',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'This works well as a small-group activity — one child operates the blender with an adult, while others take turns rolling and seed-coating. The sensory experience of the wet pulp is wonderful for young children.',
          'Use multiple colours of construction paper for visual variety. The paper colour will show in the dried bomb, which makes them look beautiful and gives children ownership over their creation.',
          'If you have a small garden or planter box near the classroom, plant them together as a group and track growth over the following weeks. This turns the craft into an ongoing science observation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What kind of wildflower seeds work best?',
        answer: 'Any wildflower seed mix from a garden centre works well. Look for mixes suited to your region and climate for the best results.',
      },
      {
        question: 'Do the seed bombs need to dry before planting?',
        answer: 'You can plant them right away while still damp, or let them dry for a day or two first. Both work — planting damp actually tends to help the seeds get a good start.',
      },
      {
        question: 'Is a blender safe to use with children?',
        answer: 'An adult should operate the blender. Children can participate in tearing the paper and adding it to the blender, then step back while it runs. The rolling and seeding steps are fully child-led.',
      },
    ],
  },

  {
    slug: 'flower-crowns',
    title: 'Paper Flower Crowns: A Simple Spring Craft',
    excerpt: 'Cut, fold, and glue construction paper flowers into a wearable crown. A classic spring craft that children can make and wear the same day.',
    date: '2025-05-01',
    category: 'Crafts',
    image: imgFlowerCrowns,
    relatedProductIds: ['spring-flower-matching'],
    intro: 'Flower crowns made from construction paper are a spring classroom staple — and for good reason. They involve measuring, cutting, folding, and assembling, which gives children a full range of fine motor practice. Best of all, children can wear their finished crown home the same day, which makes the payoff immediate and satisfying.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Different coloured construction paper, scissors, a glue stick, a pencil, a stapler, and scotch tape.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Cut two long strips of green construction paper for the headband. Tape them together end-to-end for easy length adjusting later. Set aside.',
          'Cut squares of construction paper in a variety of colours — about 2–3 inches each. Fold each square into quarters. Draw a simple petal shape on the folded square, being careful not to cut along the folded edges (this keeps the petals connected). Cut out the petals and unfold — you\'ll have a four-petal flower.',
          'Cut small yellow circles for flower centres and small green leaf shapes.',
          'Assemble the flowers by gluing the petal pieces, yellow centres, and leaves together.',
          'Glue the finished flowers along the green headband.',
          'Wrap the headband around the child\'s head to measure, then staple the two ends together to fit.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Pre-cut the squares and strips ahead of time for younger children (3–4 year olds), and let older children (5–6) do the measuring and cutting themselves.',
          'Pair this activity with a nature walk to look at real flowers first — children who have observed actual petals make more interesting flower shapes. It also ties in beautifully with the Spring Flower Matching work on the language shelf.',
          'Display finished crowns on a bulletin board before sending them home — children love seeing their work on the wall.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this craft best for?',
        answer: 'Ages 3–6. Younger children benefit from pre-cut pieces and adult help with folding; older children can complete most steps independently with a brief demonstration.',
      },
      {
        question: 'How do I make the crown fit different head sizes?',
        answer: 'The tape-and-staple method is great for this — tape the two strips together loosely to start, then wrap and staple once you know the right size. You can always add a third strip if needed for larger heads.',
      },
      {
        question: 'Can we use other materials for the flowers?',
        answer: 'Yes! Tissue paper, foam sheets, and coffee filters all make beautiful flowers. Coffee filter flowers dyed with liquid watercolours are especially stunning.',
      },
    ],
  },

  // ── Book Activities ───────────────────────────────────────────
  {
    slug: 'should-i-share-my-ice-cream',
    title: 'Should I Share My Ice Cream? A Circle Time Activity',
    excerpt: 'After reading Gerald\'s classic dilemma, pass a paper ice cream cone around the circle and practise the language of sharing. A sweet and simple social-emotional activity.',
    date: '2025-05-10',
    category: 'Book Activities',
    image: imgIceCream,
    relatedProductIds: [],
    intro: '"Should I Share My Ice Cream?" by Mo Willems is a perfect circle time read-aloud — it\'s funny, short, and opens up a genuine conversation about sharing and kindness. This follow-up activity keeps the energy going while giving every child a chance to practise both the act and the language of sharing.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          '"Should I Share My Ice Cream?" by Mo Willems, a piece of construction paper, and either a ball of yarn or a large pom-pom.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Read the book together at circle time.',
          'After reading, roll a piece of construction paper into a cone shape — this is your ice cream cone. Use a ball of yarn or a large pom-pom as the "ice cream scoop" on top.',
          'Start the activity by holding the cone and saying: "I\'m going to share my ice cream with [child\'s name]." Then pass the cone to that child.',
          'That child passes it to the next child and says the same phrase with the next child\'s name.',
          'Repeat around the whole circle until everyone has had a turn.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'The physical act of passing the cone connects the language of sharing to a real gesture. For young children, this kind of embodied learning — doing the thing while saying the thing — helps the concept stick much more than discussion alone.',
          'The repetitive phrase also gives reluctant speakers a safe structure. Every child says the same sentence, so no one has to come up with their own words. Children who are shy often find this kind of scripted, supported participation much more comfortable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if a child doesn\'t want to pass the cone?',
        answer: 'Completely fine — offer them the choice to pass quietly without saying the phrase, or to hold it for a moment before passing. Social-emotional activities work best when participation is never forced.',
      },
      {
        question: 'Can we do this activity without the book?',
        answer: 'Yes, though the book sets up the context beautifully. If you don\'t have a copy, you can simply start by talking about a time someone shared something with them, then move into the activity.',
      },
      {
        question: 'How many children can participate at once?',
        answer: 'This works well for circle groups of any size — 5 to 25 children. Larger groups just mean more turns to practise the sharing phrase, which isn\'t a bad thing!',
      },
    ],
  },

  {
    slug: 'the-napping-house',
    title: 'The Napping House: A 3D Storytelling Craft',
    excerpt: 'After reading the classic stacked-sleepers story, children colour, cut, and assemble their own 3D house with the characters layered inside — a retelling and fine motor activity in one.',
    date: '2025-05-15',
    category: 'Book Activities',
    image: imgNappingHouse,
    relatedProductIds: ['the-mitten'],
    intro: '"The Napping House" by Audrey Wood is a beloved cumulative story — each new character stacks on top of the last, building and building until the flea wakes everyone up. This craft activity recreates that stacking magic in a 3D paper house that children build themselves, then use to retell the story.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          '"The Napping House" by Audrey Wood, a printable napping house template with characters, scissors, glue, and crayons or coloured pencils.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Start by colouring the house and all the characters in their storybook colours.',
          'Cut out the house template and each character separately.',
          'Flip the house template over. Glue the bed template onto the back (inside) of the house.',
          'Fold along the black lines — the two door flaps and the roof — so you have a completed 3D house that opens.',
          'Open the house back up. Glue the characters one by one onto the bed, stacking them in the same order they appear in the book — grandmother, child, dog, cat, mouse, flea.',
          'Have children write their name on their finished house.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Read the book first, pausing each time a new character climbs into bed and asking children to predict what will happen next. This builds comprehension and sets up the stacking sequence they\'ll recreate in the craft.',
          'Set this up as a choice-time activity at a table rather than a whole-group craft — children can come when they\'re ready, which gives them ownership and allows you to work with small groups. The steps are sequential, so having a visual reference card (a photo of the finished house) helps children work more independently.',
          'When the houses are done, invite children to open theirs and retell the story to a partner or in a small group. Retelling is one of the most powerful comprehension activities there is.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where do I find the printable template?',
        answer: 'A simple web search for "Napping House printable template" will turn up several free options. Look for one that includes the house outline with fold lines and individual character cutouts.',
      },
      {
        question: 'What age works best for this activity?',
        answer: 'Ages 4–6. Younger children (3–4) may need help with the folding and gluing steps; children 5 and up can usually complete it with minimal guidance after a demonstration.',
      },
      {
        question: 'Can we do a simpler version for very young children?',
        answer: 'Yes — skip the 3D house entirely and just colour and cut out the characters, then have children sequence them in order from memory. Even this simpler version builds retelling and comprehension skills.',
      },
    ],
  },

  {
    slug: 'it-looks-like-spilled-milk',
    title: 'It Looks Like Spilled Milk: A Paint-Folding Art Activity',
    excerpt: 'After reading the classic cloud-spotting book, children squeeze white paint onto blue paper, fold it in half, and unfold to reveal their own sky shapes. What do you see?',
    date: '2025-05-20',
    category: 'Book Activities',
    image: imgSpilledMilk,
    relatedProductIds: [],
    intro: '"It Looks Like Spilled Milk" by Charles G. Shaw introduces children to the idea that shapes in the sky (and everywhere else) can look like many different things depending on how you look at them. The paint-folding activity that follows puts that same imaginative seeing directly in children\'s hands — they create a shape and then decide what it looks like to them.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'White paint in squeeze bottles, blue construction paper, and a white coloured pencil or black marker for children to write their names.',
        ],
      },
      {
        heading: 'Step-by-Step Instructions',
        paragraphs: [
          'Read "It Looks Like Spilled Milk" at circle time, pausing on each page to ask children what they think the white shape could be.',
          'Cut the blue construction paper in half, then fold each half in half to create a centre crease. Unfold.',
          'Have each child squeeze 3–5 drops of white paint onto one side of their paper.',
          'Fold the paper in half along the crease and smooth it out gently with one hand.',
          'Open the paper back up — the child has created a unique white shape on a blue background.',
          'Ask the child: "What does your picture look like to you?" Write their answer on the back.',
          'Have the child write their name on the front using the white pencil or black marker.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Squeeze bottles make this activity much easier to manage than cups of paint — children have more control over how much paint they use, and there\'s less mess. Fill the bottles with a fairly thin white paint so it spreads easily when the paper is folded.',
          'Display the finished pictures on a "sky" bulletin board — blue paper background, finished artworks floating like clouds. Add a label with each child\'s name and what they said their shape looked like. Parents love this display.',
          'This activity is a beautiful extension of any weather, seasons, or imagination unit. It also connects naturally to poetry — read aloud a few short poems about clouds while children work.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What kind of paint works best?',
        answer: 'Tempera paint works well — it\'s washable and the right consistency. Thin it slightly with water if it\'s too thick to spread easily when folded. Acrylic is too fast-drying for this technique.',
      },
      {
        question: 'Can we use other colours?',
        answer: 'Absolutely. Try light blue paint on white paper, yellow on black paper for a starry-night effect, or let children choose their own colour combination. The book uses white on blue, but the technique works with any high-contrast pair.',
      },
      {
        question: 'What if a child says "I don\'t know" when asked what their picture looks like?',
        answer: 'Prompt gently: "Does it look like an animal? A food? Something outside?" If they still aren\'t sure, that\'s fine — write "I\'m still deciding" or just their description of the colours. The observation process matters more than arriving at a specific answer.',
      },
    ],
  },
  // ── Fall & Halloween Activities ───────────────────────────────
  {
    slug: 'fall-patterning-activity',
    title: 'Fall Patterning with Real Objects',
    excerpt: 'Extend printed pattern strips using real fall objects like acorns, sunflowers, and pumpkins — a hands-on patterning activity that brings the season right onto the work mat.',
    date: '2025-09-15',
    category: 'Seasonal',
    image: imgFallPatterning,
    relatedProductIds: ['halloween-patterns'],
    intro: 'Patterning is one of those foundational math skills that sneaks up on you — by the time children are confidently reading ABAB and ABCABC patterns, they\'ve already laid important groundwork for algebraic thinking. Fall is the perfect season to make this work feel exciting, because the objects themselves do half the job.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Printed pattern strips featuring fall images — pumpkins, sunflowers, and acorns work beautifully together.',
          'Real or realistic fall objects to match: small decorative acorns, a sunflower head, a mini pumpkin, or any fall nature items you can collect.',
          'A work mat or tray to keep everything organised.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Lay the pattern strips out on the mat. Each strip shows a repeating pattern that ends with a blank space — the child\'s job is to figure out what comes next and place the correct real object in that space.',
          'Start with simple ABAB patterns (pumpkin, sunflower, pumpkin, sunflower, ?) before moving to ABCABC or AABB patterns.',
          'Once a child can extend the pattern, invite them to cover the strip and recreate the whole pattern from memory using only the real objects. This moves the work from pattern recognition to pattern production.',
        ],
      },
      {
        heading: 'Why Real Objects Make It Better',
        paragraphs: [
          'The tactile experience of handling real objects — the weight of an acorn, the texture of a dried sunflower — anchors the abstract concept of patterning in something children can actually feel.',
          'It also makes the work look irresistible on the shelf. A printed card next to a pile of real acorns draws children in before they\'ve even thought about math.',
          'Nature objects are free, change with the season, and can be swapped out to keep the same work feeling fresh. Pinecones in October, dried corn in November — the pattern skill stays the same.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if real objects aren\'t available?',
        answer: 'Printed picture cards or small seasonal erasers work just as well. The key is that the "extending" piece is a separate, moveable object — not just pointing at the strip.',
      },
      {
        question: 'How do I know when a child is ready for harder patterns?',
        answer: 'When they can extend an ABAB pattern quickly and without hesitation, introduce a third element (ABCABC). When that\'s solid, try AABB or AABC. Follow the child\'s lead — frustration means step back, boredom means step up.',
      },
      {
        question: 'Can this activity work for a whole group?',
        answer: 'Yes — set up several strips at a table and have children work side by side. Pattern work is naturally self-checking (it either continues correctly or it doesn\'t), so children can work independently even in a group setting.',
      },
    ],
  },

  {
    slug: 'fall-number-sequencing-puzzle',
    title: 'Fall Number Sequencing Puzzle',
    excerpt: 'Children arrange numbered picture strips in order from 1 to 10 to assemble a fall scene — a self-correcting sequencing activity that builds number order and one-to-one correspondence.',
    date: '2025-09-20',
    category: 'Seasonal',
    image: imgFallNumberPuzzle,
    relatedProductIds: ['fall-math-clip-cards'],
    intro: 'Number sequencing puzzles are wonderfully versatile — they look like a simple put-it-in-order task, but the thinking involved is much richer. A child who can sequence 1 to 10 reliably understands that numbers have a fixed order, that each number is one more than the last, and that the sequence has a start and an end. This fall version wraps all of that in a pumpkin patch.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Numbered picture strips, 1 through 10, each showing part of a fall scene (a pumpkin patch with a child).',
          'A flat work surface where the strips can be laid out in a row.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Mix up the numbered strips and place them in a pile or scattered on the mat.',
          'The child arranges the strips in order from 1 to 10, left to right, until the full scene comes together. The image itself acts as a self-check — if the picture looks right, the sequence is right.',
          'For an added challenge, flip the strips face-down after completing them and have the child try to recall the order from memory.',
        ],
      },
      {
        heading: 'Extending the Work',
        paragraphs: [
          'Once forward sequencing (1–10) is easy, invite the child to reverse it (10–1). This sounds simple but requires a fundamentally different kind of thinking and takes longer to develop.',
          'You can also use the strips for number recognition alone — hold one up and ask the child to say the number without looking at adjacent strips for clues.',
          'Pair this work with a ten-frame or bead stair so children connect the numeral on the strip to an actual quantity.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What age is this appropriate for?',
        answer: 'Most children are ready for 1–10 sequencing between ages 3.5 and 5. Younger children may need to work with fewer strips (1–5) first. Older children can work with strips going up to 20.',
      },
      {
        question: 'How is this different from just counting?',
        answer: 'Counting is reciting a sequence by memory. Sequencing requires a child to look at symbols (numerals) and arrange them — a step up that connects the spoken sequence to its written form.',
      },
      {
        question: 'Can I make my own version at home?',
        answer: 'Yes — take any horizontal image and cut it into 10 equal strips, then write the numbers 1–10 along the bottom. The image can be anything: a family photo, a favourite book cover, a piece of the child\'s own artwork.',
      },
    ],
  },

  {
    slug: 'fall-count-and-clip',
    title: 'Fall Count and Clip Cards',
    excerpt: 'Children count the fall objects on each card and clip a clothespin to the correct number — a self-correcting counting activity that also builds fine motor strength.',
    date: '2025-10-01',
    category: 'Seasonal',
    image: imgFallClipCards,
    relatedProductIds: ['fall-math-clip-cards'],
    intro: 'Clip cards are one of the most classroom-friendly formats in early childhood math. They\'re self-correcting, reusable, and the physical action of clipping builds the exact pincer grip children need for writing. Add fall-themed images — pumpkins, apples, scarecrows, hay bales — and you have a counting work that stays on the shelf from September through November.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A set of fall-themed count and clip cards, each showing a different number of fall objects with three number choices along the bottom.',
          'A small basket of wooden clothespins — one per child, or several if children are working simultaneously.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'The child picks up a card, counts the objects shown, and clips a clothespin onto the number that matches.',
          'Work through the cards one at a time. Some children prefer to do them all and then check; others check as they go. Both are fine.',
          'To self-check: mark a small dot on the back of each card next to the correct answer. The child flips the card to see if their clip is in the right spot.',
        ],
      },
      {
        heading: 'Classroom Tips',
        paragraphs: [
          'Keep the clothespins in a small basket next to the card stack so children can set up and clean up independently.',
          'For children who are still developing counting accuracy, encourage them to move their finger to each object as they count — one touch per number — rather than scanning the image.',
          'These cards work beautifully as a transition activity, a morning work choice, or a small-group math rotation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What number range works best?',
        answer: 'Cards covering 1–5 are appropriate for most Pre-K children. Kindergartners can typically handle 1–10. If you have a mixed-age group, use both sets and let children self-select.',
      },
      {
        question: 'What if a child consistently gets the wrong answer?',
        answer: 'Watch how they count. The most common error at this stage is counting an object twice or skipping one. Practice one-to-one correspondence (one touch = one count) before returning to the clip cards.',
      },
      {
        question: 'Can I use these for small group instruction?',
        answer: 'Yes — have each child in the group work with the same card at the same time, then discuss: "How many did you count? Did anyone get a different answer?" The conversation is often as valuable as the counting.',
      },
    ],
  },

  {
    slug: 'apple-life-cycle-activity',
    title: 'Apple Life Cycle: A Fall Science Activity',
    excerpt: 'Children sequence the stages of an apple\'s life — from seed to fruit — using a diagram, a sorting worksheet, and a fold-out accordion book they assemble themselves.',
    date: '2025-10-05',
    category: 'Seasonal',
    image: imgAppleLifeCycle,
    relatedProductIds: [],
    intro: 'The apple life cycle is a perfect fall science topic because the end result — a ripe apple — is something children know well and love. Working backwards from the apple to the seed, and then forward again through all the stages, builds the kind of sequential scientific thinking that underpins later biology, ecology, and environmental science.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'An apple life cycle diagram (seed → seedling → tree → bud → flower → fruit) — laminated for repeated use.',
          'A sequencing worksheet where children cut out and arrange the life cycle stages in order.',
          'Optional: an accordion fold-out book template (children colour each stage and fold the pages into a compact book they can take home).',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Start by looking at the diagram together and naming each stage: seed, seedling, sapling, tree, flower, fruit. Ask the child if they\'ve ever seen an apple tree, an apple blossom, or an apple seed.',
          'Give the child the sequencing worksheet. They cut apart the six stages and glue them in the correct order, using the diagram as a reference.',
          'For the accordion book: children colour each stage, fold the pages accordion-style, and staple apple-shaped covers to the front and back. The finished book opens to reveal the full life cycle.',
        ],
      },
      {
        heading: 'Connecting to Real Apples',
        paragraphs: [
          'Cut open a real apple at snack time and look at the seeds together. Ask: "What would happen if we planted this?" The life cycle activity becomes much more meaningful when it starts from something the child can hold.',
          'If you can visit an apple orchard or even look at photos of apple trees in bloom, the flower stage — often the one children find hardest to connect to the fruit — becomes much more concrete.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many stages should I include for very young children?',
        answer: 'Three stages (seed, tree, apple) is plenty for children under 4. The six-stage version is appropriate for children 4 and up who can manage a longer sequence.',
      },
      {
        question: 'Does this connect to any standards?',
        answer: 'Yes — basic life cycle sequencing is part of most early childhood science standards. It covers concepts like growth, change over time, and the relationship between plants and their seeds.',
      },
      {
        question: 'Can we do this activity without a printed diagram?',
        answer: 'A simple hand-drawn circle diagram works perfectly. Draw six circles arranged in a ring, label each stage, and draw an arrow between them. Children can then sequence picture cards around the outside.',
      },
    ],
  },

  {
    slug: 'halloween-counting-brew',
    title: 'Halloween Counting Brew',
    excerpt: 'Children count spooky objects — spiders, eyeballs, and worms — into a cauldron to match numbered brew cards. A Halloween counting activity that makes math feel like magic.',
    date: '2025-10-15',
    category: 'Seasonal',
    image: imgHalloweenCountingBrew,
    relatedProductIds: ['halloween-counting'],
    intro: '"Add three spiders to the brew." There\'s something irresistible about a Halloween counting activity that involves a real cauldron and genuinely spooky objects. This counting brew work takes the same one-to-one correspondence and number recognition skills as a standard counting activity and wraps them in enough October atmosphere that children choose it again and again.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'A small black cauldron or bucket (Halloween buckets from a dollar store work perfectly).',
          'A set of numbered "Counting Brew" cards — each card shows a number and the type of ingredient to add.',
          'Spooky counting objects: plastic spiders, googly eyeballs, rubber worms, and any other Halloween-themed small objects.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'Fan the numbered brew cards out on the mat. The child picks a card and reads (or is told) what it says — for example, "5 spiders."',
          'The child counts out that many spiders and drops them into the cauldron one by one, counting aloud as they go.',
          'Continue with the remaining cards, adding the correct number of each ingredient. At the end, children can peer into the brew and count everything that went in.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'Counting into a container is more engaging than placing objects on a flat mat — there\'s a satisfying drop and rattle each time. The objects themselves are a draw: children who walk past other counting works will stop at the cauldron.',
          'The activity also builds number-word and numeral recognition simultaneously. Children who can\'t yet read the numeral can count the images on the card; children who can read the numeral practice connecting it to the quantity they count out.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I find the small Halloween objects?',
        answer: 'Dollar stores, party supply shops, and Amazon all carry bags of small plastic spiders, eyeballs, and worms affordably. Look in the Halloween section starting in September. A small bag of each type gives you plenty for this work.',
      },
      {
        question: 'What number range should the cards cover?',
        answer: 'Cards covering 1–10 work for most Pre-K and Kindergarten children. You can adjust the upper end based on where your children are — some will be ready for numbers up to 20 by late October.',
      },
      {
        question: 'Can I leave this on the shelf all of October?',
        answer: 'Absolutely — this is a perfect October shelf work. Swap the objects occasionally if interest drops (different types of spiders, coloured eyeballs vs. plain) to keep it feeling fresh without changing the core activity.',
      },
    ],
  },

  // ── Winter Activities ─────────────────────────────────────────
  {
    slug: 'felt-penguin-dress-up',
    title: 'Felt Penguin Dress Up: A Winter Creative Play Activity',
    excerpt: 'Children dress their own felt penguin with colourful scarves, hats, and ear muffs — a simple open-ended activity that builds colour recognition and imaginative thinking for ages 3–6.',
    date: '2025-11-01',
    category: 'Seasonal',
    image: imgFeltPenguinDressUp,
    relatedProductIds: ['the-mitten'],
    intro: 'This activity is exactly the kind of thing that looks simple from the outside but keeps children deeply engaged. Each child gets a felt penguin and a pile of colourful accessories — scarves, hats, and ear muffs cut from felt — and they dress it however they like. There\'s no right answer, no pattern to follow. That freedom is the point.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Felt in black, white, orange, blue, purple, yellow, pink, and green.',
          'Googly eyes, liquid glue, and pom-poms in a variety of colours.',
        ],
      },
      {
        heading: 'How to Prepare the Activity',
        paragraphs: [
          'Make the felt penguins in advance before presenting the activity to the children. Cut a simple penguin body from black felt with a white tummy, orange felt beak and feet, and attach the googly eyes with liquid glue. Let them dry completely.',
          'Cut out a variety of scarves, hats, and ear muffs from the different coloured felts. Sort them into three separate piles — one for scarves, one for hats, one for ear muffs — so children can easily find what they\'re looking for.',
          'Set the penguins and sorted accessories out on a tray or mat, ready for the children to explore.',
        ],
      },
      {
        heading: 'How the Children Use It',
        paragraphs: [
          'Children pick up a penguin and choose whatever accessories they like from the three piles. Some will carefully colour-coordinate; others will mix as many colours as possible. Both approaches are wonderful.',
          'The felt accessories can be switched in and out easily, so children often redress their penguin multiple times. This repetition builds vocabulary naturally — naming the colours, talking about what the penguin is wearing, comparing choices with a friend.',
          'Pom-poms can be added as optional decorations on the hats or scarves for extra sensory interest.',
        ],
      },
      {
        heading: 'Why This Activity Works',
        paragraphs: [
          'Open-ended activities — where there\'s no single right outcome — are some of the most valuable things on an early childhood shelf. They develop self-direction, creative thinking, and the confidence to make choices without waiting for adult approval.',
          'The felt medium is forgiving and satisfying. Pieces stay in place well enough to "work" without being permanent. Younger children who haven\'t yet developed the fine motor control for small fastenings (buttons, snaps) can manage felt accessories easily and experience genuine success.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I cut the felt pieces so they\'re consistent?',
        answer: 'A simple paper template makes this much faster. Draw your scarf, hat, and ear muff shapes on paper, cut them out, then trace around the template onto the felt. You can cut several layers of felt at once to speed up the process.',
      },
      {
        question: 'How many penguins should I make?',
        answer: 'One per child if it\'s an individual work, or two or three if it\'s a shared tray at a table. Having a few extras means the activity is always ready even if one penguin goes missing or gets worn out.',
      },
      {
        question: 'Can children add their own decorations?',
        answer: 'Absolutely — that\'s encouraged. Setting out additional pom-poms, small felt shapes, or even sequins gives children who are deeply engaged something extra to explore. Keep any very small pieces away from children under three.',
      },
    ],
  },

  {
    slug: 'snowman-letter-tracing',
    title: 'Snowman Letter Tracing: A Sensory Writing Activity',
    excerpt: 'Children pick a letter card, then trace the letter in shaving cream on a tray — a tactile, winter-themed way to practise letter formation that children ask to do again and again.',
    date: '2025-11-15',
    category: 'Seasonal',
    image: imgSnowmanLetterTracing,
    relatedProductIds: ['winter-rhyming-cards'],
    intro: 'Shaving cream tracing is one of those activities that sounds messy but is actually very manageable — and children are completely captivated by it. The sensory feedback of tracing through the cream reinforces letter shapes in a way that pencil and paper simply can\'t. Pair it with a snowman theme and a set of letter cards and you have a winter language work children will choose again and again.',
    sections: [
      {
        heading: 'What You\'ll Need',
        paragraphs: [
          'Letter cards (uppercase, lowercase, or both depending on your children\'s stage).',
          'A small tray — a baking tray or sensory tray with low sides works perfectly.',
          'A card holder stand to prop the letter card upright so children can see it clearly while they trace.',
          'One can of shaving cream.',
        ],
      },
      {
        heading: 'How to Set Up',
        paragraphs: [
          'Spray a thin, even layer of shaving cream across the bottom of the tray. You don\'t need much — just enough to cover the surface.',
          'Set the card holder stand at the back of the tray and place a letter card in it. The child will look at the card and trace the same letter in the shaving cream in front of them.',
          'Have additional letter cards within easy reach so children can swap them out independently.',
        ],
      },
      {
        heading: 'How to Do the Activity',
        paragraphs: [
          'The child picks out a letter card and places it in the card holder stand so they can see it clearly.',
          'Using one finger, the child traces the letter shape in the shaving cream, following the model on the card.',
          'When they\'re happy with it, they smooth out the shaving cream with their palm to "erase" — and the surface is ready to go again. Add a small spray of shaving cream if the surface gets thin.',
          'Children repeat with different letter cards, self-directing which letters to practise and for how long.',
        ],
      },
      {
        heading: 'Why Sensory Writing Works',
        paragraphs: [
          'When a child forms a letter with their finger — especially in a medium as tactile as shaving cream — they engage more of their brain than when they write with a pencil. The sensory feedback from the cool, smooth cream makes the motor memory stronger.',
          'The "erase and repeat" nature of the activity removes the anxiety some children feel around making mistakes on paper. There is no wrong mark here — everything smooths away and can be tried again.',
          'This activity is excellent for children who are working on letter formation but aren\'t yet ready for consistent pencil work, as well as for any child who needs a fresh, engaging way to revisit a skill.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is shaving cream safe for young children?',
        answer: 'Standard foam shaving cream is generally safe for skin contact in a supervised activity and is used widely in early childhood settings. Avoid if any child has very sensitive skin. As with all sensory materials, supervise closely and remind children it\'s not for tasting.',
      },
      {
        question: 'What kind of letter cards work best?',
        answer: 'Cards with directional arrows showing how to form the letter are ideal — they give children a model for where to start and which direction to move. Montessori sandpaper letter cards can also be adapted for this activity.',
      },
      {
        question: 'How do I clean up?',
        answer: 'Shaving cream wipes away easily with a damp cloth. Most surfaces (trays, tables, hands) clean up in seconds. Rinse the tray under warm water when the activity is done and it\'s ready for next time.',
      },
    ],
  },
]

export function getIdea(slug: string): Idea | undefined {
  return IDEAS.find((i) => i.slug === slug)
}
