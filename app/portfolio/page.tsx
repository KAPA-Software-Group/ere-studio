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
  "parisian-suite": "/portfolio/ps-1.jpg",
  "midtown-hideaway": "/portfolio/mh-1.jpg",
  "little-orange": "/portfolio/nlo-1.jpg",
  "mediterranean-escape": "/portfolio/me-1.jpg",
}

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-page">
      <RevealObserver />

      <section className="projects-index">
        <div className="section-inner">
          <header className="projects-index-head reveal">
            <h1>Projects</h1>
          </header>

          <div className="projects-index-grid stagger">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="project-tile"
              >
                <div className="project-tile-media">
                  <Image
                    src={covers[project.slug] ?? project.hero.src}
                    alt={project.hero.alt}
                    fill
                    sizes="(min-width: 980px) 31vw, (min-width: 620px) 46vw, 92vw"
                    className="project-tile-img"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </div>
                <h2 className="project-tile-title">{project.title}</h2>
              </Link>
            ))}

            <div className="project-tile project-tile-soon">
              <div className="project-tile-media project-tile-media-soon">
                <span>More coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
