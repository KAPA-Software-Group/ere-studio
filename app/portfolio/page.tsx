import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Project Portfolio | ère studio",
  description:
    "Project portfolio by ère studio, 2021-2025, across residences, commercial spaces, renovation, and hybrid interiors.",
}

// Landscape cover photograph per project (the studio's own imagery).
const covers: Record<string, string> = {
  "parisian-suite": "/portfolio/parisian-suite-cover.jpg",
  "midtown-hideaway": "/portfolio/midtown-hideaway-cover.jpg",
  "little-orange": "/portfolio/little-orange-cover-cropped.jpg",
  "mediterranean-escape": "/portfolio/me-1.jpg",
}

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-page">
      <RevealObserver />

      <section className="projects-index">
        <div className="section-inner">
          <header className="projects-index-head">
            <h1>Portfolio</h1>
            <p>
              Selected interiors across residences, hospitality, renovation,
              and hybrid spaces. Each project is shaped around atmosphere,
              proportion, and the way a room is meant to be lived in.
            </p>
          </header>

          <div className="projects-index-list">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="project-feature"
              >
                <div className="project-feature-media">
                  <Image
                    src={covers[project.slug] ?? project.hero.src}
                    alt={project.hero.alt}
                    fill
                    sizes="(min-width: 1120px) 1040px, 92vw"
                    className="project-feature-img"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </div>
                <div className="project-feature-card">
                  <h2>{project.title}</h2>
                  <p>{project.intro}</p>
                </div>
                <span className="project-feature-action">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
