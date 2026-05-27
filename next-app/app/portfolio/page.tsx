import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Project Portfolio | ERE Studio",
  description:
    "Project portfolio by ERE Studio, 2021-2025, across residences, commercial spaces, renovation, and hybrid interiors.",
}

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-page">
      <RevealObserver />

      <section className="portfolio-editorial-hero">
        <h1 className="reveal">Project Portfolio</h1>
      </section>

      <section className="portfolio-editorial-section">
        <div className="portfolio-editorial-grid">
          {projects.map((project, index) => {
            const isTextFirst = index % 2 === 1
            return (
              <article
                key={project.slug}
                className={`portfolio-editorial-pair portfolio-editorial-pair-${index + 1}`}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={`portfolio-photo-card reveal reveal-delay-${(index % 4) + 1}`}
                >
                  <Image
                    src={project.hero.src}
                    alt={project.hero.alt}
                    fill
                    sizes="(min-width: 900px) 42vw, 92vw"
                  />
                </Link>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={`portfolio-story-card reveal reveal-delay-${((index + 1) % 4) + 1} ${
                    isTextFirst ? "portfolio-story-first" : ""
                  }`}
                >
                  <p className="portfolio-story-meta">
                    {project.location} / {project.year}
                  </p>
                  <h2>{project.title}</h2>
                  <div className="portfolio-story-image">
                    <Image
                      src={project.gallery[0]?.src ?? project.hero.src}
                      alt={project.gallery[0]?.alt ?? project.hero.alt}
                      fill
                      sizes="(min-width: 900px) 18vw, 70vw"
                    />
                  </div>
                  <p>{project.intro}</p>
                  <span>View Project</span>
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
