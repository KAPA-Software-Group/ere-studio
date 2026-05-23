import Link from "next/link"
import { ProjectMedia } from "@/components/ui/project-media"
import { Parallax } from "@/components/parallax"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

const services = [
  {
    title: "Residential Interiors",
    copy: "Private rooms planned around routine, storage, light, and the pieces that deserve to stay.",
  },
  {
    title: "Hospitality & Commercial Spaces",
    copy: "Guest-facing interiors with durable details, clean circulation, and a strong memory of place.",
  },
  {
    title: "Hybrid Spaces",
    copy: "Homes, salons, workrooms, and retail settings that need to shift use without losing character.",
  },
  {
    title: "Renovation + Restoration",
    copy: "Existing buildings edited with care for proportion, inherited material, and modern use.",
  },
]

const processSteps = [
  "Discovery",
  "Concept Direction",
  "Design Development",
  "Execution Support",
]

const featuredLayout = [1, 2, 3, 4] as const

export default function Home() {
  const heroProject = projects[0]
  const heroSecondary = projects[1]
  const heroTertiary = projects[2]
  const featured = projects.slice(0, 4)

  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="home-hero">
        <div className="section-inner home-hero-frame">
          <p className="hero-wordmark reveal" aria-label="ERE Studio">
            ERE
            <span>Studio</span>
          </p>

          <div className="hero-minimal-copy reveal reveal-delay-1">
            <p>Interior / Spatial Design</p>
            <h1>Rooms with memory.</h1>
          </div>

          <Link
            href={`/portfolio/${heroProject.slug}`}
            className="hero-primary-image reveal reveal-delay-1"
            aria-label={`View ${heroProject.title}`}
          >
            <Parallax amount={0.035}>
              <ProjectMedia
                src={heroProject.hero.src}
                alt={heroProject.hero.alt}
                shape="wide"
                priority
                sizes="(min-width: 1080px) 72vw, 100vw"
              />
            </Parallax>
          </Link>

          <Link
            href={`/portfolio/${heroSecondary.slug}`}
            className="hero-side-image hero-side-one reveal reveal-delay-2"
            aria-label={`View ${heroSecondary.title}`}
          >
            <ProjectMedia
              src={heroSecondary.hero.src}
              alt={heroSecondary.hero.alt}
              shape="tall"
              sizes="(min-width: 1080px) 24vw, 70vw"
            />
          </Link>

          <Link
            href={`/portfolio/${heroTertiary.slug}`}
            className="hero-side-image hero-side-two reveal reveal-delay-3"
            aria-label={`View ${heroTertiary.title}`}
          >
            <ProjectMedia
              src={heroTertiary.hero.src}
              alt={heroTertiary.hero.alt}
              shape="square"
              sizes="(min-width: 1080px) 18vw, 46vw"
            />
          </Link>

          <p className="hero-project-note reveal reveal-delay-3">
            Paris / Toronto / Miami / Bale
          </p>

          <div className="hero-actions hero-minimal-actions reveal reveal-delay-3">
            <Link href="/portfolio" className="btn-primary">
              Portfolio
            </Link>
            <Link href="/contact" className="btn-ghost">
              Inquire
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="section-heading-row">
            <p className="section-label reveal">Selected Work / 2021-2025</p>
            <h2 className="reveal reveal-delay-1 draw-line">
              Four projects across four cities, each composed around a single
              material gesture.
            </h2>
          </div>

          <div className="featured-grid">
            {featured.map((project, index) => {
              const slot = featuredLayout[index]
              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`featured-item featured-link featured-item-${slot} reveal reveal-delay-${index + 1}`}
                >
                  <ProjectMedia
                    src={project.hero.src}
                    alt={project.hero.alt}
                    shape={slot === 1 || slot === 4 ? "wide" : "tall"}
                  />
                  <div>
                    <h3>{project.title}</h3>
                    <div className="featured-item-meta">
                      <span>{project.year}</span>
                      <span className="sep" aria-hidden="true">
                        /
                      </span>
                      <span>{project.type}</span>
                      <span className="sep" aria-hidden="true">
                        /
                      </span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="editorial-pull">
        <div className="section-inner editorial-pull-grid">
          <h2 className="reveal">
            We work the way a museum hangs a single painting: choose the wall,
            then live with it for a season.
          </h2>
          <div className="editorial-pull-body reveal reveal-delay-1">
            <p>
              ERE Studio composes interiors for clients who treat their spaces
              as long projects, not transactions. The practice is small by
              choice. We take on four to six projects a year and accompany each
              from first walk-through through final commissioning.
            </p>
            <p>
              The work tends toward limewashed plaster and warm joinery, but
              there is no signature material. Every project begins by listening
              to the building.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <h2 className="display-callout reveal">
            Four directions, <span className="hero-accent">one studio.</span>
          </h2>
          <div className="service-preview-grid stagger">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href="/services"
                className="service-card"
              >
                <span className="number-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="section-inner">
          <h2 className="display-callout reveal">
            A measured path from first walk-through to{" "}
            <span className="hero-accent">commissioning.</span>
          </h2>
          <div className="process-strip stagger">
            {processSteps.map((step, index) => (
              <article key={step} className="process-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="section-inner footer-cta-inner reveal">
          <p className="section-label">Start a project</p>
          <h2>Working on a residence, a small hotel, or a hybrid space?</h2>
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}
