import { notFound } from 'next/navigation'
import { projects } from '@/config/portfolio'
import { Modal } from './modal'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function InterceptedProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <Modal project={project} />
}
