import Link from "next/link"
import { ProjectMedia } from "@/components/ui/project-media"
import { Parallax } from "@/components/parallax"
import { RevealObserver } from "@/components/reveal-observer"
import { getAdjacentProject, type Project } from "@/lib/projects"

type ProjectDetailPageProps = {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const next = getAdjacentProject(project.slug)

  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="project-hero">
        <div className="section-inner project-hero-grid">
          <div className="project-hero-copy">
            <Link href="/portfolio" className="text-link">
              Selected work
            </Link>
            <p className="section-label reveal">
              {project.type} / {project.year}
            </p>
            <h1 className="page-title reveal reveal-delay-1">
              {project.title}
            </h1>
            <dl className="project-meta reveal reveal-delay-2">
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{project.scope}</dd>
              </div>
              <div>
                <dt>Materials</dt>
                <dd>{project.materials}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Collaborator</dt>
                <dd>{project.collaborator}</dd>
              </div>
            </dl>
          </div>
          <div className="reveal reveal-delay-2">
            <Parallax amount={0.05}>
              <ProjectMedia
                src={project.hero.src}
                alt={project.hero.alt}
                shape="tall"
                priority
                sizes="(min-width: 1080px) 56vw, 100vw"
              />
            </Parallax>
          </div>
        </div>
      </section>

      <section className="project-intro">
        <div className="section-inner project-intro-grid">
          <h2 className="reveal">{project.intro}</h2>
          <div className="project-intro-body reveal reveal-delay-1">
            <article>
              <p className="intro-eyebrow">01 / Brief</p>
              <p>{project.brief}</p>
            </article>
            <article>
              <p className="intro-eyebrow">02 / Approach</p>
              <p>{project.approach}</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner cine-gallery">
          {project.gallery.map((image, index) => (
            <div key={image.src} className={`reveal reveal-delay-${index + 1}`}>
              <ProjectMedia
                src={image.src}
                alt={image.alt}
                shape={
                  index === 0 ? "wide" : index === 1 ? "tall" : "panoramic"
                }
                caption={image.alt}
                sizes={
                  index === 2 ? "100vw" : "(min-width: 1080px) 50vw, 100vw"
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="pullquote">
        <blockquote className="reveal">
          {project.pullquote}
          <cite>{project.collaborator}</cite>
        </blockquote>
      </section>

      <section className="next-project">
        <div className="section-inner">
          <Link
            href={`/portfolio/${next.slug}`}
            className="next-project-link reveal"
          >
            <div>
              <p className="next-project-label">Next project</p>
              <h2 className="next-project-title">
                {next.title}
                <span className="next-project-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </h2>
            </div>
            <ProjectMedia
              src={next.hero.src}
              alt={next.hero.alt}
              shape="wide"
              sizes="(min-width: 1080px) 40vw, 100vw"
            />
          </Link>
        </div>
      </section>

      <section className="footer-cta">
        <div className="section-inner footer-cta-inner reveal">
          <p className="section-label">Working together</p>
          <h2>Have a space with a similar level of intent?</h2>
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}
