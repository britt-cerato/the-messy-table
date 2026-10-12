// The Monthly Mess — one post per month. Newest first.
// To add a month: copy an entry, change the slug (e.g. 'november-2026'),
// month, date and text, and list the Work Ideas (by slug) and shop items
// (by product id) you want to feature. The sitemap and pre-render pick up
// new entries automatically.

export interface MessSection {
  heading: string
  paragraphs: string[]
}

export interface MessIssue {
  slug: string
  month: string
  date: string
  title: string
  excerpt: string
  intro: string
  sections: MessSection[]
  ideaSlugs: string[]
  productIds: string[]
}

export const MONTHLY_MESS: MessIssue[] = [
  {
    slug: 'october-2026',
    month: 'October 2026',
    date: '2026-10-12',
    title: 'The Monthly Mess: October 2026',
    excerpt: 'Fall and Halloween works for the October shelf: patterning, counting, apple life cycle and a few Thanksgiving ideas to plan ahead.',
    intro: 'October is a busy month on the shelf. Here is what I am putting out this month, plus a few things to get ready for November.',
    sections: [
      {
        heading: 'On the shelf this month',
        paragraphs: [
          'Halloween counting and patterning are the big ones in October. Kids sort spiders, bats and ghosts onto numbered pumpkins, and they finish patterns with ghosts, skulls and pumpkins.',
          'For math I also use the fall clip cards. Count the pumpkins, apples or leaves and clip the right number.',
        ],
      },
      {
        heading: 'Activities to try',
        paragraphs: [
          'The apple life cycle is a good one for science this time of year. Kids put the stages in order and make their own fold-out book. In the Halloween counting brew, kids count spiders, eyeballs and worms into a cauldron.',
          'Fall patterning uses real acorns, sunflowers and pumpkins. The number sequencing puzzle builds a fall scene when the strips go in order, so kids can check their own work.',
        ],
      },
      {
        heading: 'Planning ahead for November',
        paragraphs: [
          'If you want to send home Disguise a Turkey, now is a good time to print the turkeys. Thankful hands and placemat weaving are two easy Thanksgiving crafts for the week before the break.',
        ],
      },
    ],
    ideaSlugs: [
      'apple-life-cycle-activity',
      'halloween-counting-brew',
      'fall-patterning-activity',
      'fall-number-sequencing-puzzle',
      'disguise-a-turkey',
      'thankful-hands',
    ],
    productIds: ['halloween-counting', 'halloween-patterns', 'fall-math-clip-cards', 'thanksgiving-buttoning'],
  },
]

export function getMessIssue(slug: string): MessIssue | undefined {
  return MONTHLY_MESS.find((i) => i.slug === slug)
}
