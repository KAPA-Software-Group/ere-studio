import Link from "next/link"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectMedia } from "@/components/ui/project-media"
import { Parallax } from "@/components/parallax"
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

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const custom = detailImages[project.slug]
  const heroSrc = custom?.[0] ?? project.hero.src
  const gallery = custom
    ? custom.slice(1).map((src, i) => ({
        src,
        alt: `${project.title}, image ${i + 2}`,
      }))
    : project.gallery

  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="project-hero">
        <div className="section-inner project-hero-grid">
          <div className="project-hero-copy">
            <p className="section-label reveal">
              {project.type} / {project.year}
            </p>
            <h1
              className={`page-title reveal reveal-delay-1${
                project.slug === "mediterranean-escape"
                  ? " page-title-compact"
                  : ""
              }`}
            >
              {project.title}
            </h1>
            <dl className="project-meta reveal reveal-delay-2">
              <div>
                <dt>Project</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{project.scope}</dd>
              </div>
            </dl>
            <p className="project-lead reveal reveal-delay-3">{project.intro}</p>
          </div>
          <div className="reveal reveal-delay-2">
            <Parallax amount={0.05}>
              <div className="project-hero-media">
                <ProjectMedia
                  src={heroSrc}
                  alt={project.hero.alt}
                  shape="tall"
                  priority
                  sizes="(min-width: 1080px) 56vw, 100vw"
                />
                <Link href="/portfolio" className="project-others-button">
                  See our other projects
                </Link>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="project-gallery-section">
        <ProjectGallery images={gallery} />
      </section>
    </main>
  )
}
