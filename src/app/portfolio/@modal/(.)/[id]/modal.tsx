'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Project } from '@/config/portfolio'
import { ProjectDetail } from '@/components/project-detail'

interface ModalProps {
  project: Project
}

export function Modal({ project }: ModalProps) {
  const router = useRouter()

  useEffect(() => {
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden'

    // Handle ESC key to close modal
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.back()
      }
    }

    document.addEventListener('keydown', handleEscKey)

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [router])

  const handleClose = () => {
    router.back()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/* Modal ocupa toda a tela - sem margens */}
      <div
        className="fixed inset-0 bg-background overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo com botão close */}
        <div className="flex-shrink-0 flex justify-end p-4 bg-background/95 backdrop-blur-sm border-b z-10">
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-muted/80 hover:bg-muted border text-muted-foreground hover:text-foreground transition-all duration-200"
            aria-label="Fechar modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content scrollable - ocupando o restante da tela */}
        <div className="flex-1 overflow-y-auto">
          <ProjectDetail project={project} isModal={true} />
        </div>
      </div>
    </div>
  )
}
