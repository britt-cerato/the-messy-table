import { Helmet } from 'react-helmet-async'
import aboutPhoto from '../assets/kerri-about.jpg'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kerri',
  jobTitle: 'Montessori Educator',
  description: 'Montessori-trained educator with 5 years of classroom experience in Southern New Hampshire and founder of The Messy Table, a handmade Montessori materials shop.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  owns: {
    '@type': 'Organization',
    name: 'The Messy Table',
    url: 'https://themessytable.org',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Kerri — Montessori Educator & Maker | The Messy Table',
  url: 'https://themessytable.org/about',
  description: 'Meet Kerri, a Montessori-trained educator with 5 years of classroom experience in Southern New Hampshire. She handcrafts every Montessori material in her shop with care.',
  mainEntity: personSchema,
}

function About() {
  return (
    <div>
      <Helmet>
        <title>About Kerri — Montessori Educator &amp; Maker | The Messy Table</title>
        <meta name="description" content="Meet Kerri, a Montessori-trained educator with 5 years of classroom experience in Southern New Hampshire. She handcrafts every Montessori material in her shop with care." />
        <meta property="og:title" content="About Kerri — Montessori Educator & Maker | The Messy Table" />
        <meta property="og:description" content="Meet Kerri, a Montessori-trained educator with 5 years of classroom experience in Southern New Hampshire. She handcrafts every Montessori material in her shop with care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themessytable.org/about" />
        <meta property="og:site_name" content="The Messy Table" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Kerri — Montessori Educator & Maker | The Messy Table" />
        <meta name="twitter:description" content="Meet Kerri, a Montessori-trained educator with 5 years of classroom experience in Southern NH and the maker behind The Messy Table." />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>
      </Helmet>
      <section className="page-hero">
        <h2>About Kerri</h2>
        <p>The heart and hands behind The Messy Table.</p>
      </section>
      <section className="about-content">
        <img src={aboutPhoto} alt="Kerri" className="about-image" />
        <div className="about-text">
          <h3>Hi, I'm Kerri!</h3>
          <p>I'm a Montessori educator with 5 years of experience in Southern New Hampshire, and I'm passionate about creating hands-on materials for teachers and homeschool families who want to bring something fresh and fun into their learning spaces. I'm here to give your kiddos something new and exciting to enjoy — and to let them get a little messy with super easy crafts.</p>
          <p>Every product I make is created with love, tested in real classrooms, and designed to make your life a little easier and a lot more fun.</p>
          <p>Whether you're a classroom teacher or a homeschool family, my works are designed to bring the hands-on Montessori approach into your space — no fancy setup required.</p>
        </div>
      </section>
    </div>
  )
}

export default About
