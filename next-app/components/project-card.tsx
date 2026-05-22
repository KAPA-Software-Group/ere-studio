import Link from "next/link"
import type { Project } from "@/lib/projects"
import { PlaceholderVisual } from "@/components/placeholder-visual"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card">
      <PlaceholderVisual
        label={`${project.title} visual placeholder`}
        mood={project.mood}
        size="portrait"
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
