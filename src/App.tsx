import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Ideas from './Pages/Ideas'
import IdeaPost from './Pages/IdeaPost'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>The Messy Table</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/ideas">Ideas</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:slug" element={<IdeaPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="footer-brand">
            <h3>The Messy Table</h3>
            <p>Handmade with love for teachers everywhere.</p>
          </div>
          <ul className="footer-links">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/ideas">Ideas</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App