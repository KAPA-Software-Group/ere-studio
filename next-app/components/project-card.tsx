import Link from "next/link"
import type { Project } from "@/lib/projects"
import { ProjectMedia } from "@/components/ui/project-media"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card">
      <ProjectMedia
        src={project.hero.src}
        alt={project.hero.alt}
        shape="portrait"
        sizes="(min-width: 1080px) 25vw, 100vw"
      />
      <div className="project-card-content">
        <span className="project-index">{project.year}</span>
        <h3>{project.title}</h3>
        <p>
          {project.location} / {project.type}
        </p>
      </div>
    </Link>
  )
}
