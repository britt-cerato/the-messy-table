// The Monthly Mess — one post per month. Newest first.
// To add a month: copy an entry, change the slug (e.g. 'november-2026'),
// month, date and text, and list the Work Ideas (by slug) and shop items
// (by product id) you want to feature. The sitemap and pre-render pick up
// new entries automatically.

import imgOctober2026 from '../assets/monthly-mess/october-2026-newsletter.jpg'

export interface MessItem {
  title: string
  text?: string
  link?: string
}

export interface MessSection {
  heading: string
  paragraphs?: string[]
  items?: MessItem[]
}

export interface MessIssue {
  slug: string
  month: string
  date: string
  title: string
  excerpt: string
  // Kerri's designed newsletter page (from Canva), shown above the text
  image?: string
  imageAlt?: string
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
    title: 'The Monthly Mess: October 2026 Newsletter',
    excerpt: "Kerri's October newsletter: fall patterning and counting works, the apple life cycle, Halloween activities, the witches brew and a candy corn craft.",
    image: imgOctober2026,
    imageAlt: "The Messy Table October 2026 newsletter by Kerri Donahue, with fall works, Halloween activities, important dates and a candy corn Q-tip painting craft",
    intro: 'Fall is here, and what a wonderful time of year it is! I am excited to announce The Messy Table Newsletter for the month! Every month there will be a new newsletter featuring a sneak peek of new works, activities and more I have added to the website. I will be posting the newsletter on my social media pages for you to check out there. Hope you guys enjoy this new addition.',
    sections: [
      {
        heading: 'Website Highlights',
        items: [
          { title: 'Fall Patterning Work', text: 'Allows the children to learn about patterning, sequencing and how they coincide with each other.', link: '/ideas/fall-patterning-activity' },
          { title: 'Fall Number Sequence Puzzle', text: 'A fun way for the children in your classroom to practice number sequencing.', link: '/ideas/fall-number-sequencing-puzzle' },
          { title: 'Fall Count Clip Cards', text: 'Allows children to practice number counting.', link: '/ideas/fall-count-and-clip' },
        ],
      },
      {
        heading: "This Season's Activities",
        items: [
          { title: 'Apple Life Cycle', text: 'Explore the life cycle of an apple from the core to the skin. Learn how apples grow, different kinds of apples and how they taste.', link: '/ideas/apple-life-cycle-activity' },
          { title: 'Leaf Cutting', text: 'Great way to practice cutting skills in a fun way.' },
          { title: 'Halloween Pattern Work', text: 'Exploring different ways to make patterns using fun Halloween objects.', link: '/shop/halloween-patterns' },
          { title: 'Halloween Counting 1–10', text: 'Engage fine motor skills, and number sequencing practice.', link: '/shop/halloween-counting' },
        ],
      },
      {
        heading: 'Website Spotlight',
        items: [
          { title: 'Witches Brew', text: 'Allows the children to practice counting, following directions and making a witches brew.', link: '/ideas/halloween-counting-brew' },
        ],
      },
      {
        heading: 'Fall Craft Idea',
        items: [{ title: 'Candy Corn Q-Tip Painting' }],
      },
      {
        heading: 'Important Dates',
        items: [
          { title: 'October 12: Columbus Day', text: 'Craft idea to come.' },
          { title: 'October 26: Halloween Activity', text: 'New Halloween activities to come.' },
          { title: 'October 31: Halloween', text: 'Website break.' },
        ],
      },
      {
        heading: 'Website Notes',
        paragraphs: ['Hello fall! Thank you for your continued support and partnership. Together, we help our students learn, grow, and shine every day!'],
      },
    ],
    ideaSlugs: [
      'fall-patterning-activity',
      'fall-number-sequencing-puzzle',
      'fall-count-and-clip',
      'apple-life-cycle-activity',
      'halloween-counting-brew',
    ],
    productIds: ['halloween-patterns', 'halloween-counting', 'fall-math-clip-cards'],
  },
]

export function getMessIssue(slug: string): MessIssue | undefined {
  return MONTHLY_MESS.find((i) => i.slug === slug)
}
