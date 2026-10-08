import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Shop, { SeasonShop } from './Pages/Shop'
import About from './Pages/About'
import Ideas from './Pages/Ideas'
import IdeaPost from './Pages/IdeaPost'
import Product from './Pages/Product'
import FAQ from './Pages/FAQ'
import Contact from './Pages/Contact'
import ForTeachers from './Pages/ForTeachers'
import ForHomeschool from './Pages/ForHomeschool'
import doodleCrayon from './assets/doodles/doodle-crayon.svg'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  if (subscribed) {
    return <p className="footer-newsletter-subscribed">You're in! Check your inbox soon. 🎉</p>
  }

  return (
    <form className="footer-newsletter-form" onSubmit={handleSubmit}>
      <input
        className="footer-newsletter-input"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button className="footer-newsletter-btn" type="submit">Join</button>
    </form>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">
              <span className="nav-logo-mark" aria-hidden="true">
                <img src={doodleCrayon} alt="" />
              </span>
              <h1>The Messy Table</h1>
            </Link>
          </div>
          <div className="nav-right">
            <ul className="nav-links">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/ideas">Work Ideas</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Link to="/shop" className="nav-cart" aria-label="Shop">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/season/:season" element={<SeasonShop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:slug" element={<IdeaPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for-teachers" element={<ForTeachers />} />
          <Route path="/for-homeschool" element={<ForHomeschool />} />
        </Routes>
        <footer className="footer">
          <div className="footer-newsletter">
            <h4>The Monthly Mess</h4>
            <p>One crafty email a month: seasonal work ideas, a free printable, and first dibs on new kits.</p>
            <NewsletterForm />
          </div>
          <div className="footer-inner">
            <div className="footer-brand">
              <h3>The Messy Table</h3>
              <p>Handmade with love for teachers everywhere.</p>
              <p>PO Box 56 · Milford, NH 03055</p>
            </div>
            <ul className="footer-links">
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/ideas">Work Ideas</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <p className="footer-credit">Made by <a href="https://mossandmethod.com" target="_blank" rel="noopener noreferrer">Moss + Method</a></p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
