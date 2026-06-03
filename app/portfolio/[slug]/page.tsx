import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetailPage } from "@/components/project-detail-page"
import { getProject, projects } from "@/lib/projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "Project | ERE Studio",
    }
  }

  return {
    title: `${project.title} | ERE Studio`,
    description: `${project.title}, a ${project.type.toLowerCase()} project by ERE Studio in ${project.location}.`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
