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
]

export function getIdea(slug: string): Idea | undefined {
  return IDEAS.find((i) => i.slug === slug)
}
