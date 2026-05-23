export function HeroSection() {
  return (
    <section className="section">
      <div className="section-inner hero-grid">
        <div>
          <p className="section-label">ERE Studio</p>
          <h1 className="hero-title">
            Interior and spatial design for expressive, functional spaces.
          </h1>
          <p className="hero-sub">
            A focused interior practice for residences, hospitality rooms, and
            hybrid spaces that need proportion, material clarity, and a strong
            working brief.
          </p>
        </div>

        <figure className="studio-visual">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="Pale interior with tall windows, quiet plaster walls, and warm timber flooring."
          />
        </figure>
      </div>
    </section>
  )
}
