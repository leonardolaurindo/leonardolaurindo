import { notFound } from 'next/navigation'
import { projects } from '@/config/portfolio'
import { ProjectDetail } from '@/components/project-detail'
import { generateProjectMetadata } from '@/config/metadata/helpers'

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

  return generateProjectMetadata(
    project.title,
    project.description,
    project.id,
    {
      image: project.images[0].src.startsWith('http')
        ? project.images[0].src
        : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://leonardolaurindo.com.br'}${project.images[0].src}`,
      year: project.metadata.year,
      category: project.metadata.category,
      technologies: project.technologies.map((t) => t.name),
      keywords: [
        project.metadata.category,
        'projeto desenvolvimento web',
        'case study',
        'portfolio desenvolvedor',
      ],
    },
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
