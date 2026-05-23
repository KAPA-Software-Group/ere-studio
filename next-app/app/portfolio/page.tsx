import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ProjectMedia } from "@/components/ui/project-media"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Selected Work | ERE Studio",
  description:
    "Selected interior and spatial projects by ERE Studio, 2021-2025, across Paris, Toronto, Miami, and the Istrian coast.",
}

const layoutSlots = [1, 2, 3, 4] as const

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Selected Work / 2021-2025"
        title="Four rooms, four climates, one working standard."
        copy="The studio releases a small archive each year. The work shown is the work we would walk a client through in person: residences, restaurants, seasonal houses, held to the same drafting standard."
      />

      <section className="section-block">
        <div className="section-inner">
          <div className="portfolio-archive">
            {projects.map((project, index) => {
              const slot = layoutSlots[index] ?? 1
              const shape = slot === 1 || slot === 4 ? "wide" : "tall"
              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`archive-item archive-item-${slot} reveal reveal-delay-${(index % 4) + 1}`}
                >
                  <ProjectMedia
                    src={project.hero.src}
                    alt={project.hero.alt}
                    shape={shape}
                  />
                  <div className="archive-title-row">
                    <h3>{project.title}</h3>
                    <span className="archive-year">{project.year}</span>
                  </div>
                  <dl className="archive-meta">
                    <div>
                      <strong>Location</strong>
                      <span>{project.location}</span>
                    </div>
                    <div>
                      <strong>Type</strong>
                      <span>{project.type}</span>
                    </div>
                    <div>
                      <strong>Scope</strong>
                      <span>{project.scope}</span>
                    </div>
                  </dl>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="section-inner footer-cta-inner reveal">
          <p className="section-label">Working together</p>
          <h2>
            The next archive opens in early 2026. Three project slots remain.
          </h2>
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}
