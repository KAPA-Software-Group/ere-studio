type PageHeroProps = {
  eyebrow: string
  title: string
  copy: string
}

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-inner page-hero-grid">
        <div>
          <p className="section-label">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
        </div>
        <p className="page-copy">{copy}</p>
      </div>
    </section>
  )
}
