function Shop() {
  return (
    <div>
      <section className="page-hero">
        <h2>Shop</h2>
        <p>Classroom materials, craft kits and digital downloads made with love.</p>
      </section>
      <section className="products">
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
    </div>
  )
}

export default Shop