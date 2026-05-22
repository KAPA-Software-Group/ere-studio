import { PlaceholderVisual } from "@/components/ui/placeholder-visual"

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
            Placeholder structure shell matching the reference project root
            layout. The full working site lives in the `next-app` directory.
          </p>
        </div>

        <PlaceholderVisual />
      </div>
    </section>
  )
}
