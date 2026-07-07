import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Ideas from './Pages/Ideas'
import IdeaPost from './Pages/IdeaPost'
import Product from './Pages/Product'
import FAQ from './Pages/FAQ'
import Contact from './Pages/Contact'
import ForTeachers from './Pages/ForTeachers'
import ForHomeschool from './Pages/ForHomeschool'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/"><h1>The Messy Table</h1></Link>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/ideas">Work Ideas</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
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
          <div className="footer-brand">
            <h3>The Messy Table</h3>
            <p>Handmade with love for teachers everywhere.</p>
          </div>
          <ul className="footer-links">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/ideas">Work Ideas</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p className="footer-credit">Made by <a href="https://mossandmethod.com" target="_blank" rel="noopener noreferrer">Moss + Method</a></p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App