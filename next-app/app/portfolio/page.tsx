import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ProjectCard } from "@/components/project-card"
import { RevealObserver } from "@/components/reveal-observer"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Portfolio | ERE Studio",
  description: "Placeholder portfolio structure for ERE Studio.",
}

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Portfolio"
        title="Project archive framework."
        copy="A base grid for selected interiors and spatial concepts. Real photography, copy, and project notes can be layered in later."
      />

      <section className="section-block">
        <div className="section-inner">
          <div className="portfolio-grid">
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
    </main>
  )
}
