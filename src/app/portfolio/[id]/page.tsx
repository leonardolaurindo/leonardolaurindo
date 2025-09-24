import { notFound } from 'next/navigation'
import { projects } from '@/config/portfolio'
import { ProjectDetail } from '@/components/project-detail'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    }
  }

  return {
    title: `${project.title} - ${project.subtitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.subtitle}`,
      description: project.description,
      images: [project.images[0].src],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
