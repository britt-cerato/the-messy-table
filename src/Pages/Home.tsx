function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to The Messy Table</h2>
          <p>Classroom works, craft ideas, and a little glitter for the kiddos you love.</p>
          <a href="#" className="hero-button">Shop Now</a>
        </div>
      </section>
      <section className="products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Classroom Works</h3>
            <p>$15.00</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Classroom Labels</h3>
            <p>$25.00</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Craft Templates</h3>
            <p>$12.00</p>
          </div>
        </div>
      </section>
      <section className="ideas">
        <div className="ideas-content">
          <h2>Get Inspired</h2>
          <p>Browse our collection of easy craft ideas and classroom activities your kiddos will love.</p>
          <a href="#" className="ideas-button">Explore Ideas</a>
        </div>
      </section>
    </div>
  )
}

export default Home
