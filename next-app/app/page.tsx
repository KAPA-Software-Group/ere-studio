import Link from "next/link"
import { PlaceholderVisual } from "@/components/placeholder-visual"
import { ProjectCard } from "@/components/project-card"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

const services = [
  "Residential Interiors",
  "Hospitality & Commercial Spaces",
  "Hybrid Spaces",
  "Renovation + Restoration",
]

const processSteps = [
  "Discovery",
  "Concept Direction",
  "Design Development",
  "Execution Support",
]

export default function Home() {
  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="home-hero">
        <div className="section-inner home-hero-grid">
          <div className="hero-copy">
            <p className="section-label reveal">ERE Studio</p>
            <h1 className="hero-title reveal reveal-delay-1">
              Interior and spatial design for expressive, functional spaces.
            </h1>
            <p className="hero-sub reveal reveal-delay-2">
              Placeholder introduction for a studio practice shaped around
              calm composition, material sensitivity, and spaces with a clear
              point of view.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <Link href="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="btn-ghost">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="hero-visual-wrap reveal reveal-delay-2">
            <PlaceholderVisual label="Hero visual placeholder" size="wide" />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="section-heading-row">
            <p className="section-label reveal">Featured Projects</p>
            <h2 className="reveal reveal-delay-1">
              Selected placeholders for review.
            </h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`reveal reveal-delay-${index + 1}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block editorial-section">
        <div className="section-inner split-editorial">
          <p className="section-label reveal">Studio Positioning</p>
          <div className="editorial-copy reveal reveal-delay-1">
            <h2>
              A placeholder philosophy for interiors that balance restraint,
              warmth, and useful spatial drama.
            </h2>
            <p>
              This editorial section will later introduce the studio point of
              view, design values, and the type of client experience ERE Studio
              creates across residential, hospitality, commercial, and hybrid
              spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="section-heading-row">
            <p className="section-label reveal">Services Preview</p>
            <h2 className="reveal reveal-delay-1">Core design directions.</h2>
          </div>
          <div className="service-preview-grid">
            {services.map((service, index) => (
              <Link
                key={service}
                href="/services"
                className={`service-card reveal reveal-delay-${index + 1}`}
              >
                <span className="number-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service}</h3>
                <p>
                  Placeholder copy for scope, deliverables, and the studio
                  approach to this service category.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="section-inner">
          <div className="section-heading-row">
            <p className="section-label reveal">Process Preview</p>
            <h2 className="reveal reveal-delay-1">A measured path from idea to space.</h2>
          </div>
          <div className="process-strip">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className={`process-step reveal reveal-delay-${index + 1}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="section-inner footer-cta-inner reveal">
          <p className="section-label">Start a Project</p>
          <h2>Placeholder call-to-action for new interiors and spatial work.</h2>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}
