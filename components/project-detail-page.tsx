import Image from "next/image"
import Link from "next/link"
import { RevealObserver } from "@/components/reveal-observer"
import { type Project } from "@/lib/projects"

type ProjectDetailPageProps = {
  project: Project
}

// Ordered project photographs shown on each detail page.
const detailImages: Record<string, string[]> = {
  "parisian-suite": Array.from(
    { length: 10 },
    (_, i) => `/portfolio/parisian-suite/img-${i + 1}.jpg`,
  ),
  "midtown-hideaway": Array.from(
    { length: 7 },
    (_, i) => `/portfolio/midtown-hideaway/img-${i + 1}.jpg`,
  ),
  "little-orange": [
    "/portfolio/little-orange/img-1.jpg",
    "/portfolio/little-orange/img-2.jpg",
    "/portfolio/little-orange/img-3.jpg",
    "/portfolio/little-orange/img-4.png",
  ],
  "mediterranean-escape": Array.from(
    { length: 7 },
    (_, i) => `/portfolio/mediterranean-escape/img-${i + 1}.jpg`,
  ),
}

const dev = process.env.NODE_ENV === "development"

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const custom = detailImages[project.slug]
  const heroSrc = custom?.[0] ?? project.hero.src
  const galleryImages = custom
    ? custom.slice(1)
    : project.gallery.map((g) => g.src)

  return (
    <main className="page-shell project-detail">
      <RevealObserver />

      {/* Hero image first */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-frame">
          <Image
            src={heroSrc}
            alt={project.hero.alt}
            fill
            priority
            sizes="100vw"
            className="project-detail-hero-img"
            unoptimized={dev}
          />
        </div>
      </section>

      {/* Title + meta + lead, underneath the hero */}
      <section className="project-detail-head">
        <div className="section-inner">
          <div className="project-detail-head-grid">
            <h1 className="project-detail-title reveal">{project.title}</h1>
            <dl className="project-detail-meta reveal reveal-delay-1">
              <div>
                <dt>Date</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
            </dl>
          </div>
          <p className="project-detail-lead reveal reveal-delay-2">
            {project.intro}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-detail-gallery">
        <div className="section-inner">
          <div className="project-detail-gallery-grid stagger">
            {galleryImages.map((src, i) => {
              const full =
                i === galleryImages.length - 1 && galleryImages.length % 2 === 1
              return (
                <figure
                  key={src}
                  className={`project-detail-figure${
                    full ? " project-detail-figure-full" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title}, image ${i + 2}`}
                    fill
                    sizes={full ? "100vw" : "(min-width: 760px) 48vw, 100vw"}
                    className="project-detail-figure-img"
                    unoptimized={dev}
                  />
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back to all projects */}
      <div className="start-project-cta">
        <Link href="/portfolio" className="start-project-button">
          Go back to all projects
        </Link>
      </div>
    </main>
  )
}
