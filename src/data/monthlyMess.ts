// The Monthly Mess — one post per month. Newest first.
// To add a month: copy an entry, change the slug (e.g. 'november-2026'),
// month, date and text, and list the Work Ideas (by slug) and shop items
// (by product id) you want to feature. The sitemap and pre-render pick up
// new entries automatically.

import imgNovember2026 from '../assets/monthly-mess/november-2026-newsletter.jpg'
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
    slug: 'november-2026',
    month: 'November 2026',
    date: '2026-11-01',
    title: 'The Monthly Mess: November 2026 Newsletter',
    excerpt: "Kerri's November newsletter: Thanksgiving activities, Parts of a Pumpkin, Thankful Hands, turkey crafts and important dates for the month.",
    image: imgNovember2026,
    imageAlt: "The Messy Table November 2026 newsletter by Kerri Donahue, with Thanksgiving activities, turkey crafts and important dates",
    intro: "Can you believe it! With November comes Thanksgiving. I have added some fun Thanksgiving activities as well as crafts for you to enjoy at home with your kiddos or in your classrooms!",
    sections: [
      {
        heading: 'Website Highlights',
        items: [
          { title: 'Parts Of A Pumpkin', text: 'Explore parts of a pumpkin and the correct names of each part.' },
          { title: 'Thankful Hands', text: 'Can share as a class what your thankful for, then make the childs handprint and add what each child is thankful for on the plate.', link: '/ideas/thankful-hands' },
          { title: 'Placemate Weaving', text: 'Allows each child to practice weaving and their fine motor skills.', link: '/ideas/placemat-weaving' },
        ],
      },
      {
        heading: "This Season's Activities",
        items: [
          { title: 'Turkey Life Cycle', text: 'Teach your class how turkeys are born, how they grown and fun facts about turkeys.' },
          { title: 'Disguise A Turkey', text: 'Creates a fun way for children to have fun disguising a turkey how ever they want. Allowing the class to guess what disguise their turkey is.', link: '/ideas/disguise-a-turkey' },
          { title: 'Thanksgiving Dinner Plates', text: 'Create a dinner plate with different thanksgiving food items using paper plates.' },
          { title: 'A Turkey For Thanksgiving', text: 'A fun way for the children to make a funny sign for their turkey and what their turkey might be thinking.' },
        ],
      },
      {
        heading: 'Website Spotlight',
        items: [
          { title: 'Turkey Buttoning Activity', text: 'Allows children to practice self help buttoning skills.', link: '/shop/thanksgiving-buttoning' },
        ],
      },
      {
        heading: 'Important Dates',
        items: [
          { title: 'November 11: Veterans Day', text: 'Veterans Day Craft' },
          { title: 'November 20: Thanksgiving Activity', text: 'New Themed Activity' },
          { title: 'November 26–30: Thanksgiving Break', text: 'Website Break' },
        ],
      },
      {
        heading: 'Website Note',
        paragraphs: ['Hope you all have a great Thanksgiving with your families and friends!'],
      },
    ],
    ideaSlugs: ['thankful-hands', 'placemat-weaving', 'disguise-a-turkey'],
    productIds: ['thanksgiving-buttoning'],
  },
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
