const THEMES = [
  {
    title: 'Fall & Halloween',
    description: 'Spooky counting, patterning, and fine motor works perfect for October shelves.',
    color: '#F5EDE0',
  },
  {
    title: "Valentine's Day",
    description: 'Sweet phonics and word building works to celebrate February in the classroom.',
    color: '#F5EDE0',
  },
  {
    title: 'Spring',
    description: 'Fresh flower matching, language works, and crafts to welcome the new season.',
    color: '#F5EDE0',
  },
  {
    title: 'Winter',
    description: 'Cosy sequencing, storytelling, and hands-on works for the winter months.',
    color: '#F5EDE0',
  },
  {
    title: "St. Patrick's Day",
    description: 'Lucky maths and fun seasonal worksheets to bring a little green to your shelf.',
    color: '#F5EDE0',
  },
  {
    title: 'Easy Crafts',
    description: 'Simple, mess-friendly crafts kiddos love — no fancy supplies required.',
    color: '#F5EDE0',
  },
]

function Ideas() {
  return (
    <div>
      <section className="page-hero">
        <h2>Work Ideas</h2>
        <p>Seasonal themes and work inspiration from Kerri's classroom.</p>
      </section>
      <section className="products">
        <div className="products-grid">
          {THEMES.map((theme) => (
            <div key={theme.title} className="idea-theme-card">
              <div className="idea-theme-image" />
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
        <p className="ideas-coming-soon">✨ Full guides coming soon!</p>
      </section>
    </div>
  )
}

export default Ideas
