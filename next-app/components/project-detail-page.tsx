import Link from "next/link"
import type { Project } from "@/lib/projects"
import { PlaceholderVisual } from "@/components/ui/placeholder-visual"

type ProjectDetailPageProps = {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="page-shell">
      <section className="project-hero">
        <div className="section-inner project-hero-grid">
          <div className="project-hero-copy">
            <Link href="/portfolio" className="text-link">
              Back to portfolio
            </Link>
            <h1 className="page-title">{project.title}</h1>
            <dl className="project-meta">
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
            </dl>
          </div>
          <PlaceholderVisual
            label={`${project.title} hero placeholder`}
            mood={project.mood}
            size="wide"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner split-editorial">
          <p className="section-label">Project Overview</p>
          <div className="editorial-copy">
            <h2>Placeholder overview for spatial intent and atmosphere.</h2>
            <p>
              This area will hold the project summary, client goals, key spatial
              moves, and the editorial story once final copy and photography are
              ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="section-inner two-column-copy">
          <article>
            <span className="number-label">01</span>
            <h2>Design Brief</h2>
            <p>
              Placeholder brief content describing the original context,
              functional needs, spatial constraints, and desired emotional
              direction.
            </p>
          </article>
          <article>
            <span className="number-label">02</span>
            <h2>Design Approach</h2>
            <p>
              Placeholder approach content outlining material direction, layout
              strategy, atmosphere, and how the studio shaped the experience.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="section-heading-row">
            <p className="section-label">Gallery</p>
            <h2>Image grid placeholder</h2>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PlaceholderVisual
                key={item}
                label={`Gallery placeholder ${item}`}
                mood={project.mood}
                size={item % 3 === 0 ? "wide" : "square"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="section-inner footer-cta-inner">
          <p className="section-label">Start a Project</p>
          <h2>Have a space with a similar level of intent?</h2>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}
